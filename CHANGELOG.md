# Changelog

Format orientiert sich an [Keep a Changelog](https://keepachangelog.com/de/1.1.0/),
Versionierung an [SemVer](https://semver.org/lang/de/).

## [Unreleased]

### Pre-Launch-Sprint (Mai 2026)

#### Geändert
- **Typografische Identität**: Crimson-Pro-Serife (lokal aus Fontsource,
  SIL OFL) für Hero, Page-Title, Results-Title, Exam-Grade, alle
  Section-Headings. Body bleibt System-Sans.
- **Anti-KI-Design**: Alle Glow-Filter, Pulse-Animationen, Glassmorphism-
  Blur und Gradient-Brand-Text entfernt. Pfad-Icons sind jetzt
  typografische Marker G/V/M statt Emoji.
- **Wording**: 143 stilistische Gedankenstriche „–" durch „, " ersetzt,
  Result-Subtitle und Exam-Countdown sachlich, Pseudo-Vertraulichkeit
  raus.
- **Design-Tokens**: Spacing-Scale `--sp-1..--sp-12`, Type-Scale
  `--fs-12..--fs-40`, Animation-Tokens `--t-fast/--t-base`,
  `--accent-fg` separat für Text auf Surface.
- **WCAG-Kontrast**: `--text-muted` heller (3.3:1 → 5.0:1 auf bg-card),
  Light-Theme-Werte ebenfalls konservativer.
- **sw.js**: `data.js` jetzt im Pre-Cache, Fonts gecacht,
  `CACHE = voltify-v8`.

#### Hinzugefügt
- **Datenvalidierung beim Boot**: doppelte Frage-IDs werden entfernt,
  ungültige `correct`-Indizes herausgefiltert, verwaiste
  `state.cards`-Einträge (z. B. alte `pu003-*`) aufgeräumt.
- **localStorage-Quota-Toast** statt stiller `console.warn`.
- **Cross-Tab-Sync** via `storage`-Event – außer im aktiven Quiz.
- **A11y**: `aria-live="polite"` + `aria-atomic` auf
  `#card-feedback`, Heatmap-`aria-label` kompakt formatiert,
  First-Visit-Wizard fokussiert ersten Knopf jedes Steps automatisch,
  Multi-Choice-Feedback zeigt Detail („3 von 4 richtig markiert").
- `exam-countdown.past` als dezenter, gemuteter Hinweis statt
  „urgent".
- **LICENSE**: SIL Open Font License 1.1 für Crimson Pro ergänzt.

### Hinzugefügt
- Tastatur-Shortcuts: `1`–`9` / `A`–`H` für Antworten, `Enter`/`Space`
  für Weiter bzw. Multi-Check, `B` für Lesezeichen, `Esc` für Zurück.
- App-Update-Banner: zeigt automatisch „Neue Version verfügbar – Jetzt laden",
  wenn der Service Worker eine neuere Version installiert hat.
- 30-Tage-Aktivitäts-Heatmap auf der Statistik-Seite (GitHub-Style).
- PWA-Manifest-Shortcuts (App-Icon-Long-Press): Zufallsmix, Prüfungssimulator,
  Suche. URL-Parameter `?action=mix|exam|browse` wird im Boot ausgewertet.
- 68 weitere Karten mit Quellenangabe (lg01–22, lv01–24, m01–22).
  Jetzt **198 von 278 Karten** mit explizitem `source`-Feld.
- Feature-Graphic für Google Play (`store/feature-graphic.svg`, 1024×500),
  Export-Tool unterstützt jetzt rechteckige Formate.
- LICENSE (MIT für Code, CC BY-SA 4.0 für Lerninhalte), CHANGELOG, CONTRIBUTING.
- Open-Graph- und Twitter-Card-Meta-Tags, Canonical-URL.

### Geändert
- Service-Worker-Strategie: `data.js` jetzt **stale-while-revalidate** –
  Inhalts-Updates greifen ohne CACHE-Bump.
- Service-Worker-Cache-Version: `voltify-v7`.

## [1.0.0] – 2026-05-14

### Geändert
- Alle 100 PU003-Fragen (BG-ETEM-Material, urheberrechtlich geschützt) durch
  100 eigene Formulierungen mit Quellenangaben (`as001`–`as100`) ersetzt.
  Lizenzkonform für kommerzielle Veröffentlichung.

## [0.4.0] – 2026-05-13 (Native Wrapper)

### Hinzugefügt
- Android-TWA via Bubblewrap (`android/twa-manifest.json`, README).
- iOS-Capacitor (`ios/capacitor.config.json`, `PrivacyInfo.xcprivacy`).
- `.well-known/assetlinks.json` und `apple-app-site-association`.

## [0.3.0] – 2026-05-13 (Store-Vorbereitung)

### Hinzugefügt
- 13 PNG-Icon-Größen, automatisch aus dem SVG-Master generiert.
- `store/` mit Beschreibungen für Apple App Store und Google Play,
  Privacy-Antworten, Screenshot-Anleitung, Seed-Skript für Demo-State.

## [0.2.0] – 2026-05-13 (Inhalt & Reife)

### Hinzugefügt
- Erweiterter Onboarding-Wizard (Lehrjahr, Prüfungsdatum).
- Lesezeichen-Funktion (Stern in der Quiz-Card).
- Quellenangabe-Feld pro Frage (`source`).
- Exam-Countdown auf der Startseite.
- Browse-/Suche-Screen mit Volltext + Filter-Chips.
- Prüfungssimulator-Modus (Setup, Timer, Schulnote).
- A11y-Verbesserungen: Focus-Visible, Escape-Key.
- Tablet- und Landscape-Layouts.
- 30 weitere eigene Fragen mit Quellenangabe.

## [0.1.0] – 2026-05-13 (Rechtsgerüst)

### Hinzugefügt
- Impressum-Screen.
- Datenschutzerklärung (DSGVO).
- Erst-Start-Hinweis.
- localStorage-Schema-Versionierung mit Migrations-Funktion.
- Backup/Restore als JSON-Datei.
- Pre-Push-Git-Hook für automatisches Snapshot-Backup.

## [0.0.1] – 2026-05-13 (Initial Release)

### Hinzugefügt
- PWA-Grundgerüst, Leitner-Lernsystem mit 5 Boxen.
- Drei Lernpfade: Lehrling Grundlagen, Lehrling VDE & Installation, Meister.
- Anfangs 68 Fragen (später auf 248 mit PU003, dann 278 mit eigenen
  Erweiterungen ausgebaut).
- GitHub Pages Deployment: `https://nilskuhlow.github.io/voltify/`.
