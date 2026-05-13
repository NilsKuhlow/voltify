# Apple App Privacy (App Privacy Nutrition Label)

Antworten zum App-Privacy-Fragebogen in App Store Connect.
Basiert auf der **aktuellen Architektur**: kein Backend, kein Tracking,
nur lokales `localStorage`. Bei Backend/Sync/Werbung **zwingend**
überarbeiten.

---

## Übersicht – Nutrition Label

Voraussichtliche Anzeige: **„Es werden keine Daten erfasst."**

## Kategorien des Apple-Fragebogens

### 1. Werden Daten von dieser App erfasst?

> Antwort: **Nein**

### 2. Auch wenn keine direkte Erfassung – „Werden Daten an Dritte weitergegeben?"

> Antwort: **Nein**

### 3. Tracking

> „Verfolgt diese App Aktivitäten von Nutzern über Apps oder
> Websites anderer Unternehmen?"
> Antwort: **Nein**

### 4. Daten, die für Werbung verwendet werden

> Antwort: **Keine**

### 5. Daten, die mit dir verknüpft sind

> Antwort: **Keine**

### 6. Daten, die nicht mit dir verknüpft sind

> Antwort: **Keine**

## Hinweise

- **localStorage zählt bei Apple nicht als „Datenerfassung"**, solange
  die Daten das Gerät nicht verlassen. Die Antwort „Nein, es werden
  keine Daten erfasst" ist korrekt.
- **HTTPS-Verbindungen zum GitHub-Pages-CDN** beim ersten Laden zählen
  ebenfalls nicht – diese Daten werden technisch zur Auslieferung
  benötigt und sind nicht Teil von "Nutzerdaten".
- Sobald ein **Crash-Reporting-SDK** (z. B. Sentry) eingebaut wird:
  - „Diagnosedaten / Absturzdaten" → **Ja**, „Nicht mit Nutzer verknüpft"
  - Zweck: „Analyse"
- Sobald **Werbung oder Tracking-SDK** eingebaut wird:
  - mehrere Kategorien → **Ja**
  - Zweck: „Werbung", ggf. „Drittanbieter-Werbung"
  - **AppTrackingTransparency-Dialog** muss eingebaut werden (`ATT`)

## Privacy-Manifest (Pflicht seit Mai 2024)

Apple verlangt für native Apps ein `PrivacyInfo.xcprivacy`-File im
Bundle. Im Capacitor-Wrapper (Phase 4) automatisch erzeugen lassen
oder manuell mit folgenden Inhalten:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>NSPrivacyTracking</key>
  <false/>
  <key>NSPrivacyTrackingDomains</key>
  <array/>
  <key>NSPrivacyCollectedDataTypes</key>
  <array/>
  <key>NSPrivacyAccessedAPITypes</key>
  <array>
    <dict>
      <key>NSPrivacyAccessedAPIType</key>
      <string>NSPrivacyAccessedAPICategoryUserDefaults</string>
      <key>NSPrivacyAccessedAPITypeReasons</key>
      <array>
        <string>CA92.1</string>
      </array>
    </dict>
  </array>
</dict>
</plist>
```

`CA92.1` = Zugriff auf UserDefaults für „Speicherung von Lerneinstellungen
und Lernfortschritt innerhalb der App" – passt zu unserem
localStorage-Bridging.

## Privacy Policy URL (Pflichtfeld in App Store Connect)

`https://nilskuhlow.github.io/voltify/#datenschutz`

Alternativ separate `privacy.html`-Seite anlegen, sobald die App
in den Store geht.
