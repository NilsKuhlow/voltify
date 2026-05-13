// Voltify – Fragen-Datenbank
// path: lehrling-grund | lehrling-vde | meister
// Bei Anpassungen: einfach editieren und neu deployen.
// Quellen-Stil: angelehnt an typische Prüfungsfragen IHK / HwK / Innung
// Elektroniker für Energie- und Gebäudetechnik (Lehrling) und
// Elektrotechnikermeister (Teile I/II + III/IV).

window.PATHS = {
  'lehrling-grund': {
    name: 'Lehrling – Grundlagen',
    short: 'Grundlagen',
    icon: '⚡',
    desc: 'Ohm, Spannung, Schaltungen, Drehstrom, Bauelemente'
  },
  'lehrling-vde': {
    name: 'Lehrling – VDE & Installation',
    short: 'VDE & Installation',
    icon: '🛡',
    desc: 'Sicherheit, Normen, Installation, RCD, Wallbox, PV'
  },
  'meister': {
    name: 'Meister',
    short: 'Meister',
    icon: '🎓',
    desc: 'Recht, Betriebsführung, AdA, Fachtheorie vertieft'
  }
};

window.QUESTIONS = [
  // ====== LEHRLING – GRUNDLAGEN ======
  {
    id: 'lg01', path: 'lehrling-grund', category: 'Grundgesetze',
    question: 'Was besagt das Ohmsche Gesetz?',
    options: ['U = R · I', 'U = R + I', 'U = R / I', 'U = I / R'],
    correct: 0,
    explain: 'Spannung (U) = Widerstand (R) · Stromstärke (I). Gilt für ohmsche Widerstände bei konstanter Temperatur.'
  },
  {
    id: 'lg02', path: 'lehrling-grund', category: 'Grundgesetze',
    question: 'Wie berechnet man die elektrische Leistung im Gleichstromkreis?',
    options: ['P = U · I', 'P = U + I', 'P = U / I', 'P = U² · I'],
    correct: 0,
    explain: 'P = U · I (Leistung = Spannung · Strom). In Watt (W).'
  },
  {
    id: 'lg03', path: 'lehrling-grund', category: 'Einheiten',
    question: 'Welche Einheit hat der elektrische Widerstand?',
    options: ['Volt (V)', 'Ampere (A)', 'Ohm (Ω)', 'Watt (W)'],
    correct: 2,
    explain: 'Der elektrische Widerstand wird in Ohm (Ω) gemessen.'
  },
  {
    id: 'lg04', path: 'lehrling-grund', category: 'Einheiten',
    question: 'Welche Einheit hat die elektrische Leistung?',
    options: ['Joule (J)', 'Watt (W)', 'Volt (V)', 'Var (var)'],
    correct: 1,
    explain: 'Leistung wird in Watt (W) gemessen. 1 W = 1 V · 1 A.'
  },
  {
    id: 'lg05', path: 'lehrling-grund', category: 'Einheiten',
    question: 'Welche Einheit hat die elektrische Arbeit (Energie)?',
    options: ['Watt (W)', 'Wattstunde (Wh) bzw. Joule (J)', 'Ampere (A)', 'Coulomb (C)'],
    correct: 1,
    explain: 'Energie = Leistung · Zeit. Einheit: Wattsekunde = Joule, in der Praxis Wattstunde (Wh) oder Kilowattstunde (kWh).'
  },
  {
    id: 'lg06', path: 'lehrling-grund', category: 'Netz',
    question: 'Welche Frequenz hat das öffentliche Stromnetz in Deutschland?',
    options: ['16,7 Hz', '50 Hz', '60 Hz', '400 Hz'],
    correct: 1,
    explain: '50 Hz – das ist die Netzfrequenz in Europa. 60 Hz gilt z. B. in den USA.'
  },
  {
    id: 'lg07', path: 'lehrling-grund', category: 'Netz',
    question: 'Welche Spannungen liegen im deutschen Niederspannungsnetz an?',
    options: ['110 V / 230 V', '230 V / 400 V', '400 V / 690 V', '230 V / 690 V'],
    correct: 1,
    explain: '230 V zwischen Außen- und Neutralleiter (L–N), 400 V zwischen zwei Außenleitern (L–L).'
  },
  {
    id: 'lg08', path: 'lehrling-grund', category: 'Schaltungen',
    question: 'Wie verhalten sich Widerstände in Reihenschaltung?',
    options: ['Sie addieren sich: R = R1 + R2 + …', 'Kehrwerte addieren sich', 'Größter Widerstand zählt', 'Kleinster Widerstand zählt'],
    correct: 0,
    explain: 'Reihenschaltung: Gesamtwiderstand = Summe der Einzelwiderstände. Strom überall gleich.'
  },
  {
    id: 'lg09', path: 'lehrling-grund', category: 'Schaltungen',
    question: 'Wie berechnet man den Gesamtwiderstand bei zwei parallel geschalteten Widerständen?',
    options: ['R = R1 + R2', 'R = R1 · R2', 'R = (R1 · R2) / (R1 + R2)', 'R = R1 / R2'],
    correct: 2,
    explain: 'Bei zwei parallelen Widerständen gilt R = (R1 · R2) / (R1 + R2). Allgemein: 1/R = 1/R1 + 1/R2 + …'
  },
  {
    id: 'lg10', path: 'lehrling-grund', category: 'Strom',
    question: 'Was ist Wechselspannung?',
    options: ['Spannung mit konstantem Wert und Polarität',
             'Spannung, die ihren Wert und ihre Polarität periodisch ändert',
             'Spannung über 1000 V',
             'Spannung mit überlagertem Gleichanteil'],
    correct: 1,
    explain: 'Wechselspannung (AC) ändert periodisch Wert und Polarität – im Netz sinusförmig mit 50 Hz.'
  },
  {
    id: 'lg11', path: 'lehrling-grund', category: 'Aderfarben',
    question: 'Welche Farbe hat der Schutzleiter (PE)?',
    options: ['blau', 'schwarz', 'grün-gelb', 'braun'],
    correct: 2,
    explain: 'Der Schutzleiter ist immer grün-gelb. Diese Kombination ist ausschließlich für PE reserviert.'
  },
  {
    id: 'lg12', path: 'lehrling-grund', category: 'Aderfarben',
    question: 'Welche Farbe hat der Neutralleiter (N)?',
    options: ['grün-gelb', 'blau', 'grau', 'schwarz'],
    correct: 1,
    explain: 'Der Neutralleiter ist blau. Grau wird oft als zweiter geschalteter Leiter verwendet, ist aber nicht der N.'
  },
  {
    id: 'lg13', path: 'lehrling-grund', category: 'Drehstrom',
    question: 'Wie viele Außenleiter hat ein Drehstromnetz?',
    options: ['1', '2', '3', '4'],
    correct: 2,
    explain: 'Drehstrom hat drei Außenleiter L1, L2, L3, jeweils 120° phasenverschoben.'
  },
  {
    id: 'lg14', path: 'lehrling-grund', category: 'Drehstrom',
    question: 'Wie groß ist die Periodendauer bei 50 Hz?',
    options: ['10 ms', '20 ms', '50 ms', '100 ms'],
    correct: 1,
    explain: 'T = 1 / f = 1 / 50 Hz = 20 ms.'
  },
  {
    id: 'lg15', path: 'lehrling-grund', category: 'Schaltungen',
    question: 'In einer Reihenschaltung – was gilt für die Spannung?',
    options: ['An allen Verbrauchern gleich', 'Sie teilt sich entsprechend der Widerstände auf',
             'Sie ist immer null', 'Sie verdoppelt sich'],
    correct: 1,
    explain: 'In der Reihenschaltung teilt sich die Gesamtspannung im Verhältnis der Einzelwiderstände auf. Der Strom ist gleich.'
  },
  {
    id: 'lg16', path: 'lehrling-grund', category: 'Schaltungen',
    question: 'In einer Parallelschaltung – was gilt für den Strom?',
    options: ['Überall gleich', 'Er teilt sich auf die Zweige auf',
             'Er ist immer null', 'Er addiert sich zu Null'],
    correct: 1,
    explain: 'In der Parallelschaltung teilt sich der Strom auf die Zweige, die Spannung ist überall gleich.'
  },
  {
    id: 'lg17', path: 'lehrling-grund', category: 'Drehstrom',
    question: 'Wie berechnet man die Wirkleistung im Drehstrom-Symmetriebetrieb?',
    options: ['P = U · I', 'P = √3 · U · I · cos φ', 'P = 3 · U · I', 'P = U · I · cos φ'],
    correct: 1,
    explain: 'P = √3 · U · I · cos φ – mit U = verkettete Spannung (z. B. 400 V), I = Außenleiterstrom.'
  },
  {
    id: 'lg18', path: 'lehrling-grund', category: 'Grundgesetze',
    question: 'Wie hängen elektrische Energie, Leistung und Zeit zusammen?',
    options: ['W = P · t', 'W = P / t', 'W = P + t', 'W = P · t²'],
    correct: 0,
    explain: 'Energie = Leistung · Zeit. Beispiel: 2 kW über 3 h = 6 kWh.'
  },
  {
    id: 'lg19', path: 'lehrling-grund', category: 'Strom',
    question: 'Was ist der Effektivwert (Ueff) einer sinusförmigen Wechselspannung?',
    options: ['Spitzenwert · √2',
             'Spitzenwert / √2',
             'Spitzenwert / 2',
             'Spitzenwert · 2'],
    correct: 1,
    explain: 'Ueff = Û / √2. Bei 230 V Effektivspannung beträgt der Spitzenwert ca. 325 V.'
  },
  {
    id: 'lg20', path: 'lehrling-grund', category: 'Aderfarben',
    question: 'Welche Farbe hat üblicherweise der Außenleiter L1?',
    options: ['blau', 'braun', 'schwarz', 'grau'],
    correct: 1,
    explain: 'Nach harmonisierter Norm: L1 braun, L2 schwarz, L3 grau, N blau, PE grün-gelb.'
  },
  {
    id: 'lg21', path: 'lehrling-grund', category: 'Magnetismus',
    question: 'Was geschieht in einer Spule, wenn sich der Stromfluss schnell ändert?',
    options: ['Nichts',
             'Es entsteht eine Induktionsspannung, die der Änderung entgegenwirkt',
             'Die Spule wird zur Stromquelle ohne Verluste',
             'Die Spule wird zum Kondensator'],
    correct: 1,
    explain: 'Lenz\'sche Regel: Die induzierte Spannung wirkt der Stromänderung entgegen (Selbstinduktion).'
  },
  {
    id: 'lg22', path: 'lehrling-grund', category: 'Bauteile',
    question: 'Was speichert ein Kondensator?',
    options: ['Ladung in einem elektrischen Feld', 'Energie in einem magnetischen Feld',
             'Wärme', 'Stromstärke'],
    correct: 0,
    explain: 'Ein Kondensator speichert elektrische Ladung in einem elektrischen Feld zwischen seinen Platten. Q = C · U.'
  },
  {
    id: 'lg23', path: 'lehrling-grund', category: 'Strom',
    question: 'Was ist die elektrische Stromdichte S?',
    options: ['S = U / R', 'S = I / A (Strom pro Querschnittsfläche)', 'S = P / U', 'S = R / l'],
    correct: 1,
    explain: 'Stromdichte S = I / A in A/mm². Übliche Maximalwerte für Cu-Leitungen: ca. 4–7 A/mm² je nach Verlegeart.'
  },
  {
    id: 'lg24', path: 'lehrling-grund', category: 'Schaltungen',
    question: 'Wie berechnet man die Teilspannung U2 im unbelasteten Spannungsteiler aus R1 und R2 (in Reihe an U_ges)?',
    options: ['U2 = U_ges · (R2 / (R1 + R2))', 'U2 = U_ges · (R1 / R2)', 'U2 = U_ges / R2', 'U2 = U_ges + R1 − R2'],
    correct: 0,
    explain: 'Spannungsteiler: U_x = U_ges · R_x / R_ges. Spannung verteilt sich proportional zu den Widerständen.'
  },
  {
    id: 'lg25', path: 'lehrling-grund', category: 'Berechnung',
    question: 'Wie berechnet man den Vorwiderstand R_v für eine LED?',
    options: ['R = U_LED · I_LED', 'R = (U_b − U_LED) / I_LED', 'R = U_b / U_LED', 'R = I_LED / U_b'],
    correct: 1,
    explain: 'R_v = (U_betrieb − U_LED) / I_LED. Beispiel: 12 V Versorgung, 2 V LED, 20 mA → R = (12-2)/0,02 = 500 Ω.'
  },
  {
    id: 'lg26', path: 'lehrling-grund', category: 'Bauteile',
    question: 'Welche Energie speichert ein geladener Kondensator?',
    options: ['W = U · I', 'W = C · U', 'W = ½ · C · U²', 'W = C / U'],
    correct: 2,
    explain: 'W = ½ · C · U². Energie steigt quadratisch mit der Spannung – wichtig bei Sicherheitsabständen!'
  },
  {
    id: 'lg27', path: 'lehrling-grund', category: 'Einheiten',
    question: 'Welche Einheit hat die elektrische Kapazität?',
    options: ['Henry (H)', 'Farad (F)', 'Ohm (Ω)', 'Tesla (T)'],
    correct: 1,
    explain: 'Kapazität wird in Farad (F) angegeben. 1 F = 1 As/V. In der Praxis meist µF, nF, pF.'
  },
  {
    id: 'lg28', path: 'lehrling-grund', category: 'Einheiten',
    question: 'Welche Einheit hat die Induktivität?',
    options: ['Farad (F)', 'Henry (H)', 'Volt (V)', 'Joule (J)'],
    correct: 1,
    explain: 'Induktivität wird in Henry (H) gemessen. 1 H = 1 Vs/A.'
  },
  {
    id: 'lg29', path: 'lehrling-grund', category: 'Bauteile',
    question: 'Wie verhält sich ein idealer Kondensator im stationären Zustand bei Gleichspannung?',
    options: ['Wirkt wie Kurzschluss', 'Sperrt (lässt keinen Strom durch)',
             'Erhöht die Spannung', 'Verändert die Frequenz'],
    correct: 1,
    explain: 'Im stationären Zustand ist der Kondensator aufgeladen, kein Stromfluss mehr. Bei AC fließt dagegen ständig Lade-/Entladestrom.'
  },
  {
    id: 'lg30', path: 'lehrling-grund', category: 'Bauteile',
    question: 'Wie verhält sich eine ideale Spule im stationären DC-Zustand?',
    options: ['Wirkt wie offener Schalter', 'Wirkt nur über ihren ohmschen Drahtwiderstand (kurzschluss-ähnlich)',
             'Erhöht die Spannung dauerhaft', 'Erzeugt Wechselspannung'],
    correct: 1,
    explain: 'Im stationären DC-Zustand fällt am idealen Induktanteil keine Spannung ab; nur der ohmsche Drahtwiderstand zählt.'
  },
  {
    id: 'lg31', path: 'lehrling-grund', category: 'Halbleiter',
    question: 'Was ist die Funktion einer Halbleiterdiode?',
    options: ['Stromrichtungsabhängige Leitung – sperrt in Sperr-, leitet in Durchlassrichtung',
             'Stromregelung in beide Richtungen gleich',
             'Spannungswandlung wie Trafo',
             'Speicherung von Ladung'],
    correct: 0,
    explain: 'Diode = Einwegventil für Strom. In Durchlassrichtung leitet sie ab Schwellenspannung (Si: ca. 0,7 V), in Sperrrichtung blockiert sie (bis Durchbruch).'
  },
  {
    id: 'lg32', path: 'lehrling-grund', category: 'Halbleiter',
    question: 'Welche typische Durchlassspannung hat eine rote Standard-LED?',
    options: ['ca. 0,3 V', 'ca. 0,7 V', 'ca. 1,8 – 2,2 V', 'ca. 5 V'],
    correct: 2,
    explain: 'Rote LEDs: ca. 1,8–2,2 V. Grün/Gelb: ~2,2–2,5 V. Blau/Weiß: ~3,0–3,4 V.'
  },
  {
    id: 'lg33', path: 'lehrling-grund', category: 'Berechnung',
    question: 'Welche Leistungsformel kann bei bekannter Spannung und Widerstand angewendet werden?',
    options: ['P = U + R', 'P = U · R', 'P = U² / R', 'P = R / U²'],
    correct: 2,
    explain: 'Aus P = U · I und I = U/R folgt P = U²/R. Auch P = I² · R ist gültig.'
  },
  {
    id: 'lg34', path: 'lehrling-grund', category: 'Berechnung',
    question: 'Wie ist der Wirkungsgrad η definiert?',
    options: ['η = P_zu / P_ab', 'η = P_ab / P_zu (abgegebene / zugeführte Leistung)',
             'η = U / I', 'η = I · t'],
    correct: 1,
    explain: 'η = P_ab / P_zu, oft in % angegeben. Differenz wird meist als Wärme abgeführt (Verluste).'
  },
  {
    id: 'lg35', path: 'lehrling-grund', category: 'Grundgesetze',
    question: 'Was besagt die Maschenregel (2. Kirchhoffsches Gesetz)?',
    options: ['Die Summe aller Ströme an einem Knoten ist 0',
             'Die Summe aller Spannungen in einer geschlossenen Masche ist 0',
             'Spannung ist immer konstant',
             'Widerstand ist immer 0'],
    correct: 1,
    explain: 'Maschenregel: ΣU = 0. Erzeuger- und Verbraucherspannungen heben sich in jeder geschlossenen Masche auf.'
  },
  {
    id: 'lg36', path: 'lehrling-grund', category: 'Grundgesetze',
    question: 'Was besagt die Knotenregel (1. Kirchhoffsches Gesetz)?',
    options: ['Spannung in Masche = 0',
             'Summe der zufließenden Ströme = Summe der abfließenden Ströme',
             'Strom = Spannung · Widerstand',
             'Strom in Reihenschaltung addiert sich'],
    correct: 1,
    explain: 'An jedem Knoten gilt: ΣI_zu = ΣI_ab. Es kann keine Ladung „stecken bleiben".'
  },
  {
    id: 'lg37', path: 'lehrling-grund', category: 'Berechnung',
    question: 'Wie groß ist der Effektivwert einer sinusförmigen Wechselspannung mit Spitzenwert 325 V?',
    options: ['325 V', 'ca. 230 V', 'ca. 460 V', 'ca. 162 V'],
    correct: 1,
    explain: 'U_eff = Û / √2 = 325 / 1,414 ≈ 230 V. Genau das ist der Effektivwert unseres Niederspannungsnetzes.'
  },
  {
    id: 'lg38', path: 'lehrling-grund', category: 'Strom',
    question: 'Wie hängen Frequenz f und Periodendauer T zusammen?',
    options: ['T = f', 'T = f²', 'T = 1 / f', 'T = f / 2'],
    correct: 2,
    explain: 'T = 1 / f. Bei 50 Hz also T = 20 ms.'
  },
  {
    id: 'lg39', path: 'lehrling-grund', category: 'Werkstoffe',
    question: 'Welches Metall hat die beste elektrische Leitfähigkeit?',
    options: ['Kupfer', 'Aluminium', 'Silber', 'Eisen'],
    correct: 2,
    explain: 'Silber leitet am besten (κ ≈ 62 m/Ω·mm²). In der Praxis verwendet man wegen Preis und Verfügbarkeit fast immer Kupfer (κ ≈ 56).'
  },
  {
    id: 'lg40', path: 'lehrling-grund', category: 'Werkstoffe',
    question: 'Welche Stoffgruppe hat eine Leitfähigkeit zwischen Leiter und Isolator?',
    options: ['Edelmetalle', 'Halbleiter (z. B. Silizium, Germanium)', 'Keramik', 'Kunststoffe'],
    correct: 1,
    explain: 'Halbleiter (Si, Ge, GaAs …) sind Grundlage für Dioden, Transistoren, ICs. Leitfähigkeit lässt sich gezielt durch Dotierung beeinflussen.'
  },
  {
    id: 'lg41', path: 'lehrling-grund', category: 'Werkstoffe',
    question: 'Wie groß ist der spezifische Widerstand ρ von Kupfer?',
    options: ['ca. 0,0178 Ω·mm²/m', 'ca. 1,78 Ω·mm²/m', 'ca. 17,8 Ω·mm²/m', 'ca. 0,178 Ω·mm²/m'],
    correct: 0,
    explain: 'ρ_Cu ≈ 0,0178 Ω·mm²/m. Daraus berechnet sich der Leiterwiderstand: R = ρ · l / A.'
  },
  {
    id: 'lg42', path: 'lehrling-grund', category: 'Berechnung',
    question: 'Wie berechnet man den Mindestquerschnitt eines Leiters bei zulässigem Spannungsfall (DC bzw. einphasig AC)?',
    options: ['A = (2 · l · I · ρ) / Δu', 'A = l · I', 'A = U / I', 'A = R · l'],
    correct: 0,
    explain: 'A = 2 · l · I · ρ / Δu (Faktor 2 für Hin- und Rückleiter). Bei symmetrischem Drehstrom gilt der Faktor √3.'
  },
  {
    id: 'lg43', path: 'lehrling-grund', category: 'Grundgesetze',
    question: 'Wie berechnet man die elektrische Arbeit (Energie)?',
    options: ['W = U · I', 'W = U · I · t', 'W = U / I', 'W = U · I / t'],
    correct: 1,
    explain: 'W = U · I · t = P · t. Einheit Wattsekunde (Joule) bzw. Wattstunde.'
  },
  {
    id: 'lg44', path: 'lehrling-grund', category: 'Maschinen',
    question: 'Wie hoch ist typischerweise der Anlaufstrom eines Drehstrom-Asynchronmotors gegenüber dem Bemessungsstrom?',
    options: ['Etwa gleich hoch', 'ca. 2-fach', 'ca. 5- bis 8-fach', 'ca. 50-fach'],
    correct: 2,
    explain: 'Anlaufstrom ist meist das 5- bis 8-fache des Bemessungsstroms. Daher Stern-Dreieck-Anlauf oder Sanftanlauf bei größeren Motoren.'
  },
  {
    id: 'lg45', path: 'lehrling-grund', category: 'Maschinen',
    question: 'Wodurch entsteht ein Drehfeld in einem Drehstrommotor?',
    options: ['Durch drei zeitlich um 120° versetzte Wechselströme in räumlich versetzten Wicklungen',
             'Durch Dauermagnete am Rotor',
             'Durch Gleichstrom an drei Spulen',
             'Durch Hochfrequenzspeisung'],
    correct: 0,
    explain: 'Drei Statorwicklungen je 120° räumlich versetzt + drei Phasen je 120° zeitlich versetzt → magnetisches Drehfeld, dem der Rotor folgt.'
  },
  {
    id: 'lg46', path: 'lehrling-grund', category: 'Maschinen',
    question: 'Was bezeichnet man als Schlupf beim Asynchronmotor?',
    options: ['Reibungsverlust an der Welle',
             'Differenz zwischen Drehfeld- und Rotor-Drehzahl, bezogen auf das Drehfeld',
             'Spannungsabfall im Stator',
             'Frequenzverschiebung'],
    correct: 1,
    explain: 's = (n_d − n) / n_d. Ohne Schlupf könnte der Rotor keine Spannung induzieren – kein Drehmoment. Typisch 2–6 % bei Nennlast.'
  },
  {
    id: 'lg47', path: 'lehrling-grund', category: 'Maschinen',
    question: 'Wie hängt das Übersetzungsverhältnis eines Transformators mit den Windungszahlen zusammen?',
    options: ['ü = N1 + N2', 'ü = N1 · N2', 'ü = N1 / N2 = U1 / U2', 'ü = N1 − N2'],
    correct: 2,
    explain: 'ü = N1 / N2 = U1 / U2. Strom verhält sich umgekehrt: I1 / I2 = N2 / N1 (idealer Trafo).'
  },
  {
    id: 'lg48', path: 'lehrling-grund', category: 'Bauteile',
    question: 'Wie berechnet man die Gesamtkapazität bei zwei parallel geschalteten Kondensatoren?',
    options: ['C = C1 · C2', 'C = C1 + C2', 'C = (C1 · C2) / (C1 + C2)', 'C = 1 / (C1 + C2)'],
    correct: 1,
    explain: 'Kondensator-Parallelschaltung: Kapazitäten addieren sich (gegensätzlich zu Widerständen). Reihenschaltung: Kehrwerte addieren sich.'
  },
  {
    id: 'lg49', path: 'lehrling-grund', category: 'Magnetismus',
    question: 'Welche Einheit hat die magnetische Flussdichte B?',
    options: ['Henry (H)', 'Weber (Wb)', 'Tesla (T)', 'Gauß-pro-Meter'],
    correct: 2,
    explain: 'Magnetische Flussdichte B in Tesla (T). 1 T = 1 Vs/m². Magnetischer Fluss Φ in Weber (Wb).'
  },
  {
    id: 'lg50', path: 'lehrling-grund', category: 'Magnetismus',
    question: 'Was passiert in einer Spule, deren magnetischer Fluss sich zeitlich ändert?',
    options: ['Es wird eine Spannung induziert (Induktionsgesetz)',
             'Sie zieht Strom aus dem Netz',
             'Sie verformt sich permanent',
             'Sie verliert ihre Wicklung'],
    correct: 0,
    explain: 'Faradaysches Induktionsgesetz: u_ind = −N · dΦ/dt. Grundlage für Generator, Trafo, Induktionsherd.'
  },

  // ====== LEHRLING – VDE & INSTALLATION ======
  {
    id: 'lv01', path: 'lehrling-vde', category: 'Sicherheit',
    question: 'Welche der 5 Sicherheitsregeln steht an erster Stelle?',
    options: ['Spannungsfreiheit feststellen', 'Freischalten',
             'Erden und Kurzschließen', 'Gegen Wiedereinschalten sichern'],
    correct: 1,
    explain: '1. Freischalten · 2. Gegen Wiedereinschalten sichern · 3. Spannungsfreiheit feststellen · 4. Erden und Kurzschließen · 5. Benachbarte unter Spannung stehende Teile abdecken oder abschranken.'
  },
  {
    id: 'lv02', path: 'lehrling-vde', category: 'Sicherheit',
    question: 'Wie lautet die korrekte Reihenfolge der 5 Sicherheitsregeln?',
    options: [
      'Freischalten – Spannungsfreiheit – Sichern – Erden – Abdecken',
      'Freischalten – Sichern – Spannungsfreiheit – Erden – Abdecken',
      'Spannungsfreiheit – Freischalten – Sichern – Abdecken – Erden',
      'Erden – Freischalten – Sichern – Spannungsfreiheit – Abdecken'
    ],
    correct: 1,
    explain: 'Eselsbrücke „FSSEAN": Freischalten, Sichern, Spannungsfreiheit feststellen, Erden+Kurzschließen, benachbarte Teile Abdecken.'
  },
  {
    id: 'lv03', path: 'lehrling-vde', category: 'Netzformen',
    question: 'Was kennzeichnet ein TN-Netz?',
    options: ['Sternpunkt geerdet, Körper über separaten Erder geerdet',
             'Sternpunkt geerdet, Körper über Schutzleiter mit Sternpunkt verbunden',
             'Sternpunkt isoliert, Körper geerdet',
             'Sternpunkt und Körper beide isoliert'],
    correct: 1,
    explain: 'TN-Netz: Sternpunkt direkt geerdet (T), Körper über Schutzleiter mit dem Sternpunkt verbunden (N).'
  },
  {
    id: 'lv04', path: 'lehrling-vde', category: 'Netzformen',
    question: 'Was kennzeichnet ein TT-Netz?',
    options: ['Sternpunkt geerdet, Körper am separaten Erder',
             'Sternpunkt geerdet, Körper über PE am Sternpunkt',
             'Sternpunkt isoliert, Körper geerdet',
             'Beide Sternpunkte isoliert'],
    correct: 0,
    explain: 'TT-Netz: Sternpunkt direkt geerdet (T), Körper über separaten lokalen Erder geerdet (T).'
  },
  {
    id: 'lv05', path: 'lehrling-vde', category: 'Netzformen',
    question: 'Was kennzeichnet ein IT-Netz?',
    options: ['Sternpunkt geerdet',
             'Sternpunkt isoliert oder über Impedanz angeschlossen, Körper geerdet',
             'Beide Pole geerdet',
             'Nur PE-Leiter vorhanden'],
    correct: 1,
    explain: 'IT-Netz: Sternpunkt isoliert (oder hochohmig geerdet), Körper geerdet. Erster Erdschluss ist ungefährlich – Vorteil in OPs, Industrie etc.'
  },
  {
    id: 'lv06', path: 'lehrling-vde', category: 'Schutzklassen',
    question: 'Was bedeutet Schutzklasse I?',
    options: ['Schutzkleinspannung', 'Schutz durch Schutzisolierung',
             'Schutz durch Anschluss an Schutzleiter', 'Funktionskleinspannung'],
    correct: 2,
    explain: 'Schutzklasse I: Berührbare leitfähige Teile sind mit dem Schutzleiter verbunden – Symbol: Erdungszeichen.'
  },
  {
    id: 'lv07', path: 'lehrling-vde', category: 'Schutzklassen',
    question: 'Was bedeutet Schutzklasse II?',
    options: ['Schutzleiter erforderlich', 'Schutzisolierung (doppelt/verstärkt)',
             'Schutzkleinspannung', 'IP-Schutz X4'],
    correct: 1,
    explain: 'Schutzklasse II: doppelte oder verstärkte Isolierung – kein Schutzleiteranschluss. Symbol: zwei ineinander liegende Quadrate.'
  },
  {
    id: 'lv08', path: 'lehrling-vde', category: 'Schutzklassen',
    question: 'Was bedeutet Schutzklasse III?',
    options: ['Schutzkleinspannung (SELV/PELV)', 'Vollisolierung',
             'Schutzleiter zwingend', 'Hochspannungsanschluss'],
    correct: 0,
    explain: 'Schutzklasse III: Versorgung mit Schutzkleinspannung (≤ 50 V AC / 120 V DC) aus sicheren Quellen – SELV oder PELV.'
  },
  {
    id: 'lv09', path: 'lehrling-vde', category: 'Schutzeinrichtungen',
    question: 'Welcher Bemessungsfehlerstrom ist für Steckdosenstromkreise (≤ 32 A) im Wohnbereich vorgeschrieben?',
    options: ['10 mA', '30 mA', '100 mA', '300 mA'],
    correct: 1,
    explain: 'RCD mit IΔn = 30 mA ist nach DIN VDE 0100-410 für Steckdosenstromkreise bis 32 A in Wohnungen Pflicht (Zusatzschutz).'
  },
  {
    id: 'lv10', path: 'lehrling-vde', category: 'Prüfung',
    question: 'Was wird bei einer Prüfung nach DGUV V3 geprüft?',
    options: ['Nur Beleuchtung', 'Elektrische Anlagen und ortsveränderliche Betriebsmittel',
             'Heizungsanlagen', 'Gasanlagen'],
    correct: 1,
    explain: 'DGUV V3 (vormals BGV A3) regelt die Wiederholungsprüfung ortsfester Anlagen und ortsveränderlicher elektrischer Betriebsmittel.'
  },
  {
    id: 'lv11', path: 'lehrling-vde', category: 'Spannungsbereiche',
    question: 'Ab welcher Wechselspannung spricht man von Hochspannung?',
    options: ['Über 50 V', 'Über 230 V', 'Über 1000 V', 'Über 30 kV'],
    correct: 2,
    explain: 'Niederspannung: bis 1000 V AC bzw. 1500 V DC. Darüber: Hochspannung (mit Bereichen Mittel-, Hoch-, Höchstspannung).'
  },
  {
    id: 'lv12', path: 'lehrling-vde', category: 'Spannungsbereiche',
    question: 'Wie hoch ist die zulässige Berührungsspannung für Wechselstrom in trockenen Räumen?',
    options: ['12 V', '25 V', '50 V', '120 V'],
    correct: 2,
    explain: 'Maximal 50 V AC bzw. 120 V DC – darüber gilt eine Berührung als gefährlich (Schutzziel der VDE).'
  },
  {
    id: 'lv13', path: 'lehrling-vde', category: 'Schutzkleinspannung',
    question: 'Was ist SELV?',
    options: ['Safety Extra Low Voltage – Schutzkleinspannung mit sicherer Trennung, ohne Erdung',
             'Schutz mit Erdverbindung',
             'Spannung über 50 V',
             'Schaltfähige Spannung über 230 V'],
    correct: 0,
    explain: 'SELV = Safety Extra Low Voltage. Sichere Trennung von Netz, keine Verbindung zur Erde. Im Gegensatz zu PELV (mit Erdung).'
  },
  {
    id: 'lv14', path: 'lehrling-vde', category: 'Installation',
    question: 'Welcher Aderquerschnitt ist üblich für allgemeine Steckdosenstromkreise (16 A)?',
    options: ['0,75 mm²', '1,5 mm²', '4 mm²', '6 mm²'],
    correct: 1,
    explain: '1,5 mm² Cu für Beleuchtung und allgemeine Steckdosen mit 16 A. Bei höherer Belastung oder Verlegeart B2 ggf. 2,5 mm².'
  },
  {
    id: 'lv15', path: 'lehrling-vde', category: 'Absicherung',
    question: 'Welche maximale Absicherung ist üblicherweise für 1,5 mm² Cu zulässig?',
    options: ['10 A', '13 A', '16 A', '20 A'],
    correct: 2,
    explain: '1,5 mm² Cu wird je nach Verlegeart bis maximal 16 A LS-Schalter abgesichert.'
  },
  {
    id: 'lv16', path: 'lehrling-vde', category: 'Schaltungen',
    question: 'Was ist eine Wechselschaltung?',
    options: ['Eine Schaltung mit Stromstoßrelais',
             'Eine Schaltung, mit der eine Lampe von zwei Stellen geschaltet werden kann',
             'Eine Drehstromschaltung',
             'Eine Schaltung mit Kreuzschalter'],
    correct: 1,
    explain: 'Wechselschaltung = Eine Lampe wird von zwei Stellen geschaltet (zwei Wechselschalter, drei korrespondierende Adern).'
  },
  {
    id: 'lv17', path: 'lehrling-vde', category: 'Schaltungen',
    question: 'Wofür wird eine Kreuzschaltung verwendet?',
    options: ['Schalten von 3 oder mehr Stellen aus',
             'Nur zur Verteilung im Drehstromnetz',
             'Nur in Bädern',
             'Zum Dimmen'],
    correct: 0,
    explain: 'Kreuzschaltung = eine Lampe von 3 oder mehr Stellen schalten. Aufbau: Wechsel – Kreuz – … – Wechsel.'
  },
  {
    id: 'lv18', path: 'lehrling-vde', category: 'Schaltungen',
    question: 'Was bewirkt eine Stromstoßschaltung?',
    options: ['Schaltet Last bei jedem Tastendruck um (ein/aus)',
             'Erhöht die Spannung kurzzeitig',
             'Schaltet nur bei Stromausfall',
             'Schaltet 3-phasig dauerhaft'],
    correct: 0,
    explain: 'Ein Stromstoßrelais kippt bei jedem Tasterimpuls seinen Schaltzustand – ideal bei vielen Schaltstellen mit nur einer Leitung.'
  },
  {
    id: 'lv19', path: 'lehrling-vde', category: 'Leiter',
    question: 'Was ist ein PEN-Leiter?',
    options: ['Reiner Schutzleiter',
             'Reiner Neutralleiter',
             'Kombinierter Schutz- und Neutralleiter',
             'Außenleiter mit Erdung'],
    correct: 2,
    explain: 'Der PEN-Leiter (TN-C-System) übernimmt sowohl die Funktion des Neutralleiters (N) als auch des Schutzleiters (PE). Querschnitt mind. 10 mm² Cu.'
  },
  {
    id: 'lv20', path: 'lehrling-vde', category: 'Schutzeinrichtungen',
    question: 'Was bedeutet RCD?',
    options: ['Residual Current Device – Fehlerstromschutzschalter',
             'Reverse Current Detector',
             'Resistance Control Device',
             'Relay Common Disconnect'],
    correct: 0,
    explain: 'RCD = Residual Current Device, deutsch: FI-Schutzschalter. Schaltet ab, wenn der Fehlerstrom IΔn überschritten wird.'
  },
  {
    id: 'lv21', path: 'lehrling-vde', category: 'Schutzart',
    question: 'Was beschreibt die IP-Schutzart, z. B. IP44?',
    options: ['Spannungsfestigkeit',
             'Schutz gegen Berührung/Fremdkörper (1. Ziffer) und Wasser (2. Ziffer)',
             'Maximale Stromstärke',
             'Frequenzbereich'],
    correct: 1,
    explain: 'IPxx: Erste Ziffer = Schutz gegen feste Fremdkörper / Berührung, zweite Ziffer = Schutz gegen Wasser. IP44 z. B. Schutz gegen Spritzwasser und Drähte.'
  },
  {
    id: 'lv22', path: 'lehrling-vde', category: 'Bad',
    question: 'Welche Schutzbereiche gibt es im Badezimmer nach VDE 0100-701?',
    options: ['Bereich 0 (im Wasser), 1 (über Wanne), 2 (60 cm seitlich)',
             'Bereich A, B, C, D',
             'Nur ein einziger Bereich',
             'Bereich 1 bis 5'],
    correct: 0,
    explain: 'Schutzbereiche im Bad: 0 = Innenraum Badewanne/Dusche, 1 = darüber bis 2,25 m, 2 = 60 cm seitlich. Frühere Bereiche 3 wurden 2018 gestrichen.'
  },
  {
    id: 'lv23', path: 'lehrling-vde', category: 'Erdung',
    question: 'Welcher Mindestquerschnitt ist für einen Schutzleiter aus Kupfer (verlegt mit Außenleiter ≤ 16 mm²) vorgeschrieben?',
    options: ['Querschnitt wie der Außenleiter', '1,5 mm²', '2,5 mm²', 'Halbierter Querschnitt'],
    correct: 0,
    explain: 'Bis zu Phasenquerschnitt 16 mm² gilt: PE-Querschnitt = Außenleiterquerschnitt. Darüber gelten reduzierte Querschnitte nach VDE.'
  },
  {
    id: 'lv24', path: 'lehrling-vde', category: 'Messtechnik',
    question: 'Mit welchem Gerät wird der Isolationswiderstand gemessen?',
    options: ['Multimeter im Ω-Bereich',
             'Isolationsmessgerät mit 250–1000 V Prüfspannung',
             'Schleifenwiderstandsmessgerät',
             'Erdungsmessgerät'],
    correct: 1,
    explain: 'Isolationsmessung mit definierter Prüfspannung (z. B. 500 V DC bei Niederspannungsanlagen). Mindestwert i. d. R. 1 MΩ.'
  },
  {
    id: 'lv25', path: 'lehrling-vde', category: 'Normen',
    question: 'Was regelt die Normenreihe DIN VDE 0100?',
    options: ['Betrieb elektrischer Anlagen', 'Errichten von Niederspannungsanlagen',
             'Hochspannungsfreileitungen', 'Telekommunikationsanlagen'],
    correct: 1,
    explain: 'VDE 0100 = Errichten von Starkstromanlagen mit Nennspannungen bis AC 1000 V / DC 1500 V. Sehr viele Teile (z. B. -410 Schutzmaßnahmen, -540 Erdung, -701 Bäder).'
  },
  {
    id: 'lv26', path: 'lehrling-vde', category: 'Normen',
    question: 'Was regelt die Normenreihe DIN VDE 0105 (Teil 100)?',
    options: ['Errichten neuer Anlagen', 'Betrieb elektrischer Anlagen (z. B. die 5 Sicherheitsregeln)',
             'Schaltschrankbau', 'Photovoltaik'],
    correct: 1,
    explain: 'VDE 0105-100 ist die Norm für den Betrieb elektrischer Anlagen – Quelle u. a. der 5 Sicherheitsregeln und der Definition von Elektrofachkraft.'
  },
  {
    id: 'lv27', path: 'lehrling-vde', category: 'Erdung',
    question: 'Welche Aufgabe hat der Hauptpotentialausgleich?',
    options: ['Verbindet alle Verbraucher mit dem Sternpunkt',
             'Verbindet leitfähige Hausinstallationen (PE, Wasser, Heizung, Gas, Antennen) mit der Haupterdungsschiene',
             'Schützt nur vor Blitzeinschlag',
             'Ersetzt den Schutzleiter'],
    correct: 1,
    explain: 'Der Hauptpotentialausgleich verhindert gefährliche Berührungsspannungen zwischen leitfähigen Gebäudeteilen, indem alle metallisch leitenden Installationen auf gleiches Potential gebracht werden.'
  },
  {
    id: 'lv28', path: 'lehrling-vde', category: 'Erdung',
    question: 'Welche Erdungsart wird heute im Neubau bei Bodenplatten typischerweise vorgesehen?',
    options: ['Tiefenerder', 'Banderder', 'Fundamenterder (Ringerder)', 'Strahlenerder'],
    correct: 2,
    explain: 'Der Fundamenterder ist im Neubau Standard nach DIN 18014. Er wird in den Bewehrungsstahl der Bodenplatte eingelegt.'
  },
  {
    id: 'lv29', path: 'lehrling-vde', category: 'Hausanschluss',
    question: 'Welche Aufgabe hat der Hausanschlusskasten (HAK)?',
    options: ['Misst den Stromverbrauch',
             'Erste Schaltstelle nach der Hausanschlussleitung des Netzbetreibers, bestückt mit NH-Sicherungen',
             'Beinhaltet die FI-Schutzschalter',
             'Wandelt Drehstrom in Einphasenstrom'],
    correct: 1,
    explain: 'HAK = Übergabepunkt vom Netzbetreiber zum Hauseigentümer, bestückt mit NH-Sicherungen als Hauptsicherung.'
  },
  {
    id: 'lv30', path: 'lehrling-vde', category: 'Schutzeinrichtungen',
    question: 'Welcher Auslösestrombereich gilt für die Schnellauslösung eines LS-Schalters Charakteristik B?',
    options: ['1,1 – 1,4 · I_n', '3 – 5 · I_n', '5 – 10 · I_n', '10 – 20 · I_n'],
    correct: 1,
    explain: 'B-Charakteristik: magnetische Schnellauslösung bei Ia = 3–5 · I_n. Standard im Wohnbau für ohmsche/leichte Lasten.'
  },
  {
    id: 'lv31', path: 'lehrling-vde', category: 'Schutzeinrichtungen',
    question: 'Welcher Auslösestrombereich gilt für einen LS-Schalter Charakteristik C?',
    options: ['3 – 5 · I_n', '5 – 10 · I_n', '10 – 20 · I_n', '20 – 30 · I_n'],
    correct: 1,
    explain: 'C-Charakteristik: Ia = 5–10 · I_n – verwendet bei Verbrauchern mit höheren Einschaltströmen (Trafos, Leuchtstofflampen-Gruppen).'
  },
  {
    id: 'lv32', path: 'lehrling-vde', category: 'Schutzeinrichtungen',
    question: 'Wofür wird ein LS-Schalter mit D-Charakteristik (Ia = 10–20 · I_n) eingesetzt?',
    options: ['Wohnbau-Steckdosen',
             'Lasten mit sehr hohen Einschaltströmen (Motoren, Trafos, Schweißgeräte)',
             'Beleuchtung',
             'Gleichstromkreise'],
    correct: 1,
    explain: 'D ist für hohe Stoßströme: Drehstrommotoren, große Trafos, Schweißgeräte. Wohnbau-Standard ist B.'
  },
  {
    id: 'lv33', path: 'lehrling-vde', category: 'Installation',
    question: 'Wie hoch darf der Spannungsfall vom Hausanschlusskasten bis zum Verbraucher in Wohngebäuden nach DIN 18015 maximal sein?',
    options: ['1 %', '3 %', '5 %', '10 %'],
    correct: 1,
    explain: 'DIN 18015-1: max. 3 % Spannungsfall in Endstromkreisen vom HAK bis Verbraucher. Bei langen Leitungen Querschnitt erhöhen.'
  },
  {
    id: 'lv34', path: 'lehrling-vde', category: 'Installation',
    question: 'Wie viele Steckdosen sind in einem Wohnzimmer (≥ 20 m²) nach DIN 18015-2 mindestens vorzusehen?',
    options: ['2', '4', '6', '8'],
    correct: 2,
    explain: 'DIN 18015-2 fordert für ein Wohnzimmer mindestens 6 Steckdosen, gestaffelt nach Raumgröße können es deutlich mehr werden.'
  },
  {
    id: 'lv35', path: 'lehrling-vde', category: 'Berechnung',
    question: 'Welcher Erderwiderstand R_A ist im TT-Netz bei 30 mA RCD und Berührungsspannungsgrenze 50 V höchstens zulässig?',
    options: ['1,67 Ω', '50 Ω', '500 Ω', '1666 Ω'],
    correct: 3,
    explain: 'R_A · IΔn ≤ U_L → R_A ≤ 50 V / 0,03 A ≈ 1666 Ω. Praktisch deutlich kleiner anstreben.'
  },
  {
    id: 'lv36', path: 'lehrling-vde', category: 'Leiter',
    question: 'Welcher Mindestquerschnitt gilt für einen kombinierten PEN-Leiter aus Kupfer?',
    options: ['1,5 mm²', '2,5 mm²', '6 mm²', '10 mm²'],
    correct: 3,
    explain: 'PEN-Leiter: mindestens 10 mm² Cu (oder 16 mm² Al). Unter dieser Grenze ist die Auftrennung in N und PE zwingend.'
  },
  {
    id: 'lv37', path: 'lehrling-vde', category: 'Personen',
    question: 'Was kennzeichnet eine Elektrofachkraft (EFK) nach DGUV V3 / VDE 0105?',
    options: ['Hat einen Stromzähler-Lehrgang besucht',
             'Hat fachliche Ausbildung, Kenntnisse und Erfahrung, um elektrische Risiken zu erkennen und zu vermeiden',
             'Ist über 50 Jahre alt',
             'Ist Meister mit Personalverantwortung'],
    correct: 1,
    explain: 'EFK: Ausbildung + Kenntnisse + Erfahrung in der jeweiligen Tätigkeit. Nur sie darf eigenverantwortlich elektrotechnische Arbeiten ausführen.'
  },
  {
    id: 'lv38', path: 'lehrling-vde', category: 'Brandschutz',
    question: 'Was bedeutet die Klassifizierung „E30" / „E60" / „E90" bei Leitungsanlagen?',
    options: ['IP-Schutzart',
             'Funktionserhalt für 30 / 60 / 90 Minuten im Brandfall (Sicherheitsstromversorgung)',
             'Spannungsklasse',
             'Querschnitts-Bezeichnung'],
    correct: 1,
    explain: 'Funktionserhaltsklassen: Leitungsanlagen für sicherheitsrelevante Verbraucher (z. B. Notbeleuchtung, Brandmeldeanlagen) müssen im Brandfall noch 30/60/90 min funktionieren.'
  },
  {
    id: 'lv39', path: 'lehrling-vde', category: 'Beleuchtung',
    question: 'Welche Mindestbeleuchtungsstärke muss eine Sicherheitsbeleuchtung auf der Mittellinie eines Rettungswegs erreichen?',
    options: ['0,1 lx', '1 lx', '5 lx', '10 lx'],
    correct: 1,
    explain: 'DIN EN 1838: ≥ 1 lx auf Bodenmitte des Rettungswegs, bei besonderer Gefährdung höher (Hochrisiko ≥ 15 lx).'
  },
  {
    id: 'lv40', path: 'lehrling-vde', category: 'Gebäudesystemtechnik',
    question: 'Mit welcher Versorgungsspannung arbeitet das KNX-TP1-Bussystem?',
    options: ['12 V AC', '24 V AC', '29 V DC', '230 V AC'],
    correct: 2,
    explain: 'KNX TP1 (Twisted Pair) wird mit 29 V DC versorgt – SELV. Daten und Spannung laufen über das gleiche Buskabel.'
  },
  {
    id: 'lv41', path: 'lehrling-vde', category: 'Photovoltaik',
    question: 'Welche Stromart liefern Photovoltaikmodule direkt am Modulanschluss?',
    options: ['Wechselstrom', 'Gleichstrom (DC)', 'Drehstrom', 'Mischspannung'],
    correct: 1,
    explain: 'PV-Module liefern DC. Erst der Wechselrichter wandelt zu netzkonformem AC.'
  },
  {
    id: 'lv42', path: 'lehrling-vde', category: 'E-Mobilität',
    question: 'Welcher Bemessungsstrom liefert eine 22-kW-Wallbox am Drehstromnetz (400 V)?',
    options: ['16 A', '20 A', '25 A', '32 A'],
    correct: 3,
    explain: 'P = √3 · U · I → 22 000 = 1,732 · 400 · I → I ≈ 32 A. Daher 32-A-CEE oder Typ-2-Stecker, 5×6 mm² Cu.'
  },
  {
    id: 'lv43', path: 'lehrling-vde', category: 'Schutzeinrichtungen',
    question: 'Wofür ist ein RCD Typ A geeignet?',
    options: ['Nur reine Gleichfehlerströme',
             'Sinusförmige Wechselfehlerströme und pulsierende Gleichfehlerströme',
             'Nur Hochfrequenzfehlerströme',
             'Nur Drehstromsysteme'],
    correct: 1,
    explain: 'Typ A erfasst sinusförmige AC-Fehlerströme und pulsierende DC-Fehlerströme – Standard im Wohnbau. Glatte DC-Anteile (z. B. an Wechselrichtern) braucht Typ B oder Typ-A + RDC-DD.'
  },
  {
    id: 'lv44', path: 'lehrling-vde', category: 'E-Mobilität',
    question: 'Was bedeutet RDC-DD im Kontext von Ladeeinrichtungen für E-Autos?',
    options: ['Eine Lade-Ladekurve',
             'Residual DC Detection Device – erkennt glatte Gleichfehlerströme ≥ 6 mA',
             'Ein Drehstromschalter',
             'Ein Energie-Messgerät'],
    correct: 1,
    explain: 'RDC-DD ist ein DC-Fehlerstromdetektor in Wallboxen. So darf ein RCD Typ A vorgeschaltet werden statt eines teureren Typ-B-RCD.'
  },
  {
    id: 'lv45', path: 'lehrling-vde', category: 'Bad',
    question: 'Was beschreibt im Bad der Schutzbereich 0?',
    options: ['Den Bereich oberhalb der Wanne bis 2,25 m',
             'Den Innenraum von Wanne oder Dusche selbst',
             '60 cm seitlich der Wanne',
             'Den Außenbereich des Bades'],
    correct: 1,
    explain: 'Schutzbereich 0 = Innenraum Wanne/Dusche. Hier nur SELV ≤ 12 V AC bzw. 30 V DC mit Schutzart IPx7.'
  },
  {
    id: 'lv46', path: 'lehrling-vde', category: 'Bad',
    question: 'Welche Mindest-Schutzart muss eine Leuchte im Schutzbereich 1 (über der Wanne, bis 2,25 m) erfüllen?',
    options: ['IP20', 'IPx4 (spritzwassergeschützt)', 'IP65', 'IPx7'],
    correct: 1,
    explain: 'Schutzbereich 1: mindestens IPx4. Versorgung über RCD ≤ 30 mA. Schutzbereich 0 dagegen IPx7 + SELV.'
  },
  {
    id: 'lv47', path: 'lehrling-vde', category: 'Normen',
    question: 'Was regelt die DIN VDE 0100-410?',
    options: ['Schutz gegen elektrischen Schlag (Basis-/Fehler-/Zusatzschutz)',
             'Schutz gegen Überstrom',
             'Schutz gegen thermische Einwirkungen',
             'Schutz gegen Überspannungen'],
    correct: 0,
    explain: 'VDE 0100-410: Schutzmaßnahmen gegen elektrischen Schlag – Grundnorm für Schutzarten, Schutzklassen, Trennung, Hindernisse, Erdung.'
  },
  {
    id: 'lv48', path: 'lehrling-vde', category: 'Schutzeinrichtungen',
    question: 'Wann sind zwei in Reihe liegende LS-Schalter (vorgelagert 35 A B / nachgelagert 16 A B) bei einem Kurzschluss selektiv?',
    options: ['Immer',
             'Nur eingeschränkt – verlässliche Selektivität meist erst über die Hersteller-Selektivitätstabellen oder mit deutlich „trägerer" Vorsicherung (z. B. NH)',
             'Nie',
             'Nur bei Gleichstromkreisen'],
    correct: 1,
    explain: 'LS-Schalter unterscheiden sich nur über Charakteristik & Bemessungsstrom; im Kurzschlussfall lösen oft beide gleichzeitig aus. Selektivität benötigt Hersteller-Tabellen oder andere Kombinationen (z. B. NH vor LS).'
  },
  {
    id: 'lv49', path: 'lehrling-vde', category: 'Leiter',
    question: 'Was kennzeichnet die Bezeichnung „PE"?',
    options: ['Phasenleiter', 'Schutzleiter (Protective Earth)', 'Neutralleiter', 'Hilfserdung'],
    correct: 1,
    explain: 'PE = Protective Earth, deutscher Begriff: Schutzleiter. Aderfarbe grün-gelb.'
  },
  {
    id: 'lv50', path: 'lehrling-vde', category: 'Prüfung',
    question: 'In welchem Intervall werden ortsveränderliche Geräte auf Baustellen (DGUV V3) typischerweise geprüft?',
    options: ['Alle 3 Monate', 'Alle 6 Monate', 'Jährlich', 'Alle 4 Jahre'],
    correct: 0,
    explain: 'DGUV V3 / TRBS: auf Baustellen je nach Beanspruchung üblicherweise alle 3 Monate. In Büros bis zu 24 Monate, festgelegt durch Gefährdungsbeurteilung.'
  },
  {
    id: 'lv51', path: 'lehrling-vde', category: 'Werkzeug',
    question: 'Was kennzeichnet 1000-V-isoliertes Werkzeug?',
    options: ['Ein orangener Aufkleber',
             'Doppeldreieck-Symbol mit Spannungsangabe (z. B. „1000 V") nach IEC 60900 und VDE-Logo',
             'Eine Seriennummer',
             'Eine Erdungsklemme'],
    correct: 1,
    explain: 'Doppeldreieck mit Blitz und Spannungsangabe (z. B. 1000 V), geprüft nach IEC 60900 – Pflicht beim Arbeiten unter Spannung.'
  },
  {
    id: 'lv52', path: 'lehrling-vde', category: 'Werkzeug',
    question: 'Was tut man vor jedem Einsatz mit isoliertem Werkzeug?',
    options: ['Funktionsprüfung mit 1000 V',
             'Sichtprüfung auf Beschädigungen der Isolierung',
             'Reinigen mit Lösungsmittel',
             'Aufladen'],
    correct: 1,
    explain: 'Vor jedem Einsatz Sichtkontrolle: Risse, Beschädigungen, Verformung der Isolierung – sonst aussortieren.'
  },
  {
    id: 'lv53', path: 'lehrling-vde', category: 'Personen',
    question: 'Wer darf in Mittelspannungsanlagen schalten?',
    options: ['Jede Elektrofachkraft',
             'Nur Personen mit ausdrücklicher Schaltberechtigung des Anlagenbetreibers',
             'Nur Meister',
             'Nur Mitarbeiter des Netzbetreibers'],
    correct: 1,
    explain: 'Mittel- und Hochspannungsanlagen erfordern eine ausdrückliche Schaltberechtigung des Anlagenbetreibers, zusätzlich zur EFK-Qualifikation.'
  },

  // ====== MEISTER ======
  {
    id: 'm01', path: 'meister', category: 'Recht – HwO',
    question: 'Was regelt die Handwerksordnung (HwO)?',
    options: ['Tarifverträge im Handwerk',
             'Den Aufbau und die Ordnung des deutschen Handwerks',
             'Nur die Meisterprüfung',
             'Steuerrecht für Handwerker'],
    correct: 1,
    explain: 'Die HwO regelt Berufszugang (Anlage A/B), Handwerkskammern, Innungen, Meisterprüfung und Berufsausbildung im Handwerk.'
  },
  {
    id: 'm02', path: 'meister', category: 'Recht – HwO',
    question: 'Was findet sich in Anlage A der HwO?',
    options: ['Zulassungspflichtige Handwerke (Meisterpflicht)',
             'Zulassungsfreie Handwerke',
             'Liste der Innungen',
             'Liste der Tarifverträge'],
    correct: 0,
    explain: 'Anlage A = zulassungspflichtige Handwerke (Meisterzwang), z. B. Elektrotechniker. Anlage B1 = zulassungsfrei, B2 = handwerksähnlich.'
  },
  {
    id: 'm03', path: 'meister', category: 'Recht – BBiG',
    question: 'Wie lange darf die Probezeit in einem Ausbildungsverhältnis maximal dauern?',
    options: ['1 Monat', '4 Monate', '6 Monate', '1 Jahr'],
    correct: 1,
    explain: '§ 20 BBiG: Mindestens 1, maximal 4 Monate. In der Probezeit kann beidseitig fristlos gekündigt werden.'
  },
  {
    id: 'm04', path: 'meister', category: 'Recht – BBiG',
    question: 'Wie lange dauert die Regelausbildungszeit zum Elektroniker für Energie- und Gebäudetechnik?',
    options: ['2 Jahre', '3 Jahre', '3,5 Jahre', '4 Jahre'],
    correct: 2,
    explain: 'Regelausbildungszeit: 3,5 Jahre (42 Monate). Verkürzung möglich.'
  },
  {
    id: 'm05', path: 'meister', category: 'Recht',
    question: 'Was ist der wesentliche Inhalt der VOB Teil B?',
    options: ['Vergaberegeln',
             'Allgemeine Vertragsbedingungen für Bauleistungen',
             'Technische Normen',
             'Steuersätze für Bauleistungen'],
    correct: 1,
    explain: 'VOB/B enthält die Allgemeinen Vertragsbedingungen für die Ausführung von Bauleistungen (Pendant zu BGB-Werkvertrag).'
  },
  {
    id: 'm06', path: 'meister', category: 'Betriebsführung',
    question: 'Wie ist der Deckungsbeitrag definiert?',
    options: ['Erlös – Fixkosten',
             'Erlös – variable Kosten',
             'Gewinn + Steuern',
             'Umsatz – Umsatzsteuer'],
    correct: 1,
    explain: 'Deckungsbeitrag = Erlös – variable Kosten. Er „deckt" Fixkosten und trägt zum Gewinn bei.'
  },
  {
    id: 'm07', path: 'meister', category: 'Betriebsführung',
    question: 'Was sind Fixkosten?',
    options: ['Kosten, die mit der Produktionsmenge steigen',
             'Kosten, die unabhängig von der Produktionsmenge anfallen',
             'Kosten für Rohstoffe',
             'Kosten für Akkordlohn'],
    correct: 1,
    explain: 'Fixkosten fallen mengenunabhängig an: Miete, Versicherungen, Abschreibungen, Gehälter (im Wesentlichen).'
  },
  {
    id: 'm08', path: 'meister', category: 'Betriebsführung',
    question: 'Was bedeutet ROI?',
    options: ['Return on Investment – Kapitalrendite',
             'Rate of Inflation', 'Result of Income', 'Recurring Operating Income'],
    correct: 0,
    explain: 'ROI = Gewinn / eingesetztes Kapital · 100 %. Misst die Rentabilität des eingesetzten Kapitals.'
  },
  {
    id: 'm09', path: 'meister', category: 'Betriebsführung',
    question: 'Was zeigt eine Gewinn- und Verlustrechnung (GuV)?',
    options: ['Vermögensbestand zum Stichtag',
             'Erträge und Aufwendungen einer Periode',
             'Liquidität',
             'Kundenforderungen'],
    correct: 1,
    explain: 'Die GuV stellt Erträge und Aufwendungen einer Periode gegenüber und ermittelt Gewinn oder Verlust. Bilanz hingegen = Vermögen/Schulden zum Stichtag.'
  },
  {
    id: 'm10', path: 'meister', category: 'Betriebsführung',
    question: 'Wie wird ein Stundenverrechnungssatz grundsätzlich gebildet?',
    options: ['Materialkosten / Stunden',
             'Lohnkosten + Gemeinkostenzuschläge + Gewinn / produktive Stunden',
             'Nur Bruttogehalt durch Stunden',
             'Nettoumsatz / Anzahl Mitarbeiter'],
    correct: 1,
    explain: 'Lohnkosten je produktiver Stunde + Gemeinkosten + Gewinn-/Wagniszuschlag = kalkulatorischer Stundenverrechnungssatz.'
  },
  {
    id: 'm11', path: 'meister', category: 'AdA – Pädagogik',
    question: 'Wofür steht „AdA"?',
    options: ['Akademie der Ausbilder',
             'Ausbildung der Ausbilder',
             'Allgemeine deutsche Ausbildung',
             'Ausbilder im dualen Ausbildungssystem'],
    correct: 1,
    explain: 'AdA = „Ausbildung der Ausbilder". Voraussetzung für die Ausbildereignung nach AEVO/BBiG.'
  },
  {
    id: 'm12', path: 'meister', category: 'AdA – Pädagogik',
    question: 'Wie lauten die Schritte der 4-Stufen-Methode in der Ausbildung?',
    options: ['Vorbereiten – Vormachen – Nachmachen – Üben',
             'Erklären – Vormachen – Korrigieren – Bewerten',
             'Planen – Demonstrieren – Prüfen – Wiederholen',
             'Lesen – Hören – Sehen – Tun'],
    correct: 0,
    explain: 'Klassische 4-Stufen-Methode: Vorbereiten (Lernort, Auszubildender), Vormachen (Vorbild), Nachmachen (geführt), Üben (selbstständig).'
  },
  {
    id: 'm13', path: 'meister', category: 'AdA – Pädagogik',
    question: 'Welche drei Lernzielarten unterscheidet man in der Pädagogik?',
    options: ['kognitiv – affektiv – psychomotorisch',
             'theoretisch – praktisch – sozial',
             'kurz – mittel – lang',
             'fachlich – methodisch – sozial'],
    correct: 0,
    explain: 'Lernzielbereiche: kognitiv (Wissen/Denken), affektiv (Einstellung/Werte), psychomotorisch (Fertigkeiten/Bewegung).'
  },
  {
    id: 'm14', path: 'meister', category: 'Fachtheorie',
    question: 'Was bedeutet „Selektivität" in der Schutztechnik?',
    options: ['Nur die nächstgelegene Sicherung im Fehlerstromkreis löst aus',
             'Alle Sicherungen lösen gleichzeitig aus',
             'Sicherung mit höchstem Nennstrom löst zuerst aus',
             'Nur Hauptschalter löst aus'],
    correct: 0,
    explain: 'Selektivität: Im Fehlerfall trennt nur die unmittelbar dem Fehler vorgelagerte Schutzeinrichtung – Rest der Anlage bleibt versorgt.'
  },
  {
    id: 'm15', path: 'meister', category: 'Fachtheorie – Leistung',
    question: 'Was ist Blindleistung?',
    options: ['Wirklich verbrauchte Leistung in Wärme',
             'Leistung, die zwischen Erzeuger und Verbraucher hin- und herpendelt (Spulen/Kondensatoren)',
             'Leistung, die das Netz verlässt',
             'Geometrische Summe aus Wirk- und Scheinleistung'],
    correct: 1,
    explain: 'Blindleistung Q entsteht in induktiven oder kapazitiven Verbrauchern. Sie wird nicht in Arbeit umgesetzt, belastet aber das Netz.'
  },
  {
    id: 'm16', path: 'meister', category: 'Fachtheorie – Leistung',
    question: 'In welcher Einheit wird Blindleistung angegeben?',
    options: ['Watt (W)', 'Var (var)', 'Voltampere (VA)', 'Joule (J)'],
    correct: 1,
    explain: 'Blindleistung Q wird in Var (Voltampere reaktiv) angegeben. Wirkleistung in W, Scheinleistung in VA.'
  },
  {
    id: 'm17', path: 'meister', category: 'Fachtheorie – Leistung',
    question: 'Was ist Wirkleistung?',
    options: ['Tatsächlich in Arbeit/Wärme umgesetzte Leistung (P, in W)',
             'Leistung, die zwischen Erzeuger und Verbraucher pendelt',
             'Geometrische Summe aller Leistungen',
             'Leistung der Sicherungen'],
    correct: 0,
    explain: 'Wirkleistung P: Anteil, der tatsächlich in nützliche Arbeit oder Wärme umgesetzt wird. Einheit Watt.'
  },
  {
    id: 'm18', path: 'meister', category: 'Fachtheorie – Leistung',
    question: 'Was beschreibt die Scheinleistung S?',
    options: ['Differenz aus Blind- und Wirkleistung',
             'Geometrische Summe aus Wirk- und Blindleistung (S² = P² + Q²)',
             'Nur den Blindanteil',
             'Nur den Wirkanteil'],
    correct: 1,
    explain: 'Scheinleistung S = √(P² + Q²) in VA. cos φ = P / S.'
  },
  {
    id: 'm19', path: 'meister', category: 'Fachtheorie – Leistung',
    question: 'Was sagt der Leistungsfaktor cos φ aus?',
    options: ['Verhältnis Wirk- zu Scheinleistung',
             'Verhältnis Spannung zu Strom',
             'Verhältnis Wirk- zu Blindleistung',
             'Verhältnis Strom zu Frequenz'],
    correct: 0,
    explain: 'cos φ = P / S. Je näher an 1, desto mehr nutzbare Wirkleistung gegenüber Scheinleistung.'
  },
  {
    id: 'm20', path: 'meister', category: 'Recht – BGB',
    question: 'Was regelt das BGB im Bereich Werkvertrag (§ 631 ff.)?',
    options: ['Arbeitsverhältnis zwischen AG und AN',
             'Herstellung eines Werkes gegen Vergütung – Erfolg geschuldet',
             'Mietverhältnisse', 'Versicherungsverträge'],
    correct: 1,
    explain: 'Werkvertrag (§§ 631 ff. BGB): Werkunternehmer schuldet einen Erfolg, nicht nur Tätigkeit. Standard für Handwerksleistungen.'
  },
  {
    id: 'm21', path: 'meister', category: 'Betriebsführung',
    question: 'Was ist der Break-even-Point?',
    options: ['Punkt, an dem Erlöse die Gesamtkosten decken (Gewinnschwelle)',
             'Punkt der maximalen Auslastung',
             'Punkt der Marktsättigung',
             'Punkt höchster Liquidität'],
    correct: 0,
    explain: 'Break-even (Gewinnschwelle): Umsatz = Gesamtkosten. Ab hier macht der Betrieb Gewinn. x = Fixkosten / Deckungsbeitrag pro Stück.'
  },
  {
    id: 'm22', path: 'meister', category: 'Fachtheorie',
    question: 'Welche Aufgabe hat eine Blindstromkompensation?',
    options: ['Reduziert Wirkleistung',
             'Reduziert die übertragene Blindleistung im Netz, verbessert cos φ',
             'Erhöht die Spannung',
             'Verringert die Frequenz'],
    correct: 1,
    explain: 'Mit Kompensationskondensatoren wird induktive Blindleistung lokal kompensiert – cos φ steigt, Netzbelastung und Verluste sinken.'
  },
  {
    id: 'm23', path: 'meister', category: 'Steuern',
    question: 'Wie hoch ist der Regelsteuersatz der Umsatzsteuer (USt) in Deutschland?',
    options: ['7 %', '16 %', '19 %', '21 %'],
    correct: 2,
    explain: 'Regelsteuersatz USt: 19 %. Ermäßigt: 7 % (z. B. Lebensmittel, Bücher, Personennahverkehr).'
  },
  {
    id: 'm24', path: 'meister', category: 'Steuern',
    question: 'Was bezeichnet man im USt-System als „Vorsteuer"?',
    options: ['Steuer auf Vorräte',
             'Die in eingehenden Eingangsrechnungen ausgewiesene USt, die der Unternehmer abziehen kann',
             'Steuer auf Privatentnahmen',
             'Eine Vorauszahlung der Einkommensteuer'],
    correct: 1,
    explain: 'Vorsteuer = die in Eingangsrechnungen ausgewiesene USt. Wird mit der eigenen USt-Schuld verrechnet (Vorsteuerabzug).'
  },
  {
    id: 'm25', path: 'meister', category: 'Kostenrechnung',
    question: 'Was sind Einzelkosten?',
    options: ['Kosten, die einem einzelnen Kostenträger direkt zurechenbar sind (z. B. Material für einen Auftrag)',
             'Kosten der Verwaltung',
             'Anteilige Mietkosten',
             'Kalkulatorische Kosten'],
    correct: 0,
    explain: 'Einzelkosten = direkt zurechenbar (Materialeinzelkosten, Fertigungslöhne). Gegensatz: Gemeinkosten, die nur über Schlüssel verteilt werden.'
  },
  {
    id: 'm26', path: 'meister', category: 'Kostenrechnung',
    question: 'Was sind Gemeinkosten?',
    options: ['Direkt zurechenbare Kosten',
             'Kosten, die mehreren Kostenträgern gemeinsam zuzurechnen sind und nur über Schlüssel verteilt werden',
             'Nur Personalkosten',
             'Nur Materialkosten'],
    correct: 1,
    explain: 'Gemeinkosten (Miete, Verwaltung, Strom für Werkstatt) werden über Zuschlagssätze (z. B. Materialgemeinkosten-Zuschlag) auf Kostenträger umgelegt.'
  },
  {
    id: 'm27', path: 'meister', category: 'Kostenrechnung',
    question: 'Was ist ein Betriebsabrechnungsbogen (BAB)?',
    options: ['Ein gesetzlich vorgeschriebenes Steuerformular',
             'Ein Hilfsmittel der Kostenrechnung zur Verteilung der Gemeinkosten auf Kostenstellen',
             'Eine Rechnung an den Kunden',
             'Ein Berichtsformular der Berufsschule'],
    correct: 1,
    explain: 'Im BAB werden alle Gemeinkosten den Kostenstellen zugeordnet, primäre und sekundäre Verteilung. Basis für Zuschlagssätze.'
  },
  {
    id: 'm28', path: 'meister', category: 'Kalkulation',
    question: 'Welche Bestandteile fließen typischerweise in den kalkulatorischen Stundenverrechnungssatz ein?',
    options: ['Nur Bruttolohn',
             'Lohnkosten + Lohnnebenkosten + Gemeinkosten + Wagnis/Gewinn, geteilt durch produktive Stunden',
             'Materialkosten + USt',
             'Nur Material- und Stromkosten'],
    correct: 1,
    explain: 'Stundensatz = (Lohn + Lohnnebenkosten + anteilige Gemeinkosten + Wagnis + Gewinn) / produktive Stunden pro Mitarbeiter.'
  },
  {
    id: 'm29', path: 'meister', category: 'Marketing',
    question: 'Welche Elemente bilden die „4P" im klassischen Marketing-Mix?',
    options: ['Produkt, Preis, Platz (Distribution), Promotion',
             'Personen, Prozesse, Produktion, Profit',
             'Plan, Programm, Prüfung, Praxis',
             'Privat, Produktion, Pflicht, Plan'],
    correct: 0,
    explain: 'Klassische 4P (McCarthy): Product, Price, Place, Promotion. Erweitert für Dienstleistungen: + People, Process, Physical Evidence (= 7P).'
  },
  {
    id: 'm30', path: 'meister', category: 'Strategie',
    question: 'Was bedeutet SWOT?',
    options: ['Strategy, Work, Output, Time',
             'Strengths, Weaknesses, Opportunities, Threats (Stärken, Schwächen, Chancen, Risiken)',
             'Sales, Workflow, Office, Tax',
             'Standard, Workforce, Output, Tools'],
    correct: 1,
    explain: 'SWOT-Analyse: interne Stärken/Schwächen + externe Chancen/Risiken. Klassisches Strategiewerkzeug.'
  },
  {
    id: 'm31', path: 'meister', category: 'Personalführung',
    question: 'Welche drei klassischen Führungsstile (Kurt Lewin) unterscheidet man?',
    options: ['demokratisch, sozial, technisch',
             'autoritär, kooperativ (demokratisch), laissez-faire',
             'agil, klassisch, hybrid',
             'top-down, bottom-up, matrix'],
    correct: 1,
    explain: 'Lewin (1939): autoritär (Chef entscheidet), kooperativ/demokratisch (Team einbezogen), laissez-faire (Team entscheidet selbst, Chef passiv).'
  },
  {
    id: 'm32', path: 'meister', category: 'Rechnungswesen',
    question: 'Worin unterscheiden sich „Kosten" und „Aufwand"?',
    options: ['Es gibt keinen Unterschied',
             'Aufwand = gesamter Werteverzehr (auch betriebsfremd, außerordentlich); Kosten = nur betrieblich notwendiger Werteverzehr',
             'Kosten enthalten Steuern, Aufwand nicht',
             'Aufwand ist immer kalkulatorisch'],
    correct: 1,
    explain: 'Aufwand kommt aus der Finanzbuchhaltung (auch betriebsfremder, außerordentlicher), Kosten aus der Kostenrechnung (nur sachzielbezogen).'
  },
  {
    id: 'm33', path: 'meister', category: 'Recht – BBiG',
    question: 'Wann endet ein Berufsausbildungsverhältnis vorzeitig nach BBiG?',
    options: ['Mit Bestehen der Abschlussprüfung (auch vor vereinbartem Ende)',
             'Erst zum vereinbarten Vertragsende',
             'Mit dem 21. Geburtstag',
             'Niemals vorzeitig'],
    correct: 0,
    explain: '§ 21 BBiG: Mit Bestehen der Abschlussprüfung endet das Ausbildungsverhältnis – auch vor dem vertraglichen Ende.'
  },
  {
    id: 'm34', path: 'meister', category: 'Recht – BBiG',
    question: 'Welche Regelung gilt seit 2020 für die Vergütung in der dualen Berufsausbildung?',
    options: ['Frei verhandelbar ohne Untergrenze',
             'Es gibt eine gesetzliche Mindestausbildungsvergütung, jährlich gestaffelt nach Ausbildungsjahr',
             'Pauschal 1000 €/Monat',
             'Nur tarifvertraglich geregelt'],
    correct: 1,
    explain: '§ 17 BBiG: Mindestausbildungsvergütung gilt seit 2020. Höhe steigt jährlich; je nach Ausbildungsjahr Aufschläge (18 %, 35 %, 40 %).'
  },
  {
    id: 'm35', path: 'meister', category: 'Berufsbildung',
    question: 'Welche Lernorte koordiniert die duale Berufsausbildung primär?',
    options: ['Betrieb und Berufsschule (ggf. ÜBA)',
             'Nur den Betrieb',
             'Nur die Schule',
             'Online und Präsenz'],
    correct: 0,
    explain: 'Klassisch dual: Betrieb + Berufsschule. Bei Bedarf überbetriebliche Ausbildung (ÜBA) z. B. in HwK-Bildungszentren.'
  },
  {
    id: 'm36', path: 'meister', category: 'Rechnungswesen',
    question: 'Worin unterscheiden sich Bilanz und Gewinn- und Verlustrechnung (GuV)?',
    options: ['Bilanz und GuV sind dasselbe',
             'Bilanz = Vermögen/Schulden zum Stichtag (Bestandsgrößen); GuV = Erträge/Aufwendungen einer Periode (Stromgrößen)',
             'GuV ist ein Teil der Bilanz',
             'Beide zeigen nur Liquidität'],
    correct: 1,
    explain: 'Bilanz = Stichtagsbetrachtung (Bestandskonten). GuV = Periodenbetrachtung (Erfolgskonten). Beide gemeinsam Pflichtbestandteile des Jahresabschlusses (HGB).'
  },
  {
    id: 'm37', path: 'meister', category: 'Recht – BGB',
    question: 'Was unterscheidet einen Werkvertrag von einem Dienstvertrag?',
    options: ['Werkvertrag schuldet Erfolg, Dienstvertrag schuldet Tätigkeit',
             'Beide schulden Erfolg',
             'Werkvertrag ist mündlich, Dienstvertrag schriftlich',
             'Es ist nur ein Begriff für dasselbe'],
    correct: 0,
    explain: 'Werkvertrag (§ 631 ff. BGB): Werkunternehmer schuldet einen mangelfreien Erfolg. Dienstvertrag (§ 611 BGB): nur die Tätigkeit, keinen Erfolg.'
  },
  {
    id: 'm38', path: 'meister', category: 'Recht – BGB',
    question: 'Wie lange beträgt die regelmäßige Gewährleistungsfrist bei Werkleistungen am Bauwerk nach BGB?',
    options: ['1 Jahr', '2 Jahre', '5 Jahre', '10 Jahre'],
    correct: 2,
    explain: '§ 634a BGB: Werkleistungen an einem Bauwerk → 5 Jahre. Andere Werkverträge i. d. R. 2 Jahre.'
  },
  {
    id: 'm39', path: 'meister', category: 'Recht – VOB',
    question: 'Wie lange beträgt die Gewährleistungsfrist bei VOB-Bauverträgen für Bauleistungen?',
    options: ['2 Jahre', '4 Jahre', '5 Jahre', '10 Jahre'],
    correct: 1,
    explain: 'VOB/B § 13 Abs. 4: Gewährleistung Bauwerke 4 Jahre (kürzer als BGB!). Maschinelle/elektrotechnische Anlagen 2 Jahre.'
  },
  {
    id: 'm40', path: 'meister', category: 'Energie',
    question: 'Ab welcher Anlagengröße sind Erzeugungsanlagen (z. B. PV) beim Netzbetreiber typischerweise im vereinfachten Verfahren anschließbar?',
    options: ['Nur ab 100 kWp',
             'Bis 30 kWp im vereinfachten Anschlussverfahren – jede Anlage ist aber anmeldepflichtig',
             'Nur ab 1 MW',
             'Nur Inselanlagen'],
    correct: 1,
    explain: 'Jede netzgekoppelte Erzeugungsanlage muss beim Netzbetreiber angemeldet werden. Vereinfachtes Verfahren bis 30 kWp; darüber Anschlussbegehren mit Berechnungen.'
  },
  {
    id: 'm41', path: 'meister', category: 'Energie',
    question: 'Wann ist nach GEG (Gebäudeenergiegesetz) ein Energieausweis vorzulegen?',
    options: ['Nur bei Neubau',
             'Bei Verkauf, Vermietung oder Verpachtung von Gebäuden – unaufgefordert',
             'Nur bei öffentlichen Gebäuden',
             'Nur auf Anforderung der Bauaufsicht'],
    correct: 1,
    explain: 'GEG § 80: Energieausweis muss bei Verkauf, Vermietung oder Verpachtung dem Interessenten unaufgefordert vorgelegt werden – Bedarfs- oder Verbrauchsausweis.'
  },
  {
    id: 'm42', path: 'meister', category: 'Fachtheorie',
    question: 'Welche Sicherungspaarung ist tendenziell selektiv?',
    options: ['Vorgelagerter NH-Sicherungseinsatz vor nachgelagertem LS-Schalter mit deutlich kleinerem Bemessungsstrom',
             'Zwei LS-Schalter gleichen Typs in Reihe',
             'Zwei NH-Sicherungen gleicher Größe in Reihe',
             'RCD vor LS gleicher Bemessungsgröße'],
    correct: 0,
    explain: 'Selektivität: vorgelagert träge NH-Sicherung mit deutlich höherem Bemessungsstrom, nachgelagert flinker LS – nur der LS löst aus, NH bleibt drin. Verhältnis nach Herstellertabelle.'
  },
  {
    id: 'm43', path: 'meister', category: 'Anschluss',
    question: 'Was regelt die VDE-AR-N 4100 / die TAB der Netzbetreiber?',
    options: ['Verlegearten von Leitungen',
             'Anschluss elektrischer Anlagen an das Niederspannungsnetz (Zählerplatz, HAK, Anmeldeverfahren)',
             'Photovoltaik-Module',
             'Elektrowerkzeug'],
    correct: 1,
    explain: 'VDE-AR-N 4100 / Technische Anschlussbedingungen (TAB) der Netzbetreiber regeln Hausanschluss, Zählerplatz, Anmeldungen, Wandlermessungen etc.'
  },
  {
    id: 'm44', path: 'meister', category: 'Personalführung',
    question: 'Welche Kriterien sind bei der Personalauswahl rechtlich besonders sensibel (AGG)?',
    options: ['Berufserfahrung',
             'Diskriminierungsmerkmale wie Alter, Geschlecht, Religion, Behinderung, ethnische Herkunft, sexuelle Identität',
             'Wohnortnähe',
             'Gehaltsvorstellung'],
    correct: 1,
    explain: 'AGG (Allgemeines Gleichbehandlungsgesetz) verbietet Diskriminierung bei Auswahl/Beschäftigung wegen Alter, Geschlecht, Religion etc. Stellenausschreibungen müssen neutral formuliert sein (z. B. m/w/d).'
  },
  {
    id: 'm45', path: 'meister', category: 'Recht – HwO',
    question: 'Was ist der Unterschied zwischen Innung und Handwerkskammer?',
    options: ['Es gibt keinen Unterschied',
             'Innung = freiwillige berufsständische Vereinigung eines Handwerks; HwK = öffentlich-rechtliche Körperschaft mit Pflichtmitgliedschaft aller Handwerksbetriebe',
             'Innung ist die Pflichtmitgliedschaft, HwK freiwillig',
             'Innung ist die Berufsschule, HwK die Prüfungsstelle'],
    correct: 1,
    explain: 'HwK = Pflichtmitgliedschaft, regelt Ausbildung, Prüfungen, Eintragung. Innung = freiwilliger Zusammenschluss von Betrieben gleichen Handwerks zur Interessenvertretung.'
  },

  // ====== PU003 – Arbeitssicherheit (Innungs-Testfragen) ======
  {
    id: 'pu003-001', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Für wen sind die Unfallverhütungsvorschriften verbindlich?',
    options: ['Für Unternehmen und versicherte Personen', 'Nur für Unternehmerinnen und Unternehmer', 'Nur für Vorgesetzte', 'Nur für Auszubildende', 'Für alle Einwohner der Bundesrepublik Deutschland'],
    correct: 0,
    explain: 'Richtig: A) Für Unternehmen und versicherte Personen'
  },
  {
    id: 'pu003-002', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Rechtskraft haben Unfallverhütungsvorschriften?',
    options: ['Unfallverhütungsvorschriften sind Empfehlungen', 'Unfallverhütungsvorschriften sind Regeln der Technik', 'Unfallverhütungsvorschriften sind Richtlinien zur Vermeidung von Unfällen', 'Unfallverhütungsvorschriften sind Verordnungen des Staates', 'Unfallverhütungsvorschriften sind autonome Rechtsvorschriften der gesetzlichen Unfallversicherung, die für die Mitgliedsbetriebe verbindlich sind'],
    correct: 4,
    explain: 'Richtig: E) Unfallverhütungsvorschriften sind autonome Rechtsvorschriften der gesetzlichen Unfallversicherung, die für die Mitgliedsbetriebe verbindlich sind'
  },
  {
    id: 'pu003-003', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Wer ist für die Arbeitssicherheit im Betrieb verantwortlich?',
    options: ['Sicherheitsfachkräfte', 'Sicherheitsbeauftragte', 'Unternehmerinnen und Unternehmer', 'Betriebsrat', 'Alle Beschäftigten im Betrieb'],
    correct: 2,
    explain: 'Richtig: C) Unternehmerinnen und Unternehmer'
  },
  {
    id: 'pu003-004', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Unterweisung von Beschäftigten über die Unfallgefahren im Betrieb',
    options: ['Unterweisung ist bei der Einstellung notwendig', 'Unterweisung ist nur bei Auszubildenden notwendig', 'Unterweisung sollte nach einigen Jahren wiederholt werden', 'alle Beschäftigten müssen mindestens einmal jährlich unterwiesen werden', 'Auf die Unterweisung kann verzichtet werden, wenn die Unfallverhütungsvorschriften im Betrieb ausliegen'],
    correct: [0, 3],
    explain: 'Richtig: A) Unterweisung ist bei der Einstellung notwendig · D) alle Beschäftigten müssen mindestens einmal jährlich unterwiesen werden'
  },
  {
    id: 'pu003-005', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Wann ist im Betrieb ein/e Sicherheitsbeauftragte/r zu bestellen?',
    options: ['In jedem Betrieb muss mindestens ein Sicherheitsbeauftragter bestellt werden', 'Hat der Betrieb eine Sicherheitsfachkraft bestellt, so erübrigt sich der oder die Sicherheitsbeauftragte', 'Sicherheitsbeauftragte müssen ab einer bestimmten, gesetzlich festgelegten Betriebsgröße bestellt werden'],
    correct: 2,
    explain: 'Richtig: C) Sicherheitsbeauftragte müssen ab einer bestimmten, gesetzlich festgelegten Betriebsgröße bestellt werden'
  },
  {
    id: 'pu003-006', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Aufgaben hat der oder die Sicherheitsbeauftragte im Betrieb?',
    options: ['Der oder die Sicherheitsbeauftragte muss die Aufgaben außerhalb der Arbeitszeit wahrnehmen', 'Der oder die Sicherheitsbeauftragte soll die Unternehmerinnen und Unternehmer bei der Durchführung der Unfallverhütung unterstützen', 'Der oder die Sicherheitsbeauftragte ist weisungsbefugt für die Anbringung von Schutzvorrichtungen', 'Der oder die Sicherheitsbeauftragte ist nur für die Organisation der Ersten Hilfe im Betrieb zuständig'],
    correct: 1,
    explain: 'Richtig: B) Der oder die Sicherheitsbeauftragte soll die Unternehmerinnen und Unternehmer bei der Durchführung der Unfallverhütung unterstützen'
  },
  {
    id: 'pu003-007', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Wann kann der Mitarbeiter bzw. die Mitarbeiterin im Außendienst der Berufsgenossenschaft (Aufsichtsperson nach §18 SGB VII) einen Betrieb besichtigen?',
    options: ['Nur nach vorheriger Anmeldung beim Unternehmen', 'Das Unternehmen muss die Aufsichtsperson zur Betriebsbesichtigung einladen', 'Der Betriebsrat muss mit der Betriebsbesichtigung einverstanden sein', 'Wenn die Betriebsbesichtigung den Arbeitsablauf beeinträchtigt, so muss die Besichtigung nach der Arbeitszeit stattfinden', 'Die Aufsichtsperson kann den Betrieb jederzeit zu den Betriebs- und Geschäftszeiten besichtigen'],
    correct: 4,
    explain: 'Richtig: E) Die Aufsichtsperson kann den Betrieb jederzeit zu den Betriebs- und Geschäftszeiten besichtigen'
  },
  {
    id: 'pu003-008', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Was muss ein Beschäftigter bzw. eine Beschäftigte tun, wenn er oder sie im Betrieb sicherheitstechnische Mängel feststellt?',
    options: ['Die Person beseitigt den Mangel, wenn sie dazu befugt ist. Andernfalls meldet sie den Mangel unverzüglich dem bzw. der Vorgesetzten', 'Die Person unternimmt nichts, da die Mängelbeseitigung Aufgabe des oder der Sicherheitsbeauftragten ist', 'Die Person beendet die begonnene Arbeit und unterrichtet dann den Betriebsrat von dem Mangel', 'Die Person beendet ihre angefangene Arbeit und beseitigt dann den Mangel'],
    correct: 0,
    explain: 'Richtig: A) Die Person beseitigt den Mangel, wenn sie dazu befugt ist. Andernfalls meldet sie den Mangel unverzüglich dem bzw. der Vorgesetzten'
  },
  {
    id: 'pu003-009', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Dürfen Schmuckstücke oder ähnliche Gegenstände bei der Arbeit getragen werden?',
    options: ['Ja, das ist immer zulässig.', 'Ja, wenn die oder der Beschäftigte die Ausbildung beendet hat', 'Ja, wenn diese Gegenstände nicht zu einer Gefährdung führen können', 'Ja, wenn es sich um nichtmetallische Gegenstände handelt', 'Nein'],
    correct: 2,
    explain: 'Richtig: C) Ja, wenn diese Gegenstände nicht zu einer Gefährdung führen können'
  },
  {
    id: 'pu003-010', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Dürfen scharfe und spitze Werkzeuge in der Kleidung getragen werden?',
    options: ['Ja, wenn bei Arbeiten auf erhöhtem Standort der oder die unterhalb Arbeitende einen Schutzhelm trägt', 'Ja, außer bei Arbeiten an unter Spannung stehenden Teilen', 'Ja, wenn der bzw. die Vorgesetzte dies duldet', 'Ja, wenn der bzw. die Beschäftigte volljährig ist', 'Nein, ausgenommen, wenn Schutzmaßnahmen eine Gefährdung während des Tragens ausschließen'],
    correct: 4,
    explain: 'Richtig: E) Nein, ausgenommen, wenn Schutzmaßnahmen eine Gefährdung während des Tragens ausschließen'
  },
  {
    id: 'pu003-011', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Eine Führungskraft bemerkt, dass sich ein Mitarbeiter in angetrunkenem Zustand befindet. Was muss die Führungskraft tun?',
    options: ['Die Führungskraft verwarnt die Person und lässt sie weiterarbeiten', 'Die Führungskraft beachtet diese Tatsache nicht, um das Betriebsklima nicht zu verschlechtern', 'Die Führungskraft schickt die Person nach Hause', 'Die Führungskraft unterbindet die Weiterarbeit und sorgt für einen sicheren Heimweg', 'Die Führungskraft schickt ihn ins nächste Krankenhaus, um eine Blutprobe entnehmen zu lassen'],
    correct: 3,
    explain: 'Richtig: D) Die Führungskraft unterbindet die Weiterarbeit und sorgt für einen sicheren Heimweg'
  },
  {
    id: 'pu003-012', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Was ist beim Aufstellen eines Bildschirmgerätes zu beachten?',
    options: ['Der Bildschirm ist so auszurichten, dass die Blickrichtung der Bedienungsperson in Richtung auf das Fenster geht', 'Der Bildschirm ist so anzuordnen, dass das Tageslicht vom Fenster direkt darauf fällt', 'Der Bildschirm ist im 90°-Winkel quer zum Fenster aufzustellen', 'Die Auswahl und Anordnung der Beleuchtungskörper im Raum soll so sein, dass Reflexionen auf dem Bildschirm vermieden werden', 'Die Oberkanten des Bildschirms sollen nicht höher als in Augenhöhe der Bedienungsperson liegen'],
    correct: [2, 3, 4],
    explain: 'Richtig: C) Der Bildschirm ist im 90°-Winkel quer zum Fenster aufzustellen · D) Die Auswahl und Anordnung der Beleuchtungskörper im Raum soll so sein, dass Reflexionen auf dem Bildschirm vermieden werden · E) Die Oberkanten des Bildschirms sollen nicht höher als in Augenhöhe der Bedienungsperson liegen'
  },
  {
    id: 'pu003-013', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Was gehört zu den persönlichen Schutzausrüstungen?',
    options: ['Erste-Hilfe-Material', 'Arbeitskleidung', 'Isoliertes Werkzeug', 'Schutzhelm, Schutzschuhe, Schutzbrille, Gehörschutz', 'Reinigungsmaterial'],
    correct: 3,
    explain: 'Richtig: D) Schutzhelm, Schutzschuhe, Schutzbrille, Gehörschutz'
  },
  {
    id: 'pu003-014', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Wann sind persönliche Schutzausrüstungen vom Unternehmen zur Verfügung zu stellen und von den Beschäftigten zu benutzen?',
    options: ['Das ist nicht geregelt, da jeder selbst für seine Sicherheit verantwortlich ist', 'Nur in den durch Gebotszeichen gekennzeichneten Bereichen', 'Wenn sich Unfall- und Gesundheitsgefahren durch technische oder organisatorische Maßnahmen nicht beseitigen lassen', 'Nur wenn Unfall- und Gesundheitsgefahren länger als vier Stunden täglich auftreten', 'Nur wenn es von Vorgesetzten ausdrücklich angeordnet wird'],
    correct: 2,
    explain: 'Richtig: C) Wenn sich Unfall- und Gesundheitsgefahren durch technische oder organisatorische Maßnahmen nicht beseitigen lassen'
  },
  {
    id: 'pu003-015', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Bedeutung hat dieses Gebotszeichen?',
    options: ['Lärmbereich, in dem 85 dB(A), als Tages-Lärmexpositionspegel, erreicht oder überschritten werden', 'Maximale Aufenthaltsdauer von 1 Stunde', 'Hier müssen Gehörschutzmittel benutzt werden'],
    correct: [0, 2],
    explain: 'Richtig: A) Lärmbereich, in dem 85 dB(A), als Tages-Lärmexpositionspegel, erreicht oder überschritten werden · C) Hier müssen Gehörschutzmittel benutzt werden'
  },
  {
    id: 'pu003-016', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Beleuchtungsstärke ist an Büroarbeitsplätzen bei künstlicher Beleuchtung notwendig? (Arbeitsstättenregeln ASR A3.4, ASR A6)',
    options: ['200 Lux', '500 Lux', '1.000 Lux'],
    correct: 1,
    explain: 'Richtig: B) 500 Lux'
  },
  {
    id: 'pu003-017', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Was ist bei Verkehrswegen grundsätzlich zu beachten?',
    options: ['Stolperstellen bis zu einer Höhe von 3 cm brauchen nicht beachtet zu werden', 'Das kurzzeitige Abstellen von Kisten und Kartons auf Verkehrswegen ist erlaubt', 'Für die Beleuchtung von Verkehrswegen ist eine 25-Watt-Glühlampe ausreichend', 'Verkehrswege müssen ausreichend breit, ausreichend beleuchtet, Fußboden rutschhemmend und ohne Stolperstellen sein', 'Verkehrswege auf Baustellen sind von der Beleuchtungsregelung ausgenommen'],
    correct: 3,
    explain: 'Richtig: D) Verkehrswege müssen ausreichend breit, ausreichend beleuchtet, Fußboden rutschhemmend und ohne Stolperstellen sein'
  },
  {
    id: 'pu003-018', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Wie muss ein Notausgang beschaffen sein?',
    options: ['Ist der Notausgang aus betrieblichen Gründen verschlossen, so ist neben der Tür ein Kasten mit dem Türschlüssel notwendig', 'Notausgänge dürfen maximal 1 Stunde zugestellt werden', 'Vor Notausgängen dürfen nur leichte Gegenstände abgestellt werden', 'Türen im Verlauf von Rettungswegen müssen in Fluchtrichtung aufschlagen', 'Wenn die Notausgänge den Beschäftigten regelmäßig bekannt gemacht werden, ist eine besondere Kennzeichnung überflüssig'],
    correct: 3,
    explain: 'Richtig: D) Türen im Verlauf von Rettungswegen müssen in Fluchtrichtung aufschlagen'
  },
  {
    id: 'pu003-019', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Wie müssen Absturzstellen in einer Produktionshalle gesichert sein (ausgenommen während Bauarbeiten)?',
    options: ['Bei einer Absturzhöhe von 0,75 m ist ein Handlauf erforderlich', 'Müssen auf einem Lagerboden in 2,50 m Höhe nur gelegentlich Arbeiten ausgeführt werden, so kann auf eine Absturzsicherung verzichtet werden', 'An Arbeitsplätzen und auf Verkehrswegen in einer Höhe von 1,00 m ist ein Geländer von mindestens 0,90 m erforderlich', 'Arbeitsplätze und Verkehrswege, die mehr als 1,00 m über dem Boden liegen, müssen z.B. ein Geländer, bestehend aus Fußleiste, Knieleiste und Handlauf haben, von mindestens 1,00 m Höhe oder 1,10 m Höhe bei einer möglichen Absturzhöhe von mehr als 12 m', 'Bei Fußbodenluken ist eine Absturzsicherung nicht erforderlich, hierbei reichen Hinweisschilder'],
    correct: 3,
    explain: 'Richtig: D) Arbeitsplätze und Verkehrswege, die mehr als 1,00 m über dem Boden liegen, müssen z.B. ein Geländer, bestehend aus Fußleiste, Knieleiste und Handlauf haben, von mindestens 1,00 m Höhe oder 1,10 m Höhe bei einer möglichen Absturzhöhe von mehr als 12 m'
  },
  {
    id: 'pu003-020', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Maßnahmen sind zur Sicherstellung der Ersten Hilfe im Betrieb notwendig?',
    options: ['In Kleinbetrieben, auch bei nur einem oder einer Beschäftigten, muss ein Verbandkasten (C nach DIN 13157) bereitgehalten werden', 'In jedem Betrieb muss eine Anleitung zur Ersten Hilfe bei Unfällen entsprechend den jeweiligen Gefährdungen an geeigneter Stelle ausgehändigt sein', 'In jedem Betrieb müssen für die Erste-Hilfe-Leistung eine entsprechende Zahl von Ersthelfern, mind. jedoch ein Ersthelfer ab zwei anwesenden Beschäftigten, zur Verfügung stehen', 'Über jede Erste-Hilfe-Leistung müssen Aufzeichnungen geführt und mind. 5 Jahre datenschutzgerecht aufbewahrt werden', 'Auch in Kleinbetrieben mit weniger als 50 Beschäftigten muss ein Sanitätsraum vorhanden sein'],
    correct: [0, 1, 2, 3],
    explain: 'Richtig: A, B, C, D. Quelle: PU003 (Arbeitssicherheit, Innungs-Testfragen).'
  },
  {
    id: 'pu003-021', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Arbeitsmittel bieten für Arbeiten in der Höhe mehr Sicherheit als Leitern?',
    options: ['Hubarbeitsbühnen', 'Podeste', 'Feste Holzkisten', 'Gerüste'],
    correct: [0, 1, 3],
    explain: 'Richtig: A) Hubarbeitsbühnen · B) Podeste · D) Gerüste'
  },
  {
    id: 'pu003-022', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Merkmale hat eine sichere Stehleiter?',
    options: ['Die Stehleiter muss einen farbigen, deckenden Schutzanstrich haben', 'Die Stehleiter darf maximal acht Sprossenpaare haben', 'Oberhalb der Scharniere dürfen sich keine Widerlager bilden können und außerdem müssen Spreizsicherungen vorhanden sein', 'Stehleitern müssen auf beiden Holmpaaren mit Stufen versehen sein', 'Stehleitern müssen zum sicheren Aufstellen immer mit Gummi- oder Plastikfüßen versehen sein'],
    correct: 2,
    explain: 'Richtig: C) Oberhalb der Scharniere dürfen sich keine Widerlager bilden können und außerdem müssen Spreizsicherungen vorhanden sein'
  },
  {
    id: 'pu003-023', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Bedeutung hat dieses Zeichen bei einer Maschine?',
    options: ['Internationales Gütesiegel', 'Die Maschine ist in Europa hergestellt', 'Der Hersteller bestätigt in Verbindung mit der Konformitätserklärung, dass die Maschine alle Sicherheitsanforderungen nach der EG-Maschinenrichtlinie erfüllt', 'Hinweis auf Gefahrstellen'],
    correct: 2,
    explain: 'Richtig: C) Der Hersteller bestätigt in Verbindung mit der Konformitätserklärung, dass die Maschine alle Sicherheitsanforderungen nach der EG-Maschinenrichtlinie erfüllt'
  },
  {
    id: 'pu003-024', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Mit welcher der nachstehend genannten Maßnahmen lässt sich ein Höchstmaß an Sicherheit erreichen?',
    options: ['Technische Schutzeinrichtungen', 'Aufstellen von Betriebsanweisungen und ausführlicher Unterweisung der Beschäftigten', 'Tragen von Persönlicher Schutzausrüstung'],
    correct: 0,
    explain: 'Richtig: A) Technische Schutzeinrichtungen'
  },
  {
    id: 'pu003-025', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Wodurch können schwere Verletzungen beim Arbeiten an Maschinen verursacht werden?',
    options: ['Durch das Erfasstwerden von rotierenden Teilen', 'Durch Quetsch- und Scherstellen', 'Durch wegfliegende Werkstoffe, Werkstücke oder Späne'],
    correct: [0, 1, 2],
    explain: 'Richtig: A) Durch das Erfasstwerden von rotierenden Teilen · B) Durch Quetsch- und Scherstellen · C) Durch wegfliegende Werkstoffe, Werkstücke oder Späne'
  },
  {
    id: 'pu003-026', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Wie lassen Sich Quetsch- und Scherstellen an Maschinen sichern?',
    options: ['Durch schwarz-gelben Warnanstrich', 'Durch trennende Schutzeinrichtungen', 'Durch berührungslos wirkende Schutzeinrichtungen', 'Durch Warnschilder', 'Durch rote Warnleuchten'],
    correct: [1, 2],
    explain: 'Richtig: B) Durch trennende Schutzeinrichtungen · C) Durch berührungslos wirkende Schutzeinrichtungen'
  },
  {
    id: 'pu003-027', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Was ist bei der Störungsbeseitigung an Maschinen zu beachten?',
    options: ['Kleine Störungen dürfen bei laufender Maschine behoben werden', 'Die Maschine ist grundsätzlich auszuschalten und gegen Wiedereinschalten zu sichern', 'Gespeicherte Energien sind gefahrlos abzuführen', 'Hochgehaltene Achsen sind zu sichern'],
    correct: [1, 2, 3],
    explain: 'Richtig: B) Die Maschine ist grundsätzlich auszuschalten und gegen Wiedereinschalten zu sichern · C) Gespeicherte Energien sind gefahrlos abzuführen · D) Hochgehaltene Achsen sind zu sichern'
  },
  {
    id: 'pu003-028', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Bei welchen Schleifarbeiten am Schleifbock kann auf die Benutzung einer Schutzbrille verzichtet werden?',
    options: ['Bei kurzzeitigen Schleifarbeiten, z.B. Nachschleifen von Bohrern', 'Beim Schleifen von Werkstücken aus Hartmetall', 'Unabhängig von der Art der Arbeit muss immer eine Schutzbrille getragen werden Infomedien der BG ETEM online bestellen: medien.bgetem.de'],
    correct: 2,
    explain: 'Richtig: C) Unabhängig von der Art der Arbeit muss immer eine Schutzbrille getragen werden Infomedien der BG ETEM online bestellen: medien.bgetem.de'
  },
  {
    id: 'pu003-029', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Bedeutung hat dieses Zeichen?',
    options: ['Warnung vor elektrischer Spannung', 'Hochspannung. Vorsicht Lebensgefahr', 'Nicht schalten. Es wird gearbeitet', 'Vorsicht. Unbefugten Zutritt verboten'],
    correct: 0,
    explain: 'Richtig: A) Warnung vor elektrischer Spannung'
  },
  {
    id: 'pu003-030', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Ursache kann ein elektrischer Unfall haben?',
    options: ['Direkte Stromeinwirkung auf den Organismus', 'Lichtbogeneinwirkung', 'Abstürzen oder Ausrutschen als Folgeunfall einer durch Stromeinwirkung ausgelösten Schreckreaktion'],
    correct: [0, 1, 2],
    explain: 'Richtig: A) Direkte Stromeinwirkung auf den Organismus · B) Lichtbogeneinwirkung · C) Abstürzen oder Ausrutschen als Folgeunfall einer durch Stromeinwirkung ausgelösten Schreckreaktion'
  },
  {
    id: 'pu003-031', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Von welchen drei Einflussgrößen hängt die Schwere eines elektrischen Unfalles mit Körperdurchströmung ab?',
    options: ['Stromstärke', 'Gewöhnung', 'Lebensalter', 'Dauer der Durchströmung', 'Stromweg durch den Körper'],
    correct: [0, 3, 4],
    explain: 'Richtig: A) Stromstärke · D) Dauer der Durchströmung · E) Stromweg durch den Körper'
  },
  {
    id: 'pu003-032', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Stromstärke (I) fließt bei Berührung eines unter 230 V Spannung (U) stehenden Anlagenteils über den Menschen, wenn sein Körperwiderstand (R) ca. 1.000 Ω beträgt? (Ohm’sches Gesetz U = I · R)',
    options: ['ca. 10 mA', 'ca. 50 mA', 'ca. 230 mA', 'ca. 1 A'],
    correct: 2,
    explain: 'Richtig: C) ca. 230 mA'
  },
  {
    id: 'pu003-033', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Ist auch ein Niederspannungslichtbogen (bei 230 V) gefährlich?',
    options: ['Ja', 'Nein'],
    correct: 0,
    explain: 'Richtig: A) Ja'
  },
  {
    id: 'pu003-034', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Bedeutung hat das Doppelquadrat auf dem Leistungsschild einer elektrischen Handbohrmaschine?',
    options: ['Schutzgrad gegen Eindringen von Wasser', 'Staubgeschützte Ausführung', 'Schutzisolierung', 'Derartig gekennzeichnete Betriebsmittel können mit Gleich- oder Wechselstrom betrieben werden'],
    correct: 2,
    explain: 'Richtig: C) Schutzisolierung'
  },
  {
    id: 'pu003-035', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Müssen elektrische Anlagen regelmäßig auf ihren ordnungsgemäßen Zustand geprüft werden?',
    options: ['Nein, eine Überprüfung ist nur nach der Errichtung erforderlich', 'Nein, eine Überprüfung ist nur auf Verlangen der Feuerversicherung notwendig', 'Nein, eine erneute Prüfung ist nur nach einer wesentlichen Veränderung der Anlage notwendig', 'Ja, jede elektrische Anlage muss regelmäßig überprüft werden'],
    correct: 3,
    explain: 'Richtig: D) Ja, jede elektrische Anlage muss regelmäßig überprüft werden'
  },
  {
    id: 'pu003-036', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Müssen elektrische Betriebsmittel regelmäßig geprüft werden?',
    options: ['Nein, eine Prüfung ist nur bei der Herstellung erforderlich', 'Nein, wenn die Betriebsmittel ein VDE-Zeichen tragen, entfallen wiederkehrende Prüfungen', 'Ja, alle elektrischen Betriebsmittel sind in regelmäßigen Zeitabständen zu überprüfen', 'Nein, Geräte mit GS-Zeichen müssen nur nach Reparatur überprüft werden'],
    correct: 2,
    explain: 'Richtig: C) Ja, alle elektrischen Betriebsmittel sind in regelmäßigen Zeitabständen zu überprüfen'
  },
  {
    id: 'pu003-037', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Was sind die Voraussetzungen für eine Brandentstehung?',
    options: ['Brennbarer Stoff', 'Zündquelle', 'Sauerstoff (Luft)'],
    correct: [0, 1, 2],
    explain: 'Richtig: A) Brennbarer Stoff · B) Zündquelle · C) Sauerstoff (Luft)'
  },
  {
    id: 'pu003-038', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Einrichtungen sind zur Verhütung von Entstehungsbränden bereitzustellen?',
    options: ['Üblicherweise reicht die vorhandene Wasserleitung aus', 'Abhängig vom Umfang der Brandgefahr und der Betriebsgröße sind Feuerlöscher bereitzustellen und mindestens alle zwei Jahre von einem Sachkundigen zu prüfen', 'In mechanischen und optischen Werkstätten sowie Lagerräumen ist die Installation eines Rauchmelders ausreichend', 'Falls die Werkstätten oder Lagerräume ständig besetzt sind, kann auf die Bereitstellung von Feuerlöscheinrichtungen völlig verzichtet werden', 'Bei Räumen mit geringer Brandgefahr ist der Hinweis auf das Rauchverbot ausreichend'],
    correct: 1,
    explain: 'Richtig: B) Abhängig vom Umfang der Brandgefahr und der Betriebsgröße sind Feuerlöscher bereitzustellen und mindestens alle zwei Jahre von einem Sachkundigen zu prüfen'
  },
  {
    id: 'pu003-039', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Wie lange steht der Löschstrahl eines 6-kg-Pulverlöschers bei voll betätigtem Druckhebel?',
    options: ['ca. 6 s', 'ca. 20 s', 'ca. 30 s'],
    correct: 0,
    explain: 'Richtig: A) ca. 6 s'
  },
  {
    id: 'pu003-040', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Wie hat sich ein/e Ersthelfer/in bei Brandverletzungen zu verhalten?',
    options: ['Bei kleinflächigen Verbrennungen betroffene Stelle kühlen (z.B. unterfließendem Kaltwasser für mindestens 15 Minuten)', 'Brandwunden mit Öl, Salben, Talk oder ähnlichem bedecken', 'Für schnelle ärztliche Hilfe sorgen', 'Brandwunden mit keimfreien Brandwunden-Verbandpäckchen bedecken', 'Brandwunden auswaschen und Brandblasen öffnen'],
    correct: [0, 2, 3],
    explain: 'Richtig: A) Bei kleinflächigen Verbrennungen betroffene Stelle kühlen (z.B. unterfließendem Kaltwasser für mindestens 15 Minuten) · C) Für schnelle ärztliche Hilfe sorgen · D) Brandwunden mit keimfreien Brandwunden-Verbandpäckchen bedecken'
  },
  {
    id: 'pu003-041', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Was ist der Flammpunkt einer brennbaren Flüssigkeit?',
    options: ['Temperatur der Zündquelle', 'Konzentration brennbarer Dämpfe in der Raumluft', 'Niedrigste Temperatur, bei der sich brennbare Dämpfe in so einer Menge entwickeln, dass bei Kontakt mit einer Zündquelle sofort eine (kurzzeitige) Entzündung auftritt.', 'Zeitpunkt der Entflammung'],
    correct: 2,
    explain: 'Richtig: C) Niedrigste Temperatur, bei der sich brennbare Dämpfe in so einer Menge entwickeln, dass bei Kontakt mit einer Zündquelle sofort eine (kurzzeitige) Entzündung auftritt.'
  },
  {
    id: 'pu003-042', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Mit welchem Gefahrenpiktogramm nach GHS sind entzündbare Flüssigkeiten mit einem Flammpunkt von 55°C gekennzeichnet?',
    options: ['Kein Gefahrenpiktogramm zugeordnet'],
    correct: [],
    explain: 'Richtig: '
  },
  {
    id: 'pu003-043', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Was ist nach der Gefahrstoffverordnung ein Kriterium für eine leichtentzündliche Flüssigkeit?',
    options: ['Flüssigkeiten mit einem Flammpunkt≥21°C', 'Flüssigkeit darf nicht im Glasbehälter aufbewahrt werden', 'Flammpunkt der Flüssigkeit liegt unter 21°C'],
    correct: 2,
    explain: 'Richtig: C) Flammpunkt der Flüssigkeit liegt unter 21°C'
  },
  {
    id: 'pu003-044', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Wann ist mit einem Feuer bei brennbaren Flüssigkeiten zu rechnen?',
    options: ['Bei großer Oberfläche des Aufbewahrungsbehälters', 'Bei geringer Viskosität der brennbaren Flüssigkeit', 'Sofern sich brennbare Dämpfe auf dem Flüssigkeitsspiegel bilden können', 'Nur, wenn sich mehr als 1 Liter brennbare Flüssigkeit im Behälter befindet'],
    correct: 2,
    explain: 'Richtig: C) Sofern sich brennbare Dämpfe auf dem Flüssigkeitsspiegel bilden können'
  },
  {
    id: 'pu003-045', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Mindestforderungen sind bei Tätigkeiten mit brennbaren Flüssigkeiten – auch in kleinen Mengen – zu treffen?',
    options: ['Aufbewahrung in Behältern mit dichtschließendem Deckel', 'Brennbare Flüssigkeiten nur in der für den Fortgang der Arbeit erforderlichen Menge am Arbeitsplatz aufbewahren', 'Feuer, offenes Licht und Rauchen verboten'],
    correct: [0, 1, 2],
    explain: 'Richtig: A) Aufbewahrung in Behältern mit dichtschließendem Deckel · B) Brennbare Flüssigkeiten nur in der für den Fortgang der Arbeit erforderlichen Menge am Arbeitsplatz aufbewahren · C) Feuer, offenes Licht und Rauchen verboten'
  },
  {
    id: 'pu003-046', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welcher Behälter ist für den Transport von einigen Litern Aceton zulässig?',
    options: ['Ein offener, gekennzeichneter Eimer', 'Eine geschlossene, gekennzeichnete Glasflasche', 'Ein geschlossener, gekennzeichneter Metallbehälter'],
    correct: 2,
    explain: 'Richtig: C) Ein geschlossener, gekennzeichneter Metallbehälter'
  },
  {
    id: 'pu003-047', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Dürfen brennbare Flüssigkeiten an Arbeitsplätzen aufbewahrt werden?',
    options: ['Nein, in keinem Fall', 'Ja, sofern die Behälter fest verschlossen und gekennzeichnet sind bis zu einer Menge von 5 kg', 'Ja, sofern die Behälter sicher, z.B. in selbstschließenden und abgesaugten Sicherheitsschränken, bereitgehalten werden'],
    correct: 2,
    explain: 'Richtig: C) Ja, sofern die Behälter sicher, z.B. in selbstschließenden und abgesaugten Sicherheitsschränken, bereitgehalten werden'
  },
  {
    id: 'pu003-048', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Was ist eine Explosion?',
    options: ['Schnell ablaufende chemische Reaktion unter Abgabe von Wärme und Licht', 'Kurzschluss an einer 20 kV-Anlage', 'Blitzschlag', 'Jedes Herumfliegen fester Teile mit großer Kraft', 'Zerreißen eines Dampfkessels'],
    correct: 0,
    explain: 'Richtig: A) Schnell ablaufende chemische Reaktion unter Abgabe von Wärme und Licht'
  },
  {
    id: 'pu003-049', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welcher der genannten Explosionsschutzmaßnahmen ist vorrangig anzuwenden?',
    options: ['Verwendung von Stoffen, die keine explosionsfähigen Gemische bilden können', 'Vermeidung von Zündquellen (z.B. ex-geschützte elektrische Anlage)', 'Natürliche Lüftung des Arbeitsraumes', 'Auswirkungen einer möglichen Explosion gering halten', 'Absaugung der Dämpfe an der Entstehungsstelle'],
    correct: 0,
    explain: 'Richtig: A) Verwendung von Stoffen, die keine explosionsfähigen Gemische bilden können'
  },
  {
    id: 'pu003-050', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Wann besteht Explosionsgefahr?',
    options: ['Wenn ein explosionsfähiges Gemisch aus Luft bzw. Sauerstoff und brennbaren Gasen, Dämpfen oder Stäuben auf eine Zündquelle trifft', 'Beim Ausbau einer Fernsehröhre', 'Bei Tätigkeiten mit Sprengstoffen'],
    correct: [0, 2],
    explain: 'Richtig: A) Wenn ein explosionsfähiges Gemisch aus Luft bzw. Sauerstoff und brennbaren Gasen, Dämpfen oder Stäuben auf eine Zündquelle trifft · C) Bei Tätigkeiten mit Sprengstoffen'
  },
  {
    id: 'pu003-051', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Ist die Explosionsgefahr am spezifischen Geruch eines Dampfbzw. Gas-Luft-Gemisches zu erkennen?',
    options: ['Ja', 'Nein'],
    correct: 1,
    explain: 'Richtig: B) Nein'
  },
  {
    id: 'pu003-052', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Was versteht man unter der Zündtemperatur?',
    options: ['Temperatur, bei der eine Flüssigkeit leicht entzündliche Dämpfe bildet', 'Temperatur zur Zeit der Explosion', 'Niedrigste Temperatur einer heißen Oberfläche, an der sich ein brennbarer Stoff selbst entzündet.'],
    correct: 2,
    explain: 'Richtig: C) Niedrigste Temperatur einer heißen Oberfläche, an der sich ein brennbarer Stoff selbst entzündet.'
  },
  {
    id: 'pu003-053', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Durch welche Zündquellen kann ein explosionsfähiges Gemisch gezündet werden?',
    options: ['Elektrische Schaltfunken', 'Brennende Zigarette', 'Statische Elektrizität', 'Oberflächenwärme', 'Reibungswärme', 'Schweißperlen'],
    correct: [0, 1, 2, 3, 4, 5],
    explain: 'Richtig: A) Elektrische Schaltfunken · B) Brennende Zigarette · C) Statische Elektrizität · D) Oberflächenwärme · E) Reibungswärme · F) Schweißperlen'
  },
  {
    id: 'pu003-054', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Was besagen die Zündgrenzen?',
    options: ['Innerhalb der Zündgrenzen ist eine Explosion möglich', 'Eine Explosion ist innerhalb und oberhalb der Zündgrenzen möglich', 'Eine Explosion ist nur unterhalb der unteren Zündgrenze möglich'],
    correct: 0,
    explain: 'Richtig: A) Innerhalb der Zündgrenzen ist eine Explosion möglich'
  },
  {
    id: 'pu003-055', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche der nachstehend aufgeführten brennbaren Flüssigkeiten können bereits bei Raumtemperatur bis 21°C explosionsfähige Gemische bilden?',
    options: ['Benzin', 'Heizöl', 'Petroleum', 'Alkohol', 'Nitroverdünnung', 'Terpentinersatz', 'Kunstharzlacke', 'Aceton'],
    correct: [0, 3, 4, 6, 7],
    explain: 'Richtig: A) Benzin · D) Alkohol · E) Nitroverdünnung · G) Kunstharzlacke · H) Aceton'
  },
  {
    id: 'pu003-056', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Sind brennbare Dämpfe schwerer oder leichter als Luft?',
    options: ['Schwerer', 'Leichter'],
    correct: 0,
    explain: 'Richtig: A) Schwerer'
  },
  {
    id: 'pu003-057', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Gase sind schwerer als Luft?',
    options: ['Acetylen', 'Propan', 'Wasserstoff', 'Erdgas'],
    correct: 1,
    explain: 'Richtig: B) Propan'
  },
  {
    id: 'pu003-058', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Wieviel Kraftstoff reicht aus, um in einem 200-Liter-Fass ein explosionsfähiges Dampf-Luftgemisch zu erzeugen?',
    options: ['ca. 1 Schnapsglas voll', 'ca. 1 Tasse voll', 'ca. 1 Liter'],
    correct: 0,
    explain: 'Richtig: A) ca. 1 Schnapsglas voll'
  },
  {
    id: 'pu003-059', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Warum sind leere Behälter, in denen sich brennbare Flüssigkeiten befanden, aus den Arbeitsräumen zu entfernen?',
    options: ['Leere Behälter beanspruchen einen erheblichen Platzbedarf', 'Weil selbst kleine Restmengen leicht entzündlicher Flüssigkeiten im Behälter ein explosionsfähiges Gemisch bilden können', 'Sofern die Behälter oben offen sind, besteht keine Gefahr'],
    correct: 1,
    explain: 'Richtig: B) Weil selbst kleine Restmengen leicht entzündlicher Flüssigkeiten im Behälter ein explosionsfähiges Gemisch bilden können'
  },
  {
    id: 'pu003-060', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Das abgebildete Symbol bedeutet „explosionsgefährlich“. Welche Stoffe müssen mit diesem Symbol gekennzeichnet sein?',
    options: ['Leichtentzündliche Flüssigkeiten', 'Sprengstoffe', 'Brenngase in Gasflaschen'],
    correct: 1,
    explain: 'Richtig: B) Sprengstoffe'
  },
  {
    id: 'pu003-061', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Die Gefahrstoffverordnung gilt für:',
    options: ['Stoffe und Zubereitungen mit unangenehmem Geruch', 'Stoffe und Zubereitungen mit gefährlichen Eigenschaften (z.B. giftig, ätzend, reizend, explosionsgefährlich, brandfördernd, entzündlich, krebserzeugend und umweltgefährlich)', 'Sprengstoffe', 'Tätigkeiten mit Gefahrstoffen im Haushalt Weitere Informationen: Informationen zu Themen der Arbeitssicherheit finden Sie online unter Themen von A bis Z: www.bgetem.de,Webcode: 13802834'],
    correct: 1,
    explain: 'Richtig: B) Stoffe und Zubereitungen mit gefährlichen Eigenschaften (z.B. giftig, ätzend, reizend, explosionsgefährlich, brandfördernd, entzündlich, krebserzeugend und umweltgefährlich)'
  },
  {
    id: 'pu003-062', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Gefahrenklassen werden durch die einzelnen Gefahrenpiktogramme symbolisiert?',
    options: ['Entzündbar', 'Oxidierend (Entzündend) wirkend', 'Explosiv', 'Entzündbar', 'Oxidierend (Entzündend) wirkend', 'Explosiv', 'Akute Toxizität, Kat. 4', 'Ätzend, Kat. 1 i) Akute Toxizität, Kat. 1–3 j) Reizend, Kat. 2 k) Gewässergefährdend l) Akute Toxizität, Kat. 1–3 m) Reizend, Kat. 2 n) Krebserzeugend, Kat. 1–2 o) Akute Toxizität, Kat. 1–3 p) Unter Druck stehende Gase q) Gewässergefährdend r) Ätzend, Kat. 1 s) Akute Toxizität, Kat. 1–3 t) Krebserzeugend, Kat. 1–2 u) Ätzend, Kat. 1'],
    correct: [1, 3, 7],
    explain: 'Richtig: B, D, H. Quelle: PU003 (Arbeitssicherheit, Innungs-Testfragen).'
  },
  {
    id: 'pu003-063', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Auf welchem Weg können Gefahrstoffe in den Körper gelangen?',
    options: ['Über die Verdauungsorgane (Mund, Magen und Darm)', 'Über die Atemwege', 'Durch die Haut'],
    correct: [0, 1, 2],
    explain: 'Richtig: A) Über die Verdauungsorgane (Mund, Magen und Darm) · B) Über die Atemwege · C) Durch die Haut'
  },
  {
    id: 'pu003-064', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Was versteht man unter Hautresorption?',
    options: ['Gefahr von Hautreizungen', 'Aufnahme von Gefahrstoffen durch die Haut', 'Gefahr von Hautallergien', 'Hautzerstörung'],
    correct: 1,
    explain: 'Richtig: B) Aufnahme von Gefahrstoffen durch die Haut'
  },
  {
    id: 'pu003-065', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'In welcher Form können Gefahrstoffe auftreten?',
    options: ['Als Gase', 'Als Dämpfe', 'Als Nebel', 'Als Rauche', 'In flüssiger Form', 'In fester Form', 'Als Stäube', 'Als Pasten'],
    correct: [0, 1, 2, 3, 4, 5],
    explain: 'Richtig: A) Als Gase · B) Als Dämpfe · C) Als Nebel · D) Als Rauche · E) In flüssiger Form · F) In fester Form'
  },
  {
    id: 'pu003-066', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Angaben enthält ein Sicherheitsdatenblatt?',
    options: ['Es enthält u.a. Hinweise für die sichere Lagerung, Handhabung, Transport von Gefahrstoffen', 'Es enthält die genaue chemische Zusammensetzung des Produkts', 'Es enthält Angaben u.a. über Erste Hilfe, Entsorgung, Maßnahmen bei Unfällen und Bränden sowie zur Toxikologie und Ökologie'],
    correct: [0, 2],
    explain: 'Richtig: A) Es enthält u.a. Hinweise für die sichere Lagerung, Handhabung, Transport von Gefahrstoffen · C) Es enthält Angaben u.a. über Erste Hilfe, Entsorgung, Maßnahmen bei Unfällen und Bränden sowie zur Toxikologie und Ökologie'
  },
  {
    id: 'pu003-067', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Gefahren können bei Tätigkeiten mit Gefahrstoffen auftreten?',
    options: ['Wasserverunreinigung, Luft- und Bodenverschmutzung', 'Schädigung der Gesundheit, in schweren Fällen Tod', 'Brand- und Explosionsgefahr'],
    correct: [0, 1, 2],
    explain: 'Richtig: A) Wasserverunreinigung, Luft- und Bodenverschmutzung · B) Schädigung der Gesundheit, in schweren Fällen Tod · C) Brand- und Explosionsgefahr'
  },
  {
    id: 'pu003-068', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welcher Sachverhalt ist Anlass einer betriebsärztlichen und/oder sicherheitstechnischen Beratung im Betrieb?',
    options: ['Außerberuflich entstandene Erkrankung eines Mitarbeiters, die durch im Betrieb erforderliche Schichtarbeit ungünstig beeinflusst werden kann (z.B. Zuckerkrankheit)', 'Feststellung von Beratungsbedarf durch einen Unternehmer, der das so genannte alternative Betreuungsmodell („Unternehmermodell“) gewählt hat', 'Überdurchschnittlich hohe Raten an Arbeitsunfähigkeit in einem Arbeitsbereich', 'Gehäufte Klagen von Beschäftigten über Gesundheitsstörungen in einem Arbeitsbereich', 'Beobachtung von anhaltender Arbeitsüberlastung von Beschäftigten'],
    correct: [0, 1, 2, 3, 4],
    explain: 'Richtig: A, B, C, D, E. Quelle: PU003 (Arbeitssicherheit, Innungs-Testfragen).'
  },
  {
    id: 'pu003-069', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Maßnahmen sind vor Beginn der Tätigkeit mit Gefahrstoffen durchzuführen?',
    options: ['Gefährdungsermittlung und -beurteilung', 'Ermitteln, ob ein Stoff mit einem geringeren gesundheitlichen Risiko eingesetzt werden kann', 'Unterweisung der Beschäftigten', 'Aufstellung spezieller Betriebsanweisungen', 'Unbedenklichkeitserklärung vom Hausarzt der Beschäftigten, die Umgang mit dem Gefahrstoff haben, einholen'],
    correct: [0, 1, 2, 3],
    explain: 'Richtig: A) Gefährdungsermittlung und -beurteilung · B) Ermitteln, ob ein Stoff mit einem geringeren gesundheitlichen Risiko eingesetzt werden kann · C) Unterweisung der Beschäftigten · D) Aufstellung spezieller Betriebsanweisungen'
  },
  {
    id: 'pu003-070', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Schutzmaßnahme ist bei Tätigkeiten mit Gefahrstoffen vorrangig?',
    options: ['Absaugung an der Entstehungsstelle', 'Tragen Persönlicher Schutzausrüstungen', 'Tätigkeit zeitlich begrenzen', 'Einsatz von Stoffen oder Zubereitungen mit geringerem gesundheitlichen Risiko', 'Betriebsanweisungen'],
    correct: 3,
    explain: 'Richtig: D) Einsatz von Stoffen oder Zubereitungen mit geringerem gesundheitlichen Risiko'
  },
  {
    id: 'pu003-071', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Kann Milch bei Tätigkeiten mit Gefahrstoffen als „Gegengift“ wirken?',
    options: ['Ja', 'Nein'],
    correct: 1,
    explain: 'Richtig: B) Nein'
  },
  {
    id: 'pu003-072', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Wie sind Behälter mit Gefahrstoffen nach der Gefahrstoffverordnung zu kennzeichnen?',
    options: ['Art und Weise bleibt dem Einführer/Hersteller überlassen', 'Die Kennzeichnung umfasst folgende Angaben: Stoffbezeichnung, Gefahrensymbole, Gefahrenbezeichnungen, Gefahrenhinweise, Sicherheitsratschläge, Name und vollständige Anschrift einschließlich der Telefonnummer des Herstellers/Einführers, zusätzliche Angaben, EG-Nr.', 'Kleine Behälter (<0,25 l) sind mit Stoffbezeichnung und Gefahrensymbol zu kennzeichnen', 'Wenn die Kennzeichnung nach der Gefahrengutverordnung „Straße“ mit Gefahrzetteln erfolgt, kann die Kennzeichnung nach der Gefahrstoffverordnung entfallen', 'Nur giftige, ätzende und leichtentzündliche Gefahrstoffe sind mit Stoffbezeichnung, Gefahrsymbolen, Gefahrenhinweisen und Sicherheitsratschlägen zu kennzeichnen'],
    correct: 1,
    explain: 'Richtig: B) Die Kennzeichnung umfasst folgende Angaben: Stoffbezeichnung, Gefahrensymbole, Gefahrenbezeichnungen, Gefahrenhinweise, Sicherheitsratschläge, Name und vollständige Anschrift einschließlich der Telefonnummer des Herstellers/Einführers, zusätzliche Angaben, EG-Nr.'
  },
  {
    id: 'pu003-073', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Anforderungen müssen Behälter mit Gefahrstoffen erfüllen?',
    options: ['Es dürfen nur Behälter aus Glas verwendet werden', 'Behälter müssen eindeutig gekennzeichnet sein', 'Behälter müssen nach Form und Aussehen ein Verwechseln mit Gefäßen für Lebensmitteln ausschließen', 'Die Kennzeichnung muss deutlich erkennbar und haltbar sowie in deutscher Sprache abgefasst sein', 'Behälter müssen verschließbar sein'],
    correct: [1, 2, 3, 4],
    explain: 'Richtig: B) Behälter müssen eindeutig gekennzeichnet sein · C) Behälter müssen nach Form und Aussehen ein Verwechseln mit Gefäßen für Lebensmitteln ausschließen · D) Die Kennzeichnung muss deutlich erkennbar und haltbar sowie in deutscher Sprache abgefasst sein · E) Behälter müssen verschließbar sein'
  },
  {
    id: 'pu003-074', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Wie sollen gesundheitsschädliche Dämpfe abgeführt werden, die schwerer als Luft sind?',
    options: ['Über eine Abzugshaube nach oben', 'Über eine Rand- bzw. nach unten wirkende Absauganlage', 'Über einen ausreichend dimensionierten Fensterventilator, der den gesamten Arbeitsraum entlüftet'],
    correct: 1,
    explain: 'Richtig: B) Über eine Rand- bzw. nach unten wirkende Absauganlage'
  },
  {
    id: 'pu003-075', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche persönliche Schutzausrüstung ist gegen das Einatmen gesundheitsschädlicher Gase und Dämpfe zu verwenden?',
    options: ['ein Mund-Nasenschutz aus flüssigkeitsdichtem Material', 'eine Filtermaske mit dem entsprechenden Filter', 'eine FFP2-Maske mit CE-Kennzeichen Aktuelle Infos zur Arbeitssicherheit für Profis: profi.bgetem.de'],
    correct: 1,
    explain: 'Richtig: B) eine Filtermaske mit dem entsprechenden Filter'
  },
  {
    id: 'pu003-076', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Wie kann die Haut vor einer Schädigung durch Gefahrstoffe geschützt werden?',
    options: ['Durch Tragen geeigneter Schutzkleidung, wie Schürze, Gummistiefel und Gesichtsschutz', 'Durch Tragen geeigneter Schutzhandschuhe, die eine Durchdringung mit dem Gefahrstoff ausreichend lange verhindern', 'Durch regelmäßigen Gebrauch entfettender Hautreinigungsmittel', 'Durch Anwendung geeigneter Hautschutzmittel und Hautpflegemittel gemäß Hautschutzplan', 'Durch Anwendung von cortisonhaltigen Salben über Nacht, die zu einer Abheilung von Hautschädigungen führt'],
    correct: [0, 1, 3],
    explain: 'Richtig: A) Durch Tragen geeigneter Schutzkleidung, wie Schürze, Gummistiefel und Gesichtsschutz · B) Durch Tragen geeigneter Schutzhandschuhe, die eine Durchdringung mit dem Gefahrstoff ausreichend lange verhindern · D) Durch Anwendung geeigneter Hautschutzmittel und Hautpflegemittel gemäß Hautschutzplan'
  },
  {
    id: 'pu003-077', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Wie wird Säure verdünnt?',
    options: ['Die Säure wird ins Wasser gegossen', 'Wasser wird in die Säure gegossen', 'Säure darf prinzipiell nicht verdünnt werden'],
    correct: 0,
    explain: 'Richtig: A) Die Säure wird ins Wasser gegossen'
  },
  {
    id: 'pu003-078', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Was ist beim Hautschutz zu beachten?',
    options: ['Es müssen auf den Gefahrstoff und die Tätigkeit abgestimmt Hautschutz-, Hautreinigungs- und Hautpflegemittel zur Verfügung stehen', 'Gegen einen Gefahrstoff reicht auch nur eine Hautschutzsalbe', 'Der Hautschutzplan ist ausschließlich für Beschäftigte ab dem 40. Lebensjahr zu beachten', 'Nur bei „kranker“ Haut ist die Anwendung von Hautschutzpräparaten sinnvoll'],
    correct: 0,
    explain: 'Richtig: A) Es müssen auf den Gefahrstoff und die Tätigkeit abgestimmt Hautschutz-, Hautreinigungs- und Hautpflegemittel zur Verfügung stehen'
  },
  {
    id: 'pu003-079', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Bei welchen Tätigkeiten muss der Arbeitgeber den Beschäftigten eine arbeitsmedizinische Vorsorge anbieten (Angebotsvorsorge)?',
    options: ['Bei Feuchtarbeit von arbeitstäglich mindestens 2 Stunden', 'Bei Nachtschichtarbeit', 'Bei Arbeit an Bildschirmarbeitsplätzen in nicht unwesentlichem Umfang', 'Bei Tätigkeiten mit Exposition gegen krebserzeugende Arbeitsstoffe (K1 und K2)', 'Bei dienstlichen Fahrten mit einem Firmenfahrzeug'],
    correct: [0, 1, 2, 3],
    explain: 'Richtig: A) Bei Feuchtarbeit von arbeitstäglich mindestens 2 Stunden · B) Bei Nachtschichtarbeit · C) Bei Arbeit an Bildschirmarbeitsplätzen in nicht unwesentlichem Umfang · D) Bei Tätigkeiten mit Exposition gegen krebserzeugende Arbeitsstoffe (K1 und K2)'
  },
  {
    id: 'pu003-080', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Erste-Hilfe-Maßnahmen sind bei Augenverätzungen durch Säure anzuwenden?',
    options: ['Verletzten in dunklen Raum bringen und Feuerwehr verständigen', 'Schmerzstillende Mittel verabreichen', 'Auge weit geöffnet halten (ggf. durch Helfer) und mehrere Minuten unter fließendem Wasser oder mit geeigneter Augenspülflüssigkeit (Augendusche) spülen, anschließend sofort augenärztliche Behandlung'],
    correct: 2,
    explain: 'Richtig: C) Auge weit geöffnet halten (ggf. durch Helfer) und mehrere Minuten unter fließendem Wasser oder mit geeigneter Augenspülflüssigkeit (Augendusche) spülen, anschließend sofort augenärztliche Behandlung'
  },
  {
    id: 'pu003-081', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche der genannten Gefahren können bei Tätigkeiten mit Kaltreinigern auftreten?',
    options: ['Kaltreiniger können brennbar sein, ihre Dämpfe im Gemisch mit Luft explosionsfähig', 'Sofern Kaltreiniger Chlorkohlenwasserstoff oder Fluorkohlenwasserstoffe enthalten, können sich diese an heißen Oberflächen oder offenen Flammen (brennender Zigaretten) zersetzen. Dabei bilden sich sehr giftige und korrosive Zersetzungsprodukte', 'Durch Zersetzung sauer gewordener Kaltreiniger können diese mit fein verteilten Leichtmetallen (Späne oder Staub) heftig reagieren', 'Das Einatmen der Dämpfe von Kaltreinigern kann zu Übelkeit, Kopfschmerzen, rauschähnlichen Zuständen, Bewusstlosigkeit und in besonders schweren Fällen sogar zum Tod führen', 'Zur Reinigung elektrischer Kontakte dürfen Kaltreiniger nicht benutzt werden, da sich dadurch der Übergangswiderstand erhöht'],
    correct: [0, 1, 2, 3],
    explain: 'Richtig: A, B, C, D. Quelle: PU003 (Arbeitssicherheit, Innungs-Testfragen).'
  },
  {
    id: 'pu003-082', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche der genannten Schutzmaßnahmen sind bei Tätigkeiten mit Kaltreinigern zu beachten?',
    options: ['In Räumen und Arbeitsplätzen, in denen Kaltreiniger eingesetzt oder gelagert werden, ist auf eine gute Lüftung zu achten', 'Nicht rauchen, keinen Alkohol trinken', 'Das Abfüllen und das Aufbewahren von Kaltreinigern in Getränkeflaschen ist verboten', 'Einatmen der Dämpfe vermeiden', 'Bei Tätigkeiten mit Kaltreinigern sind immer Gehörschutzmittel zu benutzen'],
    correct: [0, 1, 2, 3],
    explain: 'Richtig: A) In Räumen und Arbeitsplätzen, in denen Kaltreiniger eingesetzt oder gelagert werden, ist auf eine gute Lüftung zu achten · B) Nicht rauchen, keinen Alkohol trinken · C) Das Abfüllen und das Aufbewahren von Kaltreinigern in Getränkeflaschen ist verboten · D) Einatmen der Dämpfe vermeiden'
  },
  {
    id: 'pu003-083', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Was ist bei Tätigkeiten mit Methylmethacrylat zu beachten?',
    options: ['Den Arbeitsraum sehr gut be- und entlüften, besonders in Bodennähe (rel. Dampfdichte: 3,45 – Luft: 1)', 'Methylmethacrylat reizt Augen, Haut und Schleimhäute und kann Hautallergien verursachen. Berührung vermeiden', 'Dämpfe an der Entstehungsstelle absaugen (Arbeitsplatzgrenzwert: 50 ppm einhalten)', 'Bei der Lagerung Behälter dicht geschlossen halten', 'Essen, Trinken und Aufbewahrung von Lebensmitteln im Arbeitsraum vermeiden', 'Explosionsgefahr, Rauch und Umgang mit Zündquellen verbieten'],
    correct: [0, 1, 2, 3, 4, 5],
    explain: 'Richtig: A, B, C, D, E, F. Quelle: PU003 (Arbeitssicherheit, Innungs-Testfragen).'
  },
  {
    id: 'pu003-084', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Bei dem Sicherheitszeichen mit dem Gabelstapler handelt es sich um ein',
    options: ['Verbotszeichen', 'Warnzeichen', 'Gebotszeichen', 'Rettungszeichen', 'Hinweiszeichen'],
    correct: 1,
    explain: 'Richtig: B) Warnzeichen'
  },
  {
    id: 'pu003-085', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Mit welchen Symbolen ist ein Arbeitsplatz zu kennzeichnen, an dem mitflüssigen,ätzenden Gefahrstoffen umgegangen wird?',
    options: [],
    correct: [],
    explain: 'Richtig: '
  },
  {
    id: 'pu003-086', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Sie sind in geselliger Runde mit Freunden beisammen und wollen mit dem Auto nach Hause fahren. Wie verhalten Sie sich in dieser Situation?',
    options: ['Ich trinke nur alkoholfreie Getränke, da bereits geringe Alkoholmengen im Blut das Fahrvermögen beeinträchtigen können', 'Bevor ich gehe, trinke ich eine Tasse starken Kaffee; dann bin ich wieder fährtüchtig', 'Ich trinke nur soviel, dass ich unter 0,5 ‰ bleibe, denn unter dieser Grenze bin ich noch in jedem Fall fahrtüchtig', 'Ich organisiere vorher meine Heimfahrt und lasse mich von einem Bekannten bzw. Verwandten abholen; notfalls lasse ich mich von einem Taxi fahren'],
    correct: [0, 3],
    explain: 'Richtig: A) Ich trinke nur alkoholfreie Getränke, da bereits geringe Alkoholmengen im Blut das Fahrvermögen beeinträchtigen können · D) Ich organisiere vorher meine Heimfahrt und lasse mich von einem Bekannten bzw. Verwandten abholen; notfalls lasse ich mich von einem Taxi fahren'
  },
  {
    id: 'pu003-087', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Was ist zu tun, um beim Fahren mit einem Auto immer eine gute Sicht zu haben?',
    options: ['In regelmäßigen Zeitabständen alle Scheiben sorgfältig außen und innen schlierenfrei säubern', 'Scheibenwischergummis mindestens alle 6 Monate erneuern', 'Bei Schneefall vor Fahrtantritt den Schnee nicht nur von allen Scheiben, sondern auch von anderen Flächen am Fahrzeug, wie z.B. Motorhaube, Dach, Stoßfänger, Lampen, Blinker usw. beseitigen'],
    correct: [0, 1, 2],
    explain: 'Richtig: A, B, C. Quelle: PU003 (Arbeitssicherheit, Innungs-Testfragen).'
  },
  {
    id: 'pu003-088', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Was ist beim Fahren im Regen zu beachten?',
    options: ['Gefahr von Aquaplaning (Aufschwimmen der Reifen)', 'Bei neuen Reifen ist keine Beeinträchtigung des Fahrverhaltens zu erwarten', 'Auf nasser Straße verlängert sich der Bremsweg beträchtlich – daher halte ich größeren Abstand'],
    correct: [0, 2],
    explain: 'Richtig: A) Gefahr von Aquaplaning (Aufschwimmen der Reifen) · C) Auf nasser Straße verlängert sich der Bremsweg beträchtlich – daher halte ich größeren Abstand'
  },
  {
    id: 'pu003-089', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welche Verpflichtung besteht nach einem Unfall mit Personenschaden?',
    options: ['Die Unfallstelle durch Warnblinkanlage und Warndreieck zu sichern', 'Erste-Hilfe-Maßnahmen für die Verletzten veranlassen', 'Hilfe herbeizurufen (Polizei, Rettungsdienst)', 'Fotos und Maßskizze vom Unfallort anzufertigen'],
    correct: [0, 1, 2],
    explain: 'Richtig: A) Die Unfallstelle durch Warnblinkanlage und Warndreieck zu sichern · B) Erste-Hilfe-Maßnahmen für die Verletzten veranlassen · C) Hilfe herbeizurufen (Polizei, Rettungsdienst)'
  },
  {
    id: 'pu003-090', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Die Profiltiefe der Winterreifen an einem Auto beträgt weniger als 2 mm. Was ist vom Fahrer zu beachten?',
    options: ['Das Fahrzeug darf mit Reifen bis zur gesetzlichen Grenze von 1,6 mm Profiltiefe gefahren werden', 'Die Reifen sollten umgehend erneuert werden, da unter 4 mm Profiltiefe die Sicherheit erheblich beeinträchtigt ist', 'Wenn das Auto nur im Stadtverkehr benutzt wird, soll die Profiltiefe mindestens 1 mm betragen'],
    correct: [0, 1],
    explain: 'Richtig: A) Das Fahrzeug darf mit Reifen bis zur gesetzlichen Grenze von 1,6 mm Profiltiefe gefahren werden · B) Die Reifen sollten umgehend erneuert werden, da unter 4 mm Profiltiefe die Sicherheit erheblich beeinträchtigt ist'
  },
  {
    id: 'pu003-091', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Der Luftdruck in den Reifen hat wesentlichen Einfluss auf die Verkehrssicherheit des Fahrzeuges und die Lebensdauer der Reifen, deshalb…',
    options: ['den Luftdruck mindestens alle 14 Tage bei kalten Reifen kontrollieren', 'nichts selbst veranlassen, weil das Fahrzeug regelmäßig zur Inspektion ist', 'vor längeren Autobahnfahrten, zumal mit voller Beladung, den Luftdruck um 0,2 bis 0,3 bar erhöhen', 'den Luftdruck nur dann kontrollieren, wenn ein Reifen zu wenig Luft hat'],
    correct: [0, 2],
    explain: 'Richtig: A) den Luftdruck mindestens alle 14 Tage bei kalten Reifen kontrollieren · C) vor längeren Autobahnfahrten, zumal mit voller Beladung, den Luftdruck um 0,2 bis 0,3 bar erhöhen'
  },
  {
    id: 'pu003-092', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Mit einem Mofa fährt man',
    options: ['immer mit Licht', 'immer mit Helm und heller (Schutz-)Kleidung', 'nur dann auf Radwegen, wenn sie für Mofas zugelassen sind', 'nur bei Tageslicht'],
    correct: [0, 1, 2],
    explain: 'Richtig: A) immer mit Licht · B) immer mit Helm und heller (Schutz-)Kleidung · C) nur dann auf Radwegen, wenn sie für Mofas zugelassen sind'
  },
  {
    id: 'pu003-093', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Wie bemisst sich innerhalb geschlossener Ortschaften der Mindestabstand zum vorausfahrenden Fahrzeug sein?',
    options: ['generell mindestens 10 m', 'Abstand ist gleich der Länge des vorausfahrenden Fahrzeugs', 'Abstand entspricht der in 1 Sekunde gefahrenen Wegstrecke'],
    correct: 2,
    explain: 'Richtig: C) Abstand entspricht der in 1 Sekunde gefahrenen Wegstrecke'
  },
  {
    id: 'pu003-094', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welches Verhalten ist im Stau auf der Autobahn richtig?',
    options: ['Immer auf die Spur wechseln, die sich bewegt – damit sich der Stau schneller auflöst', 'Eine Gasse für Rettungsfahrzeuge freilassen (zwischen der linken Fahrbahn und der rechts daneben liegenden Spur)', 'Auf einer Spur bleiben, weil der Spurwechsel keinen Zeitgewinn bringt, aber Sicherheit kosten kann'],
    correct: [1, 2],
    explain: 'Richtig: B) Eine Gasse für Rettungsfahrzeuge freilassen (zwischen der linken Fahrbahn und der rechts daneben liegenden Spur) · C) Auf einer Spur bleiben, weil der Spurwechsel keinen Zeitgewinn bringt, aber Sicherheit kosten kann'
  },
  {
    id: 'pu003-095', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Wie lang ist der Anhalteweg („Reaktionsweg + Bremsweg“) eines mit 50 km/h fahrenden PKW auf trockener Straße?',
    options: ['ca. 10 m', 'mindestens 30 m', 'ca. 80 m'],
    correct: 1,
    explain: 'Richtig: B) mindestens 30 m'
  },
  {
    id: 'pu003-096', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Welches Verhalten von Motorradfahrern ist hinsichtlich der Erkennbarkeit gegenüber anderen Verkehrsteilnehmern notwendig?',
    options: ['Auffällige, mehrfarbige Schutzbekleidung und hellfarbigen Motorrad Schutzhelm zu tragen, ist empfehlenswert', 'Mindestens mit Abblendlicht fahren', 'Immer damit rechnen, von anderen nicht gesehen zu werden und daher stets bremsbereit sein'],
    correct: [0, 1, 2],
    explain: 'Richtig: A) Auffällige, mehrfarbige Schutzbekleidung und hellfarbigen Motorrad Schutzhelm zu tragen, ist empfehlenswert · B) Mindestens mit Abblendlicht fahren · C) Immer damit rechnen, von anderen nicht gesehen zu werden und daher stets bremsbereit sein'
  },
  {
    id: 'pu003-097', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Wie kann ein Autofahrer beim Aussteigen die Kollision mit einem auf der Fahrerseite vorbeifahrenden Radfahrer vermeiden?',
    options: ['Vor dem Aussteigen Schulterblick, ob ein Fahrzeug von hinten kommt, als Fahrer Tür mit der rechten Hand öffnen (sog. „Holländischer Griff“)', 'Ein Blick in den Rückspiegel genügt', 'Vorher Handbremse anziehen, Zündschlüssel abziehen, Lenkradschloss einrasten lassen', 'Nur nach der Gehwegseite aussteigen'],
    correct: [0, 2],
    explain: 'Richtig: A) Vor dem Aussteigen Schulterblick, ob ein Fahrzeug von hinten kommt, als Fahrer Tür mit der rechten Hand öffnen (sog. „Holländischer Griff“) · C) Vorher Handbremse anziehen, Zündschlüssel abziehen, Lenkradschloss einrasten lassen'
  },
  {
    id: 'pu003-098', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Bei erheblicher Sichtbehinderung durch Regen ist welche Beleuchtung einzuschalten?',
    options: ['Fernlicht', 'Abblendlicht (Fahrlicht)', 'Standlicht', 'gar keine', 'Tagfahrlicht'],
    correct: [1, 4],
    explain: 'Richtig: B) Abblendlicht (Fahrlicht) · E) Tagfahrlicht'
  },
  {
    id: 'pu003-099', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Wie verhalten sich Fußgänger bei Schnee und Eis richtig?',
    options: ['Erst losgehen, nachdem alle Wege geräumt und gestreut sind', 'Rutschhemmendes, festes Schuhwerk tragen', 'In der Dämmerung helle Kleidung tragen'],
    correct: [1, 2],
    explain: 'Richtig: B) Rutschhemmendes, festes Schuhwerk tragen · C) In der Dämmerung helle Kleidung tragen'
  },
  {
    id: 'pu003-100', path: 'lehrling-vde', category: 'Arbeitssicherheit',
    question: 'Was ist beim Fahren in der Dämmerung und bei Dunkelheit zu beachten?',
    options: ['Die Geschwindigkeit muss den schlechteren Sichtverhältnissen angepasst werden', 'Das Abblendlicht (Fahrlicht; Tagfahrlicht) sollte eher zu früh als zu spät eingeschaltet werden', 'Man sollte möglichst nicht in die Scheinwerfer entgegenkommender Fahrzeuge blicken', 'In der Dämmerung reicht das Standlicht'],
    correct: [0, 1, 2],
    explain: 'Richtig: A) Die Geschwindigkeit muss den schlechteren Sichtverhältnissen angepasst werden · B) Das Abblendlicht (Fahrlicht; Tagfahrlicht) sollte eher zu früh als zu spät eingeschaltet werden · C) Man sollte möglichst nicht in die Scheinwerfer entgegenkommender Fahrzeuge blicken'
  },

  // ====== EIGENE FRAGEN MIT QUELLENANGABEN (DGUV / VDE / DIN) ======
  {
    id: 'lg51', path: 'lehrling-grund', category: 'Schaltzeichen',
    question: 'Wie wird ein ohmscher Widerstand im Schaltplan nach DIN EN 60617 dargestellt?',
    options: ['Rechteck', 'Zickzack-Linie', 'Kreis mit X', 'Dreieck'],
    correct: 0,
    explain: 'Nach DIN EN 60617 (IEC) wird der Widerstand als Rechteck dargestellt. Die Zickzack-Linie ist die ältere amerikanische Darstellung (ANSI).',
    source: 'DIN EN 60617 (Schaltzeichen)'
  },
  {
    id: 'lg52', path: 'lehrling-grund', category: 'Einheiten',
    question: 'Wie heißt der Kehrwert des elektrischen Widerstands und welche Einheit hat er?',
    options: ['Konduktanz / Siemens (S)', 'Kapazität / Farad (F)', 'Suszeptanz / Henry (H)', 'Reaktanz / Ohm (Ω)'],
    correct: 0,
    explain: 'Der elektrische Leitwert G = 1/R hat die Einheit Siemens (S). 1 S = 1 A/V.',
    source: 'Grundbegriffe Elektrotechnik (DIN 1304)'
  },
  {
    id: 'lg53', path: 'lehrling-grund', category: 'Berechnung',
    question: 'Welche Spannung fällt an einem 10-Ω-Widerstand bei einem Strom von 2 A ab?',
    options: ['5 V', '12 V', '20 V', '0,2 V'],
    correct: 2,
    explain: 'U = R · I = 10 Ω · 2 A = 20 V (Ohmsches Gesetz).',
    source: 'Ohmsches Gesetz'
  },
  {
    id: 'lg54', path: 'lehrling-grund', category: 'Drehstrom',
    question: 'Wie verhält sich die verkettete Spannung zur Sternspannung im symmetrischen Drehstromnetz?',
    options: ['U_v = U_st (gleich)', 'U_v = √3 · U_st', 'U_v = 2 · U_st', 'U_v = 3 · U_st'],
    correct: 1,
    explain: 'U_verkettet = √3 · U_Stern. 230 V · √3 ≈ 400 V – daher 230/400 V im Niederspannungsnetz.',
    source: 'DIN VDE 0100-100 / Drehstromtechnik'
  },
  {
    id: 'lg55', path: 'lehrling-grund', category: 'Wechselstrom',
    question: 'Wie heißt der Wechselstromwiderstand eines idealen Kondensators?',
    options: ['Resistanz', 'Kapazitive Reaktanz X_C', 'Konduktanz', 'Suszeptanz'],
    correct: 1,
    explain: 'Kapazitive Reaktanz X_C = 1 / (2π·f·C). Mit steigender Frequenz sinkt X_C.',
    source: 'Wechselstromtechnik (Grundlagen)'
  },
  {
    id: 'lg56', path: 'lehrling-grund', category: 'Aderfarben',
    question: 'Welche Aderfarbe hat üblicherweise der Außenleiter L2?',
    options: ['braun', 'schwarz', 'grau', 'blau'],
    correct: 1,
    explain: 'Harmonisierte Norm DIN VDE 0293-308: L1 braun, L2 schwarz, L3 grau, N blau, PE grün-gelb.',
    source: 'DIN VDE 0293-308 (Aderkennzeichnung)'
  },
  {
    id: 'lg57', path: 'lehrling-grund', category: 'Schwingkreis',
    question: 'Welche Bedingung gilt für Resonanz in einem RLC-Reihenschaltkreis?',
    options: ['X_L = X_C', 'R = X_L', 'R = X_C', 'L = C'],
    correct: 0,
    explain: 'Bei Resonanz heben sich induktive und kapazitive Reaktanz auf (X_L = X_C). Der Stromkreis verhält sich rein ohmsch, Strom maximal.',
    source: 'Schwingkreislehre'
  },
  {
    id: 'lg58', path: 'lehrling-grund', category: 'Maschinen',
    question: 'Was passiert mit der Sekundärspannung eines Trafos, wenn die Primärwindungszahl bei gleicher Sekundärwindungszahl verdoppelt wird?',
    options: ['Verdoppelt sich', 'Halbiert sich', 'Bleibt gleich', 'Vervierfacht sich'],
    correct: 1,
    explain: 'U2 = U1 · N2/N1. Doppelte N1 → halbe U2 (gleiche U1 und N2 vorausgesetzt).',
    source: 'Transformator-Grundgleichung'
  },
  {
    id: 'lg59', path: 'lehrling-grund', category: 'Berechnung',
    question: 'Wie verändert sich die Leistung an einem ohmschen Widerstand bei Verdopplung der Spannung?',
    options: ['Bleibt gleich', 'Verdoppelt sich', 'Verdreifacht sich', 'Vervierfacht sich'],
    correct: 3,
    explain: 'P = U²/R. Doppelte Spannung → vierfache Leistung. Wichtig bei Spannungsanpassungen und Heizleistungen.',
    source: 'Leistungsformel'
  },
  {
    id: 'lg60', path: 'lehrling-grund', category: 'Stromkreisfehler',
    question: 'Was ist ein Körperschluss?',
    options: ['Verbindung zwischen zwei Außenleitern', 'Verbindung zwischen Außenleiter und Erde', 'Fehlerhafte elektrische Verbindung zwischen aktivem Teil und einem Körper (leitfähigem Gehäuse)', 'Strom durch den menschlichen Körper'],
    correct: 2,
    explain: 'Körperschluss: aktive Spannung erreicht das eigentlich spannungslose Gehäuse. Schutz: PE + RCD.',
    source: 'Stromkreis-Fehlerarten'
  },
  {
    id: 'lg61', path: 'lehrling-grund', category: 'Stromkreisfehler',
    question: 'Was ist ein Erdschluss?',
    options: ['Verbindung zwischen zwei Außenleitern', 'Verbindung zwischen aktivem Teil und Erde (z. B. über defekte Isolation)', 'Verbindung zwischen N und PE', 'Fehlender Schutzleiter'],
    correct: 1,
    explain: 'Erdschluss = Strom-führender Teil bekommt Verbindung zur Erde, z. B. durchgescheuerte Leitung. Bei TT-/TN-Netz löst der RCD aus.',
    source: 'Stromkreis-Fehlerarten'
  },
  {
    id: 'lg62', path: 'lehrling-grund', category: 'Stromkreisfehler',
    question: 'Was ist ein Kurzschluss im engeren Sinne?',
    options: ['Niederohmige Verbindung zwischen zwei aktiven Leitern', 'Hoher Widerstand im Stromkreis', 'Verbindung Phase-Erde', 'Stromfluss durch den Körper'],
    correct: 0,
    explain: 'Kurzschluss = sehr niederohmige Verbindung zwischen aktiven Leitern. Sehr hoher Strom – LS-Schalter löst sofort aus.',
    source: 'DIN VDE 0100-430 (Schutz bei Überstrom)'
  },
  {
    id: 'lg63', path: 'lehrling-grund', category: 'Berechnung',
    question: 'Wie berechnet man den Spannungsfall in einer einphasigen Leitung?',
    options: ['Δu = (2 · l · I · ρ) / A', 'Δu = (l · I) / A', 'Δu = R / I', 'Δu = U · I'],
    correct: 0,
    explain: 'Δu = 2 · l · I · ρ / A. Faktor 2 für Hin- und Rückleiter. Bei symmetrischem Drehstrom: Faktor √3 statt 2.',
    source: 'DIN VDE 0100-520 (Spannungsfall)'
  },
  {
    id: 'lg64', path: 'lehrling-grund', category: 'Photovoltaik',
    question: 'Welche elektrische Größe gibt ein PV-Modul typischerweise unter Standard-Test-Conditions (STC) im Datenblatt an?',
    options: ['Maximale Leistung P_mpp am Maximum Power Point', 'Wirkungsgrad als einzige Angabe', 'Nur die Spannung', 'Nur den Strom'],
    correct: 0,
    explain: 'STC: 1000 W/m², 25 °C, AM 1,5. Hauptangaben sind P_mpp, U_mpp, I_mpp sowie Leerlaufspannung U_OC und Kurzschlussstrom I_SC.',
    source: 'IEC 61215 (PV-Modul-Prüfung)'
  },
  {
    id: 'lg65', path: 'lehrling-grund', category: 'Wechselstrom',
    question: 'Was bedeutet ein cos φ von 0,8 (induktiv)?',
    options: ['80 % Wirkungsgrad', 'Wirkleistung beträgt 80 % der Scheinleistung', '80 % des Stroms fließen', '80 % der Spannung'],
    correct: 1,
    explain: 'cos φ = P/S. Bei cos φ = 0,8 ind. ist 80 % Wirkleistung, 60 % Blindleistung. Niedriger cos φ erhöht Verluste – Kompensationspflicht ab gewisser Größe.',
    source: 'Wechselstromtechnik / EnergieWG'
  },
  {
    id: 'lv54', path: 'lehrling-vde', category: 'Normen',
    question: 'Welche Spannungsbereiche umfasst die DIN VDE 0100 (Reihe)?',
    options: ['Bis 230 V', 'Bis 400 V', 'Bis AC 1000 V / DC 1500 V', 'Bis 30 kV'],
    correct: 2,
    explain: 'VDE 0100 gilt für das Errichten von Niederspannungsanlagen bis 1000 V AC bzw. 1500 V DC. Darüber gelten andere Normen (VDE 0101 etc.).',
    source: 'DIN VDE 0100-100 (Geltungsbereich)'
  },
  {
    id: 'lv55', path: 'lehrling-vde', category: 'Vorschriften',
    question: 'Was ist die Hauptaufgabe der Unfallverhütungsvorschrift DGUV V1?',
    options: ['Regelt Lohnfortzahlung', 'Definiert allgemeine Pflichten zur Prävention im Betrieb (Unternehmer und Versicherte)', 'Regelt nur elektrische Anlagen', 'Regelt nur das Bauwesen'],
    correct: 1,
    explain: 'DGUV V1 = "Grundsätze der Prävention". Allgemeine Pflichten von Unternehmer und Versicherten zu Sicherheit und Gesundheitsschutz.',
    source: 'DGUV Vorschrift 1 (Grundsätze der Prävention)'
  },
  {
    id: 'lv56', path: 'lehrling-vde', category: 'Erste Hilfe',
    question: 'Welcher erste Schritt ist bei einem Stromunfall zwingend?',
    options: ['Verletzten direkt anfassen', 'Stromkreis abschalten oder Verletzten mit isolierendem Gegenstand vom Stromkreis trennen (Eigensicherung beachten)', 'Sofort die Atmung kontrollieren', 'Direkt 112 anrufen, ohne andere Maßnahmen'],
    correct: 1,
    explain: 'Erst freischalten oder mit isolierendem Gegenstand trennen, sonst gefährdet sich der Helfer selbst. Dann Notruf 112, Bewusstsein/Atmung prüfen, ggf. Reanimation.',
    source: 'DGUV Information 204-022 (Erste Hilfe)'
  },
  {
    id: 'lv57', path: 'lehrling-vde', category: 'Prüfung',
    question: 'Welches Prüfintervall ist für ortsfeste elektrische Anlagen in Wohngebäuden empfohlen?',
    options: ['Jährlich', 'Alle 4 Jahre', 'Alle 10 Jahre', 'Nur bei Verdacht'],
    correct: 1,
    explain: 'Wohngebäude: Empfehlung alle 4 Jahre nach DGUV V3 / TRBS. Im gewerblichen Bereich nach Gefährdungsbeurteilung (oft 1–4 Jahre).',
    source: 'DGUV V3 / TRBS 1201'
  },
  {
    id: 'lv58', path: 'lehrling-vde', category: 'Schutzklassen',
    question: 'Welches Symbol kennzeichnet ein Gerät der Schutzklasse I?',
    options: ['Doppelquadrat', 'Erdungssymbol', 'Tropfsymbol', 'IP-Code'],
    correct: 1,
    explain: 'Schutzklasse I = Erdungs-Symbol. Schutzklasse II = Doppelquadrat (zwei ineinander liegende Quadrate). Schutzklasse III = Raute mit III.',
    source: 'DIN EN 61140 / VDE 0140-1'
  },
  {
    id: 'lv59', path: 'lehrling-vde', category: 'Messtechnik',
    question: 'Welches Messmittel ist für die Feststellung der Spannungsfreiheit nach DGUV V3 zwingend?',
    options: ['Beliebiges Multimeter', 'Zweipoliger Spannungsprüfer nach DIN EN 61243-3, regelmäßig geprüft', 'Einpoliger Phasenprüfer-Schraubendreher', 'Berührungsloser NCV-Tester'],
    correct: 1,
    explain: 'Zweipoliger Spannungsprüfer nach DIN EN 61243-3 ist Pflicht. Phasenprüfer-Schraubendreher ist NICHT zulässig zur Spannungsfreiheits-Feststellung!',
    source: 'DIN EN 61243-3 / DGUV V3 § 6'
  },
  {
    id: 'lv60', path: 'lehrling-vde', category: 'Installation',
    question: 'Wie viele Endstromkreise werden für eine 3-Zimmer-Wohnung nach DIN 18015-2 typischerweise mindestens vorgesehen?',
    options: ['1', '3', '5 (zzgl. Sonderstromkreise)', '12'],
    correct: 2,
    explain: 'DIN 18015-2 staffelt nach Wohnungsgröße. 3-Zi-Wohnung kommt typisch auf etwa 5 Endstromkreise zzgl. Sonderausstattung (Herd, Waschmaschine, Geschirrspüler).',
    source: 'DIN 18015-2 (Wohnungsbau Mindestausstattung)'
  },
  {
    id: 'lv61', path: 'lehrling-vde', category: 'Schutzeinrichtungen',
    question: 'Welcher maximale Schleifenwiderstand ist für einen LS-Schalter B16 (5-fache Auslösung, 230 V) zulässig?',
    options: ['ca. 0,3 Ω', 'ca. 1,4 Ω', 'ca. 2,87 Ω', 'ca. 14 Ω'],
    correct: 2,
    explain: 'Z_S ≤ U_0 / I_a. Mit U_0 = 230 V, I_a = 5 · 16 A = 80 A → Z_S ≤ 230/80 = 2,875 Ω. Wird im Schleifenmess-Test geprüft.',
    source: 'DIN VDE 0100-410 § 411 / TAB'
  },
  {
    id: 'lv62', path: 'lehrling-vde', category: 'Sicherheit',
    question: 'Welche persönliche Schutzausrüstung ist beim Arbeiten unter Spannung zwingend?',
    options: ['Nur Sicherheitsschuhe', 'Nur Schutzbrille', 'Isolierte Werkzeuge, Isolierhandschuhe der passenden Spannungsklasse, Gesichtsschutz, isolierende Standfläche', 'Atemschutzmaske'],
    correct: 2,
    explain: 'Arbeiten unter Spannung erfordert vollständige PSA: Isolierhandschuhe (z. B. Klasse 0 für 1000 V), isoliertes Werkzeug (IEC 60900), Gesichtsschutz, isolierende Standfläche/Matte. Vorher Gefährdungsbeurteilung und schriftliche Anweisung.',
    source: 'DGUV V3 § 8 / DIN EN 60903'
  },
  {
    id: 'lv63', path: 'lehrling-vde', category: 'Photovoltaik',
    question: 'Wer muss vor der Inbetriebnahme einer netzgekoppelten PV-Anlage informiert werden?',
    options: ['Nur das Finanzamt', 'Der Netzbetreiber (Anmeldung gemäß VDE-AR-N 4105 bzw. 4100)', 'Nur die Bundesnetzagentur', 'Niemand bei Anlagen unter 30 kWp'],
    correct: 1,
    explain: 'Vor Inbetriebnahme jeder netzgekoppelten PV-Anlage Anmeldung beim Netzbetreiber gemäß VDE-AR-N 4105 (NS-Einspeisung). Zusätzlich Marktstammdatenregister-Eintrag bei der Bundesnetzagentur innerhalb 1 Monats.',
    source: 'VDE-AR-N 4105 / MaStRV § 5'
  },
  {
    id: 'm46', path: 'meister', category: 'Steuern',
    question: 'Bis zu welchem Vorjahresumsatz greift seit 2025 die Kleinunternehmerregelung (§ 19 UStG)?',
    options: ['17.500 €', '22.000 €', '25.000 €', '50.000 €'],
    correct: 2,
    explain: 'Seit 2025: Vorjahresumsatz ≤ 25.000 € UND laufendes Jahr voraussichtlich ≤ 100.000 €. Dann darf USt nicht ausgewiesen werden, kein Vorsteuerabzug.',
    source: '§ 19 UStG (Stand 2025)'
  },
  {
    id: 'm47', path: 'meister', category: 'Versicherungen',
    question: 'Welche Versicherung ist für Handwerksbetriebe gesetzlich zwingend?',
    options: ['Berufshaftpflicht', 'Berufsgenossenschaftliche Pflichtversicherung (BG ETEM für Elektroberufe)', 'Rechtsschutzversicherung', 'Cyber-Versicherung'],
    correct: 1,
    explain: 'Mitgliedschaft in der zuständigen Berufsgenossenschaft ist gesetzliche Pflicht (§ 121 SGB VII). Für Elektrotechnik: BG ETEM. Beiträge nach Lohnsumme und Gefahrklasse.',
    source: '§ 121 SGB VII / BG ETEM'
  },
  {
    id: 'm48', path: 'meister', category: 'AdA – Pädagogik',
    question: 'Aus welchen Teilen besteht die AdA-Prüfung nach AEVO?',
    options: ['Nur schriftliche Prüfung', 'Nur praktische Prüfung', 'Schriftlicher Teil (Multiple Choice + offene Fragen) und praktischer Teil (Präsentation oder Ausbildungssituation + Fachgespräch)', 'Keine Prüfung erforderlich'],
    correct: 2,
    explain: 'AEVO § 4: schriftlicher und praktischer Teil. Praktisch: Präsentation oder Durchführung einer Ausbildungssituation (15 min) + Fachgespräch (15 min). Beide Teile mind. ausreichend.',
    source: 'AEVO § 4'
  },
  {
    id: 'm49', path: 'meister', category: 'Recht – BGB',
    question: 'Wer haftet bei einem Sachschaden, der durch Pflichtverletzung im Werkvertrag entsteht?',
    options: ['Immer der Unternehmer (verschuldensunabhängig)', 'Der Unternehmer bei Verschulden (Vorsatz oder Fahrlässigkeit – wird vermutet)', 'Immer der Auftraggeber', 'Nur ein Subunternehmer'],
    correct: 1,
    explain: '§ 280 BGB: Schadensersatz bei Pflichtverletzung, wenn Verschulden vorliegt. Verschulden wird vermutet – der Unternehmer muss sich entlasten. Umfasst Vorsatz und (auch leichte) Fahrlässigkeit.',
    source: '§ 280 BGB / § 634 BGB'
  },
  {
    id: 'm50', path: 'meister', category: 'Kalkulation',
    question: 'Welcher Material-Gemeinkostenzuschlag wird im Elektrohandwerk üblicherweise angesetzt?',
    options: ['0 %', '10–15 %', '50–60 %', '100 %'],
    correct: 1,
    explain: 'Üblich sind 10–15 % Materialgemeinkosten-Zuschlag auf den Materialeinkaufspreis. Plus Gewinn-/Wagniszuschlag (5–10 %). Endpreis ≈ EK · 1,2–1,3 für Material.',
    source: 'Handwerks-Kalkulation (HwK-Empfehlungen)'
  }
];
