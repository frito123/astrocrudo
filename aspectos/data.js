// ============================================
// ASTROCRUDO — Aspectos de Luz y Sombra
// Archivo central de datos (única fuente de verdad)
// ============================================

/**
 * ============================================
 * CÓMO AGREGAR UN NUEVO SIGNO (PASO A PASO)
 * ============================================
 * 
 * 1. Agrega los datos del signo en este archivo (abajo).
 *    Copia la estructura completa de "Aries" y reemplaza el contenido.
 * 
 * 2. Crea la carpeta del signo:
 *    aspectos/[nombre-en-minusculas]/
 * 
 * 3. Copia el archivo "plantilla.html" y renómbralo como index.html dentro de esa carpeta.
 * 
 * 4. En el nuevo index.html, cambia SOLO esta línea:
 *    const CURRENT_SIGN = "Tauro";   // ← Nombre exacto como está aquí
 * 
 * 5. (Opcional) Actualiza el hub (aspectos/index.html) para activar la tarjeta del signo.
 * 
 * Los textos deben mantener el tono del proyecto:
 * - Psicológico y profundo
 * - Directo pero elegante
 * - Sin condescendencia
 * - Buen equilibrio entre luz y sombra
 */

const ASPECTOS_DATA = {

  "Aries": {
    slug: "aries",
    symbol: "♈",
    element: "Fuego",
    mode: "Cardinal",
    title: "Aries",
    subtitle: "El que se atreve",
    shortDescription: "Voluntad pura, coraje existencial y la fuerza de iniciar.",

    hombre: {
      positivos: {
        title: "El Guerrero que Abre Camino",
        text: "El Hombre Aries en su expresión luminosa es pura voluntad encarnada. No espera las condiciones perfectas: las crea. Su coraje no es solo físico; es la capacidad de dar el primer paso cuando todos los demás dudan, temen o necesitan más datos.\n\nEste hombre protege con instinto. Cuando ama, se lanza. Cuando cree en algo, lo defiende con una lealtad que puede parecer primitiva pero que es profundamente honesta. Su honestidad es su mayor regalo: no sabe fingir, no sabe manipular con palabras suaves. Lo que ve, lo dice. Lo que siente, lo muestra.\n\nEn su mejor versión, el Hombre Aries es el pionero que abre veredas para otros. Es el que se quema primero para que el camino quede iluminado. Su ego, cuando está integrado, no busca dominar: busca liderar desde el frente."
      },
      negativos: {
        title: "El Niño que Nunca Aprendió a Perder",
        text: "La sombra del Hombre Aries aparece cuando su voluntad choca contra la realidad: que no siempre puede ganar, que no siempre tiene la razón, que su velocidad puede destruir lo que más quiere proteger.\n\nEste hombre puede volverse peligrosamente infantil cuando se siente frustrado. La ira se convierte en su lenguaje principal. Golpea primero (física o verbalmente) para no tener que sentir la vulnerabilidad de haber sido herido. Su miedo más profundo —ser irrelevante, ser lento, ser débil— se disfraza de agresividad constante.\n\nEn su peor expresión, el Hombre Aries usa su coraje como excusa para no desarrollar inteligencia emocional. Herida a los que ama con su brutalidad \"honesta\". Abandona cuando las cosas se ponen difíciles porque \"el guerrero no se queda donde no hay batalla\". La batalla, muchas veces, está dentro de él."
      }
    },

    mujer: {
      positivos: {
        title: "La que no Pide Permiso para Ser",
        text: "La Mujer Aries en su luz es una fuerza de la naturaleza que se niega a pedir disculpas por existir con intensidad. No espera que la inviten a la mesa: se sienta. No espera que le den espacio: lo toma. Su independencia no es pose; es supervivencia convertida en identidad.\n\nEsta mujer tiene una honestidad que desarma. Dice lo que piensa cuando nadie más se atreve. Defiende a los suyos con una ferocidad que puede asustar a quienes no entienden que su amor es acción, no palabras suaves. Es pionera en un mundo que todavía castiga a las mujeres por ser demasiado directas, demasiado ambiciosas, demasiado ruidosas.\n\nEn su mejor versión, la Mujer Aries abre camino para otras mujeres simplemente por negarse a encogerse. Su coraje es contagioso. Su deseo de vivir en grande es un acto político y espiritual al mismo tiempo."
      },
      negativos: {
        title: "La que Ataca antes de Ser Herida",
        text: "La sombra de la Mujer Aries suele nacer de haber tenido que ser fuerte demasiado temprano. Su agresividad defensiva se vuelve su forma de relacionarse: ataca primero para no ser atacada. Confunde vulnerabilidad con debilidad, y por eso la evita con una disciplina militar.\n\nEsta mujer puede volverse competitiva hasta con las personas que ama. Necesita ganar, necesita tener razón, necesita ser la más rápida, la más valiente, la más independiente. Su miedo a depender de alguien la lleva a sabotear relaciones antes de que puedan herirla. Su ira, cuando no está integrada, quema todo a su paso —incluido a ella misma.\n\nEn su peor expresión, la Mujer Aries usa su \"fuerza\" como armadura contra la ternura. Desprecia en los demás (especialmente en otras mujeres) la sensibilidad que ella misma no se permite sentir. Su coraje se convierte en rigidez. Su fuego, en destrucción."
      }
    },

    // Rutas de video (rellenar cuando tengas los archivos)
    videos: {
      hombrePositivo: "",   // ej: "../../../assets/videos/aries/hombre-positivo.mp4"
      hombreNegativo: "",   // ej: "../../../assets/videos/aries/hombre-negativo.mp4"
      mujerPositivo: "",    // ej: "../../../assets/videos/aries/mujer-positivo.mp4"
      mujerNegativo: ""     // ej: "../../../assets/videos/aries/mujer-negativo.mp4"
    }
  },

  // ============================================
  // PLANTILLAS PARA NUEVOS SIGNOS (vacíos por ahora)
  // ============================================

  "Tauro": {
    slug: "tauro",
    symbol: "♉",
    element: "Tierra",
    mode: "Fijo",
    title: "Tauro",
    subtitle: "El que sostiene",
    shortDescription: "Estabilidad profunda, placer como ancla y la resistencia sagrada al cambio innecesario.",

    hombre: {
      positivos: {
        title: "El que Construye lo que Permanece",
        text: "El Hombre Tauro en su luz es una fuerza de enraizamiento. No se mueve por impulsos ni por modas. Sabe que las cosas valiosas requieren tiempo, constancia y contacto directo con la materia. Su poder no está en la velocidad, sino en la capacidad de sostener lo que otros abandonan cuando se pone difícil.\n\nEste hombre tiene una relación honesta con el cuerpo y con el mundo tangible. Valora lo que se puede tocar, cultivar y construir. Cuando ama, lo hace con una lealtad que no necesita declaraciones constantes. Su presencia es quieta pero densa. Ofrece seguridad real, no promesas.\n\nEn su mejor versión, el Hombre Tauro es el constructor de legados. Crea estructuras que sobreviven a las crisis porque no fueron hechas desde la urgencia, sino desde la paciencia y el respeto por lo que dura."
      },
      negativos: {
        title: "El que Prefiere la Comodidad a la Vida",
        text: "La sombra del Hombre Tauro aparece cuando confunde estabilidad con inmovilidad. Su apego a lo conocido se vuelve una forma sofisticada de miedo. Se queda en trabajos, relaciones o formas de vida que ya no lo nutren, solo porque representan lo que ya conoce y controla.\n\nEste hombre puede volverse posesivo. Lo que ama lo quiere tener, no acompañar. Su terquedad deja de ser fuerza y se convierte en arma contra cualquiera que intente moverlo, aunque sea hacia algo mejor. El placer, que en su luz es sagrado, en su sombra se vuelve anestesia: come, bebe, acumula o se encierra en rutinas para no tener que sentir lo que está evitando.\n\nEn su peor expresión, el Hombre Tauro sacrifica su propia evolución por mantener la ilusión de seguridad. Prefiere una muerte lenta y cómoda antes que el riesgo de renacer."
      }
    },

    mujer: {
      positivos: {
        title: "La que Sabe Habitar su Propio Cuerpo",
        text: "La Mujer Tauro en su luz tiene una presencia encarnada que resulta rara en un mundo que empuja a las mujeres a desconectarse de su cuerpo. Ella sabe lo que necesita, lo que le gusta y lo que no. No pide permiso para tomar su tiempo, para disfrutar, para negarse cuando algo no la resuena.\n\nEsta mujer construye seguridad desde adentro. No necesita demostrar nada. Su sensualidad no es performance: es una forma de estar en el mundo. Tiene una capacidad extraordinaria de sostener procesos largos, de esperar sin desesperar, de crear belleza tangible en su entorno y en sus relaciones.\n\nEn su mejor versión, la Mujer Tauro es una fuerza de enraizamiento para los que la rodean. Ofrece un tipo de amor que no corre, que no presiona, que permite que las cosas maduren a su ritmo."
      },
      negativos: {
        title: "La que se Queda porque Perder Asusta Más que Sufrir",
        text: "La sombra de la Mujer Tauro suele manifestarse como una resistencia pasivo-agresiva al cambio. Se queda en relaciones que la apagan, en trabajos que no la representan, en dinámicas que ya no la honran, porque soltar representa una pérdida de control y comodidad que le resulta intolerable.\n\nEsta mujer puede usar su sensualidad y su capacidad de dar como formas sutiles de atar a los demás. Su terquedad se vuelve una muralla emocional: nadie entra, nadie la mueve, aunque por dentro esté muriendo de sed. El miedo a quedarse sin nada la lleva a conformarse con muy poco.\n\nEn su peor expresión, la Mujer Tauro confunde arraigo con estancamiento. Se vuelve experta en justificar lo que ya no la sostiene, mientras su cuerpo y su alma le piden movimiento desde hace años."
      }
    },

    // Rutas de video (rellenar cuando tengas los archivos)
    videos: {
      hombrePositivo: "",   // ej: "../../../assets/videos/tauro/hombre-positivo.mp4"
      hombreNegativo: "",   // ej: "../../../assets/videos/tauro/hombre-negativo.mp4"
      mujerPositivo: "",    // ej: "../../../assets/videos/tauro/mujer-positivo.mp4"
      mujerNegativo: ""     // ej: "../../../assets/videos/tauro/mujer-negativo.mp4"
    }
  },

  "Géminis": {
    slug: "geminis",
    symbol: "♊",
    element: "Aire",
    mode: "Mutable",
    title: "Géminis",
    subtitle: "El que pregunta",
    shortDescription: "Dualidad, curiosidad y la inteligencia como defensa.",
    hombre: { positivos: { title: "", text: "" }, negativos: { title: "", text: "" } },
    mujer: { positivos: { title: "", text: "" }, negativos: { title: "", text: "" } },
    videos: { hombrePositivo: "", hombreNegativo: "", mujerPositivo: "", mujerNegativo: "" }
  },

  "Cáncer": {
    slug: "cancer",
    symbol: "♋",
    element: "Agua",
    mode: "Cardinal",
    title: "Cáncer",
    subtitle: "El que protege",
    shortDescription: "Memoria emocional, hogar y el miedo al abandono.",
    hombre: { positivos: { title: "", text: "" }, negativos: { title: "", text: "" } },
    mujer: { positivos: { title: "", text: "" }, negativos: { title: "", text: "" } },
    videos: { hombrePositivo: "", hombreNegativo: "", mujerPositivo: "", mujerNegativo: "" }
  },

  "Leo": {
    slug: "leo",
    symbol: "♌",
    element: "Fuego",
    mode: "Fijo",
    title: "Leo",
    subtitle: "El que brilla",
    shortDescription: "Expresión, reconocimiento y el terror a ser invisible.",
    hombre: { positivos: { title: "", text: "" }, negativos: { title: "", text: "" } },
    mujer: { positivos: { title: "", text: "" }, negativos: { title: "", text: "" } },
    videos: { hombrePositivo: "", hombreNegativo: "", mujerPositivo: "", mujerNegativo: "" }
  },

  "Virgo": {
    slug: "virgo",
    symbol: "♍",
    element: "Tierra",
    mode: "Mutable",
    title: "Virgo",
    subtitle: "El que perfecciona",
    shortDescription: "Discernimiento, servicio y la trampa del perfeccionismo.",
    hombre: { positivos: { title: "", text: "" }, negativos: { title: "", text: "" } },
    mujer: { positivos: { title: "", text: "" }, negativos: { title: "", text: "" } },
    videos: { hombrePositivo: "", hombreNegativo: "", mujerPositivo: "", mujerNegativo: "" }
  },

  "Libra": {
    slug: "libra",
    symbol: "♎",
    element: "Aire",
    mode: "Cardinal",
    title: "Libra",
    subtitle: "El que equilibra",
    shortDescription: "Relaciones, belleza y el miedo al conflicto.",
    hombre: { positivos: { title: "", text: "" }, negativos: { title: "", text: "" } },
    mujer: { positivos: { title: "", text: "" }, negativos: { title: "", text: "" } },
    videos: { hombrePositivo: "", hombreNegativo: "", mujerPositivo: "", mujerNegativo: "" }
  },

  "Escorpio": {
    slug: "escorpio",
    symbol: "♏",
    element: "Agua",
    mode: "Fijo",
    title: "Escorpio",
    subtitle: "El que transforma",
    shortDescription: "Intensidad, poder y la muerte del ego.",
    hombre: { positivos: { title: "", text: "" }, negativos: { title: "", text: "" } },
    mujer: { positivos: { title: "", text: "" }, negativos: { title: "", text: "" } },
    videos: { hombrePositivo: "", hombreNegativo: "", mujerPositivo: "", mujerNegativo: "" }
  },

  "Sagitario": {
    slug: "sagitario",
    symbol: "♐",
    element: "Fuego",
    mode: "Mutable",
    title: "Sagitario",
    subtitle: "El que busca",
    shortDescription: "Libertad, verdad y la huida del compromiso.",
    hombre: { positivos: { title: "", text: "" }, negativos: { title: "", text: "" } },
    mujer: { positivos: { title: "", text: "" }, negativos: { title: "", text: "" } },
    videos: { hombrePositivo: "", hombreNegativo: "", mujerPositivo: "", mujerNegativo: "" }
  },

  "Capricornio": {
    slug: "capricornio",
    symbol: "♑",
    element: "Tierra",
    mode: "Cardinal",
    title: "Capricornio",
    subtitle: "El que construye",
    shortDescription: "Ambición, estructura y el precio de la disciplina.",
    hombre: { positivos: { title: "", text: "" }, negativos: { title: "", text: "" } },
    mujer: { positivos: { title: "", text: "" }, negativos: { title: "", text: "" } },
    videos: { hombrePositivo: "", hombreNegativo: "", mujerPositivo: "", mujerNegativo: "" }
  },

  "Acuario": {
    slug: "acuario",
    symbol: "♒",
    element: "Aire",
    mode: "Fijo",
    title: "Acuario",
    subtitle: "El que innova",
    shortDescription: "Visión, libertad y la distancia emocional.",
    hombre: { positivos: { title: "", text: "" }, negativos: { title: "", text: "" } },
    mujer: { positivos: { title: "", text: "" }, negativos: { title: "", text: "" } },
    videos: { hombrePositivo: "", hombreNegativo: "", mujerPositivo: "", mujerNegativo: "" }
  },

  "Piscis": {
    slug: "piscis",
    symbol: "♓",
    element: "Agua",
    mode: "Mutable",
    title: "Piscis",
    subtitle: "El que disuelve",
    shortDescription: "Compasión, límites y la tentación de desaparecer.",
    hombre: { positivos: { title: "", text: "" }, negativos: { title: "", text: "" } },
    mujer: { positivos: { title: "", text: "" }, negativos: { title: "", text: "" } },
    videos: { hombrePositivo: "", hombreNegativo: "", mujerPositivo: "", mujerNegativo: "" }
  }

};

// Helper para obtener datos de un signo
function getSignData(signName) {
  return ASPECTOS_DATA[signName] || null;
}

// Lista ordenada de signos (útil para el hub)
const SIGN_ORDER = [
  "Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo",
  "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"
];