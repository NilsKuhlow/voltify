# `.well-known/` – App-Web-Vertrauenslinks

Diese Dateien werden unter folgenden URLs erwartet:

- `https://nilskuhlow.github.io/voltify/.well-known/assetlinks.json`
- `https://nilskuhlow.github.io/voltify/.well-known/apple-app-site-association`

GitHub Pages liefert sie automatisch aus, sobald sie im Repo liegen.

## Vor dem App-Build aktualisieren

### Android – `assetlinks.json`

Den Wert `REPLACE_ME_WITH_YOUR_KEYSTORE_SHA256_FINGERPRINT` durch den
echten Fingerprint deines Signing-Keys ersetzen.

Fingerprint auslesen:

```bash
# Bei Bubblewrap-Init wird ein Keystore erzeugt:
bubblewrap fingerprint

# Alternativ aus einem fertigen Keystore:
keytool -list -v -keystore android.keystore -alias android
```

Du brauchst dann nur die SHA-256-Zeile, ohne Doppelpunkte oder mit
Doppelpunkten (beides erlaubt im JSON).

### iOS – `apple-app-site-association`

`TEAMIDXXXX` durch deine **Apple Team-ID** ersetzen. Findest du im
Developer-Portal (`developer.apple.com/account`) im Reiter „Membership".
Sieht aus wie `ABC123DEFG` (10 Zeichen).

Außerdem prüfen, dass die Datei **ohne Dateiendung** und mit MIME-Type
`application/json` ausgeliefert wird. GitHub Pages macht das automatisch
auf Basis des Inhalts.

## Verifikation

```bash
# Android:
curl -s https://nilskuhlow.github.io/voltify/.well-known/assetlinks.json | jq .

# iOS:
curl -sI https://nilskuhlow.github.io/voltify/.well-known/apple-app-site-association
# Achten auf Content-Type: application/json
```

## Achtung

- Diese Dateien sind **öffentlich** und sollten **keine geheimen** Daten
  enthalten. Die Fingerprints und Team-IDs sind OK.
- Bei einem neuen Signing-Key (z. B. Play App Signing) müssen die
  Fingerprints aktualisiert werden, sonst öffnet die App im Chrome-Tab
  statt in der TWA.
