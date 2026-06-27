"""
Exporta posiciones astronómicas del análisis Lilly → JSON para AstroCrudo.

Uso desde el notebook (al final del cálculo de lotes):
    from web_export import exportar_posiciones_web
    exportar_posiciones_web(pos, lotes, casas, t_now_skyfield, t_manual)
"""

from __future__ import annotations

import calendar
import json
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

import pytz

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

PLANETS_ORDER = [
    "Sol", "Luna", "Mercurio", "Venus", "Marte", "Júpiter", "Saturno",
    "Urano", "Neptuno", "Plutón",
]

NODES_ORDER = ["Nodo Norte (M)", "Nodo Sur (M)"]

ANGLE_NAMES = [
    "Ascendente",
    "Descendente",
    "Medio Cielo (MC)",
    "Fondo del Cielo (IC)",
]

ANGLE_IDS = {
    "Ascendente": "ascendente",
    "Descendente": "descendente",
    "Medio Cielo (MC)": "medio-cielo",
    "Fondo del Cielo (IC)": "fondo-del-cielo",
}

# Compatibilidad con código que aún use BODY_ORDER
BODY_ORDER = PLANETS_ORDER + NODES_ORDER

MES_ES = {
    1: "enero", 2: "febrero", 3: "marzo", 4: "abril",
    5: "mayo", 6: "junio", 7: "julio", 8: "agosto",
    9: "septiembre", 10: "octubre", 11: "noviembre", 12: "diciembre",
}

MES_ABBR_ES = {
    1: "ene", 2: "feb", 3: "mar", 4: "abr",
    5: "may", 6: "jun", 7: "jul", 8: "ago",
    9: "sep", 10: "oct", 11: "nov", 12: "dic",
}

FASES_LUNARES = {
    0: ("luna-nueva", "Luna Nueva"),
    1: ("luna-creciente", "Luna Creciente"),
    2: ("luna-llena", "Luna Llena"),
    3: ("luna-menguante", "Luna Menguante"),
}

SIZIGIA_TIPOS = {0: "Luna Nueva", 2: "Luna Llena"}

_EPH_CACHE = None
_TS_CACHE = None


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


def _init_swisseph() -> bool:
    try:
        import swisseph as swe
    except ImportError:
        return False

    ephe_candidates = [
        Path.home() / "Documents" / "swiss_ephe",
        Path(r"C:/Users/jorge/Documents/swiss_ephe"),
    ]
    for ephe_path in ephe_candidates:
        if ephe_path.exists():
            swe.set_ephe_path(str(ephe_path))
            break
    return True


def _calcular_estrellas(t_now) -> List[Dict[str, str]]:
    stars: List[Dict[str, str]] = []
    if not _init_swisseph():
        return stars

    import swisseph as swe

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


def _position_from_lon(lon: float) -> str:
    return f"{obtener_signo_zodiacal(lon)} ({format_dms(grado_en_signo(lon))})"


def _get_skyfield() -> Optional[Tuple[Any, Any, Any, Any]]:
    global _EPH_CACHE, _TS_CACHE
    try:
        from skyfield import almanac
        from skyfield.api import load
    except ImportError:
        return None

    if _TS_CACHE is None:
        _TS_CACHE = load.timescale()
    if _EPH_CACHE is None:
        _EPH_CACHE = load("de421.bsp")

    earth = _EPH_CACHE["earth"]
    moon = _EPH_CACHE["moon"]
    sun = _EPH_CACHE["sun"]
    return _TS_CACHE, _EPH_CACHE, earth, moon, sun, almanac


def _moon_lon_at(t_sky) -> float:
    sf = _get_skyfield()
    if not sf:
        return 0.0
    _, _, earth, moon, _, _ = sf
    _, lon_ecl, _ = earth.at(t_sky).observe(moon).ecliptic_latlon(epoch="date")
    return float(lon_ecl.degrees) % 360


