// ============================================
// ASTROCRUDO — Aspectos de Luz y Sombra
// Script compartido para páginas de signos
// ============================================
//
// CÓMO USAR ESTE SCRIPT EN UNA NUEVA PÁGINA DE SIGNO:
//
// 1. Copia la plantilla (plantilla.html)
// 2. En tu archivo HTML, define la variable:
//    const CURRENT_SIGN = "Tauro";   // ← Cambia esto por el nombre del signo
//
// 3. Incluye este script después de data.js:
//    <script src="../js/sign-page.js"></script>
//
// El script se encarga de:
// - Cargar los textos desde data.js
// - Rellenar los títulos y contenidos
// - Manejar los placeholders de video
// - Mostrar/ocultar secciones según los datos disponibles
//
// ============================================

(function() {
    'use strict';

    // Esperar a que el DOM esté listo
    function initSignPage() {
        // La variable CURRENT_SIGN debe estar definida en el HTML de cada signo
        if (typeof CURRENT_SIGN === 'undefined' || !CURRENT_SIGN) {
            console.error('[Aspectos] Error: Debes definir la variable CURRENT_SIGN en tu HTML. Ejemplo: const CURRENT_SIGN = "Aries";');
            return;
        }

        const data = window.ASPECTOS_DATA && window.ASPECTOS_DATA[CURRENT_SIGN];
        
        if (!data) {
            console.error(`[Aspectos] No se encontraron datos para el signo: ${CURRENT_SIGN}`);
            return;
        }

        // Cargar contenido textual
        loadSignContent(data);

        // Configurar placeholders de video
        setupVideoPlaceholders(data);

        // Log útil
        console.log(`%c[AstroCrudo] Página de Aspectos cargada: ${CURRENT_SIGN}`, 'color:#8B0000');
    }

    /**
     * Carga los textos de luz y sombra desde los datos
     */
    function loadSignContent(data) {
        // Helper para convertir texto plano con \n\n en párrafos HTML
        function renderTextToElement(text, containerId) {
            const container = document.getElementById(containerId);
            if (!container || !text) return;

            container.innerHTML = '';

            const paragraphs = text.trim().split('\n\n');
            paragraphs.forEach(paragraphText => {
                const p = document.createElement('p');
                p.textContent = paragraphText.trim();
                container.appendChild(p);
            });
        }

        // Hombre - Positivos
        setTextContent('hombre-positivos-title', data.hombre?.positivos?.title);
        renderTextToElement(data.hombre?.positivos?.text, 'hombre-positivos-text');

        // Hombre - Negativos
        setTextContent('hombre-negativos-title', data.hombre?.negativos?.title);
        renderTextToElement(data.hombre?.negativos?.text, 'hombre-negativos-text');

        // Mujer - Positivos
        setTextContent('mujer-positivos-title', data.mujer?.positivos?.title);
        renderTextToElement(data.mujer?.positivos?.text, 'mujer-positivos-text');

        // Mujer - Negativos
        setTextContent('mujer-negativos-title', data.mujer?.negativos?.title);
        renderTextToElement(data.mujer?.negativos?.text, 'mujer-negativos-text');
    }

    function setTextContent(elementId, text) {
        const el = document.getElementById(elementId);
        if (el && text) {
            el.textContent = text;
        }
    }

    /**
     * Configura los placeholders de video según los datos disponibles
     */
    function setupVideoPlaceholders(data) {
        const videos = data.videos || {};

        // Mapeo de IDs de placeholders a las claves en data.videos
        const videoMap = {
            'video-hombre-positivo': videos.hombrePositivo,
            'video-hombre-negativo': videos.hombreNegativo,
            'video-mujer-positivo': videos.mujerPositivo,
            'video-mujer-negativo': videos.mujerNegativo
        };

        Object.keys(videoMap).forEach(placeholderId => {
            const placeholder = document.getElementById(placeholderId);
            if (!placeholder) return;

            const videoPath = videoMap[placeholderId];

            if (videoPath && videoPath.trim() !== '') {
                // Hay video definido → mejorar el placeholder visualmente
                placeholder.classList.add('has-video');
                placeholder.setAttribute('data-video-path', videoPath);

                // Cambiar el texto para indicar que el video está listo
                const note = placeholder.querySelector('.video-note');
                if (note) {
                    note.textContent = 'Video disponible • Haz clic para previsualizar';
                    note.style.color = '#ff3366';
                }
            } else {
                // No hay video aún
                placeholder.classList.add('no-video');
            }
        });
    }

    /**
     * Función global para abrir el modal de video placeholder
     * (puede ser mejorada más adelante para reproducir el video real)
     */
    window.showAspectVideo = function(placeholderElement) {
        const videoPath = placeholderElement.getAttribute('data-video-path');
        const title = placeholderElement.getAttribute('data-video-title') || 'Visión Cinematográfica';

        const modal = document.getElementById('video-modal');
        const titleEl = document.getElementById('modal-title');
        const bodyEl = document.getElementById('modal-body');

        if (!modal || !titleEl) return;

        titleEl.textContent = title;

        if (videoPath && bodyEl) {
            // Si hay ruta de video, podemos mostrar un reproductor básico
            bodyEl.innerHTML = `
                <video controls style="width:100%; border-radius:12px; background:#000;">
                    <source src="${videoPath}" type="video/mp4">
                    Tu navegador no soporta la reproducción de video.
                </video>
                <p style="margin-top:16px; font-size:13px; color:#888;">
                    Ruta: <span style="font-family:monospace; color:#666;">${videoPath}</span>
                </p>
            `;
        } else {
            if (bodyEl) {
                bodyEl.innerHTML = `
                    <p style="color:#c5b8a0; line-height:1.6;">
                        Este espacio está preparado para el video cinematográfico.<br><br>
                        Cuando tengas el archivo MP4, agrégalo en <strong>data.js</strong> 
                        dentro del objeto <code>videos</code> del signo correspondiente.
                    </p>
                `;
            }
        }

        modal.classList.remove('hidden');
        modal.classList.add('flex');
    };

    // Cerrar modal
    window.closeAspectModal = function() {
        const modal = document.getElementById('video-modal');
        if (!modal) return;

        modal.classList.remove('flex');
        modal.classList.add('hidden');

        // Limpiar contenido del body para la próxima vez
        const bodyEl = document.getElementById('modal-body');
        if (bodyEl) bodyEl.innerHTML = '';
    };

    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSignPage);
    } else {
        initSignPage();
    }

})();