// ============================================
// ASTROCRUDO — Renderizado de tablas astronómicas
// ============================================

const POSITIONS_JSON_URL = '/assets/data/positions.json';

const HERO_PLANET_IDS = [
  'sol', 'luna', 'mercurio', 'venus', 'marte',
  'jupiter', 'saturno', 'urano', 'neptuno', 'pluton'
];

const HERO_NODE_IDS = ['nodo-norte', 'nodo-sur'];
const HERO_ANGLE_IDS = ['ascendente', 'descendente', 'medio-cielo', 'fondo-del-cielo'];
const HERO_STAR_IDS = ['algol', 'regulus', 'spica'];
const HERO_LOT_IDS = [
  'fortuna', 'espiritu', 'eros', 'necesidad', 'coraje', 'victoria', 'nemesis'
];

const BODY_SECTIONS = [
  { key: 'planeta', label: 'PLANETAS' },
  { key: 'nodo', label: 'NODOS LUNARES' },
  { key: 'angulo', label: 'ÁNGULOS DE LA CARTA' },
  { key: 'lote', label: 'LOTES / PARTES ÁRABES' },
  { key: 'punto', label: 'OTROS PUNTOS SENSIBLES' },
];

const PLANET_SYMBOLS = {
  'Sol': '☉', 'Luna': '☽', 'Mercurio': '☿', 'Venus': '♀', 'Marte': '♂',
  'Júpiter': '♃', 'Saturno': '♄', 'Urano': '♅', 'Neptuno': '♆', 'Plutón': '♇'
};

const HERO_SYMBOLS = {
  ...PLANET_SYMBOLS,
  'nodo-norte': '☊',
  'nodo-sur': '☋',
  'ascendente': 'ASC',
  'descendente': 'DSC',
  'medio-cielo': 'MC',
  'fondo-del-cielo': 'IC',
  'fortuna': '⊗',
  'espiritu': '◇',
  'eros': '♡',
  'necesidad': '⚓',
  'coraje': '⚔',
  'victoria': '✦',
  'nemesis': '⚖',
  'algol': '★',
  'regulus': '★',
  'spica': '★'
};

const HERO_LABELS = {
  'nodo-norte': 'Nodo Norte',
  'nodo-sur': 'Nodo Sur',
  'ascendente': 'Ascendente',
  'descendente': 'Descendente',
  'medio-cielo': 'Medio Cielo',
  'fondo-del-cielo': 'Fondo del Cielo',
  'fortuna': 'Fortuna (Tychê)',
  'espiritu': 'Espíritu (Daimon)',
  'eros': 'Eros',
  'necesidad': 'Necesidad (Anankê)',
  'coraje': 'Coraje (Thrasos)',
  'victoria': 'Victoria (Nikê)',
  'nemesis': 'Némesis'
};

function inferBodyCategory(body) {
  if (body.category) return body.category;
  if (HERO_PLANET_IDS.includes(body.id)) return 'planeta';
  if (HERO_NODE_IDS.includes(body.id)) return 'nodo';
  if (HERO_ANGLE_IDS.includes(body.id)) return 'angulo';
  if (HERO_LOT_IDS.includes(body.id)) return 'lote';
  if (body.id === 'sizigia-prenatal') return 'punto';
  return 'planeta';
}

