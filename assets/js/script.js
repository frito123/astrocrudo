// ============================================
// ASTROCRUDO — Astrología de la Sombra
// Script principal
// ============================================

// ============================================
// CONFIGURACIÓN FÁCIL DE ACTUALIZAR DIARIAMENTE
// ============================================

/**
 * SIGNOS ZODIACALES / HORÓSCOPOS DEL DÍA
 * 
 * INSTRUCCIONES:
 * - Cada signo tiene 3 textos. Puedes agregar más o reemplazarlos.
 * - Mantén tono psicológico, confrontacional y poético.
 * - Actualizar preferiblemente cada mañana.
 * - Los textos deben confrontar, no consolar.
 */
const HOROSCOPES = {
  "Escorpio": [
    "Hoy tu capacidad de ver lo que otros ocultan está especialmente aguda. La pregunta no es qué descubres en los demás. La pregunta es qué estás dispuesto a reconocer en ti mismo que has proyectado durante años.",
    "La intensidad que sientes no es deseo. Es hambre de verdad. Alguien o algo está a punto de ofrecerte una versión edulcorada de la realidad. Recházala. La versión cruda es la única que te puede liberar.",
    "Plutón activa tu casa de la identidad profunda. Lo que muere hoy no es una relación ni una circunstancia. Es una versión de ti que ya no puede seguir fingiendo que no sabe lo que sabe."
  ],
  "Capricornio": [
    "Tu estructura interna está siendo cuestionada por fuerzas que no respetan el orden que has construido. Saturno te recuerda que los límites que tanto defiendes también te están encerrando. ¿Qué parte de tu ambición es en realidad miedo a ser irrelevante?",
    "El reconocimiento externo que buscas no llegará mientras sigas negando la parte de ti que no encaja en la imagen que proyectas. La madurez no es control. Es capacidad de sostener lo que no puedes controlar.",
    "Hoy se te pide soltar una responsabilidad que has usado como armadura. Detrás de esa carga hay un vacío que has evitado mirar durante décadas. El vacío no te va a destruir. La negación sí."
  ],
  "Piscis": [
    "Tu capacidad de disolución está en su punto más peligroso. Puedes perderte en otro, en una causa, en una fantasía. La pregunta es: ¿qué parte de ti estás sacrificando para no tener que enfrentarte a tu propia existencia concreta?",
    "Neptuno te ofrece espejismos hermosos. Hoy uno de ellos se está rompiendo. El dolor que sientes no es traición. Es el primer momento en mucho tiempo en que estás viendo la realidad sin filtros espirituales.",
    "La compasión que ofreces tan generosamente tiene un precio. Ese precio es que nunca exiges nada a cambio. Hoy se te pide que dejes de ser el recipiente de todos y empieces a ser alguien con contornos definidos."
  ],
  "Leo": [
    "Tu necesidad de ser visto está chocando con una verdad más profunda: mucha de la atención que recibes es por lo que representas, no por lo que eres. El trabajo ahora es distinguir entre tu máscara y tu rostro.",
    "El orgullo que defiendes con tanta fuerza es, en muchos casos, la única forma que encontraste de proteger una vulnerabilidad muy antigua. Hoy se te invita a dejar que alguien vea esa vulnerabilidad sin que tengas que iluminar la habitación entera.",
    "El poder creativo que sientes hoy no pide expresión pública. Pide intimidad. La pregunta es si estás dispuesto a crear algo que nadie más vea, solo para descubrir quién eres cuando nadie está mirando."
  ],
  "Tauro": [
    "Tu apego a la estabilidad está siendo cuestionado por una fuerza que no respeta lo que has construido con tanto esfuerzo. Lo que se está moviendo no es tu seguridad externa. Es tu definición de qué significa sentirse seguro.",
    "El placer que buscas tiene una cualidad adictiva. Hoy se te pide distinguir entre lo que realmente te nutre y lo que solo adormece la ansiedad que no quieres nombrar.",
    "Venus activa tu relación con el valor propio. Durante mucho tiempo has confundido lo que tienes con lo que eres. Hoy se te ofrece la posibilidad de separar ambas cosas. Es más doloroso de lo que parece."
  ],
  "Géminis": [
    "Tu mente está especialmente activa, pero la actividad no es lo mismo que profundidad. Hoy corres el riesgo de usar la inteligencia como forma de evadir una verdad emocional que requiere silencio, no análisis.",
    "La dualidad que tanto celebras en ti misma se está volviendo una prisión. Hay una parte de ti que ha sido relegada al rol de 'la otra versión'. Esa parte está pidiendo integrarse, no ser entendida desde fuera.",
    "La comunicación que tanto valoras está siendo puesta a prueba. No por lo que dices, sino por lo que te niegas a escuchar cuando alguien te refleja algo que no quieres ver."
  ],
  "Cáncer": [
    "Tu capacidad de cuidar está siendo usada como forma de control sutil. Cuando das tanto, a veces lo que realmente estás haciendo es asegurarte de que nadie tenga espacio para abandonarte. Esa estrategia tiene fecha de caducidad.",
    "La memoria emocional que guardas con tanta fidelidad contiene tanto heridas como historias que ya no te pertenecen. Hoy se te pide soltar una narrativa familiar que has usado para explicar tu dolor durante demasiado tiempo.",
    "La seguridad que buscas en el hogar y en las relaciones está siendo redefinida. Lo que antes te contenía ahora te limita. La pregunta es si estás dispuesto a construir un nuevo tipo de contención que no dependa de otros."
  ],
  "Libra": [
    "Tu búsqueda del equilibrio se ha convertido en una forma sofisticada de no tomar posición. Hoy se te pide elegir un lado, aunque eso signifique decepcionar a alguien. La armonía que has defendido a veces es solo miedo al conflicto.",
    "La imagen que proyectas en las relaciones está siendo cuestionada por una parte de ti que ya no quiere ser 'la que entiende'. Esa parte quiere ser entendida también. ¿Estás dispuesto a pedirlo?",
    "Venus en tu signo activa tu relación con el deseo. Durante años has elegido lo que 'queda bien' por encima de lo que realmente te mueve. Hoy se te ofrece la posibilidad de elegir diferente."
  ],
  "Sagitario": [
    "Tu necesidad de libertad está siendo confrontada por una verdad que no puedes dejar atrás: sigues llevando contigo las mismas heridas, solo que ahora las cargas a más velocidad. El viaje externo no reemplaza el trabajo interno.",
    "La filosofía que has construido para dar sentido a tu vida está siendo puesta a prueba por una experiencia que no encaja en ninguna de tus categorías. Esta es una oportunidad, no un error.",
    "La honestidad brutal que tanto valoras en los demás es más difícil de sostener cuando se dirige hacia ti. Hoy alguien te está diciendo algo que no quieres escuchar. Escúchalo."
  ],
  "Acuario": [
    "Tu distancia emocional, que has llamado 'objetividad', está siendo revelada como una forma de protección muy antigua. La frialdad que tanto defiendes te está costando conexiones que tu alma necesita.",
    "El futuro que imaginas para la humanidad es brillante. La pregunta es si estás dispuesto a construirlo también en tu propia vida íntima, donde las estructuras que defiendes son mucho más difíciles de soltar.",
    "Tu mente ve patrones en todo. Hoy se te pide que dejes de analizar por un momento y simplemente sientas lo que está ocurriendo en tu cuerpo. El cuerpo no miente como la mente."
  ],
  "Virgo": [
    "Tu perfeccionismo está siendo expuesto como lo que realmente es: una forma de controlar la ansiedad que sientes ante lo que no puedes ordenar. Hoy se te ofrece la posibilidad de fallar sin que eso signifique que eres un fracaso.",
    "El servicio que ofreces con tanta dedicación tiene un lado oscuro: te mantiene en un rol donde nunca tienes que pedir nada para ti. La humildad que tanto valoras a veces es solo incapacidad de recibir.",
    "Tu cuerpo está hablando más claro que nunca. Los síntomas que has estado racionalizando o ignorando son mensajes. Dejar de 'arreglar' todo por un momento puede ser el acto más sanador que hagas hoy."
  ],
  "Aries": [
    "Tu impulso de acción está siendo cuestionado por una fuerza más antigua que tu voluntad. Hay algo que no se puede forzar, aunque tu naturaleza odie esperar. La pregunta es si puedes sostener la tensión sin tener que resolverla inmediatamente.",
    "La independencia que tanto defiendes te está aislando de experiencias que solo pueden ocurrir cuando dejas de ser el protagonista de tu propia historia. Hoy se te invita a ser testigo.",
    "La ira que sientes tiene información. No es solo combustible. Es un indicador de dónde tus límites han sido violados repetidamente. Escucharla con atención es más poderoso que usarla como motor."
  ]
};

