# AstroCrudo

**Astrología de la Sombra • Sin filtros • Para quienes ya no se conforman con lo light**

Sitio web profesional de astrología profunda, psicológica y sin censura. Enfoque en trabajo con la sombra, arquetipos oscuros (Lilith, Plutón, Saturno) y astrología erótica entendida como poder sagrado.

---

## Estructura del Proyecto (Organización Profesional)

```
AstroCrudo/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── script.js
    ├── videos/
    │   ├── aries/
    │   ├── tauro/
    │   ├── geminis/
    │   ├── cancer/
    │   ├── leo/
    │   ├── virgo/
    │   ├── libra/
    │   ├── escorpio/
    │   │   └── escorpio-hoy.mp4          ← Video del horóscopo de Escorpio
    │   ├── sagitario/
    │   ├── capricornio/
    │   ├── acuario/
    │   ├── piscis/
    │   └── venus-lilith/
    │       └── venus-lilith.mp4          ← Video del Aspecto Prohibido
    └── images/                           ← (reservado para futuras imágenes)
```

---

## Cómo Actualizar el Contenido Diariamente (Muy Fácil)

### 1. Horóscopos Profundos del Día

Abre `script.js` y busca la sección:

```js
// ============================================
// HORÓSCOPOS PROFUNDOS - EDITAR DIARIAMENTE
// ============================================
const HOROSCOPES = {
  "Escorpio": [ ... ],
  ...
}
```

**Instrucciones:**
- Cada signo tiene un array de 3 textos.
- Puedes agregar o reemplazar textos manteniendo el tono profundo, psicológico y confrontacional.
- Recomendación: Actualizar cada mañana antes de las 8:00 AM (hora del cliente).

### 2. Cambiar los Signos que Aparecen en la Página Principal

En la función `initHoroscopes()` (alrededor de la línea 280), modifica esta línea:

```js
const signsToShow = ["Escorpio", "Capricornio", "Piscis"]; // ← Cambia aquí
```

### 3. Actualizar o Agregar Videos Cinematográficos

El sitio soporta dos tipos de videos:

**A. Simulación cinematográfica** (la que viene por defecto)
**B. Video real MP4** (recomendado)

#### Estructura de videos por signo

Cada signo tiene su propia carpeta:

`assets/videos/{signo-en-minusculas}/`

**Convención de nombres recomendada:**

- Horóscopos diarios: `{signo-en-minúsculas}-hoy.mp4`

Ejemplos concretos:

| Signo       | Carpeta          | Nombre del archivo          | Ruta completa                                      |
|-------------|------------------|-----------------------------|----------------------------------------------------|
| Virgo       | `virgo/`         | `virgo-hoy.mp4`             | `assets/videos/virgo/virgo-hoy.mp4`                |
| Escorpio    | `escorpio/`      | `escorpio-hoy.mp4`          | `assets/videos/escorpio/escorpio-hoy.mp4`          |
| Leo         | `leo/`           | `leo-hoy.mp4`               | `assets/videos/leo/leo-hoy.mp4`                    |
| Géminis     | `geminis/`       | `geminis-hoy.mp4`           | `assets/videos/geminis/geminis-hoy.mp4`            |
| Cáncer      | `cancer/`        | `cancer-hoy.mp4`            | `assets/videos/cancer/cancer-hoy.mp4`              |
| Sagitario   | `sagitario/`     | `sagitario-hoy.mp4`         | `assets/videos/sagitario/sagitario-hoy.mp4`        |

> **Nota importante**: La función `playHoroscopeVideo` convierte automáticamente el nombre del signo a minúsculas y elimina acentos. Por eso usamos `geminis` (sin tilde) y `cancer` (sin tilde).

> Si el archivo no existe en esa ruta, el reproductor de video mostrará un error. En ese caso, el usuario verá el reproductor vacío. Puedes mejorar esto más adelante para que caiga automáticamente a la simulación cinematográfica.

- Aspecto Prohibido (Venus-Lilith): `assets/videos/venus-lilith/venus-lilith.mp4`

#### Cómo agregar un video real para un signo

1. Coloca el archivo MP4 en la carpeta correspondiente:
   `assets/videos/escorpio/escorpio-hoy.mp4`

2. El sistema ya está preparado. La función `playHoroscopeVideo` buscará automáticamente el video en esa ruta.

#### Para el video del Aspecto Destacado (Venus en Cáncer □ Saturno en Aries)

La ruta actual está en `playForbiddenAspect()`:

```js
'assets/videos/venus-saturno-cuadratura/venus-cancer-cuadratura-saturno-aries.mp4'
```

> El aspecto anterior (Venus-Lilith) fue reemplazado. La carpeta `venus-lilith/` sigue existiendo por si se quiere recuperar contenido anterior.

#### Consejo para producción

Para videos grandes, súbelos a **Cloudinary** o **Bunny.net** y reemplaza la ruta local por la URL directa del MP4.

### 4. Modificar Textos de Secciones Fijas

Busca en `script.js` las constantes:

- `SHADOW_WORK_TEXTS`
- `TRANSITS_CONTENT`
- `ROASTS` (ahora llamados "Espejo de la Sombra")

Todos tienen comentarios claros indicando qué editar.

---

## Personalización Rápida

| Qué quieres cambiar          | Dónde editar                  |
|-----------------------------|-------------------------------|
| Nombre del sitio            | `index.html` (logo)           |
| Tagline principal           | `index.html` (Hero)           |
| Colores (rojo, dorado, negro) | `assets/css/styles.css`     |
| Textos de horóscopos        | `assets/js/script.js` → `HOROSCOPES` |
| Roasts / Espejo de la Sombra| `assets/js/script.js` → `SHADOW_MIRROR` |
| Videos por signo            | `assets/videos/{signo}/`    |
| Video Aspecto Prohibido     | `assets/js/script.js` → `playForbiddenAspect` |

---

## Despliegue

### Opción Recomendada: Netlify (más simple)

1. Ve a [netlify.com](https://netlify.com)
2. "Add new site" → "Deploy manually"
3. Arrastra toda la carpeta `AstroCrudo`
4. Listo.

### Vercel

1. "Add New Project"
2. Importa la carpeta o conéctala vía GitHub
3. Deploy automático

### GitHub Pages

Sube los archivos a un repositorio y actívalo en Settings → Pages.

**Nota importante:** Si usas videos reales pesados, súbelos a Cloudinary/Bunny y usa URLs en vez de archivos locales.

---

## Filosofía del Proyecto

Este sitio no busca atraer con sensacionalismo. Busca conectar con personas que ya están listas para mirar su sombra sin anestesia.

El tono debe mantenerse siempre:
- Elegante
- Directo
- Poético pero con autoridad
- Sin condescendencia
- Sin lenguaje de bajo nivel

---

## Créditos

Diseño y desarrollo: AstroCrudo  
Estética visual: Oscura, cinematográfica y profesional  
Reproductor de video: Sistema cinematográfico custom (sin dependencias)

---

*"La astrología que no confronta, no transforma."*

Para cualquier cambio estructural o de tono profundo, contactar al equipo de desarrollo.