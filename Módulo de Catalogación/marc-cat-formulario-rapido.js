/**
 * Formulario rápido: un campo por pantalla para un libro impreso.
 * El borrador vive en localStorage. Al terminar, el registro entra en la sesión
 * y el texto =LDR usa marc-cat-texto-plano.js (mismo binario que el convertidor).
 */
(function () {
    "use strict";

    var QF_KEY = "marcCatQuickFormDraft-v1";
    var QF_STEPS = [
        { tag: "LDR", kind: "leader", required: true, name: "Leader" },
        { tag: "001", kind: "control", required: true },
        { tag: "003", kind: "control", required: true },
        { tag: "008", kind: "fixed", required: true },
        { tag: "020", kind: "var", optional: true, repeatable: true },
        { tag: "040", kind: "var", required: true },
        { tag: "100", kind: "var", optional: true },
        { tag: "245", kind: "var", required: true },
        { tag: "246", kind: "var", optional: true },
        { tag: "250", kind: "var", optional: true },
        { tag: "264", kind: "var", required: true },
        { tag: "300", kind: "var", required: true },
        { tag: "490", kind: "var", optional: true },
        { tag: "500", kind: "var", optional: true, repeatable: true },
        { tag: "505", kind: "var", optional: true },
        { tag: "520", kind: "var", optional: true },
        { tag: "541", kind: "var", optional: true, repeatable: true },
        { tag: "650", kind: "var", optional: true, repeatable: true },
        { tag: "700", kind: "var", optional: true, repeatable: true },
        { tag: "REV", kind: "review" }
    ];

    var state = null;
    var saveTimer = null;

    function qfPad(value, len) {
        var s = String(value == null ? "" : value);
        if (s.length > len) return s.slice(0, len);
        return s + new Array(len - s.length + 1).join(" ");
    }

    function qfSpaces(n) {
        return new Array(n + 1).join(" ");
    }

    function qfTodayYyMmDd() {
        var d = new Date();
        var y = String(d.getFullYear()).slice(-2);
        var m = String(d.getMonth() + 1);
        var day = String(d.getDate());
        if (m.length < 2) m = "0" + m;
        if (day.length < 2) day = "0" + day;
        return y + m + day;
    }

    function qfDefault008() {
        var chars = qfSpaces(40).split("");
        var stamp = qfTodayYyMmDd();
        for (var i = 0; i < 6; i++) chars[i] = stamp.charAt(i);
        chars[6] = "s";
        return chars.join("");
    }

    function qfDefaultLeader() {
        var s = typeof marcCatDefaultLeader24 === "function" ? marcCatDefaultLeader24() : "00000nam a2200000   4500";
        return qfPad(s, 24);
    }

    function qfFreshState(recordId) {
        return {
            v: 1,
            active: true,
            step: 0,
            occ: 0,
            recordId: recordId || "",
            leader: qfDefaultLeader(),
            fixed008: qfDefault008(),
            controls: { "001": "", "003": "" },
            fields: {}
        };
    }

    function qfReadDraft() {
        try {
            var raw = localStorage.getItem(QF_KEY);
            if (!raw) return null;
            var data = JSON.parse(raw);
            if (!data || data.v !== 1) return null;
            return data;
        } catch (e) {
            return null;
        }
    }

    function qfWriteDraft() {
        if (!state) return;
        try {
            localStorage.setItem(QF_KEY, JSON.stringify(state));
        } catch (e) { /* ignore */ }
    }

    function qfStep() {
        var i = state && isFinite(state.step) ? state.step : 0;
        if (i < 0) i = 0;
        if (i >= QF_STEPS.length) i = QF_STEPS.length - 1;
        return QF_STEPS[i];
    }

    function qfFindRecord(id) {
        var want = id || (state && state.recordId);
        var list = (typeof marcCatSession !== "undefined" && marcCatSession.records) || [];
        for (var i = 0; i < list.length; i++) {
            if (list[i] && list[i].id === want) return list[i];
        }
        return null;
    }

    function qfStepName(step) {
        if (step.name) return step.name;
        if (typeof marcFieldShortName === "function") {
            return marcFieldShortName(step.tag, { noTruncate: true });
        }
        if (typeof marcFieldMeta === "function") {
            var meta = marcFieldMeta(step.tag);
            return (meta && meta.nombre_generico) || step.tag;
        }
        return step.tag;
    }

    function qfEsc(s) {
        return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
        });
    }

    function qfIndKeys(map) {
        var keys = Object.keys(map || {});
        if (keys.indexOf(" ") !== -1) keys = keys.filter(function (k) { return k !== "#"; });
        if (!keys.length) keys = [" "];
        keys.sort(function (a, b) {
            if (a === " ") return -1;
            if (b === " ") return 1;
            return a < b ? -1 : a > b ? 1 : 0;
        });
        return keys;
    }

    function qfIndLabel(key, desc) {
        var shown = key === " " ? (typeof marcCatGetLang === "function" && marcCatGetLang() === "en" ? "(space)" : "(espacio)") : key;
        var d = String(desc || "").trim();
        if (key !== " " && key !== "#") {
            var re = new RegExp("^" + String(key).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(\\s*[-—:])?\\s*");
            if (re.test(d)) d = d.replace(re, "").trim();
        }
        return d ? (shown + " — " + d) : shown;
    }

    function qfIndIsUndefinedDesc(desc) {
        var d = String(desc || "").trim();
        return !d || /^indefinido$/i.test(d) || /^no definido$/i.test(d) || /^undefined$/i.test(d);
    }

    /** True si el indicador no ofrece opciones reales (solo espacio/Indefinido). */
    function qfIndIsOnlyUndefined(map) {
        var keys = Object.keys(map || {});
        if (!keys.length) return true;
        return keys.every(function (k) {
            return (k === " " || k === "#") && qfIndIsUndefinedDesc(map[k]);
        });
    }

    /** Enter no inserta salto de línea: avanza al siguiente control o a Siguiente. */
    function qfPlainValue(value) {
        return String(value == null ? "" : value).replace(/[\r\n]+/g, " ").replace(/[ \t]{2,}/g, " ");
    }

    function qfWireNoNewlineAdvance(el) {
        if (!el || el.dataset.qfEnterWired === "1") return;
        el.dataset.qfEnterWired = "1";
        el.addEventListener("keydown", function (e) {
            if (e.key !== "Enter" || e.shiftKey || e.ctrlKey || e.altKey || e.metaKey) return;
            if (e.isComposing) return;
            e.preventDefault();
            qfAdvanceFrom(el);
        });
        if (el.tagName === "TEXTAREA") {
            el.addEventListener("input", function () {
                var cleaned = qfPlainValue(el.value);
                if (cleaned === el.value) return;
                var start = el.selectionStart;
                el.value = cleaned;
                try {
                    el.setSelectionRange(start, start);
                } catch (err) { /* ignore */ }
            });
            el.addEventListener("paste", function (e) {
                var text = "";
                try {
                    text = (e.clipboardData || window.clipboardData).getData("text") || "";
                } catch (err) {
                    return;
                }
                if (!/[\r\n]/.test(text)) return;
                e.preventDefault();
                var plain = qfPlainValue(text);
                var start = el.selectionStart || 0;
                var end = el.selectionEnd || 0;
                el.value = el.value.slice(0, start) + plain + el.value.slice(end);
                var pos = start + plain.length;
                try {
                    el.setSelectionRange(pos, pos);
                } catch (err2) { /* ignore */ }
                el.dispatchEvent(new Event("input", { bubbles: true }));
            });
        }
    }

    function qfFocusables(root) {
        if (!root) return [];
        return Array.prototype.slice.call(
            root.querySelectorAll("input:not([type='hidden']):not([disabled]), textarea:not([disabled]):not([readonly]), select:not([disabled])")
        ).filter(function (node) {
            return !node.closest(".qf-add-sub");
        });
    }

    function qfAdvanceFrom(el) {
        var body = document.getElementById("qf-body");
        var list = qfFocusables(body);
        var idx = list.indexOf(el);
        if (idx >= 0 && idx < list.length - 1) {
            list[idx + 1].focus();
            return;
        }
        var step = qfStep();
        if (step && step.kind === "review") return;
        qfNext();
    }

    function qfHasFilled100() {
        var list = state.fields["100"];
        if (!list || !list.length) return false;
        return list.some(function (occ) {
            return (occ.subs || []).some(function (s) { return String(s.value || "").trim() !== ""; });
        });
    }

    function qfDefaultInd(tag, which) {
        if (tag === "245" && which === 1) return qfHasFilled100() ? "1" : "0";
        if (tag === "245" && which === 2) return "0";
        if (tag === "264" && which === 1) return " ";
        if (tag === "264" && which === 2) return "1";
        if ((tag === "100" || tag === "700") && which === 1) return "1";
        if (tag === "650" && which === 2) return "0";
        var meta = typeof marcFieldMeta === "function" ? marcFieldMeta(tag) : {};
        var map = which === 1 ? meta.indicador_1 : meta.indicador_2;
        var keys = qfIndKeys(map);
        return keys[0] || " ";
    }

    function qfNewOcc(tag) {
        var codes = typeof marcCatDefaultSubfieldCodesForTag === "function"
            ? marcCatDefaultSubfieldCodesForTag(tag)
            : ["a"];
        return {
            ind1: qfDefaultInd(tag, 1),
            ind2: qfDefaultInd(tag, 2),
            indTouched: false,
            subs: codes.map(function (c) {
                return { code: String(c).charAt(0).toLowerCase(), value: "" };
            })
        };
    }

    function qfOccEmpty(occ) {
        if (!occ) return true;
        return !(occ.subs || []).some(function (s) { return String(s.value || "").trim() !== ""; });
    }

    function qfEnsureOcc(tag) {
        if (!Array.isArray(state.fields[tag])) state.fields[tag] = [qfNewOcc(tag)];
        if (!state.fields[tag][state.occ]) state.fields[tag][state.occ] = qfNewOcc(tag);
        var occ = state.fields[tag][state.occ];
        if (tag === "245" && !occ.indTouched) occ.ind1 = qfHasFilled100() ? "1" : "0";
        return occ;
    }

    function qfCodeToStored(code, len) {
        var s = String(code == null ? "" : code).replace(/#/g, " ").replace(/\\/g, " ");
        return qfPad(s, len);
    }

    function qfSpecs008() {
        var specs = typeof marcCatGetActiveFieldSpecs === "function" ? marcCatGetActiveFieldSpecs() : (window.marcCatEsFieldSpecs || {});
        var block = specs["008"] || {};
        var books = block.profiles && block.profiles.books ? block.profiles.books : { extension: [], codeTables: {} };
        var segs = (block.common || []).concat(books.extension || []).slice();
        segs.sort(function (a, b) { return a.start - b.start; });
        return { segs: segs, tables: books.codeTables || {}, multi4: block.multi4 || {} };
    }

    function qfLeaderSpecs() {
        if (typeof marcCatGetActiveLeaderSpecs === "function") return marcCatGetActiveLeaderSpecs();
        return window.marcCatEsLeaderSpecs || { editable: [], readOnly: [] };
    }

    function qfSetLeaderPos(pos, len, value) {
        var chars = qfPad(state.leader, 24).split("");
        var stored = qfCodeToStored(value, len);
        for (var i = 0; i < len; i++) chars[pos + i] = stored.charAt(i) || " ";
        state.leader = chars.join("").slice(0, 24);
    }

    function qfSet008Slice(start, len, value) {
        var chars = qfPad(state.fixed008, 40).split("");
        var stored = qfCodeToStored(value, len);
        for (var i = 0; i < len; i++) chars[start + i] = stored.charAt(i) || " ";
        state.fixed008 = chars.join("").slice(0, 40);
    }

    function qfSlice(src, start, len) {
        return qfPad(src, start + len).slice(start, start + len);
    }

    function qfOptionMatches(code, slice) {
        return qfCodeToStored(code, slice.length) === qfCodeToStored(slice, slice.length);
    }

    function qfFillSelect(sel, pairs, slice) {
        var matched = false;
        pairs.forEach(function (pair) {
            var opt = document.createElement("option");
            var rawCode = String(pair[0]);
            opt.value = rawCode;
            var shown = rawCode.replace(/#/g, "").replace(/\s+$/g, "");
            if (!shown) shown = "(espacio)";
            opt.textContent = shown + " — " + pair[1];
            if (!matched && qfOptionMatches(pair[0], slice)) {
                opt.selected = true;
                matched = true;
            }
            sel.appendChild(opt);
        });
        return matched;
    }

    function qfEl(tag, cls, text) {
        var n = document.createElement(tag);
        if (cls) n.className = cls;
        if (text != null) n.textContent = text;
        return n;
    }

    function qfFieldWrap(labelText) {
        var wrap = qfEl("div", "qf-field");
        wrap.appendChild(qfEl("label", null, labelText));
        return wrap;
    }

    function qfRenderLeader(root) {
        var specs = qfLeaderSpecs();
        var grid = qfEl("div", "qf-fixed-grid");
        (specs.editable || []).forEach(function (seg) {
            var pos = parseInt(seg.pos, 10);
            var len = 1;
            var slice = qfSlice(state.leader, pos, len);
            var wrap = qfFieldWrap(seg.label || ("Pos. " + pos));
            var sel = document.createElement("select");
            sel.setAttribute("data-qf-leader", String(pos));
            sel.setAttribute("data-len", String(len));
            var matched = qfFillSelect(sel, seg.options || [], slice);
            if (!matched) {
                var extra = document.createElement("option");
                extra.value = slice;
                extra.textContent = slice;
                extra.selected = true;
                sel.appendChild(extra);
            }
            sel.addEventListener("change", function () {
                qfSetLeaderPos(pos, len, sel.value);
                qfUpdateLeaderPreview();
                qfScheduleSave();
            });
            wrap.appendChild(sel);
            grid.appendChild(wrap);
        });
        root.appendChild(grid);
        var preview = qfEl("pre", "qf-preview");
        preview.id = "qf-leader-preview";
        preview.textContent = qfPad(state.leader, 24);
        root.appendChild(preview);
    }

    function qfUpdateLeaderPreview() {
        var el = document.getElementById("qf-leader-preview");
        if (el) el.textContent = qfPad(state.leader, 24);
    }

    function qfUpdate008Preview() {
        var el = document.getElementById("qf-008-preview");
        if (el) el.textContent = qfPad(state.fixed008, 40);
    }

    function qfRender008(root) {
        var pack = qfSpecs008();
        var grid = qfEl("div", "qf-fixed-grid");
        pack.segs.forEach(function (seg) {
            var start = parseInt(seg.start, 10);
            var len = parseInt(seg.len, 10) || 1;
            var slice = qfSlice(state.fixed008, start, len);
            var wrap = qfFieldWrap((seg.pos || start) + "  " + (seg.name || ""));
            if (seg.kind === "multi4") {
                var row = qfEl("div", "qf-multi4");
                var codes = pack.multi4[seg.multi4Set] || [];
                for (var slot = 0; slot < 4; slot++) {
                    var sel = document.createElement("select");
                    sel.setAttribute("data-qf-008", String(start + slot));
                    sel.setAttribute("data-len", "1");
                    var ch = slice.charAt(slot) || " ";
                    qfFillSelect(sel, codes, ch);
                    sel.addEventListener("change", function (ev) {
                        var node = ev.target;
                        qfSet008Slice(parseInt(node.getAttribute("data-qf-008"), 10), 1, node.value);
                        qfUpdate008Preview();
                        qfScheduleSave();
                    });
                    row.appendChild(sel);
                }
                wrap.appendChild(row);
            } else if (seg.kind === "select" || seg.kind === "select3") {
                var table = pack.tables[String(start)] || [];
                var sel2 = document.createElement("select");
                sel2.setAttribute("data-qf-008", String(start));
                sel2.setAttribute("data-len", String(len));
                var matched = qfFillSelect(sel2, table, slice);
                var other = null;
                if (len >= 3) {
                    other = document.createElement("option");
                    other.value = "__OTHER__";
                    other.textContent = "Otro";
                    sel2.appendChild(other);
                }
                if (!matched) {
                    if (other) other.selected = true;
                    else {
                        var extra = document.createElement("option");
                        extra.value = slice;
                        extra.textContent = slice;
                        extra.selected = true;
                        sel2.appendChild(extra);
                    }
                }
                var otherInput = null;
                if (len >= 3) {
                    otherInput = document.createElement("input");
                    otherInput.type = "text";
                    otherInput.maxLength = len;
                    otherInput.className = "qf-other";
                    otherInput.value = matched ? "" : slice.replace(/\s+$/g, "");
                    otherInput.hidden = !!matched;
                    otherInput.addEventListener("input", function () {
                        qfSet008Slice(start, len, otherInput.value);
                        qfUpdate008Preview();
                        qfScheduleSave();
                    });
                }
                sel2.addEventListener("change", function () {
                    if (sel2.value === "__OTHER__") {
                        if (otherInput) {
                            otherInput.hidden = false;
                            otherInput.focus();
                            qfSet008Slice(start, len, otherInput.value);
                        }
                    } else {
                        if (otherInput) otherInput.hidden = true;
                        qfSet008Slice(start, len, sel2.value);
                    }
                    qfUpdate008Preview();
                    qfScheduleSave();
                });
                wrap.appendChild(sel2);
                if (otherInput) wrap.appendChild(otherInput);
            } else if (seg.kind === "reserved") {
                var locked = document.createElement("input");
                locked.type = "text";
                locked.value = slice;
                locked.readOnly = true;
                wrap.appendChild(locked);
            } else {
                var inp = document.createElement("input");
                inp.type = "text";
                inp.maxLength = len;
                inp.value = slice.replace(/\s+$/g, "");
                inp.setAttribute("data-qf-008", String(start));
                inp.setAttribute("data-len", String(len));
                if (seg.placeholder) inp.placeholder = seg.placeholder;
                inp.addEventListener("input", function () {
                    qfSet008Slice(start, len, inp.value);
                    qfUpdate008Preview();
                    qfScheduleSave();
                });
                wrap.appendChild(inp);
            }
            grid.appendChild(wrap);
        });
        root.appendChild(grid);
        var preview = qfEl("pre", "qf-preview");
        preview.id = "qf-008-preview";
        preview.textContent = qfPad(state.fixed008, 40);
        root.appendChild(preview);
    }

    function qfSubName(tag, code) {
        var name = typeof marcSubfieldMeta === "function" ? marcSubfieldMeta(tag, code) : "";
        return "$" + code + (name ? "  " + name : "");
    }

    function qfRenderVariable(root, step) {
        var occ = qfEnsureOcc(step.tag);
        var meta = typeof marcFieldMeta === "function" ? marcFieldMeta(step.tag) : {};
        var inds = qfEl("div", "qf-inds");
        var shownInds = 0;
        [1, 2].forEach(function (which) {
            var map = which === 1 ? meta.indicador_1 : meta.indicador_2;
            if (qfIndIsOnlyUndefined(map)) {
                if (which === 1) occ.ind1 = " ";
                else occ.ind2 = " ";
                return;
            }
            var wrap = qfFieldWrap("Ind. " + which);
            var sel = document.createElement("select");
            sel.setAttribute("data-qf-ind", String(which));
            var keys = qfIndKeys(map);
            var current = which === 1 ? (occ.ind1 || " ") : (occ.ind2 || " ");
            if (keys.indexOf(current) === -1) keys = keys.concat([current]);
            keys.forEach(function (key) {
                var opt = document.createElement("option");
                opt.value = key;
                opt.textContent = qfIndLabel(key, map ? map[key] : "");
                if (key === current) opt.selected = true;
                sel.appendChild(opt);
            });
            sel.addEventListener("change", function () {
                occ.indTouched = true;
                if (which === 1) occ.ind1 = sel.value;
                else occ.ind2 = sel.value;
                qfScheduleSave();
            });
            qfWireNoNewlineAdvance(sel);
            wrap.appendChild(sel);
            inds.appendChild(wrap);
            shownInds++;
        });
        if (shownInds) {
            inds.classList.toggle("qf-inds-single", shownInds === 1);
            root.appendChild(inds);
        }

        var subs = qfEl("div", "qf-subs");
        var longTag = step.tag === "505" || step.tag === "520" || step.tag === "500" || step.tag === "245";
        (occ.subs || []).forEach(function (sub, idx) {
            var wrap = qfFieldWrap(qfSubName(step.tag, sub.code));
            var area = document.createElement("textarea");
            var is541d = step.tag === "541" && String(sub.code || "").toLowerCase() === "d";
            area.rows = is541d ? 1 : (longTag && sub.code === "a" ? 5 : 2);
            area.value = qfPlainValue(sub.value || "");
            if (area.value !== (sub.value || "")) sub.value = area.value;
            area.setAttribute("data-qf-sub", String(idx));
            if (is541d) {
                area.dataset.marc541d = "1";
                area.placeholder = "Fecha";
            }
            area.addEventListener("input", function () {
                sub.value = qfPlainValue(area.value);
                if (area.value !== sub.value) area.value = sub.value;
                qfScheduleSave();
            });
            qfWireNoNewlineAdvance(area);
            wrap.appendChild(area);
            if (is541d && typeof window.marcCatWire541SubfieldD === "function") {
                window.marcCatWire541SubfieldD(area);
            }
            subs.appendChild(wrap);
        });
        root.appendChild(subs);

        var used = {};
        (occ.subs || []).forEach(function (s) { used[s.code] = 1; });
        var remaining = Object.keys((meta && meta.subcampos) || {}).filter(function (c) { return !used[c]; });
        if (typeof marcCatSortSubfieldCodes === "function") remaining = marcCatSortSubfieldCodes(remaining);
        if (remaining.length) {
            var addRow = qfEl("div", "qf-add-sub");
            addRow.appendChild(qfEl("div", "qf-add-sub-label", "Añadir subcampo"));
            var list = qfEl("div", "qf-add-sub-list");
            remaining.forEach(function (c) {
                var optBtn = document.createElement("button");
                optBtn.type = "button";
                optBtn.className = "qf-add-sub-opt";
                optBtn.textContent = qfSubName(step.tag, c);
                optBtn.addEventListener("click", function () {
                    occ.subs.push({ code: c, value: "" });
                    qfWriteDraft();
                    qfRender();
                });
                list.appendChild(optBtn);
            });
            addRow.appendChild(list);
            root.appendChild(addRow);
        }
    }

    function qfRenderControl(root, step) {
        var wrap = qfFieldWrap(qfStepName(step));
        var inp = document.createElement("input");
        inp.type = "text";
        inp.value = qfPlainValue((state.controls && state.controls[step.tag]) || "");
        inp.addEventListener("input", function () {
            state.controls[step.tag] = qfPlainValue(inp.value);
            if (inp.value !== state.controls[step.tag]) inp.value = state.controls[step.tag];
            qfScheduleSave();
        });
        qfWireNoNewlineAdvance(inp);
        wrap.appendChild(inp);
        root.appendChild(wrap);
    }

    function qfReviewText() {
        qfApplyToRecord();
        var rec = qfFindRecord();
        if (!rec || typeof marcCatRecordToMarcText !== "function") return "";
        return marcCatRecordToMarcText(rec) + "\n";
    }

    function qfRenderReview(root) {
        var area = document.createElement("textarea");
        area.id = "qf-review-text";
        area.className = "qf-review";
        area.spellcheck = false;
        area.readOnly = true;
        area.value = qfReviewText();
        root.appendChild(area);
    }

    function qfButton(label, cls, fn) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = cls || "qf-btn";
        btn.textContent = label;
        btn.addEventListener("click", fn);
        return btn;
    }

    function qfFileBase() {
        var id = state && state.controls ? String(state.controls["001"] || "").trim() : "";
        id = id.replace(/[^\w.-]+/g, "_").slice(0, 40);
        return id || "registro";
    }

    function qfDownload(ext) {
        var area = document.getElementById("qf-review-text");
        var text = area ? area.value : qfReviewText();
        try {
            var bytes = marcCatMarcTextToIso2709(text);
            if (typeof marcCatDownloadBlob === "function") marcCatDownloadBlob(bytes, qfFileBase() + "." + ext);
        } catch (err) {
            var msg = typeof marcCatValidationMessage === "function" ? marcCatValidationMessage(err) : (err && err.message);
            if (typeof marcShowToast === "function") marcShowToast(msg || "No se pudo generar el archivo.", { flashError: true });
        }
    }

    function qfRenderNav() {
        var nav = document.getElementById("qf-nav");
        if (!nav) return;
        nav.innerHTML = "";
        var step = qfStep();
        var back = qfButton("Atrás", "qf-btn", qfBack);
        back.disabled = state.step === 0 && state.occ === 0;
        nav.appendChild(back);
        if (step.kind === "review") {
            nav.appendChild(qfButton("Descargar .mrc", "qf-btn", function () { qfDownload("mrc"); }));
            nav.appendChild(qfButton("Descargar .dat", "qf-btn", function () { qfDownload("dat"); }));
            nav.appendChild(qfButton("Editor", "qf-btn qf-btn-primary", qfCloseToEditor));
            return;
        }
        if (step.repeatable) nav.appendChild(qfButton("Añadir otro", "qf-btn", qfAddAnother));
        var nextLabel = state.step >= QF_STEPS.length - 2 ? "Revisar" : "Siguiente";
        nav.appendChild(qfButton(nextLabel, "qf-btn qf-btn-primary", qfNext));
    }

    function qfRender() {
        var body = document.getElementById("qf-body");
        var progress = document.getElementById("qf-progress");
        if (!body || !state) return;
        var step = qfStep();
        if (progress) {
            var label = (state.step + 1) + " / " + QF_STEPS.length;
            if (step.repeatable && Array.isArray(state.fields[step.tag]) && state.fields[step.tag].length > 1) {
                label += "  ·  " + (state.occ + 1);
            }
            progress.textContent = label;
        }
        body.innerHTML = "";
        var card = qfEl("div", "qf-card");
        var heading = step.kind === "review" ? "Revisión" : (step.tag + "  " + qfStepName(step));
        card.appendChild(qfEl("h2", "qf-head-tag", heading));
        if (step.kind === "leader") qfRenderLeader(card);
        else if (step.kind === "fixed") qfRender008(card);
        else if (step.kind === "control") qfRenderControl(card, step);
        else if (step.kind === "var") qfRenderVariable(card, step);
        else qfRenderReview(card);
        body.appendChild(card);
        qfRenderNav();
        if (step.kind !== "review") {
            qfFocusables(body).forEach(qfWireNoNewlineAdvance);
            var focus = body.querySelector("input, textarea, select");
            if (focus) {
                setTimeout(function () { try { focus.focus(); } catch (e) { /* ignore */ } }, 0);
            }
        }
    }

    function qfScheduleSave() {
        clearTimeout(saveTimer);
        saveTimer = setTimeout(function () {
            qfApplyToRecord();
            qfWriteDraft();
        }, 250);
    }

    function qfCompactTag(tag) {
        var list = state.fields[tag];
        if (!Array.isArray(list)) return;
        while (list.length && qfOccEmpty(list[list.length - 1])) list.pop();
        state.fields[tag] = list.length ? list : null;
    }

    function qfNext() {
        var step = qfStep();
        if (step.kind === "var") {
            qfEnsureOcc(step.tag);
            qfCompactTag(step.tag);
        }
        if (state.step < QF_STEPS.length - 1) {
            state.step += 1;
            state.occ = 0;
        }
        state.active = true;
        qfApplyToRecord();
        qfWriteDraft();
        qfRender();
    }

    function qfBack() {
        if (state.occ > 0) {
            state.occ -= 1;
        } else if (state.step > 0) {
            state.step -= 1;
            var prev = qfStep();
            if (prev.repeatable && Array.isArray(state.fields[prev.tag]) && state.fields[prev.tag].length) {
                state.occ = state.fields[prev.tag].length - 1;
            } else {
                state.occ = 0;
            }
        }
        qfApplyToRecord();
        qfWriteDraft();
        qfRender();
    }

    function qfAddAnother() {
        var step = qfStep();
        var list = state.fields[step.tag];
        var current = list && list[state.occ];
        if (!current || qfOccEmpty(current)) {
            if (typeof marcShowToast === "function") marcShowToast("El campo está vacío.");
            return;
        }
        list.push(qfNewOcc(step.tag));
        state.occ = list.length - 1;
        qfApplyToRecord();
        qfWriteDraft();
        qfRender();
    }

    function qfBuildFields() {
        var out = [];
        ["001", "003"].forEach(function (tag) {
            var raw = state.controls ? qfPlainValue(state.controls[tag] || "") : "";
            if (!raw.trim()) return;
            out.push({ tag: tag, ind: "", raw: raw, rest: "", sf: {}, sfList: [] });
        });
        out.push({
            tag: "008",
            ind: "",
            raw: typeof marcCatNormalize008Raw === "function" ? marcCatNormalize008Raw(state.fixed008) : qfPad(state.fixed008, 40),
            rest: "",
            sf: {},
            sfList: []
        });
        QF_STEPS.forEach(function (step) {
            if (step.kind !== "var" || !Array.isArray(state.fields[step.tag])) return;
            state.fields[step.tag].forEach(function (occ) {
                if (qfOccEmpty(occ)) return;
                var sfList = [];
                (occ.subs || []).forEach(function (s) {
                    var val = qfPlainValue(s.value);
                    if (val.trim() === "") return;
                    sfList.push({ code: String(s.code || "a").charAt(0).toLowerCase(), value: val });
                });
                if (!sfList.length) return;
                var ind = String(occ.ind1 == null ? " " : occ.ind1).charAt(0) + String(occ.ind2 == null ? " " : occ.ind2).charAt(0);
                ind = ind.replace(/\\/g, " ");
                var rest = typeof marcCatRestFromSfList === "function" ? marcCatRestFromSfList(sfList) : "";
                out.push({
                    tag: step.tag,
                    ind: ind,
                    raw: "",
                    rest: rest,
                    sf: typeof parseSubfields === "function" ? parseSubfields(rest) : {},
                    sfList: sfList
                });
            });
        });
        out.sort(function (a, b) {
            var na = parseInt(a.tag, 10);
            var nb = parseInt(b.tag, 10);
            if (na !== nb) return na - nb;
            return 0;
        });
        return out;
    }

    function qfApplyToRecord() {
        if (!state) return;
        var rec = qfFindRecord();
        if (!rec) return;
        rec.leader24 = qfPad(state.leader, 24);
        rec.fields = qfBuildFields();
        rec.catalogingProfileId = "books";
        rec.dirty = true;
        if (typeof marcCatMarkSessionUnexported === "function") marcCatMarkSessionUnexported();
        if (typeof marcCatSchedulePersistSessionDraft === "function") marcCatSchedulePersistSessionDraft();
    }

    function qfPlace() {
        var el = document.getElementById("marc-cat-quickform");
        if (!el) return;
        if (typeof marcCatPageScrollTo === "function") marcCatPageScrollTo(0, "auto");
        if (typeof marcCatSyncLayoutHeights === "function") marcCatSyncLayoutHeights();
        var top = typeof marcCatGetTopbarViewportBottom === "function" ? (marcCatGetTopbarViewportBottom() || 0) : 0;
        el.style.top = top + "px";
    }

    function qfShow() {
        var el = document.getElementById("marc-cat-quickform");
        if (!el) return;
        el.hidden = false;
        qfPlace();
        qfRender();
        requestAnimationFrame(qfPlace);
    }

    function qfHide() {
        var el = document.getElementById("marc-cat-quickform");
        if (el) el.hidden = true;
    }

    function qfCloseToEditor() {
        if (qfStep().kind === "var") qfCompactTag(qfStep().tag);
        state.active = false;
        qfApplyToRecord();
        qfWriteDraft();
        qfHide();
        var rec = qfFindRecord();
        var idx = marcCatSession.records.indexOf(rec);
        if (idx >= 0 && typeof marcCatLoadRecord === "function") marcCatLoadRecord(idx);
    }

    function qfResetCurrent() {
        var rec = qfFindRecord();
        if (!rec) return;
        state = qfFreshState(rec.id);
        qfApplyToRecord();
        qfWriteDraft();
        qfShow();
    }

    function qfNuevo() {
        if (!window.confirm("¿Empezar un registro nuevo? Se borrará el borrador de este formulario.")) return;
        qfResetCurrent();
    }

    function qfStartNew() {
        if (typeof persistCurrentRecordToSession === "function") {
            persistCurrentRecordToSession({ compact: false, reRender: false });
        }
        var rec;
        var onlyPristine = marcCatSession.records.length === 1 &&
            typeof marcCatIsPristineInitialRecord === "function" &&
            marcCatIsPristineInitialRecord(marcCatSession.records[0]);
        if (onlyPristine) {
            rec = marcCatCreateEmptyRecord();
            marcCatSession.records[0] = rec;
        } else {
            rec = marcCatCreateEmptyRecord();
            marcCatSession.records.push(rec);
        }
        state = qfFreshState(rec.id);
        qfApplyToRecord();
        qfWriteDraft();
        if (typeof marcCatLoadRecord === "function") {
            marcCatLoadRecord(marcCatSession.records.indexOf(rec));
        }
        if (typeof marcCatMarkSessionUnexported === "function") marcCatMarkSessionUnexported();
        qfShow();
    }

    function qfResumeOrIgnore() {
        var draft = qfReadDraft();
        if (!draft || !draft.active) return;
        state = draft;
        if (!state.controls) state.controls = { "001": "", "003": "" };
        if (!state.fields) state.fields = {};
        var rec = qfFindRecord(state.recordId);
        if (!rec) {
            rec = marcCatCreateEmptyRecord();
            rec.id = state.recordId || rec.id;
            state.recordId = rec.id;
            marcCatSession.records.push(rec);
        }
        qfApplyToRecord();
        if (typeof marcCatLoadRecord === "function") {
            marcCatLoadRecord(marcCatSession.records.indexOf(rec));
        }
        qfShow();
    }

    function qfBoot() {
        var btn = document.getElementById("btn-quick-form");
        var editorBtn = document.getElementById("qf-editor");
        var nuevoBtn = document.getElementById("qf-nuevo");
        if (btn) btn.addEventListener("click", qfStartNew);
        if (editorBtn) editorBtn.addEventListener("click", qfCloseToEditor);
        if (nuevoBtn) nuevoBtn.addEventListener("click", qfNuevo);
        window.addEventListener("resize", function () {
            var el = document.getElementById("marc-cat-quickform");
            if (el && !el.hidden) qfPlace();
        });
        if (typeof marcCatSession !== "undefined" && marcCatSession.records) qfResumeOrIgnore();
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", qfBoot);
    else qfBoot();
})();