/**
 * ESPEJO DE LA SOMBRA (antes "Roasts")
 * 
 * Estos textos son confrontaciones psicológicas, no burlas.
 * El tono debe ser directo pero respetuoso de la inteligencia del lector.
 */
const SHADOW_MIRROR = {
  "Escorpio": "Tu mirada reconoce con facilidad lo venenoso, lo oculto y lo corrompido en los demás. Lo que te cuesta admitir es que esa misma fuerza marcial también opera dentro de ti: en tus sospechas, en tus silencios, en tus deseos de control y en aquello que prefieres mantener bajo tierra.",
  "Capricornio": "Has aprendido a resistir, a sostener, a soportar el peso del tiempo. Pero la virtud saturnina de la firmeza puede convertirse en sequedad del alma. Has construido tanta defensa contra la caída que a veces ya no sabes distinguir entre estabilidad y encierro.",
  "Piscis": "Tu naturaleza húmeda y mutable te permite adaptarte, ceder y recibir lo que otros no pueden contener. Pero tanta apertura puede volverse dispersión. Cuando todo te atraviesa, corres el riesgo de no conservar forma propia, de vivir en una entrega que confunde compasión con pérdida de límite.",
  "Leo": "Tu fuego solar busca dignidad, presencia y reconocimiento. Pero la nobleza se corrompe cuando necesita testigos para sentirse real. Puedes iluminar una sala entera y, aun así, impedir que alguien vea aquello que no brilla: tu orgullo, tu miedo a no ser elegido, tu necesidad de ser centro.",
  "Tauro": "Tu naturaleza fija y terrestre sabe conservar, cuidar y dar forma a lo que permanece. Pero el amor por lo estable puede volverse apego. Has hecho del placer, la seguridad y la posesión una muralla tan cómoda que a veces prefieres permanecer inmóvil antes que perder aquello que ya dejó de darte vida.",
  "Géminis": "Tu ingenio mercurial puede moverse entre ideas, voces y caminos diversos. Pero la multiplicidad también puede ser una evasión. Cambias de forma con tanta rapidez que a veces nadie sabe dónde encontrarte, ni siquiera tú. Saber hablar de todo no siempre significa haber habitado algo de verdad.",
  "Cáncer": "Tu naturaleza lunar sabe proteger, nutrir y recordar. Pero el cuidado puede convertirse en prisión cuando nace del miedo. Das refugio a otros, pero a menudo escondes tu propia necesidad bajo una coraza antigua. Temes pedir amparo porque eso revelaría la herida que todavía espera ser cuidada.",
  "Libra": "Tu naturaleza venusina busca proporción, acuerdo y belleza en el trato humano. Pero la armonía se corrompe cuando exige silencio. Puedes convertirte en experto en suavizar, complacer y equilibrar, no por justicia verdadera, sino para no enfrentar el conflicto que amenaza tu imagen de paz.",
  "Sagitario": "Tu fuego jupiteriano busca sentido, doctrina, camino y amplitud. Pero la búsqueda de la verdad puede convertirse en huida cuando siempre está lejos. Predicas horizontes, viajes y grandes principios, pero a veces evitas la verdad más cercana: aquella que exige ordenar tu propia vida antes de enseñar el camino a otros.",
  "Acuario": "Tu naturaleza saturnina y aérea puede pensar con distancia, estructura y claridad. Pero la razón se vuelve fría cuando se separa demasiado del cuerpo y de los afectos. Puedes amar más una idea de humanidad que a las personas concretas que tienes delante. Tu sombra no es mirar al futuro, sino habitar principios tan altos que ya no tocan la tierra.",
  "Virgo": "Tu naturaleza mercurial y terrestre sabe distinguir, ordenar y corregir. Pero el juicio puede volverse condena cuando olvida la medida humana. Ves el error, la falta y la imperfección con demasiada precisión. El peligro es convertir la corrección en refugio, como si todo pudiera repararse antes de tener que ser aceptado.",
  "Aries": "Tu fuego marcial sabe iniciar, cortar y avanzar sin pedir permiso. Pero la valentía se corrompe cuando se vuelve puro impulso. Muchas veces actúas antes de sentir, atacas antes de comprender y avanzas antes de mirar la herida que te empuja. La velocidad puede ser una forma eficaz de no permanecer contigo mismo."
};