function parseDms(str) {
  const match = String(str).trim().match(/(-?\d+)°\s*(\d+)'\s*([\d.]+)"/);
  if (!match) return null;
  return Number(match[1]) + Number(match[2]) / 60 + Number(match[3]) / 3600;
}

function formatDms(degrees) {
  const abs = Math.abs(degrees);
  const d = Math.floor(abs);
  const mFloat = (abs - d) * 60;
  const m = Math.floor(mFloat);
  const s = (mFloat - m) * 60;
  return `${d}° ${String(m).padStart(2, '0')}' ${s.toFixed(2).padStart(5, '0')}"`;
}

function degreeInSign(lon) {
  return ((lon % 360) + 360) % 360 % 30;
}

function normalizeLotPosition(position) {
  const deg = parseDms(position);
  if (deg === null) return position;
  if (deg >= 30) return formatDms(degreeInSign(deg));
  return position;
}

function normalizeZodiacPosition(position, sign = null) {
  if (!position || position === 'N/A') return position;

  const signMatch = position.match(/^(.+?)\s*\((-?\d+)°\s*(\d+)'\s*([\d.]+)"\)$/);
  if (signMatch) {
    const [, signName, d, m, s] = signMatch;
    const absLon = Number(d) + Number(m) / 60 + Number(s) / 3600;
    if (absLon >= 30) {
      return `${signName} (${formatDms(degreeInSign(absLon))})`;
    }
    return position;
  }

  const deg = parseDms(position);
  if (deg !== null && deg >= 30) {
    if (sign) return `${sign} (${formatDms(degreeInSign(deg))})`;
    return formatDms(degreeInSign(deg));
  }

  if (deg !== null && sign) {
    return `${sign} (${position})`;
  }

  return position;
}

function cell(value) {
  const v = value ?? "—";
  return v === "N/A" ? `<span class="text-white/30">N/A</span>` : v;
}

function positionCell(value, sign = null) {
  return cell(normalizeZodiacPosition(value, sign));
}

function heroSectionRow(label) {
  return `
    <tr class="hero-table-section">
      <td colspan="3">${label}</td>
    </tr>
  `;
}

function bodiesSectionRow(label) {
  return `
    <tr class="astro-table-section">
      <td colspan="7">${label}</td>
    </tr>
  `;
}

function heroBodyRow(id, name, position, velocity, sign = null) {
  const symbol = HERO_SYMBOLS[id] || HERO_SYMBOLS[name] || '';
  const label = HERO_LABELS[id] || name;
  const displayPosition = normalizeZodiacPosition(position, sign);
  return `
    <tr>
      <td class="font-medium text-white/90 whitespace-nowrap">
        <span class="text-[#8B0000] mr-1.5">${symbol}</span>${label}
      </td>
      <td class="text-[#c5b8a0]">${cell(displayPosition)}</td>
      <td class="tabular-nums text-white/70 whitespace-nowrap">${cell(velocity)}</td>
    </tr>
  `;
}

function renderHeroCelestialTable(meta, bodies, stars, lots) {
  const heroTime = document.getElementById("hero-analysis-time");
  const heroTable = document.getElementById("hero-planets-tbody");

  if (heroTime && meta) {
    heroTime.textContent = `${meta.utc} · ${meta.local}`;
  }

  if (!heroTable) return;

  const rows = [];

  if (bodies) {
    const planets = bodies.filter(body => inferBodyCategory(body) === 'planeta');
    if (planets.length) {
      rows.push(heroSectionRow('Planetas'));
      planets.forEach(body => {
        rows.push(heroBodyRow(body.id, body.name, body.position, body.velocity));
      });
    }

    const nodes = bodies.filter(body => inferBodyCategory(body) === 'nodo');
    if (nodes.length) {
      rows.push(heroSectionRow('Nodos lunares'));
      nodes.forEach(body => {
        rows.push(heroBodyRow(body.id, body.name, body.position, body.velocity));
      });
    }

    const angles = bodies.filter(body => inferBodyCategory(body) === 'angulo');
    if (angles.length) {
      rows.push(heroSectionRow('Ángulos'));
      angles.forEach(body => {
        rows.push(heroBodyRow(body.id, body.name, body.position, body.velocity));
      });
    }

    const lotBodies = bodies.filter(body => inferBodyCategory(body) === 'lote');
    if (lotBodies.length) {
      rows.push(heroSectionRow('Lotes árabes'));
      lotBodies.forEach(body => {
        rows.push(heroBodyRow(body.id, body.name, body.position, body.velocity));
      });
    }
  }

  if (lots && !bodies?.some(body => inferBodyCategory(body) === 'lote')) {
    const heroLots = lots.filter(lote => HERO_LOT_IDS.includes(lote.id));
    if (heroLots.length) {
      rows.push(heroSectionRow('Lotes árabes'));
      heroLots.forEach(lote => {
        const house = lote.house != null ? `Casa ${lote.house}` : '—';
        rows.push(heroBodyRow(lote.id, lote.name, lote.position, house, lote.sign));
      });
    }
  }

  if (stars) {
    const heroStars = stars.filter(star => HERO_STAR_IDS.includes(star.id));
    if (heroStars.length) {
      rows.push(heroSectionRow('Estrellas fijas'));
      heroStars.forEach(star => {
        rows.push(heroBodyRow(star.id, star.name, star.position, 'Fija'));
      });
    }
  }

  if (!rows.length) {
    heroTable.innerHTML = `
      <tr>
        <td colspan="3" class="text-center text-white/40 py-8 text-xs tracking-wider">Sin datos celestes</td>
      </tr>
    `;
    return;
  }

  heroTable.innerHTML = rows.join('');
}

function renderAstronomicalTables() {
  if (typeof ASTRONOMICAL_POSITIONS === "undefined") return;

  const { meta, bodies, stars, lots, lunarPhases, antiscia } = ASTRONOMICAL_POSITIONS;

  renderHeroCelestialTable(meta, bodies, stars, lots);

  const timestampEl = document.getElementById("astro-analysis-timestamp");
  if (timestampEl && meta) {
    timestampEl.textContent = `${meta.label} — ${meta.utc} | ${meta.local}`;
  }

  const bodiesTable = document.getElementById("astro-bodies-tbody");
  if (bodiesTable && bodies) {
    const rows = [];

    BODY_SECTIONS.forEach(section => {
      const sectionBodies = bodies.filter(body => inferBodyCategory(body) === section.key);
      if (!sectionBodies.length) return;

      rows.push(bodiesSectionRow(section.label));
      sectionBodies.forEach(body => {
        rows.push(`
          <tr id="cuerpo-${body.id}">
            <td class="font-medium text-white/90">${body.name}</td>
            <td>${positionCell(body.position)}</td>
            <td class="tabular-nums">${cell(body.velocity)}</td>
            <td class="tabular-nums hidden lg:table-cell">${cell(body.altitude)}</td>
            <td class="tabular-nums hidden lg:table-cell">${cell(body.azimuth)}</td>
            <td class="tabular-nums hidden md:table-cell">${cell(body.eclipticLatitude)}</td>
            <td class="tabular-nums hidden md:table-cell">${cell(body.declination)}</td>
          </tr>
        `);
      });
    });

    const categorizedIds = new Set();
    BODY_SECTIONS.forEach(section => {
      bodies
        .filter(body => inferBodyCategory(body) === section.key)
        .forEach(body => categorizedIds.add(body.id));
    });
    const uncategorized = bodies.filter(body => !categorizedIds.has(body.id));
    if (uncategorized.length) {
      if (rows.length) rows.push(bodiesSectionRow('OTROS'));
      uncategorized.forEach(body => {
        rows.push(`
          <tr id="cuerpo-${body.id}">
            <td class="font-medium text-white/90">${body.name}</td>
            <td>${positionCell(body.position)}</td>
            <td class="tabular-nums">${cell(body.velocity)}</td>
            <td class="tabular-nums hidden lg:table-cell">${cell(body.altitude)}</td>
            <td class="tabular-nums hidden lg:table-cell">${cell(body.azimuth)}</td>
            <td class="tabular-nums hidden md:table-cell">${cell(body.eclipticLatitude)}</td>
            <td class="tabular-nums hidden md:table-cell">${cell(body.declination)}</td>
          </tr>
        `);
      });
    }

    bodiesTable.innerHTML = rows.join('');
  }

  const starsTable = document.getElementById("astro-stars-tbody");
  if (starsTable && stars) {
    starsTable.innerHTML = stars.map(star => `
      <tr id="estrella-${star.id}">
        <td class="font-medium text-white/90">${star.name}</td>
        <td>${positionCell(star.position)}</td>
        <td class="tabular-nums hidden sm:table-cell">${cell(star.eclipticLatitude)}</td>
        <td class="tabular-nums">${cell(star.magnitude)}</td>
      </tr>
    `).join("");
  }

  const phasesTitle = document.getElementById("astro-lunar-phases-title");
  const phasesTable = document.getElementById("astro-lunar-phases-tbody");
  if (phasesTitle && lunarPhases) {
    phasesTitle.textContent = lunarPhases.monthLabel
      ? `Fases lunares — ${lunarPhases.monthLabel}`
      : 'Fases lunares del mes';
  }
  if (phasesTable && lunarPhases?.phases?.length) {
    phasesTable.innerHTML = lunarPhases.phases.map(phase => `
      <tr id="${phase.id}">
        <td class="font-medium text-white/90">${phase.name}</td>
        <td class="tabular-nums text-[#c5b8a0] whitespace-nowrap">${cell(phase.datetime)}</td>
        <td>${cell(phase.sign)}</td>
        <td class="tabular-nums">${positionCell(phase.positionFull || phase.position, phase.sign)}</td>
      </tr>
    `).join('');
  } else if (phasesTable) {
    phasesTable.innerHTML = `
      <tr>
        <td colspan="4" class="text-center text-white/40 py-6 text-xs tracking-wider">Sin datos de fases lunares</td>
      </tr>
    `;
  }

  const antisciaTable = document.getElementById("astro-antiscia-tbody");
  if (antisciaTable && antiscia?.length) {
    antisciaTable.innerHTML = antiscia.map(row => `
      <tr id="antiscia-${row.id}">
        <td class="font-medium text-white/90">${row.source}</td>
        <td>${positionCell(row.original)}</td>
        <td>${positionCell(row.antiscio)}</td>
        <td>${positionCell(row.contraAntiscio)}</td>
      </tr>
    `).join('');
  } else if (antisciaTable) {
    antisciaTable.innerHTML = `
      <tr>
        <td colspan="4" class="text-center text-white/40 py-6 text-xs tracking-wider">Sin datos de antiscios</td>
      </tr>
    `;
  }

  const lotsTable = document.getElementById("astro-lots-tbody");
  if (lotsTable && lots) {
    lotsTable.innerHTML = lots.map(lote => `
      <tr id="lote-${lote.id}">
        <td class="font-medium text-white/90">${lote.name}</td>
        <td class="tabular-nums">${cell(normalizeLotPosition(lote.position))}</td>
        <td>${cell(lote.sign)}</td>
        <td class="tabular-nums">${cell(lote.house)}</td>
      </tr>
    `).join("");
  }

  const nodesGrid = document.getElementById("astro-nodes-grid");
  if (nodesGrid && bodies) {
    const nodeData = {
      "nodo-norte": {
        title: "☊ Nodo Norte",
        desc: "Cabeza del Dragón. Intersección de la órbita lunar con la eclíptica en ascenso. Punto de destino, exposición y crecimiento kármico."
      },
      "nodo-sur": {
        title: "☋ Nodo Sur",
        desc: "Cola del Dragón. Intersección en descenso. Siempre opuesto exacto al Nodo Norte (180°). Herencia, hábito y territorio ya recorrido."
      }
    };

    nodesGrid.innerHTML = ["nodo-norte", "nodo-sur"].map(id => {
      const body = bodies.find(b => b.id === id);
      const info = nodeData[id];
      if (!body || !info) return "";
      return `
        <article id="${id}" class="astro-data-card border border-white/10 rounded-2xl p-7">
          <div class="text-[#8B0000] text-xs tracking-[2px] mb-2">PUNTO MATEMÁTICO</div>
          <h4 class="font-serif text-2xl tracking-tight">${info.title}</h4>
          <p class="mt-4 text-sm text-[#c5b8a0] leading-relaxed">${info.desc}</p>
          <dl class="mt-5 space-y-2 text-sm">
            <div><dt class="text-white/40 text-xs tracking-wider">POSICIÓN</dt><dd class="text-[#c5b8a0] tabular-nums">${positionCell(body.position)}</dd></div>
            <div><dt class="text-white/40 text-xs tracking-wider">VELOCIDAD</dt><dd class="text-[#c5b8a0] tabular-nums">${cell(body.velocity)}</dd></div>
          </dl>
        </article>
      `;
    }).join("");
  }
}

async function loadAstronomicalPositions() {
  try {
    const response = await fetch(`${POSITIONS_JSON_URL}?t=${Date.now()}`, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (typeof updateAstronomicalPositions === 'function') {
      updateAstronomicalPositions(data);
    }
    return true;
  } catch (error) {
    console.warn('[AstroCrudo] Usando posiciones embebidas (JSON no disponible):', error.message);
    return false;
  }
}

function initAstronomicalTables() {
  loadAstronomicalPositions().finally(() => {
    renderAstronomicalTables();
  });
}