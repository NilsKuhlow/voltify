# Screenshots für die Store-Submission

Apple und Google verlangen Screenshots in **exakten Pixelgrößen** pro
Geräteklasse. Die einfachste Methode ist, sie direkt auf dem realen
Handy zu machen (kostenlos, beste Qualität). Hier die Anleitung.

## Geräteklassen und Größen

### Apple App Store (Pflicht-Größen)

| Gerät | Auflösung | Anzahl | Pflicht? |
|---|---|---|---|
| iPhone 6.7" (15/16 Pro Max) | 1290 × 2796 | 3–10 | **Ja** |
| iPhone 6.5" (XS Max, 11 Pro Max) | 1242 × 2688 | 3–10 | Empfohlen |
| iPhone 5.5" (8 Plus) | 1242 × 2208 | 3–10 | Ja (für alte Geräte) |
| iPad 13" (M-Modelle) | 2064 × 2752 | 3–10 | falls iPad-Support |
| iPad 12.9" | 2048 × 2732 | 3–10 | falls iPad-Support |

### Google Play

| Gerät | Auflösung | Anzahl | Pflicht? |
|---|---|---|---|
| Phone | mind. 320 px, max. 3840 px, Seitenverhältnis 16:9 bis 9:16 | 2–8 | **Ja** |
| 7"-Tablet | empfohlen 1024 × 600 oder höher | 1–8 | optional |
| 10"-Tablet | empfohlen 1920 × 1200 oder höher | 1–8 | optional |
| **Feature-Graphic** | 1024 × 500 | 1 | **Ja** |

## Empfohlene Screens für Voltify

Bei einer Lern-App sollte der erste Screenshot **die Kernfunktion sofort
zeigen**. Empfohlene Auswahl in dieser Reihenfolge:

1. **Quiz-Card mit aktiver Frage** (Multi-Choice, mit Mehrfachauswahl-Hint)
2. **Home-Screen** mit Streak, drei Lernpfaden, Exam-Countdown
3. **Statistik** mit Box-Verteilung 1–5
4. **Prüfungssimulator-Ergebnis** mit Schulnote
5. **Browse-Screen** mit Volltext-Suche + Filter-Chips
6. **Feedback** „✓ Richtig!" mit Quellenangabe

## Methode 1: Auf dem Handy direkt (empfohlen)

1. App auf dem realen iPhone / Android-Gerät öffnen.
2. Lernfortschritt mit Beispieldaten füllen, damit Streak und %
   nicht 0 sind (z. B. mit `state.cards[id].box = 3` über DevTools
   oder einfach 10 Karten durchspielen).
3. Pro Screen den nativen Screenshot-Shortcut (Power+Lautstärke).
4. Status-Bar **vor dem Screenshot säubern**:
   - Vollladestand-Symbol oder genau 9:41 Uhr (Apple-Konvention)
   - Kein „Niedriger Akku", kein Notification-Badge
   - WLAN/Mobilfunk voll

## Methode 2: Browser-Devtools (Chrome)

1. Im lokalen Preview-Server (`scripts/`-Setup oder
   `python -m http.server 7799 --directory <pfad>`) Chrome öffnen
2. DevTools (F12) → „Toggle Device Toolbar" (Ctrl+Shift+M)
3. „Responsive" auswählen, exakte Pixel-Größe eintragen
   (z. B. 1290 × 2796 für iPhone 6.7")
4. Device-Pixel-Ratio auf **3** stellen für Retina-Schärfe
5. Per F12-Menü → „Capture full-size screenshot" oder
   `Cmd/Ctrl+Shift+P` → „Capture screenshot"

## Methode 3: Geführter Skript-Lauf

Voltify bringt einen vorbefüllten Demo-State mit, damit Screenshots
realistisch wirken (mit Streak, einigen mastered Cards, gesetztem
Prüfungsdatum). Dazu im DevTools-Console laufen lassen:

```javascript
// scripts/seed-demo-state.js – siehe dort
fetch('scripts/seed-demo-state.js')
  .then(r => r.text())
  .then(eval);
```

(Datei wird in einem Folge-Commit erstellt.)

## Feature-Graphic für Google Play (1024 × 500)

Soll auf einen Blick Markenidentität + Versprechen vermitteln. Vorschlag:

- Schwarz/Dunkelblauer Hintergrund (`#0a0e27`)
- Großer Blitz ⚡ links (icon.svg)
- Rechts der Text: **„Voltify"** in Cyan/Gelb-Gradient + Untertitel
  „Spaced Repetition für Elektriker"
- Optional: 3 kleine Lernpfad-Icons (Grundlagen, VDE, Meister)

Tools: Figma (free), Canva (Vorlage „Google Play Feature Graphic"),
Photopea (kostenloses Photoshop-Substitut im Browser).

## Status-Bar / Mockup-Frames

Apple verlangt **realistische Screenshots ohne fake Statusbar**.
Es gibt aber Tools, die deine Screenshots in einen iPhone-Frame setzen
(rein optisch). Erlaubt, aber nicht zwingend:

- screely.com (kostenlos)
- screenshots.pro
- mockuphone.com

## Beachten

- **Mindestens 3 Screenshots** pro Pflicht-Geräteklasse.
- Apple lehnt ab, wenn Screenshots **nicht der App entsprechen** (z. B.
  mit Marketing-Texten überlagert, die in der App nicht vorkommen).
- **Sprache:** App-Sprache = deutsch, also Screenshots auf Deutsch
  einreichen. Lokalisierung in EN/AT/CH erst in Phase 2.
