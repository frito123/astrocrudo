// ============================================
// ASTROCRUDO — Naturaleza de los Signos
// Script simplificado (una sola energía por signo)
// ============================================

(function() {
    'use strict';

    function initClassicalSignPage() {
        if (typeof CURRENT_SIGN === 'undefined' || !CURRENT_SIGN) {
            console.error('[Naturaleza] Error: Define CURRENT_SIGN en el HTML.');
            return;
        }

        const data = window.ASPECTOS_DATA && window.ASPECTOS_DATA[CURRENT_SIGN];
        
        if (!data) {
            console.error(`[Naturaleza] No hay datos para: ${CURRENT_SIGN}`);
            return;
        }

        // Inyectar textos clásicos
        injectClassicalContent(data);

        // Configurar video
        setupSingleVideo(data);

        // Actualizar meta tags dinámicamente (título ya está en el HTML)
        updateDynamicMeta(data);

        console.log(`%c[AstroCrudo] Aspecto clásico cargado: ${CURRENT_SIGN}`, 'color:#8B0000');
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

        // Datos tradicionales en la cabecera (si existen los elementos)
        setTextIfExists('ruler-value', data.ruler || '—');
        setTextIfExists('exaltation-value', data.exaltation || '—');
        setTextIfExists('body-value', data.body || '—');
        setTextIfExists('quality-value', data.quality || '—');
    }

    function setTextIfExists(id, text) {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    }

    function setupSingleVideo(data) {
        const placeholder = document.getElementById('video-placeholder');
        if (!placeholder) return;

        let videoPath = data && data.video;

        // Fallback defensivo también aquí
        if (!videoPath && typeof CURRENT_SIGN !== 'undefined') {
            const slug = CURRENT_SIGN.toLowerCase()
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                .replace(/ñ/g, 'n');
            videoPath = `/assets/videos/clasica/${slug}.mp4`;
        }

        const statusEl = document.getElementById('video-status');

        if (videoPath && videoPath.trim() !== '') {
            placeholder.setAttribute('data-video-path', videoPath);
            placeholder.classList.add('has-video');
            
            if (statusEl) {
                statusEl.textContent = 'Video disponible • Haz clic para ver';
                statusEl.style.color = '#8B0000';
            }
            console.log('[Naturaleza] Video path configurado:', videoPath);
        } else {
            placeholder.classList.add('no-video-yet');
            if (statusEl) {
                statusEl.textContent = 'Video cinematográfico • Próximamente';
            }
        }
    }

    // Función global para reproducir el video clásico
    window.playClassicalVideo = function() {
        const placeholder = document.getElementById('video-placeholder');
        if (!placeholder) return;

        let videoPath = placeholder.getAttribute('data-video-path');
        const modal = document.getElementById('video-modal');
        const titleEl = document.getElementById('modal-title');
        const bodyEl = document.getElementById('modal-body');

        if (!modal || !titleEl || !bodyEl) return;

        const signName = (typeof CURRENT_SIGN !== 'undefined') ? CURRENT_SIGN : 'Signo';
        titleEl.textContent = `${signName} — Naturaleza del Signo`;

        // Fallback defensivo: si data.js no entregó la ruta, construirla automáticamente
        if (!videoPath && typeof CURRENT_SIGN !== 'undefined') {
            const slug = CURRENT_SIGN.toLowerCase()
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                .replace(/ñ/g, 'n');
            videoPath = `/assets/videos/clasica/${slug}.mp4`;
            console.warn('[Naturaleza] videoPath faltante en data, usando fallback:', videoPath);
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
                    <p style="margin-bottom:16px;">Este espacio está preparado para el video cinematográfico de la Naturaleza del Signo.</p>
                    <p style="font-size:13px; color:#888;">
                        Agrega el archivo en:<br>
                        <code style="background:#111; padding:2px 6px; border-radius:4px;">/assets/videos/clasica/${signName.toLowerCase()}.mp4</code>
                    </p>
                </div>
            `;
        }

        modal.classList.remove('hidden');
        modal.classList.add('flex');
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
        // Actualiza el título de la pestaña si es necesario
        if (data.title) {
            document.title = `${data.title} — Naturaleza del Signo | AstroCrudo`;
        }
    }

    // Inicializar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initClassicalSignPage);
    } else {
        initClassicalSignPage();
    }

})();
