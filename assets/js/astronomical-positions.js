// ============================================
// ASTROCRUDO — Posiciones Astronómicas
// ============================================
//
// Respaldo embebido si positions.json no está disponible.
// La fuente principal es assets/data/positions.json, generado
// automáticamente al ejecutar el notebook Python (scripts/web_export.py).
//
// Último análisis: 2026-06-26 02:58 UTC | 2026-06-25 22:58 -04

const ASTRONOMICAL_POSITIONS = {
  meta: {
    utc: "2026-06-26 02:58 UTC",
    local: "2026-06-25 22:58 -04",
    label: "POSICIONES Y VELOCIDADES ASTRONÓMICAS"
  },

  bodies: [
    { id: "sol", name: "Sol", position: "Cáncer (94° 33' 34\")", velocity: "+0.95°/día", altitude: "-64° 27' 51\"", azimuth: "253° 45' 32\"", eclipticLatitude: "-0° 00' 01\"", declination: "23° 22' 10\"" },
    { id: "luna", name: "Luna", position: "Escorpio (232° 11' 35\")", velocity: "+11.91°/día", altitude: "69° 31' 06\"", azimuth: "295° 31' 27\"", eclipticLatitude: "-5° 00' 25\"", declination: "-23° 02' 57\"" },
    { id: "mercurio", name: "Mercurio", position: "Cáncer (115° 45' 43\")", velocity: "+0.24°/día", altitude: "-44° 17' 19\"", azimuth: "265° 34' 26\"", eclipticLatitude: "-1° 13' 20\"", declination: "19° 51' 21\"" },
    { id: "venus", name: "Venus", position: "Leo (134° 38' 37\")", velocity: "+1.14°/día", altitude: "-26° 44' 11\"", azimuth: "275° 02' 27\"", eclipticLatitude: "1° 54' 10\"", declination: "18° 22' 00\"" },
    { id: "marte", name: "Marte", position: "Tauro (58° 04' 58\")", velocity: "+0.72°/día", altitude: "-72° 12' 15\"", azimuth: "139° 04' 07\"", eclipticLatitude: "-0° 21' 26\"", declination: "19° 17' 55\"" },
    { id: "jupiter", name: "Júpiter", position: "Cáncer (119° 07' 44\")", velocity: "+0.21°/día", altitude: "-41° 30' 29\"", azimuth: "269° 01' 05\"", eclipticLatitude: "0° 26' 02\"", declination: "20° 49' 52\"" },
    { id: "saturno", name: "Saturno", position: "Aries (13° 57' 34\")", velocity: "+0.05°/día", altitude: "-31° 07' 49\"", azimuth: "108° 30' 26\"", eclipticLatitude: "-2° 21' 40\"", declination: "3° 11' 04\"" },
    { id: "urano", name: "Urano", position: "Géminis (63° 27' 49\")", velocity: "+0.05°/día", altitude: "-75° 56' 34\"", azimuth: "153° 18' 59\"", eclipticLatitude: "-0° 09' 24\"", declination: "20° 37' 07\"" },
    { id: "neptuno", name: "Neptuno", position: "Aries (4° 22' 58\")", velocity: "+0.01°/día", altitude: "-22° 04' 20\"", azimuth: "104° 52' 06\"", eclipticLatitude: "-1° 21' 44\"", declination: "0° 20' 36\"" },
    { id: "pluton", name: "Plutón", position: "Acuario (304° 58' 06\")", velocity: "-0.02°/día", altitude: "36° 39' 08\"", azimuth: "95° 26' 49\"", eclipticLatitude: "-4° 12' 45\"", declination: "-23° 11' 53\"" },
    { id: "nodo-norte", name: "Nodo Norte (M)", position: "Piscis (332° 50' 42\")", velocity: "-0.05°/día", altitude: "N/A", azimuth: "N/A", eclipticLatitude: "N/A", declination: "N/A" },
    { id: "nodo-sur", name: "Nodo Sur (M)", position: "Virgo (152° 50' 42\")", velocity: "-0.05°/día", altitude: "N/A", azimuth: "N/A", eclipticLatitude: "N/A", declination: "N/A" }
  ],

  stars: [
    { id: "algol", name: "Algol", position: "Tauro (56° 32' 03\")", eclipticLatitude: "22° 25' 49\"", magnitude: "2.12" },
    { id: "regulus", name: "Regulus", position: "Virgo (150° 11' 47\")", eclipticLatitude: "0° 27' 57\"", magnitude: "1.40" },
    { id: "antares", name: "Antares", position: "Sagitario (250° 08' 22\")", eclipticLatitude: "-4° 34' 25\"", magnitude: "0.91" },
    { id: "spica", name: "Spica", position: "Libra (204° 12' 54\")", eclipticLatitude: "-2° 03' 24\"", magnitude: "0.97" },
    { id: "fomalhaut", name: "Fomalhaut", position: "Piscis (334° 14' 19\")", eclipticLatitude: "-21° 08' 14\"", magnitude: "1.16" },
    { id: "sirius", name: "Sirius", position: "Cáncer (104° 26' 30\")", eclipticLatitude: "-39° 36' 43\"", magnitude: "-1.46" },
    { id: "canopus", name: "Canopus", position: "Cáncer (105° 18' 21\")", eclipticLatitude: "-75° 49' 17\"", magnitude: "-0.74" },
    { id: "rigel-kentaurus", name: "Rigel Kentaurus", position: "Escorpio (239° 49' 14\")", eclipticLatitude: "-42° 36' 28\"", magnitude: "-0.10" },
    { id: "arcturus", name: "Arcturus", position: "Libra (204° 36' 28\")", eclipticLatitude: "30° 43' 14\"", magnitude: "-0.05" }
  ],

  lots: [
    { id: "fortuna", name: "Fortuna (Tychê)", position: "203° 54' 25\"", sign: "Libra", house: 8 },
    { id: "espiritu", name: "Espíritu (Daimon)", position: "119° 10' 28\"", sign: "Cáncer", house: 5 },
    { id: "eros", name: "Eros", position: "326° 04' 18\"", sign: "Acuario", house: 12 },
    { id: "necesidad", name: "Necesidad (Anankê)", position: "253° 23' 45\"", sign: "Sagitario", house: 10 },
    { id: "coraje", name: "Coraje (Thrasos)", position: "195° 43' 00\"", sign: "Libra", house: 8 },
    { id: "victoria", name: "Victoria (Nikê)", position: "341° 35' 10\"", sign: "Piscis", house: 1 },
    { id: "nemesis", name: "Némesis", position: "151° 35' 36\"", sign: "Virgo", house: 6 }
  ]
};

function updateAstronomicalPositions(newData) {
  if (!newData || typeof newData !== "object") return false;

  if (newData.meta) Object.assign(ASTRONOMICAL_POSITIONS.meta, newData.meta);
  if (Array.isArray(newData.bodies)) ASTRONOMICAL_POSITIONS.bodies = newData.bodies;
  if (Array.isArray(newData.stars)) ASTRONOMICAL_POSITIONS.stars = newData.stars;
  if (Array.isArray(newData.lots)) ASTRONOMICAL_POSITIONS.lots = newData.lots;

  if (typeof renderAstronomicalTables === "function") {
    renderAstronomicalTables();
  }

  return true;
}