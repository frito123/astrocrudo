#!/usr/bin/env python3
"""
Regenera positions.json y astronomical-positions.js a partir del JSON actual,
recalculando ángulos y lotes con la misma lógica que astrocrudo-lilly.
"""

from __future__ import annotations

import json
import re
import sys
from datetime import datetime
from pathlib import Path

import pytz

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from web_export import (  # noqa: E402
    PLANETS_ORDER,
    SIGNOS,
    exportar_posiciones_web,
    format_dms,
    grado_en_signo,
    obtener_signo_zodiacal,
)

# Misma ubicación que astrocrudo-lilly.ipynb
LAT = -33.43144
LON = -70.62901


def parse_zodiac_position(position: str) -> float | None:
    match = re.match(r"^(.+?)\s*\((-?\d+)°\s*(\d+)'\s*([\d.]+)\"\)$", position.strip())
    if not match:
        return None
    sign_name, d, m, s = match.group(1), int(match.group(2)), int(match.group(3)), float(match.group(4))
    if sign_name not in SIGNOS:
        return None
    sign_idx = SIGNOS.index(sign_name)
    return (sign_idx * 30 + d + m / 60 + s / 3600) % 360


def parse_meta_datetime(meta: dict) -> tuple[datetime, object]:
    from skyfield.api import load

    ts = load.timescale()
    utc_raw = meta.get("utc", "")
    local_raw = meta.get("local", "")

    utc_match = re.match(r"(\d{4}-\d{2}-\d{2})\s+(\d{2}):(\d{2})\s+UTC", utc_raw)
    if not utc_match:
        raise ValueError(f"No se pudo interpretar meta.utc: {utc_raw!r}")

    year, month, day = map(int, utc_match.group(1).split("-"))
    hour, minute = int(utc_match.group(2)), int(utc_match.group(3))

    tz = pytz.timezone("America/Santiago")
    if "-04" in local_raw:
        tz = pytz.FixedOffset(-240)
    elif "-03" in local_raw:
        tz = pytz.timezone("America/Santiago")

    t_utc = pytz.utc.localize(datetime(year, month, day, hour, minute, 0))
    t_manual = t_utc.astimezone(tz)
    t_now = ts.from_datetime(t_manual)
    return t_manual, t_now


def calcular_casas(t_manual: datetime) -> dict:
    import swisseph as swe

    t_utc = t_manual.astimezone(pytz.utc)
    jd_ut = swe.utc_to_jd(
        t_utc.year, t_utc.month, t_utc.day,
        t_utc.hour, t_utc.minute, t_utc.second, 1,
    )[1]
    cusps, ascmc = swe.houses(jd_ut, LAT, LON, b"R")
    return {
        "cusps": {i + 1: cusps[i] % 360.0 for i in range(12)},
        "asc": ascmc[0] % 360.0,
        "mc": ascmc[1] % 360.0,
    }


def casa_de_longitud(lon_deg: float, cusps: dict) -> int:
    for i in range(1, 13):
        start = cusps[i]
        end = cusps[1 if i == 12 else i + 1]
        if start > end:
            if lon_deg >= start or lon_deg < end:
                return i
        elif start <= lon_deg < end:
            return i
    return 12


def obtener_cuspide(casa_num: int, casas: dict) -> float:
    return casas["cusps"][casa_num]


def determinar_casa_con_regla(longitud_planeta: float, planeta_nombre: str, casas: dict):
    casa_base = casa_de_longitud(longitud_planeta, casas["cusps"])
    casa_siguiente = (casa_base % 12) + 1 if casa_base != 12 else 1
    cuspide_siguiente = obtener_cuspide(casa_siguiente, casas)
    distancia = (cuspide_siguiente - longitud_planeta + 360) % 360
    if planeta_nombre in PLANETS_ORDER and distancia <= 5.0:
        return casa_siguiente
    return casa_base


def es_carta_diurna(t_now) -> bool:
    from skyfield.api import load, wgs84

    ts = load.timescale()
    planets = load("de421.bsp")
    t = t_now if hasattr(t_now, "tt") else ts.from_datetime(t_now)
    earth = planets["earth"]
    sun = planets["sun"]
    observer = earth + wgs84.latlon(LAT, LON)
    alt_sol, _, _ = observer.at(t).observe(sun).apparent().altaz()
    return alt_sol.degrees > 0


