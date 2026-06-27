"""
Exporta posiciones astronómicas del análisis Lilly → JSON para AstroCrudo.

Uso desde el notebook (al final del cálculo de lotes):
    from web_export import exportar_posiciones_web
    exportar_posiciones_web(pos, lotes, casas, t_now_skyfield, t_manual)
"""

from __future__ import annotations

import json
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Optional

WEB_EXPORT_ROOT = Path(r"C:\Users\jorge\AstroCrudo")

SIGNOS = [
    "Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo",
    "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis",
]

BODY_IDS = {
    "Sol": "sol", "Luna": "luna", "Mercurio": "mercurio", "Venus": "venus",
    "Marte": "marte", "Júpiter": "jupiter", "Saturno": "saturno",
    "Urano": "urano", "Neptuno": "neptuno", "Plutón": "pluton",
    "Nodo Norte (M)": "nodo-norte", "Nodo Sur (M)": "nodo-sur",
}

WEB_LOTES = [
    "Fortuna (Tychê)", "Espíritu (Daimon)", "Eros", "Necesidad (Anankê)",
    "Coraje (Thrasos)", "Victoria (Nikê)", "Némesis",
]

LOT_IDS = {
    "Fortuna (Tychê)": "fortuna", "Espíritu (Daimon)": "espiritu", "Eros": "eros",
    "Necesidad (Anankê)": "necesidad", "Coraje (Thrasos)": "coraje",
    "Victoria (Nikê)": "victoria", "Némesis": "nemesis",
}

STAR_IDS = {
    "Algol": "algol", "Regulus": "regulus", "Antares": "antares", "Spica": "spica",
    "Fomalhaut": "fomalhaut", "Sirius": "sirius", "Canopus": "canopus",
    "Rigel Kentaurus": "rigel-kentaurus", "Arcturus": "arcturus",
}

ESTRELLAS_SWE = {
    "Algol": "Algol", "Regulus": "Regulus", "Antares": "Antares",
    "Spica": "Spica", "Fomalhaut": "Fomalhaut", "Sirius": "Sirius",
    "Canopus": "Canopus", "Rigel Kentaurus": "Rigil Kentaurus", "Arcturus": "Arcturus",
}

BODY_ORDER = [
    "Sol", "Luna", "Mercurio", "Venus", "Marte", "Júpiter", "Saturno",
    "Urano", "Neptuno", "Plutón", "Nodo Norte (M)", "Nodo Sur (M)",
]


def format_dms(degrees: float) -> str:
    d = int(degrees)
    m_float = (degrees - d) * 60
    m = int(m_float)
    s = (m_float - m) * 60
    return f"{d}° {m:02d}' {s:05.2f}\""


def format_dms_signed(degrees: float) -> str:
    sign = "-" if degrees < 0 else ""
    return f"{sign}{format_dms(abs(degrees))}"


