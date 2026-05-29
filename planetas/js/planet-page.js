// ============================================
// ASTROCRUDO — Planetas (Versión Clásica)
// Script para páginas individuales de planetas
// ============================================

(function() {
    'use strict';

    function initClassicalPlanetPage() {
        if (typeof CURRENT_PLANET === 'undefined' || !CURRENT_PLANET) {
            console.error('[Planetas] Error: Define CURRENT_PLANET en el HTML.');
            return;
        }

        const data = window.PLANETAS_DATA && window.PLANETAS_DATA[CURRENT_PLANET];
        
        if (!data) {
            console.error(`[Planetas] No hay datos para: ${CURRENT_PLANET}`);
            return;
        }

        // Inyectar textos clásicos
        injectClassicalContent(data);

        // Configurar los DOS videos (bien + mal)
        setupDualVideos(data);

        // Actualizar meta si es necesario
        updateDynamicMeta(data);

        console.log(`%c[AstroCrudo] Planeta clásico cargado: ${CURRENT_PLANET}`, 'color:#8B0000');
    }

    function injectClassicalContent(data) {
        // Texto clásico principal
        const classicalEl = document.getElementById('classical-text');
        if (classicalEl && data.classicalText) {
            classicalEl.innerHTML = data.classicalText;
        }

        // Nota de sombra
        const shadowEl = document.getElementById('shadow-note');
        if (shadowEl && data.shadowNote) {
            shadowEl.innerHTML = data.shadowNote;
        }

        // Inyectar descripciones de los dos videos
        setTextIfExists('video-bien-desc', data.videoBienDesc || 'Descripción no disponible aún.');
        setTextIfExists('video-mal-desc', data.videoMalDesc || 'Descripción no disponible aún.');

        // Datos tradicionales (si los elementos existen en la plantilla)
        setTextIfExists('domicile-value', data.domicile || '—');
        setTextIfExists('exaltation-value', data.exaltation || '—');
        setTextIfExists('fall-value', data.fall || '—');
        setTextIfExists('detriment-value', data.detriment || '—');
        setTextIfExists('body-value', data.body || '—');
        setTextIfExists('quality-value', data.quality || '—');
        setTextIfExists('element-value', data.element || '—');
    }

    function setTextIfExists(id, text) {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    }

    // ============================================
    // NUEVO SISTEMA: DOS VIDEOS POR PLANETA (BIEN / MAL DIGNIFICADO)
    // ============================================

    function setupDualVideos(data) {
        // Preparamos los datos para que las tarjetas de video los puedan leer
        const bienContainer = document.getElementById('video-bien');
        const malContainer = document.getElementById('video-mal');

        if (bienContainer) {
            bienContainer.setAttribute('data-video-path', data.videoBien || '');
            bienContainer.setAttribute('data-version', 'bien');
        }
        if (malContainer) {
            malContainer.setAttribute('data-video-path', data.videoMal || '');
            malContainer.setAttribute('data-version', 'mal');
        }

        console.log('[Planetas] Videos duales (bien/mal dignificado) configurados para', CURRENT_PLANET);
    }

    // Función global para reproducir uno de los dos videos
    window.playPlanetVideo = function(version) {
        const modal = document.getElementById('video-modal');
        const titleEl = document.getElementById('modal-title');
        const bodyEl = document.getElementById('modal-body');

        if (!modal || !titleEl || !bodyEl) return;

        const planetName = (typeof CURRENT_PLANET !== 'undefined') ? CURRENT_PLANET : 'Planeta';

        let videoPath = '';
        let versionLabel = '';

        if (version === 'bien') {
            const bienEl = document.getElementById('video-bien');
            videoPath = bienEl ? bienEl.getAttribute('data-video-path') : '';
            versionLabel = 'Expresión Dignificada';
        } else {
            const malEl = document.getElementById('video-mal');
            videoPath = malEl ? malEl.getAttribute('data-video-path') : '';
            versionLabel = 'Expresión en Sombra';
        }

        titleEl.textContent = `${planetName} — ${versionLabel}`;

        // Fallbacks defensivos
        if (!videoPath && typeof CURRENT_PLANET !== 'undefined') {
            const slug = CURRENT_PLANET.toLowerCase()
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                .replace(/ñ/g, 'n');
            videoPath = `/assets/videos/clasica/${slug}-${version === 'bien' ? 'bien' : 'mal'}.mp4`;
            console.warn('[Planetas] videoPath faltante, usando fallback:', videoPath);
        }

        if (videoPath) {
            bodyEl.innerHTML = `
                <video controls autoplay style="width:100%; border-radius:12px; background:#000; max-height:70vh;">
                    <source src="${videoPath}" type="video/mp4">
                    Tu navegador no soporta la reproducción de video.
                </video>
                <p style="margin-top:16px; font-size:12px; color:#666; font-family:monospace;">
                    ${videoPath}
                </p>
            `;
        } else {
            bodyEl.innerHTML = `
                <div style="padding:40px 20px; text-align:center; color:#c5b8a0;">
                    <p style="margin-bottom:16px;">Este video aún no está disponible.</p>
                    <p style="font-size:13px; color:#888;">
                        Agrega el archivo:<br>
                        <code style="background:#111; padding:2px 6px; border-radius:4px;">/assets/videos/clasica/${planetName.toLowerCase()}-${version}.mp4</code>
                    </p>
                </div>
            `;
        }

        modal.classList.remove('hidden');
        modal.classList.add('flex');
    };

    // Mantener compatibilidad con el nombre anterior (por si acaso)
    window.playClassicalVideo = function() {
        // Por defecto reproducimos la versión "mal" (la más interesante para AstroCrudo)
        window.playPlanetVideo('mal');
    };

    window.closeVideoModal = function() {
        const modal = document.getElementById('video-modal');
        if (!modal) return;

        modal.classList.remove('flex');
        modal.classList.add('hidden');

        const bodyEl = document.getElementById('modal-body');
        if (bodyEl) bodyEl.innerHTML = '';
    };

    function updateDynamicMeta(data) {
        if (data.title) {
            document.title = `${data.title} — Planeta Clásico | AstroCrudo`;
        }
    }

    // Inicializar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initClassicalPlanetPage);
    } else {
        initClassicalPlanetPage();
    }

})();