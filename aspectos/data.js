// ============================================
// ASTROCRUDO — Aspectos Clásicos
// Una sola energía por signo (modelo tradicional)
// ============================================

/**
 * ESTRUCTURA NUEVA (Clásica + Nota de Sombra)
 *
 * Cada signo tiene:
 * - Datos tradicionales (regente, exaltación, partes del cuerpo, cualidades)
 * - classicalText: descripción en lenguaje astrológico tradicional (como el ejemplo de Aries)
 * - shadowNote: breve interpretación psicológica en tono AstroCrudo
 * - video: ruta al video cinematográfico único del signo
 */

const ASPECTOS_DATA = {

  "Aries": {
    slug: "aries",
    symbol: "♈",
    element: "Fuego",
    mode: "Cardinal",
    ruler: "Marte",
    exaltation: "Sol",
    body: "Cabeza y rostro",
    quality: "Caliente y seco, colérico, movible y equinoccial",
    shortDescription: "El que inicia. Fuerza de voluntad pura y el coraje de dar el primer paso.",

    classicalText: "Aries es el primer signo del zodíaco, de naturaleza fuego, caliente y seco, colérico, movible y equinoccial. Es la casa diurna de Marte y exaltación del Sol. Goberna la cabeza y el rostro del cuerpo humano. Su temperamento produce acción violenta, intemperante y bestial, iniciadora de movimiento pero no sostenedora de él. Estas cualidades operan igual en todo ser humano, varón o mujer, según la configuración de su figura natal.",

    shadowNote: "Esta energía no distingue género. La misma fuerza que abre caminos puede volverse destrucción cuando no aprende a sostener lo que inicia. El trabajo con la sombra de Aries es aprender que el coraje verdadero incluye la capacidad de esperar y de perder sin desaparecer.",

    video: "/assets/videos/clasica/aries.mp4"
  },

  "Tauro": {
    slug: "tauro",
    symbol: "♉",
    element: "Tierra",
    mode: "Fijo",
    ruler: "Venus",
    exaltation: "Luna",
    body: "Cuello, garganta y nuca",
    quality: "Frío y seco, melancólico, fijo y nocturno",
    shortDescription: "El que sostiene. Resistencia, placer encarnado y construcción que dura.",

    classicalText: "Tauro es el segundo signo del zodíaco, de naturaleza tierra, frío y seco, melancólico, fijo y nocturno. Es la casa nocturna de Venus y exaltación de la Luna. Goberna el cuello, la garganta y la nuca del cuerpo humano. Su temperamento produce estabilidad, lentitud y gran resistencia al cambio. Aprecia lo tangible, lo que puede tocarse, cultivarse y conservarse. Estas cualidades operan igual en todo ser humano, varón o mujer, según la configuración de su figura natal.",

    shadowNote: "La misma fuerza que construye legados puede volverse prisión cuando se confunde arraigo con inmovilidad. El trabajo con la sombra de Tauro consiste en distinguir entre lo que nutre y lo que solo adormece el miedo a perder.",

    video: "/assets/videos/clasica/tauro.mp4"
  },

  "Géminis": {
    slug: "geminis",
    symbol: "♊",
    element: "Aire",
    mode: "Mutable",
    ruler: "Mercurio",
    exaltation: null,
    body: "Brazos, hombros, manos y pulmones",
    quality: "Caliente y húmedo, sanguíneo, mutable y diurno",
    shortDescription: "El que pregunta. Inteligencia, dualidad y la necesidad de nombrar lo que existe.",

    classicalText: "Géminis es el tercer signo del zodíaco, de naturaleza aire, caliente y húmedo, sanguíneo, mutable y diurno. Es la casa diurna de Mercurio. Goberna los brazos, los hombros, las manos y los pulmones del cuerpo humano. Su temperamento produce curiosidad, versatilidad y rapidez de pensamiento, pero también inconstancia y dificultad para comprometerse con una sola dirección. Estas cualidades operan igual en todo ser humano, varón o mujer, según la configuración de su figura natal.",

    shadowNote: "La mente que todo lo toca puede volverse una forma elegante de no habitar nada. El trabajo con la sombra de Géminis es aprender a permanecer en una verdad aunque duela más que seguir saltando entre versiones.",

    video: "/assets/videos/clasica/geminis.mp4"
  },

  "Cáncer": {
    slug: "cancer",
    symbol: "♋",
    element: "Agua",
    mode: "Cardinal",
    ruler: "Luna",
    exaltation: "Júpiter",
    body: "Pecho, estómago y senos",
    quality: "Frío y húmedo, flemático, cardinal y nocturno",
    shortDescription: "El que protege. Memoria emocional, contención y el instinto de origen.",

    classicalText: "Cáncer es el cuarto signo del zodíaco, de naturaleza agua, frío y húmedo, flemático, cardinal y nocturno. Es la casa de la Luna y exaltación de Júpiter. Goberna el pecho, el estómago y los senos del cuerpo humano. Su temperamento produce gran sensibilidad, memoria y capacidad de nutrir y proteger. Busca contención y seguridad, y reacciona con fuerza cuando percibe amenaza al hogar o a los suyos. Estas cualidades operan igual en todo ser humano, varón o mujer, según la configuración de su figura natal.",

    shadowNote: "La misma fuerza que crea refugio puede volverse control cuando el miedo al abandono gobierna. El trabajo con la sombra de Cáncer es aprender a contener sin poseer y a soltar sin desaparecer.",

    video: "/assets/videos/clasica/cancer.mp4"
  },

  "Leo": {
    slug: "leo",
    symbol: "♌",
    element: "Fuego",
    mode: "Fijo",
    ruler: "Sol",
    exaltation: null,
    body: "Corazón, espalda y columna",
    quality: "Caliente y seco, colérico, fijo y diurno",
    shortDescription: "El que brilla. Expresión vital, dignidad y la necesidad de ser visto en su esencia.",

    classicalText: "Leo es el quinto signo del zodíaco, de naturaleza fuego, caliente y seco, colérico, fijo y diurno. Es la casa del Sol. Goberna el corazón, la espalda y la columna del cuerpo humano. Su temperamento produce generosidad, orgullo, nobleza y deseo de reconocimiento. Necesita expresar su naturaleza central y creativa, y sufre cuando se ve obligado a permanecer oculto o pequeño. Estas cualidades operan igual en todo ser humano, varón o mujer, según la configuración de su figura natal.",

    shadowNote: "La misma luz que ilumina puede volverse ceguera cuando exige ser el centro a toda costa. El trabajo con la sombra de Leo es aprender que la dignidad verdadera no depende de ser aplaudido.",

    video: "/assets/videos/clasica/leo.mp4"
  },

  "Virgo": {
    slug: "virgo",
    symbol: "♍",
    element: "Tierra",
    mode: "Mutable",
    ruler: "Mercurio",
    exaltation: "Mercurio",
    body: "Intestinos, sistema digestivo y manos",
    quality: "Frío y seco, melancólico, mutable y nocturno",
    shortDescription: "El que refina. Discernimiento, servicio y la búsqueda de la forma perfecta.",

    classicalText: "Virgo es el sexto signo del zodíaco, de naturaleza tierra, frío y seco, melancólico, mutable y nocturno. Es la casa y exaltación de Mercurio. Goberna los intestinos, el sistema digestivo y las manos del cuerpo humano. Su temperamento produce aguda capacidad de análisis, atención al detalle y deseo de purificar y mejorar. Distingue lo útil de lo inútil, lo puro de lo impuro, y encuentra sentido en el orden y en el servicio. Estas cualidades operan igual en todo ser humano, varón o mujer, según la configuración de su figura natal.",

    shadowNote: "La misma precisión que sana puede volverse tortura cuando nada es nunca suficiente. El trabajo con la sombra de Virgo es aprender a servir sin sacrificarse y a aceptar lo imperfecto como parte de lo real.",

    video: "/assets/videos/clasica/virgo.mp4"
  },

  "Libra": {
    slug: "libra",
    symbol: "♎",
    element: "Aire",
    mode: "Cardinal",
    ruler: "Venus",
    exaltation: "Saturno",
    body: "Riñones, vejiga y región lumbar",
    quality: "Caliente y húmedo, sanguíneo, cardinal y diurno",
    shortDescription: "El que equilibra. Relación, justicia y el arte de encontrar el punto medio.",

    classicalText: "Libra es el séptimo signo del zodíaco, de naturaleza aire, caliente y húmedo, sanguíneo, cardinal y diurno. Es la casa de Venus y exaltación de Saturno. Goberna los riñones, la vejiga y la región lumbar del cuerpo humano. Su temperamento produce amor por la armonía, el equilibrio y las relaciones justas. Busca la belleza en la proporción y sufre cuando se ve forzado a tomar partido de forma desequilibrada. Estas cualidades operan igual en todo ser humano, varón o mujer, según la configuración de su figura natal.",

    shadowNote: "La misma búsqueda de armonía puede volverse parálisis cuando el miedo al conflicto impide elegir. El trabajo con la sombra de Libra es aprender a sostener el peso de una decisión aunque incomode a otros.",

    video: "/assets/videos/clasica/libra.mp4"
  },

  "Escorpio": {
    slug: "escorpio",
    symbol: "♏",
    element: "Agua",
    mode: "Fijo",
    ruler: "Marte y Plutón (tradicionalmente Marte)",
    exaltation: null,
    body: "Órganos sexuales y sistema excretor",
    quality: "Frío y húmedo, flemático, fijo y nocturno",
    shortDescription: "El que transforma. Intensidad, poder y la capacidad de morir y renacer.",

    classicalText: "Escorpio es el octavo signo del zodíaco, de naturaleza agua, frío y húmedo, flemático, fijo y nocturno. Es la casa nocturna de Marte. Goberna los órganos sexuales y el sistema excretor del cuerpo humano. Su temperamento produce profundidad, reserva, capacidad de investigación y poder de transformación. No teme lo oculto ni lo prohibido; al contrario, lo atrae como materia de conocimiento y poder. Estas cualidades operan igual en todo ser humano, varón o mujer, según la configuración de su figura natal.",

    shadowNote: "La misma fuerza que penetra misterios puede volverse destrucción cuando se usa para controlar o vengarse. El trabajo con la sombra de Escorpio es aprender a morir sin matar lo que ama.",

    video: "/assets/videos/clasica/escorpio.mp4"
  },

  "Sagitario": {
    slug: "sagitario",
    symbol: "♐",
    element: "Fuego",
    mode: "Mutable",
    ruler: "Júpiter",
    exaltation: null,
    body: "Caderas, muslos y sistema nervioso",
    quality: "Caliente y seco, colérico, mutable y diurno",
    shortDescription: "El que busca. Expansión, verdad y la necesidad de dar sentido a la existencia.",

    classicalText: "Sagitario es el noveno signo del zodíaco, de naturaleza fuego, caliente y seco, colérico, mutable y diurno. Es la casa de Júpiter. Goberna las caderas, los muslos y el sistema nervioso del cuerpo humano. Su temperamento produce amor por la libertad, la aventura, la filosofía y la búsqueda de significado. Necesita horizontes amplios y sufre cuando se ve confinado a lo pequeño o a lo repetitivo. Estas cualidades operan igual en todo ser humano, varón o mujer, según la configuración de su figura natal.",

    shadowNote: "La misma sed de verdad puede volverse huida cuando ninguna respuesta es suficiente. El trabajo con la sombra de Sagitario es aprender que el viaje más importante a veces es hacia adentro.",

    video: "/assets/videos/clasica/sagitario.mp4"
  },

  "Capricornio": {
    slug: "capricornio",
    symbol: "♑",
    element: "Tierra",
    mode: "Cardinal",
    ruler: "Saturno",
    exaltation: "Marte",
    body: "Rodillas, huesos y piel",
    quality: "Frío y seco, melancólico, cardinal y nocturno",
    shortDescription: "El que construye. Disciplina, tiempo y la ambición de dejar algo que perdure.",

    classicalText: "Capricornio es el décimo signo del zodíaco, de naturaleza tierra, frío y seco, melancólico, cardinal y nocturno. Es la casa de Saturno y exaltación de Marte. Goberna las rodillas, los huesos y la piel del cuerpo humano. Su temperamento produce seriedad, paciencia, ambición a largo plazo y respeto por las estructuras que el tiempo valida. Valora el esfuerzo sostenido y la autoridad ganada, no regalada. Estas cualidades operan igual en todo ser humano, varón o mujer, según la configuración de su figura natal.",

    shadowNote: "La misma disciplina que edifica puede volverse cárcel cuando el miedo a ser irrelevante lo gobierna todo. El trabajo con la sombra de Capricornio es aprender que el tiempo también exige soltar.",

    video: "/assets/videos/clasica/capricornio.mp4"
  },

  "Acuario": {
    slug: "acuario",
    symbol: "♒",
    element: "Aire",
    mode: "Fijo",
    ruler: "Saturno y Urano (tradicionalmente Saturno)",
    exaltation: null,
    body: "Piernas, tobillos y sistema circulatorio",
    quality: "Caliente y húmedo, sanguíneo, fijo y diurno",
    shortDescription: "El que innova. Visión de futuro, libertad de pensamiento y servicio a lo colectivo.",

    classicalText: "Acuario es el undécimo signo del zodíaco, de naturaleza aire, caliente y húmedo, sanguíneo, fijo y diurno. Es la casa de Saturno. Goberna las piernas, los tobillos y el sistema circulatorio del cuerpo humano. Su temperamento produce originalidad, desapego emocional aparente, amor por la libertad intelectual y preocupación por el bien común. Ve patrones donde otros ven solo casos aislados. Estas cualidades operan igual en todo ser humano, varón o mujer, según la configuración de su figura natal.",

    shadowNote: "La misma distancia que permite ver el todo puede volverse frialdad cuando se usa para no sentir. El trabajo con la sombra de Acuario es aprender que la verdadera revolución también ocurre en la intimidad.",

    video: "/assets/videos/clasica/acuario.mp4"
  },

  "Piscis": {
    slug: "piscis",
    symbol: "♓",
    element: "Agua",
    mode: "Mutable",
    ruler: "Júpiter y Neptuno (tradicionalmente Júpiter)",
    exaltation: "Venus",
    body: "Pies y sistema linfático",
    quality: "Frío y húmedo, flemático, mutable y nocturno",
    shortDescription: "El que disuelve. Compasión, imaginación y la capacidad de fundirse con el todo.",

    classicalText: "Piscis es el duodécimo signo del zodíaco, de naturaleza agua, frío y húmedo, flemático, mutable y nocturno. Es la casa de Júpiter y exaltación de Venus. Goberna los pies y el sistema linfático del cuerpo humano. Su temperamento produce gran receptividad, compasión, imaginación y tendencia a disolverse en lo que lo rodea. Percibe lo invisible y lo emocional colectivo con facilidad, pero puede perder los contornos de su propia identidad. Estas cualidades operan igual en todo ser humano, varón o mujer, según la configuración de su figura natal.",

    shadowNote: "La misma apertura que permite la gracia puede volverse desaparición cuando no hay límites. El trabajo con la sombra de Piscis es aprender a ser un vaso sin dejar de ser alguien que lo sostiene.",

    video: "/assets/videos/clasica/piscis.mp4"
  }

};

// Helper
function getSignData(signName) {
  return ASPECTOS_DATA[signName] || null;
}

const SIGN_ORDER = [
  "Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo",
  "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"
];