def obtener_signo_zodiacal(lon: float) -> str:
    idx = int(lon // 30) % 12
    return SIGNOS[idx]


def grado_en_signo(lon: float) -> float:
    return lon % 30


def _normalizar_posicion_zodiacal(position: str) -> str:
    import re

    match = re.match(r"^(.+?)\s*\((-?\d+)°\s*(\d+)'\s*([\d.]+)\"\)$", position.strip())
    if not match:
        return position

    sign, d, m, s = match.group(1), int(match.group(2)), int(match.group(3)), float(match.group(4))
    abs_deg = d + m / 60 + s / 3600
    if abs_deg >= 30:
        return f"{sign} ({format_dms(grado_en_signo(abs_deg))})"
    return position


def _row(name: str, position: str, velocity: str = "N/A",
         altitude: str = "N/A", azimuth: str = "N/A",
         ecliptic_latitude: str = "N/A", declination: str = "N/A") -> Dict[str, str]:
    return {
        "name": name,
        "position": position,
        "velocity": velocity,
        "altitude": altitude,
        "azimuth": azimuth,
        "eclipticLatitude": ecliptic_latitude,
        "declination": declination,
    }


def _body_from_pos(name: str, data: Dict[str, Any]) -> Optional[Dict[str, str]]:
    if "web" in data and isinstance(data["web"], dict):
        w = data["web"]
        position = _normalizar_posicion_zodiacal(w.get("position", "N/A"))
        return _row(
            name,
            position,
            w.get("velocity", "N/A"),
            w.get("altitude", "N/A"),
            w.get("azimuth", "N/A"),
            w.get("eclipticLatitude", "N/A"),
            w.get("declination", "N/A"),
        )

    if "lon" not in data:
        return None

    lon = float(data["lon"])
    vel = data.get("vel", 0)
    position = f"{obtener_signo_zodiacal(lon)} ({format_dms(grado_en_signo(lon))})"
    velocity = "Fija" if name in STAR_IDS else f"{float(vel):+.2f}°/día"
    dec = data.get("dec")
    declination = format_dms_signed(float(dec)) if dec is not None else "N/A"

    return _row(name, position, velocity, declination=declination)


def _calcular_estrellas(t_now) -> List[Dict[str, str]]:
    stars: List[Dict[str, str]] = []
    try:
        import swisseph as swe
    except ImportError:
        return stars

    jd_ut = t_now.ut1
    for display_name, swe_id in ESTRELLAS_SWE.items():
        try:
            star_data, _, serr = swe.fixstar2_ut(swe_id, jd_ut, swe.FLG_SWIEPH)
            if serr < 0:
                continue
            mag_data, _ = swe.fixstar2_mag(swe_id)
            lon_ecl = star_data[0]
            lat_ecl = star_data[1]
            stars.append({
                "id": STAR_IDS[display_name],
                "name": display_name,
                "position": f"{obtener_signo_zodiacal(lon_ecl)} ({format_dms(grado_en_signo(lon_ecl))})",
                "eclipticLatitude": format_dms_signed(lat_ecl),
                "magnitude": f"{mag_data:.2f}" if mag_data != 99 else "N/A",
            })
        except Exception:
            continue
    return stars


def _build_lotes(lotes: Dict[str, float], casas: Dict, determinar_casa_fn) -> List[Dict[str, Any]]:
    result = []
    for nombre in WEB_LOTES:
        if nombre not in lotes:
            continue
        grado = float(lotes[nombre])
        casa = determinar_casa_fn(grado, nombre, casas)
        result.append({
            "id": LOT_IDS[nombre],
            "name": nombre,
            "position": format_dms(grado_en_signo(grado)),
            "sign": obtener_signo_zodiacal(grado),
            "house": casa if casa is not None else "N/A",
        })
    return result


def build_payload(
    pos: Dict,
    lotes: Dict[str, float],
    casas: Dict,
    t_now,
    t_manual: datetime,
    determinar_casa_fn,
) -> Dict[str, Any]:
    utc_str = t_now.utc_strftime("%Y-%m-%d %H:%M UTC")
    local_str = t_manual.strftime("%Y-%m-%d %H:%M %Z")

    bodies = []
    for name in BODY_ORDER:
        if name not in pos:
            continue
        row = _body_from_pos(name, pos[name])
        if row:
            bodies.append({
                "id": BODY_IDS[name],
                **row,
            })

    return {
        "meta": {
            "utc": utc_str,
            "local": local_str,
            "label": "POSICIONES Y VELOCIDADES ASTRONÓMICAS",
            "generatedAt": datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ"),
        },
        "bodies": bodies,
        "stars": _calcular_estrellas(t_now),
        "lots": _build_lotes(lotes, casas, determinar_casa_fn),
    }


def _es_raiz_astrocrudo(base: Path) -> bool:
    return (base / "scripts" / "web_export.py").exists() and (base / "assets").exists()


def _candidatos_raiz_proyecto() -> List[Path]:
    home = Path.home()
    candidatos: List[Path] = []

    try:
        candidatos.append(Path(__file__).resolve().parents[1])
    except NameError:
        pass

    candidatos.extend([
        WEB_EXPORT_ROOT,
        Path.cwd(),
        *Path.cwd().parents,
    ])

    for base in [Path.cwd(), *Path.cwd().parents]:
        if (base / "astrocrudo-lilly.ipynb").exists():
            candidatos.insert(0, base)

    vistos = set()
    unicos: List[Path] = []
    for base in candidatos:
        try:
            resolved = base.resolve()
        except OSError:
            continue
        if resolved in vistos:
            continue
        vistos.add(resolved)
        unicos.append(resolved)
    return unicos


def encontrar_raiz_proyecto() -> Path:
    for base in _candidatos_raiz_proyecto():
        if _es_raiz_astrocrudo(base):
            return base
    raise FileNotFoundError(
        "No se encontró AstroCrudo. La carpeta debe contener scripts/web_export.py y assets/."
    )


def preparar_scripts_en_path() -> Path:
    import sys

    root = encontrar_raiz_proyecto()
    scripts = root / "scripts"
    scripts_str = str(scripts)
    if scripts_str not in sys.path:
        sys.path.insert(0, scripts_str)
    return root


def resolver_raiz_proyecto(project_root: Optional[Path] = None) -> Path:
    if project_root is not None:
        return Path(project_root)
    return encontrar_raiz_proyecto()


def resolver_raiz_exportacion() -> Path:
    """Siempre exporta al repo web (WEB_EXPORT_ROOT), no a la carpeta del notebook."""
    if (WEB_EXPORT_ROOT / "assets").exists():
        return WEB_EXPORT_ROOT
    return encontrar_raiz_proyecto()


def exportar_posiciones_web(
    pos: Dict,
    lotes: Dict[str, float],
    casas: Dict,
    t_now,
    t_manual: datetime,
    determinar_casa_fn=None,
    project_root: Optional[Path] = None,
) -> Path:
    if determinar_casa_fn is None:
        raise ValueError("Se requiere determinar_casa_con_regla del notebook.")

    root = resolver_raiz_exportacion()
    out_path = root / "assets" / "data" / "positions.json"
    out_path.parent.mkdir(parents=True, exist_ok=True)

    payload = build_payload(pos, lotes, casas, t_now, t_manual, determinar_casa_fn)
    json_text = json.dumps(payload, ensure_ascii=False, indent=2) + "\n"
    out_path.write_text(json_text, encoding="utf-8")

    js_path = root / "assets" / "js" / "astronomical-positions.js"
    utc = payload.get("meta", {}).get("utc", "")
    local = payload.get("meta", {}).get("local", "")
    js_payload = json.dumps(payload, ensure_ascii=False, indent=2)
    js_text = (
        "// ============================================\n"
        "// ASTROCRUDO — Posiciones Astronómicas\n"
        "// ============================================\n"
        "//\n"
        "// Respaldo embebido si positions.json no está disponible.\n"
        "// Generado automáticamente por scripts/web_export.py\n"
        "//\n"
        f"// Último análisis: {utc} | {local}\n\n"
        f"const ASTRONOMICAL_POSITIONS = {js_payload};\n\n"
        "function updateAstronomicalPositions(newData) {\n"
        "  if (!newData || typeof newData !== \"object\") return false;\n\n"
        "  if (newData.meta) Object.assign(ASTRONOMICAL_POSITIONS.meta, newData.meta);\n"
        "  if (Array.isArray(newData.bodies)) ASTRONOMICAL_POSITIONS.bodies = newData.bodies;\n"
        "  if (Array.isArray(newData.stars)) ASTRONOMICAL_POSITIONS.stars = newData.stars;\n"
        "  if (Array.isArray(newData.lots)) ASTRONOMICAL_POSITIONS.lots = newData.lots;\n\n"
        "  if (typeof renderAstronomicalTables === \"function\") {\n"
        "    renderAstronomicalTables();\n"
        "  }\n\n"
        "  return true;\n"
        "}\n"
    )
    js_path.write_text(js_text, encoding="utf-8")

    print(f"[Web] OK — JSON guardado en: {out_path}")
    print(f"[Web] OK — Respaldo JS guardado en: {js_path}")
    print(f"[Web] {len(payload['bodies'])} cuerpos | {len(payload['stars'])} estrellas | {len(payload['lots'])} lotes")
    print(f"[Web] Hora análisis: {utc} | {local}")
    return out_path