def _calcular_sizigia_prenatal(t_now, t_manual: datetime) -> Optional[Dict[str, Any]]:
    sf = _get_skyfield()
    if not sf:
        return None

    ts, _, _, _, _, almanac = sf
    t_birth = t_now if hasattr(t_now, "tt") else ts.from_datetime(t_manual)
    t_start = ts.tt_jd(t_birth.tt - 45.0)

    try:
        times, phases = almanac.find_discrete(t_start, t_birth, almanac.moon_phases(sf[1]))
    except Exception:
        return None

    syzygies = [(t, int(p)) for t, p in zip(times, phases) if int(p) in SIZIGIA_TIPOS]
    if not syzygies:
        return None

    t_syzygy, phase_code = syzygies[-1]
    lon = _moon_lon_at(t_syzygy)
    dt_local = t_syzygy.astimezone(t_manual.tzinfo or pytz.utc)

    return {
        "id": "sizigia-prenatal",
        "name": "Sizigia prenatal",
        "category": "punto",
        "type": SIZIGIA_TIPOS[phase_code],
        "position": _position_from_lon(lon),
        "sign": obtener_signo_zodiacal(lon),
        "velocity": SIZIGIA_TIPOS[phase_code],
        "datetime": dt_local.strftime("%Y-%m-%d %H:%M %Z"),
        "altitude": "N/A",
        "azimuth": "N/A",
        "eclipticLatitude": "N/A",
        "declination": "N/A",
    }


def _calcular_fases_lunares_mes(t_manual: datetime) -> Dict[str, Any]:
    sf = _get_skyfield()
    year, month = t_manual.year, t_manual.month
    month_label = f"{MES_ES[month].capitalize()} de {year}"

    if not sf:
        return {"month": f"{year}-{month:02d}", "monthLabel": month_label, "phases": []}

    ts, eph, _, _, _, almanac = sf
    _, last_day = calendar.monthrange(year, month)

    try:
        t_inicio = ts.utc(year, month, 1)
        t_fin = ts.utc(year, month, last_day, 23, 59, 59)
        times, phase_codes = almanac.find_discrete(t_inicio, t_fin, almanac.moon_phases(eph))
    except Exception:
        return {"month": f"{year}-{month:02d}", "monthLabel": month_label, "phases": []}

    phases_out: List[Dict[str, str]] = []
    tz = t_manual.tzinfo or pytz.utc

    for code, (phase_id, phase_name) in FASES_LUNARES.items():
        matches = [t for t, p in zip(times, phase_codes) if int(p) == code]
        if not matches:
            continue
        t_phase = matches[0]
        lon = _moon_lon_at(t_phase)
        dt_local = t_phase.astimezone(tz)
        phases_out.append({
            "id": phase_id,
            "name": phase_name,
            "datetime": (
                f"{dt_local.day:02d} {MES_ABBR_ES[dt_local.month]} {dt_local.year}"
                f" · {dt_local.strftime('%H:%M %Z')}"
            ),
            "sign": obtener_signo_zodiacal(lon),
            "position": format_dms(grado_en_signo(lon)),
            "positionFull": _position_from_lon(lon),
        })

    return {
        "month": f"{year}-{month:02d}",
        "monthLabel": month_label,
        "phases": phases_out,
    }


def _build_antiscia(pos: Dict) -> List[Dict[str, str]]:
    antiscia: List[Dict[str, str]] = []
    sources = list(PLANETS_ORDER)

    if "Ascendente" in pos and "lon" in pos["Ascendente"]:
        sources.append("Ascendente")
    if "Medio Cielo (MC)" in pos and "lon" in pos["Medio Cielo (MC)"]:
        sources.append("Medio Cielo (MC)")

    for source in sources:
        if source not in pos or "lon" not in pos[source]:
            continue
        lon_original = float(pos[source]["lon"]) % 360
        lon_antiscio = (180.0 - lon_original) % 360
        lon_contra = (360.0 - lon_original) % 360
        source_id = BODY_IDS.get(source) or ANGLE_IDS.get(source) or source.lower().replace(" ", "-")
        antiscia.append({
            "id": f"{source_id}-antiscia",
            "source": source,
            "original": _position_from_lon(lon_original),
            "antiscio": _position_from_lon(lon_antiscio),
            "contraAntiscio": _position_from_lon(lon_contra),
        })
    return antiscia


