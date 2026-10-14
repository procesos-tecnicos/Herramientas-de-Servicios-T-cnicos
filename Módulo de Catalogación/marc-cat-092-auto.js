/**
 * Generación automática de 092:
 *   $a ← 082 $a (sin slashes)
 *   $b ← Cutter-Sanborn + work-mark (con 100) o + año (sin 100)
 *
 * Con campo 100:  092$b = Cutter(apellido) + letra-título
 * Sin campo 100:  092$b = Cutter(1ª-palabra-título) + " " + año(264$c)
 *
 * Solo se aplica: (1) al botón ↻ del campo 092, o
 *                 (2) al crear un 092 nuevo que no existía.
 * Un 092 ya existente NO se sobreescribe automáticamente.
 */
(function (global) {
    "use strict";

    function strip(str) {
        return String(str || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function tagNorm(tag) {
        var t = String(tag || "").trim();
        if (/^\d+$/.test(t) && t.length < 3) t = ("000" + t).slice(-3);
        return t;
    }

    function firstWord(str) {
        var s = String(str || "").trim();
        if (!s) return "";
        var m = s.match(/^(\S+)/);
        if (!m) return "";
        return m[1].replace(/[,;:.]+$/g, "");
    }

    function parseInd2(field) {
        var ind = String(field && field.ind != null ? field.ind : "  ");
        var ch = ind.length > 1 ? ind.charAt(1) : " ";
        if (ch === " " || ch === "_") return 0;
        var n = parseInt(ch, 10);
        return Number.isFinite(n) ? Math.max(0, n) : 0;
    }

    function titleLetter(titleA, skip) {
        var s = String(titleA || "");
        var pos = Math.max(0, skip || 0);
        while (pos < s.length) {
            var ch = s.charAt(pos);
            if (/[A-Za-z\u00C0-\u024F]/.test(ch)) return strip(ch).toLowerCase();
            pos++;
        }
        return "";
    }

    function titleFirstWord(titleA, skip) {
        return firstWord(String(titleA || "").slice(Math.max(0, skip || 0)).trim());
    }

    function findField(fields, tag) {
        tag = tagNorm(tag);
        for (var i = 0; i < (fields || []).length; i++) {
            if (fields[i] && tagNorm(fields[i].tag) === tag) return fields[i];
        }
        return null;
    }

    function subVal(field, code) {
        if (!field) return "";
        code = String(code || "").charAt(0).toLowerCase();
        if (field.sf && field.sf[code] != null) return String(field.sf[code]);
        var list = field.sfList && field.sfList.length ? field.sfList : null;
        if (list) {
            for (var i = 0; i < list.length; i++) {
                if (String(list[i].code || "").charAt(0).toLowerCase() === code)
                    return list[i].value != null ? String(list[i].value) : "";
            }
        }
        return "";
    }

    /**
     * Extrae el número de edición del 250$a (≥2). Devuelve "" si es 1ª o no hay.
     * Cubre: "2da ed.", "Segunda edición", "2nd edition", "3rd ed.", "7th ed.",
     * "Tercera edición", "Third edition", etc.
     */
    function extract250EditionNumber(fields) {
        var f250 = findField(fields, "250");
        if (!f250) return "";
        var raw = subVal(f250, "a").trim();
        if (!raw) return "";

        /* Mapa de ordinales en texto → número */
        var wordMap = {
            "segunda": 2, "second": 2,
            "tercera": 3, "tercero": 3, "third": 3,
            "cuarta": 4, "cuarto": 4, "fourth": 4,
            "quinta": 5, "quinto": 5, "fifth": 5,
            "sexta": 6, "sexto": 6, "sixth": 6,
            "séptima": 7, "septima": 7, "séptimo": 7, "septimo": 7, "seventh": 7,
            "octava": 8, "octavo": 8, "eighth": 8,
            "novena": 9, "noveno": 9, "ninth": 9,
            "décima": 10, "decima": 10, "décimo": 10, "decimo": 10, "tenth": 10
        };

        var lower = strip(raw).toLowerCase();

        /* "2da", "3ra", "4ta", "2nd", "3rd", "7th", "5ª" — solo 1-2 dígitos (no años) */
        var m = lower.match(/\b(\d{1,2})\s*(?:st|nd|rd|th|d[ao]|r[ao]|t[ao]|ª|°|a\.?\s)/);
        if (m) {
            var n = parseInt(m[1], 10);
            if (n >= 2 && n <= 99) return String(n);
            return "";
        }

        /* Dígito suelto al inicio seguido de indicador de edición: "2. ed.", "3 ed." */
        m = lower.match(/^(\d+)\s*[.,]?\s*(?:ed|edic)/);
        if (m) {
            var n2 = parseInt(m[1], 10);
            if (n2 >= 2 && n2 <= 99) return String(n2);
            return "";
        }

        /* Palabra ordinal */
        var words = lower.split(/[\s,.;:]+/);
        for (var i = 0; i < words.length; i++) {
            var w = words[i];
            if (wordMap[w] && wordMap[w] >= 2) return String(wordMap[w]);
        }
        return "";
    }

    /** Fecha 1 del 008 (posiciones 7–10), siempre 4 dígitos estandarizados. */
    function extractDate1From008(fields) {
        var f008 = findField(fields, "008");
        if (!f008) return "";
        var raw = String(f008.raw || "");
        if (raw.length < 11) return "";
        var d = raw.substring(7, 11);
        if (/^\d{4}$/.test(d) && d !== "0000") return d;
        return "";
    }

    function rebuildSf(field, sfList) {
        field.sfList = sfList;
        field.sf = {};
        var parts = [];
        sfList.forEach(function (e) {
            field.sf[String(e.code || "").charAt(0).toLowerCase()] =
                e.value != null ? String(e.value) : "";
            parts.push("\x1F" + String(e.code || "").charAt(0).toLowerCase() +
                String(e.value != null ? e.value : ""));
        });
        field.rest = parts.join("");
    }

    /** Calcula 092 $a y $b a partir de los campos del registro. */
    function compute092(fields) {
        var f082 = findField(fields, "082");
        var f100 = findField(fields, "100");
        var f245 = findField(fields, "245");

        /* 092$a = 082$a sin slashes */
        var deweyA = subVal(f082, "a").trim().replace(/\//g, "");
        var cutterB = "";

        if (!f245) return { deweyA: deweyA, cutterB: cutterB };

        var titleA = subVal(f245, "a");
        var skip = parseInd2(f245);
        var tLetter = titleLetter(titleA, skip);
        var hasAuthor = f100 && subVal(f100, "a").trim();

        if (hasAuthor) {
            var surname = firstWord(subVal(f100, "a"));
            var cutter = typeof global.marcCatCutterSanbornLookup === "function"
                ? global.marcCatCutterSanbornLookup(surname) : "";
            if (cutter && tLetter) cutterB = cutter + tLetter;
            else if (cutter) cutterB = cutter;
            /* Número de edición (≥2) tras el work-mark, solo con 100 */
            var edNum = extract250EditionNumber(fields);
            if (edNum && cutterB) cutterB = cutterB + edNum;
        } else {
            var titleWord = titleFirstWord(titleA, skip);
            var cutter2 = typeof global.marcCatCutterSanbornLookup === "function"
                ? global.marcCatCutterSanbornLookup(titleWord) : "";
            var year = extractDate1From008(fields);
            if (cutter2 && year) cutterB = cutter2 + " " + year;
            else if (cutter2) cutterB = cutter2;
        }
        return { deweyA: deweyA, cutterB: cutterB };
    }

    /* ---------- DOM helpers ---------- */

    function setSubInRow(row, code, value) {
        if (!row) return false;
        code = String(code || "").charAt(0).toLowerCase();
        var blocks = row.querySelectorAll(".subfield-block");
        for (var i = 0; i < blocks.length; i++) {
            var lab = blocks[i].querySelector(".subfield-label[data-code]");
            if (!lab) continue;
            if (String(lab.getAttribute("data-code") || "").charAt(0).toLowerCase() !== code) continue;
            var inp = blocks[i].querySelector(".subfield-input, textarea.subfield-input");
            if (inp) { inp.value = value != null ? String(value) : ""; return true; }
        }
        return false;
    }

    function ensureSubInRow(row, code, value) {
        if (setSubInRow(row, code, value)) return true;
        if (typeof global.marcCatInsertSubfieldBlock === "function") {
            global.marcCatInsertSubfieldBlock(row, code, value != null ? String(value) : "", false);
            return true;
        }
        return false;
    }

    function write092ToDom(fields) {
        var f092 = findField(fields, "092");
        if (!f092) return;
        var row = document.querySelector('.marc-row[data-field="092"]');
        if (!row && typeof global.marcCatCreateFieldRowFromField === "function") {
            row = global.marcCatCreateFieldRowFromField(f092);
        }
        if (!row) return;
        ensureSubInRow(row, "a", subVal(f092, "a"));
        ensureSubInRow(row, "b", subVal(f092, "b"));
        if (typeof global.marcCatSyncInlineTextFromSubfields === "function")
            global.marcCatSyncInlineTextFromSubfields(row);
    }

    /**
     * Botón ↻: recalcula 092 en DOM del registro actual.
     * Siempre sobreescribe $a y $b.
     */
    function marcCatApply092AutoNow() {
        if (typeof global.marcCatSyncDomBeforeCollect === "function")
            global.marcCatSyncDomBeforeCollect();
        var collect = global.marcCatCollectEditedFieldsFromDomFn;
        if (typeof collect !== "function") {
            console.warn("[092-auto] collectEditedFieldsFromDomFn no disponible");
            return;
        }
        var fields = collect();

        var f082 = findField(fields, "082");
        var f100 = findField(fields, "100");
        var f245 = findField(fields, "245");
        console.log("[092-auto] 082$a:", subVal(f082, "a"));
        console.log("[092-auto] 100$a:", subVal(f100, "a"));
        console.log("[092-auto] 245$a:", subVal(f245, "a"), "ind:", f245 ? f245.ind : "N/A");
        console.log("[092-auto] ENTRIES loaded:",
            !!(global.MARC_CAT_CUTTER_SANBORN_ENTRIES && global.MARC_CAT_CUTTER_SANBORN_ENTRIES.length),
            global.MARC_CAT_CUTTER_SANBORN_ENTRIES ? global.MARC_CAT_CUTTER_SANBORN_ENTRIES.length : 0);

        var vals = compute092(fields);
        console.log("[092-auto] deweyA:", vals.deweyA, "cutterB:", vals.cutterB);

        /* Aplicar sobre los campos y escribir al DOM */
        var list = fields.map(function (f) {
            return {
                tag: f.tag, ind: f.ind, raw: f.raw, rest: f.rest,
                sf: f.sf ? Object.assign({}, f.sf) : {},
                sfList: f.sfList ? f.sfList.map(function (e) {
                    return { code: e.code, value: e.value != null ? String(e.value) : "" };
                }) : undefined,
                fromTemplate: f.fromTemplate
            };
        });
        var f092 = findField(list, "092");
        if (!f092) {
            f092 = { tag: "092", ind: "  ", raw: "",
                rest: "\x1Fa\x1Fb", sf: { a: "", b: "" },
                sfList: [{ code: "a", value: "" }, { code: "b", value: "" }],
                fromTemplate: true };
            list.push(f092);
        }
        var sfList = f092.sfList && f092.sfList.length
            ? f092.sfList.map(function (e) {
                return { code: e.code, value: e.value != null ? String(e.value) : "" };
            }) : [{ code: "a", value: "" }, { code: "b", value: "" }];
        var hasA = false, hasB = false;
        sfList = sfList.map(function (e) {
            var c = String(e.code || "").charAt(0).toLowerCase();
            if (c === "a") { hasA = true; return { code: "a", value: vals.deweyA }; }
            if (c === "b") { hasB = true; return { code: "b", value: vals.cutterB }; }
            return e;
        });
        if (!hasA) sfList.unshift({ code: "a", value: vals.deweyA });
        if (!hasB) {
            var at = sfList.length;
            for (var i = 0; i < sfList.length; i++) {
                if (String(sfList[i].code || "").charAt(0).toLowerCase() > "b") { at = i; break; }
            }
            sfList.splice(at, 0, { code: "b", value: vals.cutterB });
        }
        rebuildSf(f092, sfList);
        write092ToDom(list);
        if (typeof global.marcCatMarkDirty === "function") global.marcCatMarkDirty();
    }

    /* marcCatApply092ToFields: para el export hook, pero NO sobreescribe 092 existente */
    global.marcCatApply092ToFields = function (fields) {
        /* Solo se aplica si el 092 NO tiene datos ya escritos */
        var f092 = findField(fields, "092");
        if (f092) {
            var a = subVal(f092, "a").trim();
            var b = subVal(f092, "b").trim();
            if (a || b) return fields; /* ya tiene datos, no tocar */
        }
        /* 092 vacío o inexistente: rellenarlo */
        var list = (fields || []).map(function (f) {
            return {
                tag: f.tag, ind: f.ind, raw: f.raw, rest: f.rest,
                sf: f.sf ? Object.assign({}, f.sf) : {},
                sfList: f.sfList ? f.sfList.map(function (e) {
                    return { code: e.code, value: e.value != null ? String(e.value) : "" };
                }) : undefined,
                fromTemplate: f.fromTemplate
            };
        });
        var vals = compute092(list);
        if (!vals.deweyA && !vals.cutterB) return fields;
        f092 = findField(list, "092");
        if (!f092) {
            f092 = { tag: "092", ind: "  ", raw: "",
                rest: "\x1Fa\x1Fb", sf: { a: "", b: "" },
                sfList: [{ code: "a", value: "" }, { code: "b", value: "" }],
                fromTemplate: true };
            list.push(f092);
        }
        var sfList = [{ code: "a", value: vals.deweyA }, { code: "b", value: vals.cutterB }];
        rebuildSf(f092, sfList);
        f092.fromTemplate = false;
        return list.sort(function (a, b) {
            var na = parseInt(tagNorm(a.tag), 10);
            var nb = parseInt(tagNorm(b.tag), 10);
            if (Number.isFinite(na) && Number.isFinite(nb) && na !== nb) return na - nb;
            var ta = tagNorm(a.tag), tb = tagNorm(b.tag);
            return ta < tb ? -1 : ta > tb ? 1 : 0;
        });
    };

    global.marcCatApply092AutoNow = marcCatApply092AutoNow;
    global.marcCatApply092AutoBeforeSave = marcCatApply092AutoNow;
})(typeof globalThis !== "undefined" ? globalThis : window);
