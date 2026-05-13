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
  }
];
