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
    quality: "Caliente y seco, vital, regio",
    body: "Corazón, espalda, ojo derecho, columna vertebral",
    shortDescription: "El centro. La fuerza vital, la dignidad y la voluntad de ser.",
    classicalText: "El Sol es la fuente visible de la luz, del calor y de la vida. En la astrología antigua se le considera el rey entre los planetas: caliente y seco, de naturaleza ígnea, vital y dominante. Gobierna el corazón, la espalda, la columna vertebral y la vista, especialmente el ojo derecho según muchas atribuciones tradicionales. Su domicilio es Leo, donde brilla con estabilidad, majestad y plenitud. Se exalta en Aries, donde la luz asciende con fuerza después del equinoccio vernal y expresa impulso vital, mando, nobleza y principio activo. En Libra cae, porque su autoridad se debilita ante la necesidad de equilibrio, pacto y dependencia del otro. En Acuario está en exilio, porque la centralidad solar se dispersa en lo colectivo, lo frío, lo distante y lo impersonal. El Sol representa la vida, la honra, la autoridad, la claridad, el gobierno interior y aquello que da unidad y dirección a todas las partes.",
    shadowNote: "La misma luz que vivifica también puede cegar. Cuando la autoridad interior se corrompe en orgullo, el Sol deja de ordenar y se vuelve tiranía. El trabajo con la sombra solar consiste en distinguir la dignidad legítima de la vanagloria. Un Sol afligido no ilumina con nobleza: quema lo que toca.",
    videoBien: "/assets/videos/clasica/sol-bien.mp4",
    videoBienDesc: "El Sol bien dignificado gobierna sin tiranía, ilumina sin quemar y da vida sin exigir adoración. Manifiesta autoridad natural, nobleza de espíritu, claridad, honra y una voluntad capaz de ordenar todo a su alrededor.",

    videoMal: "/assets/videos/clasica/sol-mal.mp4",
    videoMalDesc: "Cuando el Sol está mal dignificado o afligido: orgullo desmedido, necesidad de dominar, arrogancia, pérdida de nobleza y una autoridad que quema en vez de iluminar."
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
    element: "Agua / naturaleza húmeda",
    quality: "Fría y húmeda, cambiante, receptiva",
    body: "Estómago, pecho, senos, ojo izquierdo, útero, matriz, fluidos del cuerpo",
    shortDescription: "El cuerpo vivo. Lo que nutre, recibe, cambia y conserva la vida.",
    classicalText: "La Luna es la señora de las mareas, de los ciclos y de todo lo que crece y decrece. Fría y húmeda por naturaleza, gobierna el principio de la forma y de la memoria. Su domicilio es Cáncer, donde la contención y el cuidado alcanzan su máxima expresión. Se exalta en Tauro, donde lo sensible se vuelve tangible y duradero. La Luna representa la madre arquetípica, el cuerpo emocional, los ritmos biológicos y todo lo que necesitamos para sentirnos seguros. Sin su luz reflejada, el mundo queda en tinieblas.",
    shadowNote: "La Luna que solo conserva termina ahogando. Cuando la necesidad de proteger se vuelve apego, temor, manipulación o incapacidad de soltar, deja de nutrir y comienza a encerrar. El trabajo con la sombra lunar consiste en distinguir el cuidado verdadero de la dependencia, y la memoria fértil de la repetición estéril.",
    videoBien: "/assets/videos/clasica/luna-bien.mp4",
    videoBienDesc: "La Luna bien dignificada nutre sin ahogar, contiene sin encerrar y conserva la vida sin volverla prisión. Manifiesta memoria fértil, sensibilidad ordenada, protección, fecundidad y respeto por los ciclos naturales.",

    videoMal: "/assets/videos/clasica/luna-mal.mp4",
    videoMalDesc: "Cuando la Luna está mal dignificada o afligida: dependencia, temor, apego excesivo, memoria que no suelta, fluctuación desordenada y una contención que se vuelve cárcel."
  },

  "Mercurio": {
    slug: "mercurio",
    symbol: "☿",
    name: "Mercurio",
    type: "Planeta personal",
    domicile: "Géminis y Virgo",
    exaltation: "Virgo",
    fall: "Piscis",
    detriment: "Sagitario y Piscis",
    element: "Aire (Géminis) / Tierra (Virgo)",
    quality: "Variable, neutro, adaptable",
    body: "Sistema nervioso, pulmones, manos, lengua, intestino delgado",
    shortDescription: "El mensajero. La mente que nombra, conecta y distingue.",
    classicalText: "Mercurio es el planeta de la palabra, del comercio, de los límites, de las transacciones y de todo intercambio. Ni masculino ni femenino, ni caliente ni frío por naturaleza propia: se adapta al planeta con el que se une y al signo que lo recibe. Gobierna dos signos: Géminis, donde la mente explora, nombra y conecta, y Virgo, donde la mente ordena, calcula, discrimina y purifica. Es señor de los mensajes, la escritura, el razonamiento, los viajes cortos, los oficios técnicos y la habilidad manual. Sin Mercurio no hay palabra clara, juicio, cálculo ni capacidad de distinguir una cosa de otra. En Piscis cae y está en exilio, porque la mente se dispersa, se disuelve o pierde precisión en medio de la fantasía, la confusión o el exceso de humedad.",
    shadowNote: "La mente que todo lo explica termina no escuchando nada. Cuando Mercurio se vuelve defensa contra la profundidad, la palabra se convierte en ironía, dispersión, engaño o análisis infinito. El trabajo con la sombra mercurial consiste en distinguir la inteligencia verdadera de la astucia vacía, y aprender a callar cuando la palabra ya no aclara sino que confunde.",
    videoBien: "/assets/videos/clasica/mercurio-bien.mp4",
    videoBienDesc: "Mercurio bien dignificado manifiesta mente clara, palabra precisa, juicio agudo, habilidad para conectar mundos, comercio justo, aprendizaje rápido y discriminación inteligente.",

    videoMal: "/assets/videos/clasica/mercurio-mal.mp4",
    videoMalDesc: "Cuando Mercurio está mal dignificado o afligido: dispersión, engaño, sarcasmo, confusión, exceso de análisis, palabra torcida y una mente que divide sin comprender."
  },

  "Venus": {
    slug: "venus",
    symbol: "♀",
    name: "Venus",
    type: "Planeta personal",
    domicile: "Tauro y Libra",
    exaltation: "Piscis",
    fall: "Virgo",
    detriment: "Aries y Escorpio",
    element: "Tierra (Tauro) / Aire (Libra)",
    quality: "Fría y húmeda, armoniosa, atrayente",
    body: "Riñones, garganta, cuello, órganos reproductivos, piel, venas",
    shortDescription: "El deseo que une. El placer, la belleza y el valor.",
    classicalText: "Venus es la señora de la unión, del placer, de la belleza, de la concordia y de todo aquello que atrae por dulzura. Fría y húmeda por naturaleza, modera, suaviza, une y pacifica. Sus domicilios son Tauro, donde el placer se vuelve cuerpo, fertilidad, estabilidad y posesión material, y Libra, donde Venus busca proporción, pacto, armonía y relación equilibrada. Se exalta en Piscis, donde su humedad y dulzura alcanzan una forma elevada de amor, compasión, entrega y fecundidad imaginativa. En Virgo cae, porque el exceso de análisis, sequedad y separación enfría su naturaleza unificadora. En Aries y Escorpio está en exilio, porque queda sometida al territorio de Marte: conflicto, deseo crudo, posesión, corte y lucha. Venus representa el amor, el deseo, la belleza, el placer, el ornamento, la música, el arte, la fertilidad, la atracción, el valor y la capacidad de unir sin violencia.",
    shadowNote: "El deseo de unión puede volverse servidumbre. Cuando Venus se corrompe, la dulzura se transforma en complacencia, vanidad, dependencia o placer sin medida. El trabajo con la sombra venusiana consiste en distinguir el amor verdadero de la seducción vacía, y el placer fértil del deseo que esclaviza.",
    videoBien: "/assets/videos/clasica/venus-bien.mp4",
    videoBienDesc: "Venus bien dignificada manifiesta amor, gracia, belleza, placer ordenado, concordia, fertilidad, dulzura, arte y capacidad de unir sin perder dignidad.",

    videoMal: "/assets/videos/clasica/venus-mal.mp4",
    videoMalDesc: "Cuando Venus está mal dignificada o afligida: vanidad, complacencia, dependencia, placer desordenado, seducción vacía, pérdida de dignidad y deseo que esclaviza."
  },

  "Marte": {
    slug: "marte",
    symbol: "♂",
    name: "Marte",
    type: "Planeta personal",
    domicile: "Aries y Escorpio",
    exaltation: "Capricornio",
    fall: "Cáncer",
    detriment: "Libra y Tauro",
    element: "Fuego (Aries) / Agua (Escorpio)",
    quality: "Caliente y seco, colérico, cortante",
    body: "Cabeza, músculos, sangre, bilis, órganos sexuales masculinos",
    shortDescription: "La fuerza que corta y defiende. El impulso de existir separadamente.",
    classicalText: "Marte es el señor de la guerra, del hierro, del corte, del fuego y de la cólera necesaria. Caliente y seco por naturaleza, representa la fuerza que separa, combate, defiende, hiere, afirma y conquista. Sus domicilios son Aries, donde actúa de manera frontal, rápida, ardiente e iniciadora, y Escorpio, donde su fuerza se vuelve profunda, resistente, secreta y penetrante. Se exalta en Capricornio, signo en el que la violencia natural de Marte se disciplina, se vuelve estrategia, mando, resistencia y logro duradero. En Cáncer cae, porque la humedad lunar debilita su filo, vuelve la acción defensiva, fluctuante o dominada por pasiones familiares y emocionales. En Libra y Tauro está en exilio, porque queda sometido al territorio de Venus: pacto, placer, suavidad, conservación y deseo de concordia. Marte es la espada: sin él no hay defensa, valor, separación, combate ni capacidad de cortar lo corrupto ante lo dañino.",
    shadowNote: "La cólera sin gobierno se vuelve veneno, violencia o destrucción. Cuando Marte se corrompe, la fuerza deja de defender y comienza a herir por impulso, resentimiento o crueldad. El trabajo con la sombra marciana consiste en distinguir el valor de la brutalidad, el combate justo de la agresión ciega, y el corte necesario de la destrucción inútil.",
    

    videoBien: "/assets/videos/clasica/marte-bien.mp4",
    videoBienDesc: "Marte bien dignificado manifiesta coraje, fuerza, decisión, defensa, deseo claro, capacidad de cortar lo dañino y acción firme sin crueldad innecesaria.",

    videoMal: "/assets/videos/clasica/marte-mal.mp4",
    videoMalDesc: "Cuando Marte está mal dignificado o afligido: violencia gratuita, ira desordenada, agresión pasiva, crueldad, resentimiento, impulsividad destructiva o fuerza bloqueada que se vuelve contra sí misma."
  },

  "Júpiter": {
    slug: "jupiter",
    symbol: "♃",
    name: "Júpiter",
    type: "Planeta social",
    domicile: "Sagitario y Piscis",
    exaltation: "Cáncer",
    fall: "Capricornio",
    detriment: "Géminis y Virgo",
    element: "Fuego (Sagitario) / Agua (Piscis)",
    quality: "Caliente y húmedo, expansivo, benéfico",
    body: "Hígado, sangre, muslos, caderas, crecimiento corporal",
    shortDescription: "La expansión del sentido. La fe que hace crecer lo que toca.",
    classicalText: "Júpiter es el gran benéfico, señor de la abundancia, la justicia, la ley, la fe, la sabiduría y la expansión ordenada. Caliente y húmedo por naturaleza, aumenta, protege, concede, fertiliza y da sentido. Sus domicilios son Sagitario, donde su fuego busca verdad, ley, doctrina y horizonte, y Piscis, donde su humedad se vuelve compasión, fe, misericordia y amplitud espiritual. Se exalta en Cáncer, donde la generosidad jupiteriana se vuelve protección, nutrición, tradición, linaje y cuidado fecundo. En Capricornio cae, porque la frialdad seca de Saturno restringe su abundancia, su confianza y su capacidad de expansión. En Géminis y Virgo está en exilio, porque queda sometido al territorio de Mercurio: análisis, división, cálculo, duda y fragmentación. Júpiter representa la ley, la honra, la religión, la filosofía, la prosperidad, la benevolencia, la confianza, la protección y la promesa de que la vida posee un orden superior.",
    shadowNote: "La expansión sin medida se vuelve exceso, soberbia o falsa santidad. Cuando Júpiter se corrompe, la fe se transforma en fanatismo, la generosidad en derroche, la autoridad moral en hipocresía y la confianza en arrogancia. El trabajo con la sombra jupiteriana consiste en distinguir la verdadera sabiduría de la grandilocuencia vacía, y la fe que eleva del exceso que justifica cualquier desorden.",

    videoBien: "/assets/videos/clasica/jupiter-bien.mp4",
    videoBienDesc: "Júpiter bien dignificado manifiesta sabiduría, fe, justicia, generosidad, protección, prosperidad, nobleza moral y expansión ordenada sin caer en exceso.",

    videoMal: "/assets/videos/clasica/jupiter-mal.mp4",
    videoMalDesc: "Cuando Júpiter está mal dignificado o afligido: exceso, fanatismo, soberbia moral, derroche, falsa abundancia, hipocresía, promesas vacías o crecimiento sin medida."
  },

  "Saturno": {
    slug: "saturno",
    symbol: "♄",
    name: "Saturno",
    type: "Planeta social",
    domicile: "Capricornio y Acuario",
    exaltation: "Libra",
    fall: "Aries",
    detriment: "Cáncer y Leo",
    element: "Tierra (Capricornio) / Aire (Acuario)",
    quality: "Frío y seco, contractivo, melancólico",
    body: "Huesos, rodillas, piel, dientes, bazo, cartílagos, articulaciones",
    shortDescription: "El límite necesario. El tiempo, la estructura y la madurez que duele.",
    classicalText: "Saturno es el gran maléfico de los antiguos, señor del tiempo, de los límites, de la vejez, de la necesidad, de la pobreza, de la soledad, de la disciplina y de todo lo que resiste. Frío y seco por naturaleza, contrae, separa, demora, endurece, conserva y pone a prueba. Sus domicilios son Capricornio, donde su tierra fría construye estructura, jerarquía, resistencia y ambición duradera, y Acuario, donde su aire fijo ordena sistemas, leyes, distancia, pensamiento abstracto y formas colectivas. Se exalta en Libra, donde el límite saturnino se vuelve justicia, medida, contrato, equilibrio y juicio recto. En Aries cae, porque el impulso ardiente y precipitado rompe la paciencia, el cálculo y la duración saturnina. En Cáncer y Leo está en exilio, porque queda lejos de la humedad lunar que nutre y de la luz solar que vivifica. Saturno representa el tiempo, la estructura, la responsabilidad, la restricción, la madurez, la memoria antigua, la austeridad, el trabajo lento y todo aquello que solo permanece porque ha resistido la prueba.",
    shadowNote: "El límite sin sabiduría se vuelve cárcel. Cuando Saturno se corrompe, la prudencia se transforma en miedo, la disciplina en dureza, la austeridad en amargura y la responsabilidad en castigo. El trabajo con la sombra saturnina consiste en distinguir la madurez de la rigidez, el límite necesario de la prisión interior, y la paciencia fértil de la resignación estéril.",
    videoBien: "/assets/videos/clasica/saturno-bien.mp4",
    videoBienDesc: "Saturno bien dignificado manifiesta madurez, paciencia, disciplina, responsabilidad, estructura, resistencia, prudencia, autoridad ganada y capacidad de construir algo que perdure.",

    videoMal: "/assets/videos/clasica/saturno-mal.mp4",
    videoMalDesc: "Cuando Saturno está mal dignificado o afligido: miedo, rigidez, frialdad, aislamiento, pesimismo, crueldad, bloqueo, escasez, culpa o una estructura que se vuelve prisión."
  },

  "Urano": {
    slug: "urano",
    symbol: "♅",
    name: "Urano",
    type: "Planeta generacional / moderno",
    domicile: "Acuario (moderno)",
    exaltation: "Escorpio (moderno)",
    fall: "Tauro (moderno)",
    detriment: "Leo (moderno)",
    element: "Aire",
    quality: "Moderno: eléctrico, disruptivo, súbito, liberador",
    body: "Sistema nervioso, tobillos, pantorrillas, electricidad corporal, espasmos",
    shortDescription: "El relámpago. La ruptura que libera de lo que ya estaba muerto.",
    classicalText: "Urano no pertenece a la astrología antigua ni posee dignidades tradicionales. Descubierto en 1781, se incorpora en la astrología moderna como símbolo de revolución, ruptura, innovación, independencia, shock, invención y cambio súbito. Por atribución moderna se lo asocia con Acuario, aunque en astrología tradicional Acuario pertenece a Saturno. Urano representa aquello que irrumpe, corta la continuidad y revela una verdad de forma repentina. Puede liberar estructuras caducas, despertar inteligencia original y abrir caminos nuevos, pero también puede traer inestabilidad, ruptura compulsiva y rechazo de todo límite.",
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
    type: "Planeta generacional / moderno",
    domicile: "Piscis (atribución moderna)",
    exaltation: "Leo / Cáncer (atribución moderna discutida)",
    fall: "Virgo / Capricornio (atribución moderna discutida)",
    detriment: "Virgo (atribución moderna)",
    element: "Agua (atribución moderna)",
    quality: "Frío, húmedo, disolvente, místico",
    body: "Pies, sistema linfático, glándulas endocrinas, imaginación, sueño",
    shortDescription: "El océano. La disolución del yo en algo más grande que sí mismo.",
    classicalText: "Neptuno no pertenece a la astrología antigua ni posee dignidades tradicionales. Descubierto en 1846, se incorpora en la astrología moderna como símbolo de disolución, imaginación, misticismo, compasión, sueño, música, cine, ilusión, confusión y pérdida de límites. Por atribución moderna se lo asocia con Piscis, aunque en astrología tradicional Piscis pertenece a Júpiter. Neptuno representa aquello que disuelve la forma, abre la sensibilidad a lo invisible y borra las fronteras del yo. Puede manifestarse como inspiración, entrega espiritual, arte y compasión profunda, pero también como evasión, engaño, adicción, niebla mental o incapacidad de habitar la realidad concreta.",
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
    type: "Planeta generacional / moderno",
    domicile: "Escorpio (atribución moderna)",
    exaltation: "Leo (atribución moderna discutida)",
    fall: "Acuario (atribución moderna discutida)",
    detriment: "Tauro (atribución moderna)",
    element: "Agua (atribución moderna)",
    quality: "Frío, seco, intensivo, transformador",
    body: "Órganos sexuales, ano, glándulas suprarrenales, sistema de eliminación, muerte y renacimiento celular",
    shortDescription: "El que desmantela. La muerte de lo que ya no puede seguir vivo.",
    classicalText: "Plutón no pertenece a la astrología antigua ni posee dignidades tradicionales. Descubierto en 1930 y reclasificado en 2006, se incorpora en la astrología moderna como símbolo de poder oculto, crisis, destrucción, regeneración, obsesión, control, trauma, muerte simbólica y transformación profunda. Por atribución moderna se lo asocia con Escorpio, aunque en astrología tradicional Escorpio pertenece a Marte. Plutón representa aquello que opera bajo la superficie: fuerzas invisibles, procesos extremos, purga, corrupción, poder, tabú y renacimiento después de la pérdida. Puede manifestarse como regeneración profunda y capacidad de atravesar la oscuridad, pero también como manipulación, compulsión, violencia psicológica, control y destrucción innecesaria.",
    shadowNote: "El poder que nace del control termina devorando al que lo ejerce. Cuando Plutón se corrompe, la intensidad se transforma en obsesión, manipulación, sadismo, compulsión o incapacidad de soltar lo que ya murió. El trabajo con la sombra plutoniana consiste en distinguir la transformación verdadera de la destrucción compulsiva, y el poder regenerador del deseo de dominarlo todo.",

    videoBien: "/assets/videos/clasica/pluton-bien.mp4",
    videoBienDesc: "Plutón bien integrado manifiesta transformación profunda, poder regenerativo, capacidad de atravesar crisis, soltar lo muerto y renacer sin apego al cadáver de la identidad anterior.",

    videoMal: "/assets/videos/clasica/pluton-mal.mp4",
    videoMalDesc: "Cuando Plutón está mal integrado o afligido: control, obsesión, manipulación, sadismo, compulsión, destrucción innecesaria o poder usado para dominar y someter."
  }

};

// Exponer globalmente para que las páginas individuales puedan acceder
window.PLANETAS_DATA = PLANETAS_DATA;