/**
 * ESPEJO DE LA LUZ
 *
 * La virtud visible de cada signo cuando su naturaleza se ordena.
 */
const LIGHT_MIRROR = {
  "Aries": "Tu luz aparece cuando el fuego marcial deja de ser simple impulso y se convierte en coraje verdadero. Sabes iniciar donde otros dudan, cortar lo que ya no sirve y abrir camino incluso cuando no hay garantías. Cuando tu fuerza está ordenada, no destruyes: despiertas.",
  "Tauro": "Tu luz está en la fidelidad a lo real. Sabes cuidar lo que tiene cuerpo, tiempo y raíz. Donde otros se dispersan, tú permaneces. Donde otros prometen, tú sostienes. Cuando tu naturaleza venusina está en equilibrio, enseñas que la belleza también puede ser paciencia, presencia y cultivo.",
  "Géminis": "Tu luz está en la inteligencia que conecta. Tu mente mercurial sabe traducir, comparar, preguntar y abrir caminos entre mundos distintos. Cuando no usas la palabra para escapar, la usas para revelar. En tu mejor forma, no confundes: haces circular el aire donde antes había rigidez.",
  "Cáncer": "Tu luz está en la memoria que protege y en el cuidado que da forma a un hogar. Tu naturaleza lunar sabe recibir, nutrir y guardar lo vulnerable. Cuando tu sensibilidad está ordenada, no retienes por miedo: ofreces refugio. Enseñas que toda vida necesita un lugar donde poder descansar.",
  "Leo": "Tu luz está en la nobleza del corazón solar. Sabes dar presencia, calor y dignidad. Cuando tu fuego está bien gobernado, no buscas brillar para dominar, sino para recordar a otros su propia fuerza. Tu verdadera grandeza no está en ser mirado, sino en hacer que la vida vuelva a sentirse digna.",
  "Virgo": "Tu luz está en el discernimiento. Tu naturaleza mercurial y terrestre sabe ordenar, limpiar, estudiar y mejorar lo que está disperso. Cuando tu juicio está al servicio de la vida, no condenas la imperfección: ayudas a darle forma. Enseñas que lo pequeño también sostiene el mundo.",
  "Libra": "Tu luz está en la medida justa. Tu naturaleza venusina sabe buscar proporción, belleza, acuerdo y trato honorable. Cuando no sacrificas tu verdad por agradar, te conviertes en puente verdadero. Enseñas que la armonía no es ausencia de conflicto, sino arte de dar a cada cosa su lugar.",
  "Escorpio": "Tu luz está en la valentía de mirar lo oculto sin apartar la vista. Tu naturaleza marcial y acuática sabe penetrar donde otros solo ven superficie. Cuando tu intensidad está purificada, no controlas ni destruyes: transformas. Enseñas que incluso en lo oscuro puede encontrarse una verdad necesaria.",
  "Sagitario": "Tu luz está en la búsqueda noble de sentido. Tu fuego jupiteriano mira más allá de lo inmediato y recuerza que la vida necesita dirección, fe y horizonte. Cuando tu entusiasmo está guiado por sabiduría, no huyes hacia lo lejano: inspiras a otros a caminar con propósito.",
  "Capricornio": "Tu luz está en la fuerza que resiste sin rendirse. Tu naturaleza saturnina conoce el peso del tiempo, la disciplina y la responsabilidad. Cuando tu dureza se vuelve madurez, sostienes estructuras que permiten vivir a otros. Enseñas que la verdadera autoridad no oprime: da forma, límite y continuidad.",
  "Acuario": "Tu luz está en la claridad de pensamiento y en la fidelidad a principios más altos que el deseo inmediato. Tu naturaleza saturnina y aérea sabe mirar con distancia, ordenar ideas y pensar en lo común. Cuando tu razón no se separa del corazón, puedes servir a la humanidad sin olvidar a las personas concretas.",
  "Piscis": "Tu luz está en la compasión que no necesita imponerse. Tu naturaleza jupiteriana, húmeda y mutable sabe recibir el dolor ajeno, imaginar mundos más amplios y ablandar lo que se ha endurecido demasiado. Cuando conservas tu forma interior, tu entrega no te borra: bendice, consuela y reconcilia."
};

