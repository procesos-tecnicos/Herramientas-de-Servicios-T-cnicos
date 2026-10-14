const fs = require("fs");
const path = require("path");

const src = path.resolve(
    "c:/Users/rcatala/OneDrive - Universidad Del Sagrado Corazon/Documents/Desktop_Organizado_2026-08-06/Catalogacion_MARC/catalogar/Cutter Sanborn.txt"
);
const dst = path.resolve(__dirname, "../marc-cat-cutter-sanborn-data.js");

const text = fs.readFileSync(src, "utf8");
const re = /\["(\d+)","([^"]*)"\]/g;
const entries = [];
let m;
while ((m = re.exec(text)) !== null) {
    entries.push([m[1], m[2]]);
}

const out =
    "/** Tabla Cutter-Sanborn (auto-generada desde Cutter Sanborn.txt) */\n" +
    "(function (g) {\n" +
    '    "use strict";\n' +
    "    g.MARC_CAT_CUTTER_SANBORN_ENTRIES = " +
    JSON.stringify(entries) +
    ";\n" +
    '})(typeof globalThis !== "undefined" ? globalThis : window);\n';

fs.writeFileSync(dst, out, "utf8");
console.log("Entries:", entries.length);
console.log("Written:", dst);
console.log("Size:", out.length, "bytes");
