/**
 * Fuente única runtime — inglés MARC21 (catalogación v2).
 * Generado/corrigido por tools/fix_marc_i18n_en_spanish.js
 * tags=255 indicadores=980 subcampos=1771 segmentos=204
 * fixSpanish=0+32+7
 */
(function (global) {
    "use strict";

    global.marcCatEnDictionary = {
    "100": {
        "nombre_generico": "Main Entry-Personal Name",
        "repetible": false,
        "predeterminados": [
            "a",
            "d",
            "e"
        ],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of heading or term",
            "4": "Relationship",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Personal name",
            "d": "Dates associated with a name",
            "e": "Relator term",
            "q": "Fuller form of name",
            "b": "Numeration",
            "c": "Titles and other words associated with a name",
            "f": "Date of a work",
            "g": "Miscellaneous information",
            "j": "Attribution qualifier",
            "k": "Form subheading",
            "l": "Language of a work",
            "n": "Number of part/section of a work",
            "p": "Name of part/section of a work",
            "t": "Title of a work",
            "u": "Affiliation"
        },
        "indicador_1": {
            "0": "Forename",
            "1": "Surname",
            "3": "Family name"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "110": {
        "nombre_generico": "Main Entry-Corporate Name",
        "repetible": false,
        "predeterminados": [
            "a",
            "b",
            "e"
        ],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of heading or term",
            "4": "Relationship",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Corporate name or jurisdiction name as entry element",
            "b": "Subordinate unit",
            "e": "Relator term",
            "c": "Location of meeting",
            "d": "Date of meeting or treaty signing",
            "f": "Date of a work",
            "g": "Miscellaneous information",
            "k": "Form subheading",
            "l": "Language of a work",
            "n": "Number of part/section/meeting",
            "p": "Name of part/section of a work",
            "t": "Title of a work",
            "u": "Affiliation"
        },
        "indicador_1": {
            "0": "Inverted name",
            "1": "Jurisdiction name",
            "2": "Name in direct order"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "111": {
        "nombre_generico": "Main Entry-Meeting Name",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of heading or term",
            "4": "Relationship",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Meeting name or jurisdiction name as entry element",
            "c": "Location of meeting",
            "d": "Date of meeting or treaty signing",
            "e": "Subordinate unit",
            "f": "Date of a work",
            "g": "Miscellaneous information",
            "j": "Relator term",
            "k": "Form subheading",
            "l": "Language of a work",
            "n": "Number of part/section/meeting",
            "p": "Name of part/section of a work",
            "q": "Name of meeting following jurisdiction name entry element",
            "t": "Title of a work",
            "u": "Affiliation"
        },
        "indicador_1": {
            "0": "Inverted name",
            "1": "Jurisdiction name",
            "2": "Name in direct order",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "130": {
        "nombre_generico": "Main Entry-Uniform Title",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of heading or term",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Uniform title",
            "d": "Date of treaty signing",
            "f": "Date of a work",
            "g": "Miscellaneous information",
            "h": "Medium",
            "k": "Form subheading",
            "l": "Language of a work",
            "m": "Medium of performance for music",
            "n": "Number of part/section of a work",
            "o": "Arranged statement for music",
            "p": "Name of part/section of a work",
            "r": "Key for music",
            "s": "Version",
            "t": "Title of a work"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "210": {
        "nombre_generico": "Abbreviated Title",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Source",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Abbreviated title",
            "b": "Qualifying information"
        },
        "indicador_1": {
            "0": "No added entry",
            "1": "Added entry",
            " ": "Indefinido"
        },
        "indicador_2": {
            "0": "Other abbreviated title",
            " ": "Abbreviated key title",
            "#": "Abbreviated key title"
        }
    },
    "222": {
        "nombre_generico": "Key Title",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Key title",
            "b": "Qualifying information"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            "0": "No nonfiling characters",
            " ": "Indefinido"
        }
    },
    "240": {
        "nombre_generico": "Uniform Title",
        "repetible": false,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of heading or term",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Uniform title",
            "d": "Date of treaty signing",
            "f": "Date of a work",
            "l": "Language of a work",
            "g": "Miscellaneous information",
            "h": "Medium",
            "k": "Form subheading",
            "m": "Medium of performance for music",
            "n": "Number of part/section of a work",
            "o": "Arranged statement for music",
            "p": "Name of part/section of a work",
            "r": "Key for music",
            "s": "Version"
        },
        "indicador_1": {
            "0": "Not printed or displayed",
            "1": "Printed or displayed"
        },
        "indicador_2": {
            "0": "No nonfiling characters",
            "1": "1 nonfiling character",
            "2": "2 nonfiling characters",
            "3": "3 nonfiling characters",
            "4": "4 nonfiling characters",
            "5": "5 nonfiling characters",
            "6": "6 nonfiling characters",
            "7": "7 nonfiling characters",
            "8": "8 nonfiling characters",
            "9": "9 nonfiling characters"
        }
    },
    "242": {
        "nombre_generico": "Translation of Title by Cataloging Agency",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Title",
            "b": "Remainder of title",
            "c": "Statement of responsibility, etc.",
            "h": "Medium",
            "n": "Number of part/section of a work",
            "p": "Name of part/section of a work",
            "y": "Language code of translated title"
        },
        "indicador_1": {
            "0": "No added entry",
            "1": "Added entry",
            " ": "Indefinido"
        },
        "indicador_2": {
            "0": "No nonfiling characters",
            " ": "Indefinido"
        }
    },
    "243": {
        "nombre_generico": "Collective Uniform Title",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Uniform title",
            "d": "Date of treaty signing",
            "f": "Date of a work",
            "g": "Miscellaneous information",
            "h": "Medium",
            "k": "Form subheading",
            "l": "Language of a work",
            "m": "Medium of performance for music",
            "n": "Number of part/section of a work",
            "o": "Arranged statement for music",
            "p": "Name of part/section of a work",
            "r": "Key for music",
            "s": "Version"
        },
        "indicador_1": {
            "0": "Not printed or displayed",
            "1": "Printed or displayed",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "245": {
        "nombre_generico": "Title Statement",
        "repetible": false,
        "predeterminados": [
            "a",
            "b",
            "c"
        ],
        "subcampos": {
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Title",
            "b": "Remainder of title",
            "c": "Statement of responsibility, etc.",
            "n": "Number of part/section of a work",
            "p": "Name of part/section of a work",
            "f": "Inclusive dates",
            "g": "Bulk dates",
            "h": "Medium",
            "k": "Form",
            "s": "Version",
            "z": "Title statement context note"
        },
        "indicador_1": {
            "0": "No added entry",
            "1": "Added entry"
        },
        "indicador_2": {
            "0": "No nonfiling characters",
            "1": "1 nonfiling character",
            "2": "2 nonfiling characters",
            "3": "3 nonfiling characters",
            "4": "4 nonfiling characters",
            "5": "5 nonfiling characters",
            "6": "6 nonfiling characters",
            "7": "7 nonfiling characters",
            "8": "8 nonfiling characters",
            "9": "9 nonfiling characters"
        }
    },
    "246": {
        "nombre_generico": "Varying Form of Title",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "5": "Institution to which field applies",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Title proper/short title",
            "i": "Display text",
            "n": "Number of part/section of a work",
            "p": "Name of part/section of a work",
            "b": "Remainder of title",
            "f": "Date or sequential designation",
            "g": "Miscellaneous information",
            "h": "Medium"
        },
        "indicador_1": {
            "0": "Note, no added entry",
            "1": "Note, added entry",
            "2": "No note, no added entry",
            "3": "No note, added entry"
        },
        "indicador_2": {
            "0": "Portion of title",
            "1": "Parallel title",
            "2": "Distinctive title",
            "3": "Other title",
            "4": "Cover title",
            "5": "Added title page title",
            "6": "Caption title",
            "7": "Running title",
            "8": "Spine title",
            " ": "No type specified"
        }
    },
    "247": {
        "nombre_generico": "Former Title",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Title",
            "b": "Remainder of title",
            "f": "Date or sequential designation",
            "g": "Miscellaneous information",
            "h": "Medium",
            "n": "Number of part/section of a work",
            "p": "Name of part/section of a work",
            "x": "International Standard Serial Number"
        },
        "indicador_1": {
            "0": "No added entry",
            "1": "Added entry",
            " ": "Indefinido"
        },
        "indicador_2": {
            "0": "Display note",
            "1": "Do not display note",
            " ": "Indefinido"
        }
    },
    "250": {
        "nombre_generico": "Edition Statement",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "3": "Materials specified",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Edition statement",
            "b": "Remainder of edition statement"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "251": {
        "nombre_generico": "Version Information",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Version"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "254": {
        "nombre_generico": "Musical Presentation Statement",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "255": {
        "nombre_generico": "Cartographic Mathematical Data",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Statement of scale",
            "b": "Statement of projection",
            "c": "Statement of coordinates",
            "d": "Statement of zone",
            "e": "Statement of equinox",
            "f": "Outer G-ring coordinate pairs",
            "g": "Exclusion G-ring coordinate pairs"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "256": {
        "nombre_generico": "Computer File Characteristics",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Computer file characteristics"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "257": {
        "nombre_generico": "Country of Producing Entity",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Country of producing entity"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "258": {
        "nombre_generico": "Philatelic Issue Data",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Issuing jurisdiction",
            "b": "Denomination"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "260": {
        "nombre_generico": "Publication, Distribution, etc. (Imprint)",
        "repetible": true,
        "predeterminados": [
            "a",
            "b",
            "c"
        ],
        "subcampos": {
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Place of publication, distribution, etc.",
            "b": "Name of publisher, distributor, etc.",
            "c": "Date of publication, distribution, etc.",
            "e": "Place of manufacture",
            "f": "Manufacturer",
            "g": "Date of manufacture"
        },
        "indicador_1": {
            "2": "Intervening publisher",
            "3": "Current/latest publisher",
            " ": "Not applicable/No information provided/Earliest available publisher"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "263": {
        "nombre_generico": "Projected Publication Date",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Projected publication date"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "264": {
        "nombre_generico": "Production, Publication, Distribution, Manufacture, and Copyright Notice",
        "repetible": true,
        "predeterminados": [
            "a",
            "b",
            "c"
        ],
        "subcampos": {
            "3": "Materials specified",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Place of production, publication, distribution, manufacture",
            "b": "Name of producer, publisher, distributor, manufacturer",
            "c": "Date of production, publication, distribution, manufacture, or copyright notice"
        },
        "indicador_1": {
            "2": "Intervening",
            "3": "Current/Latest",
            " ": "Not applicable/No information provided/Earliest"
        },
        "indicador_2": {
            "0": "Production",
            "1": "Publication",
            "2": "Distribution",
            "3": "Manufacture",
            "4": "Copyright notice date"
        }
    },
    "270": {
        "nombre_generico": "Address",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "4": "Relationship",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Address",
            "b": "City",
            "c": "State or province",
            "d": "Country",
            "e": "Postal code",
            "f": "Terms preceding attention name",
            "g": "Attention name",
            "h": "Attention position",
            "i": "Type of address",
            "j": "Specialized telephone number",
            "k": "Telephone number",
            "l": "Fax number",
            "m": "Electronic mail address",
            "n": "TDD or TTY number",
            "p": "Contact person",
            "q": "Title of contact person",
            "r": "Hours",
            "z": "Public note"
        },
        "indicador_1": {
            "1": "Primary",
            "2": "Secondary",
            " ": "No level specified",
            "#": "No level specified"
        },
        "indicador_2": {
            "0": "Mailing",
            "7": "Type specified in subfield $i",
            " ": "No type specified",
            "#": "No type specified"
        }
    },
    "300": {
        "nombre_generico": "Physical Description",
        "repetible": true,
        "predeterminados": [
            "a",
            "b",
            "c"
        ],
        "subcampos": {
            "3": "Materials specified",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Extent",
            "b": "Other physical details",
            "c": "Dimensions",
            "e": "Accompanying material",
            "f": "Type of unit",
            "g": "Size of unit"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "306": {
        "nombre_generico": "Playing Time",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Playing time"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "307": {
        "nombre_generico": "Hours, Etc.",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Hours",
            "b": "Additional information"
        },
        "indicador_1": {
            "8": "No display constant generated",
            " ": "Hours",
            "#": "Hours"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "310": {
        "nombre_generico": "Current Publication Frequency",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Current publication frequency",
            "b": "Date of current publication frequency"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "321": {
        "nombre_generico": "Former Publication Frequency",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Former publication frequency",
            "b": "Dates of former publication frequency"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "334": {
        "nombre_generico": "Mode of Issuance",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Mode of issuance term",
            "b": "Mode of issuance code"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "335": {
        "nombre_generico": "Extension Plan",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "3": "Materials specified",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Extension plan term",
            "b": "Extension plan code"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "336": {
        "nombre_generico": "Content Type",
        "repetible": true,
        "predeterminados": [
            "a",
            "b",
            "2"
        ],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "3": "Materials specified",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Content type term",
            "b": "Content type code"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "337": {
        "nombre_generico": "Media Type",
        "repetible": true,
        "predeterminados": [
            "a",
            "b",
            "2"
        ],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Media type term",
            "b": "Media type code"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "338": {
        "nombre_generico": "Carrier Type",
        "repetible": true,
        "predeterminados": [
            "a",
            "b",
            "2"
        ],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Carrier type term",
            "b": "Carrier type code"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "340": {
        "nombre_generico": "Physical Medium",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Base material y configuración",
            "b": "Dimensions",
            "c": "Materials applied to surface",
            "d": "Information recording technique",
            "e": "Support",
            "f": "Reduction ratio value",
            "g": "Color content",
            "h": "Location within medium",
            "i": "Technical specifications of medium",
            "j": "Generation",
            "k": "Layout",
            "l": "Binding",
            "m": "Book format",
            "n": "Font size",
            "o": "Polarity",
            "p": "Illustrative content",
            "q": "Reduction ratio designator"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "341": {
        "nombre_generico": "Accessibility Content",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Content access mode",
            "b": "Textual assistive features",
            "c": "Visual assistive features",
            "d": "Auditory assistive features",
            "e": "Tactile assistive features"
        },
        "indicador_1": {
            "0": "Adaptive features to access primary content",
            "1": "Adaptive features to access secondary content",
            " ": "No information provided",
            "#": "No information provided"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "342": {
        "nombre_generico": "Geographic Reference Data",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Reference method used",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Name",
            "b": "Coordinate units or distance units",
            "c": "Latitude resolution",
            "d": "Longitude resolution",
            "e": "Standard parallel or oblique line latitude",
            "f": "Oblique line longitude",
            "g": "Longitude of central meridian or projection center",
            "h": "Latitude of projection origin or projection center",
            "i": "False easting",
            "j": "False northing",
            "k": "Scale factor",
            "l": "Height of perspective point above surface",
            "m": "Azimuthal angle",
            "n": "Azimuth measure point longitude or straight vertical longitude from pole",
            "o": "Landsat number and path number",
            "p": "Zone identifier",
            "q": "Ellipsoid name",
            "r": "Semi-major axis",
            "s": "Denominator of flattening ratio",
            "t": "Vertical resolution",
            "u": "Vertical encoding method",
            "v": "Local planar, local, or other projection or grid description",
            "w": "Local planar or local georeference information"
        },
        "indicador_1": {
            "0": "Horizontal coordinate system",
            "1": "Vertical coordinate system",
            " ": "Indefinido"
        },
        "indicador_2": {
            "0": "Geographic",
            "1": "Map projection",
            "2": "Grid coordinate system",
            "3": "Local planar",
            "4": "Local",
            " ": "Indefinido"
        }
    },
    "343": {
        "nombre_generico": "Planar Coordinate Data",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Planar coordinate encoding method",
            "b": "Planar distance units",
            "c": "Abscissa resolution",
            "d": "Ordinate resolution",
            "e": "Distance resolution",
            "f": "Bearing resolution",
            "g": "Bearing units",
            "h": "Bearing reference direction",
            "i": "Bearing reference meridian"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "344": {
        "nombre_generico": "Sound Characteristics",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Type of recording",
            "b": "Recording medium",
            "c": "Playing speed",
            "d": "Groove characteristic",
            "e": "Track configuration",
            "f": "Tape configuration",
            "g": "Configuration of playback channels",
            "h": "Special playback characteristics",
            "i": "Sound content",
            "j": "Original capture and storage technique"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "345": {
        "nombre_generico": "Moving Image Characteristics",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Presentation format",
            "b": "Projection speed",
            "c": "Aspect ratio value",
            "d": "Aspect ratio designator"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "346": {
        "nombre_generico": "Video Characteristics",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Video format",
            "b": "Broadcast standard"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "347": {
        "nombre_generico": "Digital File Characteristics",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "File type",
            "b": "Encoding format",
            "c": "File size",
            "d": "Resolution",
            "e": "Regional encoding",
            "f": "Encoded bitrate"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "348": {
        "nombre_generico": "Notated Music Characteristics",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of term",
            "3": "Materials specified",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Format of notated music term",
            "b": "Format of notated music code",
            "c": "Form of musical notation term",
            "d": "Form of musical notation code"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "351": {
        "nombre_generico": "Organization and Arrangement of Materials",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Organization",
            "b": "Arrangement",
            "c": "Hierarchical level"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "352": {
        "nombre_generico": "Digital Graphic Representation",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Direct reference method",
            "b": "Object type",
            "c": "Object count",
            "d": "Row count",
            "e": "Column count",
            "f": "Vertical count",
            "g": "VPF topology level",
            "i": "Indirect reference description",
            "q": "Format of the digital image"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "353": {
        "nombre_generico": "Supplementary Content Characteristics",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Supplementary content term",
            "b": "Supplementary content code"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "355": {
        "nombre_generico": "Security Classification Control",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Security classification",
            "b": "Handling instructions",
            "c": "External dissemination information",
            "d": "Downgrading or declassification event",
            "e": "Classification system",
            "f": "Country of origin code",
            "g": "Downgrading date",
            "h": "Declassification date",
            "j": "Authorization"
        },
        "indicador_1": {
            "0": "Document",
            "1": "Title",
            "2": "Abstract",
            "3": "Contents note",
            "4": "Author",
            "5": "Record",
            "8": "None of the above",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "357": {
        "nombre_generico": "Originator Dissemination Control",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Originator control term",
            "b": "Originating agency",
            "c": "Authorized recipients of material",
            "g": "Other restrictions"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "361": {
        "nombre_generico": "Structured Ownership and Custodial History",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "3": "Materials specified",
            "5": "Institution to which field applies",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Name",
            "f": "Ownership and custodial history evidence term",
            "k": "Formatted date",
            "l": "Date",
            "o": "Type of ownership and custodial history information",
            "s": "Shelf mark of copy described",
            "u": "Uniform Resource Identifier",
            "x": "Nonpublic note",
            "y": "Identifier of the copy described",
            "z": "Public note"
        },
        "indicador_1": {
            "0": "Private",
            "1": "Not private",
            " ": "No information provided",
            "#": "No information provided"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "362": {
        "nombre_generico": "Dates of Publication and/or Sequential Designation",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Dates of publication and/or sequential designation",
            "z": "Source of information"
        },
        "indicador_1": {
            "0": "Formatted style",
            "1": "Unformatted note",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "363": {
        "nombre_generico": "Normalized Date and Sequential Designation",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "First level of enumeration",
            "b": "Second level of enumeration",
            "c": "Third level of enumeration",
            "d": "Fourth level of enumeration",
            "e": "Fifth level of enumeration",
            "f": "Sixth level of enumeration",
            "g": "Alternative numbering scheme, first level of enumeration",
            "h": "Alternative numbering scheme, second level of enumeration",
            "i": "First level of chronology",
            "j": "Second level of chronology",
            "k": "Third level of chronology",
            "l": "Fourth level of chronology",
            "m": "Alternative numbering scheme, chronology",
            "u": "First level textual designation",
            "v": "First level of chronology, issuance",
            "x": "Nonpublic note",
            "z": "Public note"
        },
        "indicador_1": {
            "0": "Starting information",
            "1": "Ending information",
            " ": "No information provided",
            "#": "No information provided"
        },
        "indicador_2": {
            "0": "Closed",
            "1": "Open",
            " ": "Not specified",
            "#": "Not specified"
        }
    },
    "365": {
        "nombre_generico": "Trade Price",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Source of price type code",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Price type code",
            "b": "Price amount",
            "c": "Currency code",
            "d": "Unit of pricing",
            "e": "Price note",
            "f": "Price effective from",
            "g": "Price effective until",
            "h": "Tax rate 1",
            "i": "Tax rate 2",
            "j": "ISO country code",
            "k": "MARC country code",
            "m": "Identification of pricing entity"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "366": {
        "nombre_generico": "Trade Availability Information",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Source of availability status code",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Publishers' compressed title identification",
            "b": "Detailed date of publication",
            "c": "Availability status code",
            "d": "Expected next availability date",
            "e": "Note",
            "f": "Publisher's discount category",
            "g": "Date made out of print",
            "j": "ISO country code",
            "k": "MARC country code",
            "m": "Identification of agency"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "370": {
        "nombre_generico": "Associated Place",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of term",
            "3": "Materials specified",
            "4": "Relationship",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "c": "Associated country",
            "f": "Other associated place",
            "g": "Place of origin of work or expression",
            "i": "Relationship information",
            "s": "Start period",
            "t": "End period",
            "u": "Uniform Resource Identifier",
            "v": "Source of information"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "377": {
        "nombre_generico": "Associated Language",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "3": "Materials specified",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Language code",
            "l": "Language term"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            "7": "Source specified in $2",
            " ": "MARC language code",
            "#": "MARC language code"
        }
    },
    "380": {
        "nombre_generico": "Form of Work",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of term",
            "3": "Materials specified",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Form of work"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "381": {
        "nombre_generico": "Other Distinguishing Characteristics of Work or Expression",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of term",
            "3": "Materials specified",
            "4": "Relationship",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Other distinguishing characteristic",
            "i": "Relationship information",
            "u": "Uniform Resource Identifier",
            "v": "Source of information"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "382": {
        "nombre_generico": "Medium of Performance",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of term",
            "3": "Materials specified",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Medium of performance",
            "b": "Soloist",
            "d": "Doubling instrument",
            "e": "Number of ensembles of the same type",
            "n": "Number of performers of the same medium",
            "p": "Alternative medium of performance",
            "r": "Total number of individuals performing alongside ensembles",
            "s": "Total number of performers",
            "t": "Total number of ensembles",
            "v": "Note"
        },
        "indicador_1": {
            "0": "Medium of performance",
            "1": "Partial medium of performance",
            "2": "Medium of performance of musical content of representative expression",
            "3": "Partial medium of performance of musical content of representative expression",
            " ": "No information provided",
            "#": "No information provided"
        },
        "indicador_2": {
            "0": "Not intended for access",
            "1": "Intended for access",
            " ": "No information provided",
            "#": "No information provided"
        }
    },
    "383": {
        "nombre_generico": "Numeric Designation of Musical Work or Expression",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Source",
            "3": "Materials specified",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Serial number",
            "b": "Opus number",
            "c": "Thematic index number",
            "d": "Thematic index code",
            "e": "Publisher associated with opus number"
        },
        "indicador_1": {
            "0": "Work",
            "1": "Expression",
            " ": "No information provided",
            "#": "No information provided"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "384": {
        "nombre_generico": "Key",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "3": "Materials specified",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Key"
        },
        "indicador_1": {
            "0": "Original key",
            "1": "Transposed key",
            "2": "Key of representative expression",
            " ": "Relationship to original unknown",
            "#": "Relationship to original unknown"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "385": {
        "nombre_generico": "Audience Characteristics",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "3": "Materials specified",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Audience term",
            "b": "Audience code",
            "m": "Demographic group term",
            "n": "Demographic group code"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "386": {
        "nombre_generico": "Creator/Contributor Characteristics",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "3": "Materials specified",
            "4": "Relationship",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Creator/contributor term",
            "b": "Creator/contributor code",
            "i": "Relationship information",
            "m": "Demographic group term",
            "n": "Demographic group code"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "387": {
        "nombre_generico": "Representative Expression Characteristics",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "a": "Aspect ratio of representative expression",
            "b": "Color content of representative expression",
            "c": "Content type of representative expression",
            "d": "Date of capture of representative expression",
            "e": "Date of representative expression",
            "f": "Duration of representative expression",
            "g": "Intended audience of representative expression"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "388": {
        "nombre_generico": "Time Period of Creation",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            "1": "Creation of work",
            "2": "Creation of aggregate work",
            " ": "No information provided",
            "#": "No information provided"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "490": {
        "nombre_generico": "Series Statement",
        "repetible": true,
        "predeterminados": [
            "a",
            "v"
        ],
        "subcampos": {
            "3": "Materials specified",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Series statement",
            "v": "Volume/sequential designation",
            "l": "Library of Congress call number",
            "x": "International Standard Serial Number",
            "y": "Incorrect ISSN",
            "z": "Canceled ISSN"
        },
        "indicador_1": {
            "0": "Series not traced",
            "1": "Series traced"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "500": {
        "nombre_generico": "Nota general",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "3": "Materials specified",
            "5": "Institution to which field applies",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Nota general"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "501": {
        "nombre_generico": "With Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "5": "Institution to which field applies",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "With note"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "502": {
        "nombre_generico": "Dissertation Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Dissertation note",
            "b": "Degree type",
            "c": "Name of granting institution",
            "d": "Year degree granted",
            "g": "Miscellaneous information",
            "o": "Dissertation identifier"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "504": {
        "nombre_generico": "Bibliography, Etc. Note",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Bibliography, etc. note",
            "b": "Number of references"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "505": {
        "nombre_generico": "Formatted Contents Note",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Formatted contents note",
            "g": "Miscellaneous information",
            "r": "Statement of responsibility",
            "t": "Title",
            "u": "Uniform Resource Identifier"
        },
        "indicador_1": {
            "0": "Contents",
            "1": "Incomplete contents",
            "2": "Partial contents",
            "8": "No display constant generated"
        },
        "indicador_2": {
            "0": "Enhanced",
            " ": "Basic"
        }
    },
    "506": {
        "nombre_generico": "Restrictions on Access Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of term",
            "3": "Materials specified",
            "5": "Institution to which field applies",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Terms governing access",
            "b": "Jurisdiction",
            "c": "Physical access provisions",
            "d": "Authorized users",
            "e": "Authorization",
            "f": "Standardized terminology for access restriction",
            "g": "Availability date",
            "q": "Supplying agency",
            "u": "Uniform Resource Identifier"
        },
        "indicador_1": {
            "0": "No restrictions",
            "1": "Restrictions apply",
            " ": "No information provided",
            "#": "No information provided"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "507": {
        "nombre_generico": "Scale Note for Visual Materials",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Representative fraction of scale note",
            "b": "Remainder of scale note"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "508": {
        "nombre_generico": "Creation/Production Credits Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Creation/production credits note"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "510": {
        "nombre_generico": "Citation/References Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Name of source",
            "b": "Coverage of source",
            "c": "Location within source",
            "u": "Uniform Resource Identifier",
            "x": "International Standard Serial Number"
        },
        "indicador_1": {
            "0": "Coverage unknown",
            "1": "Coverage complete",
            "2": "Coverage is selective",
            "3": "Location in source not given",
            "4": "Location in source given",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "511": {
        "nombre_generico": "Participant or Performer Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Participant or performer note"
        },
        "indicador_1": {
            "0": "No display constant generated",
            "1": "Cast",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "513": {
        "nombre_generico": "Type of Report and Period Covered Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Type of report",
            "b": "Period covered"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "514": {
        "nombre_generico": "Data Quality Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Attribute accuracy report",
            "b": "Attribute accuracy value",
            "c": "Attribute accuracy explanation",
            "d": "Logical consistency report",
            "e": "Completeness report",
            "f": "Horizontal position accuracy report",
            "g": "Horizontal position accuracy value",
            "h": "Horizontal position accuracy explanation",
            "i": "Vertical positional accuracy report",
            "j": "Vertical positional accuracy value",
            "k": "Vertical positional accuracy explanation",
            "m": "Cloud cover",
            "u": "Uniform Resource Identifier",
            "z": "Display note"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "515": {
        "nombre_generico": "Numbering Peculiarities Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Numbering peculiarities note"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "516": {
        "nombre_generico": "Type of Computer File or Data Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Type of computer file or data note"
        },
        "indicador_1": {
            "8": "No display constant generated",
            " ": "Type of file",
            "#": "Type of file"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "518": {
        "nombre_generico": "Date/Time and Place of an Event Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of term",
            "3": "Materials specified",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Date/time and place of an event note",
            "d": "Date of event",
            "o": "Other event information",
            "p": "Place of event"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "520": {
        "nombre_generico": "Summary, Etc.",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "2": "Source",
            "3": "Materials specified",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Summary, etc.",
            "b": "Expansion of summary note",
            "c": "Assigning source",
            "u": "Uniform Resource Identifier"
        },
        "indicador_1": {
            "0": "Subject",
            "1": "Review",
            "2": "Scope and content",
            "3": "Abstract",
            "4": "Content advice",
            "8": "No display constant generated",
            " ": "Summary"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "521": {
        "nombre_generico": "Target Audience Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Target audience note",
            "b": "Source"
        },
        "indicador_1": {
            "0": "Reading grade level",
            "1": "Interest age level",
            "2": "Interest grade level",
            "3": "Special audience characteristics",
            "4": "Motivation/interest level",
            "8": "No display constant generated",
            " ": "Audience",
            "#": "Audience"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "522": {
        "nombre_generico": "Geographic Coverage Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Geographic coverage note"
        },
        "indicador_1": {
            "8": "No display constant generated",
            " ": "Geographic coverage",
            "#": "Geographic coverage"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "524": {
        "nombre_generico": "Preferred Citation of Described Materials Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Source of schema used",
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Preferred citation of described materials note"
        },
        "indicador_1": {
            "8": "No display constant generated",
            " ": "Cite as",
            "#": "Cite as"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "525": {
        "nombre_generico": "Supplement Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Supplement note"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "526": {
        "nombre_generico": "Study Program Information Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "5": "Institution to which field applies",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Program name",
            "b": "Interest level",
            "c": "Reading level",
            "d": "Title point value",
            "i": "Display text",
            "x": "Nonpublic note",
            "z": "Public note"
        },
        "indicador_1": {
            "0": "Reading program",
            "8": "No display constant generated",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "530": {
        "nombre_generico": "Additional Physical Form Available Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Additional physical form available note",
            "b": "Availability source",
            "c": "Availability conditions",
            "d": "Order number",
            "u": "Uniform Resource Identifier"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "532": {
        "nombre_generico": "Accessibility Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Summary of accessibility"
        },
        "indicador_1": {
            "0": "Accessibility technical details",
            "1": "Accessibility features",
            "2": "Accessibility deficiencies",
            "8": "No display constant generated",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "533": {
        "nombre_generico": "Reproduction Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "5": "Institution to which field applies",
            "6": "Linkage",
            "7": "Fixed-length data elements of reproduction",
            "8": "Field link and sequence number",
            "a": "Type of reproduction",
            "b": "Place of reproduction",
            "c": "Agency responsible for reproduction",
            "d": "Date of reproduction",
            "e": "Physical description of reproduction",
            "f": "Series statement of reproduction",
            "m": "Dates and/or sequential designation of issues reproduced",
            "n": "Note about reproduction",
            "y": "Data provenance"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "534": {
        "nombre_generico": "Original Version Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Main entry of original",
            "b": "Edition statement of original",
            "c": "Publication, distribution, etc. of original",
            "e": "Physical description, etc. of original",
            "f": "Series statement of original",
            "k": "Key title of original",
            "l": "Location of original",
            "m": "Detalles específicos del material",
            "n": "Note about original",
            "o": "Other resource identifier",
            "p": "Introductory phrase",
            "t": "Title statement of original",
            "x": "International Standard Serial Number",
            "z": "International Standard Book Number"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "535": {
        "nombre_generico": "Location of Originals/Duplicates Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Custodian",
            "b": "Postal address",
            "c": "Country",
            "d": "Telecommunications address",
            "g": "Repository location"
        },
        "indicador_1": {
            "1": "Holder of originals",
            "2": "Holder of duplicates",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "536": {
        "nombre_generico": "Funding Information Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Text of note",
            "b": "Contract number",
            "c": "Grant number",
            "d": "Undifferentiated number",
            "e": "Program element number",
            "f": "Project number",
            "g": "Task number",
            "h": "Work unit number"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "538": {
        "nombre_generico": "System Details Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "5": "Institution to which field applies",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "System details note",
            "i": "Display text",
            "u": "Uniform Resource Identifier"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "540": {
        "nombre_generico": "Terms Governing Use and Reproduction Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of term",
            "3": "Materials specified",
            "5": "Institution to which field applies",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Terms governing use and reproduction",
            "b": "Jurisdiction",
            "c": "Authorization",
            "d": "Authorized users",
            "f": "Standardized terminology for use and reproduction rights",
            "g": "Availability date",
            "q": "Supplying agency",
            "u": "Uniform Resource Identifier"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "541": {
        "nombre_generico": "Immediate Source of Acquisition Note",
        "repetible": true,
        "predeterminados": [
            "c",
            "a",
            "d",
            "h"
        ],
        "subcampos": {
            "3": "Materials specified",
            "5": "Institution to which field applies",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Source of acquisition",
            "c": "Method of acquisition",
            "d": "Date of acquisition",
            "h": "Purchase price",
            "b": "Address",
            "e": "Accession number",
            "f": "Owner",
            "n": "Extent",
            "o": "Type of unit"
        },
        "indicador_1": {
            "0": "Private",
            "1": "Not private",
            " ": "No information provided"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "542": {
        "nombre_generico": "Information Relating to Copyright Status",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Personal creator",
            "b": "Personal creator death date",
            "c": "Corporate creator",
            "d": "Copyright holder",
            "e": "Copyright holder contact information",
            "f": "Copyright statement",
            "g": "Copyright date",
            "h": "Copyright renewal date",
            "i": "Publication date",
            "j": "Creation date",
            "k": "Publisher",
            "l": "Copyright status",
            "m": "Publication status",
            "n": "Note",
            "o": "Research date",
            "p": "Country of publication or creation",
            "q": "Supplying agency",
            "r": "Jurisdiction of copyright assessment",
            "s": "Source of information",
            "u": "Uniform Resource Identifier"
        },
        "indicador_1": {
            "0": "Private",
            "1": "Not private",
            " ": "No information provided",
            "#": "No information provided"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "544": {
        "nombre_generico": "Location of Other Archival Materials Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Custodian",
            "b": "Address",
            "c": "Country",
            "d": "Title",
            "e": "Provenance",
            "n": "Note"
        },
        "indicador_1": {
            "0": "Associated materials",
            "1": "Related materials",
            " ": "No information provided",
            "#": "No information provided"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "545": {
        "nombre_generico": "Biographical or Historical Data",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Biographical or historical data",
            "b": "Expansion",
            "u": "Uniform Resource Identifier"
        },
        "indicador_1": {
            "0": "Biographical sketch",
            "1": "Administrative history",
            " ": "No information provided",
            "#": "No information provided"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "546": {
        "nombre_generico": "Language Note",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "3": "Materials specified",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Language note",
            "b": "Information code or alphabet"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "547": {
        "nombre_generico": "Former Title Complexity Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Former title complexity note"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "550": {
        "nombre_generico": "Issuing Body Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Issuing body note"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "552": {
        "nombre_generico": "Entity and Attribute Information Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Entity type label",
            "b": "Entity type definition and source",
            "c": "Attribute label",
            "d": "Attribute definition and source",
            "e": "Enumerated domain value",
            "f": "Enumerated domain value definition and source",
            "g": "Range domain minimum and maximum",
            "h": "Codeset name and source",
            "i": "Unrepresentable domain",
            "j": "Attribute units of measurement and resolution",
            "k": "Beginning and ending date of attribute values",
            "l": "Attribute value accuracy",
            "m": "Attribute value accuracy explanation",
            "n": "Attribute measurement frequency",
            "o": "Entity and attribute overview",
            "p": "Entity and attribute detail citation",
            "u": "Uniform Resource Identifier",
            "z": "Display note"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "555": {
        "nombre_generico": "Cumulative Index/Finding Aids Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Cumulative index/finding aids note",
            "b": "Availability source",
            "c": "Degree of control",
            "d": "Bibliographic reference",
            "u": "Uniform Resource Identifier"
        },
        "indicador_1": {
            "0": "Finding aids",
            "8": "No display constant generated",
            " ": "Indexes",
            "#": "Indexes"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "556": {
        "nombre_generico": "Information About Documentation Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Information about documentation note",
            "z": "International Standard Book Number"
        },
        "indicador_1": {
            "8": "No display constant generated",
            " ": "Documentation",
            "#": "Documentation"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "561": {
        "nombre_generico": "Ownership and Custodial History",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "5": "Institution to which field applies",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "History",
            "u": "Uniform Resource Identifier"
        },
        "indicador_1": {
            "0": "Private",
            "1": "Not private",
            " ": "No information provided",
            "#": "No information provided"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "562": {
        "nombre_generico": "Copy and Version Identification Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "5": "Institution to which field applies",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Identifying markings",
            "b": "Copy identification",
            "c": "Version identification",
            "d": "Presentation format",
            "e": "Number of copies"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "563": {
        "nombre_generico": "Binding Information",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "5": "Institution to which field applies",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Binding note",
            "u": "Uniform Resource Identifier"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "565": {
        "nombre_generico": "Case File Characteristics Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Number of cases/variables",
            "b": "Name of variable",
            "c": "Unit of analysis",
            "d": "Universe of data",
            "e": "Filing scheme or"
        },
        "indicador_1": {
            "0": "Case file characteristics",
            "8": "No display constant generated",
            " ": "File size",
            "#": "File size"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "567": {
        "nombre_generico": "Methodology Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of term",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Methodology note",
            "b": "Controlled term"
        },
        "indicador_1": {
            "8": "No display constant generated",
            " ": "Methodology",
            "#": "Methodology"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "580": {
        "nombre_generico": "Linking Entry Complexity Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "5": "Institution to which field applies",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Linking entry complexity note"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "581": {
        "nombre_generico": "Publications About Described Materials Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Publications about described materials note",
            "z": "International Standard Book Number"
        },
        "indicador_1": {
            "8": "No display constant generated",
            " ": "Publications",
            "#": "Publications"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "583": {
        "nombre_generico": "Action Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Source of term",
            "3": "Materials specified",
            "5": "Institution to which field applies",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Action",
            "b": "Action identification",
            "c": "Time/date of action",
            "d": "Action interval",
            "e": "Contingency for action",
            "f": "Authorization",
            "h": "Jurisdiction",
            "i": "Method of action",
            "j": "Site of action",
            "k": "Action agent",
            "l": "Status",
            "n": "Extent",
            "o": "Type of unit",
            "u": "Uniform Resource Identifier",
            "x": "Nonpublic note",
            "z": "Public note"
        },
        "indicador_1": {
            "0": "Private",
            "1": "Not private",
            " ": "No information provided",
            "#": "No information provided"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "584": {
        "nombre_generico": "Accumulation and Frequency of Use Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "5": "Institution to which field applies",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Accumulation",
            "b": "Frequency of use"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "585": {
        "nombre_generico": "Exhibitions Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "5": "Institution to which field applies",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Exhibitions note"
        },
        "indicador_1": {
            " ": "Undefined",
            "#": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "586": {
        "nombre_generico": "Awards Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Awards note"
        },
        "indicador_1": {
            "8": "No display constant generated",
            " ": "Awards",
            "#": "Awards"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "588": {
        "nombre_generico": "Source of Description Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "5": "Institution to which field applies",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Source of description note"
        },
        "indicador_1": {
            "0": "Source of description",
            "1": "Latest issue consulted",
            " ": "No information provided",
            "#": "No information provided"
        },
        "indicador_2": {
            " ": "Undefined",
            "#": "Undefined"
        }
    },
    "598": {
        "nombre_generico": "Local Note",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "a": "Local note"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "600": {
        "nombre_generico": "Subject Added Entry-Personal Name",
        "repetible": true,
        "predeterminados": [
            "a",
            "v"
        ],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of heading or term",
            "3": "Materials specified",
            "4": "Relationship",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Personal name",
            "v": "Form subdivision",
            "x": "Subdivisión general",
            "y": "Chronological subdivision",
            "z": "Geographic subdivision",
            "b": "Numeration",
            "c": "Titles and other words associated with a name",
            "d": "Dates associated with a name",
            "e": "Relator term",
            "f": "Date of a work",
            "g": "Miscellaneous information",
            "h": "Medium",
            "j": "Attribution qualifier",
            "k": "Form subheading",
            "l": "Language of a work",
            "m": "Medium of performance for music",
            "n": "Number of part/section of a work",
            "o": "Arranged statement for music",
            "p": "Name of part/section of a work",
            "q": "Fuller form of name",
            "r": "Key for music",
            "s": "Version",
            "t": "Title of a work",
            "u": "Affiliation"
        },
        "indicador_1": {
            "0": "Nombre de pila",
            "1": "Apellido",
            "3": "Nombre de familia"
        },
        "indicador_2": {
            "0": "LC",
            "1": "LC infantil",
            "2": "MeSH",
            "4": "Not specified",
            "7": "Source in subfield $2"
        }
    },
    "610": {
        "nombre_generico": "Subject Added Entry-Corporate Name",
        "repetible": true,
        "predeterminados": [
            "a",
            "v"
        ],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of heading or term",
            "3": "Materials specified",
            "4": "Relationship",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Corporate name or jurisdiction name as entry element",
            "v": "Form subdivision",
            "x": "Subdivisión general",
            "y": "Chronological subdivision",
            "z": "Geographic subdivision",
            "b": "Subordinate unit",
            "c": "Location of meeting",
            "d": "Date of meeting or treaty signing",
            "e": "Relator term",
            "f": "Date of a work",
            "g": "Miscellaneous information",
            "h": "Medium",
            "k": "Form subheading",
            "l": "Language of a work",
            "m": "Medium of performance for music",
            "n": "Number of part/section/meeting",
            "o": "Arranged statement for music",
            "p": "Name of part/section of a work",
            "r": "Key for music",
            "s": "Version",
            "t": "Title of a work",
            "u": "Affiliation"
        },
        "indicador_1": {
            "0": "Nombre invertido",
            "1": "Jurisdiction",
            "2": "Orden directo"
        },
        "indicador_2": {
            "0": "LC",
            "2": "MeSH",
            "4": "Not specified",
            "7": "Source in subfield $2"
        }
    },
    "611": {
        "nombre_generico": "Subject Added Entry-Meeting Name",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of heading or term",
            "3": "Materials specified",
            "4": "Relationship",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Meeting name or jurisdiction name as entry element",
            "c": "Location of meeting",
            "d": "Date of meeting or treaty signing",
            "e": "Subordinate unit",
            "f": "Date of a work",
            "g": "Miscellaneous information",
            "h": "Medium",
            "j": "Relator term",
            "k": "Form subheading",
            "l": "Language of a work",
            "n": "Number of part/section/meeting",
            "p": "Name of part/section of a work",
            "q": "Name of meeting following jurisdiction name entry element",
            "s": "Version",
            "t": "Title of a work",
            "u": "Affiliation",
            "v": "Form subdivision",
            "x": "Subdivisión general",
            "y": "Chronological subdivision",
            "z": "Geographic subdivision"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "630": {
        "nombre_generico": "Subject Added Entry-Uniform Title",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of heading or term",
            "3": "Materials specified",
            "4": "Relationship",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Uniform title",
            "d": "Date of treaty signing",
            "e": "Relator term",
            "f": "Date of a work",
            "g": "Miscellaneous information",
            "h": "Medium",
            "k": "Form subheading",
            "l": "Language of a work",
            "m": "Medium of performance for music",
            "n": "Number of part/section of a work",
            "o": "Arranged statement for music",
            "p": "Name of part/section of a work",
            "r": "Key for music",
            "s": "Version",
            "t": "Title of a work",
            "v": "Form subdivision",
            "x": "Subdivisión general",
            "y": "Chronological subdivision",
            "z": "Geographic subdivision"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "647": {
        "nombre_generico": "Subject Added Entry-Named Event",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of heading or term",
            "3": "Materials specified",
            "4": "Relationship",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Named event",
            "c": "Location of named event",
            "d": "Date of named event",
            "e": "Relator term",
            "g": "Miscellaneous information",
            "v": "Form subdivision",
            "x": "Subdivisión general",
            "y": "Chronological subdivision",
            "z": "Geographic subdivision"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "648": {
        "nombre_generico": "Subject Added Entry-Chronological Term",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of heading or term",
            "3": "Materials specified",
            "4": "Relationship",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Chronological term",
            "e": "Relator term",
            "v": "Form subdivision",
            "x": "Subdivisión general",
            "y": "Chronological subdivision",
            "z": "Geographic subdivision"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "650": {
        "nombre_generico": "Subject Added Entry-Topical Term",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of heading or term",
            "3": "Materials specified",
            "4": "Relationship",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Topical term or geographic name entry element",
            "v": "Form subdivision",
            "x": "Subdivisión general",
            "y": "Chronological subdivision",
            "z": "Geographic subdivision",
            "b": "Topical term following geographic name entry element",
            "c": "Location of event",
            "d": "Active dates",
            "e": "Relator term",
            "g": "Miscellaneous information"
        },
        "indicador_1": {
            "0": "Unspecified",
            "1": "Primary",
            "2": "Secundaria",
            " ": "No info"
        },
        "indicador_2": {
            "0": "LC",
            "1": "LC infantil",
            "2": "MeSH",
            "4": "Not specified",
            "7": "Source in subfield $2"
        }
    },
    "651": {
        "nombre_generico": "Subject Added Entry-Geographic Name",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of heading or term",
            "3": "Materials specified",
            "4": "Relationship",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Geographic name",
            "v": "Form subdivision",
            "x": "Subdivisión general",
            "y": "Chronological subdivision",
            "z": "Geographic subdivision",
            "e": "Relator term",
            "g": "Miscellaneous information"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            "0": "LC",
            "1": "LC infantil",
            "2": "MeSH",
            "4": "Not specified",
            "7": "Source in subfield $2"
        }
    },
    "653": {
        "nombre_generico": "Index Term-Uncontrolled",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "5": "Institution to which field applies",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Uncontrolled term"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "654": {
        "nombre_generico": "Subject Added Entry-Faceted Topical Terms",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of heading or term",
            "3": "Materials specified",
            "4": "Relationship",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Focus term",
            "b": "Non-focus term",
            "c": "Facet/hierarchy designation",
            "e": "Relator term",
            "v": "Form subdivision",
            "y": "Chronological subdivision",
            "z": "Geographic subdivision"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "655": {
        "nombre_generico": "Index Term-Genre/Form",
        "repetible": true,
        "predeterminados": [
            "a",
            "2"
        ],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of term",
            "3": "Materials specified",
            "5": "Institution to which field applies",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Genre/form data or focus term",
            "v": "Form subdivision",
            "x": "Subdivisión general",
            "y": "Chronological subdivision",
            "z": "Geographic subdivision",
            "b": "Non-focus term",
            "c": "Facet/hierarchy designation"
        },
        "indicador_1": {
            "0": "Facetado",
            " ": "Basic"
        },
        "indicador_2": {
            "0": "LC",
            "2": "MeSH",
            "4": "Not specified",
            "7": "Source in subfield $2"
        }
    },
    "656": {
        "nombre_generico": "Index Term-Occupation",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "657": {
        "nombre_generico": "Index Term-Function",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "658": {
        "nombre_generico": "Index Term-Curriculum Objective",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "662": {
        "nombre_generico": "Subject Added Entry-Hierarchical Place Name",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "688": {
        "nombre_generico": "Subject Added Entry-Type of Entity Unspecified",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "700": {
        "nombre_generico": "Added Entry-Personal Name",
        "repetible": true,
        "predeterminados": [
            "a",
            "d",
            "e"
        ],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of heading or term",
            "3": "Materials specified",
            "4": "Relationship",
            "5": "Institution to which field applies",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Personal name",
            "d": "Dates associated with a name",
            "e": "Relator term",
            "t": "Title of a work",
            "b": "Numeration",
            "c": "Titles and other words associated with a name",
            "f": "Date of a work",
            "g": "Miscellaneous information",
            "h": "Medium",
            "i": "Relationship information",
            "j": "Attribution qualifier",
            "k": "Form subheading",
            "l": "Language of a work",
            "m": "Medium of performance for music",
            "n": "Number of part/section of a work",
            "o": "Arranged statement for music",
            "p": "Name of part/section of a work",
            "q": "Fuller form of name",
            "r": "Key for music",
            "s": "Version",
            "u": "Affiliation",
            "x": "International Standard Serial Number"
        },
        "indicador_1": {
            "0": "Nombre de pila",
            "1": "Apellido",
            "3": "Nombre de familia"
        },
        "indicador_2": {
            "2": "Analytical entry",
            " ": "No se provee info"
        }
    },
    "710": {
        "nombre_generico": "Added Entry-Corporate Name",
        "repetible": true,
        "predeterminados": [
            "a",
            "b",
            "e"
        ],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of heading or term",
            "3": "Materials specified",
            "4": "Relationship",
            "5": "Institution to which field applies",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Corporate name or jurisdiction name as entry element",
            "b": "Subordinate unit",
            "e": "Relator term",
            "c": "Location of meeting",
            "d": "Date of meeting or treaty signing",
            "f": "Date of a work",
            "g": "Miscellaneous information",
            "h": "Medium",
            "i": "Relationship information",
            "k": "Form subheading",
            "l": "Language of a work",
            "m": "Medium of performance for music",
            "n": "Number of part/section/meeting",
            "o": "Arranged statement for music",
            "p": "Name of part/section of a work",
            "r": "Key for music",
            "s": "Version",
            "t": "Title of a work",
            "u": "Affiliation",
            "x": "International Standard Serial Number"
        },
        "indicador_1": {
            "0": "Nombre invertido",
            "1": "Jurisdiction",
            "2": "Orden directo"
        },
        "indicador_2": {
            "2": "Analytical entry",
            " ": "No se provee info"
        }
    },
    "711": {
        "nombre_generico": "Added Entry-Meeting Name",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "720": {
        "nombre_generico": "Added Entry-Uncontrolled Name",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "730": {
        "nombre_generico": "Added Entry-Uniform Title",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "740": {
        "nombre_generico": "Added Entry-Uncontrolled Related/Analytical Title",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "751": {
        "nombre_generico": "Added Entry-Geographic Name",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "752": {
        "nombre_generico": "Added Entry-Hierarchical Place Name",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "753": {
        "nombre_generico": "System Details Access to Computer Files",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "754": {
        "nombre_generico": "Added Entry-Taxonomic Identification",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "758": {
        "nombre_generico": "Resource Identifier",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "760": {
        "nombre_generico": "Main Series Entry",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "762": {
        "nombre_generico": "Subseries Entry",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "765": {
        "nombre_generico": "Original Language Entry",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "767": {
        "nombre_generico": "Translation Entry",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "770": {
        "nombre_generico": "Supplement/Special Issue Entry",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "772": {
        "nombre_generico": "Supplement Parent Entry",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "773": {
        "nombre_generico": "Host Item Entry",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "774": {
        "nombre_generico": "Constituent Unit Entry",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "775": {
        "nombre_generico": "Other Edition Entry",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "776": {
        "nombre_generico": "Additional Physical Form Entry",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "777": {
        "nombre_generico": "Issued With Entry",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "780": {
        "nombre_generico": "Preceding Entry",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "785": {
        "nombre_generico": "Succeeding Entry",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "786": {
        "nombre_generico": "Data Source Entry",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "787": {
        "nombre_generico": "Other Relationship Entry",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "788": {
        "nombre_generico": "Parallel Description in Another Language of Cataloging",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "800": {
        "nombre_generico": "Series Added Entry-Personal Name",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "810": {
        "nombre_generico": "Series Added Entry-Corporate Name",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "811": {
        "nombre_generico": "Series Added Entry-Meeting Name",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "830": {
        "nombre_generico": "Series Added Entry-Uniform Title",
        "repetible": true,
        "predeterminados": [
            "a",
            "v"
        ],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of heading or term",
            "3": "Materials specified",
            "5": "Institution to which field applies",
            "6": "Linkage",
            "7": "Control",
            "8": "Field link and sequence number",
            "a": "Uniform title",
            "v": "Volume/sequential designation",
            "d": "Date of treaty signing",
            "f": "Date of a work",
            "g": "Miscellaneous information",
            "h": "Medium",
            "k": "Form subheading",
            "l": "Language of a work",
            "m": "Medium of performance for music",
            "n": "Number of part/section of a work",
            "o": "Arranged statement for music",
            "p": "Name of part/section of a work",
            "r": "Key for music",
            "s": "Version",
            "t": "Title of a work",
            "w": "Bibliographic record control number",
            "x": "International Standard Serial Number",
            "y": "Data provenance"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            "0": "No nonfiling characters",
            "1": "1 nonfiling character",
            "2": "2 nonfiling characters",
            "3": "3 nonfiling characters",
            "4": "4 nonfiling characters",
            "5": "5 nonfiling characters",
            "6": "6 nonfiling characters",
            "7": "7 nonfiling characters",
            "8": "8 nonfiling characters",
            "9": "9 nonfiling characters"
        }
    },
    "841": {
        "nombre_generico": "Holdings Coded Data Values",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "842": {
        "nombre_generico": "Textual Physical Form Designator",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "843": {
        "nombre_generico": "Reproduction Note",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "844": {
        "nombre_generico": "Name of Unit",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "845": {
        "nombre_generico": "Terms Governing Use and Reproduction",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "850": {
        "nombre_generico": "Holding Institution",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "852": {
        "nombre_generico": "Location",
        "repetible": true,
        "predeterminados": [
            "a",
            "b",
            "h",
            "i"
        ],
        "subcampos": {
            "a": "Institution",
            "b": "Sublocation",
            "h": "Classification",
            "i": "Item number"
        },
        "indicador_1": {
            "0": "LC",
            "1": "DDC",
            "8": "Other",
            " ": "No info"
        },
        "indicador_2": {
            "0": "Not enumeration",
            "1": "Primary enumeration",
            " ": "No info"
        }
    },
    "853": {
        "nombre_generico": "Captions and Pattern - Basic Bibliographic Unit",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "854": {
        "nombre_generico": "Captions and Pattern - Supplementary Material",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "855": {
        "nombre_generico": "Captions and Pattern - Indexes",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "856": {
        "nombre_generico": "Electronic Location and Access",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "857": {
        "nombre_generico": "Electronic Archive Location and Access",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "863": {
        "nombre_generico": "Enumeration and Chronology - Basic Bibliographic Unit",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "864": {
        "nombre_generico": "Enumeration and Chronology - Supplementary Material",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "865": {
        "nombre_generico": "Enumeration and Chronology - Indexes",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "866": {
        "nombre_generico": "Textual Holdings - Basic Bibliographic Unit",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "867": {
        "nombre_generico": "Textual Holdings - Supplementary Material",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "868": {
        "nombre_generico": "Textual Holdings - Indexes",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "876": {
        "nombre_generico": "Item Information - Basic Bibliographic Unit",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "877": {
        "nombre_generico": "Item Information - Supplementary Material",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "878": {
        "nombre_generico": "Item Information - Indexes",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "880": {
        "nombre_generico": "Alternate Graphic Representation",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "881": {
        "nombre_generico": "Manifestation Statements",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "882": {
        "nombre_generico": "Replacement Record Information",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "883": {
        "nombre_generico": "Metadata Provenance",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "884": {
        "nombre_generico": "Description Conversion Information",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "885": {
        "nombre_generico": "Matching Information",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "886": {
        "nombre_generico": "Foreign MARC Information Field",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "887": {
        "nombre_generico": "Non-MARC Information Field",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "999": {
        "nombre_generico": "SirsiDynix Local Item Data",
        "repetible": true,
        "predeterminados": [
            "a",
            "c",
            "i",
            "k",
            "l",
            "t"
        ],
        "subcampos": {
            "a": "Classification",
            "c": "Copy",
            "i": "Barcode",
            "k": "Current location",
            "l": "Home location",
            "t": "Tipo material"
        },
        "indicador_1": {
            " ": "Locally defined"
        },
        "indicador_2": {
            " ": "Locally defined"
        }
    },
    "001": {
        "nombre_generico": "Control Number",
        "repetible": false,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "005": {
        "nombre_generico": "Date and Time of Latest Transaction",
        "repetible": false,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "006": {
        "nombre_generico": "Fixed-Length Data Elements -- Additional Material Characteristics",
        "repetible": false,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "007": {
        "nombre_generico": "Physical Description Fixed Field",
        "repetible": false,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "008": {
        "nombre_generico": "Fixed Length Data Elements",
        "repetible": false,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "010": {
        "nombre_generico": "Library of Congress Control Number",
        "repetible": false,
        "predeterminados": [
            "a",
            "b",
            "z",
            "8"
        ],
        "subcampos": {
            "8": "Field link and sequence number",
            "a": "LC control number",
            "b": "NUCMC control number",
            "z": "Canceled/invalid LC control number"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "013": {
        "nombre_generico": "Patent Control Information",
        "repetible": false,
        "predeterminados": [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f"
        ],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Number",
            "b": "Country",
            "c": "Type of number",
            "d": "Date",
            "e": "Status",
            "f": "Party to document"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "015": {
        "nombre_generico": "National Bibliography Number",
        "repetible": false,
        "predeterminados": [
            "a",
            "q",
            "z",
            "2",
            "6",
            "8"
        ],
        "subcampos": {
            "2": "Source",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "National bibliography number",
            "q": "Qualifying information",
            "z": "Canceled/invalid national bibliography number"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "016": {
        "nombre_generico": "National Bibliographic Agency Control Number",
        "repetible": false,
        "predeterminados": [
            "a",
            "z",
            "2",
            "8"
        ],
        "subcampos": {
            "2": "Source",
            "8": "Field link and sequence number",
            "a": "Record control number",
            "z": "Canceled/invalid control number"
        },
        "indicador_1": {
            "7": "Source specified in subfield $2",
            " ": "Library and Archives Canada"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "017": {
        "nombre_generico": "Copyright or Legal Deposit Number",
        "repetible": false,
        "predeterminados": [
            "a",
            "b",
            "d",
            "i",
            "z",
            "2"
        ],
        "subcampos": {
            "2": "Source",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Copyright or legal deposit number",
            "b": "Assigning agency",
            "d": "Date",
            "i": "Display text",
            "z": "Canceled/invalid copyright or legal deposit number"
        },
        "indicador_1": {
            "8": "No display constant generated",
            " ": "Undefined"
        },
        "indicador_2": {
            "8": "No display constant generated",
            " ": "Copyright or legal deposit number"
        }
    },
    "018": {
        "nombre_generico": "Copyright Article-Fee Code",
        "repetible": false,
        "predeterminados": [
            "a",
            "6",
            "8"
        ],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Copyright article-fee"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "020": {
        "nombre_generico": "International Standard Book Number",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "International Standard Book Number",
            "c": "Terms of availability",
            "q": "Qualifying information",
            "z": "Canceled/invalid ISBN"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "022": {
        "nombre_generico": "International Standard Serial Number",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "International Standard Serial Number",
            "y": "Incorrect ISSN",
            "z": "Canceled ISSN"
        },
        "indicador_1": {
            "0": "Continuing resource of international interest",
            "1": "Continuing resource not of international interest",
            " ": "No level specified"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "023": {
        "nombre_generico": "Cluster ISSN",
        "repetible": false,
        "predeterminados": [
            "a",
            "y",
            "z",
            "0",
            "1",
            "2"
        ],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Cluster ISSN",
            "y": "Incorrect Cluster ISSN",
            "z": "Canceled Cluster ISSN"
        },
        "indicador_1": {
            "0": "ISSN-L",
            "1": "ISSN-H",
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "024": {
        "nombre_generico": "Other Standard Identifier",
        "repetible": true,
        "predeterminados": [
            "a",
            "c",
            "d",
            "q",
            "z",
            "2"
        ],
        "subcampos": {
            "2": "Source of number or",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Standard number or",
            "c": "Terms of availability",
            "d": "Additional codes following the standard number or",
            "q": "Qualifying information",
            "z": "Canceled/invalid standard number or"
        },
        "indicador_1": {
            "0": "International Standard Recording Code",
            "1": "Universal Product Code",
            "2": "International Standard Music Number",
            "3": "International Article Number",
            "4": "Serial Item and Contribution Identifier",
            "7": "Source specified in subfield $2",
            "8": "Unspecified type of standard number or code",
            " ": "No information provided"
        },
        "indicador_2": {
            "0": "No difference",
            "1": "Difference",
            " ": "No information provided"
        }
    },
    "025": {
        "nombre_generico": "Overseas Acquisition Number",
        "repetible": false,
        "predeterminados": [
            "a",
            "8"
        ],
        "subcampos": {
            "8": "Field link and sequence number",
            "a": "Overseas acquisition number"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "026": {
        "nombre_generico": "Fingerprint Identifier",
        "repetible": false,
        "predeterminados": [
            "a",
            "b",
            "c",
            "d",
            "e",
            "2"
        ],
        "subcampos": {
            "2": "Source",
            "5": "Institution to which field applies",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "First and second groups of characters",
            "b": "Third and fourth groups of characters",
            "c": "Date",
            "d": "Number of volume or part",
            "e": "Unparsed fingerprint"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "027": {
        "nombre_generico": "Standard Technical Report Number",
        "repetible": false,
        "predeterminados": [
            "a",
            "q",
            "z",
            "6",
            "8"
        ],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Standard technical report number",
            "q": "Qualifying information",
            "z": "Canceled/invalid number"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "028": {
        "nombre_generico": "Publisher or Distributor Number",
        "repetible": false,
        "predeterminados": [
            "a",
            "b",
            "q",
            "6",
            "8"
        ],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Publisher or distributor number",
            "b": "Source",
            "q": "Qualifying information"
        },
        "indicador_1": {
            "0": "Issue number",
            "1": "Matrix number",
            "2": "Plate number",
            "3": "Other music publisher number",
            "4": "Video recording publisher number",
            "5": "Other publisher number",
            "6": "Distributor number",
            " ": "Undefined"
        },
        "indicador_2": {
            "0": "No note, no added entry",
            "1": "Note, added entry",
            "2": "Note, no added entry",
            "3": "No note, added entry",
            " ": "Undefined"
        }
    },
    "030": {
        "nombre_generico": "CODEN Designation",
        "repetible": false,
        "predeterminados": [
            "a",
            "z",
            "6",
            "8"
        ],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "CODEN",
            "z": "Canceled/invalid CODEN"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "031": {
        "nombre_generico": "Musical Incipits Information",
        "repetible": false,
        "predeterminados": [
            "a",
            "b",
            "c",
            "d",
            "e",
            "g"
        ],
        "subcampos": {
            "2": "System",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Number of work",
            "b": "Number of movement",
            "c": "Number of excerpt",
            "d": "Caption or heading",
            "e": "Role",
            "g": "Clef",
            "m": "Voice/instrument",
            "n": "Key signature",
            "o": "Time signature",
            "p": "Musical notation",
            "q": "Nota general",
            "r": "Key or mode",
            "s": "Coded validity note",
            "t": "Text incipit",
            "u": "Uniform Resource Identifier",
            "y": "Link text",
            "z": "Public note"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "032": {
        "nombre_generico": "Postal Registration Number",
        "repetible": false,
        "predeterminados": [
            "a",
            "z",
            "6",
            "8",
            "b"
        ],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Postal registration number",
            "b": "Source agency assigning number",
            "z": "Assigning agency"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "033": {
        "nombre_generico": "Date/Time and Place of an Event",
        "repetible": false,
        "predeterminados": [
            "a",
            "b",
            "c",
            "p",
            "0",
            "1"
        ],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of term",
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Formatted date/time",
            "b": "Geographic classification area",
            "c": "Geographic classification subarea",
            "p": "Place of event"
        },
        "indicador_1": {
            "0": "Single date",
            "1": "Multiple single dates",
            "2": "Range of dates",
            " ": "No date information"
        },
        "indicador_2": {
            "0": "Capture",
            "1": "Broadcast",
            "2": "Finding",
            " ": "No information provided"
        }
    },
    "034": {
        "nombre_generico": "Coded Cartographic Mathematical Data",
        "repetible": false,
        "predeterminados": [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f"
        ],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source",
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Category of scale",
            "b": "Constant ratio linear horizontal scale",
            "c": "Constant ratio linear vertical scale",
            "d": "Coordinates - westernmost longitude",
            "e": "Coordinates - easternmost longitude",
            "f": "Coordinates - northernmost latitude",
            "g": "Coordinates - southernmost latitude",
            "h": "Angular scale",
            "j": "Declination - northern limit",
            "k": "Declination - southern limit",
            "m": "Right ascension - eastern limit",
            "n": "Right ascension - western limit",
            "p": "Equinox",
            "r": "Distance from earth",
            "s": "G-ring latitude",
            "t": "G-ring longitude",
            "x": "Beginning date",
            "y": "Ending date",
            "z": "Name of extraterrestrial body"
        },
        "indicador_1": {
            "0": "Scale indeterminable/No scale recorded",
            "1": "Single scale",
            "3": "Range of scales",
            " ": "Undefined"
        },
        "indicador_2": {
            "0": "Outer ring",
            "1": "Exclusion ring",
            " ": "Not applicable"
        }
    },
    "035": {
        "nombre_generico": "System Control Number",
        "repetible": false,
        "predeterminados": [
            "a",
            "z",
            "6",
            "8"
        ],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "System control number",
            "z": "Canceled/invalid control number"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "036": {
        "nombre_generico": "Original Study Number for Computer Data Files",
        "repetible": false,
        "predeterminados": [
            "a",
            "b",
            "6",
            "8",
            "z"
        ],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Original study number",
            "b": "Source agency assigning number",
            "z": "Source"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "037": {
        "nombre_generico": "Source of Acquisition",
        "repetible": false,
        "predeterminados": [
            "a",
            "b",
            "c",
            "f",
            "g",
            "n"
        ],
        "subcampos": {
            "3": "Materials specified",
            "5": "Institution to which field applies",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Stock number",
            "b": "Source of stock number/acquisition",
            "c": "Terms of availability",
            "f": "Form of issue",
            "g": "Additional format characteristics",
            "n": "Note"
        },
        "indicador_1": {
            "2": "Intervening",
            "3": "Current/Latest",
            " ": "Not applicable/No information provided/Earliest"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "038": {
        "nombre_generico": "Record Content Licensor",
        "repetible": false,
        "predeterminados": [
            "a",
            "6",
            "8"
        ],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Record content licensor"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "040": {
        "nombre_generico": "Cataloging Source",
        "repetible": false,
        "predeterminados": [
            "a",
            "b",
            "c",
            "e"
        ],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Original cataloging agency",
            "b": "Language of cataloging",
            "c": "Transcribing agency",
            "e": "Description conventions",
            "d": "Modifying agency"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "041": {
        "nombre_generico": "Language Code",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "2": "Source of",
            "3": "Materials specified",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Language code of text/sound track or separate title",
            "b": "Language code of summary or abstract",
            "d": "Language code of sung or spoken text",
            "h": "Language code of original",
            "e": "Language code of librettos",
            "f": "Language code of table of contents",
            "g": "Language code of accompanying material other than librettos and transcripts",
            "i": "Language code of intertitles",
            "j": "Language code of subtitles",
            "k": "Language code of intermediate translations",
            "m": "Language code of original accompanying materials other than librettos",
            "n": "Language code of original libretto",
            "p": "Language code of captions",
            "q": "Language code of accessible audio",
            "r": "Language code of accessible visual language (non-textual)",
            "t": "Language code of accompanying transcripts for audiovisual materials"
        },
        "indicador_1": {
            "0": "Item not a translation/does not include a translation",
            "1": "Item is or includes a translation",
            "#": "No information provided"
        },
        "indicador_2": {
            "7": "Source specified in subfield $2",
            " ": "MARC language code"
        }
    },
    "042": {
        "nombre_generico": "Authentication Code",
        "repetible": false,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "a": "Authentication code"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "043": {
        "nombre_generico": "Geographic Area Code",
        "repetible": false,
        "predeterminados": [
            "a",
            "b",
            "c",
            "0",
            "1",
            "2"
        ],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of local",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Geographic area",
            "b": "Local GAC",
            "c": "ISO"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "044": {
        "nombre_generico": "Country of Publishing/Producing Entity Code",
        "repetible": false,
        "predeterminados": [
            "a",
            "b",
            "c",
            "2",
            "6",
            "8"
        ],
        "subcampos": {
            "2": "Source of local subentity",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "MARC country",
            "b": "Local subentity",
            "c": "ISO country"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "045": {
        "nombre_generico": "Time Period of Content",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Time period",
            "b": "Formatted 9999 B.C. through C.E. time period",
            "c": "Formatted pre-9999 B.C. time period"
        },
        "indicador_1": {
            "0": "Single date/time",
            "1": "Multiple single dates/times",
            "2": "Range of dates/times",
            " ": "Subfield $b or $c not present"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "046": {
        "nombre_generico": "Special Coded Dates",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Source of date",
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Type of date",
            "b": "Date 1, B.C.E. date",
            "c": "Date 1, C.E. date",
            "d": "Date 2, B.C.E. date",
            "e": "Date 2, C.E. date",
            "j": "Date resource modified",
            "k": "Beginning or single date created",
            "l": "Ending date created",
            "m": "Beginning of date valid",
            "n": "End of date valid",
            "o": "Single or starting date for aggregated content",
            "p": "Ending date for aggregated content",
            "x": "Nonpublic note",
            "z": "Public note"
        },
        "indicador_1": {
            "1": "Work",
            "2": "Expression",
            "3": "Manifestation",
            " ": "No information provided"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "047": {
        "nombre_generico": "Form of Musical Composition Code",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Source of",
            "8": "Field link and sequence number",
            "a": "Form of musical composition"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            "7": "Source specified in subfield $2",
            " ": "MARC musical composition code"
        }
    },
    "048": {
        "nombre_generico": "Number of Musical Instruments or Voices Code",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Source of",
            "8": "Field link and sequence number",
            "a": "Performer or ensemble",
            "b": "Soloist"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            "7": "Source specified in subfield $2",
            " ": "MARC code"
        }
    },
    "050": {
        "nombre_generico": "Library of Congress Call Number",
        "repetible": true,
        "predeterminados": [
            "a",
            "b"
        ],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "3": "Materials specified",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Classification number",
            "b": "Item number"
        },
        "indicador_1": {
            "0": "Item is in LC",
            "1": "Item is not in LC",
            " ": "No information provided"
        },
        "indicador_2": {
            "0": "Assigned by LC",
            "4": "Assigned by agency other than LC",
            " ": "Undefined"
        }
    },
    "051": {
        "nombre_generico": "Library of Congress Copy, Issue, Offprint Statement",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "8": "Field link and sequence number",
            "a": "Classification number",
            "b": "Item number",
            "c": "Copy information"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "052": {
        "nombre_generico": "Geographic Classification",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Code source",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Geographic classification area",
            "b": "Geographic classification subarea",
            "d": "Populated place name"
        },
        "indicador_1": {
            "1": "U.S. Dept. of Defense Classification",
            "7": "Source specified in subfield $2",
            " ": "Library of Congress Classification"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "055": {
        "nombre_generico": "Classification Numbers Assigned in Canada",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Source of call/class number",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Classification number",
            "b": "Item number"
        },
        "indicador_1": {
            "0": "Work held by LAC",
            "1": "Work not held by LAC",
            " ": "Information not provided"
        },
        "indicador_2": {
            "0": "LCC (or LCC-compatible) call number assigned by LAC",
            "1": "Complete LC class number assigned by LAC",
            "2": "Incomplete LC class number assigned by LAC",
            "3": "LC-based call number assigned by the contributing library",
            "4": "Complete LC class number assigned by the contributing library",
            "5": "Incomplete LC class number assigned by the contributing library",
            "6": "Other call number assigned by LAC",
            "7": "Other class number assigned by LAC",
            "8": "Other call number assigned by the contributing library",
            "9": "Other class number assigned by a Canadian organization other than LAC",
            " ": "Undefined"
        }
    },
    "060": {
        "nombre_generico": "National Library of Medicine Call Number",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Classification number",
            "b": "Item number"
        },
        "indicador_1": {
            "0": "Item is in NLM",
            "1": "Item is not in NLM",
            " ": "No information provided"
        },
        "indicador_2": {
            "0": "Assigned by NLM",
            "4": "Assigned by agency other than NLM",
            " ": "Undefined"
        }
    },
    "061": {
        "nombre_generico": "National Library of Medicine Copy Statement",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "8": "Field link and sequence number",
            "a": "Classification number",
            "b": "Item number",
            "c": "Copy information"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "066": {
        "nombre_generico": "Character Sets Present",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "a": "Primary G0 character set",
            "b": "Primary G1 character set",
            "c": "Alternate G0 or G1 character set"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "070": {
        "nombre_generico": "National Agricultural Library Call Number",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Classification number",
            "b": "Item number"
        },
        "indicador_1": {
            "0": "Item is in NAL",
            "1": "Item is not in NAL",
            " ": "No information provided"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "071": {
        "nombre_generico": "National Agricultural Library Copy Statement",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "8": "Field link and sequence number",
            "a": "Classification number",
            "b": "Item number",
            "c": "Copy information"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "072": {
        "nombre_generico": "Subject Category Code",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Source",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Subject category",
            "x": "Subject category code subdivision"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            "0": "NAL subject category code list",
            "7": "Source specified in subfield $2",
            " ": "Undefined"
        }
    },
    "074": {
        "nombre_generico": "GPO Item Number",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "8": "Field link and sequence number",
            "a": "GPO item number",
            "z": "Canceled/invalid GPO item number"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "080": {
        "nombre_generico": "Universal Decimal Classification Number",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Edition identifier",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Universal Decimal Classification number",
            "b": "Item number",
            "x": "Common auxiliary subdivision"
        },
        "indicador_1": {
            "0": "Full",
            "1": "Abridged",
            " ": "No information provided"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "082": {
        "nombre_generico": "Dewey Decimal Classification Number",
        "repetible": true,
        "predeterminados": [
            "a",
            "2"
        ],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Edition information",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Classification number",
            "b": "Item number",
            "m": "Standard or optional designation",
            "q": "Assigning agency"
        },
        "indicador_1": {
            "0": "Full edition",
            "1": "Abridged edition",
            "7": "Other edition specified in subfield $2",
            " ": "Undefined"
        },
        "indicador_2": {
            "0": "Assigned by LC",
            "4": "Assigned by agency other than LC",
            " ": "No information provided"
        }
    },
    "083": {
        "nombre_generico": "Additional Dewey Decimal Classification Number",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Edition information",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Classification number",
            "c": "Classification number--Ending number of span",
            "m": "Standard or optional designation",
            "q": "Assigning agency",
            "y": "Table sequence number for internal subarrangement or add table",
            "z": "Table identification"
        },
        "indicador_1": {
            "0": "Full edition",
            "1": "Abridged edition",
            "7": "Other edition specified in subfield $2",
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "084": {
        "nombre_generico": "Other Classification Number",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Number source",
            "6": "Linkage",
            "7": "Data provenance",
            "8": "Field link and sequence number",
            "a": "Classification number",
            "b": "Item number",
            "q": "Assigning agency"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "085": {
        "nombre_generico": "Synthesized Classification Number Components",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Number where instructions are found-single number or beginning number of span",
            "b": "Base number",
            "c": "Classification number-ending number of span",
            "f": "Facet designator",
            "r": "Root number",
            "s": "Digits added from classification number in schedule or external table",
            "t": "Digits added from internal subarrangement or add table",
            "u": "Number being analyzed",
            "v": "Number in internal subarrangement or add table where instructions are found",
            "w": "Table identification-Internal subarrangement or add table",
            "y": "Table sequence number for internal subarrangement or add table",
            "z": "Table identification"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "086": {
        "nombre_generico": "Government Document Classification Number",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Authority record control number or standard number",
            "1": "Real World Object URI",
            "2": "Number source",
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Classification number",
            "z": "Canceled/invalid classification number"
        },
        "indicador_1": {
            "0": "Superintendent of Documents Classification System",
            "1": "Government of Canada Publications: Outline of Classification",
            " ": "Source specified in subfield $2"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "088": {
        "nombre_generico": "Report Number",
        "repetible": false,
        "predeterminados": [],
        "subcampos": {
            "6": "Linkage",
            "8": "Field link and sequence number",
            "a": "Report number",
            "z": "Canceled/invalid report number"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "092": {
        "nombre_generico": "Local Dewey Classification",
        "repetible": true,
        "predeterminados": [
            "a",
            "b"
        ],
        "subcampos": {
            "a": "Local classification",
            "b": "Local item number"
        },
        "indicador_1": {
            " ": "Undefined"
        },
        "indicador_2": {
            " ": "Undefined"
        }
    },
    "003": {
        "nombre_generico": "Control Number Identifier",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "004": {
        "nombre_generico": "Control Number for Related Bibliographic Record",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "014": {
        "nombre_generico": "Linkage Number",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "09X": {
        "nombre_generico": "Local Call Numbers",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "59X": {
        "nombre_generico": "Local Notes",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "69X": {
        "nombre_generico": "Local Subject Access Fields",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    }
};

    global.marcCatEnFieldSpecs = {
    "008": {
        "common": [
            {
                "start": 0,
                "len": 6,
                "pos": "00-05",
                "name": "Date entered on file",
                "kind": "text",
                "group": "fechas",
                "noPad": true,
                "placeholder": "YYMMDD",
                "hint": "Date entered on file (yyMMdd)."
            },
            {
                "start": 6,
                "len": 1,
                "pos": "06",
                "name": "Type of date/Publication status",
                "kind": "select",
                "group": "fechas"
            },
            {
                "start": 7,
                "len": 4,
                "pos": "07-10",
                "name": "Date 1",
                "kind": "text",
                "group": "fechas",
                "noPad": true
            },
            {
                "start": 11,
                "len": 4,
                "pos": "11-14",
                "name": "Date 2",
                "kind": "text",
                "group": "fechas",
                "noPad": true
            },
            {
                "start": 15,
                "len": 3,
                "pos": "15-17",
                "name": "Place of publication, production, or execution",
                "kind": "select3",
                "group": "pub"
            },
            {
                "start": 35,
                "len": 3,
                "pos": "35-37",
                "name": "Language",
                "kind": "select3",
                "group": "lang"
            },
            {
                "start": 38,
                "len": 1,
                "pos": "38",
                "name": "Modified record",
                "kind": "select",
                "group": "lang"
            },
            {
                "start": 39,
                "len": 1,
                "pos": "39",
                "name": "Cataloging source",
                "kind": "select",
                "group": "lang"
            }
        ],
        "multi4": {
            "illus": [
                [
                    "#",
                    "No illustrations"
                ],
                [
                    "a",
                    "Illustrations"
                ],
                [
                    "b",
                    "Maps"
                ],
                [
                    "c",
                    "Portraits"
                ],
                [
                    "d",
                    "Charts"
                ],
                [
                    "e",
                    "Plans"
                ],
                [
                    "f",
                    "Plates"
                ],
                [
                    "g",
                    "Music"
                ],
                [
                    "h",
                    "Facsimiles"
                ],
                [
                    "i",
                    "Coats of arms"
                ],
                [
                    "j",
                    "Genealogical tables"
                ],
                [
                    "k",
                    "Forms"
                ],
                [
                    "l",
                    "Samples"
                ],
                [
                    "m",
                    "Discs"
                ],
                [
                    "o",
                    "Photographs"
                ],
                [
                    "p",
                    "Illuminations"
                ]
            ],
            "nature": [
                [
                    "#",
                    "Not specified"
                ],
                [
                    "a",
                    "Abstracts/summaries"
                ],
                [
                    "b",
                    "Bibliographies"
                ],
                [
                    "c",
                    "Catalogs"
                ],
                [
                    "d",
                    "Dictionaries"
                ],
                [
                    "e",
                    "Encyclopedias"
                ],
                [
                    "f",
                    "Handbooks"
                ],
                [
                    "g",
                    "Legal articles"
                ],
                [
                    "i",
                    "Indexes"
                ],
                [
                    "j",
                    "Patent documents"
                ],
                [
                    "k",
                    "Discographies"
                ],
                [
                    "l",
                    "Legislation"
                ],
                [
                    "m",
                    "Theses"
                ],
                [
                    "n",
                    "Technical reports on state of the art"
                ],
                [
                    "o",
                    "Reviews"
                ],
                [
                    "p",
                    "Programmed texts"
                ],
                [
                    "q",
                    "Filmographies"
                ],
                [
                    "r",
                    "Directories"
                ],
                [
                    "s",
                    "Statistics"
                ],
                [
                    "t",
                    "Technical reports"
                ],
                [
                    "u",
                    "Standards/specifications"
                ],
                [
                    "v",
                    "Legal case digests"
                ],
                [
                    "w",
                    "Cases and decisions"
                ],
                [
                    "y",
                    "Yearbooks"
                ],
                [
                    "z",
                    "Treaties"
                ],
                [
                    "2",
                    "Separates"
                ],
                [
                    "5",
                    "Calendars"
                ],
                [
                    "6",
                    "Comics/graphic novels"
                ]
            ],
            "relief": [
                [
                    "#",
                    "No relieve"
                ],
                [
                    "a",
                    "Contours"
                ],
                [
                    "b",
                    "Shading"
                ],
                [
                    "c",
                    "Hypsometric tints"
                ],
                [
                    "d",
                    "Soundings"
                ],
                [
                    "e",
                    "Bathymetric soundings"
                ],
                [
                    "f",
                    "Form contours"
                ],
                [
                    "g",
                    "Bathymetric isolines"
                ],
                [
                    "h",
                    "Hachures"
                ],
                [
                    "i",
                    "Pictorial"
                ],
                [
                    "j",
                    "Land forms"
                ],
                [
                    "k",
                    "Relief model"
                ],
                [
                    "m",
                    "Bathymetry by shading"
                ],
                [
                    "z",
                    "Other"
                ]
            ]
        },
        "profiles": {
            "books": {
                "label": "Books",
                "extension": [
                    {
                        "start": 18,
                        "len": 4,
                        "pos": "18-21",
                        "name": "Illustrations",
                        "kind": "multi4",
                        "group": "illus",
                        "multi4Set": "illus"
                    },
                    {
                        "start": 22,
                        "len": 1,
                        "pos": "22",
                        "name": "Target audience",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 23,
                        "len": 1,
                        "pos": "23",
                        "name": "Form of item",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 24,
                        "len": 4,
                        "pos": "24-27",
                        "name": "Nature of contents",
                        "kind": "multi4",
                        "group": "content",
                        "multi4Set": "nature"
                    },
                    {
                        "start": 28,
                        "len": 1,
                        "pos": "28",
                        "name": "Government publication",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 29,
                        "len": 1,
                        "pos": "29",
                        "name": "Conference publication",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 30,
                        "len": 1,
                        "pos": "30",
                        "name": "Festschrift",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 31,
                        "len": 1,
                        "pos": "31",
                        "name": "Index",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 32,
                        "len": 1,
                        "pos": "32",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 33,
                        "len": 1,
                        "pos": "33",
                        "name": "Literary form",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 34,
                        "len": 1,
                        "pos": "34",
                        "name": "Biography",
                        "kind": "select",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "6": [
                        [
                            " ",
                            "No type / blank"
                        ],
                        [
                            "b",
                            "Before 1000"
                        ],
                        [
                            "c",
                            "1001-999"
                        ],
                        [
                            "d",
                            "Date 1 and 2"
                        ],
                        [
                            "e",
                            "Detailed dates"
                        ],
                        [
                            "i",
                            "Inclusive collection"
                        ],
                        [
                            "k",
                            "BCE range"
                        ],
                        [
                            "m",
                            "Multiple dates"
                        ],
                        [
                            "n",
                            "Unknown or probable date"
                        ],
                        [
                            "p",
                            "Distribution"
                        ],
                        [
                            "q",
                            "Questionable date"
                        ],
                        [
                            "r",
                            "Reprint/reissue"
                        ],
                        [
                            "s",
                            "Single known date/probable date"
                        ],
                        [
                            "t",
                            "Publication date"
                        ],
                        [
                            "u",
                            "Continuing publication"
                        ]
                    ],
                    "15": [
                        [
                            "   ",
                            "No place / blank"
                        ],
                        [
                            "xxu",
                            "Unknown place"
                        ],
                        [
                            "xx ",
                            "No place"
                        ],
                        [
                            "cau",
                            "California"
                        ],
                        [
                            "nyu",
                            "New York"
                        ],
                        [
                            "enk",
                            "England"
                        ],
                        [
                            "sp ",
                            "Spain"
                        ],
                        [
                            "mx ",
                            "Mexico"
                        ],
                        [
                            "fr ",
                            "France"
                        ],
                        [
                            "gw ",
                            "Germany"
                        ],
                        [
                            "it ",
                            "Italy"
                        ],
                        [
                            "be ",
                            "Belgium"
                        ],
                        [
                            "ne ",
                            "Netherlands"
                        ],
                        [
                            "sz ",
                            "Switzerland"
                        ],
                        [
                            "au ",
                            "Austria"
                        ],
                        [
                            "pl ",
                            "Poland"
                        ],
                        [
                            "ru ",
                            "Russia"
                        ],
                        [
                            "ja ",
                            "Japan"
                        ],
                        [
                            "cc ",
                            "China"
                        ],
                        [
                            "ii ",
                            "India"
                        ],
                        [
                            "br ",
                            "Brazil"
                        ],
                        [
                            "ar ",
                            "Argentina"
                        ],
                        [
                            "cl ",
                            "Chile"
                        ],
                        [
                            "co ",
                            "Colombia"
                        ],
                        [
                            "pe ",
                            "Peru"
                        ],
                        [
                            "ve ",
                            "Venezuela"
                        ],
                        [
                            "cu ",
                            "Cuba"
                        ],
                        [
                            "pr ",
                            "Puerto Rico"
                        ]
                    ],
                    "18": [
                        [
                            "#",
                            "No illustrations"
                        ],
                        [
                            "a",
                            "Illustrations"
                        ],
                        [
                            "b",
                            "Maps"
                        ],
                        [
                            "c",
                            "Portraits"
                        ],
                        [
                            "d",
                            "Charts"
                        ],
                        [
                            "e",
                            "Plans"
                        ],
                        [
                            "f",
                            "Plates"
                        ],
                        [
                            "g",
                            "Music"
                        ],
                        [
                            "h",
                            "Facsimiles"
                        ],
                        [
                            "i",
                            "Coats of arms"
                        ],
                        [
                            "j",
                            "Genealogical tables"
                        ],
                        [
                            "k",
                            "Forms"
                        ],
                        [
                            "l",
                            "Samples"
                        ],
                        [
                            "m",
                            "Discs"
                        ],
                        [
                            "o",
                            "Photographs"
                        ],
                        [
                            "p",
                            "Illuminations"
                        ]
                    ],
                    "22": [
                        [
                            "#",
                            "Unknown or not specified"
                        ],
                        [
                            "a",
                            "Preschool"
                        ],
                        [
                            "b",
                            "Primary"
                        ],
                        [
                            "c",
                            "Pre-adolescent"
                        ],
                        [
                            "d",
                            "Adolescent"
                        ],
                        [
                            "e",
                            "Adult"
                        ],
                        [
                            "f",
                            "Specialized"
                        ],
                        [
                            "g",
                            "General"
                        ],
                        [
                            "j",
                            "Juvenile"
                        ]
                    ],
                    "23": [
                        [
                            "#",
                            "None of the following"
                        ],
                        [
                            "a",
                            "Microfilm"
                        ],
                        [
                            "b",
                            "Microfiche"
                        ],
                        [
                            "c",
                            "Microopaque"
                        ],
                        [
                            "d",
                            "Large print"
                        ],
                        [
                            "f",
                            "Braille"
                        ],
                        [
                            "o",
                            "Online"
                        ],
                        [
                            "q",
                            "Direct electronic"
                        ],
                        [
                            "r",
                            "Regular print reproduction"
                        ],
                        [
                            "s",
                            "Electronic"
                        ]
                    ],
                    "24": [
                        [
                            "#",
                            "Not specified"
                        ],
                        [
                            "2",
                            "Separates"
                        ],
                        [
                            "5",
                            "Calendars"
                        ],
                        [
                            "6",
                            "Comics/graphic novels"
                        ],
                        [
                            "a",
                            "Abstracts/summaries"
                        ],
                        [
                            "b",
                            "Bibliographies"
                        ],
                        [
                            "c",
                            "Catalogs"
                        ],
                        [
                            "d",
                            "Dictionaries"
                        ],
                        [
                            "e",
                            "Encyclopedias"
                        ],
                        [
                            "f",
                            "Handbooks"
                        ],
                        [
                            "g",
                            "Legal articles"
                        ],
                        [
                            "i",
                            "Indexes"
                        ],
                        [
                            "j",
                            "Patent documents"
                        ],
                        [
                            "k",
                            "Discographies"
                        ],
                        [
                            "l",
                            "Legislation"
                        ],
                        [
                            "m",
                            "Theses"
                        ],
                        [
                            "n",
                            "Technical reports on state of the art"
                        ],
                        [
                            "o",
                            "Reviews"
                        ],
                        [
                            "p",
                            "Programmed texts"
                        ],
                        [
                            "q",
                            "Filmographies"
                        ],
                        [
                            "r",
                            "Directories"
                        ],
                        [
                            "s",
                            "Statistics"
                        ],
                        [
                            "t",
                            "Technical reports"
                        ],
                        [
                            "u",
                            "Standards/specifications"
                        ],
                        [
                            "v",
                            "Legal case digests"
                        ],
                        [
                            "w",
                            "Cases and decisions"
                        ],
                        [
                            "y",
                            "Yearbooks"
                        ],
                        [
                            "z",
                            "Treaties"
                        ]
                    ],
                    "28": [
                        [
                            "#",
                            "Not a government publication"
                        ],
                        [
                            "a",
                            "Autonomous or semi-autonomous agency"
                        ],
                        [
                            "c",
                            "Multilocal"
                        ],
                        [
                            "f",
                            "Federal/national"
                        ],
                        [
                            "i",
                            "International intergovernmental body"
                        ],
                        [
                            "l",
                            "Local"
                        ],
                        [
                            "m",
                            "Multistate"
                        ],
                        [
                            "o",
                            "Government publication — level undetermined"
                        ],
                        [
                            "s",
                            "State/provincial/territorial"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ]
                    ],
                    "29": [
                        [
                            "0",
                            "Not a conference"
                        ],
                        [
                            "1",
                            "Conference"
                        ]
                    ],
                    "30": [
                        [
                            "0",
                            "Not a festschrift"
                        ],
                        [
                            "1",
                            "Festschrift"
                        ]
                    ],
                    "31": [
                        [
                            "0",
                            "No index"
                        ],
                        [
                            "1",
                            "Has index"
                        ]
                    ],
                    "32": [
                        [
                            "#",
                            "No definido"
                        ]
                    ],
                    "33": [
                        [
                            "0",
                            "Not fiction (unspecified)"
                        ],
                        [
                            "1",
                            "Fiction (unspecified)"
                        ],
                        [
                            "d",
                            "Drama"
                        ],
                        [
                            "e",
                            "Essays"
                        ],
                        [
                            "f",
                            "Fiction"
                        ],
                        [
                            "h",
                            "Humor, satire"
                        ],
                        [
                            "i",
                            "Letters"
                        ],
                        [
                            "j",
                            "Short stories"
                        ],
                        [
                            "m",
                            "Mixed forms"
                        ],
                        [
                            "p",
                            "Poetry"
                        ],
                        [
                            "s",
                            "Speeches"
                        ],
                        [
                            "u",
                            "Unknown"
                        ]
                    ],
                    "34": [
                        [
                            "#",
                            "No biographical material"
                        ],
                        [
                            "a",
                            "Autobiography"
                        ],
                        [
                            "b",
                            "Individual biography"
                        ],
                        [
                            "c",
                            "Collective biography"
                        ],
                        [
                            "d",
                            "Contains biographical information"
                        ]
                    ],
                    "35": [
                        [
                            "   ",
                            "No language / blank"
                        ],
                        [
                            "eng",
                            "English"
                        ],
                        [
                            "spa",
                            "Spanish"
                        ],
                        [
                            "fre",
                            "French"
                        ],
                        [
                            "ger",
                            "German"
                        ],
                        [
                            "ita",
                            "Italian"
                        ],
                        [
                            "por",
                            "Portuguese"
                        ],
                        [
                            "cat",
                            "Catalan"
                        ],
                        [
                            "glg",
                            "Galician"
                        ],
                        [
                            "eus",
                            "Basque"
                        ],
                        [
                            "lat",
                            "Latin"
                        ],
                        [
                            "grc",
                            "Ancient Greek"
                        ],
                        [
                            "ara",
                            "Arabic"
                        ],
                        [
                            "chi",
                            "Chinese"
                        ],
                        [
                            "jpn",
                            "Japanese"
                        ],
                        [
                            "rus",
                            "Russian"
                        ],
                        [
                            "mul",
                            "Multiple languages"
                        ],
                        [
                            "und",
                            "Indeterminado"
                        ],
                        [
                            "zxx",
                            "No linguistic content"
                        ],
                        [
                            "mis",
                            "Miscellaneous"
                        ],
                        [
                            "sgn",
                            "Sign language"
                        ]
                    ],
                    "38": [
                        [
                            " ",
                            "Not modified"
                        ],
                        [
                            "0",
                            "Not modified"
                        ],
                        [
                            "1",
                            "Modificado"
                        ]
                    ],
                    "39": [
                        [
                            " ",
                            "Unknown source / blank"
                        ],
                        [
                            "#",
                            "No fuente"
                        ],
                        [
                            "d",
                            "DLC"
                        ],
                        [
                            "c",
                            "Cooperativa"
                        ],
                        [
                            "u",
                            "Desconocida"
                        ],
                        [
                            "x",
                            "Source externa"
                        ]
                    ]
                }
            },
            "computerFiles": {
                "label": "Computer files",
                "extension": [
                    {
                        "start": 18,
                        "len": 4,
                        "pos": "18-21",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 22,
                        "len": 1,
                        "pos": "22",
                        "name": "Target audience",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 23,
                        "len": 1,
                        "pos": "23",
                        "name": "Form of item",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 24,
                        "len": 2,
                        "pos": "24-25",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 26,
                        "len": 1,
                        "pos": "26",
                        "name": "Type of computer file",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 27,
                        "len": 1,
                        "pos": "27",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 28,
                        "len": 1,
                        "pos": "28",
                        "name": "Government publication",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 29,
                        "len": 6,
                        "pos": "29-34",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "6": [
                        [
                            " ",
                            "No type / blank"
                        ],
                        [
                            "b",
                            "Before 1000"
                        ],
                        [
                            "c",
                            "1001-999"
                        ],
                        [
                            "d",
                            "Date 1 and 2"
                        ],
                        [
                            "e",
                            "Detailed dates"
                        ],
                        [
                            "i",
                            "Inclusive collection"
                        ],
                        [
                            "k",
                            "BCE range"
                        ],
                        [
                            "m",
                            "Multiple dates"
                        ],
                        [
                            "n",
                            "Unknown or probable date"
                        ],
                        [
                            "p",
                            "Distribution"
                        ],
                        [
                            "q",
                            "Questionable date"
                        ],
                        [
                            "r",
                            "Reprint/reissue"
                        ],
                        [
                            "s",
                            "Single known date/probable date"
                        ],
                        [
                            "t",
                            "Publication date"
                        ],
                        [
                            "u",
                            "Continuing publication"
                        ]
                    ],
                    "15": [
                        [
                            "   ",
                            "No place / blank"
                        ],
                        [
                            "xxu",
                            "Unknown place"
                        ],
                        [
                            "xx ",
                            "No place"
                        ],
                        [
                            "cau",
                            "California"
                        ],
                        [
                            "nyu",
                            "New York"
                        ],
                        [
                            "enk",
                            "England"
                        ],
                        [
                            "sp ",
                            "Spain"
                        ],
                        [
                            "mx ",
                            "Mexico"
                        ],
                        [
                            "fr ",
                            "France"
                        ],
                        [
                            "gw ",
                            "Germany"
                        ],
                        [
                            "it ",
                            "Italy"
                        ],
                        [
                            "be ",
                            "Belgium"
                        ],
                        [
                            "ne ",
                            "Netherlands"
                        ],
                        [
                            "sz ",
                            "Switzerland"
                        ],
                        [
                            "au ",
                            "Austria"
                        ],
                        [
                            "pl ",
                            "Poland"
                        ],
                        [
                            "ru ",
                            "Russia"
                        ],
                        [
                            "ja ",
                            "Japan"
                        ],
                        [
                            "cc ",
                            "China"
                        ],
                        [
                            "ii ",
                            "India"
                        ],
                        [
                            "br ",
                            "Brazil"
                        ],
                        [
                            "ar ",
                            "Argentina"
                        ],
                        [
                            "cl ",
                            "Chile"
                        ],
                        [
                            "co ",
                            "Colombia"
                        ],
                        [
                            "pe ",
                            "Peru"
                        ],
                        [
                            "ve ",
                            "Venezuela"
                        ],
                        [
                            "cu ",
                            "Cuba"
                        ],
                        [
                            "pr ",
                            "Puerto Rico"
                        ]
                    ],
                    "22": [
                        [
                            "#",
                            "Unknown or not specified"
                        ],
                        [
                            "a",
                            "Preschool"
                        ],
                        [
                            "b",
                            "Primary"
                        ],
                        [
                            "c",
                            "Pre-adolescent"
                        ],
                        [
                            "d",
                            "Adolescent"
                        ],
                        [
                            "e",
                            "Adult"
                        ],
                        [
                            "f",
                            "Specialized"
                        ],
                        [
                            "g",
                            "General"
                        ],
                        [
                            "j",
                            "Juvenile"
                        ]
                    ],
                    "23": [
                        [
                            "#",
                            "Desconocida"
                        ],
                        [
                            "o",
                            "Online"
                        ],
                        [
                            "q",
                            "Direct electronic"
                        ]
                    ],
                    "26": [
                        [
                            "a",
                            "Numeric data"
                        ],
                        [
                            "b",
                            "Programa de ordenador"
                        ],
                        [
                            "c",
                            "Graphic information"
                        ],
                        [
                            "d",
                            "Textual"
                        ],
                        [
                            "e",
                            "Bibliographic data"
                        ],
                        [
                            "f",
                            "Source"
                        ],
                        [
                            "g",
                            "Game"
                        ],
                        [
                            "h",
                            "Sound"
                        ],
                        [
                            "i",
                            "Multimedia interactivo"
                        ],
                        [
                            "j",
                            "Online system or service"
                        ],
                        [
                            "m",
                            "Combination"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ]
                    ],
                    "28": [
                        [
                            "#",
                            "Not a government publication"
                        ],
                        [
                            "a",
                            "Autonomous or semi-autonomous agency"
                        ],
                        [
                            "c",
                            "Multilocal"
                        ],
                        [
                            "f",
                            "Federal/national"
                        ],
                        [
                            "i",
                            "International intergovernmental body"
                        ],
                        [
                            "l",
                            "Local"
                        ],
                        [
                            "m",
                            "Multistate"
                        ],
                        [
                            "o",
                            "Government publication — level undetermined"
                        ],
                        [
                            "s",
                            "State/provincial/territorial"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ]
                    ],
                    "29": [
                        [
                            "0",
                            "Not a conference"
                        ],
                        [
                            "1",
                            "Conference"
                        ]
                    ],
                    "30": [
                        [
                            "0",
                            "Not a festschrift"
                        ],
                        [
                            "1",
                            "Festschrift"
                        ]
                    ],
                    "31": [
                        [
                            "0",
                            "No index"
                        ],
                        [
                            "1",
                            "Has index"
                        ]
                    ],
                    "32": [
                        [
                            "#",
                            "No definido"
                        ]
                    ],
                    "33": [
                        [
                            "0",
                            "Not fiction (unspecified)"
                        ],
                        [
                            "1",
                            "Fiction (unspecified)"
                        ],
                        [
                            "d",
                            "Drama"
                        ],
                        [
                            "e",
                            "Essays"
                        ],
                        [
                            "f",
                            "Fiction"
                        ],
                        [
                            "h",
                            "Humor, satire"
                        ],
                        [
                            "i",
                            "Letters"
                        ],
                        [
                            "j",
                            "Short stories"
                        ],
                        [
                            "m",
                            "Mixed forms"
                        ],
                        [
                            "p",
                            "Poetry"
                        ],
                        [
                            "s",
                            "Speeches"
                        ],
                        [
                            "u",
                            "Unknown"
                        ]
                    ],
                    "34": [
                        [
                            "#",
                            "No biographical material"
                        ],
                        [
                            "a",
                            "Autobiography"
                        ],
                        [
                            "b",
                            "Individual biography"
                        ],
                        [
                            "c",
                            "Collective biography"
                        ],
                        [
                            "d",
                            "Contains biographical information"
                        ]
                    ],
                    "35": [
                        [
                            "   ",
                            "No language / blank"
                        ],
                        [
                            "eng",
                            "English"
                        ],
                        [
                            "spa",
                            "Spanish"
                        ],
                        [
                            "fre",
                            "French"
                        ],
                        [
                            "ger",
                            "German"
                        ],
                        [
                            "ita",
                            "Italian"
                        ],
                        [
                            "por",
                            "Portuguese"
                        ],
                        [
                            "cat",
                            "Catalan"
                        ],
                        [
                            "glg",
                            "Galician"
                        ],
                        [
                            "eus",
                            "Basque"
                        ],
                        [
                            "lat",
                            "Latin"
                        ],
                        [
                            "grc",
                            "Ancient Greek"
                        ],
                        [
                            "ara",
                            "Arabic"
                        ],
                        [
                            "chi",
                            "Chinese"
                        ],
                        [
                            "jpn",
                            "Japanese"
                        ],
                        [
                            "rus",
                            "Russian"
                        ],
                        [
                            "mul",
                            "Multiple languages"
                        ],
                        [
                            "und",
                            "Indeterminado"
                        ],
                        [
                            "zxx",
                            "No linguistic content"
                        ],
                        [
                            "mis",
                            "Miscellaneous"
                        ],
                        [
                            "sgn",
                            "Sign language"
                        ]
                    ],
                    "38": [
                        [
                            " ",
                            "Not modified"
                        ],
                        [
                            "0",
                            "Not modified"
                        ],
                        [
                            "1",
                            "Modificado"
                        ]
                    ],
                    "39": [
                        [
                            " ",
                            "Unknown source / blank"
                        ],
                        [
                            "#",
                            "No fuente"
                        ],
                        [
                            "d",
                            "DLC"
                        ],
                        [
                            "c",
                            "Cooperativa"
                        ],
                        [
                            "u",
                            "Desconocida"
                        ],
                        [
                            "x",
                            "Source externa"
                        ]
                    ]
                }
            },
            "maps": {
                "label": "Maps",
                "extension": [
                    {
                        "start": 18,
                        "len": 4,
                        "pos": "18-21",
                        "name": "Relief",
                        "kind": "multi4",
                        "group": "illus",
                        "multi4Set": "relief"
                    },
                    {
                        "start": 22,
                        "len": 2,
                        "pos": "22-23",
                        "name": "Projection",
                        "kind": "select3",
                        "group": "pub"
                    },
                    {
                        "start": 24,
                        "len": 1,
                        "pos": "24",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 25,
                        "len": 1,
                        "pos": "25",
                        "name": "Type of cartographic material",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 26,
                        "len": 2,
                        "pos": "26-27",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 28,
                        "len": 1,
                        "pos": "28",
                        "name": "Government publication",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 29,
                        "len": 1,
                        "pos": "29",
                        "name": "Form of item",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 30,
                        "len": 1,
                        "pos": "30",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 31,
                        "len": 1,
                        "pos": "31",
                        "name": "Index",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 32,
                        "len": 1,
                        "pos": "32",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 33,
                        "len": 2,
                        "pos": "33-34",
                        "name": "Special format characteristics",
                        "kind": "text",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "6": [
                        [
                            " ",
                            "No type / blank"
                        ],
                        [
                            "b",
                            "Before 1000"
                        ],
                        [
                            "c",
                            "1001-999"
                        ],
                        [
                            "d",
                            "Date 1 and 2"
                        ],
                        [
                            "e",
                            "Detailed dates"
                        ],
                        [
                            "i",
                            "Inclusive collection"
                        ],
                        [
                            "k",
                            "BCE range"
                        ],
                        [
                            "m",
                            "Multiple dates"
                        ],
                        [
                            "n",
                            "Unknown or probable date"
                        ],
                        [
                            "p",
                            "Distribution"
                        ],
                        [
                            "q",
                            "Questionable date"
                        ],
                        [
                            "r",
                            "Reprint/reissue"
                        ],
                        [
                            "s",
                            "Single known date/probable date"
                        ],
                        [
                            "t",
                            "Publication date"
                        ],
                        [
                            "u",
                            "Continuing publication"
                        ]
                    ],
                    "15": [
                        [
                            "   ",
                            "No place / blank"
                        ],
                        [
                            "xxu",
                            "Unknown place"
                        ],
                        [
                            "xx ",
                            "No place"
                        ],
                        [
                            "cau",
                            "California"
                        ],
                        [
                            "nyu",
                            "New York"
                        ],
                        [
                            "enk",
                            "England"
                        ],
                        [
                            "sp ",
                            "Spain"
                        ],
                        [
                            "mx ",
                            "Mexico"
                        ],
                        [
                            "fr ",
                            "France"
                        ],
                        [
                            "gw ",
                            "Germany"
                        ],
                        [
                            "it ",
                            "Italy"
                        ],
                        [
                            "be ",
                            "Belgium"
                        ],
                        [
                            "ne ",
                            "Netherlands"
                        ],
                        [
                            "sz ",
                            "Switzerland"
                        ],
                        [
                            "au ",
                            "Austria"
                        ],
                        [
                            "pl ",
                            "Poland"
                        ],
                        [
                            "ru ",
                            "Russia"
                        ],
                        [
                            "ja ",
                            "Japan"
                        ],
                        [
                            "cc ",
                            "China"
                        ],
                        [
                            "ii ",
                            "India"
                        ],
                        [
                            "br ",
                            "Brazil"
                        ],
                        [
                            "ar ",
                            "Argentina"
                        ],
                        [
                            "cl ",
                            "Chile"
                        ],
                        [
                            "co ",
                            "Colombia"
                        ],
                        [
                            "pe ",
                            "Peru"
                        ],
                        [
                            "ve ",
                            "Venezuela"
                        ],
                        [
                            "cu ",
                            "Cuba"
                        ],
                        [
                            "pr ",
                            "Puerto Rico"
                        ]
                    ],
                    "18": [
                        [
                            "#",
                            "No relieve"
                        ],
                        [
                            "a",
                            "Contours"
                        ],
                        [
                            "b",
                            "Shading"
                        ],
                        [
                            "c",
                            "Hypsometric tints"
                        ],
                        [
                            "d",
                            "Soundings"
                        ],
                        [
                            "e",
                            "Bathymetric soundings"
                        ],
                        [
                            "f",
                            "Form contours"
                        ],
                        [
                            "g",
                            "Bathymetric isolines"
                        ],
                        [
                            "h",
                            "Hachures"
                        ],
                        [
                            "i",
                            "Pictorial"
                        ],
                        [
                            "j",
                            "Land forms"
                        ],
                        [
                            "k",
                            "Relief model"
                        ],
                        [
                            "m",
                            "Bathymetry by shading"
                        ],
                        [
                            "z",
                            "Other"
                        ]
                    ],
                    "22": [
                        [
                            "  ",
                            "No projection / blank"
                        ],
                        [
                            "aa",
                            "Azimutal equidistante"
                        ],
                        [
                            "ab",
                            "Gnomonic"
                        ],
                        [
                            "ac",
                            "Azimutal de Lambert"
                        ],
                        [
                            "ad",
                            "Orthographic"
                        ],
                        [
                            "ae",
                            "Azimutal otra"
                        ],
                        [
                            "ba",
                            "Mercator"
                        ],
                        [
                            "bb",
                            "Mercator transversa"
                        ],
                        [
                            "bc",
                            "Mercator oblicua"
                        ],
                        [
                            "ca",
                            "Albers conic"
                        ],
                        [
                            "cb",
                            "Bonne"
                        ],
                        [
                            "cc",
                            "Lambert conforme"
                        ],
                        [
                            "da",
                            "Policonic"
                        ],
                        [
                            "fa",
                            "Pseudocylindrical"
                        ],
                        [
                            "fb",
                            "Transversa"
                        ],
                        [
                            "ka",
                            "Cylindrical"
                        ],
                        [
                            "kb",
                            "Transversa"
                        ],
                        [
                            "zz",
                            "Otra"
                        ]
                    ],
                    "23": [
                        [
                            "#",
                            "None of the following"
                        ],
                        [
                            "a",
                            "Microfilm"
                        ],
                        [
                            "b",
                            "Microfiche"
                        ],
                        [
                            "c",
                            "Microopaque"
                        ],
                        [
                            "d",
                            "Large print"
                        ],
                        [
                            "f",
                            "Braille"
                        ],
                        [
                            "o",
                            "Online"
                        ],
                        [
                            "q",
                            "Direct electronic"
                        ],
                        [
                            "r",
                            "Regular print reproduction"
                        ],
                        [
                            "s",
                            "Electronic"
                        ]
                    ],
                    "25": [
                        [
                            "a",
                            "Atlas"
                        ],
                        [
                            "b",
                            "Compass"
                        ],
                        [
                            "c",
                            "Diagram"
                        ],
                        [
                            "d",
                            "Globo"
                        ],
                        [
                            "e",
                            "Map"
                        ],
                        [
                            "f",
                            "Mapa en serie"
                        ],
                        [
                            "g",
                            "Mapa en hojas sueltas"
                        ],
                        [
                            "h",
                            "Mapa mural"
                        ],
                        [
                            "j",
                            "Profile"
                        ],
                        [
                            "k",
                            "Model"
                        ],
                        [
                            "l",
                            "Plano"
                        ],
                        [
                            "m",
                            "Tarjeta"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ]
                    ],
                    "28": [
                        [
                            "#",
                            "Not a government publication"
                        ],
                        [
                            "a",
                            "Autonomous or semi-autonomous agency"
                        ],
                        [
                            "c",
                            "Multilocal"
                        ],
                        [
                            "f",
                            "Federal/national"
                        ],
                        [
                            "i",
                            "International intergovernmental body"
                        ],
                        [
                            "l",
                            "Local"
                        ],
                        [
                            "m",
                            "Multistate"
                        ],
                        [
                            "o",
                            "Government publication — level undetermined"
                        ],
                        [
                            "s",
                            "State/provincial/territorial"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ]
                    ],
                    "29": [
                        [
                            "#",
                            "None of the following"
                        ],
                        [
                            "a",
                            "Microfilm"
                        ],
                        [
                            "b",
                            "Microfiche"
                        ],
                        [
                            "c",
                            "Microopaque"
                        ],
                        [
                            "d",
                            "Large print"
                        ],
                        [
                            "f",
                            "Braille"
                        ],
                        [
                            "o",
                            "Online"
                        ],
                        [
                            "q",
                            "Direct electronic"
                        ],
                        [
                            "r",
                            "Regular print reproduction"
                        ],
                        [
                            "s",
                            "Electronic"
                        ]
                    ],
                    "30": [
                        [
                            "0",
                            "Not a festschrift"
                        ],
                        [
                            "1",
                            "Festschrift"
                        ]
                    ],
                    "31": [
                        [
                            "0",
                            "No index"
                        ],
                        [
                            "1",
                            "Has index"
                        ]
                    ],
                    "32": [
                        [
                            "#",
                            "No definido"
                        ]
                    ],
                    "33": [
                        [
                            "0",
                            "Not fiction (unspecified)"
                        ],
                        [
                            "1",
                            "Fiction (unspecified)"
                        ],
                        [
                            "d",
                            "Drama"
                        ],
                        [
                            "e",
                            "Essays"
                        ],
                        [
                            "f",
                            "Fiction"
                        ],
                        [
                            "h",
                            "Humor, satire"
                        ],
                        [
                            "i",
                            "Letters"
                        ],
                        [
                            "j",
                            "Short stories"
                        ],
                        [
                            "m",
                            "Mixed forms"
                        ],
                        [
                            "p",
                            "Poetry"
                        ],
                        [
                            "s",
                            "Speeches"
                        ],
                        [
                            "u",
                            "Unknown"
                        ]
                    ],
                    "34": [
                        [
                            "#",
                            "No biographical material"
                        ],
                        [
                            "a",
                            "Autobiography"
                        ],
                        [
                            "b",
                            "Individual biography"
                        ],
                        [
                            "c",
                            "Collective biography"
                        ],
                        [
                            "d",
                            "Contains biographical information"
                        ]
                    ],
                    "35": [
                        [
                            "   ",
                            "No language / blank"
                        ],
                        [
                            "eng",
                            "English"
                        ],
                        [
                            "spa",
                            "Spanish"
                        ],
                        [
                            "fre",
                            "French"
                        ],
                        [
                            "ger",
                            "German"
                        ],
                        [
                            "ita",
                            "Italian"
                        ],
                        [
                            "por",
                            "Portuguese"
                        ],
                        [
                            "cat",
                            "Catalan"
                        ],
                        [
                            "glg",
                            "Galician"
                        ],
                        [
                            "eus",
                            "Basque"
                        ],
                        [
                            "lat",
                            "Latin"
                        ],
                        [
                            "grc",
                            "Ancient Greek"
                        ],
                        [
                            "ara",
                            "Arabic"
                        ],
                        [
                            "chi",
                            "Chinese"
                        ],
                        [
                            "jpn",
                            "Japanese"
                        ],
                        [
                            "rus",
                            "Russian"
                        ],
                        [
                            "mul",
                            "Multiple languages"
                        ],
                        [
                            "und",
                            "Indeterminado"
                        ],
                        [
                            "zxx",
                            "No linguistic content"
                        ],
                        [
                            "mis",
                            "Miscellaneous"
                        ],
                        [
                            "sgn",
                            "Sign language"
                        ]
                    ],
                    "38": [
                        [
                            " ",
                            "Not modified"
                        ],
                        [
                            "0",
                            "Not modified"
                        ],
                        [
                            "1",
                            "Modificado"
                        ]
                    ],
                    "39": [
                        [
                            " ",
                            "Unknown source / blank"
                        ],
                        [
                            "#",
                            "No fuente"
                        ],
                        [
                            "d",
                            "DLC"
                        ],
                        [
                            "c",
                            "Cooperativa"
                        ],
                        [
                            "u",
                            "Desconocida"
                        ],
                        [
                            "x",
                            "Source externa"
                        ]
                    ]
                }
            },
            "music": {
                "label": "Music",
                "extension": [
                    {
                        "start": 18,
                        "len": 2,
                        "pos": "18-19",
                        "name": "Form of composition",
                        "kind": "select3",
                        "group": "content",
                        "hint": "Two-letter code; abbreviated PDF list (see 047 for more codes)."
                    },
                    {
                        "start": 20,
                        "len": 1,
                        "pos": "20",
                        "name": "Format of music",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 21,
                        "len": 1,
                        "pos": "21",
                        "name": "Music parts",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 22,
                        "len": 1,
                        "pos": "22",
                        "name": "Target audience",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 23,
                        "len": 1,
                        "pos": "23",
                        "name": "Form of item",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 24,
                        "len": 6,
                        "pos": "24-29",
                        "name": "Accompanying matter",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 30,
                        "len": 2,
                        "pos": "30-31",
                        "name": "Literary text for sound recordings",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 32,
                        "len": 1,
                        "pos": "32",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 33,
                        "len": 1,
                        "pos": "33",
                        "name": "Transposition and arrangement",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 34,
                        "len": 1,
                        "pos": "34",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "6": [
                        [
                            " ",
                            "No type / blank"
                        ],
                        [
                            "b",
                            "Before 1000"
                        ],
                        [
                            "c",
                            "1001-999"
                        ],
                        [
                            "d",
                            "Date 1 and 2"
                        ],
                        [
                            "e",
                            "Detailed dates"
                        ],
                        [
                            "i",
                            "Inclusive collection"
                        ],
                        [
                            "k",
                            "BCE range"
                        ],
                        [
                            "m",
                            "Multiple dates"
                        ],
                        [
                            "n",
                            "Unknown or probable date"
                        ],
                        [
                            "p",
                            "Distribution"
                        ],
                        [
                            "q",
                            "Questionable date"
                        ],
                        [
                            "r",
                            "Reprint/reissue"
                        ],
                        [
                            "s",
                            "Single known date/probable date"
                        ],
                        [
                            "t",
                            "Publication date"
                        ],
                        [
                            "u",
                            "Continuing publication"
                        ]
                    ],
                    "15": [
                        [
                            "   ",
                            "No place / blank"
                        ],
                        [
                            "xxu",
                            "Unknown place"
                        ],
                        [
                            "xx ",
                            "No place"
                        ],
                        [
                            "cau",
                            "California"
                        ],
                        [
                            "nyu",
                            "New York"
                        ],
                        [
                            "enk",
                            "England"
                        ],
                        [
                            "sp ",
                            "Spain"
                        ],
                        [
                            "mx ",
                            "Mexico"
                        ],
                        [
                            "fr ",
                            "France"
                        ],
                        [
                            "gw ",
                            "Germany"
                        ],
                        [
                            "it ",
                            "Italy"
                        ],
                        [
                            "be ",
                            "Belgium"
                        ],
                        [
                            "ne ",
                            "Netherlands"
                        ],
                        [
                            "sz ",
                            "Switzerland"
                        ],
                        [
                            "au ",
                            "Austria"
                        ],
                        [
                            "pl ",
                            "Poland"
                        ],
                        [
                            "ru ",
                            "Russia"
                        ],
                        [
                            "ja ",
                            "Japan"
                        ],
                        [
                            "cc ",
                            "China"
                        ],
                        [
                            "ii ",
                            "India"
                        ],
                        [
                            "br ",
                            "Brazil"
                        ],
                        [
                            "ar ",
                            "Argentina"
                        ],
                        [
                            "cl ",
                            "Chile"
                        ],
                        [
                            "co ",
                            "Colombia"
                        ],
                        [
                            "pe ",
                            "Peru"
                        ],
                        [
                            "ve ",
                            "Venezuela"
                        ],
                        [
                            "cu ",
                            "Cuba"
                        ],
                        [
                            "pr ",
                            "Puerto Rico"
                        ]
                    ],
                    "18": [
                        [
                            "  ",
                            "No forma / blank"
                        ],
                        [
                            "an",
                            "Anthems"
                        ],
                        [
                            "bd",
                            "Ballads"
                        ],
                        [
                            "bt",
                            "Ballets"
                        ],
                        [
                            "ch",
                            "Chorales"
                        ],
                        [
                            "co",
                            "Concertos"
                        ],
                        [
                            "ct",
                            "Cantatas"
                        ],
                        [
                            "df",
                            "Folk dance"
                        ],
                        [
                            "mi",
                            "Minuets"
                        ],
                        [
                            "mo",
                            "Motets"
                        ],
                        [
                            "mu",
                            "Multiple forms"
                        ],
                        [
                            "nn",
                            "Not applicable"
                        ],
                        [
                            "op",
                            "Operas"
                        ],
                        [
                            "or",
                            "Oratorios"
                        ],
                        [
                            "ov",
                            "Overtures"
                        ],
                        [
                            "pt",
                            "Partitas"
                        ],
                        [
                            "ri",
                            "Rondos"
                        ],
                        [
                            "sn",
                            "Sonatas"
                        ],
                        [
                            "st",
                            "Studies"
                        ],
                        [
                            "su",
                            "Suite"
                        ],
                        [
                            "sy",
                            "Symphonies"
                        ],
                        [
                            "uu",
                            "Unknown"
                        ],
                        [
                            "zz",
                            "Otra"
                        ]
                    ],
                    "20": [
                        [
                            "a",
                            "Partitura"
                        ],
                        [
                            "b",
                            "Partitura abreviada"
                        ],
                        [
                            "c",
                            "Acorde"
                        ],
                        [
                            "d",
                            "Solo vocal"
                        ],
                        [
                            "e",
                            "Partitura corta"
                        ],
                        [
                            "g",
                            "Letra"
                        ],
                        [
                            "h",
                            "Partitura y letra"
                        ],
                        [
                            "i",
                            "Libreto"
                        ],
                        [
                            "j",
                            "Partitura y extractos"
                        ],
                        [
                            "k",
                            "Vocal score"
                        ],
                        [
                            "l",
                            "Partitura"
                        ],
                        [
                            "m",
                            "Multiple"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ]
                    ],
                    "21": [
                        [
                            "#",
                            "No partes"
                        ],
                        [
                            "a",
                            "Partes"
                        ],
                        [
                            "b",
                            "Partes en arreglo"
                        ],
                        [
                            "d",
                            "Partes y letra"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ]
                    ],
                    "22": [
                        [
                            "#",
                            "Unknown or not specified"
                        ],
                        [
                            "a",
                            "Preschool"
                        ],
                        [
                            "b",
                            "Primary"
                        ],
                        [
                            "c",
                            "Pre-adolescent"
                        ],
                        [
                            "d",
                            "Adolescent"
                        ],
                        [
                            "e",
                            "Adult"
                        ],
                        [
                            "f",
                            "Specialized"
                        ],
                        [
                            "g",
                            "General"
                        ],
                        [
                            "j",
                            "Juvenile"
                        ]
                    ],
                    "23": [
                        [
                            "#",
                            "None of the following"
                        ],
                        [
                            "a",
                            "Microfilm"
                        ],
                        [
                            "b",
                            "Microfiche"
                        ],
                        [
                            "c",
                            "Microopaque"
                        ],
                        [
                            "d",
                            "Large print"
                        ],
                        [
                            "f",
                            "Braille"
                        ],
                        [
                            "o",
                            "Online"
                        ],
                        [
                            "q",
                            "Direct electronic"
                        ],
                        [
                            "r",
                            "Regular print reproduction"
                        ],
                        [
                            "s",
                            "Electronic"
                        ]
                    ],
                    "28": [
                        [
                            "#",
                            "Not a government publication"
                        ],
                        [
                            "a",
                            "Autonomous or semi-autonomous agency"
                        ],
                        [
                            "c",
                            "Multilocal"
                        ],
                        [
                            "f",
                            "Federal/national"
                        ],
                        [
                            "i",
                            "International intergovernmental body"
                        ],
                        [
                            "l",
                            "Local"
                        ],
                        [
                            "m",
                            "Multistate"
                        ],
                        [
                            "o",
                            "Government publication — level undetermined"
                        ],
                        [
                            "s",
                            "State/provincial/territorial"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ]
                    ],
                    "29": [
                        [
                            "0",
                            "Not a conference"
                        ],
                        [
                            "1",
                            "Conference"
                        ]
                    ],
                    "30": [
                        [
                            "0",
                            "Not a festschrift"
                        ],
                        [
                            "1",
                            "Festschrift"
                        ]
                    ],
                    "31": [
                        [
                            "0",
                            "No index"
                        ],
                        [
                            "1",
                            "Has index"
                        ]
                    ],
                    "32": [
                        [
                            "#",
                            "No definido"
                        ]
                    ],
                    "33": [
                        [
                            "#",
                            "No se indica"
                        ],
                        [
                            "a",
                            "Transposition"
                        ],
                        [
                            "b",
                            "Arreglo"
                        ],
                        [
                            "c",
                            "Transposition and arrangement"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ]
                    ],
                    "34": [
                        [
                            "#",
                            "No biographical material"
                        ],
                        [
                            "a",
                            "Autobiography"
                        ],
                        [
                            "b",
                            "Individual biography"
                        ],
                        [
                            "c",
                            "Collective biography"
                        ],
                        [
                            "d",
                            "Contains biographical information"
                        ]
                    ],
                    "35": [
                        [
                            "   ",
                            "No language / blank"
                        ],
                        [
                            "eng",
                            "English"
                        ],
                        [
                            "spa",
                            "Spanish"
                        ],
                        [
                            "fre",
                            "French"
                        ],
                        [
                            "ger",
                            "German"
                        ],
                        [
                            "ita",
                            "Italian"
                        ],
                        [
                            "por",
                            "Portuguese"
                        ],
                        [
                            "cat",
                            "Catalan"
                        ],
                        [
                            "glg",
                            "Galician"
                        ],
                        [
                            "eus",
                            "Basque"
                        ],
                        [
                            "lat",
                            "Latin"
                        ],
                        [
                            "grc",
                            "Ancient Greek"
                        ],
                        [
                            "ara",
                            "Arabic"
                        ],
                        [
                            "chi",
                            "Chinese"
                        ],
                        [
                            "jpn",
                            "Japanese"
                        ],
                        [
                            "rus",
                            "Russian"
                        ],
                        [
                            "mul",
                            "Multiple languages"
                        ],
                        [
                            "und",
                            "Indeterminado"
                        ],
                        [
                            "zxx",
                            "No linguistic content"
                        ],
                        [
                            "mis",
                            "Miscellaneous"
                        ],
                        [
                            "sgn",
                            "Sign language"
                        ]
                    ],
                    "38": [
                        [
                            " ",
                            "Not modified"
                        ],
                        [
                            "0",
                            "Not modified"
                        ],
                        [
                            "1",
                            "Modificado"
                        ]
                    ],
                    "39": [
                        [
                            " ",
                            "Unknown source / blank"
                        ],
                        [
                            "#",
                            "No fuente"
                        ],
                        [
                            "d",
                            "DLC"
                        ],
                        [
                            "c",
                            "Cooperativa"
                        ],
                        [
                            "u",
                            "Desconocida"
                        ],
                        [
                            "x",
                            "Source externa"
                        ]
                    ]
                }
            },
            "continuing": {
                "label": "Continuing resources",
                "extension": [
                    {
                        "start": 18,
                        "len": 1,
                        "pos": "18",
                        "name": "Frequency",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 19,
                        "len": 1,
                        "pos": "19",
                        "name": "Regularity",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 20,
                        "len": 1,
                        "pos": "20",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 21,
                        "len": 1,
                        "pos": "21",
                        "name": "Type of continuing resource",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 22,
                        "len": 1,
                        "pos": "22",
                        "name": "Form of original item",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 23,
                        "len": 1,
                        "pos": "23",
                        "name": "Form of item",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 24,
                        "len": 1,
                        "pos": "24",
                        "name": "Nature of entire work",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 25,
                        "len": 1,
                        "pos": "25",
                        "name": "Naturaleza contenido (1)",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 26,
                        "len": 1,
                        "pos": "26",
                        "name": "Naturaleza contenido (2)",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 27,
                        "len": 1,
                        "pos": "27",
                        "name": "Naturaleza contenido (3)",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 28,
                        "len": 1,
                        "pos": "28",
                        "name": "Government publication",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 29,
                        "len": 1,
                        "pos": "29",
                        "name": "Conference publication",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 30,
                        "len": 3,
                        "pos": "30-32",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 33,
                        "len": 1,
                        "pos": "33",
                        "name": "Original alphabet or script of title",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 34,
                        "len": 1,
                        "pos": "34",
                        "name": "Entry convention",
                        "kind": "select",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "6": [
                        [
                            " ",
                            "No type / blank"
                        ],
                        [
                            "b",
                            "Before 1000"
                        ],
                        [
                            "c",
                            "1001-999"
                        ],
                        [
                            "d",
                            "Date 1 and 2"
                        ],
                        [
                            "e",
                            "Detailed dates"
                        ],
                        [
                            "i",
                            "Inclusive collection"
                        ],
                        [
                            "k",
                            "BCE range"
                        ],
                        [
                            "m",
                            "Multiple dates"
                        ],
                        [
                            "n",
                            "Unknown or probable date"
                        ],
                        [
                            "p",
                            "Distribution"
                        ],
                        [
                            "q",
                            "Questionable date"
                        ],
                        [
                            "r",
                            "Reprint/reissue"
                        ],
                        [
                            "s",
                            "Single known date/probable date"
                        ],
                        [
                            "t",
                            "Publication date"
                        ],
                        [
                            "u",
                            "Continuing publication"
                        ]
                    ],
                    "15": [
                        [
                            "   ",
                            "No place / blank"
                        ],
                        [
                            "xxu",
                            "Unknown place"
                        ],
                        [
                            "xx ",
                            "No place"
                        ],
                        [
                            "cau",
                            "California"
                        ],
                        [
                            "nyu",
                            "New York"
                        ],
                        [
                            "enk",
                            "England"
                        ],
                        [
                            "sp ",
                            "Spain"
                        ],
                        [
                            "mx ",
                            "Mexico"
                        ],
                        [
                            "fr ",
                            "France"
                        ],
                        [
                            "gw ",
                            "Germany"
                        ],
                        [
                            "it ",
                            "Italy"
                        ],
                        [
                            "be ",
                            "Belgium"
                        ],
                        [
                            "ne ",
                            "Netherlands"
                        ],
                        [
                            "sz ",
                            "Switzerland"
                        ],
                        [
                            "au ",
                            "Austria"
                        ],
                        [
                            "pl ",
                            "Poland"
                        ],
                        [
                            "ru ",
                            "Russia"
                        ],
                        [
                            "ja ",
                            "Japan"
                        ],
                        [
                            "cc ",
                            "China"
                        ],
                        [
                            "ii ",
                            "India"
                        ],
                        [
                            "br ",
                            "Brazil"
                        ],
                        [
                            "ar ",
                            "Argentina"
                        ],
                        [
                            "cl ",
                            "Chile"
                        ],
                        [
                            "co ",
                            "Colombia"
                        ],
                        [
                            "pe ",
                            "Peru"
                        ],
                        [
                            "ve ",
                            "Venezuela"
                        ],
                        [
                            "cu ",
                            "Cuba"
                        ],
                        [
                            "pr ",
                            "Puerto Rico"
                        ]
                    ],
                    "18": [
                        [
                            "#",
                            "No frecuencia"
                        ],
                        [
                            "a",
                            "Annual"
                        ],
                        [
                            "b",
                            "Bimonthly"
                        ],
                        [
                            "c",
                            "Semiweekly"
                        ],
                        [
                            "d",
                            "Daily"
                        ],
                        [
                            "e",
                            "Bimonthly"
                        ],
                        [
                            "f",
                            "Semiannual"
                        ],
                        [
                            "g",
                            "Biennial"
                        ],
                        [
                            "h",
                            "Triannual"
                        ],
                        [
                            "i",
                            "Tres veces por semana"
                        ],
                        [
                            "j",
                            "Tres veces al mes"
                        ],
                        [
                            "k",
                            "Continuous"
                        ],
                        [
                            "m",
                            "Monthly"
                        ],
                        [
                            "q",
                            "Quarterly"
                        ],
                        [
                            "s",
                            "Weekly"
                        ],
                        [
                            "t",
                            "Three times a year"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "w",
                            "Dos veces al mes"
                        ],
                        [
                            "z",
                            "Other"
                        ]
                    ],
                    "19": [
                        [
                            "#",
                            "Normal"
                        ],
                        [
                            "n",
                            "Normal"
                        ],
                        [
                            "r",
                            "Regular"
                        ],
                        [
                            "x",
                            "Irregular"
                        ],
                        [
                            "u",
                            "Unknown"
                        ]
                    ],
                    "21": [
                        [
                            "#",
                            "Unspecified"
                        ],
                        [
                            "l",
                            "Actualizaciones de base de datos"
                        ],
                        [
                            "m",
                            "Monographic series"
                        ],
                        [
                            "n",
                            "Newsletter"
                        ],
                        [
                            "p",
                            "Mixed periodical"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ]
                    ],
                    "22": [
                        [
                            "#",
                            "None of the following"
                        ],
                        [
                            "a",
                            "Microfilm"
                        ],
                        [
                            "b",
                            "Microfiche"
                        ],
                        [
                            "c",
                            "Microopaque"
                        ],
                        [
                            "d",
                            "Large print"
                        ],
                        [
                            "f",
                            "Braille"
                        ],
                        [
                            "o",
                            "Online"
                        ],
                        [
                            "q",
                            "Direct electronic"
                        ],
                        [
                            "r",
                            "Regular print reproduction"
                        ],
                        [
                            "s",
                            "Electronic"
                        ]
                    ],
                    "23": [
                        [
                            "#",
                            "None of the following"
                        ],
                        [
                            "a",
                            "Microfilm"
                        ],
                        [
                            "b",
                            "Microfiche"
                        ],
                        [
                            "c",
                            "Microopaque"
                        ],
                        [
                            "d",
                            "Large print"
                        ],
                        [
                            "f",
                            "Braille"
                        ],
                        [
                            "o",
                            "Online"
                        ],
                        [
                            "q",
                            "Direct electronic"
                        ],
                        [
                            "r",
                            "Regular print reproduction"
                        ],
                        [
                            "s",
                            "Electronic"
                        ]
                    ],
                    "24": [
                        [
                            "#",
                            "Not specified"
                        ],
                        [
                            "a",
                            "Abstracts/summaries"
                        ],
                        [
                            "b",
                            "Bibliographies"
                        ],
                        [
                            "c",
                            "Catalogs"
                        ],
                        [
                            "d",
                            "Dictionaries"
                        ],
                        [
                            "e",
                            "Encyclopedias"
                        ],
                        [
                            "f",
                            "Handbooks"
                        ],
                        [
                            "g",
                            "Legal articles"
                        ],
                        [
                            "i",
                            "Indexes"
                        ],
                        [
                            "j",
                            "Patent documents"
                        ],
                        [
                            "k",
                            "Discographies"
                        ],
                        [
                            "l",
                            "Legislation"
                        ],
                        [
                            "m",
                            "Theses"
                        ],
                        [
                            "n",
                            "Technical reports on state of the art"
                        ],
                        [
                            "o",
                            "Reviews"
                        ],
                        [
                            "p",
                            "Programmed texts"
                        ],
                        [
                            "q",
                            "Filmographies"
                        ],
                        [
                            "r",
                            "Directories"
                        ],
                        [
                            "s",
                            "Statistics"
                        ],
                        [
                            "t",
                            "Technical reports"
                        ],
                        [
                            "u",
                            "Standards/specifications"
                        ],
                        [
                            "v",
                            "Legal case digests"
                        ],
                        [
                            "w",
                            "Cases and decisions"
                        ],
                        [
                            "y",
                            "Yearbooks"
                        ],
                        [
                            "z",
                            "Treaties"
                        ],
                        [
                            "2",
                            "Separates"
                        ],
                        [
                            "5",
                            "Calendars"
                        ],
                        [
                            "6",
                            "Comics/graphic novels"
                        ]
                    ],
                    "25": [
                        [
                            "#",
                            "Not specified"
                        ],
                        [
                            "a",
                            "Abstracts/summaries"
                        ],
                        [
                            "b",
                            "Bibliographies"
                        ],
                        [
                            "c",
                            "Catalogs"
                        ],
                        [
                            "d",
                            "Dictionaries"
                        ],
                        [
                            "e",
                            "Encyclopedias"
                        ],
                        [
                            "f",
                            "Handbooks"
                        ],
                        [
                            "g",
                            "Legal articles"
                        ],
                        [
                            "i",
                            "Indexes"
                        ],
                        [
                            "j",
                            "Patent documents"
                        ],
                        [
                            "k",
                            "Discographies"
                        ],
                        [
                            "l",
                            "Legislation"
                        ],
                        [
                            "m",
                            "Theses"
                        ],
                        [
                            "n",
                            "Technical reports on state of the art"
                        ],
                        [
                            "o",
                            "Reviews"
                        ],
                        [
                            "p",
                            "Programmed texts"
                        ],
                        [
                            "q",
                            "Filmographies"
                        ],
                        [
                            "r",
                            "Directories"
                        ],
                        [
                            "s",
                            "Statistics"
                        ],
                        [
                            "t",
                            "Technical reports"
                        ],
                        [
                            "u",
                            "Standards/specifications"
                        ],
                        [
                            "v",
                            "Legal case digests"
                        ],
                        [
                            "w",
                            "Cases and decisions"
                        ],
                        [
                            "y",
                            "Yearbooks"
                        ],
                        [
                            "z",
                            "Treaties"
                        ],
                        [
                            "2",
                            "Separates"
                        ],
                        [
                            "5",
                            "Calendars"
                        ],
                        [
                            "6",
                            "Comics/graphic novels"
                        ]
                    ],
                    "26": [
                        [
                            "#",
                            "Not specified"
                        ],
                        [
                            "a",
                            "Abstracts/summaries"
                        ],
                        [
                            "b",
                            "Bibliographies"
                        ],
                        [
                            "c",
                            "Catalogs"
                        ],
                        [
                            "d",
                            "Dictionaries"
                        ],
                        [
                            "e",
                            "Encyclopedias"
                        ],
                        [
                            "f",
                            "Handbooks"
                        ],
                        [
                            "g",
                            "Legal articles"
                        ],
                        [
                            "i",
                            "Indexes"
                        ],
                        [
                            "j",
                            "Patent documents"
                        ],
                        [
                            "k",
                            "Discographies"
                        ],
                        [
                            "l",
                            "Legislation"
                        ],
                        [
                            "m",
                            "Theses"
                        ],
                        [
                            "n",
                            "Technical reports on state of the art"
                        ],
                        [
                            "o",
                            "Reviews"
                        ],
                        [
                            "p",
                            "Programmed texts"
                        ],
                        [
                            "q",
                            "Filmographies"
                        ],
                        [
                            "r",
                            "Directories"
                        ],
                        [
                            "s",
                            "Statistics"
                        ],
                        [
                            "t",
                            "Technical reports"
                        ],
                        [
                            "u",
                            "Standards/specifications"
                        ],
                        [
                            "v",
                            "Legal case digests"
                        ],
                        [
                            "w",
                            "Cases and decisions"
                        ],
                        [
                            "y",
                            "Yearbooks"
                        ],
                        [
                            "z",
                            "Treaties"
                        ],
                        [
                            "2",
                            "Separates"
                        ],
                        [
                            "5",
                            "Calendars"
                        ],
                        [
                            "6",
                            "Comics/graphic novels"
                        ]
                    ],
                    "27": [
                        [
                            "#",
                            "Not specified"
                        ],
                        [
                            "a",
                            "Abstracts/summaries"
                        ],
                        [
                            "b",
                            "Bibliographies"
                        ],
                        [
                            "c",
                            "Catalogs"
                        ],
                        [
                            "d",
                            "Dictionaries"
                        ],
                        [
                            "e",
                            "Encyclopedias"
                        ],
                        [
                            "f",
                            "Handbooks"
                        ],
                        [
                            "g",
                            "Legal articles"
                        ],
                        [
                            "i",
                            "Indexes"
                        ],
                        [
                            "j",
                            "Patent documents"
                        ],
                        [
                            "k",
                            "Discographies"
                        ],
                        [
                            "l",
                            "Legislation"
                        ],
                        [
                            "m",
                            "Theses"
                        ],
                        [
                            "n",
                            "Technical reports on state of the art"
                        ],
                        [
                            "o",
                            "Reviews"
                        ],
                        [
                            "p",
                            "Programmed texts"
                        ],
                        [
                            "q",
                            "Filmographies"
                        ],
                        [
                            "r",
                            "Directories"
                        ],
                        [
                            "s",
                            "Statistics"
                        ],
                        [
                            "t",
                            "Technical reports"
                        ],
                        [
                            "u",
                            "Standards/specifications"
                        ],
                        [
                            "v",
                            "Legal case digests"
                        ],
                        [
                            "w",
                            "Cases and decisions"
                        ],
                        [
                            "y",
                            "Yearbooks"
                        ],
                        [
                            "z",
                            "Treaties"
                        ],
                        [
                            "2",
                            "Separates"
                        ],
                        [
                            "5",
                            "Calendars"
                        ],
                        [
                            "6",
                            "Comics/graphic novels"
                        ]
                    ],
                    "28": [
                        [
                            "#",
                            "Not a government publication"
                        ],
                        [
                            "a",
                            "Autonomous or semi-autonomous agency"
                        ],
                        [
                            "c",
                            "Multilocal"
                        ],
                        [
                            "f",
                            "Federal/national"
                        ],
                        [
                            "i",
                            "International intergovernmental body"
                        ],
                        [
                            "l",
                            "Local"
                        ],
                        [
                            "m",
                            "Multistate"
                        ],
                        [
                            "o",
                            "Government publication — level undetermined"
                        ],
                        [
                            "s",
                            "State/provincial/territorial"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ]
                    ],
                    "29": [
                        [
                            "0",
                            "Not a conference"
                        ],
                        [
                            "1",
                            "Conference"
                        ]
                    ],
                    "30": [
                        [
                            "0",
                            "Not a festschrift"
                        ],
                        [
                            "1",
                            "Festschrift"
                        ]
                    ],
                    "31": [
                        [
                            "0",
                            "No index"
                        ],
                        [
                            "1",
                            "Has index"
                        ]
                    ],
                    "32": [
                        [
                            "#",
                            "No definido"
                        ]
                    ],
                    "33": [
                        [
                            "#",
                            "No se indica"
                        ],
                        [
                            "a",
                            "Basic Latin"
                        ],
                        [
                            "b",
                            "Latino extendido"
                        ],
                        [
                            "c",
                            "Cyrillic"
                        ],
                        [
                            "d",
                            "Japanese"
                        ],
                        [
                            "e",
                            "Chinese"
                        ],
                        [
                            "f",
                            "Arabic"
                        ],
                        [
                            "g",
                            "Griego"
                        ],
                        [
                            "h",
                            "Hebreo"
                        ],
                        [
                            "i",
                            "Thai"
                        ],
                        [
                            "j",
                            "Devanagari"
                        ],
                        [
                            "k",
                            "Coreano"
                        ],
                        [
                            "l",
                            "Tamil"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ]
                    ],
                    "34": [
                        [
                            "0",
                            "Entrada sucesiva"
                        ],
                        [
                            "1",
                            "Latest entry"
                        ],
                        [
                            "2",
                            "Entrada integrada"
                        ]
                    ],
                    "35": [
                        [
                            "   ",
                            "No language / blank"
                        ],
                        [
                            "eng",
                            "English"
                        ],
                        [
                            "spa",
                            "Spanish"
                        ],
                        [
                            "fre",
                            "French"
                        ],
                        [
                            "ger",
                            "German"
                        ],
                        [
                            "ita",
                            "Italian"
                        ],
                        [
                            "por",
                            "Portuguese"
                        ],
                        [
                            "cat",
                            "Catalan"
                        ],
                        [
                            "glg",
                            "Galician"
                        ],
                        [
                            "eus",
                            "Basque"
                        ],
                        [
                            "lat",
                            "Latin"
                        ],
                        [
                            "grc",
                            "Ancient Greek"
                        ],
                        [
                            "ara",
                            "Arabic"
                        ],
                        [
                            "chi",
                            "Chinese"
                        ],
                        [
                            "jpn",
                            "Japanese"
                        ],
                        [
                            "rus",
                            "Russian"
                        ],
                        [
                            "mul",
                            "Multiple languages"
                        ],
                        [
                            "und",
                            "Indeterminado"
                        ],
                        [
                            "zxx",
                            "No linguistic content"
                        ],
                        [
                            "mis",
                            "Miscellaneous"
                        ],
                        [
                            "sgn",
                            "Sign language"
                        ]
                    ],
                    "38": [
                        [
                            " ",
                            "Not modified"
                        ],
                        [
                            "0",
                            "Not modified"
                        ],
                        [
                            "1",
                            "Modificado"
                        ]
                    ],
                    "39": [
                        [
                            " ",
                            "Unknown source / blank"
                        ],
                        [
                            "#",
                            "No fuente"
                        ],
                        [
                            "d",
                            "DLC"
                        ],
                        [
                            "c",
                            "Cooperativa"
                        ],
                        [
                            "u",
                            "Desconocida"
                        ],
                        [
                            "x",
                            "Source externa"
                        ]
                    ]
                }
            },
            "visual": {
                "label": "Visual materials",
                "extension": [
                    {
                        "start": 18,
                        "len": 3,
                        "pos": "18-20",
                        "name": "Running time for motion pictures and videorecordings",
                        "kind": "text",
                        "group": "content",
                        "hint": "Minutes (right-justified, zero-filled); 000 if over 3 digits."
                    },
                    {
                        "start": 21,
                        "len": 1,
                        "pos": "21",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 22,
                        "len": 1,
                        "pos": "22",
                        "name": "Target audience",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 23,
                        "len": 5,
                        "pos": "23-27",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 28,
                        "len": 1,
                        "pos": "28",
                        "name": "Government publication",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 29,
                        "len": 1,
                        "pos": "29",
                        "name": "Form of item",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 30,
                        "len": 3,
                        "pos": "30-32",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 33,
                        "len": 1,
                        "pos": "33",
                        "name": "Type of visual material",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 34,
                        "len": 1,
                        "pos": "34",
                        "name": "Technique",
                        "kind": "select",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "6": [
                        [
                            " ",
                            "No type / blank"
                        ],
                        [
                            "b",
                            "Before 1000"
                        ],
                        [
                            "c",
                            "1001-999"
                        ],
                        [
                            "d",
                            "Date 1 and 2"
                        ],
                        [
                            "e",
                            "Detailed dates"
                        ],
                        [
                            "i",
                            "Inclusive collection"
                        ],
                        [
                            "k",
                            "BCE range"
                        ],
                        [
                            "m",
                            "Multiple dates"
                        ],
                        [
                            "n",
                            "Unknown or probable date"
                        ],
                        [
                            "p",
                            "Distribution"
                        ],
                        [
                            "q",
                            "Questionable date"
                        ],
                        [
                            "r",
                            "Reprint/reissue"
                        ],
                        [
                            "s",
                            "Single known date/probable date"
                        ],
                        [
                            "t",
                            "Publication date"
                        ],
                        [
                            "u",
                            "Continuing publication"
                        ]
                    ],
                    "15": [
                        [
                            "   ",
                            "No place / blank"
                        ],
                        [
                            "xxu",
                            "Unknown place"
                        ],
                        [
                            "xx ",
                            "No place"
                        ],
                        [
                            "cau",
                            "California"
                        ],
                        [
                            "nyu",
                            "New York"
                        ],
                        [
                            "enk",
                            "England"
                        ],
                        [
                            "sp ",
                            "Spain"
                        ],
                        [
                            "mx ",
                            "Mexico"
                        ],
                        [
                            "fr ",
                            "France"
                        ],
                        [
                            "gw ",
                            "Germany"
                        ],
                        [
                            "it ",
                            "Italy"
                        ],
                        [
                            "be ",
                            "Belgium"
                        ],
                        [
                            "ne ",
                            "Netherlands"
                        ],
                        [
                            "sz ",
                            "Switzerland"
                        ],
                        [
                            "au ",
                            "Austria"
                        ],
                        [
                            "pl ",
                            "Poland"
                        ],
                        [
                            "ru ",
                            "Russia"
                        ],
                        [
                            "ja ",
                            "Japan"
                        ],
                        [
                            "cc ",
                            "China"
                        ],
                        [
                            "ii ",
                            "India"
                        ],
                        [
                            "br ",
                            "Brazil"
                        ],
                        [
                            "ar ",
                            "Argentina"
                        ],
                        [
                            "cl ",
                            "Chile"
                        ],
                        [
                            "co ",
                            "Colombia"
                        ],
                        [
                            "pe ",
                            "Peru"
                        ],
                        [
                            "ve ",
                            "Venezuela"
                        ],
                        [
                            "cu ",
                            "Cuba"
                        ],
                        [
                            "pr ",
                            "Puerto Rico"
                        ]
                    ],
                    "22": [
                        [
                            "#",
                            "Unknown or not specified"
                        ],
                        [
                            "a",
                            "Preschool"
                        ],
                        [
                            "b",
                            "Primary"
                        ],
                        [
                            "c",
                            "Pre-adolescent"
                        ],
                        [
                            "d",
                            "Adolescent"
                        ],
                        [
                            "e",
                            "Adult"
                        ],
                        [
                            "f",
                            "Specialized"
                        ],
                        [
                            "g",
                            "General"
                        ],
                        [
                            "j",
                            "Juvenile"
                        ]
                    ],
                    "23": [
                        [
                            "#",
                            "None of the following"
                        ],
                        [
                            "a",
                            "Microfilm"
                        ],
                        [
                            "b",
                            "Microfiche"
                        ],
                        [
                            "c",
                            "Microopaque"
                        ],
                        [
                            "d",
                            "Large print"
                        ],
                        [
                            "f",
                            "Braille"
                        ],
                        [
                            "o",
                            "Online"
                        ],
                        [
                            "q",
                            "Direct electronic"
                        ],
                        [
                            "r",
                            "Regular print reproduction"
                        ],
                        [
                            "s",
                            "Electronic"
                        ]
                    ],
                    "28": [
                        [
                            "#",
                            "Not a government publication"
                        ],
                        [
                            "a",
                            "Autonomous or semi-autonomous agency"
                        ],
                        [
                            "c",
                            "Multilocal"
                        ],
                        [
                            "f",
                            "Federal/national"
                        ],
                        [
                            "i",
                            "International intergovernmental body"
                        ],
                        [
                            "l",
                            "Local"
                        ],
                        [
                            "m",
                            "Multistate"
                        ],
                        [
                            "o",
                            "Government publication — level undetermined"
                        ],
                        [
                            "s",
                            "State/provincial/territorial"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ]
                    ],
                    "29": [
                        [
                            "#",
                            "None of the following"
                        ],
                        [
                            "a",
                            "Microfilm"
                        ],
                        [
                            "b",
                            "Microfiche"
                        ],
                        [
                            "c",
                            "Microopaque"
                        ],
                        [
                            "d",
                            "Large print"
                        ],
                        [
                            "f",
                            "Braille"
                        ],
                        [
                            "o",
                            "Online"
                        ],
                        [
                            "q",
                            "Direct electronic"
                        ],
                        [
                            "r",
                            "Regular print reproduction"
                        ],
                        [
                            "s",
                            "Electronic"
                        ]
                    ],
                    "30": [
                        [
                            "0",
                            "Not a festschrift"
                        ],
                        [
                            "1",
                            "Festschrift"
                        ]
                    ],
                    "31": [
                        [
                            "0",
                            "No index"
                        ],
                        [
                            "1",
                            "Has index"
                        ]
                    ],
                    "32": [
                        [
                            "#",
                            "No definido"
                        ]
                    ],
                    "33": [
                        [
                            "#",
                            "Unspecified"
                        ],
                        [
                            "a",
                            "Collage"
                        ],
                        [
                            "b",
                            "Drawing"
                        ],
                        [
                            "c",
                            "Photocollage"
                        ],
                        [
                            "d",
                            "Diorama"
                        ],
                        [
                            "f",
                            "Filmstrip"
                        ],
                        [
                            "g",
                            "Game"
                        ],
                        [
                            "i",
                            "Picture"
                        ],
                        [
                            "k",
                            "Graphic"
                        ],
                        [
                            "l",
                            "Technical drawing"
                        ],
                        [
                            "m",
                            "Motion picture"
                        ],
                        [
                            "n",
                            "Chart"
                        ],
                        [
                            "o",
                            "Flash card"
                        ],
                        [
                            "p",
                            "Microscope slide"
                        ],
                        [
                            "q",
                            "Model"
                        ],
                        [
                            "r",
                            "Realia"
                        ],
                        [
                            "s",
                            "Slide"
                        ],
                        [
                            "t",
                            "Transparency"
                        ],
                        [
                            "v",
                            "Videorecording"
                        ],
                        [
                            "w",
                            "Toy"
                        ],
                        [
                            "z",
                            "Other"
                        ]
                    ],
                    "34": [
                        [
                            "a",
                            "Animation"
                        ],
                        [
                            "c",
                            "Animation and live action"
                        ],
                        [
                            "l",
                            "Live action"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ]
                    ],
                    "35": [
                        [
                            "   ",
                            "No language / blank"
                        ],
                        [
                            "eng",
                            "English"
                        ],
                        [
                            "spa",
                            "Spanish"
                        ],
                        [
                            "fre",
                            "French"
                        ],
                        [
                            "ger",
                            "German"
                        ],
                        [
                            "ita",
                            "Italian"
                        ],
                        [
                            "por",
                            "Portuguese"
                        ],
                        [
                            "cat",
                            "Catalan"
                        ],
                        [
                            "glg",
                            "Galician"
                        ],
                        [
                            "eus",
                            "Basque"
                        ],
                        [
                            "lat",
                            "Latin"
                        ],
                        [
                            "grc",
                            "Ancient Greek"
                        ],
                        [
                            "ara",
                            "Arabic"
                        ],
                        [
                            "chi",
                            "Chinese"
                        ],
                        [
                            "jpn",
                            "Japanese"
                        ],
                        [
                            "rus",
                            "Russian"
                        ],
                        [
                            "mul",
                            "Multiple languages"
                        ],
                        [
                            "und",
                            "Indeterminado"
                        ],
                        [
                            "zxx",
                            "No linguistic content"
                        ],
                        [
                            "mis",
                            "Miscellaneous"
                        ],
                        [
                            "sgn",
                            "Sign language"
                        ]
                    ],
                    "38": [
                        [
                            " ",
                            "Not modified"
                        ],
                        [
                            "0",
                            "Not modified"
                        ],
                        [
                            "1",
                            "Modificado"
                        ]
                    ],
                    "39": [
                        [
                            " ",
                            "Unknown source / blank"
                        ],
                        [
                            "#",
                            "No fuente"
                        ],
                        [
                            "d",
                            "DLC"
                        ],
                        [
                            "c",
                            "Cooperativa"
                        ],
                        [
                            "u",
                            "Desconocida"
                        ],
                        [
                            "x",
                            "Source externa"
                        ]
                    ]
                }
            },
            "mixed": {
                "label": "Mixed materials",
                "extension": [
                    {
                        "start": 18,
                        "len": 5,
                        "pos": "18-22",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 23,
                        "len": 1,
                        "pos": "23",
                        "name": "Form of item",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 24,
                        "len": 11,
                        "pos": "24-34",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "6": [
                        [
                            " ",
                            "No type / blank"
                        ],
                        [
                            "b",
                            "Before 1000"
                        ],
                        [
                            "c",
                            "1001-999"
                        ],
                        [
                            "d",
                            "Date 1 and 2"
                        ],
                        [
                            "e",
                            "Detailed dates"
                        ],
                        [
                            "i",
                            "Inclusive collection"
                        ],
                        [
                            "k",
                            "BCE range"
                        ],
                        [
                            "m",
                            "Multiple dates"
                        ],
                        [
                            "n",
                            "Unknown or probable date"
                        ],
                        [
                            "p",
                            "Distribution"
                        ],
                        [
                            "q",
                            "Questionable date"
                        ],
                        [
                            "r",
                            "Reprint/reissue"
                        ],
                        [
                            "s",
                            "Single known date/probable date"
                        ],
                        [
                            "t",
                            "Publication date"
                        ],
                        [
                            "u",
                            "Continuing publication"
                        ]
                    ],
                    "15": [
                        [
                            "   ",
                            "No place / blank"
                        ],
                        [
                            "xxu",
                            "Unknown place"
                        ],
                        [
                            "xx ",
                            "No place"
                        ],
                        [
                            "cau",
                            "California"
                        ],
                        [
                            "nyu",
                            "New York"
                        ],
                        [
                            "enk",
                            "England"
                        ],
                        [
                            "sp ",
                            "Spain"
                        ],
                        [
                            "mx ",
                            "Mexico"
                        ],
                        [
                            "fr ",
                            "France"
                        ],
                        [
                            "gw ",
                            "Germany"
                        ],
                        [
                            "it ",
                            "Italy"
                        ],
                        [
                            "be ",
                            "Belgium"
                        ],
                        [
                            "ne ",
                            "Netherlands"
                        ],
                        [
                            "sz ",
                            "Switzerland"
                        ],
                        [
                            "au ",
                            "Austria"
                        ],
                        [
                            "pl ",
                            "Poland"
                        ],
                        [
                            "ru ",
                            "Russia"
                        ],
                        [
                            "ja ",
                            "Japan"
                        ],
                        [
                            "cc ",
                            "China"
                        ],
                        [
                            "ii ",
                            "India"
                        ],
                        [
                            "br ",
                            "Brazil"
                        ],
                        [
                            "ar ",
                            "Argentina"
                        ],
                        [
                            "cl ",
                            "Chile"
                        ],
                        [
                            "co ",
                            "Colombia"
                        ],
                        [
                            "pe ",
                            "Peru"
                        ],
                        [
                            "ve ",
                            "Venezuela"
                        ],
                        [
                            "cu ",
                            "Cuba"
                        ],
                        [
                            "pr ",
                            "Puerto Rico"
                        ]
                    ],
                    "22": [
                        [
                            "#",
                            "Unknown or not specified"
                        ],
                        [
                            "a",
                            "Preschool"
                        ],
                        [
                            "b",
                            "Primary"
                        ],
                        [
                            "c",
                            "Pre-adolescent"
                        ],
                        [
                            "d",
                            "Adolescent"
                        ],
                        [
                            "e",
                            "Adult"
                        ],
                        [
                            "f",
                            "Specialized"
                        ],
                        [
                            "g",
                            "General"
                        ],
                        [
                            "j",
                            "Juvenile"
                        ]
                    ],
                    "23": [
                        [
                            "#",
                            "None of the following"
                        ],
                        [
                            "a",
                            "Microfilm"
                        ],
                        [
                            "b",
                            "Microfiche"
                        ],
                        [
                            "c",
                            "Microopaque"
                        ],
                        [
                            "d",
                            "Large print"
                        ],
                        [
                            "f",
                            "Braille"
                        ],
                        [
                            "o",
                            "Online"
                        ],
                        [
                            "q",
                            "Direct electronic"
                        ],
                        [
                            "r",
                            "Regular print reproduction"
                        ],
                        [
                            "s",
                            "Electronic"
                        ]
                    ],
                    "28": [
                        [
                            "#",
                            "Not a government publication"
                        ],
                        [
                            "a",
                            "Autonomous or semi-autonomous agency"
                        ],
                        [
                            "c",
                            "Multilocal"
                        ],
                        [
                            "f",
                            "Federal/national"
                        ],
                        [
                            "i",
                            "International intergovernmental body"
                        ],
                        [
                            "l",
                            "Local"
                        ],
                        [
                            "m",
                            "Multistate"
                        ],
                        [
                            "o",
                            "Government publication — level undetermined"
                        ],
                        [
                            "s",
                            "State/provincial/territorial"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ]
                    ],
                    "29": [
                        [
                            "0",
                            "Not a conference"
                        ],
                        [
                            "1",
                            "Conference"
                        ]
                    ],
                    "30": [
                        [
                            "0",
                            "Not a festschrift"
                        ],
                        [
                            "1",
                            "Festschrift"
                        ]
                    ],
                    "31": [
                        [
                            "0",
                            "No index"
                        ],
                        [
                            "1",
                            "Has index"
                        ]
                    ],
                    "32": [
                        [
                            "#",
                            "No definido"
                        ]
                    ],
                    "33": [
                        [
                            "0",
                            "Not fiction (unspecified)"
                        ],
                        [
                            "1",
                            "Fiction (unspecified)"
                        ],
                        [
                            "d",
                            "Drama"
                        ],
                        [
                            "e",
                            "Essays"
                        ],
                        [
                            "f",
                            "Fiction"
                        ],
                        [
                            "h",
                            "Humor, satire"
                        ],
                        [
                            "i",
                            "Letters"
                        ],
                        [
                            "j",
                            "Short stories"
                        ],
                        [
                            "m",
                            "Mixed forms"
                        ],
                        [
                            "p",
                            "Poetry"
                        ],
                        [
                            "s",
                            "Speeches"
                        ],
                        [
                            "u",
                            "Unknown"
                        ]
                    ],
                    "34": [
                        [
                            "#",
                            "No biographical material"
                        ],
                        [
                            "a",
                            "Autobiography"
                        ],
                        [
                            "b",
                            "Individual biography"
                        ],
                        [
                            "c",
                            "Collective biography"
                        ],
                        [
                            "d",
                            "Contains biographical information"
                        ]
                    ],
                    "35": [
                        [
                            "   ",
                            "No language / blank"
                        ],
                        [
                            "eng",
                            "English"
                        ],
                        [
                            "spa",
                            "Spanish"
                        ],
                        [
                            "fre",
                            "French"
                        ],
                        [
                            "ger",
                            "German"
                        ],
                        [
                            "ita",
                            "Italian"
                        ],
                        [
                            "por",
                            "Portuguese"
                        ],
                        [
                            "cat",
                            "Catalan"
                        ],
                        [
                            "glg",
                            "Galician"
                        ],
                        [
                            "eus",
                            "Basque"
                        ],
                        [
                            "lat",
                            "Latin"
                        ],
                        [
                            "grc",
                            "Ancient Greek"
                        ],
                        [
                            "ara",
                            "Arabic"
                        ],
                        [
                            "chi",
                            "Chinese"
                        ],
                        [
                            "jpn",
                            "Japanese"
                        ],
                        [
                            "rus",
                            "Russian"
                        ],
                        [
                            "mul",
                            "Multiple languages"
                        ],
                        [
                            "und",
                            "Indeterminado"
                        ],
                        [
                            "zxx",
                            "No linguistic content"
                        ],
                        [
                            "mis",
                            "Miscellaneous"
                        ],
                        [
                            "sgn",
                            "Sign language"
                        ]
                    ],
                    "38": [
                        [
                            " ",
                            "Not modified"
                        ],
                        [
                            "0",
                            "Not modified"
                        ],
                        [
                            "1",
                            "Modificado"
                        ]
                    ],
                    "39": [
                        [
                            " ",
                            "Unknown source / blank"
                        ],
                        [
                            "#",
                            "No fuente"
                        ],
                        [
                            "d",
                            "DLC"
                        ],
                        [
                            "c",
                            "Cooperativa"
                        ],
                        [
                            "u",
                            "Desconocida"
                        ],
                        [
                            "x",
                            "Source externa"
                        ]
                    ]
                }
            }
        }
    },
    "006": {
        "form00": [
            [
                " ",
                "Blank"
            ],
            [
                "a",
                "Language material"
            ],
            [
                "c",
                "Notated music"
            ],
            [
                "d",
                "Manuscript notated music"
            ],
            [
                "e",
                "Cartographic material"
            ],
            [
                "f",
                "Manuscript cartographic material"
            ],
            [
                "g",
                "Projected medium"
            ],
            [
                "i",
                "Nonmusical sound recording"
            ],
            [
                "j",
                "Musical sound recording"
            ],
            [
                "k",
                "Two-dimensional nonprojectable graphic"
            ],
            [
                "m",
                "Computer file/Electronic resource"
            ],
            [
                "o",
                "Kit"
            ],
            [
                "p",
                "Mixed material"
            ],
            [
                "r",
                "Three-dimensional artifact or naturally occurring object"
            ],
            [
                "s",
                "Serial/Integrating resource"
            ],
            [
                "t",
                "Manuscript language material"
            ]
        ]
    },
    "007": {
        "categoryCodes": [
            [
                "a",
                "Map"
            ],
            [
                "b",
                "Mixed materials"
            ],
            [
                "c",
                "Electronic resource"
            ],
            [
                "d",
                "Globe"
            ],
            [
                "e",
                "Stereographic"
            ],
            [
                "f",
                "Tactile material"
            ],
            [
                "g",
                "Projected graphic"
            ],
            [
                "h",
                "Microform"
            ],
            [
                "k",
                "Nonprojected graphic"
            ],
            [
                "m",
                "Motion picture"
            ],
            [
                "o",
                "Kit"
            ],
            [
                "q",
                "Notated music"
            ],
            [
                "s",
                "Sound recording"
            ],
            [
                "t",
                "Text"
            ],
            [
                "v",
                "Videorecording"
            ],
            [
                "z",
                "Unspecified"
            ]
        ],
        "categories": {
            "t": {
                "length": 2,
                "label": "Text",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Category of material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Code in position 00; changes the 007 template."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Specific material designation",
                        "kind": "select",
                        "group": "fisico"
                    }
                ],
                "codeTables": {
                    "0": [
                        [
                            "t",
                            "Text"
                        ]
                    ],
                    "1": [
                        [
                            "a",
                            "Regular print"
                        ],
                        [
                            "b",
                            "Large print"
                        ],
                        [
                            "c",
                            "Braille"
                        ],
                        [
                            "d",
                            "Loose-leaf"
                        ],
                        [
                            "u",
                            "Unspecified"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ]
                }
            },
            "o": {
                "length": 2,
                "label": "Kit",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Category of material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Code in position 00; changes the 007 template."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Specific material designation",
                        "kind": "select",
                        "group": "fisico"
                    }
                ],
                "codeTables": {
                    "0": [
                        [
                            "o",
                            "Kit"
                        ]
                    ],
                    "1": [
                        [
                            "u",
                            "Unspecified"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ]
                }
            },
            "z": {
                "length": 2,
                "label": "Unspecified",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Category of material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Code in position 00; changes the 007 template."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Specific material designation",
                        "kind": "select",
                        "group": "fisico"
                    }
                ],
                "codeTables": {
                    "0": [
                        [
                            "z",
                            "Unspecified"
                        ]
                    ],
                    "1": [
                        [
                            "m",
                            "Multiple physical forms"
                        ],
                        [
                            "u",
                            "Unspecified"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ]
                }
            },
            "b": {
                "length": 2,
                "label": "Mixed materials",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Category of material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Code in position 00; changes the 007 template."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Specific material designation",
                        "kind": "select",
                        "group": "fisico"
                    }
                ],
                "codeTables": {
                    "1": [
                        [
                            "u",
                            "Unspecified"
                        ],
                        [
                            "z",
                            "Other"
                        ]
                    ]
                }
            },
            "q": {
                "length": 2,
                "label": "Notated music",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Category of material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Code in position 00; changes the 007 template."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Specific material designation",
                        "kind": "select",
                        "group": "fisico"
                    }
                ],
                "codeTables": {
                    "0": [
                        [
                            "q",
                            "Notated music"
                        ]
                    ],
                    "1": [
                        [
                            "u",
                            "Unspecified"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ]
                }
            },
            "a": {
                "length": 7,
                "label": "Map",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Category of material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Code in position 00; changes the 007 template."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Specific material designation",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 2,
                        "len": 1,
                        "pos": "02",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "fisico",
                        "hint": "Position undefined (# or space)."
                    },
                    {
                        "start": 3,
                        "len": 1,
                        "pos": "03",
                        "name": "Color",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 4,
                        "len": 1,
                        "pos": "04",
                        "name": "Physical medium",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 5,
                        "len": 1,
                        "pos": "05",
                        "name": "Type of reproduction",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 6,
                        "len": 1,
                        "pos": "06",
                        "name": "Production/reproduction details",
                        "kind": "text",
                        "group": "fisico"
                    },
                    {
                        "start": 7,
                        "len": 1,
                        "pos": "07",
                        "name": "Positive/negative aspect",
                        "kind": "text",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "0": [
                        [
                            "a",
                            "Map"
                        ]
                    ],
                    "1": [
                        [
                            "d",
                            "Atlas"
                        ],
                        [
                            "g",
                            "Diagram"
                        ],
                        [
                            "j",
                            "Map"
                        ],
                        [
                            "k",
                            "Profile"
                        ],
                        [
                            "q",
                            "Model"
                        ],
                        [
                            "r",
                            "Remote-sensing image"
                        ],
                        [
                            "s",
                            "Section"
                        ],
                        [
                            "u",
                            "Unspecified"
                        ],
                        [
                            "y",
                            "View"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "2": [
                        [
                            "#",
                            "Undefined"
                        ]
                    ],
                    "3": [
                        [
                            "a",
                            "One color"
                        ],
                        [
                            "c",
                            "Multicolored"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "4": [
                        [
                            "a",
                            "Paper"
                        ],
                        [
                            "b",
                            "Wood"
                        ],
                        [
                            "c",
                            "Stone"
                        ],
                        [
                            "d",
                            "Metal"
                        ],
                        [
                            "e",
                            "Synthetic"
                        ],
                        [
                            "f",
                            "Skin"
                        ],
                        [
                            "g",
                            "Textiles"
                        ],
                        [
                            "i",
                            "Plastic"
                        ],
                        [
                            "j",
                            "Glass"
                        ],
                        [
                            "l",
                            "Vinyl"
                        ],
                        [
                            "n",
                            "Vellum"
                        ],
                        [
                            "p",
                            "Plaster"
                        ],
                        [
                            "s",
                            "Non-flexible base photographic, positive"
                        ],
                        [
                            "r",
                            "Flexible base photographic, negative"
                        ],
                        [
                            "q",
                            "Flexible base photographic, positive"
                        ],
                        [
                            "t",
                            "Non-flexible base photographic, negative"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "v",
                            "Leather"
                        ],
                        [
                            "w",
                            "Parchment"
                        ],
                        [
                            "x",
                            "Not applicable"
                        ],
                        [
                            "y",
                            "Other photographic medium"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "5": [
                        [
                            "f",
                            "Facsimile"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "6": [
                        [
                            "a",
                            "Photocopy, blueline print"
                        ],
                        [
                            "b",
                            "Photocopy"
                        ],
                        [
                            "c",
                            "Photographic pre-production"
                        ],
                        [
                            "d",
                            "Film"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "7": [
                        [
                            "a",
                            "Positive"
                        ],
                        [
                            "b",
                            "Negative"
                        ],
                        [
                            "m",
                            "Mixed polarity"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ]
                }
            },
            "s": {
                "length": 11,
                "label": "Sound recording",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Category of material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Code in position 00; changes the 007 template."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Specific material designation",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 2,
                        "len": 1,
                        "pos": "02",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "fisico",
                        "hint": "Position undefined (# or space)."
                    },
                    {
                        "start": 3,
                        "len": 1,
                        "pos": "03",
                        "name": "Speed",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 4,
                        "len": 1,
                        "pos": "04",
                        "name": "Config. of playback channels",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 5,
                        "len": 1,
                        "pos": "05",
                        "name": "Groove width/groove pitch",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 6,
                        "len": 1,
                        "pos": "06",
                        "name": "Dimensions",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 7,
                        "len": 1,
                        "pos": "07",
                        "name": "Tape width",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 8,
                        "len": 1,
                        "pos": "08",
                        "name": "Tape configuration",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 9,
                        "len": 1,
                        "pos": "09",
                        "name": "Kind of disc, cylinder, tape",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 10,
                        "len": 1,
                        "pos": "10",
                        "name": "Kind of material",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 11,
                        "len": 1,
                        "pos": "11",
                        "name": "Kind of cutting",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 12,
                        "len": 1,
                        "pos": "12",
                        "name": "Special playback characteristics",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 13,
                        "len": 1,
                        "pos": "13",
                        "name": "Original capture and storage technique",
                        "kind": "text",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "0": [
                        [
                            "s",
                            "Sound recording"
                        ]
                    ],
                    "1": [
                        [
                            "b",
                            "Belt"
                        ],
                        [
                            "d",
                            "Sound disc"
                        ],
                        [
                            "e",
                            "Cylinder"
                        ],
                        [
                            "g",
                            "Sound cartridge"
                        ],
                        [
                            "i",
                            "Sound-track film"
                        ],
                        [
                            "q",
                            "Roll"
                        ],
                        [
                            "r",
                            "Remote"
                        ],
                        [
                            "s",
                            "Sound cassette"
                        ],
                        [
                            "t",
                            "Sound-tape reel"
                        ],
                        [
                            "u",
                            "Unspecified"
                        ],
                        [
                            "w",
                            "Wire recording"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "2": [
                        [
                            "#",
                            "Undefined"
                        ]
                    ],
                    "3": [
                        [
                            "a",
                            "16 rpm (discs)"
                        ],
                        [
                            "b",
                            "33 1/3 rpm (discs)"
                        ],
                        [
                            "c",
                            "45 rpm (discs)"
                        ],
                        [
                            "d",
                            "78 rpm (discs)"
                        ],
                        [
                            "e",
                            "8 rpm (discs)"
                        ],
                        [
                            "f",
                            "1.4 m. per second (discs)"
                        ],
                        [
                            "h",
                            "120 rpm (cylinders)"
                        ],
                        [
                            "i",
                            "160 rpm (cylinders)"
                        ],
                        [
                            "k",
                            "15/16 ips (tapes)"
                        ],
                        [
                            "l",
                            "1 7/8 ips (tapes)"
                        ],
                        [
                            "m",
                            "3 3/4 ips (tapes)"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "o",
                            "7 1/2 ips (tapes)"
                        ],
                        [
                            "p",
                            "15 ips (tapes)"
                        ],
                        [
                            "r",
                            "30 ips (tape)"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "4": [
                        [
                            "m",
                            "Monaural"
                        ],
                        [
                            "q",
                            "Quadraphonic, multichannel, or surround"
                        ],
                        [
                            "s",
                            "Stereophonic"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "5": [
                        [
                            "m",
                            "Microgroove/fine"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "s",
                            "Coarse/standard"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "6": [
                        [
                            "a",
                            "3 in. diameter"
                        ],
                        [
                            "b",
                            "5 in. diameter"
                        ],
                        [
                            "c",
                            "7 in. diameter"
                        ],
                        [
                            "d",
                            "10 in. diameter"
                        ],
                        [
                            "e",
                            "12 in. diameter"
                        ],
                        [
                            "f",
                            "16 in. diameter"
                        ],
                        [
                            "g",
                            "4 3/4 in. or 12 cm. diameter"
                        ],
                        [
                            "j",
                            "3 7/8 x 2 1/2 in."
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "o",
                            "5 1/4 x 3 7/8 in."
                        ],
                        [
                            "s",
                            "2 3/4 x 4 in."
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "7": [
                        [
                            "l",
                            "1/8 in."
                        ],
                        [
                            "m",
                            "1/4 in."
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "o",
                            "1/2 in."
                        ],
                        [
                            "p",
                            "1 in."
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "8": [
                        [
                            "a",
                            "Full (1) track"
                        ],
                        [
                            "b",
                            "Half (2) track"
                        ],
                        [
                            "c",
                            "Quarter (4) track"
                        ],
                        [
                            "d",
                            "Eight track"
                        ],
                        [
                            "e",
                            "Twelve track"
                        ],
                        [
                            "f",
                            "Sixteen track"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "9": [
                        [
                            "a",
                            "Master tape"
                        ],
                        [
                            "b",
                            "Tape duplication master"
                        ],
                        [
                            "d",
                            "Disc master (negative)"
                        ],
                        [
                            "i",
                            "Instantaneous (recorded on the spot)"
                        ],
                        [
                            "m",
                            "Mass-produced"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "r",
                            "Mother (positive)"
                        ],
                        [
                            "s",
                            "Stamper (negative)"
                        ],
                        [
                            "t",
                            "Copy de prueba"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "10": [
                        [
                            "a",
                            "Lacquer coating"
                        ],
                        [
                            "b",
                            "Cellulose nitrate"
                        ],
                        [
                            "c",
                            "Acetate tape with ferrous oxide"
                        ],
                        [
                            "g",
                            "Glass with lacquer"
                        ],
                        [
                            "i",
                            "Aluminum with lacquer"
                        ],
                        [
                            "l",
                            "Metal"
                        ],
                        [
                            "m",
                            "Plastic with metal"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "p",
                            "Plastic"
                        ],
                        [
                            "r",
                            "Paper with lacquer or ferrous oxide"
                        ],
                        [
                            "s",
                            "Shellac"
                        ],
                        [
                            "w",
                            "Wax"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "11": [
                        [
                            "h",
                            "Hill-and-dale cutting"
                        ],
                        [
                            "l",
                            "Lateral or combined cutting"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "12": [
                        [
                            "a",
                            "NAB standard"
                        ],
                        [
                            "b",
                            "CCIR standard"
                        ],
                        [
                            "c",
                            "Dolby-B encoded"
                        ],
                        [
                            "d",
                            "dbx encoded"
                        ],
                        [
                            "e",
                            "Digital recording"
                        ],
                        [
                            "f",
                            "Dolby-A encoded"
                        ],
                        [
                            "g",
                            "Dolby-C encoded"
                        ],
                        [
                            "h",
                            "CX encoded"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "13": [
                        [
                            "a",
                            "Acoustical capture, analog direct storage"
                        ],
                        [
                            "b",
                            "Electrical capture, analog direct storage"
                        ],
                        [
                            "d",
                            "Electrical capture, digital storage"
                        ],
                        [
                            "e",
                            "Electrical capture, analog electrical storage"
                        ],
                        [
                            "u",
                            "Unknown capture and storage"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ]
                }
            },
            "v": {
                "length": 7,
                "label": "Videorecording",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Category of material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Code in position 00; changes the 007 template."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Specific material designation",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 2,
                        "len": 1,
                        "pos": "02",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "fisico",
                        "hint": "Position undefined (# or space)."
                    },
                    {
                        "start": 3,
                        "len": 1,
                        "pos": "03",
                        "name": "Color",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 4,
                        "len": 1,
                        "pos": "04",
                        "name": "Videorecording format",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 5,
                        "len": 1,
                        "pos": "05",
                        "name": "Sound on medium or separate",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 6,
                        "len": 1,
                        "pos": "06",
                        "name": "Medium for sound",
                        "kind": "select",
                        "group": "fisico"
                    }
                ],
                "codeTables": {
                    "1": [
                        [
                            "c",
                            "Videocartridge"
                        ],
                        [
                            "d",
                            "Videodisc"
                        ],
                        [
                            "f",
                            "Videocassette"
                        ],
                        [
                            "r",
                            "Video reel"
                        ],
                        [
                            "u",
                            "Unspecified"
                        ],
                        [
                            "z",
                            "Other"
                        ]
                    ],
                    "3": [
                        [
                            "a",
                            "Monochrome"
                        ],
                        [
                            "b",
                            "Black and white"
                        ],
                        [
                            "c",
                            "Polychrome"
                        ],
                        [
                            "m",
                            "Mixed"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ]
                    ],
                    "4": [
                        [
                            "a",
                            "Beta"
                        ],
                        [
                            "b",
                            "VHS"
                        ],
                        [
                            "c",
                            "U-matic"
                        ],
                        [
                            "d",
                            "EIAJ"
                        ],
                        [
                            "e",
                            "Type C"
                        ],
                        [
                            "f",
                            "Quadruplex"
                        ],
                        [
                            "g",
                            "Laserdisc"
                        ],
                        [
                            "h",
                            "Videodisco CED"
                        ],
                        [
                            "i",
                            "Betacam"
                        ],
                        [
                            "j",
                            "Betacam SP"
                        ],
                        [
                            "k",
                            "Super-VHS"
                        ],
                        [
                            "m",
                            "M-II"
                        ],
                        [
                            "o",
                            "D-2"
                        ],
                        [
                            "p",
                            "8mm"
                        ],
                        [
                            "q",
                            "Hi-8 mm"
                        ],
                        [
                            "s",
                            "Blu-ray"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "v",
                            "DVD"
                        ],
                        [
                            "z",
                            "Other"
                        ]
                    ],
                    "5": [
                        [
                            "#",
                            "No sonido (muda)"
                        ],
                        [
                            "a",
                            "Sound on medium"
                        ],
                        [
                            "b",
                            "Sound separate from medium"
                        ],
                        [
                            "u",
                            "Unknown"
                        ]
                    ],
                    "6": [
                        [
                            "#",
                            "No sound"
                        ],
                        [
                            "a",
                            "Optical sound track on motion picture film"
                        ],
                        [
                            "b",
                            "Magnetic sound track on motion picture film"
                        ],
                        [
                            "c",
                            "Magnetic audio tape in cartridge"
                        ],
                        [
                            "u",
                            "Unknown"
                        ]
                    ]
                }
            },
            "c": {
                "length": 14,
                "label": "Electronic resource",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Category of material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Code in position 00; changes the 007 template."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Specific material designation",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 2,
                        "len": 1,
                        "pos": "02",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "fisico",
                        "hint": "Position undefined (# or space)."
                    },
                    {
                        "start": 3,
                        "len": 1,
                        "pos": "03",
                        "name": "Color",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 4,
                        "len": 1,
                        "pos": "04",
                        "name": "Dimensions",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 5,
                        "len": 1,
                        "pos": "05",
                        "name": "Sound",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 6,
                        "len": 3,
                        "pos": "06-08",
                        "name": "Image bit depth",
                        "kind": "select3",
                        "group": "fisico"
                    },
                    {
                        "start": 9,
                        "len": 1,
                        "pos": "09",
                        "name": "File formats",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 10,
                        "len": 1,
                        "pos": "10",
                        "name": "Quality assurance targets",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 11,
                        "len": 1,
                        "pos": "11",
                        "name": "Antecedent/source",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 12,
                        "len": 1,
                        "pos": "12",
                        "name": "Level of compression",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 13,
                        "len": 1,
                        "pos": "13",
                        "name": "Reformatting quality",
                        "kind": "select",
                        "group": "fisico"
                    }
                ],
                "codeTables": {
                    "0": [
                        [
                            "c",
                            "Electronic resource"
                        ]
                    ],
                    "1": [
                        [
                            "a",
                            "Tape cartridge"
                        ],
                        [
                            "b",
                            "Chip cartridge"
                        ],
                        [
                            "c",
                            "Computer optical disc cartridge"
                        ],
                        [
                            "d",
                            "Computer disc, type unspecified"
                        ],
                        [
                            "e",
                            "Computer disc cartridge, type unspecified"
                        ],
                        [
                            "f",
                            "Tape cassette"
                        ],
                        [
                            "h",
                            "Tape reel"
                        ],
                        [
                            "j",
                            "Magnetic disk"
                        ],
                        [
                            "k",
                            "Computer card"
                        ],
                        [
                            "m",
                            "Magneto-optical disc"
                        ],
                        [
                            "o",
                            "Optical disc"
                        ],
                        [
                            "r",
                            "Remote"
                        ],
                        [
                            "s",
                            "Standalone device"
                        ],
                        [
                            "u",
                            "Unspecified"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "2": [
                        [
                            "#",
                            "Undefined"
                        ]
                    ],
                    "3": [
                        [
                            "a",
                            "One color"
                        ],
                        [
                            "b",
                            "Black-and-white"
                        ],
                        [
                            "c",
                            "Multicolored"
                        ],
                        [
                            "g",
                            "Gray scale"
                        ],
                        [
                            "m",
                            "Mixed"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "4": [
                        [
                            "a",
                            "3 1/2 in."
                        ],
                        [
                            "e",
                            "12 in."
                        ],
                        [
                            "g",
                            "4 3/4 in. or 12 cm."
                        ],
                        [
                            "i",
                            "1 1/8 x 2 3/8 in."
                        ],
                        [
                            "j",
                            "3 7/8 x 2 1/2 in."
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "o",
                            "5 1/4 in."
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "v",
                            "8 in."
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "5": [
                        [
                            "#",
                            "No sound (silent)"
                        ],
                        [
                            "a",
                            "Sound"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "6": [
                        [
                            "001-999",
                            "Exact bit depth"
                        ],
                        [
                            "mmm",
                            "Multiple"
                        ],
                        [
                            "nnn",
                            "Not applicable"
                        ],
                        [
                            "---",
                            "Unknown"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "9": [
                        [
                            "a",
                            "One file format"
                        ],
                        [
                            "m",
                            "Multiple file formats"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "10": [
                        [
                            "a",
                            "Absent"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "p",
                            "Present"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "11": [
                        [
                            "a",
                            "File reproduced from original"
                        ],
                        [
                            "b",
                            "File reproduced from microform"
                        ],
                        [
                            "c",
                            "File reproduced from an electronic resource"
                        ],
                        [
                            "d",
                            "File reproduced from an intermediate (not microform)"
                        ],
                        [
                            "m",
                            "Mixed"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "12": [
                        [
                            "a",
                            "Uncompressed"
                        ],
                        [
                            "b",
                            "Lossless"
                        ],
                        [
                            "d",
                            "Lossy"
                        ],
                        [
                            "m",
                            "Mixed"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "13": [
                        [
                            "a",
                            "Access"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "p",
                            "Preservation"
                        ],
                        [
                            "r",
                            "Replacement"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ]
                }
            },
            "d": {
                "length": 6,
                "label": "Globe",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Category of material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Code in position 00; changes the 007 template."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Specific material designation",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 2,
                        "len": 1,
                        "pos": "02",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "fisico",
                        "hint": "Position undefined (# or space)."
                    },
                    {
                        "start": 3,
                        "len": 1,
                        "pos": "03",
                        "name": "Color",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 4,
                        "len": 1,
                        "pos": "04",
                        "name": "Physical medium",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 5,
                        "len": 1,
                        "pos": "05",
                        "name": "Type of reproduction",
                        "kind": "select",
                        "group": "fisico"
                    }
                ],
                "codeTables": {
                    "0": [
                        [
                            "d",
                            "Globe"
                        ]
                    ],
                    "1": [
                        [
                            "a",
                            "Celestial globe"
                        ],
                        [
                            "b",
                            "Planetary or lunar globe"
                        ],
                        [
                            "c",
                            "Terrestrial globe"
                        ],
                        [
                            "e",
                            "Earth moon globe"
                        ],
                        [
                            "u",
                            "Unspecified"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "2": [
                        [
                            "#",
                            "Undefined"
                        ]
                    ],
                    "3": [
                        [
                            "a",
                            "One color"
                        ],
                        [
                            "c",
                            "Multicolored"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "4": [
                        [
                            "a",
                            "Paper"
                        ],
                        [
                            "b",
                            "Wood"
                        ],
                        [
                            "c",
                            "Stone"
                        ],
                        [
                            "d",
                            "Metal"
                        ],
                        [
                            "e",
                            "Synthetic"
                        ],
                        [
                            "f",
                            "Skin"
                        ],
                        [
                            "g",
                            "Textile"
                        ],
                        [
                            "i",
                            "Plastic"
                        ],
                        [
                            "l",
                            "Vinyl"
                        ],
                        [
                            "n",
                            "Vellum"
                        ],
                        [
                            "p",
                            "Plaster"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "v",
                            "Leather"
                        ],
                        [
                            "w",
                            "Parchment"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "5": [
                        [
                            "f",
                            "Facsimile"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ]
                }
            },
            "f": {
                "length": 10,
                "label": "Tactile material",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Category of material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Code in position 00; changes the 007 template."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Specific material designation",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 2,
                        "len": 1,
                        "pos": "02",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "fisico",
                        "hint": "Position undefined (# or space)."
                    },
                    {
                        "start": 3,
                        "len": 2,
                        "pos": "03-04",
                        "name": "Clase de escritura braille",
                        "kind": "select3",
                        "group": "fisico"
                    },
                    {
                        "start": 5,
                        "len": 1,
                        "pos": "05",
                        "name": "Level of contraction",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 6,
                        "len": 3,
                        "pos": "06-08",
                        "name": "Form of braille music",
                        "kind": "select3",
                        "group": "fisico"
                    },
                    {
                        "start": 9,
                        "len": 1,
                        "pos": "09",
                        "name": "Special physical characteristics",
                        "kind": "select",
                        "group": "fisico"
                    }
                ],
                "codeTables": {
                    "0": [
                        [
                            "f",
                            "Tactile material"
                        ]
                    ],
                    "1": [
                        [
                            "a",
                            "Moon"
                        ],
                        [
                            "b",
                            "Braille"
                        ],
                        [
                            "c",
                            "Combination"
                        ],
                        [
                            "d",
                            "Tactile, with no writing system"
                        ],
                        [
                            "u",
                            "Unspecified"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "2": [
                        [
                            "#",
                            "Undefined"
                        ]
                    ],
                    "3": [
                        [
                            "#",
                            "No specified class of braille writing"
                        ],
                        [
                            "a",
                            "Literary braille"
                        ],
                        [
                            "b",
                            "Format code braille"
                        ],
                        [
                            "c",
                            "Mathematics and scientific braille"
                        ],
                        [
                            "d",
                            "Computer braille"
                        ],
                        [
                            "e",
                            "Music braille"
                        ],
                        [
                            "m",
                            "Multiple braille types"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "5": [
                        [
                            "a",
                            "Uncontracted"
                        ],
                        [
                            "b",
                            "Contracted"
                        ],
                        [
                            "m",
                            "Combination"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "6": [
                        [
                            "#",
                            "No specified braille music format"
                        ],
                        [
                            "a",
                            "Bar over bar"
                        ],
                        [
                            "b",
                            "Bar by bar"
                        ],
                        [
                            "c",
                            "Line over line"
                        ],
                        [
                            "d",
                            "Paragraph"
                        ],
                        [
                            "e",
                            "Single line"
                        ],
                        [
                            "f",
                            "Section by section"
                        ],
                        [
                            "g",
                            "Line by line"
                        ],
                        [
                            "h",
                            "Open score"
                        ],
                        [
                            "i",
                            "Spanner short form scoring"
                        ],
                        [
                            "j",
                            "Short form scoring"
                        ],
                        [
                            "k",
                            "Outline"
                        ],
                        [
                            "l",
                            "Vertical score"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "9": [
                        [
                            "a",
                            "Print/braille"
                        ],
                        [
                            "b",
                            "Jumbo or enlarged braille"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ]
                }
            },
            "g": {
                "length": 6,
                "label": "Projected graphic",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Category of material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Code in position 00; changes the 007 template."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Specific material designation",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 2,
                        "len": 1,
                        "pos": "02",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "fisico",
                        "hint": "Position undefined (# or space)."
                    },
                    {
                        "start": 3,
                        "len": 1,
                        "pos": "03",
                        "name": "Color",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 4,
                        "len": 1,
                        "pos": "04",
                        "name": "Base of emulsion",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 5,
                        "len": 1,
                        "pos": "05",
                        "name": "Sound on medium or separate",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 6,
                        "len": 1,
                        "pos": "06",
                        "name": "Medio for Sonido",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 7,
                        "len": 1,
                        "pos": "07",
                        "name": "Dimensiones",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 8,
                        "len": 1,
                        "pos": "08",
                        "name": "Secundaria support material",
                        "kind": "text",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "0": [
                        [
                            "g",
                            "Projected graphic"
                        ]
                    ],
                    "1": [
                        [
                            "c",
                            "Filmstrip cartridge"
                        ],
                        [
                            "d",
                            "Filmslip"
                        ],
                        [
                            "f",
                            "Filmstrip, type unspecified"
                        ],
                        [
                            "o",
                            "Filmstrip roll"
                        ],
                        [
                            "s",
                            "Slide"
                        ],
                        [
                            "t",
                            "Transparency"
                        ],
                        [
                            "u",
                            "Unspecified"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "2": [
                        [
                            "#",
                            "Undefined"
                        ]
                    ],
                    "3": [
                        [
                            "a",
                            "One color"
                        ],
                        [
                            "b",
                            "Black-and-white"
                        ],
                        [
                            "c",
                            "Multicolored"
                        ],
                        [
                            "h",
                            "Hand colored"
                        ],
                        [
                            "m",
                            "Mixed"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "4": [
                        [
                            "d",
                            "Glass"
                        ],
                        [
                            "e",
                            "Synthetic"
                        ],
                        [
                            "j",
                            "Safety film"
                        ],
                        [
                            "k",
                            "Film base, other than safety film"
                        ],
                        [
                            "m",
                            "Mixed collection"
                        ],
                        [
                            "o",
                            "Paper"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "5": [
                        [
                            "#",
                            "No sound (silent)"
                        ],
                        [
                            "a",
                            "Sound on medium"
                        ],
                        [
                            "b",
                            "Sound separate from medium"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "6": [
                        [
                            "#",
                            "No sound (silent)"
                        ],
                        [
                            "a",
                            "Optical sound track on motion picture film"
                        ],
                        [
                            "b",
                            "Magnetic sound track on motion picture film"
                        ],
                        [
                            "c",
                            "Magnetic audio tape in cartridge"
                        ],
                        [
                            "d",
                            "Sound disc"
                        ],
                        [
                            "e",
                            "Magnetic audio tape on reel"
                        ],
                        [
                            "f",
                            "Magnetic audio tape in cassette"
                        ],
                        [
                            "g",
                            "Optical and magnetic sound track on motion picture film"
                        ],
                        [
                            "h",
                            "Videotape"
                        ],
                        [
                            "i",
                            "Videodisc"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "7": [
                        [
                            "a",
                            "Standard 8 mm. film width"
                        ],
                        [
                            "b",
                            "Super 8 mm./single 8 mm. film width"
                        ],
                        [
                            "c",
                            "9.5 mm. film width"
                        ],
                        [
                            "d",
                            "16 mm. film width"
                        ],
                        [
                            "e",
                            "28 mm. film width"
                        ],
                        [
                            "f",
                            "35 mm. film width"
                        ],
                        [
                            "g",
                            "70 mm. film width"
                        ],
                        [
                            "j",
                            "2x2 in. or 5x5 cm. slide"
                        ],
                        [
                            "k",
                            "2 1/4 x 2 1/4 in. or 6x6 cm. slide"
                        ],
                        [
                            "s",
                            "4x5 in. or 10x13 cm. transparency"
                        ],
                        [
                            "t",
                            "5x7 in. or 13x18 cm. transparency"
                        ],
                        [
                            "v",
                            "8x10 in. or 21x26 cm. transparency"
                        ],
                        [
                            "w",
                            "9x9 in. or 23x23 cm. transparency"
                        ],
                        [
                            "x",
                            "10x10 in. or 26x26 cm. transparency"
                        ],
                        [
                            "y",
                            "7x7 in. or 18x18 cm. transparency"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "8": [
                        [
                            "#",
                            "No secondary support"
                        ],
                        [
                            "c",
                            "Cardboard"
                        ],
                        [
                            "d",
                            "Glass"
                        ],
                        [
                            "e",
                            "Synthetic"
                        ],
                        [
                            "h",
                            "Metal"
                        ],
                        [
                            "j",
                            "Metal and glass"
                        ],
                        [
                            "k",
                            "Synthetic and glass"
                        ],
                        [
                            "m",
                            "Mixed collection"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ]
                }
            },
            "h": {
                "length": 6,
                "label": "Microform",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Category of material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Code in position 00; changes the 007 template."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Specific material designation",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 2,
                        "len": 1,
                        "pos": "02",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "fisico",
                        "hint": "Position undefined (# or space)."
                    },
                    {
                        "start": 3,
                        "len": 1,
                        "pos": "03",
                        "name": "Positive/negative aspect",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 4,
                        "len": 1,
                        "pos": "04",
                        "name": "Dimensions",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 5,
                        "len": 1,
                        "pos": "05",
                        "name": "Reduction ratio range",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 6,
                        "len": 3,
                        "pos": "06-08",
                        "name": "Reduction ratio",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 9,
                        "len": 1,
                        "pos": "09",
                        "name": "Color",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 10,
                        "len": 1,
                        "pos": "10",
                        "name": "Emulsion on film",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 11,
                        "len": 1,
                        "pos": "11",
                        "name": "Generation",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 12,
                        "len": 1,
                        "pos": "12",
                        "name": "Base of film",
                        "kind": "text",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "0": [
                        [
                            "h",
                            "Microform"
                        ]
                    ],
                    "1": [
                        [
                            "a",
                            "Aperture card"
                        ],
                        [
                            "b",
                            "Microfilm cartridge"
                        ],
                        [
                            "c",
                            "Microfilm cassette"
                        ],
                        [
                            "d",
                            "Microfilm reel"
                        ],
                        [
                            "e",
                            "Microfiche"
                        ],
                        [
                            "f",
                            "Microfiche cassette"
                        ],
                        [
                            "g",
                            "Microopaque"
                        ],
                        [
                            "h",
                            "Microfilm slip"
                        ],
                        [
                            "j",
                            "Microfilm roll"
                        ],
                        [
                            "u",
                            "Unspecified"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "2": [
                        [
                            "#",
                            "Undefined"
                        ]
                    ],
                    "3": [
                        [
                            "a",
                            "Positive"
                        ],
                        [
                            "b",
                            "Negative"
                        ],
                        [
                            "m",
                            "Mixed polarity"
                        ],
                        [
                            "n",
                            "Unknown"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "4": [
                        [
                            "a",
                            "8 mm."
                        ],
                        [
                            "d",
                            "16 mm."
                        ],
                        [
                            "f",
                            "35 mm."
                        ],
                        [
                            "g",
                            "70 mm."
                        ],
                        [
                            "h",
                            "105 mm."
                        ],
                        [
                            "l",
                            "3x5 in. or 8x13 cm."
                        ],
                        [
                            "m",
                            "4x6 in. or 11x15 cm."
                        ],
                        [
                            "o",
                            "6x9 in. or 16x23 cm."
                        ],
                        [
                            "p",
                            "3 1/4 x 7 3/8 in. or 9x19 cm."
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "5": [
                        [
                            "a",
                            "Low reduction ratio"
                        ],
                        [
                            "b",
                            "Normal reduction"
                        ],
                        [
                            "c",
                            "High reduction"
                        ],
                        [
                            "d",
                            "Very high reduction"
                        ],
                        [
                            "e",
                            "Ultra high reduction"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "v",
                            "Reduction rate varies"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "9": [
                        [
                            "b",
                            "Black-and-white"
                        ],
                        [
                            "c",
                            "Multicolored"
                        ],
                        [
                            "m",
                            "Mixed"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "10": [
                        [
                            "a",
                            "Silver halide"
                        ],
                        [
                            "b",
                            "Diazo"
                        ],
                        [
                            "c",
                            "Vesicular"
                        ],
                        [
                            "m",
                            "Mixed emulsion"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "11": [
                        [
                            "a",
                            "First generation (master)"
                        ],
                        [
                            "b",
                            "Printing master"
                        ],
                        [
                            "c",
                            "Service copy"
                        ],
                        [
                            "m",
                            "Mixed generation"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "12": [
                        [
                            "a",
                            "Safety base, undetermined"
                        ],
                        [
                            "c",
                            "Safety base, acetate undetermined"
                        ],
                        [
                            "d",
                            "Safety base, diacetate"
                        ],
                        [
                            "i",
                            "Nitrate base"
                        ],
                        [
                            "m",
                            "Mixed base (nitrate and safety)"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "p",
                            "Safety base, polyester"
                        ],
                        [
                            "r",
                            "Safety base, mixed"
                        ],
                        [
                            "t",
                            "Safety base, triacetate"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ]
                }
            },
            "k": {
                "length": 4,
                "label": "Nonprojected graphic",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Category of material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Code in position 00; changes the 007 template."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Specific material designation",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 2,
                        "len": 1,
                        "pos": "02",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "fisico",
                        "hint": "Position undefined (# or space)."
                    },
                    {
                        "start": 3,
                        "len": 1,
                        "pos": "03",
                        "name": "Color",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 4,
                        "len": 1,
                        "pos": "04",
                        "name": "Primaria support material",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 5,
                        "len": 1,
                        "pos": "05",
                        "name": "Secundaria support material",
                        "kind": "text",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "0": [
                        [
                            "k",
                            "Nonprojected graphic"
                        ]
                    ],
                    "1": [
                        [
                            "a",
                            "Activity card"
                        ],
                        [
                            "c",
                            "Collage"
                        ],
                        [
                            "d",
                            "Drawing"
                        ],
                        [
                            "e",
                            "Painting"
                        ],
                        [
                            "f",
                            "Photomechanical print"
                        ],
                        [
                            "g",
                            "Photonegative"
                        ],
                        [
                            "h",
                            "Photoprint"
                        ],
                        [
                            "i",
                            "Picture"
                        ],
                        [
                            "j",
                            "Print"
                        ],
                        [
                            "k",
                            "Poster"
                        ],
                        [
                            "l",
                            "Technical drawing"
                        ],
                        [
                            "n",
                            "Chart"
                        ],
                        [
                            "o",
                            "Flash card"
                        ],
                        [
                            "p",
                            "Postcard"
                        ],
                        [
                            "q",
                            "Icon"
                        ],
                        [
                            "r",
                            "Radiograph"
                        ],
                        [
                            "s",
                            "Study print"
                        ],
                        [
                            "u",
                            "Unspecified"
                        ],
                        [
                            "v",
                            "Photograph, type unspecified"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "2": [
                        [
                            "#",
                            "Undefined"
                        ]
                    ],
                    "3": [
                        [
                            "a",
                            "One color"
                        ],
                        [
                            "b",
                            "Black-and-white"
                        ],
                        [
                            "c",
                            "Multicolored"
                        ],
                        [
                            "h",
                            "Hand colored"
                        ],
                        [
                            "m",
                            "Mixed"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "4": [
                        [
                            "a",
                            "Canvas"
                        ],
                        [
                            "b",
                            "Bristol board"
                        ],
                        [
                            "c",
                            "Cardboard/illustration board"
                        ],
                        [
                            "d",
                            "Glass"
                        ],
                        [
                            "e",
                            "Synthetic"
                        ],
                        [
                            "f",
                            "Skin"
                        ],
                        [
                            "g",
                            "Textile"
                        ],
                        [
                            "h",
                            "Metal"
                        ],
                        [
                            "i",
                            "Plastic"
                        ],
                        [
                            "l",
                            "Vinyl"
                        ],
                        [
                            "m",
                            "Mixed collection"
                        ],
                        [
                            "n",
                            "Vellum"
                        ],
                        [
                            "o",
                            "Paper"
                        ],
                        [
                            "p",
                            "Plaster"
                        ],
                        [
                            "q",
                            "Hardboard"
                        ],
                        [
                            "r",
                            "Porcelain"
                        ],
                        [
                            "s",
                            "Stone"
                        ],
                        [
                            "t",
                            "Wood"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "v",
                            "Leather"
                        ],
                        [
                            "w",
                            "Parchment"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "5": [
                        [
                            "#",
                            "No secondary support"
                        ],
                        [
                            "a",
                            "Canvas"
                        ],
                        [
                            "b",
                            "Bristol board"
                        ],
                        [
                            "c",
                            "Cardboard/illustration board"
                        ],
                        [
                            "d",
                            "Glass"
                        ],
                        [
                            "e",
                            "Synthetic"
                        ],
                        [
                            "f",
                            "Skin"
                        ],
                        [
                            "g",
                            "Textile"
                        ],
                        [
                            "h",
                            "Metal"
                        ],
                        [
                            "i",
                            "Plastic"
                        ],
                        [
                            "l",
                            "Vinyl"
                        ],
                        [
                            "m",
                            "Mixed collection"
                        ],
                        [
                            "n",
                            "Vellum"
                        ],
                        [
                            "o",
                            "Paper"
                        ],
                        [
                            "p",
                            "Plaster"
                        ],
                        [
                            "q",
                            "Hardboard"
                        ],
                        [
                            "r",
                            "Porcelain"
                        ],
                        [
                            "s",
                            "Stone"
                        ],
                        [
                            "t",
                            "Wood"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "v",
                            "Leather"
                        ],
                        [
                            "w",
                            "Parchment"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ]
                }
            },
            "m": {
                "length": 7,
                "label": "Motion picture",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Category of material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Code in position 00; changes the 007 template."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Specific material designation",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 2,
                        "len": 1,
                        "pos": "02",
                        "name": "Undefined",
                        "kind": "reserved",
                        "group": "fisico",
                        "hint": "Position undefined (# or space)."
                    },
                    {
                        "start": 3,
                        "len": 1,
                        "pos": "03",
                        "name": "Color",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 4,
                        "len": 1,
                        "pos": "04",
                        "name": "Motion picture pres. format",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 5,
                        "len": 1,
                        "pos": "05",
                        "name": "Sound on medium or separate",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 6,
                        "len": 1,
                        "pos": "06",
                        "name": "Medium for sound",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 7,
                        "len": 1,
                        "pos": "07",
                        "name": "Dimensiones",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 8,
                        "len": 1,
                        "pos": "08",
                        "name": "Configuration of playback channels",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 9,
                        "len": 1,
                        "pos": "09",
                        "name": "Production elements",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 10,
                        "len": 1,
                        "pos": "10",
                        "name": "Positive/negative aspect",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 11,
                        "len": 1,
                        "pos": "11",
                        "name": "Generation",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 12,
                        "len": 1,
                        "pos": "12",
                        "name": "Base of film",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 13,
                        "len": 1,
                        "pos": "13",
                        "name": "Refined categories of color",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 14,
                        "len": 1,
                        "pos": "14",
                        "name": "Kind of color stock or print",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 15,
                        "len": 1,
                        "pos": "15",
                        "name": "Deterioration stage",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 16,
                        "len": 1,
                        "pos": "16",
                        "name": "Completeness",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 17,
                        "len": 6,
                        "pos": "17-22",
                        "name": "Film inspection Fecha",
                        "kind": "text",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "0": [
                        [
                            "m",
                            "Motion picture"
                        ]
                    ],
                    "1": [
                        [
                            "c",
                            "Film cartridge"
                        ],
                        [
                            "f",
                            "Film cassette"
                        ],
                        [
                            "o",
                            "Film roll"
                        ],
                        [
                            "r",
                            "Film reel"
                        ],
                        [
                            "u",
                            "Unspecified"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "2": [
                        [
                            "#",
                            "Undefined"
                        ]
                    ],
                    "3": [
                        [
                            "b",
                            "Black-and-white"
                        ],
                        [
                            "c",
                            "Multicolored"
                        ],
                        [
                            "h",
                            "Hand colored"
                        ],
                        [
                            "m",
                            "Mixed"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "4": [
                        [
                            "a",
                            "Standard sound aperture (reduced frame)"
                        ],
                        [
                            "b",
                            "Nonanamorphic (wide-screen)"
                        ],
                        [
                            "c",
                            "3D"
                        ],
                        [
                            "d",
                            "Anamorphic (wide-screen)"
                        ],
                        [
                            "e",
                            "Other wide-screen format"
                        ],
                        [
                            "f",
                            "Standard silent aperture (full frame)"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "5": [
                        [
                            "#",
                            "No sound (silent)"
                        ],
                        [
                            "a",
                            "Sound on medium"
                        ],
                        [
                            "b",
                            "Sound separate from medium"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "6": [
                        [
                            "#",
                            "No sound (silent)"
                        ],
                        [
                            "a",
                            "Optical sound track on motion picture film"
                        ],
                        [
                            "b",
                            "Magnetic sound track on motion picture film"
                        ],
                        [
                            "c",
                            "Magnetic audio tape in cartridge"
                        ],
                        [
                            "d",
                            "Sound disc"
                        ],
                        [
                            "e",
                            "Magnetic audio tape on reel"
                        ],
                        [
                            "f",
                            "Magnetic audio tape in cassette"
                        ],
                        [
                            "g",
                            "Optical and magnetic sound track on motion picture film"
                        ],
                        [
                            "h",
                            "Videotape"
                        ],
                        [
                            "i",
                            "Videodisc"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "7": [
                        [
                            "a",
                            "Standard 8 mm."
                        ],
                        [
                            "b",
                            "Super 8 mm./single 8 mm."
                        ],
                        [
                            "c",
                            "9.5 mm."
                        ],
                        [
                            "d",
                            "16 mm."
                        ],
                        [
                            "e",
                            "28 mm."
                        ],
                        [
                            "f",
                            "35 mm."
                        ],
                        [
                            "g",
                            "70 mm."
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "8": [
                        [
                            "k",
                            "Mixed"
                        ],
                        [
                            "m",
                            "Monaural"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "q",
                            "Quadraphonic, multichannel, or surround"
                        ],
                        [
                            "s",
                            "Stereophonic"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "9": [
                        [
                            "a",
                            "Workprint"
                        ],
                        [
                            "b",
                            "Trims"
                        ],
                        [
                            "c",
                            "Outtakes"
                        ],
                        [
                            "d",
                            "Rushes"
                        ],
                        [
                            "e",
                            "Mixing tracks"
                        ],
                        [
                            "f",
                            "Title bands/inter-title rolls"
                        ],
                        [
                            "g",
                            "Production rolls"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "10": [
                        [
                            "a",
                            "Positive"
                        ],
                        [
                            "b",
                            "Negative"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "11": [
                        [
                            "d",
                            "Duplicate"
                        ],
                        [
                            "e",
                            "Master"
                        ],
                        [
                            "o",
                            "Original"
                        ],
                        [
                            "r",
                            "Reference print/viewing copy"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "12": [
                        [
                            "a",
                            "Safety base, undetermined"
                        ],
                        [
                            "c",
                            "Safety base, acetate undetermined"
                        ],
                        [
                            "d",
                            "Safety base, diacetate"
                        ],
                        [
                            "i",
                            "Nitrate base"
                        ],
                        [
                            "m",
                            "Mixed base (nitrate and safety)"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "p",
                            "Safety base, polyester"
                        ],
                        [
                            "r",
                            "Safety base, mixed"
                        ],
                        [
                            "t",
                            "Safety base, triacetate"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "13": [
                        [
                            "a",
                            "3 layer color"
                        ],
                        [
                            "b",
                            "2 color, single strip"
                        ],
                        [
                            "c",
                            "Undetermined 2 color"
                        ],
                        [
                            "d",
                            "Undetermined 3 color"
                        ],
                        [
                            "e",
                            "3 strip color"
                        ],
                        [
                            "f",
                            "2 strip color"
                        ],
                        [
                            "g",
                            "Red strip"
                        ],
                        [
                            "h",
                            "Blue or green strip"
                        ],
                        [
                            "i",
                            "Cyan strip"
                        ],
                        [
                            "j",
                            "Magenta strip"
                        ],
                        [
                            "k",
                            "Yellow strip"
                        ],
                        [
                            "l",
                            "S E N 2"
                        ],
                        [
                            "m",
                            "S E N 3"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "p",
                            "Sepia tone"
                        ],
                        [
                            "q",
                            "Other tone"
                        ],
                        [
                            "r",
                            "Tint"
                        ],
                        [
                            "s",
                            "Tinted and toned"
                        ],
                        [
                            "t",
                            "Stencil color"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "v",
                            "Hand colored"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "14": [
                        [
                            "a",
                            "Imbibition dye transfer prints"
                        ],
                        [
                            "b",
                            "Three-layer stock"
                        ],
                        [
                            "c",
                            "Three layer stock, low fade"
                        ],
                        [
                            "d",
                            "Duplitized stock"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "15": [
                        [
                            "a",
                            "None apparent"
                        ],
                        [
                            "b",
                            "Nitrate: suspicious odor"
                        ],
                        [
                            "c",
                            "Nitrate: pungent odor"
                        ],
                        [
                            "d",
                            "Nitrate: brownish, discoloration, fading, dusty"
                        ],
                        [
                            "e",
                            "Nitrate: sticky"
                        ],
                        [
                            "f",
                            "Nitrate: frothy, bubbles, blisters"
                        ],
                        [
                            "g",
                            "Nitrate: congealed"
                        ],
                        [
                            "h",
                            "Nitrate: powder"
                        ],
                        [
                            "k",
                            "Non-nitrate: detectable deterioration"
                        ],
                        [
                            "l",
                            "Non-nitrate: advanced deterioration"
                        ],
                        [
                            "m",
                            "Non-nitrate: disaster"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "16": [
                        [
                            "c",
                            "Complete"
                        ],
                        [
                            "i",
                            "Incomplete"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ]
                }
            },
            "r": {
                "length": 1,
                "label": "r",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Category of material",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Specific material designation",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 2,
                        "len": 1,
                        "pos": "02",
                        "name": "Indefinido",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 3,
                        "len": 1,
                        "pos": "03",
                        "name": "Altitude of sensor",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 4,
                        "len": 1,
                        "pos": "04",
                        "name": "Attitude of sensor",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 5,
                        "len": 1,
                        "pos": "05",
                        "name": "Cobertura nubosa",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 6,
                        "len": 1,
                        "pos": "06",
                        "name": "Platform construction Tipo",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 7,
                        "len": 1,
                        "pos": "07",
                        "name": "Platform use category",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 8,
                        "len": 1,
                        "pos": "08",
                        "name": "Sensor Tipo",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 9,
                        "len": 2,
                        "pos": "09-10",
                        "name": "Datos Tipo",
                        "kind": "text",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "0": [
                        [
                            "r",
                            "Remote-sensing image"
                        ]
                    ],
                    "1": [
                        [
                            "u",
                            "Unspecified"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "2": [
                        [
                            "#",
                            "Undefined"
                        ]
                    ],
                    "3": [
                        [
                            "a",
                            "Surface"
                        ],
                        [
                            "b",
                            "Airborne"
                        ],
                        [
                            "c",
                            "Spaceborne"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "4": [
                        [
                            "a",
                            "Low oblique"
                        ],
                        [
                            "b",
                            "High oblique"
                        ],
                        [
                            "c",
                            "Vertical"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "5": [
                        [
                            "0",
                            "0-9%"
                        ],
                        [
                            "1",
                            "10-19%"
                        ],
                        [
                            "2",
                            "20-29%"
                        ],
                        [
                            "3",
                            "30-39%"
                        ],
                        [
                            "4",
                            "40-49%"
                        ],
                        [
                            "5",
                            "50-59%"
                        ],
                        [
                            "6",
                            "60-69%"
                        ],
                        [
                            "7",
                            "70-79%"
                        ],
                        [
                            "8",
                            "80-89%"
                        ],
                        [
                            "9",
                            "90-100%"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "6": [
                        [
                            "a",
                            "Balloon"
                        ],
                        [
                            "b",
                            "Aircraft--low altitude"
                        ],
                        [
                            "c",
                            "Aircraft--medium altitude"
                        ],
                        [
                            "d",
                            "Aircraft--high altitude"
                        ],
                        [
                            "e",
                            "Manned spacecraft"
                        ],
                        [
                            "f",
                            "Unmanned spacecraft"
                        ],
                        [
                            "g",
                            "Land-based remote-sensing device"
                        ],
                        [
                            "h",
                            "Water surface-based remote-sensing device"
                        ],
                        [
                            "i",
                            "Submersible remote-sensing device"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "7": [
                        [
                            "a",
                            "Meteorological"
                        ],
                        [
                            "b",
                            "Surface observing"
                        ],
                        [
                            "c",
                            "Space observing"
                        ],
                        [
                            "m",
                            "Mixed uses"
                        ],
                        [
                            "n",
                            "Not applicable"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "8": [
                        [
                            "a",
                            "Active"
                        ],
                        [
                            "b",
                            "Passive"
                        ],
                        [
                            "u",
                            "Unknown"
                        ],
                        [
                            "z",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ],
                    "9": [
                        [
                            "aa",
                            "Visible light"
                        ],
                        [
                            "da",
                            "Near infrared"
                        ],
                        [
                            "db",
                            "Middle infrared"
                        ],
                        [
                            "dc",
                            "Far infrared"
                        ],
                        [
                            "dd",
                            "Thermal infrared"
                        ],
                        [
                            "de",
                            "Shortwave infrared (SWIR)"
                        ],
                        [
                            "df",
                            "Reflective infrared"
                        ],
                        [
                            "dv",
                            "Combinations"
                        ],
                        [
                            "dz",
                            "Other infrared data"
                        ],
                        [
                            "ga",
                            "Sidelooking airborne radar (SLAR)"
                        ],
                        [
                            "gb",
                            "Synthetic aperture radar (SAR)-Single frequency"
                        ],
                        [
                            "gc",
                            "SAR-multi-frequency (multichannel)"
                        ],
                        [
                            "gd",
                            "SAR-like polarization"
                        ],
                        [
                            "ge",
                            "SAR-cross polarization"
                        ],
                        [
                            "gf",
                            "Infometric SAR"
                        ],
                        [
                            "gg",
                            "polarmetric SAR"
                        ],
                        [
                            "gu",
                            "Passive microwave mapping"
                        ],
                        [
                            "gz",
                            "Other microwave data"
                        ],
                        [
                            "ja",
                            "Far ultraviolet"
                        ],
                        [
                            "jb",
                            "Middle ultraviolet"
                        ],
                        [
                            "jc",
                            "Near ultraviolet"
                        ],
                        [
                            "jv",
                            "Ultraviolet combinations"
                        ],
                        [
                            "jz",
                            "Other ultraviolet data"
                        ],
                        [
                            "ma",
                            "Multi-spectral, multidata"
                        ],
                        [
                            "mb",
                            "Multi-temporal"
                        ],
                        [
                            "mm",
                            "Combination of various data types"
                        ],
                        [
                            "nn",
                            "Not applicable"
                        ],
                        [
                            "pa",
                            "Sonar--water depth"
                        ],
                        [
                            "pb",
                            "Sonar--bottom topography images, sidescan"
                        ],
                        [
                            "pc",
                            "Sonar--bottom topography, near-surface"
                        ],
                        [
                            "pd",
                            "Sonar--bottom topography, near-bottom"
                        ],
                        [
                            "pe",
                            "Seismic surveys"
                        ],
                        [
                            "pz",
                            "Other acoustical data"
                        ],
                        [
                            "ra",
                            "Gravity anomalies (general)"
                        ],
                        [
                            "rb",
                            "Free-air"
                        ],
                        [
                            "rc",
                            "Bouger"
                        ],
                        [
                            "rd",
                            "Isostatic"
                        ],
                        [
                            "sa",
                            "Magnetic field"
                        ],
                        [
                            "ta",
                            "radiometric surveys"
                        ],
                        [
                            "uu",
                            "Unknown"
                        ],
                        [
                            "zz",
                            "Other"
                        ],
                        [
                            "",
                            "No intento de codificar"
                        ]
                    ]
                }
            }
        }
    }
};

    global.marcCatEnLeaderSpecs = {
    "editable": [
        {
            "pos": 5,
            "label": "Record status",
            "len": "3",
            "options": [
                [
                    "n",
                    "New"
                ],
                [
                    "c",
                    "Corrected or revised"
                ],
                [
                    "d",
                    "Deleted"
                ],
                [
                    "o",
                    "Alienated"
                ],
                [
                    "p",
                    "Increase in encoding level from prepublication"
                ],
                [
                    "r",
                    "Revised"
                ],
                [
                    "s",
                    "Partially suppressed"
                ]
            ]
        },
        {
            "pos": 6,
            "label": "Type of record",
            "len": "3",
            "options": [
                [
                    "a",
                    "Language material"
                ],
                [
                    "c",
                    "Notated music"
                ],
                [
                    "d",
                    "Manuscript notated music"
                ],
                [
                    "e",
                    "Cartographic material"
                ],
                [
                    "f",
                    "Manuscript cartographic material"
                ],
                [
                    "g",
                    "Projected medium"
                ],
                [
                    "i",
                    "Nonmusical sound recording"
                ],
                [
                    "j",
                    "Musical sound recording"
                ],
                [
                    "k",
                    "Two-dimensional nonprojectable graphic"
                ],
                [
                    "m",
                    "Computer file"
                ],
                [
                    "o",
                    "Kit"
                ],
                [
                    "p",
                    "Mixed materials"
                ],
                [
                    "r",
                    "Three-dimensional artifact or naturally occurring object"
                ],
                [
                    "t",
                    "Manuscript language material"
                ]
            ]
        },
        {
            "pos": 7,
            "label": "Bibliographic level",
            "len": "3",
            "options": [
                [
                    "a",
                    "Monographic component part"
                ],
                [
                    "b",
                    "Serial component part"
                ],
                [
                    "c",
                    "Collection"
                ],
                [
                    "d",
                    "Subunit"
                ],
                [
                    "i",
                    "Integrating resource"
                ],
                [
                    "m",
                    "Monograph/Item"
                ],
                [
                    "s",
                    "Serial"
                ]
            ]
        },
        {
            "pos": 8,
            "label": "Type of control",
            "len": "1",
            "options": [
                [
                    " ",
                    "No information provided"
                ],
                [
                    "#",
                    "No specified type"
                ]
            ]
        },
        {
            "pos": 9,
            "label": "Character coding scheme",
            "len": "1",
            "options": [
                [
                    "a",
                    "MARC-8"
                ],
                [
                    "u",
                    "UTF-8"
                ]
            ]
        },
        {
            "pos": 17,
            "label": "Encoding level",
            "len": "1",
            "options": [
                [
                    " ",
                    "No information provided"
                ],
                [
                    "#",
                    "Full level"
                ],
                [
                    "1",
                    "Full level, material not examined"
                ],
                [
                    "2",
                    "Less-than-full level, material not examined"
                ],
                [
                    "3",
                    "Abbreviated level"
                ],
                [
                    "4",
                    "Core level"
                ],
                [
                    "5",
                    "Partial (preliminary) level"
                ],
                [
                    "8",
                    "Prepublication level"
                ]
            ]
        },
        {
            "pos": 18,
            "label": "Descriptive cataloging form",
            "len": "1",
            "options": [
                [
                    " ",
                    "No information provided"
                ],
                [
                    "#",
                    "Non-ISBD"
                ],
                [
                    "a",
                    "AACR 2"
                ],
                [
                    "i",
                    "ISBD punctuation included"
                ],
                [
                    "u",
                    "Unknown"
                ]
            ]
        }
    ],
    "readOnly": [
        {
            "key": "len",
            "label": "00–04",
            "start": 0,
            "len": 5,
            "title": "Record length"
        },
        {
            "key": "1011",
            "label": "10–11",
            "start": 10,
            "len": 2,
            "title": "Indicator count"
        },
        {
            "key": "1216",
            "label": "12–16",
            "start": 12,
            "len": 5,
            "title": "Base address of data"
        },
        {
            "key": "2023",
            "label": "20–23",
            "start": 20,
            "len": 4,
            "title": "Entry map"
        }
    ]
};

})(typeof window !== "undefined" ? window : globalThis);
