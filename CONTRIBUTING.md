# Mitwirken bei Voltify

Voltify ist ein persönliches Lern-Tool, das ich (Nils) offen halte, damit
andere davon lernen oder Anpassungen für ihre Berufsschulklasse machen können.
Vorschläge und Pull Requests sind willkommen – mit ein paar Spielregeln.

## Was am wertvollsten ist

1. **Inhaltliche Korrekturen** – falsche Antworten, veraltete Norm-Hinweise,
   fehlende Quellen.
2. **Neue Fragen mit Quellenangabe** (DIN VDE, DGUV-Vorschriften/Informationen,
   AEVO, HwO, BGB, StVO, …). Wenn du eine Frage einreichst, gib bitte die
   Norm-Referenz mit an.
3. **A11y-Verbesserungen**, Übersetzungen (Englisch wäre der nächste Schritt).
4. **Bugfixes** im Engine-Teil (`app.js`, `sw.js`).

## Spielregeln

- **Keine wörtlich übernommenen Fragen aus geschützten Werken** (z. B. BG-ETEM
  PU003, Christiani-Bücher, Innungs-Prüfungssätze). Eigene Formulierungen
  aus den zugrundeliegenden Vorschriften.
- **Lizenz:** Code unter MIT, Lerninhalte unter CC BY-SA 4.0 – siehe LICENSE.
- **Keine Werbung / Tracking** ohne ausdrückliche Diskussion und ohne
  Anpassung der Datenschutzerklärung.
- **Schemata erweitern, nicht brechen.** Wenn das State-Schema sich ändert,
  zugehörige Migration in `migrate()` schreiben.
- **Service-Worker-Cache:** Bei Änderungen an HTML/CSS/JS oder Asset-Liste
  die `CACHE`-Konstante in `sw.js` hochzählen.

## Lokale Entwicklung

```bash
# In der Repo-Wurzel
python -m http.server 8000
# oder
npx serve .
```

Anschließend `http://localhost:8000` öffnen.

## Datenmodell

`data.js` ist die Single Source of Truth für die Inhalte. Frage-Schema:

```js
{
  id: 'lg42',                 // eindeutig, Pfad-Präfix (lg/lv/m/as) + Nummer
  path: 'lehrling-grund',     // 'lehrling-grund' | 'lehrling-vde' | 'meister'
  category: 'Berechnung',     // wird als Badge angezeigt
  question: 'Wie …',
  options: ['…', '…', '…'],
  correct: 1,                 // Index – oder Array bei Multi-Choice: [0, 2]
  explain: 'Kurze Erklärung.',
  source: 'DIN VDE 0100-410'  // optional, wird im Feedback angezeigt
}
```

## Backup-Regel

Vor jeder Code- oder Inhaltsänderung läuft lokal ein Snapshot-Backup
(siehe `scripts/backup.sh` + Pre-Push-Hook in `scripts/install-hooks.sh`).
Wer am Repo arbeitet, sollte den Hook einmal installieren:

```bash
scripts/install-hooks.sh
```

## Issues / PRs

- Fehler in einer Frage: bitte mit Norm-Zitat begründen.
- Neue Funktion: vorab kurz im Issue diskutieren, ob es in den Scope passt.
- Größere Refactors: bitte erst Diskussion, sonst möglicherweise zwecklos.

## Kontakt

Im Repo via Issues oder PRs. E-Mail-Kontakt siehe Impressum-Seite der App.
