# Voltify ⚡

Persönliche Lern-PWA für Elektroniker-Ausbildung und Meisterprüfung.
Spaced-Repetition-System (Leitner) mit drei Lernpfaden. Single-User,
kein Backend.

## Funktionen

- **Lehrling – Grundlagen** (50 Karten): Ohm, Spannung, Schaltungen,
  Drehstrom, Halbleiter, Magnetismus, Maschinen.
- **Lehrling – VDE & Installation** (53 Karten): 5 Sicherheitsregeln,
  Netzformen TN/TT/IT, Schutzklassen, RCD, VDE 0100/0105,
  LS-Charakteristiken, Wallbox/PV, KNX, Funktionserhalt.
- **Meister** (45 Karten): HwO/BBiG, Werkvertrag/VOB, AGG, Steuern,
  Kostenrechnung (BAB, Deckungsbeitrag), AdA-Pädagogik, Selektivität,
  Wirk-/Blind-/Scheinleistung.

Falsche Karten landen in Box 1 und kommen sofort wieder. Richtige
Karten wandern stufenweise in höhere Boxen (Wiedervorlage nach 1, 3,
7, 14 Tagen). Box 5 = beherrscht.

## Auf dem Handy installieren

1. Im Chrome auf Android `https://nilskuhlow.github.io/voltify/` öffnen.
2. Menü → „Zum Startbildschirm hinzufügen" / „App installieren".
3. Läuft offline, eigenes Vollbild-Icon wie eine native App.

Daten liegen lokal im Browser (`localStorage`) — kein Account, keine
Synchronisation. Cache löschen = Lernfortschritt weg.

## Lokal entwickeln

```bash
# Service Worker braucht http://, kein file://
python -m http.server 8000
# oder
npx serve .
```

Dann `http://localhost:8000` aufrufen.

## Datenmodell

- `data.js` — `PATHS` (Lernpfade) und `QUESTIONS` (Fragen mit
  `id`, `path`, `category`, `question`, `options`, `correct`,
  `explain`).
- `app.js` — Leitner-Logik, Session-Queue, Statistik, Theme,
  Settings. Persistenz in `localStorage` unter `voltify-state-v1`.

Neue Frage hinzufügen → einfach in `data.js` ergänzen, committen,
GitHub Pages deployt automatisch.

Bei Änderungen an `sw.js` die `CACHE`-Konstante hochzählen, sonst
greifen Updates erst nach Cache-Invalidation.

## Stack

Vanilla HTML/CSS/JS, Service Worker, Web App Manifest. Kein
Build-Step, keine Abhängigkeiten.
