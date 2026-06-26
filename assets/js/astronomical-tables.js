// ============================================
// ASTROCRUDO — Renderizado de tablas astronómicas
// ============================================

const POSITIONS_JSON_URL = '/assets/data/positions.json';

function cell(value) {
  const v = value ?? "—";
  return v === "N/A" ? `<span class="text-white/30">N/A</span>` : v;
}

function renderAstronomicalTables() {
  if (typeof ASTRONOMICAL_POSITIONS === "undefined") return;

  const { meta, bodies, stars, lots } = ASTRONOMICAL_POSITIONS;

  const timestampEl = document.getElementById("astro-analysis-timestamp");
  if (timestampEl && meta) {
    timestampEl.textContent = `${meta.label} — ${meta.utc} | ${meta.local}`;
  }

  const bodiesTable = document.getElementById("astro-bodies-tbody");
  if (bodiesTable && bodies) {
    bodiesTable.innerHTML = bodies.map(body => `
      <tr id="cuerpo-${body.id}">
        <td class="font-medium text-white/90">${body.name}</td>
        <td>${cell(body.position)}</td>
        <td class="tabular-nums">${cell(body.velocity)}</td>
        <td class="tabular-nums hidden lg:table-cell">${cell(body.altitude)}</td>
        <td class="tabular-nums hidden lg:table-cell">${cell(body.azimuth)}</td>
        <td class="tabular-nums hidden md:table-cell">${cell(body.eclipticLatitude)}</td>
        <td class="tabular-nums hidden md:table-cell">${cell(body.declination)}</td>
      </tr>
    `).join("");
  }

  const starsTable = document.getElementById("astro-stars-tbody");
  if (starsTable && stars) {
    starsTable.innerHTML = stars.map(star => `
      <tr id="estrella-${star.id}">
        <td class="font-medium text-white/90">${star.name}</td>
        <td>${cell(star.position)}</td>
        <td class="tabular-nums hidden sm:table-cell">${cell(star.eclipticLatitude)}</td>
        <td class="tabular-nums">${cell(star.magnitude)}</td>
      </tr>
    `).join("");
  }

  const lotsTable = document.getElementById("astro-lots-tbody");
  if (lotsTable && lots) {
    lotsTable.innerHTML = lots.map(lote => `
      <tr id="lote-${lote.id}">
        <td class="font-medium text-white/90">${lote.name}</td>
        <td class="tabular-nums">${cell(lote.position)}</td>
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
            <div><dt class="text-white/40 text-xs tracking-wider">POSICIÓN</dt><dd class="text-[#c5b8a0] tabular-nums">${cell(body.position)}</dd></div>
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