def _build_angles(casas: Dict) -> List[Dict[str, Any]]:
    if not casas or "asc" not in casas or "mc" not in casas:
        return []

    angle_lons = {
        "Ascendente": float(casas["asc"]) % 360,
        "Descendente": (float(casas["asc"]) + 180) % 360,
        "Medio Cielo (MC)": float(casas["mc"]) % 360,
        "Fondo del Cielo (IC)": (float(casas["mc"]) + 180) % 360,
    }

    bodies = []
    for name in ANGLE_NAMES:
        lon = angle_lons[name]
        bodies.append({
            "id": ANGLE_IDS[name],
            "name": name,
            "category": "angulo",
            "position": _position_from_lon(lon),
            "velocity": "—",
            "altitude": "N/A",
            "azimuth": "N/A",
            "eclipticLatitude": "N/A",
            "declination": "N/A",
        })
    return bodies


def _build_lot_bodies(lotes: Dict[str, float], casas: Dict, determinar_casa_fn) -> List[Dict[str, Any]]:
    bodies = []
    for nombre in WEB_LOTES:
        if nombre not in lotes:
            continue
        grado = float(lotes[nombre]) % 360
        casa = determinar_casa_fn(grado, nombre, casas)
        casa_str = f"Casa {casa}" if casa is not None else "N/A"
        bodies.append({
            "id": LOT_IDS[nombre],
            "name": nombre,
            "category": "lote",
            "position": _position_from_lon(grado),
            "velocity": casa_str,
            "altitude": "N/A",
            "azimuth": "N/A",
            "eclipticLatitude": "N/A",
            "declination": "N/A",
        })
    return bodies


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

    bodies: List[Dict[str, Any]] = []

    for name in PLANETS_ORDER:
        if name not in pos:
            continue
        row = _body_from_pos(name, pos[name])
        if row:
            bodies.append({"id": BODY_IDS[name], "category": "planeta", **row})

    for name in NODES_ORDER:
        if name not in pos:
            continue
        row = _body_from_pos(name, pos[name])
        if row:
            bodies.append({"id": BODY_IDS[name], "category": "nodo", **row})

    bodies.extend(_build_angles(casas))
    bodies.extend(_build_lot_bodies(lotes, casas, determinar_casa_fn))

    pos_antiscia = dict(pos)
    if casas and "asc" in casas:
        pos_antiscia["Ascendente"] = {"lon": float(casas["asc"]) % 360}
        pos_antiscia["Medio Cielo (MC)"] = {"lon": float(casas["mc"]) % 360}

    sizigia = _calcular_sizigia_prenatal(t_now, t_manual)
    if sizigia:
        bodies.append(sizigia)

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
        "lunarPhases": _calcular_fases_lunares_mes(t_manual),
        "antiscia": _build_antiscia(pos_antiscia),
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
        "  if (Array.isArray(newData.lots)) ASTRONOMICAL_POSITIONS.lots = newData.lots;\n"
        "  if (newData.lunarPhases) ASTRONOMICAL_POSITIONS.lunarPhases = newData.lunarPhases;\n"
        "  if (Array.isArray(newData.antiscia)) ASTRONOMICAL_POSITIONS.antiscia = newData.antiscia;\n\n"
        "  if (typeof renderAstronomicalTables === \"function\") {\n"
        "    renderAstronomicalTables();\n"
        "  }\n\n"
        "  return true;\n"
        "}\n"
    )
    js_path.write_text(js_text, encoding="utf-8")

    print(f"[Web] OK — JSON guardado en: {out_path}")
    print(f"[Web] OK — Respaldo JS guardado en: {js_path}")
    n_angulos = sum(1 for b in payload["bodies"] if b.get("category") == "angulo")
    n_lotes_tabla = sum(1 for b in payload["bodies"] if b.get("category") == "lote")
    n_puntos = sum(1 for b in payload["bodies"] if b.get("category") == "punto")
    n_fases = len(payload.get("lunarPhases", {}).get("phases", []))
    print(
        f"[Web] {len(payload['bodies'])} filas en tabla "
        f"({n_angulos} ángulos, {n_lotes_tabla} lotes, {n_puntos} puntos) | "
        f"{n_fases} fases lunares | {len(payload.get('antiscia', []))} antiscia | "
        f"{len(payload['stars'])} estrellas | {len(payload['lots'])} lotes (índice)"
    )
    print(f"[Web] Hora análisis: {utc} | {local}")
    return out_path