// ============================================
// DATOS DE SIGNOS
// ============================================

const ZODIAC = [
  { sign: "Aries", symbol: "♈", element: "Fuego" },
  { sign: "Tauro", symbol: "♉", element: "Tierra" },
  { sign: "Géminis", symbol: "♊", element: "Aire" },
  { sign: "Cáncer", symbol: "♋", element: "Agua" },
  { sign: "Leo", symbol: "♌", element: "Fuego" },
  { sign: "Virgo", symbol: "♍", element: "Tierra" },
  { sign: "Libra", symbol: "♎", element: "Aire" },
  { sign: "Escorpio", symbol: "♏", element: "Agua" },
  { sign: "Sagitario", symbol: "♐", element: "Fuego" },
  { sign: "Capricornio", symbol: "♑", element: "Tierra" },
  { sign: "Acuario", symbol: "♒", element: "Aire" },
  { sign: "Piscis", symbol: "♓", element: "Agua" }
];

// ============================================
// INICIALIZACIÓN
// ============================================

function init() {
  initTailwind();
  initHoroscopes();
  initShadowMirror();
  initLightMirror();
  initMobileMenu();
  initNavDropdowns();
  initAstronomicalTables();

  // NOTA: Se removió el gate de edad obligatorio al entrar al sitio principal.
  // Ya no hay material gráfico explícito. Se mantiene showAgeGate() solo para
  // el Aspecto Prohibido (Venus □ Saturno), que sí tiene lenguaje cargado.
  // Las páginas especiales (saturno especialmente) tienen sus propias notas.
  
  console.log('%c[AstroCrudo] Sitio profesional de astrología de la sombra inicializado.', 'color:#8B0000');
}

function initTailwind() {
  // Tailwind ya está cargado vía CDN.
  // Aquí se pueden agregar configuraciones adicionales si se requiere.
}

// ============================================
// SIGNOS ZODIACALES (sección principal de la home)
// ============================================

function initHoroscopes() {
  const grid = document.getElementById('horoscope-grid');
  if (!grid) return;

  // ============================================
  // SIGNOS QUE APARECEN EN LA PÁGINA PRINCIPAL
  // Cambiar aquí para modificar los 3 signos del día
  // ============================================
  // Muestra los primeros 3 signos en orden zodiacal (Aries primero)
  const signsToShow = ["Aries", "Tauro", "Géminis"];
  
  renderHoroscopes(signsToShow);
}

