"""Convierte grados absolutos (0-360) a grados dentro del signo (0-30)."""

from __future__ import annotations

import json
import re
from pathlib import Path


def format_dms(degrees: float) -> str:
    d = int(degrees)
    m_float = (degrees - d) * 60
    m = int(m_float)
    s = (m_float - m) * 60
    return f"{d}° {m:02d}' {s:05.2f}\""


def parse_dms(value: str) -> float | None:
    match = re.match(r"(-?\d+)°\s*(\d+)'\s*([\d.]+)\"", value.strip())
    if not match:
        return None
    return int(match.group(1)) + int(match.group(2)) / 60 + float(match.group(3)) / 3600


def grado_en_signo(lon: float) -> float:
    return lon % 30


def fix_zodiac(position: str) -> str:
    match = re.match(r"^(.+?)\s*\((.+)\)$", position.strip())
    if not match:
        return position

    sign, dms = match.group(1), match.group(2)
    deg = parse_dms(dms)
    if deg is not None and deg >= 30:
        return f"{sign} ({format_dms(grado_en_signo(deg))})"
    return position


def fix_lot(position: str) -> str:
    deg = parse_dms(position)
    if deg is not None and deg >= 30:
        return format_dms(grado_en_signo(deg))
    return position


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    data_path = root / "assets" / "data" / "positions.json"
    data = json.loads(data_path.read_text(encoding="utf-8"))

    for body in data.get("bodies", []):
        body["position"] = fix_zodiac(body["position"])
    for star in data.get("stars", []):
        star["position"] = fix_zodiac(star["position"])
    for lot in data.get("lots", []):
        lot["position"] = fix_lot(lot["position"])

    data_path.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Actualizado: {data_path}")


if __name__ == "__main__":
    main()