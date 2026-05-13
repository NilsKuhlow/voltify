# iOS-Build via Capacitor

Capacitor packt die PWA als native iOS-App (`WKWebView` mit nativem Shell).
Apple lehnt reine Web-Wrapper häufiger ab, daher zeigen wir bewusst
native Features: Splash-Screen, StatusBar-Integration, App-Icon-Bundling,
Privacy-Manifest.

## Voraussetzungen

- **Mac** mit macOS (Apple verlangt Xcode-Build → kein Windows-Pfad)
- **Xcode 15+** (App Store / Mac App Store)
- **Apple Developer Account** ($99/Jahr)
- **Node.js 18+**
- **CocoaPods**: `sudo gem install cocoapods`

Auf Windows ist Capacitor-Setup begrenzt (nur Android). Für iOS-Build
brauchst du einen Mac oder einen Cloud-Mac-Service (MacInCloud,
GitHub-Actions mit macOS-Runner).

## Erststart

Im Voltify-Repo-Root:

```bash
# Capacitor installieren
npm init -y
npm install @capacitor/core @capacitor/cli @capacitor/ios
npm install @capacitor/splash-screen @capacitor/status-bar

# Initialisierung (verwendet capacitor.config.json aus diesem Ordner)
cp ios/capacitor.config.json ./capacitor.config.json
npx cap init Voltify de.nilskuhlow.voltify --web-dir=.

# iOS-Plattform hinzufügen
npx cap add ios

# Privacy-Manifest ins iOS-Bundle kopieren
cp ios/PrivacyInfo.xcprivacy ios/App/App/
```

## App-Icons im Xcode-Projekt

Capacitor erzeugt einen `AppIcon`-Asset-Catalog in
`ios/App/App/Assets.xcassets/AppIcon.appiconset/`.

Die für iOS nötigen PNG-Größen sind bereits in `icons/` vorhanden:

| Slot | Datei | Größe |
|---|---|---|
| iPhone 60pt @2x | apple-touch-120.png | 120 |
| iPhone 60pt @3x | apple-touch-180.png | 180 |
| iPad 76pt @2x | apple-touch-152.png | 152 |
| iPad 83.5pt @2x | apple-touch-167.png | 167 |
| iOS-Marketing | icon-1024.png | 1024 |

Manuell die Bilder ins AppIcon-Slot ziehen, oder per
`./scripts/install-ios-icons.sh` (siehe `scripts/`).

## Splash Screen

Capacitor-Splash-Plugin verwendet `splash.png` im Asset-Catalog.
Vorschlag: `icon-512.png` mit dunklem Hintergrund (#0a0e27) auf
1242×2436 zentrieren. Tool: Photopea oder Figma.

## Build

```bash
# Webdir nach iOS-Bundle syncen
npx cap sync ios

# Xcode öffnen
npx cap open ios

# In Xcode:
# 1. Team / Signing Capabilities einstellen
# 2. Bundle Identifier prüfen (de.nilskuhlow.voltify)
# 3. Run (⌘R) für Simulator
# 4. Archive für TestFlight/AppStore
```

## TestFlight

1. Xcode → Product → Archive
2. Organizer → "Distribute App" → "App Store Connect"
3. Upload, Apple-Verarbeitung ~10 min
4. Im App Store Connect → TestFlight → Build verteilen
5. Beta-Tester per E-Mail einladen

## Häufige Apple-Ablehnungsgründe

- **Guideline 4.2 (Minimum Functionality):** Reine Web-Wrapper.
  → Wir haben Splash, StatusBar-Integration, Offline-Fähigkeit per
  Service Worker, native Icons. Sollte reichen.
- **Guideline 5.1.1 (Privacy):** Datenschutz-Sektion nicht ausgefüllt.
  → Siehe `store/app-privacy-apple.md`.
- **PrivacyInfo.xcprivacy fehlt** → Datei in
  `ios/App/App/PrivacyInfo.xcprivacy` ablegen.

## App Store Connect Submission

- Bundle-ID `de.nilskuhlow.voltify` muss im Developer-Portal registriert sein
- Version `1.0.0`, Build `1`
- App-Privacy-Sektion ausgefüllt (siehe `store/app-privacy-apple.md`)
- Datenschutz-URL: `https://nilskuhlow.github.io/voltify/#datenschutz`
- Support-URL: `https://nilskuhlow.github.io/voltify/`
- Beschreibung + Keywords aus `store/apple-app-store.md`
- Mind. 3 Screenshots iPhone 6.7" + iPhone 5.5" (siehe `store/screenshots.md`)

## Push-Notifications (optional, für später)

```bash
npm install @capacitor/push-notifications
npx cap sync ios
```

In Xcode: Capabilities → Push Notifications aktivieren. APNs-Key vom
Developer-Portal erforderlich. **NICHT** ohne FCM-Backend einbauen.

## In-App-Käufe (optional, für später)

```bash
npm install @capacitor-community/in-app-purchases
```

Erfordert App-Store-Connect-Konfiguration der IAP-Produkte und
Mehrwertsteuerstatus geklärt.
