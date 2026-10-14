/**
 * Fuente única runtime — español MARC21 (catalogación v2).
 * Generado/corrigido por tools/fix_marc_i18n_es_english.js
 * tags=255 indicadores=980 subcampos=1771 segmentos=204
 * fixEnglish=15+0+6 stillEnglish=10
 */
(function (global) {
    "use strict";

    global.marcCatEsDictionary = {
    "100": {
        "nombre_generico": "Autor - Personal",
        "repetible": false,
        "predeterminados": [
            "a",
            "d",
            "e"
        ],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente de encabezamiento o término",
            "4": "Relación",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Nombre personal",
            "d": "Fechas",
            "e": "Término de relación",
            "q": "Forma completa",
            "b": "Numeración",
            "c": "Títulos y otras palabras asociadas a un nombre",
            "f": "Fecha de una obra",
            "g": "Información miscelánea",
            "j": "Calificador de atribución",
            "k": "Subencabezamiento de forma",
            "l": "Idioma de una obra",
            "n": "Número de parte/sección de una obra",
            "p": "Nombre de parte/sección de una obra",
            "t": "Título de una obra",
            "u": "Afiliación"
        },
        "indicador_1": {
            "0": "Nombre de pila",
            "1": "Apellido",
            "3": "Nombre de familia"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "110": {
        "nombre_generico": "Autor - Corporativo",
        "repetible": false,
        "predeterminados": [
            "a",
            "b",
            "e"
        ],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente de encabezamiento o término",
            "4": "Relación",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Nombre corporativo",
            "b": "Unidad subordinada",
            "e": "Término de relación",
            "c": "Lugar de la reunión",
            "d": "Fecha de reunión o firma de tratado",
            "f": "Fecha de una obra",
            "g": "Información miscelánea",
            "k": "Subencabezamiento de forma",
            "l": "Idioma de una obra",
            "n": "Número de parte/sección/reunión",
            "p": "Nombre de parte/sección de una obra",
            "t": "Título de una obra",
            "u": "Afiliación"
        },
        "indicador_1": {
            "0": "Nombre invertido",
            "1": "Nombre de jurisdicción",
            "2": "Nombre en orden directo"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "111": {
        "nombre_generico": "Entrada principal-Nombre de reunión",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente de encabezamiento o término",
            "4": "Relación",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Nombre de reunión o jurisdicción como elemento de entrada",
            "c": "Lugar de la reunión",
            "d": "Fecha de reunión o firma de tratado",
            "e": "Subordinado unit",
            "f": "Fecha de una obra",
            "g": "Información miscelánea",
            "j": "Término de relator",
            "k": "Subencabezamiento de forma",
            "l": "Idioma de una obra",
            "n": "Número de parte/sección/reunión",
            "p": "Nombre de parte/sección de una obra",
            "q": "Nombre de reunión posterior al elemento de entrada de jurisdicción",
            "t": "Título de una obra",
            "u": "Afiliación"
        },
        "indicador_1": {
            "0": "Inverted Nombre",
            "1": "Jurisdicción Nombre",
            "2": "Nombre in direct order",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "130": {
        "nombre_generico": "Entrada principal-Título uniforme",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente de encabezamiento o término",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Uniform Título",
            "d": "Fecha de firma de tratado",
            "f": "Fecha de una obra",
            "g": "Información miscelánea",
            "h": "Medio",
            "k": "Subencabezamiento de forma",
            "l": "Idioma de una obra",
            "m": "Medio de interpretación para música",
            "n": "Número de parte/sección de una obra",
            "o": "Indicación de arreglo para música",
            "p": "Nombre de parte/sección de una obra",
            "r": "Tonalidad para música",
            "s": "Versión",
            "t": "Título de una obra"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "210": {
        "nombre_generico": "Abbreviated Título",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Fuente",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Abbreviated Título",
            "b": "Información calificadora"
        },
        "indicador_1": {
            "0": "Sin entrada secundaria",
            "1": "Entrada secundaria",
            " ": "Indefinido"
        },
        "indicador_2": {
            "0": "Otro abbreviated Título",
            " ": "Indefinido",
            "#": "Abbreviated key Título"
        }
    },
    "222": {
        "nombre_generico": "Key Título",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Key Título",
            "b": "Información calificadora"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            "0": "Sin caracteres iniciales no considerados",
            " ": "Indefinido"
        }
    },
    "240": {
        "nombre_generico": "Título uniforme",
        "repetible": false,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente de encabezamiento o término",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Título uniforme",
            "d": "Fecha tratado",
            "f": "Fecha de la obra",
            "l": "Idioma",
            "g": "Información miscelánea",
            "h": "Medio",
            "k": "Subencabezamiento de forma",
            "m": "Medio de interpretación para música",
            "n": "Número de parte/sección de una obra",
            "o": "Indicación de arreglo para música",
            "p": "Nombre de parte/sección de una obra",
            "r": "Tonalidad para música",
            "s": "Versión"
        },
        "indicador_1": {
            "0": "No se imprime ni despliega",
            "1": "Se imprime y despliega"
        },
        "indicador_2": {
            "0": "0 caracteres a omitir (ej. sin artículo)",
            "1": "1 carácter a omitir",
            "2": "2 caracteres (ej. «A »)",
            "3": "3 caracteres (ej. «El »)",
            "4": "4 caracteres (ej. «The »)",
            "5": "5 caracteres a omitir",
            "6": "6 caracteres a omitir",
            "7": "7 caracteres a omitir",
            "8": "8 caracteres a omitir",
            "9": "9 caracteres a omitir"
        }
    },
    "242": {
        "nombre_generico": "Traducción del título por la agencia de catalogación",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Título",
            "b": "Resto del título",
            "c": "Indicación de responsabilidad, etc.",
            "h": "Medio",
            "n": "Número de parte/sección de una obra",
            "p": "Nombre de parte/sección de una obra",
            "y": "Código de idioma del título traducido"
        },
        "indicador_1": {
            "0": "Sin entrada secundaria",
            "1": "Entrada secundaria",
            " ": "Indefinido"
        },
        "indicador_2": {
            "0": "Sin caracteres iniciales no considerados",
            " ": "Indefinido"
        }
    },
    "243": {
        "nombre_generico": "Collective Título uniforme",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Uniform Título",
            "d": "Fecha de firma de tratado",
            "f": "Fecha de una obra",
            "g": "Información miscelánea",
            "h": "Medio",
            "k": "Subencabezamiento de forma",
            "l": "Idioma de una obra",
            "m": "Medio de interpretación para música",
            "n": "Número de parte/sección de una obra",
            "o": "Indicación de arreglo para música",
            "p": "Nombre de parte/sección de una obra",
            "r": "Tonalidad para música",
            "s": "Versión"
        },
        "indicador_1": {
            "0": "No es printed or displayed",
            "1": "Impreso o visualizado",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "245": {
        "nombre_generico": "Mención de título",
        "repetible": false,
        "predeterminados": [
            "a",
            "b",
            "c"
        ],
        "subcampos": {
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Título",
            "b": "Subtítulo",
            "c": "Mención de responsabilidad",
            "n": "Núm. parte",
            "p": "Nombre parte",
            "f": "Fechas inclusivas",
            "g": "Fechas masivas",
            "h": "Medio",
            "k": "Forma",
            "s": "Versión",
            "z": "Título Indicación context Nota"
        },
        "indicador_1": {
            "0": "Sin asiento secundario",
            "1": "Con asiento secundario"
        },
        "indicador_2": {
            "0": "0 caracteres a omitir (ej. sin artículo)",
            "1": "1 carácter a omitir",
            "2": "2 caracteres (ej. «A »)",
            "3": "3 caracteres (ej. «El »)",
            "4": "4 caracteres (ej. «The »)",
            "5": "5 caracteres a omitir",
            "6": "6 caracteres a omitir",
            "7": "7 caracteres a omitir",
            "8": "8 caracteres a omitir",
            "9": "9 caracteres a omitir"
        }
    },
    "246": {
        "nombre_generico": "Variante del título",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Título",
            "i": "Texto a mostrar",
            "n": "Núm. parte",
            "p": "Nombre parte",
            "b": "Resto del título",
            "f": "Fecha o designación secuencial",
            "g": "Información miscelánea",
            "h": "Medio"
        },
        "indicador_1": {
            "0": "Nota, sin asiento sec.",
            "1": "Nota, con asiento sec.",
            "2": "Sin nota, sin asiento sec.",
            "3": "Sin nota, con asiento sec."
        },
        "indicador_2": {
            "0": "Porción del título",
            "1": "Título paralelo",
            "2": "Título distintivo",
            "3": "Otro título",
            "4": "Título de cubierta",
            "5": "Added Título page Título",
            "6": "Caption Título",
            "7": "Running Título",
            "8": "Título de lomo",
            " ": "No especificado"
        }
    },
    "247": {
        "nombre_generico": "Anterior Título",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Título",
            "b": "Resto del título",
            "f": "Fecha o designación secuencial",
            "g": "Información miscelánea",
            "h": "Medio",
            "n": "Número de parte/sección de una obra",
            "p": "Nombre de parte/sección de una obra",
            "x": "Número international normalizado de publicación seriada (ISSN)"
        },
        "indicador_1": {
            "0": "Sin entrada secundaria",
            "1": "Entrada secundaria",
            " ": "Indefinido"
        },
        "indicador_2": {
            "0": "Mostrar nota",
            "1": "No mostrar nota",
            " ": "Indefinido"
        }
    },
    "250": {
        "nombre_generico": "Mención de edición",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "3": "Materiales especificados",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Mención de edición",
            "b": "Resto de la mención"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "251": {
        "nombre_generico": "Versión Información",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente",
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Versión"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "254": {
        "nombre_generico": "Musical Presentation Indicación",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "255": {
        "nombre_generico": "Cartográfico Matemático Datos",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Indicación de escala",
            "b": "Indicación de proyección",
            "c": "Indicación de coordenadas",
            "d": "Indicación de zona",
            "e": "Indicación de equinoccio",
            "f": "Pares de coordenadas G-ring exteriores",
            "g": "Pares de coordenadas G-ring de exclusión"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "256": {
        "nombre_generico": "Computer File Características",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Computer file Características"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "257": {
        "nombre_generico": "País de la entidad productora",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "País de la entidad productora"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "258": {
        "nombre_generico": "Philatelic Issue Datos",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Issuing Jurisdicción",
            "b": "Denominación"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "260": {
        "nombre_generico": "Publicación (Obsoleta)",
        "repetible": true,
        "predeterminados": [
            "a",
            "b",
            "c"
        ],
        "subcampos": {
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Lugar",
            "b": "Editor",
            "c": "Fecha",
            "e": "Lugar de fabricación",
            "f": "Fabricante",
            "g": "Fecha de fabricación"
        },
        "indicador_1": {
            "2": "Editor intermediario",
            "3": "Editor actual/último",
            " ": "No aplica"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "263": {
        "nombre_generico": "Projected Publicación Fecha",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Projected Publicación Fecha"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "264": {
        "nombre_generico": "Producción, publicación, distribución, fabricación y copyright",
        "repetible": true,
        "predeterminados": [
            "a",
            "b",
            "c"
        ],
        "subcampos": {
            "3": "Materiales especificados",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Lugar",
            "b": "Editor",
            "c": "Fecha"
        },
        "indicador_1": {
            "2": "Intermediario",
            "3": "Actual/último",
            " ": "No aplica/No info"
        },
        "indicador_2": {
            "0": "Producción",
            "1": "Publicación",
            "2": "Distribución",
            "3": "Fabricación",
            "4": "Fecha de copyright"
        }
    },
    "270": {
        "nombre_generico": "Dirección",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "4": "Relación",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Dirección",
            "b": "Ciudad",
            "c": "Estado o provincia",
            "d": "País",
            "e": "Postal Código",
            "f": "Términos preceding attention Nombre",
            "g": "Attention Nombre",
            "h": "Cargo del destinatario",
            "i": "Tipo de dirección",
            "j": "Specialized telephone Número",
            "k": "Telephone Número",
            "l": "Fax Número",
            "m": "Electronic mail Dirección",
            "n": "TDD or TTY Número",
            "p": "Persona de contacto",
            "q": "Título de la persona de contacto",
            "r": "Horario",
            "z": "Nota pública"
        },
        "indicador_1": {
            "1": "Primaria",
            "2": "Secundaria",
            " ": "Indefinido",
            "#": "Sin level specified"
        },
        "indicador_2": {
            "0": "Postal",
            "7": "Tipo specified in Subcampo $i",
            " ": "Indefinido",
            "#": "Sin type specified"
        }
    },
    "300": {
        "nombre_generico": "Descripción física",
        "repetible": true,
        "predeterminados": [
            "a",
            "b",
            "c"
        ],
        "subcampos": {
            "3": "Materiales especificados",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Extensión",
            "b": "Otros detalles (ilus.)",
            "c": "Dimensiones",
            "e": "Material acompañante",
            "f": "Tipo de unidad",
            "g": "Tamaño de unidad"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "306": {
        "nombre_generico": "Tiempo de reproducción",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Tiempo de reproducción"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "307": {
        "nombre_generico": "Horario, Etc.",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Horario",
            "b": "Adicional Información"
        },
        "indicador_1": {
            "8": "Sin constante de visualización generada",
            " ": "Indefinido",
            "#": "Horario"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "310": {
        "nombre_generico": "Actual Publicación Frequency",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Actual Publicación frequency",
            "b": "Fecha de frecuencia de publicación actual"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "321": {
        "nombre_generico": "Anterior Publicación Frequency",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Anterior Publicación frequency",
            "b": "Fechas de frecuencia de publicación anterior"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "334": {
        "nombre_generico": "Modo de emisión",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Término de modo de emisión",
            "b": "Código de modo de emisión"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "335": {
        "nombre_generico": "Plan de extensión",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente",
            "3": "Materiales especificados",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Extension plan Término",
            "b": "Extension plan Código"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "336": {
        "nombre_generico": "Tipo de contenido",
        "repetible": true,
        "predeterminados": [
            "a",
            "b",
            "2"
        ],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente",
            "3": "Materiales especificados",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Término",
            "b": "Código"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "337": {
        "nombre_generico": "Tipo de medio",
        "repetible": true,
        "predeterminados": [
            "a",
            "b",
            "2"
        ],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente",
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Término",
            "b": "Código"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "338": {
        "nombre_generico": "Tipo de soporte",
        "repetible": true,
        "predeterminados": [
            "a",
            "b",
            "2"
        ],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente",
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Término",
            "b": "Código"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "340": {
        "nombre_generico": "Físico Medio",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente",
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Base material y configuración",
            "b": "Dimensiones",
            "c": "Materiales aplicados a la superficie",
            "d": "Información recording technique",
            "e": "Soporte",
            "f": "Valor de razón de reducción",
            "g": "Color Contenido",
            "h": "Lugar within Medio",
            "i": "Technical specifications of Medio",
            "j": "Generación",
            "k": "Disposición",
            "l": "Encuadernación",
            "m": "Book Formato",
            "n": "Tamaño de fuente",
            "o": "Polaridad",
            "p": "Illustrative Contenido",
            "q": "Designador de razón de reducción"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "341": {
        "nombre_generico": "Accesibilidad Contenido",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente",
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Contenido access mode",
            "b": "Características de asistencia textual",
            "c": "Características de asistencia visual",
            "d": "Características de asistencia auditiva",
            "e": "Características de asistencia táctil"
        },
        "indicador_1": {
            "0": "Adaptive features to access Primaria Contenido",
            "1": "Adaptive features to access Secundaria Contenido",
            " ": "Indefinido",
            "#": "Sin información"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "342": {
        "nombre_generico": "Geográfico Reference Datos",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Reference Método used",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Nombre",
            "b": "Unidades de coordenadas o de distancia",
            "c": "Resolución de latitud",
            "d": "Resolución de longitud",
            "e": "Normalizado parallel or oblique line latitude",
            "f": "Longitud de línea oblicua",
            "g": "Longitud del meridiano central o centro de proyección",
            "h": "Latitud del origen de proyección o centro de proyección",
            "i": "Falso este",
            "j": "Falso norte",
            "k": "Factor de escala",
            "l": "Altura del punto de perspectiva sobre la superficie",
            "m": "Ángulo acimutal",
            "n": "Azimuth measure point longitude or straight Vertical longitude from pole",
            "o": "Número Landsat y número de trayectoria",
            "p": "Zone Identificador",
            "q": "Ellipsoid Nombre",
            "r": "Semieje mayor",
            "s": "Denominador de la razón de achatamiento",
            "t": "Resolución vertical",
            "u": "Vertical encoding Método",
            "v": "Local planar, Local, or Otro projection or grid Descripción",
            "w": "Local planar or Local georeference Información"
        },
        "indicador_1": {
            "0": "Sistema de coordenadas horizontal",
            "1": "Sistema de coordenadas vertical",
            " ": "Indefinido"
        },
        "indicador_2": {
            "0": "Geográfico",
            "1": "Proyección cartográfica",
            "2": "Sistema de coordenadas de cuadrícula",
            "3": "Local planar",
            "4": "Local",
            " ": "Indefinido"
        }
    },
    "343": {
        "nombre_generico": "Planar Coordinate Datos",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Planar coordinate encoding Método",
            "b": "Unidades de distancia planar",
            "c": "Resolución de abscisas",
            "d": "Resolución de ordenadas",
            "e": "Resolución de distancia",
            "f": "Resolución de rumbo",
            "g": "Unidades de rumbo",
            "h": "Dirección de referencia de rumbo",
            "i": "Meridiano de referencia de rumbo"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "344": {
        "nombre_generico": "Sonido Características",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente",
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Tipo de grabación",
            "b": "Recording Medio",
            "c": "Velocidad de reproducción",
            "d": "Característica de surco",
            "e": "Configuración de pista",
            "f": "Configuración de cinta",
            "g": "Configuración de canales de reproducción",
            "h": "Especial playback Características",
            "i": "Sonido Contenido",
            "j": "Técnica original de captura y almacenamiento"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "345": {
        "nombre_generico": "Moving Image Características",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente",
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Formato de presentación",
            "b": "Velocidad de proyección",
            "c": "Valor de relación de aspecto",
            "d": "Designador de relación de aspecto"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "346": {
        "nombre_generico": "Vídeo Características",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente",
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Vídeo Formato",
            "b": "Broadcast Normalizado"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "347": {
        "nombre_generico": "Digital File Características",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente",
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "File Tipo",
            "b": "Encoding Formato",
            "c": "Tamaño de archivo",
            "d": "Resolución",
            "e": "Codificación regional",
            "f": "Tasa de bits codificada"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "348": {
        "nombre_generico": "Notated Música Características",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente del término",
            "3": "Materiales especificados",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Término de formato de música notada",
            "b": "Código de formato de música notada",
            "c": "Término de forma de notación musical",
            "d": "Código de forma de notación musical"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "351": {
        "nombre_generico": "Organización y disposición de materiales",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Organización",
            "b": "Arreglo",
            "c": "Hierarchical Nivel"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "352": {
        "nombre_generico": "Representación gráfica digital",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Direct reference Método",
            "b": "Object Tipo",
            "c": "Recuento de objetos",
            "d": "Recuento de filas",
            "e": "Recuento de columnas",
            "f": "Recuento vertical",
            "g": "VPF topology Nivel",
            "i": "Indirect reference Descripción",
            "q": "Formato de la imagen digital"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "353": {
        "nombre_generico": "Supplementary Contenido Características",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente",
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Supplementary Contenido Término",
            "b": "Supplementary Contenido Código"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "355": {
        "nombre_generico": "Control de clasificación de seguridad",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Clasificación de seguridad",
            "b": "Instrucciones de manejo",
            "c": "External dissemination Información",
            "d": "Downgrading or declassification Acontecimiento",
            "e": "Sistema de clasificación",
            "f": "Código de país de origen",
            "g": "Downgrading Fecha",
            "h": "Declassification Fecha",
            "j": "Autorización"
        },
        "indicador_1": {
            "0": "Documento",
            "1": "Título",
            "2": "Resumen",
            "3": "Contents Nota",
            "4": "Autor",
            "5": "Registro",
            "8": "Ninguno de los anteriores",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "357": {
        "nombre_generico": "Control de difusión del originador",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Originator Control Término",
            "b": "Agencia originadora",
            "c": "Destinatarios autorizados del material",
            "g": "Otro Restricciones"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "361": {
        "nombre_generico": "Historial estructurado de propiedad y custodia",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "3": "Materiales especificados",
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Nombre",
            "f": "Término probatorio del historial de propiedad y custodia",
            "k": "Formatted Fecha",
            "l": "Fecha",
            "o": "Tipo de información de propiedad e historial de custodia",
            "s": "Signatura del ejemplar descrito",
            "u": "Identificador uniforme de recursos (URI)",
            "x": "Nota no pública",
            "y": "Identificador of the copy described",
            "z": "Nota pública"
        },
        "indicador_1": {
            "0": "Privado",
            "1": "No privado",
            " ": "Indefinido",
            "#": "Sin información"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "362": {
        "nombre_generico": "Fechas de publicación y/o designación secuencial",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Fechas de publicación y/o designación secuencial",
            "z": "Fuente de información"
        },
        "indicador_1": {
            "0": "Estilo formateado",
            "1": "Unformatted Nota",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "363": {
        "nombre_generico": "Normalized Fecha and Sequential Designation",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Primer nivel de enumeración",
            "b": "Segundo nivel de enumeración",
            "c": "Tercer nivel de enumeración",
            "d": "Cuarto nivel de enumeración",
            "e": "Quinto nivel de enumeración",
            "f": "Sexto nivel de enumeración",
            "g": "Esquema alternativo de numeración, primer nivel de enumeración",
            "h": "Esquema alternativo de numeración, segundo nivel de enumeración",
            "i": "Primer nivel de cronología",
            "j": "Segundo nivel de cronología",
            "k": "Tercer nivel de cronología",
            "l": "Cuarto nivel de cronología",
            "m": "Alternativo numbering scheme, chronology",
            "u": "First Nivel textual designation",
            "v": "Primer nivel de cronología, emisión",
            "x": "Nota no pública",
            "z": "Nota pública"
        },
        "indicador_1": {
            "0": "Inicial Información",
            "1": "Fin Información",
            " ": "Indefinido",
            "#": "Sin información"
        },
        "indicador_2": {
            "0": "Cerrado",
            "1": "Abierto",
            " ": "Indefinido",
            "#": "No especificada"
        }
    },
    "365": {
        "nombre_generico": "Precio comercial",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Fuente del código de tipo de precio",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Price Tipo Código",
            "b": "Importe del precio",
            "c": "Currency Código",
            "d": "Unidad de fijación de precios",
            "e": "Price Nota",
            "f": "Precio vigente desde",
            "g": "Precio vigente hasta",
            "h": "Tipo impositivo 1",
            "i": "Tipo impositivo 2",
            "j": "Código de país ISO",
            "k": "Código de país MARC",
            "m": "Identificación de entidad de fijación de precios"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "366": {
        "nombre_generico": "Trade Availability Información",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Fuente del código de estado de disponibilidad",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Publishers' compressed Título identification",
            "b": "Fecha detallada de publicación",
            "c": "Availability Estado Código",
            "d": "Expected next availability Fecha",
            "e": "Nota",
            "f": "Categoría de descuento del editor",
            "g": "Fecha made out of print",
            "j": "Código de país ISO",
            "k": "Código de país MARC",
            "m": "Identificación de agencia"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "370": {
        "nombre_generico": "Asociado Lugar",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente del término",
            "3": "Materiales especificados",
            "4": "Relación",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "c": "Asociado País",
            "f": "Otro Asociado Lugar",
            "g": "Lugar de origen de la obra o expresión",
            "i": "Información de relación",
            "s": "Periodo inicial",
            "t": "Periodo final",
            "u": "Identificador uniforme de recursos (URI)",
            "v": "Fuente de información"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "377": {
        "nombre_generico": "Asociado Idioma",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente",
            "3": "Materiales especificados",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Idioma Código",
            "l": "Idioma Término"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            "7": "Fuente specified in $2",
            " ": "Indefinido",
            "#": "MARC Idioma Código"
        }
    },
    "380": {
        "nombre_generico": "Form of Obra",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente del término",
            "3": "Materiales especificados",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Form of Obra"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "381": {
        "nombre_generico": "Otras características distintivas de la obra o expresión",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente del término",
            "3": "Materiales especificados",
            "4": "Relación",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Otro distinguishing characteristic",
            "i": "Información de relación",
            "u": "Identificador uniforme de recursos (URI)",
            "v": "Fuente de información"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "382": {
        "nombre_generico": "Medio de interpretación",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente del término",
            "3": "Materiales especificados",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Medio de interpretación",
            "b": "Solista",
            "d": "Instrumento de duplicación",
            "e": "Número de conjuntos del mismo tipo",
            "n": "Número de intérpretes del mismo medio",
            "p": "Medio de interpretación alternativo",
            "r": "Número total de individuos que interpretan junto a conjuntos",
            "s": "Número total de intérpretes",
            "t": "Número total de conjuntos",
            "v": "Nota"
        },
        "indicador_1": {
            "0": "Medio de interpretación",
            "1": "Medio de interpretación parcial",
            "2": "Medio de interpretación del contenido musical de la expresión representativa",
            "3": "Medio de interpretación parcial del contenido musical de la expresión representativa",
            " ": "Indefinido",
            "#": "Sin información"
        },
        "indicador_2": {
            "0": "No es intended for access",
            "1": "Destinado al acceso",
            " ": "Indefinido",
            "#": "Sin información"
        }
    },
    "383": {
        "nombre_generico": "Designación numérica de obra o expresión musical",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Fuente",
            "3": "Materiales especificados",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Serial Número",
            "b": "Opus Número",
            "c": "Thematic Índice Número",
            "d": "Thematic Índice Código",
            "e": "Editor Asociado with opus Número"
        },
        "indicador_1": {
            "0": "Obra",
            "1": "Expresión",
            " ": "Indefinido",
            "#": "Sin información"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "384": {
        "nombre_generico": "Tonalidad",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "3": "Materiales especificados",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Tonalidad"
        },
        "indicador_1": {
            "0": "Tonalidad original",
            "1": "Tonalidad transportada",
            "2": "Tonalidad de la expresión representativa",
            " ": "Indefinido",
            "#": "Relación to Original Desconocido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "385": {
        "nombre_generico": "Público Características",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente",
            "3": "Materiales especificados",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Público Término",
            "b": "Público Código",
            "m": "Demographic group Término",
            "n": "Demographic group Código"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "386": {
        "nombre_generico": "Creator/Contributor Características",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente",
            "3": "Materiales especificados",
            "4": "Relación",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Creator/contributor Término",
            "b": "Creator/contributor Código",
            "i": "Información de relación",
            "m": "Demographic group Término",
            "n": "Demographic group Código"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "387": {
        "nombre_generico": "Representative Expresión Características",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "a": "Relación de aspecto de la expresión representativa",
            "b": "Contenido de color de la expresión representativa",
            "c": "Tipo de contenido de la expresión representativa",
            "d": "Fecha de captura de la expresión representativa",
            "e": "Fecha de la expresión representativa",
            "f": "Duración de la expresión representativa",
            "g": "Público destinatario de la expresión representativa"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "388": {
        "nombre_generico": "Periodo temporal de creación",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            "1": "Creation of Obra",
            "2": "Creation of aggregate Obra",
            " ": "Indefinido",
            "#": "Sin información"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "490": {
        "nombre_generico": "Mención de serie",
        "repetible": true,
        "predeterminados": [
            "a",
            "v"
        ],
        "subcampos": {
            "3": "Materiales especificados",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Título de serie",
            "v": "Número/volumen",
            "l": "Signatura de la Library of Congress",
            "x": "Número international normalizado de publicación seriada (ISSN)",
            "y": "ISSN incorrecto",
            "z": "ISSN cancelado"
        },
        "indicador_1": {
            "0": "Serie no trazada (no se hace 830)",
            "1": "Serie trazada de forma distinta"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "500": {
        "nombre_generico": "Nota general",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "3": "Materiales especificados",
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Nota general"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "501": {
        "nombre_generico": "Nota de with",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "With Nota"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "502": {
        "nombre_generico": "Nota de dissertation",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Tesis Nota",
            "b": "Degree Tipo",
            "c": "Nombre de la institución otorgante",
            "d": "Año de concesión del grado",
            "g": "Información miscelánea",
            "o": "Tesis Identificador"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "504": {
        "nombre_generico": "Nota de bibliografía",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Nota de bibliografía",
            "b": "Número de referencias"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "505": {
        "nombre_generico": "Nota de contenido",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Nota de contenido",
            "g": "Información miscelánea",
            "r": "Indicación de responsabilidad",
            "t": "Título",
            "u": "Identificador uniforme de recursos (URI)"
        },
        "indicador_1": {
            "0": "Contenido completo",
            "1": "Contenido incompleto",
            "2": "Contenido parcial",
            "8": "Sin constante de visualización"
        },
        "indicador_2": {
            "0": "Nivel enriquecido",
            " ": "Nivel básico"
        }
    },
    "506": {
        "nombre_generico": "Nota de restrictions on access",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente del término",
            "3": "Materiales especificados",
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Términos governing access",
            "b": "Jurisdicción",
            "c": "Físico access provisions",
            "d": "Usuarios autorizados",
            "e": "Autorización",
            "f": "Terminología normalizada de restricción de acceso",
            "g": "Availability Fecha",
            "q": "Agencia suministradora",
            "u": "Identificador uniforme de recursos (URI)"
        },
        "indicador_1": {
            "0": "Sin restrictions",
            "1": "Restricciones apply",
            " ": "Indefinido",
            "#": "Sin información"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "507": {
        "nombre_generico": "Scale Nota for Visual Materials",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Representative fraction of scale Nota",
            "b": "Remainder of scale Nota"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "508": {
        "nombre_generico": "Nota de creation/production credits",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Creation/production credits Nota"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "510": {
        "nombre_generico": "Nota de citation/references",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Nombre de la fuente",
            "b": "Cobertura de la fuente",
            "c": "Lugar within Fuente",
            "u": "Identificador uniforme de recursos (URI)",
            "x": "Número international normalizado de publicación seriada (ISSN)"
        },
        "indicador_1": {
            "0": "Coverage Desconocido",
            "1": "Coverage Completo",
            "2": "Coverage is Selectivo",
            "3": "Lugar in Fuente not given",
            "4": "Lugar in Fuente given",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "511": {
        "nombre_generico": "Nota de participant or performer",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Participant or performer Nota"
        },
        "indicador_1": {
            "0": "Sin constante de visualización generada",
            "1": "Reparto",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "513": {
        "nombre_generico": "Nota de type of report and period covered",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Tipo de informe",
            "b": "Periodo cubierto"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "514": {
        "nombre_generico": "Nota de data quality",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Informe de exactitud de atributo",
            "b": "Valor de exactitud de atributo",
            "c": "Explicación de exactitud de atributo",
            "d": "Informe de coherencia lógica",
            "e": "Informe de integridad",
            "f": "Informe de exactitud de posición horizontal",
            "g": "Valor de exactitud de posición horizontal",
            "h": "Explicación de exactitud de posición horizontal",
            "i": "Informe de exactitud de posición vertical",
            "j": "Valor de exactitud de posición vertical",
            "k": "Explicación de exactitud de posición vertical",
            "m": "Cobertura nubosa",
            "u": "Identificador uniforme de recursos (URI)",
            "z": "Mostrar nota"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "515": {
        "nombre_generico": "Nota de numbering peculiarities",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Numbering peculiarities Nota"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "516": {
        "nombre_generico": "Nota de type of computer file or data",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Nota de tipo de archivo informático o datos"
        },
        "indicador_1": {
            "8": "Sin constante de visualización generada",
            " ": "Indefinido",
            "#": "Tipo de archivo"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "518": {
        "nombre_generico": "Nota de date/time and place of an event",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente del término",
            "3": "Materiales especificados",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Date/time and Lugar of an Acontecimiento Nota",
            "d": "Fecha del acontecimiento",
            "o": "Otro Acontecimiento Información",
            "p": "Lugar of Acontecimiento"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "520": {
        "nombre_generico": "Resumen",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "2": "Fuente",
            "3": "Materiales especificados",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Resumen",
            "b": "Expansión del resumen",
            "c": "Assigning Fuente",
            "u": "Identificador uniforme de recursos (URI)"
        },
        "indicador_1": {
            "0": "Materia",
            "1": "Revisión",
            "2": "Alcance y contenido",
            "3": "Resumen",
            "4": "Contenido advice",
            "8": "Sin constante",
            " ": "Resumen"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "521": {
        "nombre_generico": "Nota de target audience",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Destinatario Público Nota",
            "b": "Fuente"
        },
        "indicador_1": {
            "0": "Reading grade Nivel",
            "1": "Interest age Nivel",
            "2": "Interest grade Nivel",
            "3": "Especial Público Características",
            "4": "Motivation/interest Nivel",
            "8": "Sin constante de visualización generada",
            " ": "Indefinido",
            "#": "Público"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "522": {
        "nombre_generico": "Nota de geographic coverage",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Geográfico coverage Nota"
        },
        "indicador_1": {
            "8": "Sin constante de visualización generada",
            " ": "Indefinido",
            "#": "Geográfico coverage"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "524": {
        "nombre_generico": "Nota de preferred citation of described materials",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Fuente del esquema utilizado",
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Preferred citation of described materials Nota"
        },
        "indicador_1": {
            "8": "Sin constante de visualización generada",
            " ": "Indefinido",
            "#": "Citar como"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "525": {
        "nombre_generico": "Nota de supplement",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Supplement Nota"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "526": {
        "nombre_generico": "Nota de study program information",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Programa Nombre",
            "b": "Interest Nivel",
            "c": "Reading Nivel",
            "d": "Título point value",
            "i": "Texto de visualización",
            "x": "Nota no pública",
            "z": "Nota pública"
        },
        "indicador_1": {
            "0": "Reading Programa",
            "8": "Sin constante de visualización generada",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "530": {
        "nombre_generico": "Nota de additional physical form available",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Adicional Físico form available Nota",
            "b": "Availability Fuente",
            "c": "Condiciones de disponibilidad",
            "d": "Order Número",
            "u": "Identificador uniforme de recursos (URI)"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "532": {
        "nombre_generico": "Nota de accessibility",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Resumen de accesibilidad"
        },
        "indicador_1": {
            "0": "Accesibilidad technical details",
            "1": "Accesibilidad features",
            "2": "Accesibilidad deficiencies",
            "8": "Sin constante de visualización generada",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "533": {
        "nombre_generico": "Nota de reproduction",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "7": "Elementos de longitud fija de la reproducción",
            "8": "Enlace de campo y número de secuencia",
            "a": "Tipo de reproducción",
            "b": "Lugar de reproducción",
            "c": "Agency responsible for Reproducción",
            "d": "Fecha de reproducción",
            "e": "Descripción física de la reproducción",
            "f": "Indicación de serie de la reproducción",
            "m": "Fechas y/o designación secuencial de números reproducidos",
            "n": "Nota about Reproducción",
            "y": "Procedencia de los datos"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "534": {
        "nombre_generico": "Nota de original version",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Entrada principal del original",
            "b": "Indicación de edición del original",
            "c": "Publicación, distribución, etc. del original",
            "e": "Descripción física, etc. del original",
            "f": "Indicación de serie del original",
            "k": "Título clave del original",
            "l": "Lugar of Original",
            "m": "Detalles específicos del material",
            "n": "Nota about Original",
            "o": "Otro resource Identificador",
            "p": "Frase introductoria",
            "t": "Indicación de título del original",
            "x": "Número international normalizado de publicación seriada (ISSN)",
            "z": "ISBN"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "535": {
        "nombre_generico": "Nota de location of originals/duplicates",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Custodio",
            "b": "Postal Dirección",
            "c": "País",
            "d": "Telecommunications Dirección",
            "g": "Repository Lugar"
        },
        "indicador_1": {
            "1": "Depositario de originales",
            "2": "Depositario de duplicados",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "536": {
        "nombre_generico": "Nota de funding information",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Text of Nota",
            "b": "Contract Número",
            "c": "Grant Número",
            "d": "Undifferentiated Número",
            "e": "Programa element Número",
            "f": "Project Número",
            "g": "Task Número",
            "h": "Obra unit Número"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "538": {
        "nombre_generico": "Nota de system details",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "System details Nota",
            "i": "Texto de visualización",
            "u": "Identificador uniforme de recursos (URI)"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "540": {
        "nombre_generico": "Nota de terms governing use and reproduction",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente del término",
            "3": "Materiales especificados",
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Términos que rigen el uso y la reproducción",
            "b": "Jurisdicción",
            "c": "Autorización",
            "d": "Usuarios autorizados",
            "f": "Terminología normalizada de derechos de uso y reproducción",
            "g": "Availability Fecha",
            "q": "Agencia suministradora",
            "u": "Identificador uniforme de recursos (URI)"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "541": {
        "nombre_generico": "Fuente de adquisición",
        "repetible": true,
        "predeterminados": [
            "c",
            "a",
            "d",
            "h"
        ],
        "subcampos": {
            "3": "Materiales especificados",
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Fuente",
            "c": "Método",
            "d": "Fecha",
            "h": "Precio",
            "b": "Dirección",
            "e": "Número de acceso",
            "f": "Propietario",
            "n": "Extensión",
            "o": "Tipo de unidad"
        },
        "indicador_1": {
            "0": "Privado",
            "1": "No privado",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "542": {
        "nombre_generico": "Información Relating to Copyright Estado",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Personal Creador",
            "b": "Personal Creador death Fecha",
            "c": "Corporate Creador",
            "d": "Titular de copyright",
            "e": "Copyright holder contact Información",
            "f": "Copyright Indicación",
            "g": "Copyright Fecha",
            "h": "Copyright renewal Fecha",
            "i": "Fecha de publicación",
            "j": "Creation Fecha",
            "k": "Editor",
            "l": "Copyright Estado",
            "m": "Publicación Estado",
            "n": "Nota",
            "o": "Research Fecha",
            "p": "País de publicación o creación",
            "q": "Agencia suministradora",
            "r": "Jurisdicción de evaluación de copyright",
            "s": "Fuente de información",
            "u": "Identificador uniforme de recursos (URI)"
        },
        "indicador_1": {
            "0": "Privado",
            "1": "No privado",
            " ": "Indefinido",
            "#": "Sin información"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "544": {
        "nombre_generico": "Nota de location of other archival materials",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Custodio",
            "b": "Dirección",
            "c": "País",
            "d": "Título",
            "e": "Procedencia",
            "n": "Nota"
        },
        "indicador_1": {
            "0": "Asociado materials",
            "1": "Relacionado materials",
            " ": "Indefinido",
            "#": "Sin información"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "545": {
        "nombre_generico": "Biographical or Historical Datos",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Biographical or historical Datos",
            "b": "Expansión",
            "u": "Identificador uniforme de recursos (URI)"
        },
        "indicador_1": {
            "0": "Semblanza biográfica",
            "1": "Historia administrativa",
            " ": "Indefinido",
            "#": "Sin información"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "546": {
        "nombre_generico": "Nota de idioma",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "3": "Materiales especificados",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Nota de idioma",
            "b": "Código de información"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "547": {
        "nombre_generico": "Nota de former title complexity",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Anterior Título complexity Nota"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "550": {
        "nombre_generico": "Nota de issuing body",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Issuing body Nota"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "552": {
        "nombre_generico": "Nota de entity and attribute information",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Entity Tipo label",
            "b": "Definición y fuente del tipo de entidad",
            "c": "Etiqueta de atributo",
            "d": "Definición y fuente del atributo",
            "e": "Valor de dominio enumerado",
            "f": "Definición y fuente del valor de dominio enumerado",
            "g": "Mínimo y máximo del dominio de rango",
            "h": "Nombre y fuente del conjunto de códigos",
            "i": "Dominio no representable",
            "j": "Unidades de medida y resolución del atributo",
            "k": "Fecha inicial y final de los valores del atributo",
            "l": "Exactitud del valor del atributo",
            "m": "Explicación de exactitud del valor del atributo",
            "n": "Frecuencia de medición de atributo",
            "o": "Panorama de entidad y atributo",
            "p": "Cita de detalle de entidad y atributo",
            "u": "Identificador uniforme de recursos (URI)",
            "z": "Mostrar nota"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "555": {
        "nombre_generico": "Nota de cumulative index/finding aids",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Cumulative index/finding aids Nota",
            "b": "Availability Fuente",
            "c": "Degree of Control",
            "d": "Referencia bibliográfica",
            "u": "Identificador uniforme de recursos (URI)"
        },
        "indicador_1": {
            "0": "Instrumentos de búsqueda",
            "8": "Sin constante de visualización generada",
            " ": "Indefinido",
            "#": "Índices"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "556": {
        "nombre_generico": "Nota de information about documentation",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Información about documentation Nota",
            "z": "ISBN"
        },
        "indicador_1": {
            "8": "Sin constante de visualización generada",
            " ": "Indefinido",
            "#": "Documentación"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "561": {
        "nombre_generico": "Historial de propiedad y custodia",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Historia",
            "u": "Identificador uniforme de recursos (URI)"
        },
        "indicador_1": {
            "0": "Privado",
            "1": "No privado",
            " ": "Indefinido",
            "#": "Sin información"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "562": {
        "nombre_generico": "Nota de copy and version identification",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Marcas identificativas",
            "b": "Identificación de ejemplar",
            "c": "Versión identification",
            "d": "Formato de presentación",
            "e": "Número de ejemplares"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "563": {
        "nombre_generico": "Binding Información",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Binding Nota",
            "u": "Identificador uniforme de recursos (URI)"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "565": {
        "nombre_generico": "Nota de case file characteristics",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Número de casos/variables",
            "b": "Nombre de la variable",
            "c": "Unidad de análisis",
            "d": "Universe of Datos",
            "e": "Esquema de archivo o"
        },
        "indicador_1": {
            "0": "Case file Características",
            "8": "Sin constante de visualización generada",
            " ": "Indefinido",
            "#": "Tamaño de archivo"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "567": {
        "nombre_generico": "Nota de methodology",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente del término",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Methodology Nota",
            "b": "Controlled Término"
        },
        "indicador_1": {
            "8": "Sin constante de visualización generada",
            " ": "Indefinido",
            "#": "Metodología"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "580": {
        "nombre_generico": "Nota de linking entry complexity",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Linking Entrada complexity Nota"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "581": {
        "nombre_generico": "Nota de publications about described materials",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Publications about described materials Nota",
            "z": "ISBN"
        },
        "indicador_1": {
            "8": "Sin constante de visualización generada",
            " ": "Indefinido",
            "#": "Publicaciones"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "583": {
        "nombre_generico": "Nota de action",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Fuente del término",
            "3": "Materiales especificados",
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Acción",
            "b": "Acción identification",
            "c": "Fecha/hora de la acción",
            "d": "Acción interval",
            "e": "Contingency for Acción",
            "f": "Autorización",
            "h": "Jurisdicción",
            "i": "Método de acción",
            "j": "Lugar de la acción",
            "k": "Acción Agente",
            "l": "Estado",
            "n": "Extensión",
            "o": "Tipo de unidad",
            "u": "Identificador uniforme de recursos (URI)",
            "x": "Nota no pública",
            "z": "Nota pública"
        },
        "indicador_1": {
            "0": "Privado",
            "1": "No privado",
            " ": "Indefinido",
            "#": "Sin información"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "584": {
        "nombre_generico": "Nota de accumulation and frequency of use",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Acumulación",
            "b": "Frecuencia de uso"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "585": {
        "nombre_generico": "Nota de exhibitions",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Exhibitions Nota"
        },
        "indicador_1": {
            " ": "Indefinido",
            "#": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "586": {
        "nombre_generico": "Nota de awards",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Awards Nota"
        },
        "indicador_1": {
            "8": "Sin constante de visualización generada",
            " ": "Indefinido",
            "#": "Premios"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "588": {
        "nombre_generico": "Nota de source of description",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Nota de fuente de descripción"
        },
        "indicador_1": {
            "0": "Fuente de descripción",
            "1": "Último número consultado",
            " ": "Indefinido",
            "#": "Sin información"
        },
        "indicador_2": {
            " ": "Indefinido",
            "#": "Indefinido"
        }
    },
    "598": {
        "nombre_generico": "Nota local",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "a": "Nota local"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "600": {
        "nombre_generico": "Materia - Personal",
        "repetible": true,
        "predeterminados": [
            "a",
            "v"
        ],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente de encabezamiento o término",
            "3": "Materiales especificados",
            "4": "Relación",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Nombre personal",
            "v": "Subdivisión de forma",
            "x": "Subdivisión general",
            "y": "Subdivisión cronológica",
            "z": "Subdivisión geográfica",
            "b": "Numeración",
            "c": "Títulos y otras palabras asociadas a un nombre",
            "d": "Dates Asociado with a Nombre",
            "e": "Término de relator",
            "f": "Fecha de una obra",
            "g": "Información miscelánea",
            "h": "Medio",
            "j": "Calificador de atribución",
            "k": "Subencabezamiento de forma",
            "l": "Idioma de una obra",
            "m": "Medio de interpretación para música",
            "n": "Número de parte/sección de una obra",
            "o": "Indicación de arreglo para música",
            "p": "Nombre de parte/sección de una obra",
            "q": "Forma completa del nombre",
            "r": "Tonalidad para música",
            "s": "Versión",
            "t": "Título de una obra",
            "u": "Afiliación"
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
            "4": "No especificada",
            "7": "Fuente en $2"
        }
    },
    "610": {
        "nombre_generico": "Materia - Corporativo",
        "repetible": true,
        "predeterminados": [
            "a",
            "v"
        ],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente de encabezamiento o término",
            "3": "Materiales especificados",
            "4": "Relación",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Nombre corporativo",
            "v": "Subdivisión de forma",
            "x": "Subdivisión general",
            "y": "Subdivisión cronológica",
            "z": "Subdivisión geográfica",
            "b": "Subordinado unit",
            "c": "Lugar de la reunión",
            "d": "Fecha de reunión o firma de tratado",
            "e": "Término de relator",
            "f": "Fecha de una obra",
            "g": "Información miscelánea",
            "h": "Medio",
            "k": "Subencabezamiento de forma",
            "l": "Idioma de una obra",
            "m": "Medio de interpretación para música",
            "n": "Número de parte/sección/reunión",
            "o": "Indicación de arreglo para música",
            "p": "Nombre de parte/sección de una obra",
            "r": "Tonalidad para música",
            "s": "Versión",
            "t": "Título de una obra",
            "u": "Afiliación"
        },
        "indicador_1": {
            "0": "Nombre invertido",
            "1": "Jurisdicción",
            "2": "Orden directo"
        },
        "indicador_2": {
            "0": "LC",
            "2": "MeSH",
            "4": "No especificada",
            "7": "Fuente en $2"
        }
    },
    "611": {
        "nombre_generico": "Entrada secundaria de materia-Nombre de reunión",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente de encabezamiento o término",
            "3": "Materiales especificados",
            "4": "Relación",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Nombre de reunión o jurisdicción como elemento de entrada",
            "c": "Lugar de la reunión",
            "d": "Fecha de reunión o firma de tratado",
            "e": "Subordinado unit",
            "f": "Fecha de una obra",
            "g": "Información miscelánea",
            "h": "Medio",
            "j": "Término de relator",
            "k": "Subencabezamiento de forma",
            "l": "Idioma de una obra",
            "n": "Número de parte/sección/reunión",
            "p": "Nombre de parte/sección de una obra",
            "q": "Nombre de reunión posterior al elemento de entrada de jurisdicción",
            "s": "Versión",
            "t": "Título de una obra",
            "u": "Afiliación",
            "v": "Subdivisión de forma",
            "x": "Subdivisión general",
            "y": "Subdivisión cronológica",
            "z": "Subdivisión geográfica"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "630": {
        "nombre_generico": "Entrada secundaria de materia-Título uniforme",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente de encabezamiento o término",
            "3": "Materiales especificados",
            "4": "Relación",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Uniform Título",
            "d": "Fecha de firma de tratado",
            "e": "Término de relator",
            "f": "Fecha de una obra",
            "g": "Información miscelánea",
            "h": "Medio",
            "k": "Subencabezamiento de forma",
            "l": "Idioma de una obra",
            "m": "Medio de interpretación para música",
            "n": "Número de parte/sección de una obra",
            "o": "Indicación de arreglo para música",
            "p": "Nombre de parte/sección de una obra",
            "r": "Tonalidad para música",
            "s": "Versión",
            "t": "Título de una obra",
            "v": "Subdivisión de forma",
            "x": "Subdivisión general",
            "y": "Subdivisión cronológica",
            "z": "Subdivisión geográfica"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "647": {
        "nombre_generico": "Entrada secundaria de materia-Acontecimiento con nombre",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente de encabezamiento o término",
            "3": "Materiales especificados",
            "4": "Relación",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Named Acontecimiento",
            "c": "Lugar del acontecimiento con nombre",
            "d": "Fecha del acontecimiento con nombre",
            "e": "Término de relator",
            "g": "Información miscelánea",
            "v": "Subdivisión de forma",
            "x": "Subdivisión general",
            "y": "Subdivisión cronológica",
            "z": "Subdivisión geográfica"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "648": {
        "nombre_generico": "Entrada secundaria de materia-Término cronológico",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente de encabezamiento o término",
            "3": "Materiales especificados",
            "4": "Relación",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Chronological Término",
            "e": "Término de relator",
            "v": "Subdivisión de forma",
            "x": "Subdivisión general",
            "y": "Subdivisión cronológica",
            "z": "Subdivisión geográfica"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "650": {
        "nombre_generico": "Materia - Temático",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente de encabezamiento o término",
            "3": "Materiales especificados",
            "4": "Relación",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Término temático",
            "v": "Subdivisión de forma",
            "x": "Subdivisión general",
            "y": "Subdivisión cronológica",
            "z": "Subdivisión geográfica",
            "b": "Topical Término following Geográfico Nombre Entrada element",
            "c": "Lugar of Acontecimiento",
            "d": "Fechas activas",
            "e": "Término de relator",
            "g": "Información miscelánea"
        },
        "indicador_1": {
            "0": "Sin especificado",
            "1": "Primaria",
            "2": "Secundaria",
            " ": "Sin info"
        },
        "indicador_2": {
            "0": "LC",
            "1": "LC infantil",
            "2": "MeSH",
            "4": "No especificada",
            "7": "Fuente en $2"
        }
    },
    "651": {
        "nombre_generico": "Materia - Geográfico",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente de encabezamiento o término",
            "3": "Materiales especificados",
            "4": "Relación",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Nombre geográfico",
            "v": "Subdivisión de forma",
            "x": "Subdivisión general",
            "y": "Subdivisión cronológica",
            "z": "Subdivisión geográfica",
            "e": "Término de relator",
            "g": "Información miscelánea"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            "0": "LC",
            "1": "LC infantil",
            "2": "MeSH",
            "4": "No especificada",
            "7": "Fuente en $2"
        }
    },
    "653": {
        "nombre_generico": "Índice Term-Uncontrolled",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Uncontrolled Término"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "654": {
        "nombre_generico": "Entrada secundaria de materia-Términos temáticos facetados",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente de encabezamiento o término",
            "3": "Materiales especificados",
            "4": "Relación",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Focus Término",
            "b": "Non-focus Término",
            "c": "Designación de faceta/jerarquía",
            "e": "Término de relator",
            "v": "Subdivisión de forma",
            "y": "Subdivisión cronológica",
            "z": "Subdivisión geográfica"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "655": {
        "nombre_generico": "Materia - Género/forma",
        "repetible": true,
        "predeterminados": [
            "a",
            "2"
        ],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente",
            "3": "Materiales especificados",
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Término",
            "v": "Subdivisión de forma",
            "x": "Subdivisión general",
            "y": "Subdivisión cronológica",
            "z": "Subdivisión geográfica",
            "b": "Non-focus Término",
            "c": "Designación de faceta/jerarquía"
        },
        "indicador_1": {
            "0": "Facetado",
            " ": "Básico"
        },
        "indicador_2": {
            "0": "LC",
            "2": "MeSH",
            "4": "No especificada",
            "7": "Fuente en $2"
        }
    },
    "656": {
        "nombre_generico": "Índice Term-Occupation",
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
        "nombre_generico": "Índice Term-Function",
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
        "nombre_generico": "Índice Term-Curriculum Objective",
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
        "nombre_generico": "Entrada secundaria de materia-Nombre de lugar jerárquico",
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
        "nombre_generico": "Entrada secundaria de materia-Type of Entity Unspecified",
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
        "nombre_generico": "Acceso adicional - Personal",
        "repetible": true,
        "predeterminados": [
            "a",
            "d",
            "e"
        ],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente de encabezamiento o término",
            "3": "Materiales especificados",
            "4": "Relación",
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Nombre",
            "d": "Fechas",
            "e": "Término de relación",
            "t": "Título de la obra",
            "b": "Numeración",
            "c": "Títulos y otras palabras asociadas a un nombre",
            "f": "Fecha de una obra",
            "g": "Información miscelánea",
            "h": "Medio",
            "i": "Información de relación",
            "j": "Calificador de atribución",
            "k": "Subencabezamiento de forma",
            "l": "Idioma de una obra",
            "m": "Medio de interpretación para música",
            "n": "Número de parte/sección de una obra",
            "o": "Indicación de arreglo para música",
            "p": "Nombre de parte/sección de una obra",
            "q": "Forma completa del nombre",
            "r": "Tonalidad para música",
            "s": "Versión",
            "u": "Afiliación",
            "x": "Número international normalizado de publicación seriada (ISSN)"
        },
        "indicador_1": {
            "0": "Nombre de pila",
            "1": "Apellido",
            "3": "Nombre de familia"
        },
        "indicador_2": {
            "2": "Entrada analítica",
            " ": "No se provee info"
        }
    },
    "710": {
        "nombre_generico": "Acceso adicional - Corporativo",
        "repetible": true,
        "predeterminados": [
            "a",
            "b",
            "e"
        ],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente de encabezamiento o término",
            "3": "Materiales especificados",
            "4": "Relación",
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Nombre",
            "b": "Unidad",
            "e": "Término de relación",
            "c": "Lugar de la reunión",
            "d": "Fecha de reunión o firma de tratado",
            "f": "Fecha de una obra",
            "g": "Información miscelánea",
            "h": "Medio",
            "i": "Información de relación",
            "k": "Subencabezamiento de forma",
            "l": "Idioma de una obra",
            "m": "Medio de interpretación para música",
            "n": "Número de parte/sección/reunión",
            "o": "Indicación de arreglo para música",
            "p": "Nombre de parte/sección de una obra",
            "r": "Tonalidad para música",
            "s": "Versión",
            "t": "Título de una obra",
            "u": "Afiliación",
            "x": "Número international normalizado de publicación seriada (ISSN)"
        },
        "indicador_1": {
            "0": "Nombre invertido",
            "1": "Jurisdicción",
            "2": "Orden directo"
        },
        "indicador_2": {
            "2": "Entrada analítica",
            " ": "No se provee info"
        }
    },
    "711": {
        "nombre_generico": "Entrada secundaria-Nombre de reunión",
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
        "nombre_generico": "Entrada secundaria-Nombre no controlado",
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
        "nombre_generico": "Entrada secundaria-Título uniforme",
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
        "nombre_generico": "Entrada secundaria-Título analítico o relacionado no controlado",
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
        "nombre_generico": "Entrada secundaria-Nombre geográfico",
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
        "nombre_generico": "Entrada secundaria-Nombre de lugar jerárquico",
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
        "nombre_generico": "Detalles del sistema - Acceso a archivos informáticos",
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
        "nombre_generico": "Entrada secundaria-Identificación taxonómica",
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
        "nombre_generico": "Resource Identificador",
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
        "nombre_generico": "Main Serie Entrada",
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
        "nombre_generico": "Subseries Entrada",
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
        "nombre_generico": "Original Idioma Entrada",
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
        "nombre_generico": "Translation Entrada",
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
        "nombre_generico": "Supplement/Special Issue Entrada",
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
        "nombre_generico": "Supplement Parent Entrada",
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
        "nombre_generico": "Host Ítem Entrada",
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
        "nombre_generico": "Constituent Unit Entrada",
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
        "nombre_generico": "Otro Edición Entrada",
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
        "nombre_generico": "Adicional Físico Form Entrada",
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
        "nombre_generico": "Issued With Entrada",
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
        "nombre_generico": "Preceding Entrada",
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
        "nombre_generico": "Succeeding Entrada",
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
        "nombre_generico": "Datos Fuente Entrada",
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
        "nombre_generico": "Otro Relación Entrada",
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
        "nombre_generico": "Descripción paralela en otro idioma de catalogación",
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
        "nombre_generico": "Series Entrada secundaria-Nombre personal",
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
        "nombre_generico": "Series Entrada secundaria-Nombre corporativo",
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
        "nombre_generico": "Series Entrada secundaria-Nombre de reunión",
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
        "nombre_generico": "Serie - Título uniforme",
        "repetible": true,
        "predeterminados": [
            "a",
            "v"
        ],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente de encabezamiento o término",
            "3": "Materiales especificados",
            "5": "Institución a la que aplica el campo",
            "6": "Enlace",
            "7": "Control",
            "8": "Enlace de campo y número de secuencia",
            "a": "Título",
            "v": "Número/volumen",
            "d": "Fecha de firma de tratado",
            "f": "Fecha de una obra",
            "g": "Información miscelánea",
            "h": "Medio",
            "k": "Subencabezamiento de forma",
            "l": "Idioma de una obra",
            "m": "Medio de interpretación para música",
            "n": "Número de parte/sección de una obra",
            "o": "Indicación de arreglo para música",
            "p": "Nombre de parte/sección de una obra",
            "r": "Tonalidad para música",
            "s": "Versión",
            "t": "Título de una obra",
            "w": "Bibliographic Registro Control Número",
            "x": "Número international normalizado de publicación seriada (ISSN)",
            "y": "Procedencia de los datos"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            "0": "0 caracteres a omitir (ej. sin artículo)",
            "1": "1 carácter a omitir",
            "2": "2 caracteres (ej. «A »)",
            "3": "3 caracteres (ej. «El »)",
            "4": "4 caracteres (ej. «The »)",
            "5": "5 caracteres a omitir",
            "6": "6 caracteres a omitir",
            "7": "7 caracteres a omitir",
            "8": "8 caracteres a omitir",
            "9": "9 caracteres a omitir"
        }
    },
    "841": {
        "nombre_generico": "Holdings Coded Datos Values",
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
        "nombre_generico": "Textual Físico Form Designator",
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
        "nombre_generico": "Nota de reproduction",
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
        "nombre_generico": "Nombre de unidad",
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
        "nombre_generico": "Términos que rigen el uso y la reproducción",
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
        "nombre_generico": "Institución depositaria",
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
        "nombre_generico": "Localización",
        "repetible": true,
        "predeterminados": [
            "a",
            "b",
            "h",
            "i"
        ],
        "subcampos": {
            "a": "Institución",
            "b": "Sublocalización",
            "h": "Clasificación",
            "i": "Número de ítem"
        },
        "indicador_1": {
            "0": "LC",
            "1": "DDC",
            "8": "Otro",
            " ": "Sin info"
        },
        "indicador_2": {
            "0": "No por enumeración",
            "1": "Enumeración primaria",
            " ": "Sin info"
        }
    },
    "853": {
        "nombre_generico": "Leyendas y patrón - Unidad bibliográfica básica",
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
        "nombre_generico": "Leyendas y patrón - Material suplementario",
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
        "nombre_generico": "Leyendas y patrón - Índices",
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
        "nombre_generico": "Electronic Lugar and Access",
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
        "nombre_generico": "Electronic Archive Lugar and Access",
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
        "nombre_generico": "Enumeración y cronología - Unidad bibliográfica básica",
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
        "nombre_generico": "Enumeración y cronología - Material suplementario",
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
        "nombre_generico": "Enumeración y cronología - Índices",
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
        "nombre_generico": "Existencias textuales - Unidad bibliográfica básica",
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
        "nombre_generico": "Existencias textuales - Material suplementario",
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
        "nombre_generico": "Existencias textuales - Índices",
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
        "nombre_generico": "Ítem Información - Basic Bibliographic Unit",
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
        "nombre_generico": "Ítem Información - Supplementary Material",
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
        "nombre_generico": "Ítem Información - Indexes",
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
        "nombre_generico": "Representación gráfica alternativa",
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
        "nombre_generico": "Manifestación Statements",
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
        "nombre_generico": "Replacement Registro Información",
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
        "nombre_generico": "Procedencia de metadatos",
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
        "nombre_generico": "Descripción Conversion Información",
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
        "nombre_generico": "Matching Información",
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
        "nombre_generico": "Foreign MARC Información Campo",
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
        "nombre_generico": "Non-MARC Información Campo",
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
        "nombre_generico": "Datos SirsiDynix",
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
            "a": "Clasificación",
            "c": "Copia",
            "i": "Código de barras",
            "k": "Ubicación actual",
            "l": "Home Lugar",
            "t": "Tipo material"
        },
        "indicador_1": {
            " ": "Definición local"
        },
        "indicador_2": {
            " ": "Definición local"
        }
    },
    "001": {
        "nombre_generico": "Número de control",
        "repetible": false,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "005": {
        "nombre_generico": "Fecha y hora de última transacción",
        "repetible": false,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "006": {
        "nombre_generico": "Características adicionales de material",
        "repetible": false,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "007": {
        "nombre_generico": "Descripción física",
        "repetible": false,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "008": {
        "nombre_generico": "Elementos de longitud fija",
        "repetible": false,
        "predeterminados": [],
        "subcampos": {},
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "010": {
        "nombre_generico": "Número de control de la Biblioteca del Congreso",
        "repetible": false,
        "predeterminados": [
            "a",
            "b",
            "z",
            "8"
        ],
        "subcampos": {
            "8": "Enlace entre campos y número de secuencia",
            "a": "Número de control de LC",
            "b": "Número de control de NUCMC",
            "z": "Número de control de LC cancelado o no válido"
        },
        "indicador_1": {
            " ": "No definido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "013": {
        "nombre_generico": "Información de control de patentes",
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
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Número",
            "b": "País",
            "c": "Tipo de número",
            "d": "Fecha",
            "e": "Estado",
            "f": "Parte responsable del documento"
        },
        "indicador_1": {
            " ": "No definido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "015": {
        "nombre_generico": "Número de bibliografía nacional",
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
            "2": "Fuente",
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Número de bibliografía nacional",
            "q": "Información adicional",
            "z": "Número de bibliografía nacional cancelado/no válido"
        },
        "indicador_1": {
            " ": "No definido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "016": {
        "nombre_generico": "Número de control de una agencia bibliográfica nacional",
        "repetible": false,
        "predeterminados": [
            "a",
            "z",
            "2",
            "8"
        ],
        "subcampos": {
            "2": "Fuente",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Número de control del registro",
            "z": "Número de control cancelado/no válido"
        },
        "indicador_1": {
            "7": "Fuente especificada en el subcampo $2",
            " ": "Biblioteca y Archivos de Canadá"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "017": {
        "nombre_generico": "Número de copyright o de depósito legal",
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
            "2": "Fuente",
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Número de copyright o de depósito legal",
            "b": "Agencia que asigna el número",
            "d": "Fecha",
            "i": "Texto de visualización",
            "z": "Número de copyright o de depósito legal cancelado/no válido"
        },
        "indicador_1": {
            "8": "No genera visualización asociada",
            " ": "Número de copyright o de depósito legal"
        },
        "indicador_2": {
            "8": "Sin constante de visualización generada",
            " ": "Indefinido"
        }
    },
    "018": {
        "nombre_generico": "Código de copyright sobre la tarifa del artículo",
        "repetible": false,
        "predeterminados": [
            "a",
            "6",
            "8"
        ],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Código de copyright sobre la tarifa del artículo"
        },
        "indicador_1": {
            " ": "No definido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "020": {
        "nombre_generico": "ISBN",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Número ISBN",
            "c": "Disponibilidad",
            "q": "Calificador",
            "z": "ISBN cancelado/inválido"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "022": {
        "nombre_generico": "ISSN",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "0": "Número de control del registro de autoridad o número normalizado",
            "1": "URI de un objeto del mundo real",
            "2": "Fuente",
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Número ISSN",
            "y": "ISSN incorrecto",
            "z": "ISSN cancelado"
        },
        "indicador_1": {
            "0": "Recurso continuo de interés internacional",
            "1": "Recurso continuo sin interés internacional",
            " ": "Nivel no especificado"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "023": {
        "nombre_generico": "ISSN de grupo",
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
            "0": "Número de control del registro de autoridad o número normalizado",
            "1": "URI de un objeto del mundo real",
            "2": "Fuente",
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "ISSN de grupo",
            "y": "ISSN de grupo incorrecto",
            "z": "ISSN de grupo cancelado"
        },
        "indicador_1": {
            "0": "ISSN-L",
            "1": "ISSN-H",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "024": {
        "nombre_generico": "Otros identificadores normalizados",
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
            "2": "Fuente del número o código",
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Número normalizado o código",
            "c": "Condiciones de disponibilidad",
            "d": "Códigos adicionales que siguen al número normalizado o código",
            "q": "Información adicional",
            "z": "Número normalizado o código cancelado/no válido"
        },
        "indicador_1": {
            "0": "Código Internacional Normalizado para Grabaciones",
            "1": "Código Universal de Producto",
            "2": "Número Internacional Normalizado para Música",
            "3": "Número Internacional de Artículo",
            "4": "Identificador de número y contribución de publicación seriada",
            "7": "Fuente especificada en el subcampo $2",
            "8": "Tipo no especificado de número normalizado o código",
            " ": "No se proporciona información"
        },
        "indicador_2": {
            "0": "Sin difference",
            "1": "Diferencia",
            " ": "Indefinido"
        }
    },
    "025": {
        "nombre_generico": "Número de adquisición en el extranjero",
        "repetible": false,
        "predeterminados": [
            "a",
            "8"
        ],
        "subcampos": {
            "8": "Enlace entre campos y número de secuencia",
            "a": "Número de adquisición en el extranjero"
        },
        "indicador_1": {
            " ": "No definido      # - No definido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "026": {
        "nombre_generico": "Identificador tipográfico",
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
            "2": "Fuente",
            "5": "Institución que aplica el campo",
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Primer y segundo grupo de caracteres",
            "b": "Tercer y cuarto grupo de caracteres",
            "c": "Fecha",
            "d": "Número de volumen o parte",
            "e": "Identificador tipográfico no disgregado"
        },
        "indicador_1": {
            " ": "No definido       # - No definido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "027": {
        "nombre_generico": "Número Normalizado de Informe Técnico",
        "repetible": false,
        "predeterminados": [
            "a",
            "q",
            "z",
            "6",
            "8"
        ],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Número Normalizado de Informe Técnico",
            "q": "Información adicional",
            "z": "Número cancelado/no válido"
        },
        "indicador_1": {
            " ": "No definido       # - No definido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "028": {
        "nombre_generico": "Número de editor",
        "repetible": false,
        "predeterminados": [
            "a",
            "b",
            "q",
            "6",
            "8"
        ],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Número de editor o de distribuidor",
            "b": "Fuente",
            "q": "Información adicional"
        },
        "indicador_1": {
            "0": "Número de publicación",
            "1": "Número de matriz",
            "2": "Número de plancha",
            "3": "Otro número de editor de música    3 - No hay nota, hay punto de acceso adiciona",
            "4": "Número de editor de la videograbación",
            "5": "Otro número de editor",
            "6": "Distributor Número",
            " ": "Indefinido"
        },
        "indicador_2": {
            "0": "Sin note, no added entry",
            "1": "Nota, added Entrada",
            "2": "Nota, no added Entrada",
            "3": "Sin note, added entry",
            " ": "Indefinido"
        }
    },
    "030": {
        "nombre_generico": "Designación CODEN",
        "repetible": false,
        "predeterminados": [
            "a",
            "z",
            "6",
            "8"
        ],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "CODEN",
            "z": "CODEN cancelado/no válido"
        },
        "indicador_1": {
            " ": "No definido      # - No definido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "031": {
        "nombre_generico": "Información del íncipit musical",
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
            "2": "Código del sistema",
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Número de la obra",
            "b": "Número del movimiento",
            "c": "Número del pasaje",
            "d": "Título o encabezamiento",
            "e": "Personaje",
            "g": "Clave",
            "m": "Voz/instrumento",
            "n": "Armadura",
            "o": "Compás",
            "p": "Notación musical",
            "q": "Nota general",
            "r": "Tonalidad o modo",
            "s": "Nota de validez codificada",
            "t": "Texto del íncipit",
            "u": "Identificador Uniforme del Recurso",
            "y": "Texto del enlace",
            "z": "Nota pública"
        },
        "indicador_1": {
            " ": "No definido      # - No definido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "032": {
        "nombre_generico": "Número de registro postal",
        "repetible": false,
        "predeterminados": [
            "a",
            "z",
            "6",
            "8",
            "b"
        ],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Número de registro postal",
            "b": "- Agencia que asigna el número",
            "z": "Agencia que asigna el número"
        },
        "indicador_1": {
            " ": "No definido      # - No definido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "033": {
        "nombre_generico": "Fecha/hora y lugar de un acontecimiento",
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
            "0": "Número de control del registro de autoridad o número normalizado",
            "1": "URI de un objeto del mundo real",
            "2": "Fuente del término",
            "3": "Especificación de materiales",
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Fecha/hora formateada",
            "b": "Código de clasificación de área geográfica",
            "c": "Código de clasificación de subárea geográfica",
            "p": "Lugar del acontecimiento"
        },
        "indicador_1": {
            "0": "Captura",
            "1": "Emisión",
            "2": "Rango de fechas",
            " ": "No se proporciona información"
        },
        "indicador_2": {
            "0": "Captura",
            "1": "Difusión",
            "2": "Hallazgo",
            " ": "Indefinido"
        }
    },
    "034": {
        "nombre_generico": "Datos matemáticos cartográficos codificados",
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
            "0": "Número de control del registro de autoridad o número normalizado",
            "1": "URI de un objeto del mundo real",
            "2": "Fuente",
            "3": "Especificación de materiales",
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Tipo de scala",
            "b": "Escala horizontal lineal",
            "c": "Escala vertical lineal",
            "d": "Coordenadas - longitud más occidental",
            "e": "Coordenadas - longitud más oriental",
            "f": "Coordenadas - latitud más septentrional",
            "g": "Coordenadas - latitud más meridional",
            "h": "Escala angular",
            "j": "Declinación-límite septentrional",
            "k": "Declinación-límite meridional",
            "m": "Ascensión recta-límite oriental",
            "n": "Ascensión recta-límite occidental",
            "p": "Equinoccio",
            "r": "Distancia desde la tierra",
            "s": "Latitud del anillo-G",
            "t": "Longitud del anillo-G",
            "x": "Fecha de inicio",
            "y": "Fecha de finalización",
            "z": "Nombre del cuerpo extraterrestre"
        },
        "indicador_1": {
            "0": "Escala indeterminable/No figura escala   # - No aplicable",
            "1": "Escala única      0 - Anillo  exterior",
            "3": "Rango de escalas     1 - Anillo de exclusión",
            " ": "Indefinido"
        },
        "indicador_2": {
            "0": "Anillo exterior",
            "1": "Anillo de exclusión",
            " ": "Indefinido"
        }
    },
    "035": {
        "nombre_generico": "Número de control del sistema",
        "repetible": false,
        "predeterminados": [
            "a",
            "z",
            "6",
            "8"
        ],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Número de control del sistema",
            "z": "Número de control cancelado/no válido"
        },
        "indicador_1": {
            " ": "No definido      # - No definido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "036": {
        "nombre_generico": "Número de estudio original para archivos de ordenador",
        "repetible": false,
        "predeterminados": [
            "a",
            "b",
            "6",
            "8",
            "z"
        ],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Número de estudio original",
            "b": "Fuente",
            "z": "- Fuente"
        },
        "indicador_1": {
            " ": "No definido      # - No definido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "037": {
        "nombre_generico": "Fuente de adquisición",
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
            "3": "Especificación de materiales",
            "5": "Institución que aplica el campo",
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Número de adquisición",
            "b": "Fuente del número de adquisición",
            "c": "Condiciones de disponibilidad",
            "f": "Formato de la publicación",
            "g": "Características adicionales del formato",
            "n": "Nota"
        },
        "indicador_1": {
            "2": "Intercalado",
            "3": "Actual / Última",
            " ": "No aplicable / No se da información / Primera    # - No definido2 - Intermedia"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "038": {
        "nombre_generico": "Licenciador del contenido del registro",
        "repetible": false,
        "predeterminados": [
            "a",
            "6",
            "8"
        ],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Licenciador del contenido del registro"
        },
        "indicador_1": {
            " ": "No definido      # - No definido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "040": {
        "nombre_generico": "Fuente de catalogación",
        "repetible": false,
        "predeterminados": [
            "a",
            "b",
            "c",
            "e"
        ],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Agencia original",
            "b": "Idioma",
            "c": "Agencia transcriptora",
            "e": "Convenciones descriptivas",
            "d": "Centro modificador"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "041": {
        "nombre_generico": "Código de idioma",
        "repetible": true,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "2": "Fuente del código",
            "3": "Especificación de materiales",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Idioma del texto",
            "b": "Idioma del resumen",
            "d": "Cantado/hablado",
            "h": "Idioma original",
            "e": "Código de lengua de los libretos",
            "f": "Código de lengua de la tabla de contenido",
            "g": "Código de lengua del material anejo si no son libretos ni transcripciones",
            "i": "Código de lengua de los intertítulos",
            "j": "Código de lengua de los subtítulos",
            "k": "Código de lengua de las traducciones intermedias",
            "m": "Código de lengua del material anejo original si no son libretos",
            "n": "Código de lengua del libreto original",
            "p": "Código de lengua de los subtítulos accesibles abiertos o cerrados",
            "q": "Código de lengua de audio accesible",
            "r": "Código de lengua de lenguaje visual accesible",
            "t": "Código de lengua de las transcripciones anejas para materiales audiovisuales"
        },
        "indicador_1": {
            "0": "No es traducción",
            "1": "Es o incluye traducción",
            "#": "Sin información"
        },
        "indicador_2": {
            "7": "Fuente especificada en subcampo $2",
            " ": "Código MARC"
        }
    },
    "042": {
        "nombre_generico": "Código de autenticación",
        "repetible": false,
        "predeterminados": [
            "a"
        ],
        "subcampos": {
            "a": "Código de autenticación"
        },
        "indicador_1": {
            " ": "No definido      # - No definido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "043": {
        "nombre_generico": "Código de área geográfica",
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
            "0": "Número de control del registro de autoridad o número normalizado",
            "1": "URI de un objeto del mundo real",
            "2": "Fuente del código local",
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Código de área geográfica",
            "b": "Código local GAC",
            "c": "Código ISO"
        },
        "indicador_1": {
            " ": "No definido      # - No definido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "044": {
        "nombre_generico": "Código del país de la entidad editora/productora",
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
            "2": "Fuente del código de subentidad local",
            "6": "Enlace",
            "8": "Enlace entre campos y número de secuencia",
            "a": "Código MARC del país",
            "b": "Código de subentidad local",
            "c": "Código ISO del país"
        },
        "indicador_1": {
            " ": "No definido      # - No definido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "045": {
        "nombre_generico": "Periodo de tiempo del contenido",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Datos",
            "b": "Periodo temporal formateado 9999 a.C. a e.C.",
            "c": "Periodo temporal formateado anterior a 9999 a.C."
        },
        "indicador_1": {
            "0": "Fecha/hora única",
            "1": "Múltiples fechas/horas individuales",
            "2": "Rango de fechas/horas",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "046": {
        "nombre_generico": "Fechas con codificación especial",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Fuente de fecha",
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Datos",
            "b": "Fecha 1, B.C.E. Fecha",
            "c": "Fecha 1, C.E. Fecha",
            "d": "Fecha 2, B.C.E. Fecha",
            "e": "Fecha 2, C.E. Fecha",
            "j": "Fecha resource modified",
            "k": "Inicio or single Fecha created",
            "l": "Fin Fecha created",
            "m": "Inicio of Fecha valid",
            "n": "End of Fecha valid",
            "o": "Single or Inicial Fecha for aggregated Contenido",
            "p": "Fin Fecha for aggregated Contenido",
            "x": "Nota no pública",
            "z": "Nota pública"
        },
        "indicador_1": {
            "1": "Obra",
            "2": "Expresión",
            "3": "Manifestación",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "047": {
        "nombre_generico": "Código de forma de la composición musical",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Fuente de",
            "8": "Enlace de campo y número de secuencia",
            "a": "Datos"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            "7": "Fuente especificada en subcampo $2",
            " ": "Indefinido"
        }
    },
    "048": {
        "nombre_generico": "Código del número de instrumentos musicales o voces",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Fuente de",
            "8": "Enlace de campo y número de secuencia",
            "a": "Datos",
            "b": "Solista"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            "7": "Fuente especificada en subcampo $2",
            " ": "Indefinido"
        }
    },
    "050": {
        "nombre_generico": "Clasificación (LC)",
        "repetible": true,
        "predeterminados": [
            "a",
            "b"
        ],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "3": "Materiales especificados",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Número de clasificación",
            "b": "Número de ítem"
        },
        "indicador_1": {
            "0": "Ítem está en LC",
            "1": "Ítem no está en LC",
            " ": "Sin información"
        },
        "indicador_2": {
            "0": "Asignado por LC",
            "4": "Asignado por agencia distinta a LC",
            " ": "Indefinido"
        }
    },
    "051": {
        "nombre_generico": "Mención de la Biblioteca del Congreso sobre ejemplares, edición o separata",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "8": "Enlace de campo y número de secuencia",
            "a": "Datos",
            "b": "Número de ítem",
            "c": "Información de ejemplar"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "052": {
        "nombre_generico": "Clasificación geográfica",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Código Fuente",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Datos",
            "b": "Geográfico classification subarea",
            "d": "Populated Lugar Nombre"
        },
        "indicador_1": {
            "1": "Clasificación del Departamento de Defensa de EE. UU.",
            "7": "Fuente especificada en subcampo $2",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "055": {
        "nombre_generico": "Números de clasificación asignados en Canadá",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Fuente del número de signatura/clasificación",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Datos",
            "b": "Número de ítem"
        },
        "indicador_1": {
            "0": "Obra en poder de LAC",
            "1": "Obra no en poder de LAC",
            " ": "Indefinido"
        },
        "indicador_2": {
            "0": "LCC (or LCC-compatible) call Número assigned by LAC",
            "1": "Complete LC class number assigned by LAC",
            "2": "Incomplete LC class number assigned by LAC",
            "3": "LC-based call number assigned by the contributing library",
            "4": "Número de clase LC completo asignado por la biblioteca contribuyente",
            "5": "Número de clase LC incompleto asignado por la biblioteca contribuyente",
            "6": "Otro call Número assigned by LAC",
            "7": "Otro class Número assigned by LAC",
            "8": "Other call number assigned by the contributing library",
            "9": "Otro class Número assigned by a Canadian organization Otro than LAC",
            " ": "Indefinido"
        }
    },
    "060": {
        "nombre_generico": "Signatura de la National Library of Medicine",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Datos",
            "b": "Número de ítem"
        },
        "indicador_1": {
            "0": "Ítem is in NLM",
            "1": "Ítem is not in NLM",
            " ": "Indefinido"
        },
        "indicador_2": {
            "0": "Asignado por NLM",
            "4": "Assigned by agency Otro than NLM",
            " ": "Indefinido"
        }
    },
    "061": {
        "nombre_generico": "Indicación de ejemplar de la National Library of Medicine",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "8": "Enlace de campo y número de secuencia",
            "a": "Datos",
            "b": "Número de ítem",
            "c": "Información de ejemplar"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "066": {
        "nombre_generico": "Juego de caracteres utilizado",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "a": "Datos",
            "b": "Primaria G1 character set",
            "c": "Juego de caracteres alternativo G0 o G1"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "070": {
        "nombre_generico": "Signatura topográfica de la National Agricultural Library",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Datos",
            "b": "Número de ítem"
        },
        "indicador_1": {
            "0": "Ítem is in NAL",
            "1": "Ítem is not in NAL",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "071": {
        "nombre_generico": "Mención de la National Agricultural Library sobre ejemplares",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "8": "Enlace de campo y número de secuencia",
            "a": "Datos",
            "b": "Número de ítem",
            "c": "Información de ejemplar"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "072": {
        "nombre_generico": "Código de categoría de materia",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "2": "Fuente",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Datos",
            "x": "Materia category Código subdivision"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            "0": "NAL Materia category Código list",
            "7": "Fuente especificada en subcampo $2",
            " ": "Indefinido"
        }
    },
    "074": {
        "nombre_generico": "Número de documento de la GPO",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "8": "Enlace de campo y número de secuencia",
            "a": "Datos",
            "z": "Canceled/invalid GPO Ítem Número"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "080": {
        "nombre_generico": "Número de la Clasificación Decimal Universal",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Edición Identificador",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Datos",
            "b": "Número de ítem",
            "x": "Subdivisión auxiliar común"
        },
        "indicador_1": {
            "0": "Completo",
            "1": "Edición abreviada",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "082": {
        "nombre_generico": "Clasificación (DDC)",
        "repetible": true,
        "predeterminados": [
            "a",
            "2"
        ],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Número de edición",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Número de clasificación",
            "b": "Número de ítem",
            "m": "Normalizado or optional designation",
            "q": "Agencia asignadora"
        },
        "indicador_1": {
            "0": "Edición completa",
            "1": "Edición abreviada",
            "7": "Otro Edición specified in Subcampo $2",
            " ": "Indefinido"
        },
        "indicador_2": {
            "0": "Asignado por LC",
            "4": "Asignado por otra agencia",
            " ": "Indefinido"
        }
    },
    "083": {
        "nombre_generico": "Número adicional de la Clasificación Decimal Dewey",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Edición Información",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Datos",
            "c": "Número de clasificación — número final del intervalo",
            "m": "Normalizado or optional designation",
            "q": "Agencia asignadora",
            "y": "Table sequence Número for internal subarrangement or add table",
            "z": "Identificación de tabla"
        },
        "indicador_1": {
            "0": "Full Edición",
            "1": "Abridged Edición",
            "7": "Otro Edición specified in Subcampo $2",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "084": {
        "nombre_generico": "Otro número de clasificación",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Número Fuente",
            "6": "Enlace",
            "7": "Procedencia de los datos",
            "8": "Enlace de campo y número de secuencia",
            "a": "Datos",
            "b": "Número de ítem",
            "q": "Agencia asignadora"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "085": {
        "nombre_generico": "Componentes de un número de clasificación sintético",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Datos",
            "b": "Base Número",
            "c": "Número de clasificación — número final del intervalo",
            "f": "Designador de faceta",
            "r": "Root Número",
            "s": "Digits added from classification Número in schedule or external table",
            "t": "Dígitos añadidos de subordenación interna o tabla de adición",
            "u": "Número being analyzed",
            "v": "Número in internal subarrangement or add table where instructions are found",
            "w": "Identificación de tabla - Subordenación interna o tabla de adición",
            "y": "Table sequence Número for internal subarrangement or add table",
            "z": "Identificación de tabla"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "086": {
        "nombre_generico": "Número de clasificación para documentos gubernamentales",
        "repetible": true,
        "predeterminados": [],
        "subcampos": {
            "0": "Número de control de registro de autoridad o número normalizado",
            "1": "URI de objeto del mundo real",
            "2": "Número Fuente",
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Datos",
            "z": "Canceled/invalid classification Número"
        },
        "indicador_1": {
            "0": "Sistema de clasificación del Superintendent of Documents",
            "1": "Publicaciones del Gobierno de Canadá: Esquema de clasificación",
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "088": {
        "nombre_generico": "Número de informe",
        "repetible": false,
        "predeterminados": [],
        "subcampos": {
            "6": "Enlace",
            "8": "Enlace de campo y número de secuencia",
            "a": "Datos",
            "z": "Canceled/invalid report Número"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "092": {
        "nombre_generico": "Clasificación Dewey (Local)",
        "repetible": true,
        "predeterminados": [
            "a",
            "b"
        ],
        "subcampos": {
            "a": "Clasificación local",
            "b": "Ítem local"
        },
        "indicador_1": {
            " ": "Indefinido"
        },
        "indicador_2": {
            " ": "Indefinido"
        }
    },
    "003": {
        "nombre_generico": "Control Número Identificador",
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
        "nombre_generico": "Control Número for Relacionado Bibliographic Registro",
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
        "nombre_generico": "Enlace Número",
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
        "nombre_generico": "Signaturas locales",
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
        "nombre_generico": "Notas locales",
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
        "nombre_generico": "Local Materia Access Fields",
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

    global.marcCatEsFieldSpecs = {
    "008": {
        "common": [
            {
                "start": 0,
                "len": 6,
                "pos": "00-05",
                "name": "Fecha entrada",
                "kind": "text",
                "group": "fechas",
                "noPad": true,
                "placeholder": "YYMMDD",
                "hint": "Fecha de catalogación (yyMMdd)."
            },
            {
                "start": 6,
                "len": 1,
                "pos": "06",
                "name": "Tipo de fecha",
                "kind": "select",
                "group": "fechas"
            },
            {
                "start": 7,
                "len": 4,
                "pos": "07-10",
                "name": "Fecha 1",
                "kind": "text",
                "group": "fechas",
                "noPad": true
            },
            {
                "start": 11,
                "len": 4,
                "pos": "11-14",
                "name": "Fecha 2",
                "kind": "text",
                "group": "fechas",
                "noPad": true
            },
            {
                "start": 15,
                "len": 3,
                "pos": "15-17",
                "name": "Lugar publicación",
                "kind": "select3",
                "group": "pub"
            },
            {
                "start": 35,
                "len": 3,
                "pos": "35-37",
                "name": "Idioma",
                "kind": "select3",
                "group": "lang"
            },
            {
                "start": 38,
                "len": 1,
                "pos": "38",
                "name": "Registro modificado",
                "kind": "select",
                "group": "lang"
            },
            {
                "start": 39,
                "len": 1,
                "pos": "39",
                "name": "Fuente catalogación",
                "kind": "select",
                "group": "lang"
            }
        ],
        "multi4": {
            "illus": [
                [
                    "#",
                    "Sin ilustraciones"
                ],
                [
                    "a",
                    "Ilustraciones"
                ],
                [
                    "b",
                    "Mapas"
                ],
                [
                    "c",
                    "Retratos"
                ],
                [
                    "d",
                    "Gráficos"
                ],
                [
                    "e",
                    "Planos"
                ],
                [
                    "f",
                    "Láminas"
                ],
                [
                    "g",
                    "Música"
                ],
                [
                    "h",
                    "Facsímiles"
                ],
                [
                    "i",
                    "Escudos de armas"
                ],
                [
                    "j",
                    "Tablas genealógicas"
                ],
                [
                    "k",
                    "Formularios"
                ],
                [
                    "l",
                    "Muestras"
                ],
                [
                    "m",
                    "Discos"
                ],
                [
                    "o",
                    "Fotografías"
                ],
                [
                    "p",
                    "Iluminaciones"
                ]
            ],
            "nature": [
                [
                    "#",
                    "No especificada"
                ],
                [
                    "a",
                    "Resúmenes/sumarios"
                ],
                [
                    "b",
                    "Bibliografías"
                ],
                [
                    "c",
                    "Catálogos"
                ],
                [
                    "d",
                    "Diccionarios"
                ],
                [
                    "e",
                    "Enciclopedias"
                ],
                [
                    "f",
                    "Manuales"
                ],
                [
                    "g",
                    "Artículos sobre temas legales"
                ],
                [
                    "i",
                    "Índices"
                ],
                [
                    "j",
                    "Documentos de patente"
                ],
                [
                    "k",
                    "Discografías"
                ],
                [
                    "l",
                    "Legislación"
                ],
                [
                    "m",
                    "Tesis"
                ],
                [
                    "n",
                    "Estado de la cuestión"
                ],
                [
                    "o",
                    "Reseñas"
                ],
                [
                    "p",
                    "Textos programados"
                ],
                [
                    "q",
                    "Filmografías"
                ],
                [
                    "r",
                    "Directorios"
                ],
                [
                    "s",
                    "Estadísticas"
                ],
                [
                    "t",
                    "Informes técnicos"
                ],
                [
                    "u",
                    "Normas/Especificaciones"
                ],
                [
                    "v",
                    "Jurisprudencia comentada"
                ],
                [
                    "w",
                    "Sentencias y resoluciones"
                ],
                [
                    "y",
                    "Anuarios"
                ],
                [
                    "z",
                    "Tratados"
                ],
                [
                    "2",
                    "Separatas"
                ],
                [
                    "5",
                    "Calendarios"
                ],
                [
                    "6",
                    "Cómics/Novelas gráficas"
                ]
            ],
            "relief": [
                [
                    "#",
                    "Sin relieve"
                ],
                [
                    "a",
                    "Curvas de nivel"
                ],
                [
                    "b",
                    "Sombreado"
                ],
                [
                    "c",
                    "Tintas hipsométricas"
                ],
                [
                    "d",
                    "Normales"
                ],
                [
                    "e",
                    "Batimetría por sondas"
                ],
                [
                    "f",
                    "Contornos de formas"
                ],
                [
                    "g",
                    "Batimetría por isolíneas"
                ],
                [
                    "h",
                    "Hachuras"
                ],
                [
                    "i",
                    "Pictorial"
                ],
                [
                    "j",
                    "Formas de relieve"
                ],
                [
                    "k",
                    "Modelo en relieve"
                ],
                [
                    "m",
                    "Batimetría por sombreado"
                ],
                [
                    "z",
                    "Otro"
                ]
            ]
        },
        "profiles": {
            "books": {
                "label": "Libros",
                "extension": [
                    {
                        "start": 18,
                        "len": 4,
                        "pos": "18-21",
                        "name": "Ilustraciones (4)",
                        "kind": "multi4",
                        "group": "illus",
                        "multi4Set": "illus"
                    },
                    {
                        "start": 22,
                        "len": 1,
                        "pos": "22",
                        "name": "Público destinatario",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 23,
                        "len": 1,
                        "pos": "23",
                        "name": "Forma de la publicación",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 24,
                        "len": 4,
                        "pos": "24-27",
                        "name": "Naturaleza del contenido (4)",
                        "kind": "multi4",
                        "group": "content",
                        "multi4Set": "nature"
                    },
                    {
                        "start": 28,
                        "len": 1,
                        "pos": "28",
                        "name": "Publicación oficial",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 29,
                        "len": 1,
                        "pos": "29",
                        "name": "Congresos",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 30,
                        "len": 1,
                        "pos": "30",
                        "name": "Homenajes",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 31,
                        "len": 1,
                        "pos": "31",
                        "name": "Índice",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 32,
                        "len": 1,
                        "pos": "32",
                        "name": "No definida",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 33,
                        "len": 1,
                        "pos": "33",
                        "name": "Forma literaria",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 34,
                        "len": 1,
                        "pos": "34",
                        "name": "Biografía",
                        "kind": "select",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "6": [
                        [
                            " ",
                            "Sin tipo / blanco"
                        ],
                        [
                            "b",
                            "Antes del año 1000"
                        ],
                        [
                            "c",
                            "1001-999"
                        ],
                        [
                            "d",
                            "Fecha 1 y 2"
                        ],
                        [
                            "e",
                            "Fechas detalladas"
                        ],
                        [
                            "i",
                            "Colección inclusiva"
                        ],
                        [
                            "k",
                            "Rango BCE"
                        ],
                        [
                            "m",
                            "Múltiples fechas"
                        ],
                        [
                            "n",
                            "Fecha desconocida / probable"
                        ],
                        [
                            "p",
                            "Distribución"
                        ],
                        [
                            "q",
                            "Fecha cuestionable"
                        ],
                        [
                            "r",
                            "Reimpresión / reedición"
                        ],
                        [
                            "s",
                            "Fecha única de publicación"
                        ],
                        [
                            "t",
                            "Fecha de publicación"
                        ],
                        [
                            "u",
                            "Publicación continua"
                        ]
                    ],
                    "15": [
                        [
                            "   ",
                            "Sin lugar / blanco"
                        ],
                        [
                            "xxu",
                            "Lugar desconocido"
                        ],
                        [
                            "xx ",
                            "Sin lugar"
                        ],
                        [
                            "cau",
                            "California"
                        ],
                        [
                            "nyu",
                            "Nueva York"
                        ],
                        [
                            "enk",
                            "Inglaterra"
                        ],
                        [
                            "sp ",
                            "España"
                        ],
                        [
                            "mx ",
                            "México"
                        ],
                        [
                            "fr ",
                            "Francia"
                        ],
                        [
                            "gw ",
                            "Alemania"
                        ],
                        [
                            "it ",
                            "Italia"
                        ],
                        [
                            "be ",
                            "Bélgica"
                        ],
                        [
                            "ne ",
                            "Países Bajos"
                        ],
                        [
                            "sz ",
                            "Suiza"
                        ],
                        [
                            "au ",
                            "Austria"
                        ],
                        [
                            "pl ",
                            "Polonia"
                        ],
                        [
                            "ru ",
                            "Rusia"
                        ],
                        [
                            "ja ",
                            "Japón"
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
                            "Brasil"
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
                            "Perú"
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
                            "Sin ilustraciones"
                        ],
                        [
                            "a",
                            "Ilustraciones"
                        ],
                        [
                            "b",
                            "Mapas"
                        ],
                        [
                            "c",
                            "Portraits"
                        ],
                        [
                            "d",
                            "Gráficos"
                        ],
                        [
                            "e",
                            "Plans"
                        ],
                        [
                            "f",
                            "Láminas"
                        ],
                        [
                            "g",
                            "Música"
                        ],
                        [
                            "h",
                            "Facsímiles"
                        ],
                        [
                            "i",
                            "Escudos de armas"
                        ],
                        [
                            "j",
                            "Tablas genealógicas"
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
                            "Discos"
                        ],
                        [
                            "o",
                            "Fotografías"
                        ],
                        [
                            "p",
                            "Illuminations"
                        ]
                    ],
                    "22": [
                        [
                            "#",
                            "Desconocido o no especificado"
                        ],
                        [
                            "a",
                            "Preescolar"
                        ],
                        [
                            "b",
                            "Primaria"
                        ],
                        [
                            "c",
                            "Pre-adolescente"
                        ],
                        [
                            "d",
                            "Adolescente"
                        ],
                        [
                            "e",
                            "Adultos"
                        ],
                        [
                            "f",
                            "Especializado"
                        ],
                        [
                            "g",
                            "General"
                        ],
                        [
                            "j",
                            "Juvenil"
                        ]
                    ],
                    "23": [
                        [
                            "#",
                            "Ninguna de las siguientes"
                        ],
                        [
                            "a",
                            "Microfilme"
                        ],
                        [
                            "b",
                            "Microficha"
                        ],
                        [
                            "c",
                            "Microopaco"
                        ],
                        [
                            "d",
                            "Caracteres grandes"
                        ],
                        [
                            "f",
                            "Braille"
                        ],
                        [
                            "o",
                            "En línea"
                        ],
                        [
                            "q",
                            "Electrónica de acceso directo"
                        ],
                        [
                            "r",
                            "Reproducción en caracteres normales"
                        ],
                        [
                            "s",
                            "Electrónica"
                        ]
                    ],
                    "24": [
                        [
                            "#",
                            "No especificada"
                        ],
                        [
                            "2",
                            "Separatas"
                        ],
                        [
                            "5",
                            "Calendarios"
                        ],
                        [
                            "6",
                            "Cómics/Novelas gráficas"
                        ],
                        [
                            "a",
                            "Resúmenes/sumarios"
                        ],
                        [
                            "b",
                            "Bibliografías"
                        ],
                        [
                            "c",
                            "Catálogos"
                        ],
                        [
                            "d",
                            "Diccionarios"
                        ],
                        [
                            "e",
                            "Enciclopedias"
                        ],
                        [
                            "f",
                            "Manuales"
                        ],
                        [
                            "g",
                            "Artículos sobre temas legales"
                        ],
                        [
                            "i",
                            "Índices"
                        ],
                        [
                            "j",
                            "Documentos de patente"
                        ],
                        [
                            "k",
                            "Discografías"
                        ],
                        [
                            "l",
                            "Legislación"
                        ],
                        [
                            "m",
                            "Tesis"
                        ],
                        [
                            "n",
                            "Estado de la cuestión"
                        ],
                        [
                            "o",
                            "Reseñas"
                        ],
                        [
                            "p",
                            "Textos programados"
                        ],
                        [
                            "q",
                            "Filmografías"
                        ],
                        [
                            "r",
                            "Directorios"
                        ],
                        [
                            "s",
                            "Estadísticas"
                        ],
                        [
                            "t",
                            "Informes técnicos"
                        ],
                        [
                            "u",
                            "Normas/Especificaciones"
                        ],
                        [
                            "v",
                            "Jurisprudencia comentada"
                        ],
                        [
                            "w",
                            "Sentencias y resoluciones"
                        ],
                        [
                            "y",
                            "Anuarios"
                        ],
                        [
                            "z",
                            "Tratados"
                        ]
                    ],
                    "28": [
                        [
                            "#",
                            "No es publicación oficial"
                        ],
                        [
                            "a",
                            "Organismo autónomo o semi-autónomo"
                        ],
                        [
                            "c",
                            "Multilocal"
                        ],
                        [
                            "f",
                            "Federal/nacional"
                        ],
                        [
                            "i",
                            "Organismo intergubernamental internacional"
                        ],
                        [
                            "l",
                            "Local"
                        ],
                        [
                            "m",
                            "Multiestatal"
                        ],
                        [
                            "o",
                            "Oficial — nivel sin determinar"
                        ],
                        [
                            "s",
                            "Estatal / provincial / territorial"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ]
                    ],
                    "29": [
                        [
                            "0",
                            "No es congreso"
                        ],
                        [
                            "1",
                            "Es congreso"
                        ]
                    ],
                    "30": [
                        [
                            "0",
                            "No es homenaje"
                        ],
                        [
                            "1",
                            "Es homenaje"
                        ]
                    ],
                    "31": [
                        [
                            "0",
                            "No tiene índice"
                        ],
                        [
                            "1",
                            "Tiene índice"
                        ]
                    ],
                    "32": [
                        [
                            "#",
                            "Sin definido"
                        ]
                    ],
                    "33": [
                        [
                            "0",
                            "No es ficción (sin especificar)"
                        ],
                        [
                            "1",
                            "Es ficción (sin especificar)"
                        ],
                        [
                            "d",
                            "Drama"
                        ],
                        [
                            "e",
                            "Ensayo"
                        ],
                        [
                            "f",
                            "Novela"
                        ],
                        [
                            "h",
                            "Humor, sátira"
                        ],
                        [
                            "i",
                            "Cartas"
                        ],
                        [
                            "j",
                            "Relatos"
                        ],
                        [
                            "m",
                            "Forma mixta"
                        ],
                        [
                            "p",
                            "Poesía"
                        ],
                        [
                            "s",
                            "Discursos"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ]
                    ],
                    "34": [
                        [
                            "#",
                            "No contiene material biográfico"
                        ],
                        [
                            "a",
                            "Autobiografía"
                        ],
                        [
                            "b",
                            "Biografía individual"
                        ],
                        [
                            "c",
                            "Biografía colectiva"
                        ],
                        [
                            "d",
                            "Contiene información biográfica"
                        ]
                    ],
                    "35": [
                        [
                            "   ",
                            "Sin idioma / blanco"
                        ],
                        [
                            "eng",
                            "Inglés"
                        ],
                        [
                            "spa",
                            "Español"
                        ],
                        [
                            "fre",
                            "Francés"
                        ],
                        [
                            "ger",
                            "Alemán"
                        ],
                        [
                            "ita",
                            "Italiano"
                        ],
                        [
                            "por",
                            "Portugués"
                        ],
                        [
                            "cat",
                            "Catalán"
                        ],
                        [
                            "glg",
                            "Gallego"
                        ],
                        [
                            "eus",
                            "Vasco"
                        ],
                        [
                            "lat",
                            "Latín"
                        ],
                        [
                            "grc",
                            "Griego antiguo"
                        ],
                        [
                            "ara",
                            "Árabe"
                        ],
                        [
                            "chi",
                            "Chino"
                        ],
                        [
                            "jpn",
                            "Japonés"
                        ],
                        [
                            "rus",
                            "Ruso"
                        ],
                        [
                            "mul",
                            "Múltiples idiomas"
                        ],
                        [
                            "und",
                            "Indeterminado"
                        ],
                        [
                            "zxx",
                            "Sin contenido lingüístico"
                        ],
                        [
                            "mis",
                            "Misceláneo"
                        ],
                        [
                            "sgn",
                            "Lenguaje de señas"
                        ]
                    ],
                    "38": [
                        [
                            " ",
                            "No modificado"
                        ],
                        [
                            "0",
                            "No modificado"
                        ],
                        [
                            "1",
                            "Modificado"
                        ]
                    ],
                    "39": [
                        [
                            " ",
                            "Fuente desconocida / blanco"
                        ],
                        [
                            "#",
                            "Sin fuente"
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
                            "Fuente externa"
                        ]
                    ]
                }
            },
            "computerFiles": {
                "label": "Archivos de ordenador",
                "extension": [
                    {
                        "start": 18,
                        "len": 4,
                        "pos": "18-21",
                        "name": "No definidas (4)",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 22,
                        "len": 1,
                        "pos": "22",
                        "name": "Público destinatario",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 23,
                        "len": 1,
                        "pos": "23",
                        "name": "Forma de la publicación",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 24,
                        "len": 2,
                        "pos": "24-25",
                        "name": "No definidas",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 26,
                        "len": 1,
                        "pos": "26",
                        "name": "Clase de archivo de ordenador",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 27,
                        "len": 1,
                        "pos": "27",
                        "name": "No definida",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 28,
                        "len": 1,
                        "pos": "28",
                        "name": "Publicación oficial",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 29,
                        "len": 6,
                        "pos": "29-34",
                        "name": "No definidas",
                        "kind": "reserved",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "6": [
                        [
                            " ",
                            "Sin tipo / blanco"
                        ],
                        [
                            "b",
                            "Antes del año 1000"
                        ],
                        [
                            "c",
                            "1001-999"
                        ],
                        [
                            "d",
                            "Fecha 1 y 2"
                        ],
                        [
                            "e",
                            "Fechas detalladas"
                        ],
                        [
                            "i",
                            "Colección inclusiva"
                        ],
                        [
                            "k",
                            "Rango BCE"
                        ],
                        [
                            "m",
                            "Múltiples fechas"
                        ],
                        [
                            "n",
                            "Fecha desconocida / probable"
                        ],
                        [
                            "p",
                            "Distribución"
                        ],
                        [
                            "q",
                            "Fecha cuestionable"
                        ],
                        [
                            "r",
                            "Reimpresión / reedición"
                        ],
                        [
                            "s",
                            "Fecha única de publicación"
                        ],
                        [
                            "t",
                            "Fecha de publicación"
                        ],
                        [
                            "u",
                            "Publicación continua"
                        ]
                    ],
                    "15": [
                        [
                            "   ",
                            "Sin lugar / blanco"
                        ],
                        [
                            "xxu",
                            "Lugar desconocido"
                        ],
                        [
                            "xx ",
                            "Sin lugar"
                        ],
                        [
                            "cau",
                            "California"
                        ],
                        [
                            "nyu",
                            "Nueva York"
                        ],
                        [
                            "enk",
                            "Inglaterra"
                        ],
                        [
                            "sp ",
                            "España"
                        ],
                        [
                            "mx ",
                            "México"
                        ],
                        [
                            "fr ",
                            "Francia"
                        ],
                        [
                            "gw ",
                            "Alemania"
                        ],
                        [
                            "it ",
                            "Italia"
                        ],
                        [
                            "be ",
                            "Bélgica"
                        ],
                        [
                            "ne ",
                            "Países Bajos"
                        ],
                        [
                            "sz ",
                            "Suiza"
                        ],
                        [
                            "au ",
                            "Austria"
                        ],
                        [
                            "pl ",
                            "Polonia"
                        ],
                        [
                            "ru ",
                            "Rusia"
                        ],
                        [
                            "ja ",
                            "Japón"
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
                            "Brasil"
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
                            "Perú"
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
                            "Desconocido o no especificado"
                        ],
                        [
                            "a",
                            "Preescolar"
                        ],
                        [
                            "b",
                            "Primaria"
                        ],
                        [
                            "c",
                            "Pre-adolescente"
                        ],
                        [
                            "d",
                            "Adolescente"
                        ],
                        [
                            "e",
                            "Adultos"
                        ],
                        [
                            "f",
                            "Especializado"
                        ],
                        [
                            "g",
                            "General"
                        ],
                        [
                            "j",
                            "Juvenil"
                        ]
                    ],
                    "23": [
                        [
                            "#",
                            "Desconocida"
                        ],
                        [
                            "o",
                            "En línea"
                        ],
                        [
                            "q",
                            "Electrónica de acceso directo"
                        ]
                    ],
                    "26": [
                        [
                            "a",
                            "Datos numéricos"
                        ],
                        [
                            "b",
                            "Programa de ordenador"
                        ],
                        [
                            "c",
                            "Información gráfica"
                        ],
                        [
                            "d",
                            "Textual"
                        ],
                        [
                            "e",
                            "Datos bibliográficos"
                        ],
                        [
                            "f",
                            "Fuente"
                        ],
                        [
                            "g",
                            "Juego"
                        ],
                        [
                            "h",
                            "Sonido"
                        ],
                        [
                            "i",
                            "Multimedia interactivo"
                        ],
                        [
                            "j",
                            "Sistema o servicio en línea"
                        ],
                        [
                            "m",
                            "Combinación"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ]
                    ],
                    "28": [
                        [
                            "#",
                            "No es publicación oficial"
                        ],
                        [
                            "a",
                            "Organismo autónomo o semi-autónomo"
                        ],
                        [
                            "c",
                            "Multilocal"
                        ],
                        [
                            "f",
                            "Federal/nacional"
                        ],
                        [
                            "i",
                            "Organismo intergubernamental internacional"
                        ],
                        [
                            "l",
                            "Local"
                        ],
                        [
                            "m",
                            "Multiestatal"
                        ],
                        [
                            "o",
                            "Oficial — nivel sin determinar"
                        ],
                        [
                            "s",
                            "Estatal / provincial / territorial"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ]
                    ],
                    "29": [
                        [
                            "0",
                            "No es congreso"
                        ],
                        [
                            "1",
                            "Es congreso"
                        ]
                    ],
                    "30": [
                        [
                            "0",
                            "No es homenaje"
                        ],
                        [
                            "1",
                            "Es homenaje"
                        ]
                    ],
                    "31": [
                        [
                            "0",
                            "No tiene índice"
                        ],
                        [
                            "1",
                            "Tiene índice"
                        ]
                    ],
                    "32": [
                        [
                            "#",
                            "Sin definido"
                        ]
                    ],
                    "33": [
                        [
                            "0",
                            "No es ficción (sin especificar)"
                        ],
                        [
                            "1",
                            "Es ficción (sin especificar)"
                        ],
                        [
                            "d",
                            "Drama"
                        ],
                        [
                            "e",
                            "Ensayo"
                        ],
                        [
                            "f",
                            "Novela"
                        ],
                        [
                            "h",
                            "Humor, sátira"
                        ],
                        [
                            "i",
                            "Cartas"
                        ],
                        [
                            "j",
                            "Relatos"
                        ],
                        [
                            "m",
                            "Forma mixta"
                        ],
                        [
                            "p",
                            "Poesía"
                        ],
                        [
                            "s",
                            "Discursos"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ]
                    ],
                    "34": [
                        [
                            "#",
                            "No contiene material biográfico"
                        ],
                        [
                            "a",
                            "Autobiografía"
                        ],
                        [
                            "b",
                            "Biografía individual"
                        ],
                        [
                            "c",
                            "Biografía colectiva"
                        ],
                        [
                            "d",
                            "Contiene información biográfica"
                        ]
                    ],
                    "35": [
                        [
                            "   ",
                            "Sin idioma / blanco"
                        ],
                        [
                            "eng",
                            "Inglés"
                        ],
                        [
                            "spa",
                            "Español"
                        ],
                        [
                            "fre",
                            "Francés"
                        ],
                        [
                            "ger",
                            "Alemán"
                        ],
                        [
                            "ita",
                            "Italiano"
                        ],
                        [
                            "por",
                            "Portugués"
                        ],
                        [
                            "cat",
                            "Catalán"
                        ],
                        [
                            "glg",
                            "Gallego"
                        ],
                        [
                            "eus",
                            "Vasco"
                        ],
                        [
                            "lat",
                            "Latín"
                        ],
                        [
                            "grc",
                            "Griego antiguo"
                        ],
                        [
                            "ara",
                            "Árabe"
                        ],
                        [
                            "chi",
                            "Chino"
                        ],
                        [
                            "jpn",
                            "Japonés"
                        ],
                        [
                            "rus",
                            "Ruso"
                        ],
                        [
                            "mul",
                            "Múltiples idiomas"
                        ],
                        [
                            "und",
                            "Indeterminado"
                        ],
                        [
                            "zxx",
                            "Sin contenido lingüístico"
                        ],
                        [
                            "mis",
                            "Misceláneo"
                        ],
                        [
                            "sgn",
                            "Lenguaje de señas"
                        ]
                    ],
                    "38": [
                        [
                            " ",
                            "No modificado"
                        ],
                        [
                            "0",
                            "No modificado"
                        ],
                        [
                            "1",
                            "Modificado"
                        ]
                    ],
                    "39": [
                        [
                            " ",
                            "Fuente desconocida / blanco"
                        ],
                        [
                            "#",
                            "Sin fuente"
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
                            "Fuente externa"
                        ]
                    ]
                }
            },
            "maps": {
                "label": "Mapas",
                "extension": [
                    {
                        "start": 18,
                        "len": 4,
                        "pos": "18-21",
                        "name": "Relieve (4)",
                        "kind": "multi4",
                        "group": "illus",
                        "multi4Set": "relief"
                    },
                    {
                        "start": 22,
                        "len": 2,
                        "pos": "22-23",
                        "name": "Proyección",
                        "kind": "select3",
                        "group": "pub"
                    },
                    {
                        "start": 24,
                        "len": 1,
                        "pos": "24",
                        "name": "No definida",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 25,
                        "len": 1,
                        "pos": "25",
                        "name": "Tipo de material cartográfico",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 26,
                        "len": 2,
                        "pos": "26-27",
                        "name": "No definidas",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 28,
                        "len": 1,
                        "pos": "28",
                        "name": "Publicación oficial",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 29,
                        "len": 1,
                        "pos": "29",
                        "name": "Forma de la publicación",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 30,
                        "len": 1,
                        "pos": "30",
                        "name": "No definida",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 31,
                        "len": 1,
                        "pos": "31",
                        "name": "Índice",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 32,
                        "len": 1,
                        "pos": "32",
                        "name": "No definida",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 33,
                        "len": 2,
                        "pos": "33-34",
                        "name": "Características especiales del formato",
                        "kind": "text",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "6": [
                        [
                            " ",
                            "Sin tipo / blanco"
                        ],
                        [
                            "b",
                            "Antes del año 1000"
                        ],
                        [
                            "c",
                            "1001-999"
                        ],
                        [
                            "d",
                            "Fecha 1 y 2"
                        ],
                        [
                            "e",
                            "Fechas detalladas"
                        ],
                        [
                            "i",
                            "Colección inclusiva"
                        ],
                        [
                            "k",
                            "Rango BCE"
                        ],
                        [
                            "m",
                            "Múltiples fechas"
                        ],
                        [
                            "n",
                            "Fecha desconocida / probable"
                        ],
                        [
                            "p",
                            "Distribución"
                        ],
                        [
                            "q",
                            "Fecha cuestionable"
                        ],
                        [
                            "r",
                            "Reimpresión / reedición"
                        ],
                        [
                            "s",
                            "Fecha única de publicación"
                        ],
                        [
                            "t",
                            "Fecha de publicación"
                        ],
                        [
                            "u",
                            "Publicación continua"
                        ]
                    ],
                    "15": [
                        [
                            "   ",
                            "Sin lugar / blanco"
                        ],
                        [
                            "xxu",
                            "Lugar desconocido"
                        ],
                        [
                            "xx ",
                            "Sin lugar"
                        ],
                        [
                            "cau",
                            "California"
                        ],
                        [
                            "nyu",
                            "Nueva York"
                        ],
                        [
                            "enk",
                            "Inglaterra"
                        ],
                        [
                            "sp ",
                            "España"
                        ],
                        [
                            "mx ",
                            "México"
                        ],
                        [
                            "fr ",
                            "Francia"
                        ],
                        [
                            "gw ",
                            "Alemania"
                        ],
                        [
                            "it ",
                            "Italia"
                        ],
                        [
                            "be ",
                            "Bélgica"
                        ],
                        [
                            "ne ",
                            "Países Bajos"
                        ],
                        [
                            "sz ",
                            "Suiza"
                        ],
                        [
                            "au ",
                            "Austria"
                        ],
                        [
                            "pl ",
                            "Polonia"
                        ],
                        [
                            "ru ",
                            "Rusia"
                        ],
                        [
                            "ja ",
                            "Japón"
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
                            "Brasil"
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
                            "Perú"
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
                            "Sin relieve"
                        ],
                        [
                            "a",
                            "Curvas de nivel"
                        ],
                        [
                            "b",
                            "Sombreado"
                        ],
                        [
                            "c",
                            "Tintas hipsométricas"
                        ],
                        [
                            "d",
                            "Normales"
                        ],
                        [
                            "e",
                            "Batimetría por sondas"
                        ],
                        [
                            "f",
                            "Contornos de formas"
                        ],
                        [
                            "g",
                            "Batimetría por isolíneas"
                        ],
                        [
                            "h",
                            "Hachuras"
                        ],
                        [
                            "i",
                            "Pictorial"
                        ],
                        [
                            "j",
                            "Formas de relieve"
                        ],
                        [
                            "k",
                            "Modelo en relieve"
                        ],
                        [
                            "m",
                            "Batimetría por sombreado"
                        ],
                        [
                            "z",
                            "Otro"
                        ]
                    ],
                    "22": [
                        [
                            "  ",
                            "Sin proyección / blanco"
                        ],
                        [
                            "aa",
                            "Azimutal equidistante"
                        ],
                        [
                            "ab",
                            "Gnomónica"
                        ],
                        [
                            "ac",
                            "Azimutal de Lambert"
                        ],
                        [
                            "ad",
                            "Ortográfica"
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
                            "Cónica de Albers"
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
                            "Pseudocilíndrica"
                        ],
                        [
                            "fb",
                            "Transversa"
                        ],
                        [
                            "ka",
                            "Cilíndrica"
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
                            "Ninguna de las siguientes"
                        ],
                        [
                            "a",
                            "Microfilme"
                        ],
                        [
                            "b",
                            "Microficha"
                        ],
                        [
                            "c",
                            "Microopaco"
                        ],
                        [
                            "d",
                            "Caracteres grandes"
                        ],
                        [
                            "f",
                            "Braille"
                        ],
                        [
                            "o",
                            "En línea"
                        ],
                        [
                            "q",
                            "Electrónica de acceso directo"
                        ],
                        [
                            "r",
                            "Reproducción en caracteres normales"
                        ],
                        [
                            "s",
                            "Electrónica"
                        ]
                    ],
                    "25": [
                        [
                            "a",
                            "Atlas"
                        ],
                        [
                            "b",
                            "Brújula"
                        ],
                        [
                            "c",
                            "Diagrama"
                        ],
                        [
                            "d",
                            "Globo"
                        ],
                        [
                            "e",
                            "Mapa"
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
                            "Perfil"
                        ],
                        [
                            "k",
                            "Modelo"
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
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ]
                    ],
                    "28": [
                        [
                            "#",
                            "No es publicación oficial"
                        ],
                        [
                            "a",
                            "Organismo autónomo o semi-autónomo"
                        ],
                        [
                            "c",
                            "Multilocal"
                        ],
                        [
                            "f",
                            "Federal/nacional"
                        ],
                        [
                            "i",
                            "Organismo intergubernamental internacional"
                        ],
                        [
                            "l",
                            "Local"
                        ],
                        [
                            "m",
                            "Multiestatal"
                        ],
                        [
                            "o",
                            "Oficial — nivel sin determinar"
                        ],
                        [
                            "s",
                            "Estatal / provincial / territorial"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ]
                    ],
                    "29": [
                        [
                            "#",
                            "Ninguna de las siguientes"
                        ],
                        [
                            "a",
                            "Microfilme"
                        ],
                        [
                            "b",
                            "Microficha"
                        ],
                        [
                            "c",
                            "Microopaco"
                        ],
                        [
                            "d",
                            "Caracteres grandes"
                        ],
                        [
                            "f",
                            "Braille"
                        ],
                        [
                            "o",
                            "En línea"
                        ],
                        [
                            "q",
                            "Electrónica de acceso directo"
                        ],
                        [
                            "r",
                            "Reproducción en caracteres normales"
                        ],
                        [
                            "s",
                            "Electrónica"
                        ]
                    ],
                    "30": [
                        [
                            "0",
                            "No es homenaje"
                        ],
                        [
                            "1",
                            "Es homenaje"
                        ]
                    ],
                    "31": [
                        [
                            "0",
                            "No tiene índice"
                        ],
                        [
                            "1",
                            "Tiene índice"
                        ]
                    ],
                    "32": [
                        [
                            "#",
                            "Sin definido"
                        ]
                    ],
                    "33": [
                        [
                            "0",
                            "No es ficción (sin especificar)"
                        ],
                        [
                            "1",
                            "Es ficción (sin especificar)"
                        ],
                        [
                            "d",
                            "Drama"
                        ],
                        [
                            "e",
                            "Ensayo"
                        ],
                        [
                            "f",
                            "Novela"
                        ],
                        [
                            "h",
                            "Humor, sátira"
                        ],
                        [
                            "i",
                            "Cartas"
                        ],
                        [
                            "j",
                            "Relatos"
                        ],
                        [
                            "m",
                            "Forma mixta"
                        ],
                        [
                            "p",
                            "Poesía"
                        ],
                        [
                            "s",
                            "Discursos"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ]
                    ],
                    "34": [
                        [
                            "#",
                            "No contiene material biográfico"
                        ],
                        [
                            "a",
                            "Autobiografía"
                        ],
                        [
                            "b",
                            "Biografía individual"
                        ],
                        [
                            "c",
                            "Biografía colectiva"
                        ],
                        [
                            "d",
                            "Contiene información biográfica"
                        ]
                    ],
                    "35": [
                        [
                            "   ",
                            "Sin idioma / blanco"
                        ],
                        [
                            "eng",
                            "Inglés"
                        ],
                        [
                            "spa",
                            "Español"
                        ],
                        [
                            "fre",
                            "Francés"
                        ],
                        [
                            "ger",
                            "Alemán"
                        ],
                        [
                            "ita",
                            "Italiano"
                        ],
                        [
                            "por",
                            "Portugués"
                        ],
                        [
                            "cat",
                            "Catalán"
                        ],
                        [
                            "glg",
                            "Gallego"
                        ],
                        [
                            "eus",
                            "Vasco"
                        ],
                        [
                            "lat",
                            "Latín"
                        ],
                        [
                            "grc",
                            "Griego antiguo"
                        ],
                        [
                            "ara",
                            "Árabe"
                        ],
                        [
                            "chi",
                            "Chino"
                        ],
                        [
                            "jpn",
                            "Japonés"
                        ],
                        [
                            "rus",
                            "Ruso"
                        ],
                        [
                            "mul",
                            "Múltiples idiomas"
                        ],
                        [
                            "und",
                            "Indeterminado"
                        ],
                        [
                            "zxx",
                            "Sin contenido lingüístico"
                        ],
                        [
                            "mis",
                            "Misceláneo"
                        ],
                        [
                            "sgn",
                            "Lenguaje de señas"
                        ]
                    ],
                    "38": [
                        [
                            " ",
                            "No modificado"
                        ],
                        [
                            "0",
                            "No modificado"
                        ],
                        [
                            "1",
                            "Modificado"
                        ]
                    ],
                    "39": [
                        [
                            " ",
                            "Fuente desconocida / blanco"
                        ],
                        [
                            "#",
                            "Sin fuente"
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
                            "Fuente externa"
                        ]
                    ]
                }
            },
            "music": {
                "label": "Música",
                "extension": [
                    {
                        "start": 18,
                        "len": 2,
                        "pos": "18-19",
                        "name": "Forma de la composición",
                        "kind": "select3",
                        "group": "content",
                        "hint": "Código de dos letras; lista abreviada del PDF (véase 047 para más códigos)."
                    },
                    {
                        "start": 20,
                        "len": 1,
                        "pos": "20",
                        "name": "Formato de música",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 21,
                        "len": 1,
                        "pos": "21",
                        "name": "Partes musicales",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 22,
                        "len": 1,
                        "pos": "22",
                        "name": "Público destinatario",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 23,
                        "len": 1,
                        "pos": "23",
                        "name": "Forma de la publicación",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 24,
                        "len": 6,
                        "pos": "24-29",
                        "name": "Material anejo (6)",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 30,
                        "len": 2,
                        "pos": "30-31",
                        "name": "Textos hablados en grabaciones sonoras",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 32,
                        "len": 1,
                        "pos": "32",
                        "name": "No definida",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 33,
                        "len": 1,
                        "pos": "33",
                        "name": "Transposición y arreglo",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 34,
                        "len": 1,
                        "pos": "34",
                        "name": "No definida",
                        "kind": "reserved",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "6": [
                        [
                            " ",
                            "Sin tipo / blanco"
                        ],
                        [
                            "b",
                            "Antes del año 1000"
                        ],
                        [
                            "c",
                            "1001-999"
                        ],
                        [
                            "d",
                            "Fecha 1 y 2"
                        ],
                        [
                            "e",
                            "Fechas detalladas"
                        ],
                        [
                            "i",
                            "Colección inclusiva"
                        ],
                        [
                            "k",
                            "Rango BCE"
                        ],
                        [
                            "m",
                            "Múltiples fechas"
                        ],
                        [
                            "n",
                            "Fecha desconocida / probable"
                        ],
                        [
                            "p",
                            "Distribución"
                        ],
                        [
                            "q",
                            "Fecha cuestionable"
                        ],
                        [
                            "r",
                            "Reimpresión / reedición"
                        ],
                        [
                            "s",
                            "Fecha única de publicación"
                        ],
                        [
                            "t",
                            "Fecha de publicación"
                        ],
                        [
                            "u",
                            "Publicación continua"
                        ]
                    ],
                    "15": [
                        [
                            "   ",
                            "Sin lugar / blanco"
                        ],
                        [
                            "xxu",
                            "Lugar desconocido"
                        ],
                        [
                            "xx ",
                            "Sin lugar"
                        ],
                        [
                            "cau",
                            "California"
                        ],
                        [
                            "nyu",
                            "Nueva York"
                        ],
                        [
                            "enk",
                            "Inglaterra"
                        ],
                        [
                            "sp ",
                            "España"
                        ],
                        [
                            "mx ",
                            "México"
                        ],
                        [
                            "fr ",
                            "Francia"
                        ],
                        [
                            "gw ",
                            "Alemania"
                        ],
                        [
                            "it ",
                            "Italia"
                        ],
                        [
                            "be ",
                            "Bélgica"
                        ],
                        [
                            "ne ",
                            "Países Bajos"
                        ],
                        [
                            "sz ",
                            "Suiza"
                        ],
                        [
                            "au ",
                            "Austria"
                        ],
                        [
                            "pl ",
                            "Polonia"
                        ],
                        [
                            "ru ",
                            "Rusia"
                        ],
                        [
                            "ja ",
                            "Japón"
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
                            "Brasil"
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
                            "Perú"
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
                            "Sin forma / blanco"
                        ],
                        [
                            "an",
                            "Antífonas"
                        ],
                        [
                            "bd",
                            "Baladas"
                        ],
                        [
                            "bt",
                            "Ballets"
                        ],
                        [
                            "ch",
                            "Corales"
                        ],
                        [
                            "co",
                            "Conciertos"
                        ],
                        [
                            "ct",
                            "Cantatas"
                        ],
                        [
                            "df",
                            "Danza folclórica"
                        ],
                        [
                            "mi",
                            "Minuetos"
                        ],
                        [
                            "mo",
                            "Motetos"
                        ],
                        [
                            "mu",
                            "Varias formas"
                        ],
                        [
                            "nn",
                            "Sin aplicable"
                        ],
                        [
                            "op",
                            "Óperas"
                        ],
                        [
                            "or",
                            "Oratorios"
                        ],
                        [
                            "ov",
                            "Oberturas"
                        ],
                        [
                            "pt",
                            "Partitas"
                        ],
                        [
                            "ri",
                            "Rondós"
                        ],
                        [
                            "sn",
                            "Sonatas"
                        ],
                        [
                            "st",
                            "Estudios"
                        ],
                        [
                            "su",
                            "Suite"
                        ],
                        [
                            "sy",
                            "Sinfonías"
                        ],
                        [
                            "uu",
                            "Desconocido"
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
                            "Múltiples"
                        ],
                        [
                            "n",
                            "Sin aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ]
                    ],
                    "21": [
                        [
                            "#",
                            "Sin partes"
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
                            "Sin aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ]
                    ],
                    "22": [
                        [
                            "#",
                            "Desconocido o no especificado"
                        ],
                        [
                            "a",
                            "Preescolar"
                        ],
                        [
                            "b",
                            "Primaria"
                        ],
                        [
                            "c",
                            "Pre-adolescente"
                        ],
                        [
                            "d",
                            "Adolescente"
                        ],
                        [
                            "e",
                            "Adultos"
                        ],
                        [
                            "f",
                            "Especializado"
                        ],
                        [
                            "g",
                            "General"
                        ],
                        [
                            "j",
                            "Juvenil"
                        ]
                    ],
                    "23": [
                        [
                            "#",
                            "Ninguna de las siguientes"
                        ],
                        [
                            "a",
                            "Microfilme"
                        ],
                        [
                            "b",
                            "Microficha"
                        ],
                        [
                            "c",
                            "Microopaco"
                        ],
                        [
                            "d",
                            "Caracteres grandes"
                        ],
                        [
                            "f",
                            "Braille"
                        ],
                        [
                            "o",
                            "En línea"
                        ],
                        [
                            "q",
                            "Electrónica de acceso directo"
                        ],
                        [
                            "r",
                            "Reproducción en caracteres normales"
                        ],
                        [
                            "s",
                            "Electrónica"
                        ]
                    ],
                    "28": [
                        [
                            "#",
                            "No es publicación oficial"
                        ],
                        [
                            "a",
                            "Organismo autónomo o semi-autónomo"
                        ],
                        [
                            "c",
                            "Multilocal"
                        ],
                        [
                            "f",
                            "Federal/nacional"
                        ],
                        [
                            "i",
                            "Organismo intergubernamental internacional"
                        ],
                        [
                            "l",
                            "Local"
                        ],
                        [
                            "m",
                            "Multiestatal"
                        ],
                        [
                            "o",
                            "Oficial — nivel sin determinar"
                        ],
                        [
                            "s",
                            "Estatal / provincial / territorial"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ]
                    ],
                    "29": [
                        [
                            "0",
                            "No es congreso"
                        ],
                        [
                            "1",
                            "Es congreso"
                        ]
                    ],
                    "30": [
                        [
                            "0",
                            "No es homenaje"
                        ],
                        [
                            "1",
                            "Es homenaje"
                        ]
                    ],
                    "31": [
                        [
                            "0",
                            "No tiene índice"
                        ],
                        [
                            "1",
                            "Tiene índice"
                        ]
                    ],
                    "32": [
                        [
                            "#",
                            "Sin definido"
                        ]
                    ],
                    "33": [
                        [
                            "#",
                            "No se indica"
                        ],
                        [
                            "a",
                            "Transposición"
                        ],
                        [
                            "b",
                            "Arreglo"
                        ],
                        [
                            "c",
                            "Transposición y arreglo"
                        ],
                        [
                            "n",
                            "Sin aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ]
                    ],
                    "34": [
                        [
                            "#",
                            "No contiene material biográfico"
                        ],
                        [
                            "a",
                            "Autobiografía"
                        ],
                        [
                            "b",
                            "Biografía individual"
                        ],
                        [
                            "c",
                            "Biografía colectiva"
                        ],
                        [
                            "d",
                            "Contiene información biográfica"
                        ]
                    ],
                    "35": [
                        [
                            "   ",
                            "Sin idioma / blanco"
                        ],
                        [
                            "eng",
                            "Inglés"
                        ],
                        [
                            "spa",
                            "Español"
                        ],
                        [
                            "fre",
                            "Francés"
                        ],
                        [
                            "ger",
                            "Alemán"
                        ],
                        [
                            "ita",
                            "Italiano"
                        ],
                        [
                            "por",
                            "Portugués"
                        ],
                        [
                            "cat",
                            "Catalán"
                        ],
                        [
                            "glg",
                            "Gallego"
                        ],
                        [
                            "eus",
                            "Vasco"
                        ],
                        [
                            "lat",
                            "Latín"
                        ],
                        [
                            "grc",
                            "Griego antiguo"
                        ],
                        [
                            "ara",
                            "Árabe"
                        ],
                        [
                            "chi",
                            "Chino"
                        ],
                        [
                            "jpn",
                            "Japonés"
                        ],
                        [
                            "rus",
                            "Ruso"
                        ],
                        [
                            "mul",
                            "Múltiples idiomas"
                        ],
                        [
                            "und",
                            "Indeterminado"
                        ],
                        [
                            "zxx",
                            "Sin contenido lingüístico"
                        ],
                        [
                            "mis",
                            "Misceláneo"
                        ],
                        [
                            "sgn",
                            "Lenguaje de señas"
                        ]
                    ],
                    "38": [
                        [
                            " ",
                            "No modificado"
                        ],
                        [
                            "0",
                            "No modificado"
                        ],
                        [
                            "1",
                            "Modificado"
                        ]
                    ],
                    "39": [
                        [
                            " ",
                            "Fuente desconocida / blanco"
                        ],
                        [
                            "#",
                            "Sin fuente"
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
                            "Fuente externa"
                        ]
                    ]
                }
            },
            "continuing": {
                "label": "Recursos continuados",
                "extension": [
                    {
                        "start": 18,
                        "len": 1,
                        "pos": "18",
                        "name": "Periodicidad",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 19,
                        "len": 1,
                        "pos": "19",
                        "name": "Regularidad",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 20,
                        "len": 1,
                        "pos": "20",
                        "name": "No definida",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 21,
                        "len": 1,
                        "pos": "21",
                        "name": "Tipo de recurso continuado",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 22,
                        "len": 1,
                        "pos": "22",
                        "name": "Forma de la publicación original",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 23,
                        "len": 1,
                        "pos": "23",
                        "name": "Forma de la publicación",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 24,
                        "len": 1,
                        "pos": "24",
                        "name": "Naturaleza de la obra en su conjunto",
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
                        "name": "Publicación oficial",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 29,
                        "len": 1,
                        "pos": "29",
                        "name": "Congresos",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 30,
                        "len": 3,
                        "pos": "30-32",
                        "name": "No definidas",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 33,
                        "len": 1,
                        "pos": "33",
                        "name": "Alfabeto original del título",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 34,
                        "len": 1,
                        "pos": "34",
                        "name": "Entrada sucesiva/última entrada",
                        "kind": "select",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "6": [
                        [
                            " ",
                            "Sin tipo / blanco"
                        ],
                        [
                            "b",
                            "Antes del año 1000"
                        ],
                        [
                            "c",
                            "1001-999"
                        ],
                        [
                            "d",
                            "Fecha 1 y 2"
                        ],
                        [
                            "e",
                            "Fechas detalladas"
                        ],
                        [
                            "i",
                            "Colección inclusiva"
                        ],
                        [
                            "k",
                            "Rango BCE"
                        ],
                        [
                            "m",
                            "Múltiples fechas"
                        ],
                        [
                            "n",
                            "Fecha desconocida / probable"
                        ],
                        [
                            "p",
                            "Distribución"
                        ],
                        [
                            "q",
                            "Fecha cuestionable"
                        ],
                        [
                            "r",
                            "Reimpresión / reedición"
                        ],
                        [
                            "s",
                            "Fecha única de publicación"
                        ],
                        [
                            "t",
                            "Fecha de publicación"
                        ],
                        [
                            "u",
                            "Publicación continua"
                        ]
                    ],
                    "15": [
                        [
                            "   ",
                            "Sin lugar / blanco"
                        ],
                        [
                            "xxu",
                            "Lugar desconocido"
                        ],
                        [
                            "xx ",
                            "Sin lugar"
                        ],
                        [
                            "cau",
                            "California"
                        ],
                        [
                            "nyu",
                            "Nueva York"
                        ],
                        [
                            "enk",
                            "Inglaterra"
                        ],
                        [
                            "sp ",
                            "España"
                        ],
                        [
                            "mx ",
                            "México"
                        ],
                        [
                            "fr ",
                            "Francia"
                        ],
                        [
                            "gw ",
                            "Alemania"
                        ],
                        [
                            "it ",
                            "Italia"
                        ],
                        [
                            "be ",
                            "Bélgica"
                        ],
                        [
                            "ne ",
                            "Países Bajos"
                        ],
                        [
                            "sz ",
                            "Suiza"
                        ],
                        [
                            "au ",
                            "Austria"
                        ],
                        [
                            "pl ",
                            "Polonia"
                        ],
                        [
                            "ru ",
                            "Rusia"
                        ],
                        [
                            "ja ",
                            "Japón"
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
                            "Brasil"
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
                            "Perú"
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
                            "Sin frecuencia"
                        ],
                        [
                            "a",
                            "Anual"
                        ],
                        [
                            "b",
                            "Bimestral"
                        ],
                        [
                            "c",
                            "Semi-semanal"
                        ],
                        [
                            "d",
                            "Diario"
                        ],
                        [
                            "e",
                            "Bimensual"
                        ],
                        [
                            "f",
                            "Semestral"
                        ],
                        [
                            "g",
                            "Biennial"
                        ],
                        [
                            "h",
                            "Trianual"
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
                            "Continuo"
                        ],
                        [
                            "m",
                            "Mensual"
                        ],
                        [
                            "q",
                            "Trimestral"
                        ],
                        [
                            "s",
                            "Semanal"
                        ],
                        [
                            "t",
                            "Tres veces al año"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "w",
                            "Dos veces al mes"
                        ],
                        [
                            "z",
                            "Otro"
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
                            "Desconocido"
                        ]
                    ],
                    "21": [
                        [
                            "#",
                            "Sin especificar"
                        ],
                        [
                            "l",
                            "Actualizaciones de base de datos"
                        ],
                        [
                            "m",
                            "Monográfico en serie"
                        ],
                        [
                            "n",
                            "Boletín informativo"
                        ],
                        [
                            "p",
                            "Periódico mixto"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ]
                    ],
                    "22": [
                        [
                            "#",
                            "Ninguna de las siguientes"
                        ],
                        [
                            "a",
                            "Microfilme"
                        ],
                        [
                            "b",
                            "Microficha"
                        ],
                        [
                            "c",
                            "Microopaco"
                        ],
                        [
                            "d",
                            "Caracteres grandes"
                        ],
                        [
                            "f",
                            "Braille"
                        ],
                        [
                            "o",
                            "En línea"
                        ],
                        [
                            "q",
                            "Electrónica de acceso directo"
                        ],
                        [
                            "r",
                            "Reproducción en caracteres normales"
                        ],
                        [
                            "s",
                            "Electrónica"
                        ]
                    ],
                    "23": [
                        [
                            "#",
                            "Ninguna de las siguientes"
                        ],
                        [
                            "a",
                            "Microfilme"
                        ],
                        [
                            "b",
                            "Microficha"
                        ],
                        [
                            "c",
                            "Microopaco"
                        ],
                        [
                            "d",
                            "Caracteres grandes"
                        ],
                        [
                            "f",
                            "Braille"
                        ],
                        [
                            "o",
                            "En línea"
                        ],
                        [
                            "q",
                            "Electrónica de acceso directo"
                        ],
                        [
                            "r",
                            "Reproducción en caracteres normales"
                        ],
                        [
                            "s",
                            "Electrónica"
                        ]
                    ],
                    "24": [
                        [
                            "#",
                            "No especificada"
                        ],
                        [
                            "a",
                            "Resúmenes/sumarios"
                        ],
                        [
                            "b",
                            "Bibliografías"
                        ],
                        [
                            "c",
                            "Catálogos"
                        ],
                        [
                            "d",
                            "Diccionarios"
                        ],
                        [
                            "e",
                            "Enciclopedias"
                        ],
                        [
                            "f",
                            "Manuales"
                        ],
                        [
                            "g",
                            "Artículos sobre temas legales"
                        ],
                        [
                            "i",
                            "Índices"
                        ],
                        [
                            "j",
                            "Documentos de patente"
                        ],
                        [
                            "k",
                            "Discografías"
                        ],
                        [
                            "l",
                            "Legislación"
                        ],
                        [
                            "m",
                            "Tesis"
                        ],
                        [
                            "n",
                            "Estado de la cuestión"
                        ],
                        [
                            "o",
                            "Reseñas"
                        ],
                        [
                            "p",
                            "Textos programados"
                        ],
                        [
                            "q",
                            "Filmografías"
                        ],
                        [
                            "r",
                            "Directorios"
                        ],
                        [
                            "s",
                            "Estadísticas"
                        ],
                        [
                            "t",
                            "Informes técnicos"
                        ],
                        [
                            "u",
                            "Normas/Especificaciones"
                        ],
                        [
                            "v",
                            "Jurisprudencia comentada"
                        ],
                        [
                            "w",
                            "Sentencias y resoluciones"
                        ],
                        [
                            "y",
                            "Anuarios"
                        ],
                        [
                            "z",
                            "Tratados"
                        ],
                        [
                            "2",
                            "Separatas"
                        ],
                        [
                            "5",
                            "Calendarios"
                        ],
                        [
                            "6",
                            "Cómics/Novelas gráficas"
                        ]
                    ],
                    "25": [
                        [
                            "#",
                            "No especificada"
                        ],
                        [
                            "a",
                            "Resúmenes/sumarios"
                        ],
                        [
                            "b",
                            "Bibliografías"
                        ],
                        [
                            "c",
                            "Catálogos"
                        ],
                        [
                            "d",
                            "Diccionarios"
                        ],
                        [
                            "e",
                            "Enciclopedias"
                        ],
                        [
                            "f",
                            "Manuales"
                        ],
                        [
                            "g",
                            "Artículos sobre temas legales"
                        ],
                        [
                            "i",
                            "Índices"
                        ],
                        [
                            "j",
                            "Documentos de patente"
                        ],
                        [
                            "k",
                            "Discografías"
                        ],
                        [
                            "l",
                            "Legislación"
                        ],
                        [
                            "m",
                            "Tesis"
                        ],
                        [
                            "n",
                            "Estado de la cuestión"
                        ],
                        [
                            "o",
                            "Reseñas"
                        ],
                        [
                            "p",
                            "Textos programados"
                        ],
                        [
                            "q",
                            "Filmografías"
                        ],
                        [
                            "r",
                            "Directorios"
                        ],
                        [
                            "s",
                            "Estadísticas"
                        ],
                        [
                            "t",
                            "Informes técnicos"
                        ],
                        [
                            "u",
                            "Normas/Especificaciones"
                        ],
                        [
                            "v",
                            "Jurisprudencia comentada"
                        ],
                        [
                            "w",
                            "Sentencias y resoluciones"
                        ],
                        [
                            "y",
                            "Anuarios"
                        ],
                        [
                            "z",
                            "Tratados"
                        ],
                        [
                            "2",
                            "Separatas"
                        ],
                        [
                            "5",
                            "Calendarios"
                        ],
                        [
                            "6",
                            "Cómics/Novelas gráficas"
                        ]
                    ],
                    "26": [
                        [
                            "#",
                            "No especificada"
                        ],
                        [
                            "a",
                            "Resúmenes/sumarios"
                        ],
                        [
                            "b",
                            "Bibliografías"
                        ],
                        [
                            "c",
                            "Catálogos"
                        ],
                        [
                            "d",
                            "Diccionarios"
                        ],
                        [
                            "e",
                            "Enciclopedias"
                        ],
                        [
                            "f",
                            "Manuales"
                        ],
                        [
                            "g",
                            "Artículos sobre temas legales"
                        ],
                        [
                            "i",
                            "Índices"
                        ],
                        [
                            "j",
                            "Documentos de patente"
                        ],
                        [
                            "k",
                            "Discografías"
                        ],
                        [
                            "l",
                            "Legislación"
                        ],
                        [
                            "m",
                            "Tesis"
                        ],
                        [
                            "n",
                            "Estado de la cuestión"
                        ],
                        [
                            "o",
                            "Reseñas"
                        ],
                        [
                            "p",
                            "Textos programados"
                        ],
                        [
                            "q",
                            "Filmografías"
                        ],
                        [
                            "r",
                            "Directorios"
                        ],
                        [
                            "s",
                            "Estadísticas"
                        ],
                        [
                            "t",
                            "Informes técnicos"
                        ],
                        [
                            "u",
                            "Normas/Especificaciones"
                        ],
                        [
                            "v",
                            "Jurisprudencia comentada"
                        ],
                        [
                            "w",
                            "Sentencias y resoluciones"
                        ],
                        [
                            "y",
                            "Anuarios"
                        ],
                        [
                            "z",
                            "Tratados"
                        ],
                        [
                            "2",
                            "Separatas"
                        ],
                        [
                            "5",
                            "Calendarios"
                        ],
                        [
                            "6",
                            "Cómics/Novelas gráficas"
                        ]
                    ],
                    "27": [
                        [
                            "#",
                            "No especificada"
                        ],
                        [
                            "a",
                            "Resúmenes/sumarios"
                        ],
                        [
                            "b",
                            "Bibliografías"
                        ],
                        [
                            "c",
                            "Catálogos"
                        ],
                        [
                            "d",
                            "Diccionarios"
                        ],
                        [
                            "e",
                            "Enciclopedias"
                        ],
                        [
                            "f",
                            "Manuales"
                        ],
                        [
                            "g",
                            "Artículos sobre temas legales"
                        ],
                        [
                            "i",
                            "Índices"
                        ],
                        [
                            "j",
                            "Documentos de patente"
                        ],
                        [
                            "k",
                            "Discografías"
                        ],
                        [
                            "l",
                            "Legislación"
                        ],
                        [
                            "m",
                            "Tesis"
                        ],
                        [
                            "n",
                            "Estado de la cuestión"
                        ],
                        [
                            "o",
                            "Reseñas"
                        ],
                        [
                            "p",
                            "Textos programados"
                        ],
                        [
                            "q",
                            "Filmografías"
                        ],
                        [
                            "r",
                            "Directorios"
                        ],
                        [
                            "s",
                            "Estadísticas"
                        ],
                        [
                            "t",
                            "Informes técnicos"
                        ],
                        [
                            "u",
                            "Normas/Especificaciones"
                        ],
                        [
                            "v",
                            "Jurisprudencia comentada"
                        ],
                        [
                            "w",
                            "Sentencias y resoluciones"
                        ],
                        [
                            "y",
                            "Anuarios"
                        ],
                        [
                            "z",
                            "Tratados"
                        ],
                        [
                            "2",
                            "Separatas"
                        ],
                        [
                            "5",
                            "Calendarios"
                        ],
                        [
                            "6",
                            "Cómics/Novelas gráficas"
                        ]
                    ],
                    "28": [
                        [
                            "#",
                            "No es publicación oficial"
                        ],
                        [
                            "a",
                            "Organismo autónomo o semi-autónomo"
                        ],
                        [
                            "c",
                            "Multilocal"
                        ],
                        [
                            "f",
                            "Federal/nacional"
                        ],
                        [
                            "i",
                            "Organismo intergubernamental internacional"
                        ],
                        [
                            "l",
                            "Local"
                        ],
                        [
                            "m",
                            "Multiestatal"
                        ],
                        [
                            "o",
                            "Oficial — nivel sin determinar"
                        ],
                        [
                            "s",
                            "Estatal / provincial / territorial"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ]
                    ],
                    "29": [
                        [
                            "0",
                            "No es congreso"
                        ],
                        [
                            "1",
                            "Es congreso"
                        ]
                    ],
                    "30": [
                        [
                            "0",
                            "No es homenaje"
                        ],
                        [
                            "1",
                            "Es homenaje"
                        ]
                    ],
                    "31": [
                        [
                            "0",
                            "No tiene índice"
                        ],
                        [
                            "1",
                            "Tiene índice"
                        ]
                    ],
                    "32": [
                        [
                            "#",
                            "Sin definido"
                        ]
                    ],
                    "33": [
                        [
                            "#",
                            "No se indica"
                        ],
                        [
                            "a",
                            "Latino básico"
                        ],
                        [
                            "b",
                            "Latino extendido"
                        ],
                        [
                            "c",
                            "Cirílico"
                        ],
                        [
                            "d",
                            "Japonés"
                        ],
                        [
                            "e",
                            "Chino"
                        ],
                        [
                            "f",
                            "Árabe"
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
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ]
                    ],
                    "34": [
                        [
                            "0",
                            "Entrada sucesiva"
                        ],
                        [
                            "1",
                            "Última entrada"
                        ],
                        [
                            "2",
                            "Entrada integrada"
                        ]
                    ],
                    "35": [
                        [
                            "   ",
                            "Sin idioma / blanco"
                        ],
                        [
                            "eng",
                            "Inglés"
                        ],
                        [
                            "spa",
                            "Español"
                        ],
                        [
                            "fre",
                            "Francés"
                        ],
                        [
                            "ger",
                            "Alemán"
                        ],
                        [
                            "ita",
                            "Italiano"
                        ],
                        [
                            "por",
                            "Portugués"
                        ],
                        [
                            "cat",
                            "Catalán"
                        ],
                        [
                            "glg",
                            "Gallego"
                        ],
                        [
                            "eus",
                            "Vasco"
                        ],
                        [
                            "lat",
                            "Latín"
                        ],
                        [
                            "grc",
                            "Griego antiguo"
                        ],
                        [
                            "ara",
                            "Árabe"
                        ],
                        [
                            "chi",
                            "Chino"
                        ],
                        [
                            "jpn",
                            "Japonés"
                        ],
                        [
                            "rus",
                            "Ruso"
                        ],
                        [
                            "mul",
                            "Múltiples idiomas"
                        ],
                        [
                            "und",
                            "Indeterminado"
                        ],
                        [
                            "zxx",
                            "Sin contenido lingüístico"
                        ],
                        [
                            "mis",
                            "Misceláneo"
                        ],
                        [
                            "sgn",
                            "Lenguaje de señas"
                        ]
                    ],
                    "38": [
                        [
                            " ",
                            "No modificado"
                        ],
                        [
                            "0",
                            "No modificado"
                        ],
                        [
                            "1",
                            "Modificado"
                        ]
                    ],
                    "39": [
                        [
                            " ",
                            "Fuente desconocida / blanco"
                        ],
                        [
                            "#",
                            "Sin fuente"
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
                            "Fuente externa"
                        ]
                    ]
                }
            },
            "visual": {
                "label": "Materiales visuales",
                "extension": [
                    {
                        "start": 18,
                        "len": 3,
                        "pos": "18-20",
                        "name": "Tiempo de duración (3)",
                        "kind": "text",
                        "group": "content",
                        "hint": "Minutos (justificado a la derecha, ceros a la izquierda); 000 si excede 3 dígitos."
                    },
                    {
                        "start": 21,
                        "len": 1,
                        "pos": "21",
                        "name": "No definida",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 22,
                        "len": 1,
                        "pos": "22",
                        "name": "Público destinatario",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 23,
                        "len": 5,
                        "pos": "23-27",
                        "name": "No definidas",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 28,
                        "len": 1,
                        "pos": "28",
                        "name": "Publicación oficial",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 29,
                        "len": 1,
                        "pos": "29",
                        "name": "Forma de la publicación",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 30,
                        "len": 3,
                        "pos": "30-32",
                        "name": "No definidas",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 33,
                        "len": 1,
                        "pos": "33",
                        "name": "Tipo de material visual",
                        "kind": "select",
                        "group": "content"
                    },
                    {
                        "start": 34,
                        "len": 1,
                        "pos": "34",
                        "name": "Técnica",
                        "kind": "select",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "6": [
                        [
                            " ",
                            "Sin tipo / blanco"
                        ],
                        [
                            "b",
                            "Antes del año 1000"
                        ],
                        [
                            "c",
                            "1001-999"
                        ],
                        [
                            "d",
                            "Fecha 1 y 2"
                        ],
                        [
                            "e",
                            "Fechas detalladas"
                        ],
                        [
                            "i",
                            "Colección inclusiva"
                        ],
                        [
                            "k",
                            "Rango BCE"
                        ],
                        [
                            "m",
                            "Múltiples fechas"
                        ],
                        [
                            "n",
                            "Fecha desconocida / probable"
                        ],
                        [
                            "p",
                            "Distribución"
                        ],
                        [
                            "q",
                            "Fecha cuestionable"
                        ],
                        [
                            "r",
                            "Reimpresión / reedición"
                        ],
                        [
                            "s",
                            "Fecha única de publicación"
                        ],
                        [
                            "t",
                            "Fecha de publicación"
                        ],
                        [
                            "u",
                            "Publicación continua"
                        ]
                    ],
                    "15": [
                        [
                            "   ",
                            "Sin lugar / blanco"
                        ],
                        [
                            "xxu",
                            "Lugar desconocido"
                        ],
                        [
                            "xx ",
                            "Sin lugar"
                        ],
                        [
                            "cau",
                            "California"
                        ],
                        [
                            "nyu",
                            "Nueva York"
                        ],
                        [
                            "enk",
                            "Inglaterra"
                        ],
                        [
                            "sp ",
                            "España"
                        ],
                        [
                            "mx ",
                            "México"
                        ],
                        [
                            "fr ",
                            "Francia"
                        ],
                        [
                            "gw ",
                            "Alemania"
                        ],
                        [
                            "it ",
                            "Italia"
                        ],
                        [
                            "be ",
                            "Bélgica"
                        ],
                        [
                            "ne ",
                            "Países Bajos"
                        ],
                        [
                            "sz ",
                            "Suiza"
                        ],
                        [
                            "au ",
                            "Austria"
                        ],
                        [
                            "pl ",
                            "Polonia"
                        ],
                        [
                            "ru ",
                            "Rusia"
                        ],
                        [
                            "ja ",
                            "Japón"
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
                            "Brasil"
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
                            "Perú"
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
                            "Desconocido o no especificado"
                        ],
                        [
                            "a",
                            "Preescolar"
                        ],
                        [
                            "b",
                            "Primaria"
                        ],
                        [
                            "c",
                            "Pre-adolescente"
                        ],
                        [
                            "d",
                            "Adolescente"
                        ],
                        [
                            "e",
                            "Adultos"
                        ],
                        [
                            "f",
                            "Especializado"
                        ],
                        [
                            "g",
                            "General"
                        ],
                        [
                            "j",
                            "Juvenil"
                        ]
                    ],
                    "23": [
                        [
                            "#",
                            "Ninguna de las siguientes"
                        ],
                        [
                            "a",
                            "Microfilme"
                        ],
                        [
                            "b",
                            "Microficha"
                        ],
                        [
                            "c",
                            "Microopaco"
                        ],
                        [
                            "d",
                            "Caracteres grandes"
                        ],
                        [
                            "f",
                            "Braille"
                        ],
                        [
                            "o",
                            "En línea"
                        ],
                        [
                            "q",
                            "Electrónica de acceso directo"
                        ],
                        [
                            "r",
                            "Reproducción en caracteres normales"
                        ],
                        [
                            "s",
                            "Electrónica"
                        ]
                    ],
                    "28": [
                        [
                            "#",
                            "No es publicación oficial"
                        ],
                        [
                            "a",
                            "Organismo autónomo o semi-autónomo"
                        ],
                        [
                            "c",
                            "Multilocal"
                        ],
                        [
                            "f",
                            "Federal/nacional"
                        ],
                        [
                            "i",
                            "Organismo intergubernamental internacional"
                        ],
                        [
                            "l",
                            "Local"
                        ],
                        [
                            "m",
                            "Multiestatal"
                        ],
                        [
                            "o",
                            "Oficial — nivel sin determinar"
                        ],
                        [
                            "s",
                            "Estatal / provincial / territorial"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ]
                    ],
                    "29": [
                        [
                            "#",
                            "Ninguna de las siguientes"
                        ],
                        [
                            "a",
                            "Microfilme"
                        ],
                        [
                            "b",
                            "Microficha"
                        ],
                        [
                            "c",
                            "Microopaco"
                        ],
                        [
                            "d",
                            "Caracteres grandes"
                        ],
                        [
                            "f",
                            "Braille"
                        ],
                        [
                            "o",
                            "En línea"
                        ],
                        [
                            "q",
                            "Electrónica de acceso directo"
                        ],
                        [
                            "r",
                            "Reproducción en caracteres normales"
                        ],
                        [
                            "s",
                            "Electrónica"
                        ]
                    ],
                    "30": [
                        [
                            "0",
                            "No es homenaje"
                        ],
                        [
                            "1",
                            "Es homenaje"
                        ]
                    ],
                    "31": [
                        [
                            "0",
                            "No tiene índice"
                        ],
                        [
                            "1",
                            "Tiene índice"
                        ]
                    ],
                    "32": [
                        [
                            "#",
                            "Sin definido"
                        ]
                    ],
                    "33": [
                        [
                            "#",
                            "Sin especificar"
                        ],
                        [
                            "a",
                            "Collage"
                        ],
                        [
                            "b",
                            "Dibujo"
                        ],
                        [
                            "c",
                            "Collage de fotografías"
                        ],
                        [
                            "d",
                            "Diorama"
                        ],
                        [
                            "f",
                            "Filmina"
                        ],
                        [
                            "g",
                            "Juego"
                        ],
                        [
                            "i",
                            "Imagen"
                        ],
                        [
                            "k",
                            "Material gráfico"
                        ],
                        [
                            "l",
                            "Dibujo técnico"
                        ],
                        [
                            "m",
                            "Película cinematográfica"
                        ],
                        [
                            "n",
                            "Gráfico"
                        ],
                        [
                            "o",
                            "Ficha didáctica"
                        ],
                        [
                            "p",
                            "Microdiapositiva"
                        ],
                        [
                            "q",
                            "Modelo"
                        ],
                        [
                            "r",
                            "Objetos"
                        ],
                        [
                            "s",
                            "Diapositiva"
                        ],
                        [
                            "t",
                            "Transparencia"
                        ],
                        [
                            "v",
                            "Videograbación"
                        ],
                        [
                            "w",
                            "Juguete"
                        ],
                        [
                            "z",
                            "Otro"
                        ]
                    ],
                    "34": [
                        [
                            "a",
                            "Animación"
                        ],
                        [
                            "c",
                            "Animación y acción real"
                        ],
                        [
                            "l",
                            "Acción real"
                        ],
                        [
                            "n",
                            "Sin aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ]
                    ],
                    "35": [
                        [
                            "   ",
                            "Sin idioma / blanco"
                        ],
                        [
                            "eng",
                            "Inglés"
                        ],
                        [
                            "spa",
                            "Español"
                        ],
                        [
                            "fre",
                            "Francés"
                        ],
                        [
                            "ger",
                            "Alemán"
                        ],
                        [
                            "ita",
                            "Italiano"
                        ],
                        [
                            "por",
                            "Portugués"
                        ],
                        [
                            "cat",
                            "Catalán"
                        ],
                        [
                            "glg",
                            "Gallego"
                        ],
                        [
                            "eus",
                            "Vasco"
                        ],
                        [
                            "lat",
                            "Latín"
                        ],
                        [
                            "grc",
                            "Griego antiguo"
                        ],
                        [
                            "ara",
                            "Árabe"
                        ],
                        [
                            "chi",
                            "Chino"
                        ],
                        [
                            "jpn",
                            "Japonés"
                        ],
                        [
                            "rus",
                            "Ruso"
                        ],
                        [
                            "mul",
                            "Múltiples idiomas"
                        ],
                        [
                            "und",
                            "Indeterminado"
                        ],
                        [
                            "zxx",
                            "Sin contenido lingüístico"
                        ],
                        [
                            "mis",
                            "Misceláneo"
                        ],
                        [
                            "sgn",
                            "Lenguaje de señas"
                        ]
                    ],
                    "38": [
                        [
                            " ",
                            "No modificado"
                        ],
                        [
                            "0",
                            "No modificado"
                        ],
                        [
                            "1",
                            "Modificado"
                        ]
                    ],
                    "39": [
                        [
                            " ",
                            "Fuente desconocida / blanco"
                        ],
                        [
                            "#",
                            "Sin fuente"
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
                            "Fuente externa"
                        ]
                    ]
                }
            },
            "mixed": {
                "label": "Materiales mixtos",
                "extension": [
                    {
                        "start": 18,
                        "len": 5,
                        "pos": "18-22",
                        "name": "No definidas (5)",
                        "kind": "reserved",
                        "group": "content"
                    },
                    {
                        "start": 23,
                        "len": 1,
                        "pos": "23",
                        "name": "Forma de la publicación",
                        "kind": "select",
                        "group": "pub"
                    },
                    {
                        "start": 24,
                        "len": 11,
                        "pos": "24-34",
                        "name": "No definidas",
                        "kind": "reserved",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "6": [
                        [
                            " ",
                            "Sin tipo / blanco"
                        ],
                        [
                            "b",
                            "Antes del año 1000"
                        ],
                        [
                            "c",
                            "1001-999"
                        ],
                        [
                            "d",
                            "Fecha 1 y 2"
                        ],
                        [
                            "e",
                            "Fechas detalladas"
                        ],
                        [
                            "i",
                            "Colección inclusiva"
                        ],
                        [
                            "k",
                            "Rango BCE"
                        ],
                        [
                            "m",
                            "Múltiples fechas"
                        ],
                        [
                            "n",
                            "Fecha desconocida / probable"
                        ],
                        [
                            "p",
                            "Distribución"
                        ],
                        [
                            "q",
                            "Fecha cuestionable"
                        ],
                        [
                            "r",
                            "Reimpresión / reedición"
                        ],
                        [
                            "s",
                            "Fecha única de publicación"
                        ],
                        [
                            "t",
                            "Fecha de publicación"
                        ],
                        [
                            "u",
                            "Publicación continua"
                        ]
                    ],
                    "15": [
                        [
                            "   ",
                            "Sin lugar / blanco"
                        ],
                        [
                            "xxu",
                            "Lugar desconocido"
                        ],
                        [
                            "xx ",
                            "Sin lugar"
                        ],
                        [
                            "cau",
                            "California"
                        ],
                        [
                            "nyu",
                            "Nueva York"
                        ],
                        [
                            "enk",
                            "Inglaterra"
                        ],
                        [
                            "sp ",
                            "España"
                        ],
                        [
                            "mx ",
                            "México"
                        ],
                        [
                            "fr ",
                            "Francia"
                        ],
                        [
                            "gw ",
                            "Alemania"
                        ],
                        [
                            "it ",
                            "Italia"
                        ],
                        [
                            "be ",
                            "Bélgica"
                        ],
                        [
                            "ne ",
                            "Países Bajos"
                        ],
                        [
                            "sz ",
                            "Suiza"
                        ],
                        [
                            "au ",
                            "Austria"
                        ],
                        [
                            "pl ",
                            "Polonia"
                        ],
                        [
                            "ru ",
                            "Rusia"
                        ],
                        [
                            "ja ",
                            "Japón"
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
                            "Brasil"
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
                            "Perú"
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
                            "Desconocido o no especificado"
                        ],
                        [
                            "a",
                            "Preescolar"
                        ],
                        [
                            "b",
                            "Primaria"
                        ],
                        [
                            "c",
                            "Pre-adolescente"
                        ],
                        [
                            "d",
                            "Adolescente"
                        ],
                        [
                            "e",
                            "Adultos"
                        ],
                        [
                            "f",
                            "Especializado"
                        ],
                        [
                            "g",
                            "General"
                        ],
                        [
                            "j",
                            "Juvenil"
                        ]
                    ],
                    "23": [
                        [
                            "#",
                            "Ninguna de las siguientes"
                        ],
                        [
                            "a",
                            "Microfilme"
                        ],
                        [
                            "b",
                            "Microficha"
                        ],
                        [
                            "c",
                            "Microopaco"
                        ],
                        [
                            "d",
                            "Caracteres grandes"
                        ],
                        [
                            "f",
                            "Braille"
                        ],
                        [
                            "o",
                            "En línea"
                        ],
                        [
                            "q",
                            "Electrónica de acceso directo"
                        ],
                        [
                            "r",
                            "Reproducción en caracteres normales"
                        ],
                        [
                            "s",
                            "Electrónica"
                        ]
                    ],
                    "28": [
                        [
                            "#",
                            "No es publicación oficial"
                        ],
                        [
                            "a",
                            "Organismo autónomo o semi-autónomo"
                        ],
                        [
                            "c",
                            "Multilocal"
                        ],
                        [
                            "f",
                            "Federal/nacional"
                        ],
                        [
                            "i",
                            "Organismo intergubernamental internacional"
                        ],
                        [
                            "l",
                            "Local"
                        ],
                        [
                            "m",
                            "Multiestatal"
                        ],
                        [
                            "o",
                            "Oficial — nivel sin determinar"
                        ],
                        [
                            "s",
                            "Estatal / provincial / territorial"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ]
                    ],
                    "29": [
                        [
                            "0",
                            "No es congreso"
                        ],
                        [
                            "1",
                            "Es congreso"
                        ]
                    ],
                    "30": [
                        [
                            "0",
                            "No es homenaje"
                        ],
                        [
                            "1",
                            "Es homenaje"
                        ]
                    ],
                    "31": [
                        [
                            "0",
                            "No tiene índice"
                        ],
                        [
                            "1",
                            "Tiene índice"
                        ]
                    ],
                    "32": [
                        [
                            "#",
                            "Sin definido"
                        ]
                    ],
                    "33": [
                        [
                            "0",
                            "No es ficción (sin especificar)"
                        ],
                        [
                            "1",
                            "Es ficción (sin especificar)"
                        ],
                        [
                            "d",
                            "Drama"
                        ],
                        [
                            "e",
                            "Ensayo"
                        ],
                        [
                            "f",
                            "Novela"
                        ],
                        [
                            "h",
                            "Humor, sátira"
                        ],
                        [
                            "i",
                            "Cartas"
                        ],
                        [
                            "j",
                            "Relatos"
                        ],
                        [
                            "m",
                            "Forma mixta"
                        ],
                        [
                            "p",
                            "Poesía"
                        ],
                        [
                            "s",
                            "Discursos"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ]
                    ],
                    "34": [
                        [
                            "#",
                            "No contiene material biográfico"
                        ],
                        [
                            "a",
                            "Autobiografía"
                        ],
                        [
                            "b",
                            "Biografía individual"
                        ],
                        [
                            "c",
                            "Biografía colectiva"
                        ],
                        [
                            "d",
                            "Contiene información biográfica"
                        ]
                    ],
                    "35": [
                        [
                            "   ",
                            "Sin idioma / blanco"
                        ],
                        [
                            "eng",
                            "Inglés"
                        ],
                        [
                            "spa",
                            "Español"
                        ],
                        [
                            "fre",
                            "Francés"
                        ],
                        [
                            "ger",
                            "Alemán"
                        ],
                        [
                            "ita",
                            "Italiano"
                        ],
                        [
                            "por",
                            "Portugués"
                        ],
                        [
                            "cat",
                            "Catalán"
                        ],
                        [
                            "glg",
                            "Gallego"
                        ],
                        [
                            "eus",
                            "Vasco"
                        ],
                        [
                            "lat",
                            "Latín"
                        ],
                        [
                            "grc",
                            "Griego antiguo"
                        ],
                        [
                            "ara",
                            "Árabe"
                        ],
                        [
                            "chi",
                            "Chino"
                        ],
                        [
                            "jpn",
                            "Japonés"
                        ],
                        [
                            "rus",
                            "Ruso"
                        ],
                        [
                            "mul",
                            "Múltiples idiomas"
                        ],
                        [
                            "und",
                            "Indeterminado"
                        ],
                        [
                            "zxx",
                            "Sin contenido lingüístico"
                        ],
                        [
                            "mis",
                            "Misceláneo"
                        ],
                        [
                            "sgn",
                            "Lenguaje de señas"
                        ]
                    ],
                    "38": [
                        [
                            " ",
                            "No modificado"
                        ],
                        [
                            "0",
                            "No modificado"
                        ],
                        [
                            "1",
                            "Modificado"
                        ]
                    ],
                    "39": [
                        [
                            " ",
                            "Fuente desconocida / blanco"
                        ],
                        [
                            "#",
                            "Sin fuente"
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
                            "Fuente externa"
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
                "Blanco"
            ],
            [
                "a",
                "Material textual"
            ],
            [
                "c",
                "Música notada"
            ],
            [
                "d",
                "Música notada manuscrita"
            ],
            [
                "e",
                "Material cartográfico"
            ],
            [
                "f",
                "Material cartográfico manuscrito"
            ],
            [
                "g",
                "Material gráfico proyectable"
            ],
            [
                "i",
                "Grabación sonora no musical"
            ],
            [
                "j",
                "Grabación sonora musical"
            ],
            [
                "k",
                "Material gráfico bidimensional, no proyectable"
            ],
            [
                "m",
                "Archivo de ordenador"
            ],
            [
                "o",
                "Kit"
            ],
            [
                "p",
                "Material mixto"
            ],
            [
                "r",
                "Objeto tridimensional artificial o natural"
            ],
            [
                "s",
                "Seriado"
            ],
            [
                "t",
                "Material textual manuscrito"
            ]
        ]
    },
    "007": {
        "categoryCodes": [
            [
                "a",
                "Mapa"
            ],
            [
                "b",
                "Materiales combinados"
            ],
            [
                "c",
                "Recurso electrónico"
            ],
            [
                "d",
                "Globo terrestre"
            ],
            [
                "e",
                "Estereográfico"
            ],
            [
                "f",
                "Material táctil"
            ],
            [
                "g",
                "Material gráfico proyectable"
            ],
            [
                "h",
                "Microforma"
            ],
            [
                "k",
                "Material gráfico no proyectable"
            ],
            [
                "m",
                "Película cinematográfica"
            ],
            [
                "o",
                "Kit"
            ],
            [
                "q",
                "Música notada"
            ],
            [
                "s",
                "Grabación sonora"
            ],
            [
                "t",
                "Texto"
            ],
            [
                "v",
                "Videograbación"
            ],
            [
                "z",
                "No especificado"
            ]
        ],
        "categories": {
            "t": {
                "length": 2,
                "label": "Texto",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Clase de material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Código en posición 00; cambia la plantilla del 007."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Designación específica del material",
                        "kind": "select",
                        "group": "fisico"
                    }
                ],
                "codeTables": {
                    "0": [
                        [
                            "t",
                            "Texto"
                        ]
                    ],
                    "1": [
                        [
                            "a",
                            "Caracteres normales"
                        ],
                        [
                            "b",
                            "Caracteres grandes"
                        ],
                        [
                            "c",
                            "Braille"
                        ],
                        [
                            "d",
                            "Hojas sueltas"
                        ],
                        [
                            "u",
                            "No especificado"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                        "name": "Clase de material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Código en posición 00; cambia la plantilla del 007."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Designación específica del material",
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
                            "No especificado"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ]
                }
            },
            "z": {
                "length": 2,
                "label": "No especificado",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Clase de material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Código en posición 00; cambia la plantilla del 007."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Designación específica del material",
                        "kind": "select",
                        "group": "fisico"
                    }
                ],
                "codeTables": {
                    "0": [
                        [
                            "z",
                            "Sin especificar"
                        ]
                    ],
                    "1": [
                        [
                            "m",
                            "Múltiples formatos físicos"
                        ],
                        [
                            "u",
                            "No especificado"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ]
                }
            },
            "b": {
                "length": 2,
                "label": "Materiales combinados",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Clase de material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Código en posición 00; cambia la plantilla del 007."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Designación específica del material",
                        "kind": "select",
                        "group": "fisico"
                    }
                ],
                "codeTables": {
                    "1": [
                        [
                            "u",
                            "Sin especificado"
                        ],
                        [
                            "z",
                            "Otro"
                        ]
                    ]
                }
            },
            "q": {
                "length": 2,
                "label": "Música notada",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Clase de material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Código en posición 00; cambia la plantilla del 007."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Designación específica del material",
                        "kind": "select",
                        "group": "fisico"
                    }
                ],
                "codeTables": {
                    "0": [
                        [
                            "q",
                            "Música notada"
                        ]
                    ],
                    "1": [
                        [
                            "u",
                            "No especificado"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ]
                }
            },
            "a": {
                "length": 7,
                "label": "Mapa",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Clase de material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Código en posición 00; cambia la plantilla del 007."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Designación específica del material",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 2,
                        "len": 1,
                        "pos": "02",
                        "name": "No definida",
                        "kind": "reserved",
                        "group": "fisico",
                        "hint": "Posición sin definición (# o espacio)."
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
                        "name": "Medio físico",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 5,
                        "len": 1,
                        "pos": "05",
                        "name": "Tipo de reproducción",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 6,
                        "len": 1,
                        "pos": "06",
                        "name": "Detalles de producción/reproducción",
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
                            "Mapa"
                        ]
                    ],
                    "1": [
                        [
                            "d",
                            "Atlas"
                        ],
                        [
                            "g",
                            "Diagrama"
                        ],
                        [
                            "j",
                            "Mapa"
                        ],
                        [
                            "k",
                            "Perfil"
                        ],
                        [
                            "q",
                            "Modelo"
                        ],
                        [
                            "r",
                            "Imagen de teledetección"
                        ],
                        [
                            "s",
                            "Sección"
                        ],
                        [
                            "u",
                            "No especificado"
                        ],
                        [
                            "y",
                            "Vista"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "2": [
                        [
                            "#",
                            "Indefinido"
                        ]
                    ],
                    "3": [
                        [
                            "a",
                            "Monocromo"
                        ],
                        [
                            "c",
                            "Polícromo"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "4": [
                        [
                            "a",
                            "Papel"
                        ],
                        [
                            "b",
                            "Madera"
                        ],
                        [
                            "c",
                            "Piedra"
                        ],
                        [
                            "d",
                            "Metal"
                        ],
                        [
                            "e",
                            "Sintético"
                        ],
                        [
                            "f",
                            "Piel"
                        ],
                        [
                            "g",
                            "Textil"
                        ],
                        [
                            "i",
                            "Plástico"
                        ],
                        [
                            "j",
                            "Vidrio"
                        ],
                        [
                            "l",
                            "Vinilo"
                        ],
                        [
                            "n",
                            "Vitela"
                        ],
                        [
                            "p",
                            "Yeso"
                        ],
                        [
                            "s",
                            "Fotográfico rígido positivo"
                        ],
                        [
                            "r",
                            "Fotográfico flexible negativo"
                        ],
                        [
                            "q",
                            "Fotográfico flexible positivo"
                        ],
                        [
                            "t",
                            "Fotográfico rígido negativo"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "v",
                            "Cuero"
                        ],
                        [
                            "w",
                            "Pergamino"
                        ],
                        [
                            "x",
                            "No aplicable"
                        ],
                        [
                            "y",
                            "Otro medio fotográfico"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "5": [
                        [
                            "f",
                            "Facsímil"
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "No aplicable"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ]
                }
            },
            "s": {
                "length": 11,
                "label": "Grabación sonora",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Clase de material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Código en posición 00; cambia la plantilla del 007."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Designación específica del material",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 2,
                        "len": 1,
                        "pos": "02",
                        "name": "No definida",
                        "kind": "reserved",
                        "group": "fisico",
                        "hint": "Posición sin definición (# o espacio)."
                    },
                    {
                        "start": 3,
                        "len": 1,
                        "pos": "03",
                        "name": "Velocidad",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 4,
                        "len": 1,
                        "pos": "04",
                        "name": "Configuración de canales",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 5,
                        "len": 1,
                        "pos": "05",
                        "name": "Ancho del surco",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 6,
                        "len": 1,
                        "pos": "06",
                        "name": "Dimensiones",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 7,
                        "len": 1,
                        "pos": "07",
                        "name": "Ancho de la cinta",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 8,
                        "len": 1,
                        "pos": "08",
                        "name": "Configuración de la cinta",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 9,
                        "len": 1,
                        "pos": "09",
                        "name": "Tipo de disco, cilindro o cinta",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 10,
                        "len": 1,
                        "pos": "10",
                        "name": "Tipo de material",
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
                        "name": "Especial playback Características",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 13,
                        "len": 1,
                        "pos": "13",
                        "name": "Técnica original de captura y almacenamiento",
                        "kind": "text",
                        "group": "content"
                    }
                ],
                "codeTables": {
                    "0": [
                        [
                            "s",
                            "Grabación sonora"
                        ]
                    ],
                    "1": [
                        [
                            "b",
                            "Cinturón sonoro"
                        ],
                        [
                            "d",
                            "Disco"
                        ],
                        [
                            "e",
                            "Cilindro"
                        ],
                        [
                            "g",
                            "Cartucho"
                        ],
                        [
                            "i",
                            "Banda sonora de película"
                        ],
                        [
                            "q",
                            "Rollo"
                        ],
                        [
                            "r",
                            "Remoto"
                        ],
                        [
                            "s",
                            "Casete"
                        ],
                        [
                            "t",
                            "Bobina de cinta"
                        ],
                        [
                            "u",
                            "No especificado"
                        ],
                        [
                            "w",
                            "Hilo magnético"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "2": [
                        [
                            "#",
                            "Indefinido"
                        ]
                    ],
                    "3": [
                        [
                            "a",
                            "16 rpm"
                        ],
                        [
                            "b",
                            "33 1/3 rpm"
                        ],
                        [
                            "c",
                            "45 rpm"
                        ],
                        [
                            "d",
                            "78 rpm"
                        ],
                        [
                            "e",
                            "8 rpm"
                        ],
                        [
                            "f",
                            "1,4 m/s"
                        ],
                        [
                            "h",
                            "120 rpm"
                        ],
                        [
                            "i",
                            "160 rpm"
                        ],
                        [
                            "k",
                            "2,38 cm/s"
                        ],
                        [
                            "l",
                            "4,75 cm/s"
                        ],
                        [
                            "m",
                            "9,5 cm/s"
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "o",
                            "19 cm/s"
                        ],
                        [
                            "p",
                            "38 cm/s"
                        ],
                        [
                            "r",
                            "76 cm/s"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "4": [
                        [
                            "m",
                            "Monoaural"
                        ],
                        [
                            "q",
                            "Cuadrafónico/multicanal"
                        ],
                        [
                            "s",
                            "Estereofónico"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "5": [
                        [
                            "m",
                            "Microsurco"
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "s",
                            "Surco ancho"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "6": [
                        [
                            "a",
                            "3 pulg."
                        ],
                        [
                            "b",
                            "5 pulg."
                        ],
                        [
                            "c",
                            "7 pulg."
                        ],
                        [
                            "d",
                            "10 pulg."
                        ],
                        [
                            "e",
                            "12 pulg."
                        ],
                        [
                            "f",
                            "16 pulg."
                        ],
                        [
                            "g",
                            "4 ¾ pulg."
                        ],
                        [
                            "j",
                            "3 ⅞ x 2 ½ pulg."
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "o",
                            "5 ¼ x 3 ⅞ pulg."
                        ],
                        [
                            "s",
                            "2 ¾ x 4 pulg."
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "7": [
                        [
                            "l",
                            "⅛ pulg."
                        ],
                        [
                            "m",
                            "¼ pulg."
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "o",
                            "½ pulg."
                        ],
                        [
                            "p",
                            "1 pulg."
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "8": [
                        [
                            "a",
                            "1 pista"
                        ],
                        [
                            "b",
                            "2 pistas"
                        ],
                        [
                            "c",
                            "4 pistas"
                        ],
                        [
                            "d",
                            "8 pistas"
                        ],
                        [
                            "e",
                            "12 pistas"
                        ],
                        [
                            "f",
                            "16 pistas"
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "9": [
                        [
                            "a",
                            "Cinta maestra"
                        ],
                        [
                            "b",
                            "Duplicado de cinta maestra"
                        ],
                        [
                            "d",
                            "Disco maestro (negativo)"
                        ],
                        [
                            "i",
                            "Grabación en directo"
                        ],
                        [
                            "m",
                            "Producción en serie"
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "r",
                            "Matriz (positivo)"
                        ],
                        [
                            "s",
                            "Molde (negativo)"
                        ],
                        [
                            "t",
                            "Copia de prueba"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "10": [
                        [
                            "a",
                            "Revestimiento de laca"
                        ],
                        [
                            "b",
                            "Nitrato de celulosa"
                        ],
                        [
                            "c",
                            "Cinta de acetato con óxido de hierro"
                        ],
                        [
                            "g",
                            "Vidrio con laca"
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
                            "No aplicable"
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
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "12": [
                        [
                            "a",
                            "NAB Normalizado"
                        ],
                        [
                            "b",
                            "CCIR Normalizado"
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
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "Electrical capture, Digital storage"
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
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ]
                }
            },
            "v": {
                "length": 7,
                "label": "Videograbación",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Clase de material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Código en posición 00; cambia la plantilla del 007."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Designación específica del material",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 2,
                        "len": 1,
                        "pos": "02",
                        "name": "No definida",
                        "kind": "reserved",
                        "group": "fisico",
                        "hint": "Posición sin definición (# o espacio)."
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
                        "name": "Formato de la videograbación",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 5,
                        "len": 1,
                        "pos": "05",
                        "name": "Sonido incorporado o separado",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 6,
                        "len": 1,
                        "pos": "06",
                        "name": "Medio sonoro",
                        "kind": "select",
                        "group": "fisico"
                    }
                ],
                "codeTables": {
                    "1": [
                        [
                            "c",
                            "Cartucho de vídeo"
                        ],
                        [
                            "d",
                            "Videodisco"
                        ],
                        [
                            "f",
                            "Videocasete"
                        ],
                        [
                            "r",
                            "Bobina de vídeo"
                        ],
                        [
                            "u",
                            "Sin especificado"
                        ],
                        [
                            "z",
                            "Otro"
                        ]
                    ],
                    "3": [
                        [
                            "a",
                            "Monocromo"
                        ],
                        [
                            "b",
                            "Blanco y negro"
                        ],
                        [
                            "c",
                            "Polícromo"
                        ],
                        [
                            "m",
                            "Mixto"
                        ],
                        [
                            "n",
                            "Sin aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
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
                            "Tipo C"
                        ],
                        [
                            "f",
                            "Cuádruple"
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
                            "Desconocido"
                        ],
                        [
                            "v",
                            "DVD"
                        ],
                        [
                            "z",
                            "Otro"
                        ]
                    ],
                    "5": [
                        [
                            "#",
                            "Sin sonido (muda)"
                        ],
                        [
                            "a",
                            "Sonido incorporado"
                        ],
                        [
                            "b",
                            "Sonido separado"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ]
                    ],
                    "6": [
                        [
                            "#",
                            "Sin sonido"
                        ],
                        [
                            "a",
                            "Banda sonora óptica en película"
                        ],
                        [
                            "b",
                            "Banda sonora magnética en película"
                        ],
                        [
                            "c",
                            "Cinta de audio magnética en cartucho"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ]
                    ]
                }
            },
            "c": {
                "length": 14,
                "label": "Recurso electrónico",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Clase de material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Código en posición 00; cambia la plantilla del 007."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Designación específica del material",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 2,
                        "len": 1,
                        "pos": "02",
                        "name": "No definida",
                        "kind": "reserved",
                        "group": "fisico",
                        "hint": "Posición sin definición (# o espacio)."
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
                        "name": "Dimensiones",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 5,
                        "len": 1,
                        "pos": "05",
                        "name": "Sonido",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 6,
                        "len": 3,
                        "pos": "06-08",
                        "name": "Profundidad de color",
                        "kind": "select3",
                        "group": "fisico"
                    },
                    {
                        "start": 9,
                        "len": 1,
                        "pos": "09",
                        "name": "Formatos de archivo",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 10,
                        "len": 1,
                        "pos": "10",
                        "name": "Indicadores de control de calidad",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 11,
                        "len": 1,
                        "pos": "11",
                        "name": "Antecedente/fuente",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 12,
                        "len": 1,
                        "pos": "12",
                        "name": "Nivel de compresión",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 13,
                        "len": 1,
                        "pos": "13",
                        "name": "Calidad del reformateo",
                        "kind": "select",
                        "group": "fisico"
                    }
                ],
                "codeTables": {
                    "0": [
                        [
                            "c",
                            "Recurso electrónico"
                        ]
                    ],
                    "1": [
                        [
                            "a",
                            "Cartucho de cinta"
                        ],
                        [
                            "b",
                            "Cartucho de chip"
                        ],
                        [
                            "c",
                            "Cartucho disco óptico"
                        ],
                        [
                            "d",
                            "Disco de ordenador"
                        ],
                        [
                            "e",
                            "Cartucho de ordenador"
                        ],
                        [
                            "f",
                            "Casete"
                        ],
                        [
                            "h",
                            "Bobina de cinta"
                        ],
                        [
                            "j",
                            "Disco magnético"
                        ],
                        [
                            "k",
                            "Tarjeta de ordenador"
                        ],
                        [
                            "m",
                            "Disco magnético-óptico"
                        ],
                        [
                            "o",
                            "Disco óptico"
                        ],
                        [
                            "r",
                            "Remoto"
                        ],
                        [
                            "s",
                            "Dispositivo independiente"
                        ],
                        [
                            "u",
                            "No especificado"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "2": [
                        [
                            "#",
                            "Indefinido"
                        ]
                    ],
                    "3": [
                        [
                            "a",
                            "Monocromo"
                        ],
                        [
                            "b",
                            "Blanco y negro"
                        ],
                        [
                            "c",
                            "Polícromo"
                        ],
                        [
                            "g",
                            "Escala de grises"
                        ],
                        [
                            "m",
                            "Mixto"
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "4": [
                        [
                            "a",
                            "3 ½ pulg."
                        ],
                        [
                            "e",
                            "12 pulg."
                        ],
                        [
                            "g",
                            "4 ¾ pulg."
                        ],
                        [
                            "i",
                            "1 1/8 x 2 3/8 pulg."
                        ],
                        [
                            "j",
                            "3 7/8 x 2 ½ pulg."
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "o",
                            "5 ¼ pulg."
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "v",
                            "8 pulg."
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "5": [
                        [
                            "#",
                            "Sin sonido"
                        ],
                        [
                            "a",
                            "Sonido"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "No aplicable"
                        ],
                        [
                            "---",
                            "Desconocido"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "9": [
                        [
                            "a",
                            "Un formato"
                        ],
                        [
                            "m",
                            "Múltiples formatos"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "10": [
                        [
                            "a",
                            "Ausente"
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "p",
                            "Presente"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "11": [
                        [
                            "a",
                            "Reproducido del original"
                        ],
                        [
                            "b",
                            "De microforma"
                        ],
                        [
                            "c",
                            "De recurso electrónico"
                        ],
                        [
                            "d",
                            "De soporte intermedio"
                        ],
                        [
                            "m",
                            "Mixto"
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "12": [
                        [
                            "a",
                            "No comprimido"
                        ],
                        [
                            "b",
                            "Sin pérdida"
                        ],
                        [
                            "d",
                            "Con pérdida"
                        ],
                        [
                            "m",
                            "Mixto"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "13": [
                        [
                            "a",
                            "Acceso"
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "p",
                            "Preservación"
                        ],
                        [
                            "r",
                            "Sustitución"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ]
                }
            },
            "d": {
                "length": 6,
                "label": "Globo terrestre",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Clase de material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Código en posición 00; cambia la plantilla del 007."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Designación específica del material",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 2,
                        "len": 1,
                        "pos": "02",
                        "name": "No definida",
                        "kind": "reserved",
                        "group": "fisico",
                        "hint": "Posición sin definición (# o espacio)."
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
                        "name": "Medio físico",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 5,
                        "len": 1,
                        "pos": "05",
                        "name": "Tipo de reproducción",
                        "kind": "select",
                        "group": "fisico"
                    }
                ],
                "codeTables": {
                    "0": [
                        [
                            "d",
                            "Globo terrestre"
                        ]
                    ],
                    "1": [
                        [
                            "a",
                            "Globo celeste"
                        ],
                        [
                            "b",
                            "Globo planetario o lunar"
                        ],
                        [
                            "c",
                            "Globo terráqueo"
                        ],
                        [
                            "e",
                            "Globo de la Luna"
                        ],
                        [
                            "u",
                            "No especificado"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "2": [
                        [
                            "#",
                            "Indefinido"
                        ]
                    ],
                    "3": [
                        [
                            "a",
                            "Monocromo"
                        ],
                        [
                            "c",
                            "Polícromo"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "4": [
                        [
                            "a",
                            "Papel"
                        ],
                        [
                            "b",
                            "Madera"
                        ],
                        [
                            "c",
                            "Piedra"
                        ],
                        [
                            "d",
                            "Metal"
                        ],
                        [
                            "e",
                            "Sintético"
                        ],
                        [
                            "f",
                            "Piel"
                        ],
                        [
                            "g",
                            "Textil"
                        ],
                        [
                            "i",
                            "Plástico"
                        ],
                        [
                            "l",
                            "Vinilo"
                        ],
                        [
                            "n",
                            "Vitela"
                        ],
                        [
                            "p",
                            "Yeso"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "v",
                            "Cuero"
                        ],
                        [
                            "w",
                            "Pergamino"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "5": [
                        [
                            "f",
                            "Facsímil"
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ]
                }
            },
            "f": {
                "length": 10,
                "label": "Material táctil",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Clase de material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Código en posición 00; cambia la plantilla del 007."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Designación específica del material",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 2,
                        "len": 1,
                        "pos": "02",
                        "name": "No definida",
                        "kind": "reserved",
                        "group": "fisico",
                        "hint": "Posición sin definición (# o espacio)."
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
                        "name": "Nivel de contracción",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 6,
                        "len": 3,
                        "pos": "06-08",
                        "name": "Formato de música en braille",
                        "kind": "select3",
                        "group": "fisico"
                    },
                    {
                        "start": 9,
                        "len": 1,
                        "pos": "09",
                        "name": "Características físicas especiales",
                        "kind": "select",
                        "group": "fisico"
                    }
                ],
                "codeTables": {
                    "0": [
                        [
                            "f",
                            "Material táctil"
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
                            "Combinación"
                        ],
                        [
                            "d",
                            "Táctil sin escritura"
                        ],
                        [
                            "u",
                            "No especificado"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "2": [
                        [
                            "#",
                            "Indefinido"
                        ]
                    ],
                    "3": [
                        [
                            "#",
                            "Sin especificar"
                        ],
                        [
                            "a",
                            "Literatura braille"
                        ],
                        [
                            "b",
                            "Código de formato"
                        ],
                        [
                            "c",
                            "Matemática/científica"
                        ],
                        [
                            "d",
                            "Informática"
                        ],
                        [
                            "e",
                            "Música braille"
                        ],
                        [
                            "m",
                            "Múltiples tipos"
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "5": [
                        [
                            "a",
                            "No contraído"
                        ],
                        [
                            "b",
                            "Contraído"
                        ],
                        [
                            "m",
                            "Combinación"
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "6": [
                        [
                            "#",
                            "Sin formato música"
                        ],
                        [
                            "a",
                            "Compás sobre compás"
                        ],
                        [
                            "b",
                            "Compás por compás"
                        ],
                        [
                            "c",
                            "Línea sobre línea"
                        ],
                        [
                            "d",
                            "Párrafo"
                        ],
                        [
                            "e",
                            "Línea individual"
                        ],
                        [
                            "f",
                            "Sección por sección"
                        ],
                        [
                            "g",
                            "Línea por línea"
                        ],
                        [
                            "h",
                            "Partitura abierta"
                        ],
                        [
                            "i",
                            "Acordes melodía"
                        ],
                        [
                            "j",
                            "Orquestación abreviada"
                        ],
                        [
                            "k",
                            "Sinopsis"
                        ],
                        [
                            "l",
                            "Partitura vertical"
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "9": [
                        [
                            "a",
                            "Print/braille"
                        ],
                        [
                            "b",
                            "Braille jumbo"
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ]
                }
            },
            "g": {
                "length": 6,
                "label": "Material gráfico proyectable",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Clase de material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Código en posición 00; cambia la plantilla del 007."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Designación específica del material",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 2,
                        "len": 1,
                        "pos": "02",
                        "name": "No definida",
                        "kind": "reserved",
                        "group": "fisico",
                        "hint": "Posición sin definición (# o espacio)."
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
                        "name": "Base de la emulsión",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 5,
                        "len": 1,
                        "pos": "05",
                        "name": "Sonido incorporado o separado",
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
                            "Material gráfico proyectable"
                        ]
                    ],
                    "1": [
                        [
                            "c",
                            "Cartucho de película"
                        ],
                        [
                            "d",
                            "Filmina"
                        ],
                        [
                            "f",
                            "Película (tipo no especificado)"
                        ],
                        [
                            "o",
                            "Rollo de película"
                        ],
                        [
                            "s",
                            "Diapositiva"
                        ],
                        [
                            "t",
                            "Transparencia"
                        ],
                        [
                            "u",
                            "No especificado"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "2": [
                        [
                            "#",
                            "Indefinido"
                        ]
                    ],
                    "3": [
                        [
                            "a",
                            "Monocromo"
                        ],
                        [
                            "b",
                            "Blanco y negro"
                        ],
                        [
                            "c",
                            "Polícromo"
                        ],
                        [
                            "h",
                            "Coloreado a mano"
                        ],
                        [
                            "m",
                            "Mixto"
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "4": [
                        [
                            "d",
                            "Vidrio"
                        ],
                        [
                            "e",
                            "Sintético"
                        ],
                        [
                            "j",
                            "Película de seguridad"
                        ],
                        [
                            "k",
                            "Película no de seguridad"
                        ],
                        [
                            "m",
                            "Colección mixta"
                        ],
                        [
                            "o",
                            "Papel"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "5": [
                        [
                            "#",
                            "Sin sonido (mudo)"
                        ],
                        [
                            "a",
                            "Sonido incorporado"
                        ],
                        [
                            "b",
                            "Sonido separado"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "6": [
                        [
                            "#",
                            "Sin sonido (mudo)"
                        ],
                        [
                            "a",
                            "Banda sonora óptica"
                        ],
                        [
                            "b",
                            "Banda sonora magnética"
                        ],
                        [
                            "c",
                            "Cinta de audio magnética en cartucho"
                        ],
                        [
                            "d",
                            "Disco de sonido"
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
                            "Optical and magnetic Sonido track on motion picture film"
                        ],
                        [
                            "h",
                            "Cinta de vídeo"
                        ],
                        [
                            "i",
                            "Disco de vídeo"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "7": [
                        [
                            "a",
                            "Normalizado 8 mm. film width"
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
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "8": [
                        [
                            "#",
                            "Sin secondary support"
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
                            "Sintético"
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
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ]
                }
            },
            "h": {
                "length": 6,
                "label": "Microforma",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Clase de material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Código en posición 00; cambia la plantilla del 007."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Designación específica del material",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 2,
                        "len": 1,
                        "pos": "02",
                        "name": "No definida",
                        "kind": "reserved",
                        "group": "fisico",
                        "hint": "Posición sin definición (# o espacio)."
                    },
                    {
                        "start": 3,
                        "len": 1,
                        "pos": "03",
                        "name": "Polaridad",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 4,
                        "len": 1,
                        "pos": "04",
                        "name": "Dimensiones",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 5,
                        "len": 1,
                        "pos": "05",
                        "name": "Nivel de reducción",
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
                        "name": "Generación",
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
                            "Microforma"
                        ]
                    ],
                    "1": [
                        [
                            "a",
                            "Tarjeta de apertura"
                        ],
                        [
                            "b",
                            "Cartucho microfilme"
                        ],
                        [
                            "c",
                            "Casete microfilme"
                        ],
                        [
                            "d",
                            "Bobina microfilme"
                        ],
                        [
                            "e",
                            "Microficha"
                        ],
                        [
                            "f",
                            "Casete microficha"
                        ],
                        [
                            "g",
                            "Microopaco"
                        ],
                        [
                            "h",
                            "Tira microfilme"
                        ],
                        [
                            "j",
                            "Rollo microfilme"
                        ],
                        [
                            "u",
                            "No especificado"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "2": [
                        [
                            "#",
                            "Indefinido"
                        ]
                    ],
                    "3": [
                        [
                            "a",
                            "Positiva"
                        ],
                        [
                            "b",
                            "Negativa"
                        ],
                        [
                            "m",
                            "Mixta"
                        ],
                        [
                            "n",
                            "Desconocido"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "4": [
                        [
                            "a",
                            "8 mm"
                        ],
                        [
                            "d",
                            "16 mm"
                        ],
                        [
                            "f",
                            "35 mm"
                        ],
                        [
                            "g",
                            "70 mm"
                        ],
                        [
                            "h",
                            "105 mm"
                        ],
                        [
                            "l",
                            "3x5 pulg."
                        ],
                        [
                            "m",
                            "4x6 pulg."
                        ],
                        [
                            "o",
                            "6x9 pulg."
                        ],
                        [
                            "p",
                            "Tarjeta apertura"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "5": [
                        [
                            "a",
                            "Reducción baja"
                        ],
                        [
                            "b",
                            "Reducción normal"
                        ],
                        [
                            "c",
                            "Reducción alta"
                        ],
                        [
                            "d",
                            "Reducción muy alta"
                        ],
                        [
                            "e",
                            "Reducción ultraalta"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "v",
                            "Distintos índices"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "Mixto"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "Desconocido"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "No aplicable"
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
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ]
                }
            },
            "k": {
                "length": 4,
                "label": "Material gráfico no proyectable",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Clase de material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Código en posición 00; cambia la plantilla del 007."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Designación específica del material",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 2,
                        "len": 1,
                        "pos": "02",
                        "name": "No definida",
                        "kind": "reserved",
                        "group": "fisico",
                        "hint": "Posición sin definición (# o espacio)."
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
                            "Material gráfico no proyectable"
                        ]
                    ],
                    "1": [
                        [
                            "a",
                            "Ficha de actividad"
                        ],
                        [
                            "c",
                            "Collage"
                        ],
                        [
                            "d",
                            "Dibujo"
                        ],
                        [
                            "e",
                            "Pintura"
                        ],
                        [
                            "f",
                            "Reproducción fotomecánica"
                        ],
                        [
                            "g",
                            "Negativo fotográfico"
                        ],
                        [
                            "h",
                            "Positivo fotográfico"
                        ],
                        [
                            "i",
                            "Imagen"
                        ],
                        [
                            "j",
                            "Estampa"
                        ],
                        [
                            "k",
                            "Cartel"
                        ],
                        [
                            "l",
                            "Dibujo técnico"
                        ],
                        [
                            "n",
                            "Gráfico"
                        ],
                        [
                            "o",
                            "Ficha didáctica"
                        ],
                        [
                            "p",
                            "Postal"
                        ],
                        [
                            "q",
                            "Icono"
                        ],
                        [
                            "r",
                            "Radiografía"
                        ],
                        [
                            "s",
                            "Lámina didáctica"
                        ],
                        [
                            "u",
                            "No especificado"
                        ],
                        [
                            "v",
                            "Fotografía"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "2": [
                        [
                            "#",
                            "Indefinido"
                        ]
                    ],
                    "3": [
                        [
                            "a",
                            "Monocromo"
                        ],
                        [
                            "b",
                            "Blanco y negro"
                        ],
                        [
                            "c",
                            "Polícromo"
                        ],
                        [
                            "h",
                            "Coloreado a mano"
                        ],
                        [
                            "m",
                            "Mixto"
                        ],
                        [
                            "n",
                            "Sin aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "Sintético"
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
                            "Papel"
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
                            "Piedra"
                        ],
                        [
                            "t",
                            "Madera"
                        ],
                        [
                            "u",
                            "Desconocido"
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
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "5": [
                        [
                            "#",
                            "Sin secondary support"
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
                            "Sintético"
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
                            "Papel"
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
                            "Piedra"
                        ],
                        [
                            "t",
                            "Madera"
                        ],
                        [
                            "u",
                            "Desconocido"
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
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ]
                }
            },
            "m": {
                "length": 7,
                "label": "Película cinematográfica",
                "segments": [
                    {
                        "start": 0,
                        "len": 1,
                        "pos": "00",
                        "name": "Clase de material",
                        "kind": "select",
                        "group": "fisico",
                        "hint": "Código en posición 00; cambia la plantilla del 007."
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Designación específica del material",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 2,
                        "len": 1,
                        "pos": "02",
                        "name": "No definida",
                        "kind": "reserved",
                        "group": "fisico",
                        "hint": "Posición sin definición (# o espacio)."
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
                        "name": "Formato de presentación",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 5,
                        "len": 1,
                        "pos": "05",
                        "name": "Sonido incorporado o separado",
                        "kind": "select",
                        "group": "fisico"
                    },
                    {
                        "start": 6,
                        "len": 1,
                        "pos": "06",
                        "name": "Medio sonoro",
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
                        "name": "Configuración de canales de reproducción",
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
                        "name": "Generación",
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
                            "Película cinematográfica"
                        ]
                    ],
                    "1": [
                        [
                            "c",
                            "Cartucho de película"
                        ],
                        [
                            "f",
                            "Casete de película"
                        ],
                        [
                            "o",
                            "Rollo de película"
                        ],
                        [
                            "r",
                            "Bobina de película"
                        ],
                        [
                            "u",
                            "No especificado"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "2": [
                        [
                            "#",
                            "Indefinido"
                        ]
                    ],
                    "3": [
                        [
                            "b",
                            "Blanco y negro"
                        ],
                        [
                            "c",
                            "Polícromo"
                        ],
                        [
                            "h",
                            "Coloreado a mano"
                        ],
                        [
                            "m",
                            "Mixto"
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "4": [
                        [
                            "a",
                            "Banda sonido normalizada"
                        ],
                        [
                            "b",
                            "No anamórfico"
                        ],
                        [
                            "c",
                            "3D"
                        ],
                        [
                            "d",
                            "Anamórfico"
                        ],
                        [
                            "e",
                            "Otros formatos pantalla ancha"
                        ],
                        [
                            "f",
                            "Banda muda normalizada"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "5": [
                        [
                            "#",
                            "Sin sonido (mudo)"
                        ],
                        [
                            "a",
                            "Sonido incorporado"
                        ],
                        [
                            "b",
                            "Sonido separado"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "6": [
                        [
                            "#",
                            "Sin sonido"
                        ],
                        [
                            "a",
                            "Banda sonora óptica"
                        ],
                        [
                            "b",
                            "Banda sonora magnética"
                        ],
                        [
                            "c",
                            "Cinta audio cartucho"
                        ],
                        [
                            "d",
                            "Disco de sonido"
                        ],
                        [
                            "e",
                            "Cinta audio bobina"
                        ],
                        [
                            "f",
                            "Cinta audio casete"
                        ],
                        [
                            "g",
                            "Óptica y magnética"
                        ],
                        [
                            "h",
                            "Cinta de vídeo"
                        ],
                        [
                            "i",
                            "Disco de vídeo"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "7": [
                        [
                            "a",
                            "Normalizado 8 mm."
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
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "8": [
                        [
                            "k",
                            "Mixto"
                        ],
                        [
                            "m",
                            "Monaural"
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "q",
                            "Quadraphonic, multichannel, or surround"
                        ],
                        [
                            "s",
                            "Estereofónico"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "Título bands/inter-title rolls"
                        ],
                        [
                            "g",
                            "Production rolls"
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "No aplicable"
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
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "No aplicable"
                        ],
                        [
                            "p",
                            "Sepia tone"
                        ],
                        [
                            "q",
                            "Otro tone"
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
                            "Desconocido"
                        ],
                        [
                            "v",
                            "Hand colored"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "Sin intento de codificar"
                        ]
                    ],
                    "16": [
                        [
                            "c",
                            "Completo"
                        ],
                        [
                            "i",
                            "Incomplete"
                        ],
                        [
                            "n",
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                        "name": "Clase de material",
                        "kind": "text",
                        "group": "content"
                    },
                    {
                        "start": 1,
                        "len": 1,
                        "pos": "01",
                        "name": "Designación específica del material",
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
                            "Imagen de teledetección"
                        ]
                    ],
                    "1": [
                        [
                            "u",
                            "Sin especificar"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ],
                    "2": [
                        [
                            "#",
                            "Indefinido"
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
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "No aplicable"
                        ],
                        [
                            "u",
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "Desconocido"
                        ],
                        [
                            "z",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
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
                            "Otro infrared Datos"
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
                            "Otro microwave Datos"
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
                            "Otro ultraviolet Datos"
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
                            "Combination of various Datos types"
                        ],
                        [
                            "nn",
                            "No aplicable"
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
                            "Otro acoustical Datos"
                        ],
                        [
                            "ra",
                            "Gravity anomalies (General)"
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
                            "Magnetic Campo"
                        ],
                        [
                            "ta",
                            "radiometric surveys"
                        ],
                        [
                            "uu",
                            "Desconocido"
                        ],
                        [
                            "zz",
                            "Otro"
                        ],
                        [
                            "",
                            "Sin intento de codificar"
                        ]
                    ]
                }
            }
        }
    }
};

    global.marcCatEsLeaderSpecs = {
    "editable": [
        {
            "pos": 5,
            "label": "05 Estatus",
            "len": "3",
            "options": [
                [
                    "n",
                    "Nuevo"
                ],
                [
                    "c",
                    "Corregido"
                ],
                [
                    "d",
                    "Suprimido"
                ],
                [
                    "o",
                    "Enajenado"
                ],
                [
                    "p",
                    "Aumentado"
                ],
                [
                    "r",
                    "Revisado"
                ],
                [
                    "s",
                    "Suprimido parcialmente"
                ]
            ]
        },
        {
            "pos": 6,
            "label": "06 Tipo",
            "len": "3",
            "options": [
                [
                    "a",
                    "Texto"
                ],
                [
                    "c",
                    "Música"
                ],
                [
                    "d",
                    "Partitura"
                ],
                [
                    "e",
                    "Mapa"
                ],
                [
                    "f",
                    "Archivo"
                ],
                [
                    "g",
                    "Proyectado"
                ],
                [
                    "i",
                    "No musical"
                ],
                [
                    "j",
                    "Grabación"
                ],
                [
                    "k",
                    "Imagen"
                ],
                [
                    "m",
                    "Archivo comp."
                ],
                [
                    "o",
                    "Kit"
                ],
                [
                    "p",
                    "Mixto"
                ],
                [
                    "r",
                    "Objeto"
                ],
                [
                    "t",
                    "Texto manusc."
                ]
            ]
        },
        {
            "pos": 7,
            "label": "07 Nivel",
            "len": "3",
            "options": [
                [
                    "a",
                    "Analítico"
                ],
                [
                    "b",
                    "Componente"
                ],
                [
                    "c",
                    "Colección"
                ],
                [
                    "d",
                    "Subunidad"
                ],
                [
                    "i",
                    "Integrante"
                ],
                [
                    "m",
                    "Monográfico"
                ],
                [
                    "s",
                    "Seriación"
                ]
            ]
        },
        {
            "pos": 8,
            "label": "08 Control",
            "len": "1",
            "options": [
                [
                    " ",
                    "Sin info"
                ],
                [
                    "#",
                    "No aplica"
                ]
            ]
        },
        {
            "pos": 9,
            "label": "09 Codificación",
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
            "label": "17 Nivel cod.",
            "len": "1",
            "options": [
                [
                    " ",
                    "Sin info"
                ],
                [
                    "#",
                    "No aplica"
                ],
                [
                    "1",
                    "Completa"
                ],
                [
                    "2",
                    "Mínima"
                ],
                [
                    "3",
                    "Sustituida"
                ],
                [
                    "4",
                    "Parcial"
                ],
                [
                    "5",
                    "Nivel 5"
                ],
                [
                    "8",
                    "Nivel 8"
                ]
            ]
        },
        {
            "pos": 18,
            "label": "18 Forma cat.",
            "len": "1",
            "options": [
                [
                    " ",
                    "Sin info"
                ],
                [
                    "#",
                    "No aplica"
                ],
                [
                    "a",
                    "AACR2"
                ],
                [
                    "i",
                    "ISBD"
                ],
                [
                    "u",
                    "Desconocida"
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
            "title": "Longitud del registro (recalculada al exportar)"
        },
        {
            "key": "1011",
            "label": "10–11",
            "start": 10,
            "len": 2,
            "title": "Indicador de longitud de planchuela"
        },
        {
            "key": "1216",
            "label": "12–16",
            "start": 12,
            "len": 5,
            "title": "Dirección base (recalculada al exportar)"
        },
        {
            "key": "2023",
            "label": "20–23",
            "start": 20,
            "len": 4,
            "title": "Mapa de entradas (4500 al exportar)"
        }
    ]
};

    global.marcCatPdfFieldSpecs = global.marcCatEsFieldSpecs;

})(typeof window !== "undefined" ? window : globalThis);
