/**
 * Tabla Cutter-Sanborn para 092 $b.
 * Usa MARC_CAT_CUTTER_SANBORN_ENTRIES (array de [número, stem])
 * cargado desde marc-cat-cutter-sanborn-data.js.
 *
 * Algoritmo: búsqueda floor — la entrada cuyo stem normalizado es ≤ al
 * apellido normalizado, alfabéticamente. El número Cutter se forma como
 * primera letra del apellido + el número de la tabla.
 */
(function (global) {
    "use strict";

    function cutterStripDiacritics(str) {
        return String(str || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    function cutterNorm(str) {
        return cutterStripDiacritics(String(str || ""))
            .toUpperCase()
            .replace(/[^A-Z]/g, "");
    }

    var _normalizedCache = null;

    function ensureNormalized() {
        if (_normalizedCache) return _normalizedCache;
        var entries = global.MARC_CAT_CUTTER_SANBORN_ENTRIES;
        if (!entries || !entries.length) return null;
        _normalizedCache = entries.map(function (e) {
            return { num: String(e[0]), stem: e[1], norm: cutterNorm(e[1]) };
        });
        _normalizedCache.sort(function (a, b) {
            return a.norm < b.norm ? -1 : a.norm > b.norm ? 1 : 0;
        });
        return _normalizedCache;
    }

    /**
     * Binary search: find last entry whose norm ≤ needle.
     */
    function cutterFloorSearch(needle) {
        var table = ensureNormalized();
        if (!table || !table.length) return null;
        if (!needle) return null;
        var lo = 0;
        var hi = table.length - 1;
        var result = -1;
        while (lo <= hi) {
            var mid = (lo + hi) >>> 1;
            if (table[mid].norm <= needle) {
                result = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        if (result < 0) return null;
        return table[result];
    }

    /**
     * @param {string} surname  Apellido o palabra base
     * @returns {string} Número Cutter (ej. "C422") = primera letra + número.
     *   Cadena vacía si no hay match.
     */
    function marcCatCutterSanbornLookup(surname) {
        var needle = cutterNorm(surname);
        if (!needle) return "";
        var entry = cutterFloorSearch(needle);
        if (!entry) return "";
        return needle.charAt(0) + entry.num;
    }

    /**
     * Devuelve el objeto de la entrada encontrada { num, stem, norm } o null.
     */
    function marcCatCutterSanbornFindEntry(surname) {
        var needle = cutterNorm(surname);
        if (!needle) return null;
        return cutterFloorSearch(needle);
    }

    global.marcCatCutterSanbornLookup = marcCatCutterSanbornLookup;
    global.marcCatCutterSanbornFindEntry = marcCatCutterSanbornFindEntry;
})(typeof globalThis !== "undefined" ? globalThis : window);
