# Apple App Store Listing – Voltify

Zum Einreichen via App Store Connect (`appstoreconnect.apple.com`).
Apple ist strikt – Texte unter den Limits halten, keine Marketing-Floskeln
("besteApp", "Nr.1"), Screenshots müssen echte App-Funktionen zeigen.

---

## Name (max. 30 Zeichen)

```
Voltify
```
7 Zeichen. (Falls **Voltify** als Markenname tatsächlich behalten wird –
ansonsten ersetzen. Stand: Konflikt mit „Voltify d.o.o." aus Kroatien bekannt.)

## Untertitel (max. 30 Zeichen)

```
Lernen für Elektriker
```
21 Zeichen.

## Promo-Text (max. 170 Zeichen)

```
Karteikarten-Lernsystem mit Spaced Repetition für Elektriker-Lehrlinge und Meisterschüler. Über 270 Fragen, Prüfungssimulator, offline, kein Account.
```
164 Zeichen.

## Beschreibung (max. 4000 Zeichen)

```
Voltify ist die fokussierte Lern-App für Elektrotechnikerinnen und Elektrotechniker – vom 1. Lehrjahr bis zur Meisterprüfung.

WAS VOLTIFY KANN

• Karteikarten-Lernsystem nach dem Leitner-Prinzip mit 5 Boxen. Schwache Karten kommen häufiger, beherrschte Karten erst nach 14 Tagen wieder.
• Über 270 Fragen aus drei Lernpfaden:
  – Lehrling – Grundlagen: Ohm, Spannung, Schaltungen, Drehstrom, Halbleiter
  – Lehrling – VDE & Installation: 5 Sicherheitsregeln, RCD, Schutzklassen, Wallbox, PV, KNX
  – Meister: Recht, Betriebsführung, AdA-Pädagogik, Selektivität, Wirk-/Blind-/Scheinleistung
• Prüfungssimulator-Modus mit Zeitlimit, ohne Feedback während der Prüfung und Notenermittlung (1–6) am Ende.
• Suche über alle Fragen, Filter nach Pfad, Status und Lesezeichen.
• Lernfortschritt-Anzeige pro Lernpfad, Streak-Zähler und Detail-Statistik.
• Optional Prüfungsdatum eintragen und Countdown auf der Startseite anzeigen lassen.
• Funktioniert offline. Einmal geladen läuft Voltify ohne Internetverbindung weiter.

DATENSCHUTZ

Voltify speichert deinen Lernfortschritt ausschließlich lokal auf deinem Gerät – kein Account, kein Cloud-Sync, keine Werbung, kein Tracking.

FÜR WEN

• Auszubildende der Berufe Elektroniker/-in für Energie- und Gebäudetechnik, Automatisierungstechnik, Betriebstechnik
• Meisterschüler in Elektrotechnik
• Quereinsteiger zur Auffrischung
• Berufsschüler zur Prüfungsvorbereitung Teil 1 / Teil 2

WICHTIGER HINWEIS

Voltify ersetzt keine Fachausbildung und keine geprüften Lehrmaterialien. Bei sicherheitsrelevanten Tätigkeiten gelten ausschließlich die einschlägigen Normen, Gesetze und Vorschriften (DGUV, VDE, DIN). Inhalte werden mit Sorgfalt gepflegt, dennoch ohne Gewähr.

Feedback und Vorschläge: [deine@email.de]

Viel Erfolg bei der Prüfung!
```

## Schlüsselwörter (max. 100 Zeichen, komma-getrennt)

```
elektriker,lernen,karteikarten,prüfung,vde,meister,lehrling,leitner,quiz,spaced
```
75 Zeichen.

## Support-URL

`https://nilskuhlow.github.io/voltify/`

## Marketing-URL (optional)

`https://nilskuhlow.github.io/voltify/`

## Datenschutz-URL

`https://nilskuhlow.github.io/voltify/#datenschutz`

(Alternativ separate Seite erstellen.)

## Kategorie

- Primär: **Bildung** (Education)
- Sekundär: **Nachschlagewerke** (Reference)

## Altersfreigabe

Voraussichtlich **4+** (kein anstößiger Inhalt). Apple-Fragebogen:
- Cartoon- oder Fantasie-Gewalt: Keine
- Realistische Gewalt: Keine
- Bedrohliche oder schreckliche Themen: Keine
- Sex und Nacktheit: Keine
- Profanität oder vulgärer Humor: Keine
- Alkohol, Tabak, Drogen: Keine
- Reife/anregende Themen: Keine
- Glücksspiel/Wetten: Keine
- Horror: Keine
- Häufigkeit medizinischer/medizinrelevanter Informationen: Keine
- Inhalte zur Selbstverletzung: Keine
- Häufige Hinweise auf das Internet: Keine

## App Privacy – Antworten

Siehe `app-privacy-apple.md`.

## Build & Versionierung

- Bundle-ID (Vorschlag): `de.nilskuhlow.voltify` (anpassen!)
- Version: `1.0.0`
- Build: `1`

## TestFlight

Vor Live-Release über TestFlight beta-testen lassen. Mindestens
**1 Build erfolgreich review** sowie ein paar Tage Beta-Tests
einplanen. Apple-Review nimmt typisch 24–48 h.

## Übliche Ablehnungsgründe vermeiden

- Web-Wrapper ohne nennenswerten Mehrwert → wir bauen native Wrapper
  via Capacitor (Phase 4).
- Fehlende Datenschutzangaben → siehe `app-privacy-apple.md`.
- Defekte Links / Crash beim Start → Smoke-Test vor Submit.
- Beta-/Demo-Hinweise im Listing → entfernen.
- In-App-Kauf-Werbung im Screenshot ohne IAP eingerichtet → erstmal
  keine Käufe versprechen.

## Asset-Liste für Upload

- **App Icon** 1024×1024: `icons/icon-1024.png`
- **iPhone 6.7" Screenshots** (mind. 3): 1290×2796 – siehe `scripts/screenshots/`
- **iPhone 6.5" Screenshots**: 1242×2688
- **iPhone 5.5" Screenshots** (Pflicht für ältere Geräte): 1242×2208
- **iPad 12.9" Screenshots** (wenn iPad-Support): 2048×2732
- **iPad 13" Screenshots** (M-Modelle): 2064×2752
- **App-Preview-Videos** (optional, 15–30 s, .mov/.m4v)