function renderHoroscopes(signs) {
  const grid = document.getElementById('horoscope-grid');
  grid.innerHTML = '';

  signs.forEach(sign => {
    const zodiacData = ZODIAC.find(z => z.sign === sign);
    const texts = HOROSCOPES[sign] || ["Este signo no tiene texto asignado aún."];
    const horoscope = texts[Math.floor(Math.random() * texts.length)];

    const card = document.createElement('div');
    card.className = `horoscope-card group rounded-3xl p-8 flex flex-col h-full`;
    
    card.innerHTML = `
      <div>
        <div class="flex items-baseline gap-x-3">
          <span class="text-5xl">${zodiacData.symbol}</span>
          <span class="font-serif text-4xl tracking-tight">${sign}</span>
        </div>
        <div class="text-xs text-[#8B0000] tracking-[2px] mt-1">${zodiacData.element.toUpperCase()}</div>
      </div>

      <div class="mt-8 flex-1">
        <p class="text-[15px] leading-relaxed text-[#c5b8a0]">
          ${horoscope}
        </p>
      </div>

      <div class="mt-auto pt-6">
        <button onclick="event.stopImmediatePropagation(); playHoroscopeVideo('${sign}', this)"
                class="text-[11px] tracking-[2px] text-[#8B0000] hover:text-white flex items-center gap-x-2 group-hover:gap-x-3 transition-all">
          VER ENERGÍA CINEMATOGRÁFICA <span class="text-base leading-none">→</span>
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function randomizeHoroscopes() {
  const shuffled = [...ZODIAC].sort(() => 0.5 - Math.random());
  const randomThree = shuffled.slice(0, 3).map(z => z.sign);
  renderHoroscopes(randomThree);
}

function playHoroscopeVideo(sign, buttonEl) {
  const zodiacData = ZODIAC.find(z => z.sign === sign);
  const texts = HOROSCOPES[sign] || [];
  const text = texts[Math.floor(Math.random() * texts.length)];

  const prompt = `Pieza cinematográfica arquetípica de ${sign}. Atmósfera oscura, profunda, psicológica. Imágenes de sombra, transformación y confrontación interna. Paleta de negros profundos, rojos carmesí y acentos dorados antiguos. Estilo serio, elegante, sin sensacionalismo.`;

  const narration = [
    `Este es el mensaje que ${sign} necesita escuchar hoy.`,
    `No es una predicción. Es un espejo.`,
    text.substring(0, 180) + "...",
    `La pregunta no es si estás listo. La pregunta es si seguirás postergando lo inevitable.`
  ];

  // ============================================
  // LÓGICA DE VIDEO PARA SIGNOS (horóscopos del día)
  // Prioridad: *-energia.mp4 (recomendado)
  // Fallbacks: *-hoy.mp4 | nombre especial por signo | error UI
  // ============================================
  const signSlug = sign.toLowerCase()
    .replace('á', 'a').replace('é', 'e').replace('í', 'i')
    .replace('ó', 'o').replace('ú', 'u').replace('ñ', 'n');

  // Permitir que Saturno reutilice su video especial existente mientras no haya uno dedicado de "energia diaria"
  const specialFallbacks = {
    saturno: 'assets/videos/saturno/saturno-el-limite-necesario.mp4'
  };

  let videoPath = `assets/videos/${signSlug}/${signSlug}-energia.mp4`;

  // Si más adelante se quiere un mapa de nombres raros por signo, se puede extender aquí
  if (specialFallbacks[signSlug]) {
    // El openGrokVideo ya tiene lógica de fallback a -hoy.mp4 en el onerror del video.
    // Aquí solo preparamos el primario. El special se intentará en el manejador de error de openGrokVideo si es necesario.
  }

  openGrokVideo(
    `Signo • ${sign}`,
    prompt,
    narration,
    'default',
    videoPath
  );
}

// ============================================
// ASPECTO PROHIBIDO / TRÁNSITO CRÍTICO
// ============================================

function playForbiddenAspect() {
  const title = "Venus en Cáncer □ Saturno en Aries";
  
  const prompt = `Pieza cinematográfica brutal y sin filtros sobre la cuadratura de Venus en Cáncer y Saturno en Aries. Tensión cruda entre la necesidad emocional de ser contenida y el impulso primitivo de dominar y tomar. Vulnerabilidad erótica convertida en transgresión. Hambre, control y rendición sin romanticismo. Atmósfera tensa, oscura, casi violenta en su honestidad psicológica. Negros profundos, rojos sangre, grises fríos y acero. Estilo crudo, psicológico, directo.`;

  const narration = [
    "Venus en Cáncer necesita ser contenida. Saturno en Aries quiere tomar sin pedir permiso.",
    "Esta cuadratura no negocia. Pone en tensión el deseo de entrega emocional con el impulso de dominar y controlar.",
    "Lo que debería sentirse como protección, se vuelve restricción. Lo que debería ser sexo, se vuelve transgresión.",
    "El miedo a ser destruida emocionalmente se mezcla con la excitación de ser tomada sin piedad.",
    "Aquí no hay romanticismo. Hay hambre, control y rendición. La vulnerabilidad se vuelve erótica y el deseo no pide disculpas."
  ];

  // Gate ligero solo para esta pieza (su narración sí es explícita en dinámicas erótico-poder).
  showAgeGate(() => {
    openGrokVideo(
      title, 
      prompt, 
      narration, 
      'venus-saturno-cuadratura', 
      'assets/videos/venus-saturno-cuadratura/venus-cancer-cuadratura-saturno-aries.mp4'
    );
  });
}

// ============================================
// AGE GATE ligero (usado solo para el Aspecto Prohibido / contenido más cargado)
// ============================================
let pendingAgeCallback = null;

function showAgeGate(onConfirm) {
  // Si ya confirmó antes, no vuelve a preguntar
  if (localStorage.getItem('astrocrudo_age_confirmed') === 'true') {
    onConfirm();
    return;
  }

  pendingAgeCallback = onConfirm;

  const modal = document.createElement('div');
  modal.className = `fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-6`;

  modal.innerHTML = `
    <div class="max-w-md w-full bg-[#0a0808] border border-white/10 rounded-3xl p-10 text-center">
      <div class="text-[#8B0000] text-xs tracking-[3px] mb-3">CONTENIDO ADULTO</div>
      
      <h3 class="font-serif text-3xl tracking-tight mb-6">
        Este contenido es para<br>personas mayores de 18 años
      </h3>
      
      <p class="text-[#c5b8a0] text-[15px] leading-relaxed mb-8">
        Esta pieza explora dinámicas de poder, deseo y sombra de forma cruda y sin filtros. 
        Al continuar confirmas que tienes 18 años o más.
      </p>

      <div class="flex flex-col gap-3">
        <button onclick="confirmAgeAndProceed(this)" 
                class="w-full h-14 bg-[#8B0000] hover:bg-[#5c1a1a] rounded-2xl text-sm tracking-wider transition-colors">
          SÍ, TENGO 18 AÑOS O MÁS
        </button>
        
        <button onclick="this.closest('.fixed').remove()" 
                class="w-full h-14 border border-white/20 hover:border-white/40 rounded-2xl text-sm tracking-wider transition-colors">
          NO, SOY MENOR DE EDAD
        </button>
      </div>

      <p class="text-[10px] text-white/40 mt-6 tracking-wider">
        AL CONTINUAR ACEPTAS QUE ERES MAYOR DE EDAD
      </p>
    </div>
  `;

  document.body.appendChild(modal);
}

function confirmAgeAndProceed(element) {
  localStorage.setItem('astrocrudo_age_confirmed', 'true');
  const modal = element.closest('.fixed');
  if (modal) modal.remove();

  if (typeof pendingAgeCallback === 'function') {
    const callback = pendingAgeCallback;
    pendingAgeCallback = null;
    callback();
  }
}

// ============================================
// SISTEMA DE REPRODUCTOR CINEMATOGRÁFICO
// ============================================

function openGrokVideo(title, prompt, narrationLines, visualType = 'default', videoSrc = null) {
  const modal = document.getElementById('video-modal');
  const titleEl = document.getElementById('video-modal-title');
  const playerArea = document.getElementById('video-player-area');
  const promptEl = document.getElementById('video-prompt');
  const narrationEl = document.getElementById('video-narration');

  titleEl.textContent = title;
  promptEl.innerHTML = prompt.replace(/\n/g, '<br>');
  narrationEl.innerHTML = '';

  // Soporte para video real MP4
  if (videoSrc) {
    playerArea.innerHTML = `
      <div class="relative w-full h-full bg-black flex items-center justify-center">
        <video 
          controls 
          playsinline 
          preload="metadata"
          class="w-full h-full object-contain"
          style="max-height: 100%; background: #000;"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 630'%3E%3Crect width='1200' height='630' fill='%230a0808'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%238B0000' font-size='38' font-family='Georgia, serif'%3EASTROCRUDO%3C/text%3E%3C/svg%3E"
        >
          <source src="${videoSrc}" type="video/mp4">
        </video>
      </div>
    `;

    // Manejo robusto de error de carga (404, formato, etc.)
    const vid = playerArea.querySelector('video');
    if (vid) {
      let triedFallback = false;
      let triedSaturnoSpecial = false;
      vid.onerror = function() {
        const container = this.parentElement;

        // 1. Fallback estándar -hoy.mp4
        if (!triedFallback && videoSrc && videoSrc.includes('-energia.mp4')) {
          triedFallback = true;
          const fallback = videoSrc.replace('-energia.mp4', '-hoy.mp4');
          this.innerHTML = `<source src="${fallback}" type="video/mp4">`;
          this.load();
          console.log('[AstroCrudo] Fallback video (hoy):', fallback);
          return;
        }

        // 2. Para Saturno: reutilizar el video especial que ya existe mientras no haya uno de "energia diaria"
        if (!triedSaturnoSpecial && videoSrc && videoSrc.includes('saturno-energia')) {
          triedSaturnoSpecial = true;
          const saturnoSpecial = 'assets/videos/saturno/saturno-el-limite-necesario.mp4';
          this.innerHTML = `<source src="${saturnoSpecial}" type="video/mp4">`;
          this.load();
          console.log('[AstroCrudo] Fallback Saturno special:', saturnoSpecial);
          return;
        }

        container.innerHTML = `
          <div class="text-center p-8">
            <div class="text-[#8B0000] text-xs tracking-[3px] mb-3">ARCHIVO NO ENCONTRADO</div>
            <p class="text-[#c5b8a0] text-sm">El video cinematográfico para este signo aún no está disponible.</p>
            <p class="text-[10px] text-white/40 mt-3 font-mono break-all">${videoSrc}</p>
            <p class="text-[10px] text-white/30 mt-1">Agrega el MP4 (recomendado: *-energia.mp4 o *-hoy.mp4) en assets/videos/{signo}/</p>
          </div>
        `;
      };
    }

    narrationLines.forEach((line, i) => {
      const p = document.createElement('p');
      p.className = 'opacity-0 transition-all duration-700';
      p.textContent = line;
      narrationEl.appendChild(p);
      setTimeout(() => { p.style.opacity = '1'; }, 420 + i * 580);
    });

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    return;
  }

  // Simulación cinematográfica profesional
  playerArea.innerHTML = `
    <div class="video-visual w-full h-full relative overflow-hidden bg-[#050505]" id="cinematic-scene">
      <div class="absolute inset-0 bg-[radial-gradient(#2a1f1f_0.6px,transparent_1px)] bg-[length:3px_3px] opacity-40"></div>
      
      <div id="scene-content" class="absolute inset-0 flex items-center justify-center"></div>
      
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 pointer-events-none"></div>
      
      <div id="play-overlay" class="absolute inset-0 flex items-center justify-center z-20 cursor-pointer">
        <div class="text-center">
          <div class="mx-auto mb-5 w-20 h-20 rounded-full border-[6px] border-[#8B0000]/70 flex items-center justify-center hover:border-[#8B0000] transition-all">
            <div class="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1.5"></div>
          </div>
          <div class="text-xs tracking-[3px] text-[#8B0000]">REPRODUCIR VISIÓN</div>
        </div>
      </div>
    </div>
  `;

  const contentContainer = playerArea.querySelector('#scene-content');

  // Visuales según tipo
  if (visualType === 'venus-lilith') {
    contentContainer.innerHTML = `
      <div class="relative w-72 h-72 flex items-center justify-center">
        <div class="absolute w-36 h-36 rounded-full bg-gradient-to-br from-[#8B0000] to-[#3a1515] opacity-80" style="left: 28%; top: 25%; filter: blur(1px);"></div>
        <div class="absolute w-32 h-32 rounded-full bg-[#111] border border-[#8B0000]/40" style="left: 52%; top: 38%;"></div>
      </div>
    `;
  } else {
    contentContainer.innerHTML = `
      <div class="text-center">
        <div class="text-[92px] mb-1 opacity-80">🜁</div>
        <div class="text-sm tracking-[4px] text-[#8B0000]">ARQUETIPO EN MOVIMIENTO</div>
      </div>
    `;
  }

  // Narración
  narrationLines.forEach((line, i) => {
    const p = document.createElement('p');
    p.className = 'opacity-0 transition-all duration-700';
    p.textContent = line;
    narrationEl.appendChild(p);
    setTimeout(() => { p.style.opacity = '1'; }, 380 + i * 620);
  });

  const playOverlay = playerArea.querySelector('#play-overlay');
  playOverlay.onclick = () => {
    playOverlay.style.transition = 'opacity 0.4s ease';
    playOverlay.style.opacity = '0';
    setTimeout(() => playOverlay.style.display = 'none', 350);
  };

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}

// ============================================
// ESPEJO DE LA SOMBRA
// ============================================

function initShadowMirror() {
  const grid = document.getElementById('shadow-mirror-grid');
  if (!grid) return;

  Object.keys(SHADOW_MIRROR).forEach(sign => {
    const zodiacData = ZODIAC.find(z => z.sign === sign);
    
    const card = document.createElement('div');
    card.className = `shadow-card p-6 rounded-2xl cursor-pointer`;
    
    card.innerHTML = `
      <div class="flex items-center gap-x-3 mb-4">
        <span class="text-3xl">${zodiacData.symbol}</span>
        <span class="font-medium text-lg">${sign}</span>
      </div>
      <div class="text-sm leading-relaxed text-[#c5b8a0]">
        ${SHADOW_MIRROR[sign]}
      </div>
    `;
    
    card.onclick = () => showShadowReflection(sign);
    grid.appendChild(card);
  });
}

function showShadowReflection(sign) {
  const text = SHADOW_MIRROR[sign];
  const zodiacData = ZODIAC.find(z => z.sign === sign);

  const modal = document.createElement('div');
  modal.className = `fixed inset-0 z-[120] bg-black/90 flex items-center justify-center p-6`;
  
  modal.innerHTML = `
    <div onclick="event.target.remove()" class="absolute inset-0"></div>
    <div onclick="event.stopImmediatePropagation()" class="relative bg-[#0a0808] border border-white/10 max-w-2xl w-full rounded-3xl p-10">
      <div class="flex items-center gap-x-4">
        <span class="text-5xl">${zodiacData.symbol}</span>
        <div>
          <div class="text-[#8B0000] text-xs tracking-[3px]">ESPEJO DE LA SOMBRA</div>
          <div class="font-serif text-4xl tracking-tight mt-1">${sign}</div>
        </div>
      </div>
      
      <div class="mt-8 text-[17px] leading-relaxed text-[#c5b8a0]">
        ${text}
      </div>
      
      <div class="mt-9 flex gap-4">
        <button onclick="this.closest('.fixed').remove()" 
                class="flex-1 h-12 border border-white/20 rounded-2xl text-sm tracking-wider hover:border-white/50 transition-colors">
          CERRAR
        </button>
        <button onclick="showShadowReflection('${sign}'); this.closest('.fixed').remove()" 
                class="flex-1 h-12 bg-[#8B0000] rounded-2xl text-sm tracking-wider hover:bg-[#5c1a1a] transition-colors">
          VER OTRO ESPEJO
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
}

// ============================================
// ESPEJO DE LA LUZ
// ============================================

function initLightMirror() {
  const grid = document.getElementById('light-mirror-grid');
  if (!grid) return;

  ZODIAC.forEach(({ sign }) => {
    if (!LIGHT_MIRROR[sign]) return;
    const zodiacData = ZODIAC.find(z => z.sign === sign);

    const card = document.createElement('div');
    card.className = 'light-card p-6 rounded-2xl cursor-pointer';

    card.innerHTML = `
      <div class="flex items-center gap-x-3 mb-4">
        <span class="text-3xl">${zodiacData.symbol}</span>
        <span class="font-medium text-lg">${sign}</span>
      </div>
      <div class="text-sm leading-relaxed text-[#c5b8a0]">
        ${LIGHT_MIRROR[sign]}
      </div>
    `;

    card.onclick = () => showLightReflection(sign);
    grid.appendChild(card);
  });
}

function showLightReflection(sign) {
  const text = LIGHT_MIRROR[sign];
  const zodiacData = ZODIAC.find(z => z.sign === sign);

  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 z-[120] bg-black/90 flex items-center justify-center p-6';

  modal.innerHTML = `
    <div onclick="event.target.remove()" class="absolute inset-0"></div>
    <div onclick="event.stopImmediatePropagation()" class="relative bg-[#0a0808] border border-white/10 max-w-2xl w-full rounded-3xl p-10">
      <div class="flex items-center gap-x-4">
        <span class="text-5xl">${zodiacData.symbol}</span>
        <div>
          <div class="text-[#d4c4a0] text-xs tracking-[3px]">ESPEJO DE LA LUZ</div>
          <div class="font-serif text-4xl tracking-tight mt-1">${sign}</div>
        </div>
      </div>

      <div class="mt-8 text-[17px] leading-relaxed text-[#c5b8a0]">
        ${text}
      </div>

      <div class="mt-9 flex gap-4">
        <button onclick="this.closest('.fixed').remove()"
                class="flex-1 h-12 border border-white/20 rounded-2xl text-sm tracking-wider hover:border-white/50 transition-colors">
          CERRAR
        </button>
        <button onclick="showLightReflection('${sign}'); this.closest('.fixed').remove()"
                class="flex-1 h-12 border border-[#d4c4a0]/50 bg-[#d4c4a0]/10 rounded-2xl text-sm tracking-wider hover:bg-[#d4c4a0]/20 transition-colors">
          VER OTRO ESPEJO
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

// ============================================
// MENÚ MÓVIL
// ============================================

function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  
  if (!btn || !menu) return;

  btn.onclick = () => {
    menu.classList.toggle('hidden');
    btn.textContent = menu.classList.contains('hidden') ? '☰' : '✕';
  };

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      btn.textContent = '☰';
    });
  });
}

function initNavDropdowns() {
  document.querySelectorAll('[data-mobile-nav-toggle]').forEach(toggle => {
    const listId = toggle.dataset.mobileNavToggle;
    const list = document.getElementById(listId);
    const chevron = toggle.querySelector('.mobile-nav-chevron');

    if (!list) return;

    toggle.addEventListener('click', () => {
      const isOpen = !list.classList.contains('hidden');
      list.classList.toggle('hidden', isOpen);
      if (chevron) {
        chevron.classList.toggle('open', !isOpen);
      }
    });
  });

  document.querySelectorAll('[data-nav-dropdown]').forEach(dropdown => {
    const trigger = dropdown.querySelector('.nav-dropdown-trigger');
    if (!trigger) return;

    let closeTimer = null;

    const openDropdown = () => {
      clearTimeout(closeTimer);
      dropdown.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
    };

    const closeDropdown = () => {
      closeTimer = setTimeout(() => {
        dropdown.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      }, 120);
    };

    dropdown.addEventListener('mouseenter', openDropdown);
    dropdown.addEventListener('mouseleave', closeDropdown);
    dropdown.addEventListener('focusin', openDropdown);
    dropdown.addEventListener('focusout', (event) => {
      if (!dropdown.contains(event.relatedTarget)) {
        closeDropdown();
      }
    });
  });
}

// ============================================
// Función para salir del sitio (limpia la confirmación de edad)
// (ya no hay gate obligatorio en la home; se mantiene por compatibilidad
//  y por si se quiere restaurar el comportamiento anterior)
// ============================================
function exitSite() {
  localStorage.removeItem('astrocrudo_age_confirmed');
  window.location.href = 'https://www.google.com';
}

// ============================================
// BOOT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  init();

  // ============================================
  // Botón Volver Arriba (Back to Top)
  // ============================================
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        backToTopBtn.classList.remove('hidden');
        backToTopBtn.classList.add('flex');
      } else {
        backToTopBtn.classList.remove('flex');
        backToTopBtn.classList.add('hidden');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
