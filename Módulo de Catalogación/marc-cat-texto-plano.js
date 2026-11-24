/**
 * Texto MarcEdit (=LDR) ↔ ISO 2709.
 * Misma lectura y misma construcción binaria que Convertir_MARC_a_Texto.html:
 * =TAG, dos espacios, \ como indicador en blanco, $$ como dólar literal,
 * Leader posición 09 forzada a "a" al generar el binario.
 */
(function (global) {
    "use strict";

    function concatBytes(parts) {
        var total = 0;
        var i;
        for (i = 0; i < parts.length; i++) total += parts[i].length;
        var result = new Uint8Array(total);
        var position = 0;
        for (i = 0; i < parts.length; i++) {
            result.set(parts[i], position);
            position += parts[i].length;
        }
        return result;
    }

    function fixedDigits(value, width, label, recordNumber) {
        var text = String(value);
        if (text.length > width) {
            throw new Error("Registro " + recordNumber + ": " + label + " " + value + " excede el máximo de " + new Array(width + 1).join("9") + ".");
        }
        while (text.length < width) text = "0" + text;
        return text;
    }

    function marcCatEscapeDollars(value) {
        return String(value == null ? "" : value).replace(/\$/g, "$$$$");
    }

    function marcCatIndicatorsToMnemonic(ind) {
        var s = String(ind == null ? "" : ind).replace(/\\/g, " ");
        if (s.length < 2) s = (s + "  ").slice(0, 2);
        else s = s.slice(0, 2);
        return s.replace(/ /g, "\\");
    }

    function marcCatLeaderToMarcTextLine(leader24) {
        var s = String(leader24 || (typeof marcCatDefaultLeader24 === "function" ? marcCatDefaultLeader24() : "00000nam a2200000   4500"));
        s = s.replace(/[^\x20-\x7E]/g, " ");
        if (s.length < 24) s += new Array(24 - s.length + 1).join(" ");
        return "=LDR  " + s.slice(0, 24);
    }

    function marcCatFieldToMarcTextLine(field) {
        if (!field || !field.tag) return "";
        var tag = typeof marcTagNormalize3 === "function" ? marcTagNormalize3(field.tag) : String(field.tag).padStart(3, "0").slice(-3);
        var tn = parseInt(tag, 10);
        if (!/^\d{3}$/.test(tag) || !isFinite(tn)) return "";
        if (tn <= 9) {
            var raw = field.raw != null ? String(field.raw) : "";
            if (tag === "008" && typeof marcCatNormalize008Raw === "function") raw = marcCatNormalize008Raw(raw);
            else if (!String(raw).trim()) return "";
            return "=" + tag + "  " + marcCatEscapeDollars(raw);
        }
        var list = typeof marcCatSfListFromField === "function" ? marcCatSfListFromField(field) : [];
        var filled = [];
        for (var i = 0; i < list.length; i++) {
            if (String(list[i].value == null ? "" : list[i].value).trim() === "") continue;
            filled.push(list[i]);
        }
        if (!filled.length) return "";
        var body = marcCatIndicatorsToMnemonic(field.ind);
        for (var j = 0; j < filled.length; j++) {
            var code = String(filled[j].code || "a").charAt(0);
            body += "$" + code + marcCatEscapeDollars(filled[j].value);
        }
        return "=" + tag + "  " + body;
    }

    function marcCatRecordToMarcText(rec) {
        var lines = [marcCatLeaderToMarcTextLine(rec && rec.leader24)];
        var fields = (rec && rec.fields ? rec.fields : []).slice();
        fields.sort(function (a, b) {
            var ta = typeof marcTagNormalize3 === "function" ? marcTagNormalize3(a.tag) : String(a.tag);
            var tb = typeof marcTagNormalize3 === "function" ? marcTagNormalize3(b.tag) : String(b.tag);
            var na = parseInt(ta, 10);
            var nb = parseInt(tb, 10);
            if (isFinite(na) && isFinite(nb) && na !== nb) return na - nb;
            if (ta < tb) return -1;
            if (ta > tb) return 1;
            return 0;
        });
        for (var i = 0; i < fields.length; i++) {
            var line = marcCatFieldToMarcTextLine(fields[i]);
            if (line) lines.push(line);
        }
        return lines.join("\n");
    }

    function marcCatRecordsToMarcText(records) {
        var blocks = [];
        for (var i = 0; i < records.length; i++) blocks.push(marcCatRecordToMarcText(records[i]));
        return blocks.join("\n\n") + "\n";
    }

    function marcCatParseMarcText(text) {
        var normalized = String(text || "")
            .replace(/^\uFEFF/, "")
            .replace(/\r\n?/g, "\n")
            .replace(/^(?:[ \t]*\n)+|(?:\n[ \t]*)+$/g, "");
        if (!normalized) throw new Error("El texto está vacío.");

        var blocks = normalized.split(/\n[ \t]*\n+/);
        var records = [];
        var errors = [];

        blocks.forEach(function (block, blockIndex) {
            var recordNumber = blockIndex + 1;
            var lines = block.split("\n");
            var fields = [];
            var leader = null;

            lines.forEach(function (line, lineIndex) {
                var lineNumber = lineIndex + 1;
                if (!line.trim()) return;
                var match = /^=([A-Za-z0-9]{3})  ([\s\S]*)$/.exec(line);
                if (!match) {
                    errors.push("Registro " + recordNumber + ", línea " + lineNumber + ": formato inválido; use =TAG, dos espacios y el contenido.");
                    return;
                }

                var tag = match[1].toUpperCase();
                var content = match[2];
                if (/[\u001D\u001E\u001F]/.test(content)) {
                    errors.push("Registro " + recordNumber + ", campo " + tag + ": contiene un terminador binario reservado.");
                    return;
                }

                if (tag === "LDR") {
                    if (leader !== null) {
                        errors.push("Registro " + recordNumber + ": contiene más de un LDR.");
                    } else if (content.length !== 24 || !/^[\x20-\x7E]{24}$/.test(content)) {
                        errors.push("Registro " + recordNumber + ": el LDR debe tener exactamente 24 caracteres ASCII imprimibles.");
                    } else {
                        leader = content;
                    }
                    return;
                }

                if (!/^\d{3}$/.test(tag)) {
                    errors.push("Registro " + recordNumber + ", línea " + lineNumber + ": tag «" + tag + "» mal formado; debe contener tres dígitos.");
                    return;
                }

                var tagNumber = Number(tag);
                if (tagNumber <= 9) {
                    fields.push({ tag: tag, content: content.replace(/\$\$/g, "$"), control: true });
                    return;
                }

                if (content.length < 2) {
                    errors.push("Registro " + recordNumber + ", campo " + tag + ": faltan sus dos indicadores.");
                    return;
                }
                var indicators = content.slice(0, 2);
                if (!/^[0-9\\ ]{2}$/.test(indicators)) {
                    errors.push("Registro " + recordNumber + ", campo " + tag + ": indicadores inválidos «" + indicators + "»; use dígitos o \\ para blanco.");
                    return;
                }
                fields.push({
                    tag: tag,
                    indicators: indicators.replace(/\\/g, " "),
                    content: content.slice(2),
                    control: false
                });
            });

            if (leader === null) errors.push("Registro " + recordNumber + ": falta el campo =LDR.");
            if (!fields.length) errors.push("Registro " + recordNumber + ": no contiene campos MARC.");
            records.push({ leader: leader, fields: fields });
        });

        if (errors.length) {
            var error = new Error(errors.length + " error(es) de validación.");
            error.validationErrors = errors;
            throw error;
        }
        return records;
    }

    function encodeDataFieldContent(text, encoder) {
        var pieces = [];
        var literal = "";
        function flushLiteral() {
            if (!literal) return;
            pieces.push(encoder.encode(literal));
            literal = "";
        }
        for (var i = 0; i < text.length; i++) {
            if (text[i] !== "$") {
                literal += text[i];
                continue;
            }
            if (text[i + 1] === "$") {
                literal += "$";
                i++;
                continue;
            }
            if (/[A-Za-z0-9]/.test(text[i + 1] || "")) {
                flushLiteral();
                pieces.push(Uint8Array.of(0x1F, text.charCodeAt(i + 1)));
                i++;
                continue;
            }
            literal += "$";
        }
        flushLiteral();
        return concatBytes(pieces);
    }

    function buildIso2709Record(record, recordNumber) {
        var encoder = new TextEncoder();
        var directoryEntries = [];
        var dataFields = [];
        var offset = 0;
        var f;

        for (f = 0; f < record.fields.length; f++) {
            var field = record.fields[f];
            var body = field.control
                ? encoder.encode(field.content)
                : concatBytes([encoder.encode(field.indicators), encodeDataFieldContent(field.content, encoder)]);
            var fieldLength = body.length + 1;
            var lengthDigits = fixedDigits(fieldLength, 4, "longitud del campo " + field.tag, recordNumber);
            var offsetDigits = fixedDigits(offset, 5, "posición del campo " + field.tag, recordNumber);
            directoryEntries.push(encoder.encode(field.tag + lengthDigits + offsetDigits));
            dataFields.push(concatBytes([body, Uint8Array.of(0x1E)]));
            offset += fieldLength;
        }

        var directory = concatBytes(directoryEntries.concat([Uint8Array.of(0x1E)]));
        var fieldData = concatBytes(dataFields);
        var baseAddress = 24 + directory.length;
        var totalLength = baseAddress + fieldData.length + 1;
        var totalDigits = fixedDigits(totalLength, 5, "longitud total", recordNumber);
        var baseDigits = fixedDigits(baseAddress, 5, "dirección base", recordNumber);

        var source = String(record.leader || "").padEnd(24, " ").slice(0, 24).split("");
        var leader = (
            totalDigits +
            source.slice(5, 12).join("") +
            baseDigits +
            source.slice(17, 20).join("") +
            "4500"
        ).split("");
        leader[9] = "a";
        var leaderBytes = encoder.encode(leader.join(""));
        if (leaderBytes.length !== 24) {
            throw new Error("Registro " + recordNumber + ": no se pudo construir un Leader de 24 bytes.");
        }
        return concatBytes([leaderBytes, directory, fieldData, Uint8Array.of(0x1D)]);
    }

    function marcCatMarcTextToIso2709(text) {
        var records = marcCatParseMarcText(text);
        var chunks = [];
        for (var i = 0; i < records.length; i++) chunks.push(buildIso2709Record(records[i], i + 1));
        return concatBytes(chunks);
    }

    function marcCatMnemonicSubfields(content) {
        var list = [];
        var code = null;
        var literal = "";
        function flush() {
            if (code == null) return;
            list.push({ code: String(code).toLowerCase(), value: literal });
            literal = "";
        }
        var text = String(content || "");
        for (var i = 0; i < text.length; i++) {
            if (text[i] !== "$") {
                if (code != null) literal += text[i];
                continue;
            }
            if (text[i + 1] === "$") {
                if (code != null) literal += "$";
                i++;
                continue;
            }
            if (/[A-Za-z0-9]/.test(text[i + 1] || "")) {
                flush();
                code = text[i + 1];
                literal = "";
                i++;
                continue;
            }
            if (code != null) literal += "$";
        }
        flush();
        return list;
    }

    function marcCatEditorFieldsFromParsed(parsed) {
        var fields = [];
        (parsed.fields || []).forEach(function (field) {
            if (field.control) {
                var raw = field.content;
                if (field.tag === "008" && typeof marcCatNormalize008Raw === "function") raw = marcCatNormalize008Raw(raw);
                fields.push({ tag: field.tag, ind: "", raw: raw, rest: "", sf: {}, sfList: [] });
                return;
            }
            var sfList = marcCatMnemonicSubfields(field.content);
            var rest = typeof marcCatRestFromSfList === "function" ? marcCatRestFromSfList(sfList) : "";
            var sf = typeof parseSubfields === "function" ? parseSubfields(rest) : {};
            fields.push({
                tag: field.tag,
                ind: field.indicators || "  ",
                raw: "",
                rest: rest,
                sf: sf,
                sfList: sfList
            });
        });
        return fields;
    }

    function marcCatRecordsFromMarcText(text) {
        return marcCatParseMarcText(text).map(function (parsed) {
            return {
                leader24: parsed.leader,
                fields: marcCatEditorFieldsFromParsed(parsed)
            };
        });
    }

    function marcCatDownloadTextFile(text, filename) {
        var blob = new Blob(["\uFEFF", text], { type: "text/plain;charset=utf-8" });
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = filename;
        a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
    }

    function marcCatDownloadSessionMarcText(indices) {
        var records = [];
        (indices || []).forEach(function (i) {
            var rec = marcCatSession.records[i];
            if (rec) records.push(rec);
        });
        if (!records.length) {
            if (typeof marcShowToast === "function") marcShowToast("Seleccione al menos un registro para exportar.");
            return;
        }
        var text = marcCatRecordsToMarcText(records);
        marcCatDownloadTextFile(text, "catalogacion-sesion-" + (typeof marcCatStampForFilename === "function" ? marcCatStampForFilename() : "marc") + ".txt");
        if (typeof marcShowToast === "function") marcShowToast("Exportados " + records.length + " registro(s) en .txt.");
        if (typeof marcCatClearSessionUnexported === "function") marcCatClearSessionUnexported();
    }

    function marcCatValidationMessage(err) {
        if (err && err.validationErrors && err.validationErrors.length) {
            return err.validationErrors.slice(0, 6).join(" ");
        }
        return err && err.message ? err.message : "No se pudo leer el texto.";
    }

    function marcCatQueueParsedTextImport(text, sourceName) {
        var parsed;
        try {
            parsed = marcCatRecordsFromMarcText(text);
        } catch (err) {
            if (typeof marcShowToast === "function") marcShowToast(marcCatValidationMessage(err), { flashError: true });
            return false;
        }
        if (!parsed.length) {
            if (typeof marcShowToast === "function") marcShowToast("El texto no contiene registros.");
            return false;
        }
        if (typeof persistCurrentRecordToSession === "function") {
            persistCurrentRecordToSession({ compact: false, reRender: false });
        }
        var items = parsed.map(function (rec, i) {
            var label = typeof marcCatDescribeRecordFields === "function"
                ? marcCatDescribeRecordFields(rec.fields, i + 1)
                : ("Registro " + (i + 1));
            return {
                index: i,
                checked: true,
                label: label,
                leader24: rec.leader24,
                fields: rec.fields,
                sourceFile: sourceName || "texto"
            };
        });
        marcCatRecordPickerState.items = items;
        marcCatRecordPickerState.fileName = sourceName || "texto";
        marcCatOpenRecordPicker("import", marcCatRecordPickerState.fileName);
        if (typeof marcShowToast === "function") {
            marcShowToast("Leídos " + items.length + " registro(s) de texto.");
        }
        return true;
    }

    function marcCatWireTextImportDialog() {
        var openBtn = document.getElementById("btn-import-text");
        var openBtnFloat = document.getElementById("btn-import-text-float");
        var dlg = document.getElementById("marc-cat-text-import-dialog");
        var input = document.getElementById("marc-cat-text-import-input");
        var cancel = document.getElementById("marc-cat-text-import-cancel");
        var confirmBtn = document.getElementById("marc-cat-text-import-confirm");
        if (!dlg) return;

        function show() {
            dlg.hidden = false;
            if (input) input.focus();
        }
        function hide() {
            dlg.hidden = true;
        }
        if (openBtn) openBtn.addEventListener("click", show);
        if (openBtnFloat) openBtnFloat.addEventListener("click", show);
        if (cancel) cancel.addEventListener("click", hide);
        dlg.addEventListener("click", function (e) {
            if (e.target === dlg) hide();
        });
        if (confirmBtn) {
            confirmBtn.addEventListener("click", function () {
                var text = input ? input.value : "";
                if (marcCatQueueParsedTextImport(text, "texto")) {
                    hide();
                    if (input) input.value = "";
                }
            });
        }
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && !dlg.hidden) hide();
        });
    }

    global.marcCatParseMarcText = marcCatParseMarcText;
    global.marcCatMarcTextToIso2709 = marcCatMarcTextToIso2709;
    global.marcCatRecordToMarcText = marcCatRecordToMarcText;
    global.marcCatRecordsToMarcText = marcCatRecordsToMarcText;
    global.marcCatRecordsFromMarcText = marcCatRecordsFromMarcText;
    global.marcCatDownloadTextFile = marcCatDownloadTextFile;
    global.marcCatDownloadSessionMarcText = marcCatDownloadSessionMarcText;
    global.marcCatQueueParsedTextImport = marcCatQueueParsedTextImport;
    global.marcCatValidationMessage = marcCatValidationMessage;

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", marcCatWireTextImportDialog);
    } else {
        marcCatWireTextImportDialog();
    }
})(typeof window !== "undefined" ? window : globalThis);
