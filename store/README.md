# Store-Submission-Materialien für Voltify

Alle Texte, Antworten und Vorbereitungs-Dokumente für die Veröffentlichung
in **Google Play Store** und **Apple App Store**.

## Dateien

- [`google-play.md`](google-play.md) – Titel, Kurz-/Lange-Beschreibung,
  Kategorie, Inhaltsbewertung, Versionierung, Asset-Liste
- [`apple-app-store.md`](apple-app-store.md) – Name, Untertitel, Promo-Text,
  Beschreibung, Keywords, Bundle-ID-Vorschlag, Kategorie, Asset-Liste
- [`data-safety-google.md`](data-safety-google.md) – Antworten zum
  Daten-Sicherheits-Fragebogen in der Play Console
- [`app-privacy-apple.md`](app-privacy-apple.md) – Antworten zum
  App-Privacy-Label in App Store Connect, inkl. PrivacyInfo.xcprivacy

## Vor dem Submit – Checkliste

### Beide Stores

- [ ] Markenname rechtlich abgeklärt (siehe Voltify-Risiko bezüglich
      Voltify d.o.o.)
- [ ] PU003-Fragen durch eigene Formulierungen ersetzt (BG-ETEM-Lizenz)
- [ ] Impressum mit echter Anschrift + erreichbarer E-Mail
- [ ] Datenschutzerklärung auf öffentlich erreichbarer URL
- [ ] Keine Beta-Hinweise, keine TODO-Texte im Listing
- [ ] Mindestens 3 echte Screenshots pro Geräteklasse
- [ ] Verifikation Crash-frei auf 3 realen Geräten

### Google Play

- [ ] Developer Account: 25 USD bezahlt, Identitätsprüfung bestanden
- [ ] D-U-N-S-Nummer (bei Unternehmens-Account)
- [ ] Closed Testing ≥ 14 Tage mit mind. 12 Testern
- [ ] Feature-Graphic 1024×500 erstellt
- [ ] Daten-Sicherheit ausgefüllt (siehe `data-safety-google.md`)
- [ ] Altersfreigabe IARC ausgefüllt (USK 0)

### Apple App Store

- [ ] Developer Account: 99 USD/Jahr aktiv
- [ ] Bundle-ID registriert (`de.nilskuhlow.voltify` o. ä.)
- [ ] PrivacyInfo.xcprivacy im Bundle
- [ ] TestFlight Build erfolgreich an internem Tester
- [ ] App-Privacy Sektion ausgefüllt (siehe `app-privacy-apple.md`)
- [ ] Altersfreigabe 4+ Fragebogen
- [ ] Native Wrapper läuft (Capacitor, siehe Phase 4)

## Beim ersten Upload erfolgsentscheidend

1. **Apple lehnt reine Web-Wrapper häufig ab.** Vor Submit Capacitor-
   Wrapper mit nativen Features zeigen (z. B. Local Notifications,
   echter Splash, eigenes App-Icon-Bundling, Offline-Detection-Banner).
2. **Google Play prüft seit 2023 strenger.** Closed Testing mit 12+
   Testern und 14+ Tagen Testlaufzeit ist Pflicht für persönliche
   Developer Accounts.
3. **Schritt-für-Schritt-Submit:** Nicht alles in einem Rutsch
   einreichen. Erst TestFlight / Closed Testing, dann Review.
