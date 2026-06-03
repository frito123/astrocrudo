# AstroCrudo — Videos Pendientes de Subir

Este archivo lista los videos que **faltan** para completar todas las secciones del sitio.

## Resumen
**Total recomendado: 13 videos nuevos** (Saturno daily ya funciona por fallback con el video especial)

- 5 planetas (versión mal)
- 6 signos diarios (acuario, capricornio, escorpio, libra, piscis, sagitario)
- 2 páginas especiales profundas

> Saturno reutiliza automáticamente su video especial actual (`saturno-el-limite-necesario.mp4`) para la sección de horóscopos del día. Un `saturno-energia.mp4` dedicado sigue siendo ideal para consistencia futura, pero no es bloqueante.

---

## 1. Planetas Clásicos — Versión "Mal" (en `clasica/`)

Ubicación: `assets/videos/clasica/`

Faltan (5):

- `jupiter-mal.mp4`
- `marte-mal.mp4`
- `neptuno-mal.mp4`
- `pluton-mal.mp4`
- `urano-mal.mp4`

**Estado actual de planetas (data.js ya actualizado):**
- Sol, Luna, Mercurio, Saturno, Venus: bien + mal listos (archivos en disco + rutas en data.js)
- Júpiter, Marte, Neptuno, Plutón, Urano: solo "bien" (falta el mal)

Una vez subidos los 5 mal, las páginas individuales de planetas mostrarán automáticamente las dos tarjetas (Bien Dignificado / Mal Dignificado).

---

## 2. Signos — Videos de Energía Diaria (horóscopos del día)

Usados en la home → sección "Signos zodiacales" cuando el usuario hace clic en "VER ENERGÍA CINEMATOGRÁFICA".

**Convención recomendada:**  
`assets/videos/{signo-minúsculas}/{signo-minúsculas}-energia.mp4`

(El código también acepta fallback a `-hoy.mp4`).

### Faltan completamente (6):

- `acuario/acuario-energia.mp4`
- `capricornio/capricornio-energia.mp4`
- `escorpio/escorpio-energia.mp4`
- `libra/libra-energia.mp4`
- `piscis/piscis-energia.mp4`
- `sagitario/sagitario-energia.mp4`

### Para Saturno en la sección de Signos (adicional):

- `saturno/saturno-energia.mp4`  (recomendado para consistencia, pero **no obligatorio**)

> El código ahora tiene fallback automático: si no encuentra `saturno-energia.mp4`, usará el video especial existente (`saturno-el-limite-necesario.mp4`) para los horóscopos del día de Saturno.
> 
> **Importante:** El video `saturno-el-limite-necesario.mp4` sigue siendo el principal para la página especial `/saturno`.

**Signos que ya tienen su video diario:**
aries, cancer, geminis, leo, tauro, virgo (6 de 12).

---

## 3. Páginas Especiales Profundas (placeholders)

Estas páginas ya existen pero muestran "PRÓXIMAMENTE" porque no hay video.

### Plutón
- Carpeta: `assets/videos/pluton/`
- Nombre sugerido en el código: `pluton-regenerador.mp4` (puedes elegir otro)
- Cuando subas el archivo, edita `pluton/index.html` y reemplaza el bloque placeholder por el `<video>`.

### Venus y Lilith
- Carpeta: `assets/videos/venus-lilith/`
- Nombre sugerido: `venus-lilith-mitologia.mp4` o `venus-lilith-exilio.mp4`
- Editar `venus-lilith/index.html` al subir.

---

## Carpetas ya preparadas (listas para recibir archivos)

- `assets/videos/acuario/`
- `assets/videos/capricornio/`
- `assets/videos/escorpio/`
- `assets/videos/libra/`
- `assets/videos/piscis/`
- `assets/videos/sagitario/`
- `assets/videos/pluton/`
- `assets/videos/venus-lilith/`

---

## Notas adicionales

- Todos los videos de **Naturaleza de los Signos** (12) ya están en `clasica/`.
- El Aspecto Prohibido (Venus □ Saturno) ya tiene su video.
- La página especial de Saturno ya tiene video.
- Los archivos son pesados. Recomendación del README: si son muy grandes, súbelos a Cloudinary / Bunny.net y reemplaza las rutas locales por URLs directas de MP4.

---

## Qué hacer cuando subas los especiales

Dime los nombres exactos de los archivos que vas a usar para Plutón y Venus-Lilith y actualizo automáticamente:
- Los `<source src="...">` en los HTML
- Los comentarios / placeholders

¿Quieres que también haga más flexible el reproductor de daily horóscopos (por ejemplo, que Saturno reutilice su video especial como fallback)?

---

*Archivo generado automáticamente tras auditoría del código y disco.*
