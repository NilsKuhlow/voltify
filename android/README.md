# Android-Build via Bubblewrap (TWA)

**TWA = Trusted Web Activity.** Eine TWA ist eine native Android-App,
die im Hintergrund eine Custom-Chrome-Tab auf die PWA öffnet, dabei
aber die Browser-UI komplett unsichtbar macht. Vorteil: Aus der
existierenden PWA wird ohne Re-Implementierung eine echte
Play-Store-App.

## Voraussetzungen (einmalig)

```bash
# Node.js 16+ (https://nodejs.org)
node --version

# Bubblewrap CLI installieren
npm install -g @bubblewrap/cli
bubblewrap --version

# Java JDK 17 (für AAB-Signierung)
java --version

# Android SDK (über Android Studio oder cmdline-tools)
# https://developer.android.com/studio
```

## Erststart: Projekt initialisieren

Im Voltify-Repo-Root:

```bash
cd android
bubblewrap init --manifest=https://nilskuhlow.github.io/voltify/manifest.json
```

Bubblewrap fragt nach den Werten, die Bestandteile von `twa-manifest.json`
sind (siehe Datei in diesem Ordner). Akzeptiere die Defaults und überschreibe:

- **Domain:** `nilskuhlow.github.io`
- **App name (host):** `Voltify`
- **Launcher name:** `Voltify` (max. 12 Zeichen sonst „Voltify")
- **Application ID:** `de.nilskuhlow.voltify`
- **Starting URL:** `/voltify/`
- **Display mode:** standalone
- **Orientation:** portrait
- **Status bar color:** `#0a0e27`
- **Splash screen color:** `#0a0e27`
- **Icon URL:** `https://nilskuhlow.github.io/voltify/icons/icon-512.png`
- **Maskable icon URL:** dito

Die `twa-manifest.json` in diesem Ordner kann als **Referenz** dienen
oder direkt kopiert werden: `cp twa-manifest.json android-build/`.

## Digital Asset Links (Pflicht!)

Damit Chrome die TWA ohne Browser-Chrome anzeigt, muss eine
Vertrauensbeziehung zwischen App und Domain bewiesen sein.

Bubblewrap generiert beim Init einen SHA-256-Fingerprint deines
Signing-Keys. Diesen Fingerprint musst du im `.well-known/`-Pfad der
Webseite hinterlegen.

Die Datei `assetlinks.json` muss unter folgender URL erreichbar sein:

```
https://nilskuhlow.github.io/voltify/.well-known/assetlinks.json
```

Inhalt:

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "de.nilskuhlow.voltify",
    "sha256_cert_fingerprints": [
      "DEIN:FINGERPRINT:HIER:..."
    ]
  }
}]
```

→ Im Voltify-Root `.well-known/` Ordner anlegen, `assetlinks.json`
einchecken, dann `git push` (Pages deployt automatisch).

## Build

```bash
cd android-build  # der von Bubblewrap erzeugte Ordner
bubblewrap build
```

Resultate:
- `app-release-signed.apk` – zum Testen
- `app-release-bundle.aab` – für Upload in Google Play

## Beim Update der PWA

Pages-Push reicht. Die TWA lädt beim Start die aktuellste Version der
Webseite über das CDN. Update der TWA-Hülle (Bundle-Version) nur
nötig, wenn du Manifest-Werte oder Icon änderst.

## Testen mit einem echten Gerät

```bash
adb install app-release-signed.apk
```

Oder per USB-Debugging im Android Studio öffnen.

## Häufige Probleme

- **"App opens in browser":** assetlinks.json fehlt oder Fingerprint stimmt
  nicht. Mit `bubblewrap fingerprint` neu auslesen.
- **"App icon ist quadratisch":** Maskable-Icon fehlt oder hat zu wenig
  Safe-Area. Eigenes maskable Icon erstellen (siehe maskable.app).
- **"Play Console: Targeting"-Fehler:** `targetSdkVersion` mind. 34
  (Stand 2024).

## Wichtig vor dem Upload

- [ ] PU003-Fragen entfernt (Lizenz BG ETEM!)
- [ ] Echte Anschrift im Impressum
- [ ] Datenschutz öffentlich verlinkt
- [ ] Closed-Testing ≥ 14 Tage mit ≥ 12 Testern (Pflicht 2024)
