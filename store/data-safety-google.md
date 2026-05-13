# Google Play – Data Safety (Daten-Sicherheits-Sektion)

Antworten zum Daten-Sicherheits-Fragebogen in der Play Console.
Basiert auf der **aktuellen Architektur**: kein Backend, kein Tracking,
nur lokales `localStorage`. Bei Backend/Sync/Werbung muss das hier
**zwingend** überarbeitet werden.

---

## Übersicht

| Frage | Antwort |
|---|---|
| Sammelt deine App Daten? | **Ja** (technisch nur lokal – siehe unten) |
| Teilt deine App Daten mit Dritten? | **Nein** |
| Verschlüsselung im Transit? | **Ja** (HTTPS via GitHub Pages) |
| Können Nutzer ihre Daten löschen? | **Ja** (In-App: Einstellungen → Reset, oder Browser-Speicher leeren) |

## Sammlung – Gerätedaten / lokale Speicherung

> Hinweis: Google fragt nach „Datenerhebung". Lokale `localStorage`-Daten
> gelten **nicht als Datenerhebung im Sinne von Google**, da sie nie
> den Server des Anbieters erreichen. Trotzdem ist Transparenz besser.
> Wenn Google sagt: „Daten werden lokal gespeichert" reicht „Nein,
> meine App sammelt keine Nutzerdaten."

**Empfohlene Antwort:**
- „Sammelt meine App Nutzerdaten?" → **Nein, meine App sammelt oder
  teilt keine der erforderlichen Nutzerdaten.**

**Begründung in Worten (falls nachgefragt):**

> Voltify speichert ausschließlich lokal im Browser des Nutzers
> (`localStorage`). Diese Daten werden weder an den Anbieter noch an
> Dritte übertragen. Es findet kein Tracking, keine Analyse und keine
> Reichweitenmessung statt.

## Sicherheitspraktiken

| Praktik | Antwort |
|---|---|
| Daten werden bei der Übertragung verschlüsselt | **Ja** (HTTPS) |
| Nutzer können Datenlöschung anfordern | **Ja** (siehe In-App-Reset) |
| Datenerhebung folgt Google-Play-Familienrichtlinien | **Ja** |
| Sicherheitsüberprüfung erfolgte unabhängig | **Nein** (Solo-Projekt) |

## Wenn später Werbung dazukommt

Dann müssen folgende Datentypen deklariert werden (Werbe-SDKs
sammeln idR mindestens):

- App-Aktivität (Interaktionen)
- Geräte- oder andere IDs
- IP-Adresse
- ggf. ungefährer Standort

Mit Zwecken: „Werbung" und „Analyse". Dann zwingend:
- Privacy Policy URL prominent
- App-Settings-Dialog mit Consent
- Update der In-App-Datenschutzerklärung

## Wenn später ein Account/Backend dazukommt

Dann zusätzlich:
- E-Mail-Adresse (gehört zu „Persönliche Informationen")
- Authentifizierungs-Token
- Server-seitige Datenverarbeitung dokumentieren
- DPA mit Backend-Anbieter
- Datenschutzerklärung erweitern
