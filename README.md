# Voltify ⚡

> Karteikarten-Lern-App für angehende Elektrotechnikerinnen und Elektrotechniker
> – vom 1. Lehrjahr bis zur Meisterprüfung.

**Live:** <https://nilskuhlow.github.io/voltify/>
**Lizenz:** MIT (Code) · CC BY-SA 4.0 (Inhalte) – siehe [`LICENSE`](LICENSE)
**Stack:** Vanilla HTML/CSS/JS · Service Worker · Web App Manifest · kein Build

---

## Was Voltify kann

- **Karteikarten-Lernsystem nach Leitner** mit 5 Boxen. Schwache Karten
  kommen sofort wieder, beherrschte Karten erst nach 14 Tagen.
- **278 Fragen** in 3 Lernpfaden:
  - *Lehrling – Grundlagen* (Ohm, Spannung, Schaltungen, Drehstrom, Halbleiter)
  - *Lehrling – VDE & Installation* (5 Sicherheitsregeln, RCD, Schutzklassen,
    Wallbox, PV, KNX, Brandschutz, Gefahrstoffe, Wegesicherheit)
  - *Meister* (Recht, Betriebsführung, AdA-Pädagogik, Wirk-/Blind-/Scheinleistung)
- **198 von 278 Karten mit expliziter Quellenangabe** (DIN VDE, DGUV V1/V3,
  ASR, GefStoffV, TRGS, TRBS, AEVO, HwO, BGB, StVO …).
- **Multi-Choice** wo Prüfungen Multi-Choice fragen.
- **Prüfungssimulator** – Zeitlimit, kein Feedback während des Tests,
  Notenermittlung 1–6 + Detail-Auflistung am Ende.
- **Browse-Screen** mit Volltext-Suche und Filter-Chips (Pfad / Status /
  „nur markierte ★" / „Box 1–2").
- **Lesezeichen** pro Karte (Stern-Toggle im Quiz).
- **Onboarding-Wizard** beim Erststart (Lehrjahr + Prüfungsdatum).
- **Exam-Countdown** auf der Startseite („Noch 14 Tage bis zur Prüfung").
- **Aktivitäts-Heatmap** der letzten 30 Tage (Statistik-Screen).
- **Backup / Restore** als JSON-Datei (Einstellungen).
- **Tastatur-Shortcuts** für die wichtigsten Aktionen.
- **App-Update-Banner** wenn eine neue Version verfügbar ist.
- **Offline-fähig** (Service Worker), installierbar als PWA.

## Datenschutz

- Voltify speichert deinen Lernfortschritt **ausschließlich lokal** im Browser
  (`localStorage`, Key `voltify-state-v1`).
- **Kein Account.** **Kein Tracking.** **Keine Werbung.** **Keine Drittanbieter.**
- Die App selbst wird über GitHub Pages ausgeliefert. Beim Aufruf wird
  zwangsläufig die IP-Adresse durch GitHub verarbeitet (Hosting).
- Datenschutzerklärung in der App unter *Einstellungen → Datenschutz*.

## Auf dem Handy installieren

**Android (Chrome):**
1. <https://nilskuhlow.github.io/voltify/> öffnen
2. Menü ⋮ → „App installieren" / „Zum Startbildschirm hinzufügen"

**iOS (Safari):**
1. <https://nilskuhlow.github.io/voltify/> öffnen
2. Teilen → „Zum Home-Bildschirm"

Beim ersten Öffnen lädt der Service Worker die App in den Cache.
Ab dann läuft Voltify auch ohne Netz.

## Tastatur-Shortcuts

| Taste | Aktion |
|---|---|
| `1`–`9` / `A`–`H` | Antwortoption wählen |
| `Enter` / `Space` | Weiter (bzw. Multi-Auswahl prüfen) |
| `B` | Lesezeichen-Stern toggeln |
| `Esc` | Zurück (außerhalb Quiz/Wizard) |

## App-Icon-Shortcuts (Android Long-Press / Chrome)

- **Zufallsmix** → `?action=mix`
- **Prüfungssimulator** → `?action=exam`
- **Suche** → `?action=browse`

## Lokal entwickeln

```bash
# Service Worker braucht http://, kein file://
python -m http.server 8000
# oder
npx serve .
```

`http://localhost:8000` aufrufen.

### Pre-Push-Backup-Hook installieren (einmalig)

```bash
scripts/install-hooks.sh
```

Damit erstellt jeder `git push` einen Snapshot des Voltify-Ordners in
`../Voltify_Backups/<timestamp>_pre-push/`.

## Datenmodell

`data.js` ist die Single Source of Truth. Frage-Schema:

```js
{
  id: 'lg42',                  // eindeutig
  path: 'lehrling-grund',      // 'lehrling-grund' | 'lehrling-vde' | 'meister'
  category: 'Berechnung',
  question: '…',
  options: ['A', 'B', 'C', 'D'],
  correct: 1,                  // Index – oder Array bei Multi: [0, 2]
  explain: 'Kurze Erklärung.',
  source: 'DIN VDE 0100-410'   // optional
}
```

Neue Frage hinzufügen → in `data.js` einfügen, `sw.js` Cache-Version
hochzählen (nur falls App-Shell geändert, für Inhalte greift
*stale-while-revalidate*), committen, GitHub Pages deployt automatisch.

## Native Wrapper (optional)

- **Android (TWA):** `android/README.md`
- **iOS (Capacitor):** `ios/README.md`
- **Asset-Links:** `.well-known/README.md`
- **Store-Materialien:** `store/README.md`

## Roadmap (lose)

- [ ] Mehr Quellenangaben für die restlichen 80 Karten
- [ ] Lückentext- und Berechnungs-Fragetypen
- [ ] SVG-Diagramme in Erklärungen (Schaltungen, Schutzbereiche)
- [ ] i18n (Deutsch/Englisch)
- [ ] Optional: Cloud-Sync (Account, Backend)
- [ ] Push-Notifications (Lern-Erinnerung) im nativen Wrapper

## Mitwirken

Siehe [`CONTRIBUTING.md`](CONTRIBUTING.md). Inhaltliche Korrekturen,
neue Fragen mit Norm-Zitat und Übersetzungen sind sehr willkommen.

## Changelog

Siehe [`CHANGELOG.md`](CHANGELOG.md).

## Lizenz

- Code: **MIT**
- Lerninhalte (`data.js`): **CC BY-SA 4.0** – Verweis, ShareAlike

Details: [`LICENSE`](LICENSE).