def calcular_lotes_hermeticos(pos: dict, casas: dict, es_diurna: bool) -> dict[str, float]:
    if not all(k in pos for k in PLANETS_ORDER[:7]) or "asc" not in casas:
        return {}

    asc = casas["asc"]
    p = {nombre: datos["lon"] for nombre, datos in pos.items() if "lon" in datos}

    def calcular_lote(a, b, c):
        return (a + b - c + 360) % 360

    if es_diurna:
        fortuna = calcular_lote(asc, p["Luna"], p["Sol"])
        espiritu = calcular_lote(asc, p["Sol"], p["Luna"])
        eros = calcular_lote(asc, p["Venus"], espiritu)
        necesidad = calcular_lote(asc, fortuna, p["Mercurio"])
        coraje = calcular_lote(asc, fortuna, p["Marte"])
        victoria = calcular_lote(asc, p["Júpiter"], espiritu)
        nemesis = calcular_lote(asc, fortuna, p["Saturno"])
    else:
        fortuna = calcular_lote(asc, p["Sol"], p["Luna"])
        espiritu = calcular_lote(asc, p["Luna"], p["Sol"])
        eros = calcular_lote(asc, espiritu, p["Venus"])
        necesidad = calcular_lote(asc, p["Mercurio"], fortuna)
        coraje = calcular_lote(asc, p["Marte"], fortuna)
        victoria = calcular_lote(asc, espiritu, p["Júpiter"])
        nemesis = calcular_lote(asc, p["Saturno"], fortuna)

    return {
        "Fortuna (Tychê)": fortuna,
        "Espíritu (Daimon)": espiritu,
        "Eros": eros,
        "Necesidad (Anankê)": necesidad,
        "Coraje (Thrasos)": coraje,
        "Victoria (Nikê)": victoria,
        "Némesis": nemesis,
    }


def bodies_to_pos(bodies: list[dict]) -> dict:
    name_map = {
        "sol": "Sol", "luna": "Luna", "mercurio": "Mercurio", "venus": "Venus",
        "marte": "Marte", "jupiter": "Júpiter", "saturno": "Saturno",
        "urano": "Urano", "neptuno": "Neptuno", "pluton": "Plutón",
        "nodo-norte": "Nodo Norte (M)", "nodo-sur": "Nodo Sur (M)",
    }
    pos = {}
    for body in bodies:
        name = body.get("name") or name_map.get(body.get("id", ""), "")
        lon = parse_zodiac_position(body.get("position", ""))
        if lon is None or not name:
            continue
        entry = {
            "lon": lon,
            "sign_index": int(lon // 30) % 12,
            "web": {
                "position": body.get("position"),
                "velocity": body.get("velocity"),
                "altitude": body.get("altitude"),
                "azimuth": body.get("azimuth"),
                "eclipticLatitude": body.get("eclipticLatitude"),
                "declination": body.get("declination"),
            },
        }
        pos[name] = entry
    return pos


def main() -> None:
    json_path = ROOT / "assets" / "data" / "positions.json"
    payload = json.loads(json_path.read_text(encoding="utf-8"))

    t_manual, t_now = parse_meta_datetime(payload["meta"])
    pos = bodies_to_pos(payload.get("bodies", []))
    casas = calcular_casas(t_manual)
    lotes = calcular_lotes_hermeticos(pos, casas, es_carta_diurna(t_now))

    preserved_stars = payload.get("stars") or []

    out_path = exportar_posiciones_web(
        pos,
        lotes,
        casas,
        t_now,
        t_manual,
        determinar_casa_con_regla,
        project_root=ROOT,
    )

    if preserved_stars:
        refreshed = json.loads(out_path.read_text(encoding="utf-8"))
        if not refreshed.get("stars"):
            refreshed["stars"] = preserved_stars
            json_text = json.dumps(refreshed, ensure_ascii=False, indent=2) + "\n"
            out_path.write_text(json_text, encoding="utf-8")
            js_path = ROOT / "assets" / "js" / "astronomical-positions.js"
            if js_path.exists():
                content = js_path.read_text(encoding="utf-8")
                marker = "const ASTRONOMICAL_POSITIONS = "
                start = content.find(marker)
                if start != -1:
                    end = content.find(";\n\nfunction updateAstronomicalPositions", start)
                    if end != -1:
                        js_payload = json.dumps(refreshed, ensure_ascii=False, indent=2)
                        js_path.write_text(
                            content[: start + len(marker)] + js_payload + content[end:],
                            encoding="utf-8",
                        )
            print(f"[Web] Estrellas restauradas desde exportación previa ({len(preserved_stars)})")


if __name__ == "__main__":
    main()