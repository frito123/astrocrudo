// ============================================
// ASTROCRUDO — Planetas (Versión Clásica)
// Una sola naturaleza por planeta
// ============================================

/**
 * ESTRUCTURA DE DATOS PARA PLANETAS (VERSIÓN CLÁSICA CON DOS EXPRESIONES)
 *
 * Cada planeta ahora tiene DOS videos cinematográficos:
 * - videoBien + videoBienDesc  → Bien dignificado (expresión elevada)
 * - videoMal  + videoMalDesc   → Mal dignificado (expresión debilitada / en sombra)
 *
 * Esto permite mostrar la misma energía planetaria en su versión más integrada
 * y en su versión más distorsionada (muy en el espíritu de AstroCrudo).
 */

const PLANETAS_DATA = {

  "Sol": {
    slug: "sol",
    symbol: "☉",
    name: "Sol",
    type: "Luminaria",
    domicile: "Leo",
    exaltation: "Aries",
    fall: "Libra",
    detriment: "Acuario",
    element: "Fuego",
    quality: "Caliente y seco, vital, generoso",
    body: "Corazón, espalda, ojos derechos, columna vertebral",
    shortDescription: "El centro. La fuerza vital, la dignidad y la voluntad de ser.",
    classicalText: "El Sol es la fuente de toda luz y vida en el sistema. En la astrología antigua se le considera el rey de los planetas: caliente y seco, de naturaleza ígnea y vital. Gobierna el corazón y la espalda, la vista derecha y el principio de la vida misma. Su domicilio es Leo, donde brilla con toda su fuerza; se exalta en Aries, signo de su máxima dignidad guerrera. Cuando está debilitado (Libra o Acuario) la voluntad se fragmenta o se vuelve demasiado impersonal. El Sol representa el centro del ser: aquello que no puede delegarse ni negociarse sin perder la propia sustancia.",
    shadowNote: "La misma luz que da vida puede cegar. Cuando el ego necesita ser el centro de todo, el Sol se vuelve tiranía. El trabajo con la sombra solar consiste en distinguir entre la dignidad legítima y la necesidad patológica de ser admirado. Un Sol herido no brilla más fuerte: quema lo que toca.",

    videoBien: "/assets/videos/clasica/sol-bien.mp4",
    videoBienDesc: "Cuando el Sol opera desde su centro más alto: autoridad natural, generosidad sin necesidad de aplauso, voluntad clara y vida que ilumina sin quemar.",

    videoMal: "/assets/videos/clasica/sol-mal.mp4?v=20250530",
    videoMalDesc: "Cuando el Sol está herido o inflado: necesidad desesperada de ser el centro, tiranía del ego, vacío de identidad o arrogancia que destruye lo que toca."
  },

  "Luna": {
    slug: "luna",
    symbol: "☽",
    name: "Luna",
    type: "Luminaria",
    domicile: "Cáncer",
    exaltation: "Tauro",
    fall: "Escorpio",
    detriment: "Capricornio",
    element: "Agua",
    quality: "Fría y húmeda, mutable, receptiva",
    body: "Estómago, pecho, senos, ojos izquierdos, fluidos del cuerpo",
    shortDescription: "La memoria del cuerpo. Lo que nutre, contiene y recuerda.",
    classicalText: "La Luna es la señora de las mareas, de los ciclos y de todo lo que crece y decrece. Fría y húmeda por naturaleza, gobierna el principio de la forma y de la memoria. Su domicilio es Cáncer, donde la contención y el cuidado alcanzan su máxima expresión. Se exalta en Tauro, donde lo sensible se vuelve tangible y duradero. La Luna representa la madre arquetípica, el cuerpo emocional, los ritmos biológicos y todo lo que necesitamos para sentirnos seguros. Sin su luz reflejada, el mundo queda en tinieblas.",
    shadowNote: "La Luna que solo contiene termina ahogando. Cuando el miedo al abandono hace que una persona se vuelva pegajosa, manipuladora o incapaz de soltar, la Luna ha dejado de nutrir para controlar. El trabajo con la sombra lunar es aprender que la verdadera seguridad no viene de retener, sino de confiar en que uno puede sobrevivir a la pérdida.",

    videoBien: "/assets/videos/clasica/luna-bien.mp4",
    videoBienDesc: "Luna en su expresión más sana: capacidad de nutrir sin ahogar, memoria emocional sana, contención que da seguridad real y ciclos que se respetan.",

    videoMal: "/assets/videos/clasica/luna-mal.mp4",
    videoMalDesc: "Luna aflictiva: dependencia emocional, manipulación por miedo al abandono, memoria que no suelta y contención que se vuelve cárcel."
  },

  "Mercurio": {
    slug: "mercurio",
    symbol: "☿",
    name: "Mercurio",
    type: "Planeta Personal",
    domicile: "Géminis y Virgo",
    exaltation: "Virgo",
    fall: "Piscis",
    detriment: "Sagitario y Piscis",
    element: "Aire (Géminis) / Tierra (Virgo)",
    quality: "Variable, neutro, adaptable",
    body: "Sistema nervioso, pulmones, manos, lengua, intestinos delgado",
    shortDescription: "El mensajero. La mente que nombra, conecta y distingue.",
    classicalText: "Mercurio es el dios de los límites y de las transacciones. Ni masculino ni femenino, ni caliente ni frío en exceso: su naturaleza es adaptable y rápida. Gobierna dos signos: Géminis (la mente que explora y nombra) y Virgo (la mente que ordena y purifica). Es el señor de la palabra, del comercio, de los viajes cortos y de todo intercambio. Sin Mercurio no hay conciencia clara ni capacidad de discriminar. Su debilidad en Piscis muestra lo que ocurre cuando la mente se disuelve en la emoción o en la fantasía.",
    shadowNote: "La mente que todo lo explica termina no sintiendo nada. Cuando Mercurio se vuelve defensa contra la profundidad, la persona se vuelve irónica, dispersa o incapaz de comprometerse con ninguna verdad que no pueda analizar. El trabajo con la sombra de Mercurio es aprender a callar y a habitar lo que no se puede nombrar.",

    videoBien: "/assets/videos/clasica/mercurio-bien.mp4",
    videoBienDesc: "Mercurio en su mejor expresión: mente clara, palabra precisa, capacidad de conectar mundos sin perder profundidad, curiosidad sana y discriminación aguda.",

    videoMal: "/assets/videos/clasica/mercurio-mal.mp4",
    videoMalDesc: "Mercurio aflictivo: dispersión, sarcasmo como escudo, incapacidad de comprometerse, mente que huye de la emoción a través del análisis infinito."
  },

  "Venus": {
    slug: "venus",
    symbol: "♀",
    name: "Venus",
    type: "Planeta Personal",
    domicile: "Tauro y Libra",
    exaltation: "Piscis",
    fall: "Virgo",
    detriment: "Aries y Escorpio",
    element: "Tierra (Tauro) / Aire (Libra)",
    quality: "Fría y húmeda, armoniosa, atrayente",
    body: "Riñones, garganta, cuello, órganos sexuales femeninos, piel",
    shortDescription: "El deseo que une. El placer, la belleza y el valor.",
    classicalText: "Venus es la gran pacificadora y la señora del placer legítimo. Fría y húmeda, gobierna todo lo que atrae y todo lo que se desea por su propia bondad. Sus domicilios son Tauro (el placer sensual y posesivo) y Libra (el placer de la relación equilibrada). Se exalta en Piscis, donde el amor se vuelve compasión y entrega sin cálculo. Venus representa el valor que damos a las cosas, el gusto estético, la capacidad de recibir y la forma en que nos relacionamos con el otro sin guerra. Es el antídoto natural de Marte.",
    shadowNote: "El deseo de ser deseado puede volverse adicción. Cuando Venus se corrompe, la persona pierde su propio valor y se vuelve objeto de transacción: complaciente, superficial o dispuesta a cualquier cosa con tal de no ser rechazada. El trabajo con la sombra venusiana es recuperar el derecho a decir 'esto me gusta' sin pedir permiso ni disculparse por tener apetito.",

    videoBien: "/assets/videos/clasica/venus-bien.mp4?v=20250530",
    videoBienDesc: "Venus dignificada: deseo sano, capacidad de recibir y dar placer sin culpa, gusto estético real, amor que valora sin poseer y relaciones de igual a igual.",

    videoMal: "/assets/videos/clasica/venus-mal.mp4?v=20250530",
    videoMalDesc: "Venus aflictiva: complacencia por miedo al rechazo, pérdida de valor propio, esteticismo superficial o relaciones basadas en transacción y necesidad de ser deseado."
  },

  "Marte": {
    slug: "marte",
    symbol: "♂",
    name: "Marte",
    type: "Planeta Personal",
    domicile: "Aries y Escorpio",
    exaltation: "Capricornio",
    fall: "Cáncer",
    detriment: "Libra y Tauro",
    element: "Fuego (Aries) / Agua (Escorpio)",
    quality: "Caliente y seco, colérico, cortante",
    body: "Cabeza, músculos, sangre, órganos sexuales masculinos, bilis",
    shortDescription: "La fuerza que corta y defiende. El impulso de existir separadamente.",
    classicalText: "Marte es el señor de la guerra justa y de la cólera necesaria. Caliente y seco, representa la capacidad de afirmarse, de cortar lo que daña y de defender lo que se ama. Sus domicilios son Aries (la iniciativa pura) y Escorpio (la fuerza que penetra y transforma). Se exalta en Capricornio, donde la agresión se vuelve estrategia y logro duradero. Marte es la espada: sin él no hay boundaries, no hay deseo sexual claro, no hay capacidad de decir 'no'. Su debilidad en Libra muestra la parálisis que produce el miedo al conflicto.",
    shadowNote: "La ira no expresada se vuelve veneno o explosión. Cuando Marte está herido, la persona o se vuelve pasivo-agresiva, o explota de forma desproporcionada, o canaliza toda su fuerza vital en la autodestrucción. El trabajo con la sombra marciana es aprender a pelear bien: con precisión, con límites claros y sin necesidad de destruir al otro para existir.",

    videoBien: "/assets/videos/clasica/marte-bien.mp4",
    videoBienDesc: "Marte dignificado: coraje limpio, capacidad de defender lo que importa, deseo sexual claro, acción decidida sin crueldad innecesaria y límites sanos.",

    videoMal: "/assets/videos/clasica/marte-mal.mp4",
    videoMalDesc: "Marte aflictivo: violencia gratuita, ira explosiva o completamente bloqueada, agresión pasiva, guerra interna constante o destrucción como forma de existir."
  },

  "Júpiter": {
    slug: "jupiter",
    symbol: "♃",
    name: "Júpiter",
    type: "Planeta Social",
    domicile: "Sagitario y Piscis",
    exaltation: "Cáncer",
    fall: "Capricornio",
    detriment: "Géminis y Virgo",
    element: "Fuego (Sagitario) / Agua (Piscis)",
    quality: "Caliente y húmeda, expansiva, benéfica",
    body: "Hígado, caderas, muslos, pies, sangre, glándulas",
    shortDescription: "La expansión del sentido. La fe que hace crecer lo que toca.",
    classicalText: "Júpiter es el gran benéfico, el que multiplica y da sentido. Caliente y húmedo, representa la abundancia legítima, la ley moral, la filosofía y todo lo que nos hace más grandes que nosotros mismos. Gobierna Sagitario (la búsqueda de verdad) y Piscis (la disolución en lo divino). Se exalta en Cáncer, donde la generosidad se vuelve cuidado del hogar y de la tradición. Júpiter es la promesa de que la vida tiene un orden moral y que el esfuerzo honesto es recompensado. Sin él, todo se vuelve pequeño y sin horizonte.",
    shadowNote: "La expansión sin límites se vuelve inflación. Cuando Júpiter se corrompe, la persona cree que sus ideas son sagradas, que merece todo sin esfuerzo, o que su 'buena suerte' la exime de responsabilidad. El trabajo con la sombra jupiteriana es distinguir entre la fe que eleva y la arrogancia espiritual que justifica cualquier exceso.",

    videoBien: "/assets/videos/clasica/jupiter-bien.mp4",
    videoBienDesc: "Júpiter en su expresión más noble: fe que expande sin inflar, generosidad real, sentido de propósito, optimismo fundamentado y capacidad de inspirar sin fanatismo.",

    videoMal: "/assets/videos/clasica/jupiter-mal.mp4",
    videoMalDesc: "Júpiter aflictivo: inflación del ego, fanatismo, exceso sin responsabilidad, arrogancia espiritual o la creencia de que las reglas no aplican a uno."
  },

  "Saturno": {
    slug: "saturno",
    symbol: "♄",
    name: "Saturno",
    type: "Planeta Social",
    domicile: "Capricornio y Acuario",
    exaltation: "Libra",
    fall: "Aries",
    detriment: "Cáncer y Leo",
    element: "Tierra (Capricornio) / Aire (Acuario)",
    quality: "Frío y seco, contractivo, melancólico",
    body: "Huesos, rodillas, piel, dientes, bazo, vejiga",
    shortDescription: "El límite necesario. El tiempo, la estructura y la madurez que duele.",
    classicalText: "Saturno es el gran maléfico de los antiguos, pero también el maestro más severo y más justo. Frío y seco, representa todo lo que resiste, todo lo que exige esfuerzo sostenido y todo lo que eventualmente se derrumba si no tiene cimientos reales. Gobierna Capricornio (la ambición que construye imperios) y Acuario (la estructura que libera al colectivo). Se exalta en Libra, donde la justicia y el contrato se vuelven arte. Saturno es el padre arquetípico: no da lo que pedimos, da lo que necesitamos para dejar de ser niños.",
    shadowNote: "La rigidez que protege termina aprisionando. Cuando Saturno domina sin amor, la persona se vuelve su propio carcelero: perfeccionista, amargada, incapaz de recibir placer porque 'no se lo ha ganado'. El trabajo con la sombra de Saturno es aprender que el límite no es castigo, sino la única forma de que algo dure y tenga peso real.",

    videoBien: "/assets/videos/clasica/saturno-bien.mp4",
    videoBienDesc: "Saturno dignificado: madurez real, estructura que libera, paciencia que construye legados, límites que protegen y una autoridad ganada con el tiempo.",

    videoMal: "/assets/videos/clasica/saturno-mal.mp4",
    videoMalDesc: "Saturno aflictivo: rigidez paralizante, autodesprecio, miedo crónico, incapacidad de disfrutar, crueldad consigo mismo o con los demás disfrazada de 'responsabilidad'."
  },

  "Urano": {
    slug: "urano",
    symbol: "♅",
    name: "Urano",
    type: "Planeta Generacional",
    domicile: "Acuario (moderno)",
    exaltation: "Escorpio (moderno)",
    fall: "Tauro (moderno)",
    detriment: "Leo (moderno)",
    element: "Aire",
    quality: "Frío, seco, eléctrico, disruptivo",
    body: "Sistema nervioso, tobillos, pantorrillas, aura, glándula pineal",
    shortDescription: "El relámpago. La ruptura que libera de lo que ya estaba muerto.",
    classicalText: "Urano no existía en la astrología antigua. Descubierto en 1781, representa la revolución, lo inesperado y la verdad que llega como un shock eléctrico. En la tradición moderna se le asocia con Acuario y con todo lo que rompe las estructuras caducas: invenciones, rebeliones, genialidad y locura. Su naturaleza es fría, rápida y sin piedad. No pregunta si estamos listos. Simplemente corta lo que ya no puede sostenerse.",
    shadowNote: "La rebelión por la rebelión es solo otro tipo de esclavitud. Cuando Urano se vuelve identidad, la persona se vuelve adicta a lo nuevo, incapaz de sostener nada, rompiendo relaciones y proyectos cada vez que se pone difícil. El trabajo con la sombra de Urano es aprender a integrar la revolución: no solo destruir, sino construir algo que merezca durar más que nuestra propia rebeldía.",

    videoBien: "/assets/videos/clasica/urano-bien.mp4",
    videoBienDesc: "Urano en su mejor forma: ruptura liberadora, genio que sirve, originalidad que no necesita escandalizar, y cambios que realmente abren futuro en vez de solo destruir el presente.",

    videoMal: "/assets/videos/clasica/urano-mal.mp4",
    videoMalDesc: "Urano aflictivo: rebelión por rebeldía, incapacidad de comprometerse, destrucción compulsiva, aislamiento por 'ser diferente' y adicción a lo nuevo como forma de no sentir."
  },

  "Neptuno": {
    slug: "neptuno",
    symbol: "♆",
    name: "Neptuno",
    type: "Planeta Generacional",
    domicile: "Piscis (moderno)",
    exaltation: "Leo / Cáncer (moderno)",
    fall: "Virgo / Capricornio (moderno)",
    detriment: "Virgo (moderno)",
    element: "Agua",
    quality: "Frío, húmedo, disolvente, místico",
    body: "Pies, sistema linfático, glándulas endocrinas, imaginación, sueño",
    shortDescription: "El océano. La disolución del yo en algo más grande que sí mismo.",
    classicalText: "Neptuno, descubierto en 1846, no tiene contraparte exacta en los textos antiguos. Representa lo que no tiene forma: el misticismo, la ilusión, la compasión sin límites, la música, el cine y todo lo que disuelve las fronteras del yo. En Piscis alcanza su máxima expresión. Es el planeta del éxtasis y del engaño, de la entrega espiritual y de la adicción que nace del deseo de escapar del dolor de ser alguien separado.",
    shadowNote: "La disolución sin ancla es solo evasión elevada a categoría espiritual. Cuando Neptuno domina, la persona se vuelve incapaz de vivir en la realidad concreta: miente a sí misma con 'buenas vibras', se pierde en relaciones tóxicas por 'amor incondicional', o se vuelve adicta a cualquier sustancia o ideología que le permita no sentirse. El trabajo con la sombra de Neptuno es aprender a tocar tierra sin perder el cielo.",

    videoBien: "/assets/videos/clasica/neptuno-bien.mp4",
    videoBienDesc: "Neptuno en su expresión más alta: compasión real, arte que toca lo sagrado, entrega espiritual sin perder el yo, y capacidad de disolverse en algo más grande sin desaparecer.",

    videoMal: "/assets/videos/clasica/neptuno-mal.mp4",
    videoMalDesc: "Neptuno aflictivo: evasión espiritualizada, adicciones, mentiras piadosas, relaciones tóxicas justificadas como 'amor incondicional', y pérdida total de contornos personales."
  },

  "Plutón": {
    slug: "pluton",
    symbol: "♇",
    name: "Plutón",
    type: "Planeta Generacional",
    domicile: "Escorpio (moderno)",
    exaltation: "Leo (moderno)",
    fall: "Acuario (moderno)",
    detriment: "Tauro (moderno)",
    element: "Agua",
    quality: "Frío, seco, intensivo, transformador",
    body: "Órganos sexuales, ano, glándulas suprarrenales, sistema de eliminación, muerte y renacimiento celular",
    shortDescription: "El que desmantela. La muerte de lo que ya no puede seguir vivo.",
    classicalText: "Plutón, descubierto en 1930 y reclasificado en 2006, es el más oscuro y el más poderoso de los planetas modernos. Representa lo que está bajo tierra: el poder nuclear, el crimen organizado, la psicología profunda, la transformación que pasa por la destrucción total. En Escorpio se siente en casa. No mejora nada. Destruye lo que ya estaba muerto para que algo nuevo —posiblemente más verdadero— pueda nacer de la podredumbre.",
    shadowNote: "El poder que nace del control sobre la muerte ajena siempre termina devorando al que lo ejerce. Cuando Plutón se vuelve patológico, la persona se vuelve sádica, manipuladora, adicta al sufrimiento propio o ajeno, o incapaz de soltar el pasado porque su identidad depende de haber sido destruida. El trabajo con la sombra plutoniana es aprender a morir conscientemente: soltar antes de que la vida tenga que arrancártelo.",

    videoBien: "/assets/videos/clasica/pluton-bien.mp4",
    videoBienDesc: "Plutón dignificado: transformación profunda que no necesita destruir todo, poder regenerativo, capacidad de renacer una y otra vez sin apego al cadáver de la identidad anterior.",

    videoMal: "/assets/videos/clasica/pluton-mal.mp4",
    videoMalDesc: "Plutón aflictivo: control a través del miedo, sadismo encubierto, adicción al poder sobre la vida y muerte ajena, y negación total a soltar lo que ya está muerto."
  }

};

// Exponer globalmente para que las páginas individuales puedan acceder
window.PLANETAS_DATA = PLANETAS_DATA;