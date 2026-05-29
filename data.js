// Voltify – Fragen-Datenbank
// path: lehrling-grund | lehrling-vde | meister
// Bei Anpassungen: einfach editieren und neu deployen.
// Quellen-Stil: angelehnt an typische Prüfungsfragen IHK / HwK / Innung
// Elektroniker für Energie- und Gebäudetechnik (Lehrling) und
// Elektrotechnikermeister (Teile I/II + III/IV).

window.PATHS = {
  'lehrling-grund': {
    name: 'Lehrling: Grundlagen',
    short: 'Grundlagen',
    icon: 'G',
    desc: 'Ohm, Spannung, Schaltungen, Drehstrom, Bauelemente'
  },
  'lehrling-vde': {
    name: 'Lehrling: VDE und Installation',
    short: 'VDE und Installation',
    icon: 'V',
    desc: 'Sicherheit, Normen, Installation, RCD, Wallbox, PV'
  },
  'meister': {
    name: 'Meister',
    short: 'Meister',
    icon: 'M',
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
    explain: 'Spannung (U) = Widerstand (R) · Stromstärke (I). Gilt für ohmsche Widerstände bei konstanter Temperatur.',
    source: 'Ohmsches Gesetz / DIN 1304'
  },
  {
    id: 'lg02', path: 'lehrling-grund', category: 'Grundgesetze',
    question: 'Wie berechnet man die elektrische Leistung im Gleichstromkreis?',
    options: ['P = U · I', 'P = U + I', 'P = U / I', 'P = U² · I'],
    correct: 0,
    explain: 'P = U · I (Leistung = Spannung · Strom). In Watt (W).',
    source: 'Leistungsformel P = U · I'
  },
  {
    id: 'lg03', path: 'lehrling-grund', category: 'Einheiten',
    question: 'Welche Einheit hat der elektrische Widerstand?',
    options: ['Volt (V)', 'Ampere (A)', 'Ohm (Ω)', 'Watt (W)'],
    correct: 2,
    explain: 'Der elektrische Widerstand wird in Ohm (Ω) gemessen.',
    source: 'SI-Basiseinheiten'
  },
  {
    id: 'lg04', path: 'lehrling-grund', category: 'Einheiten',
    question: 'Welche Einheit hat die elektrische Leistung?',
    options: ['Joule (J)', 'Watt (W)', 'Volt (V)', 'Var (var)'],
    correct: 1,
    explain: 'Leistung wird in Watt (W) gemessen. 1 W = 1 V · 1 A.',
    source: 'SI-Basiseinheiten'
  },
  {
    id: 'lg05', path: 'lehrling-grund', category: 'Einheiten',
    question: 'Welche Einheit hat die elektrische Arbeit (Energie)?',
    options: ['Watt (W)', 'Wattstunde (Wh) bzw. Joule (J)', 'Ampere (A)', 'Coulomb (C)'],
    correct: 1,
    explain: 'Energie = Leistung · Zeit. Einheit: Wattsekunde = Joule, in der Praxis Wattstunde (Wh) oder Kilowattstunde (kWh).',
    source: 'SI-Einheiten / DIN 1301'
  },
  {
    id: 'lg06', path: 'lehrling-grund', category: 'Netz',
    question: 'Welche Frequenz hat das öffentliche Stromnetz in Deutschland?',
    options: ['16,7 Hz', '50 Hz', '60 Hz', '400 Hz'],
    correct: 1,
    explain: '50 Hz, das ist die Netzfrequenz in Europa. 60 Hz gilt z. B. in den USA.',
    source: 'DIN VDE 0100-100 / EN 50160'
  },
  {
    id: 'lg07', path: 'lehrling-grund', category: 'Netz',
    question: 'Welche Spannungen liegen im deutschen Niederspannungsnetz an?',
    options: ['110 V / 230 V', '230 V / 400 V', '400 V / 690 V', '230 V / 690 V'],
    correct: 1,
    explain: '230 V zwischen Außen- und Neutralleiter (L–N), 400 V zwischen zwei Außenleitern (L–L).',
    source: 'DIN VDE 0100-100 / EN 50160'
  },
  {
    id: 'lg08', path: 'lehrling-grund', category: 'Schaltungen',
    question: 'Wie verhalten sich Widerstände in Reihenschaltung?',
    options: ['Sie addieren sich: R = R1 + R2 + …', 'Kehrwerte addieren sich', 'Größter Widerstand zählt', 'Kleinster Widerstand zählt'],
    correct: 0,
    explain: 'Reihenschaltung: Gesamtwiderstand = Summe der Einzelwiderstände. Strom überall gleich.',
    source: 'Kirchhoffsche Gesetze'
  },
  {
    id: 'lg09', path: 'lehrling-grund', category: 'Schaltungen',
    question: 'Wie berechnet man den Gesamtwiderstand bei zwei parallel geschalteten Widerständen?',
    options: ['R = R1 + R2', 'R = R1 · R2', 'R = (R1 · R2) / (R1 + R2)', 'R = R1 / R2'],
    correct: 2,
    explain: 'Bei zwei parallelen Widerständen gilt R = (R1 · R2) / (R1 + R2). Allgemein: 1/R = 1/R1 + 1/R2 + …',
    source: 'Kirchhoffsche Gesetze'
  },
  {
    id: 'lg10', path: 'lehrling-grund', category: 'Strom',
    question: 'Was ist Wechselspannung?',
    options: ['Spannung mit konstantem Wert und Polarität',
             'Spannung, die ihren Wert und ihre Polarität periodisch ändert',
             'Spannung über 1000 V',
             'Spannung mit überlagertem Gleichanteil'],
    correct: 1,
    explain: 'Wechselspannung (AC) ändert periodisch Wert und Polarität, im Netz sinusförmig mit 50 Hz.',
    source: 'Wechselstromtechnik (DIN 40110)'
  },
  {
    id: 'lg11', path: 'lehrling-grund', category: 'Aderfarben',
    question: 'Welche Farbe hat der Schutzleiter (PE)?',
    options: ['blau', 'schwarz', 'grün-gelb', 'braun'],
    correct: 2,
    explain: 'Der Schutzleiter ist immer grün-gelb. Diese Kombination ist ausschließlich für PE reserviert.',
    source: 'DIN VDE 0293-308'
  },
  {
    id: 'lg12', path: 'lehrling-grund', category: 'Aderfarben',
    question: 'Welche Farbe hat der Neutralleiter (N)?',
    options: ['grün-gelb', 'blau', 'grau', 'schwarz'],
    correct: 1,
    explain: 'Der Neutralleiter ist blau. Grau wird oft als zweiter geschalteter Leiter verwendet, ist aber nicht der N.',
    source: 'DIN VDE 0293-308'
  },
  {
    id: 'lg13', path: 'lehrling-grund', category: 'Drehstrom',
    question: 'Wie viele Außenleiter hat ein Drehstromnetz?',
    options: ['1', '2', '3', '4'],
    correct: 2,
    explain: 'Drehstrom hat drei Außenleiter L1, L2, L3, jeweils 120° phasenverschoben.',
    source: 'DIN VDE 0100-100 / Drehstromnetz'
  },
  {
    id: 'lg14', path: 'lehrling-grund', category: 'Drehstrom',
    question: 'Wie groß ist die Periodendauer bei 50 Hz?',
    options: ['10 ms', '20 ms', '50 ms', '100 ms'],
    correct: 1,
    explain: 'T = 1 / f = 1 / 50 Hz = 20 ms.',
    source: 'T = 1 / f'
  },
  {
    id: 'lg15', path: 'lehrling-grund', category: 'Schaltungen',
    question: 'In einer Reihenschaltung, was gilt für die Spannung?',
    options: ['An allen Verbrauchern gleich', 'Sie teilt sich entsprechend der Widerstände auf',
             'Sie ist immer null', 'Sie verdoppelt sich'],
    correct: 1,
    explain: 'In der Reihenschaltung teilt sich die Gesamtspannung im Verhältnis der Einzelwiderstände auf. Der Strom ist gleich.',
    source: 'Kirchhoffsche Gesetze'
  },
  {
    id: 'lg16', path: 'lehrling-grund', category: 'Schaltungen',
    question: 'In einer Parallelschaltung, was gilt für den Strom?',
    options: ['Überall gleich', 'Er teilt sich auf die Zweige auf',
             'Er ist immer null', 'Er addiert sich zu Null'],
    correct: 1,
    explain: 'In der Parallelschaltung teilt sich der Strom auf die Zweige, die Spannung ist überall gleich.',
    source: 'Kirchhoffsche Gesetze'
  },
  {
    id: 'lg17', path: 'lehrling-grund', category: 'Drehstrom',
    question: 'Wie berechnet man die Wirkleistung im Drehstrom-Symmetriebetrieb?',
    options: ['P = U · I', 'P = √3 · U · I · cos φ', 'P = 3 · U · I', 'P = U · I · cos φ'],
    correct: 1,
    explain: 'P = √3 · U · I · cos φ, mit U = verkettete Spannung (z. B. 400 V), I = Außenleiterstrom.',
    source: 'Drehstromrechnung (P = √3 · U · I · cos φ)'
  },
  {
    id: 'lg18', path: 'lehrling-grund', category: 'Grundgesetze',
    question: 'Wie hängen elektrische Energie, Leistung und Zeit zusammen?',
    options: ['W = P · t', 'W = P / t', 'W = P + t', 'W = P · t²'],
    correct: 0,
    explain: 'Energie = Leistung · Zeit. Beispiel: 2 kW über 3 h = 6 kWh.',
    source: 'Energie-Leistungs-Beziehung W = P · t'
  },
  {
    id: 'lg19', path: 'lehrling-grund', category: 'Strom',
    question: 'Was ist der Effektivwert (Ueff) einer sinusförmigen Wechselspannung?',
    options: ['Spitzenwert · √2',
             'Spitzenwert / √2',
             'Spitzenwert / 2',
             'Spitzenwert · 2'],
    correct: 1,
    explain: 'Ueff = Û / √2. Bei 230 V Effektivspannung beträgt der Spitzenwert ca. 325 V.',
    source: 'Wechselstromtechnik (Effektivwert)'
  },
  {
    id: 'lg20', path: 'lehrling-grund', category: 'Aderfarben',
    question: 'Welche Farbe hat der Außenleiter L1 nach DIN VDE 0293-308?',
    options: ['blau', 'braun', 'schwarz', 'grau'],
    correct: 1,
    explain: 'Nach harmonisierter Norm: L1 braun, L2 schwarz, L3 grau, N blau, PE grün-gelb.',
    source: 'DIN VDE 0293-308'
  },
  {
    id: 'lg21', path: 'lehrling-grund', category: 'Magnetismus',
    question: 'Was geschieht in einer Spule, wenn sich der Stromfluss schnell ändert?',
    options: ['Nichts',
             'Es entsteht eine Induktionsspannung, die der Änderung entgegenwirkt',
             'Die Spule wird zur Stromquelle ohne Verluste',
             'Die Spule wird zum Kondensator'],
    correct: 1,
    explain: 'Lenz\'sche Regel: Die induzierte Spannung wirkt der Stromänderung entgegen (Selbstinduktion).',
    source: 'Faradaysches Induktionsgesetz / Lenz’sche Regel'
  },
  {
    id: 'lg22', path: 'lehrling-grund', category: 'Bauteile',
    question: 'Was speichert ein Kondensator?',
    options: ['Ladung in einem elektrischen Feld', 'Energie in einem magnetischen Feld',
             'Wärme', 'Stromstärke'],
    correct: 0,
    explain: 'Ein Kondensator speichert elektrische Ladung in einem elektrischen Feld zwischen seinen Platten. Q = C · U.',
    source: 'Kondensatorgrundlagen (Q = C · U)'
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
    explain: 'W = ½ · C · U². Energie steigt quadratisch mit der Spannung, wichtig bei Sicherheitsabständen!'
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
    options: ['Stromrichtungsabhängige Leitung, sperrt in Sperr-, leitet in Durchlassrichtung',
             'Stromregelung in beide Richtungen gleich',
             'Spannungswandlung wie Trafo',
             'Speicherung von Ladung'],
    correct: 0,
    explain: 'Diode = Einwegventil für Strom. In Durchlassrichtung leitet sie ab Schwellenspannung (Si: ca. 0,7 V), in Sperrrichtung blockiert sie (bis Durchbruch).'
  },
  {
    id: 'lg32', path: 'lehrling-grund', category: 'Halbleiter',
    question: 'Welche typische Durchlassspannung hat eine rote Standard-LED?',
    options: ['ca. 0,3 V', 'ca. 0,7 V', 'ca. 1,8, 2,2 V', 'ca. 5 V'],
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
    explain: 'U_eff = Û / √2 = 325 / 1,414 ≈ 230 V. Das ist der Effektivwert im deutschen Niederspannungsnetz.'
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
    explain: 's = (n_d − n) / n_d. Ohne Schlupf könnte der Rotor keine Spannung induzieren, kein Drehmoment. Typisch 2–6 % bei Nennlast.'
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
    explain: '1. Freischalten · 2. Gegen Wiedereinschalten sichern · 3. Spannungsfreiheit feststellen · 4. Erden und Kurzschließen · 5. Benachbarte unter Spannung stehende Teile abdecken oder abschranken.',
    source: 'DIN VDE 0105-100'
  },
  {
    id: 'lv02', path: 'lehrling-vde', category: 'Sicherheit',
    question: 'Wie lautet die korrekte Reihenfolge der 5 Sicherheitsregeln?',
    options: [
      'Freischalten, Spannungsfreiheit, Sichern, Erden, Abdecken',
      'Freischalten, Sichern, Spannungsfreiheit, Erden, Abdecken',
      'Spannungsfreiheit, Freischalten, Sichern, Abdecken, Erden',
      'Erden, Freischalten, Sichern, Spannungsfreiheit, Abdecken'
    ],
    correct: 1,
    explain: 'Eselsbrücke „FSSEAN": Freischalten, Sichern, Spannungsfreiheit feststellen, Erden+Kurzschließen, benachbarte Teile Abdecken.',
    source: 'DIN VDE 0105-100'
  },
  {
    id: 'lv03', path: 'lehrling-vde', category: 'Netzformen',
    question: 'Was kennzeichnet ein TN-Netz?',
    options: ['Sternpunkt geerdet, Körper über separaten Erder geerdet',
             'Sternpunkt geerdet, Körper über Schutzleiter mit Sternpunkt verbunden',
             'Sternpunkt isoliert, Körper geerdet',
             'Sternpunkt und Körper beide isoliert'],
    correct: 1,
    explain: 'TN-Netz: Sternpunkt direkt geerdet (T), Körper über Schutzleiter mit dem Sternpunkt verbunden (N).',
    source: 'DIN VDE 0100-100 / DIN VDE 0100-310'
  },
  {
    id: 'lv04', path: 'lehrling-vde', category: 'Netzformen',
    question: 'Was kennzeichnet ein TT-Netz?',
    options: ['Sternpunkt geerdet, Körper am separaten Erder',
             'Sternpunkt geerdet, Körper über PE am Sternpunkt',
             'Sternpunkt isoliert, Körper geerdet',
             'Beide Sternpunkte isoliert'],
    correct: 0,
    explain: 'TT-Netz: Sternpunkt direkt geerdet (T), Körper über separaten lokalen Erder geerdet (T).',
    source: 'DIN VDE 0100-100 / DIN VDE 0100-310'
  },
  {
    id: 'lv05', path: 'lehrling-vde', category: 'Netzformen',
    question: 'Was kennzeichnet ein IT-Netz?',
    options: ['Sternpunkt geerdet',
             'Sternpunkt isoliert oder über Impedanz angeschlossen, Körper geerdet',
             'Beide Pole geerdet',
             'Nur PE-Leiter vorhanden'],
    correct: 1,
    explain: 'IT-Netz: Sternpunkt isoliert (oder hochohmig geerdet), Körper geerdet. Erster Erdschluss ist ungefährlich, Vorteil in OPs, Industrie etc.',
    source: 'DIN VDE 0100-100 / DIN VDE 0100-310'
  },
  {
    id: 'lv06', path: 'lehrling-vde', category: 'Schutzklassen',
    question: 'Was bedeutet Schutzklasse I?',
    options: ['Schutzkleinspannung', 'Schutz durch Schutzisolierung',
             'Schutz durch Anschluss an Schutzleiter', 'Funktionskleinspannung'],
    correct: 2,
    explain: 'Schutzklasse I: Berührbare leitfähige Teile sind mit dem Schutzleiter verbunden, Symbol: Erdungszeichen.',
    source: 'DIN EN 61140 (VDE 0140-1)'
  },
  {
    id: 'lv07', path: 'lehrling-vde', category: 'Schutzklassen',
    question: 'Was bedeutet Schutzklasse II?',
    options: ['Schutzleiter erforderlich', 'Schutzisolierung (doppelt/verstärkt)',
             'Schutzkleinspannung', 'IP-Schutz X4'],
    correct: 1,
    explain: 'Schutzklasse II: doppelte oder verstärkte Isolierung, kein Schutzleiteranschluss. Symbol: zwei ineinander liegende Quadrate.',
    source: 'DIN EN 61140 (VDE 0140-1)'
  },
  {
    id: 'lv08', path: 'lehrling-vde', category: 'Schutzklassen',
    question: 'Was bedeutet Schutzklasse III?',
    options: ['Schutzkleinspannung (SELV/PELV)', 'Vollisolierung',
             'Schutzleiter zwingend', 'Hochspannungsanschluss'],
    correct: 0,
    explain: 'Schutzklasse III: Versorgung mit Schutzkleinspannung (≤ 50 V AC / 120 V DC) aus sicheren Quellen, SELV oder PELV.',
    source: 'DIN EN 61140 (VDE 0140-1)'
  },
  {
    id: 'lv09', path: 'lehrling-vde', category: 'Schutzeinrichtungen',
    question: 'Welcher Bemessungsfehlerstrom ist für Steckdosenstromkreise (≤ 32 A) im Wohnbereich vorgeschrieben?',
    options: ['10 mA', '30 mA', '100 mA', '300 mA'],
    correct: 1,
    explain: 'RCD mit IΔn = 30 mA ist nach DIN VDE 0100-410 für Steckdosenstromkreise bis 32 A in Wohnungen Pflicht (Zusatzschutz).',
    source: 'DIN VDE 0100-410 § 411.3.3'
  },
  {
    id: 'lv10', path: 'lehrling-vde', category: 'Prüfung',
    question: 'Was wird bei einer Prüfung nach DGUV V3 geprüft?',
    options: ['Nur Beleuchtung', 'Elektrische Anlagen und ortsveränderliche Betriebsmittel',
             'Heizungsanlagen', 'Gasanlagen'],
    correct: 1,
    explain: 'DGUV V3 (vormals BGV A3) regelt die Wiederholungsprüfung ortsfester Anlagen und ortsveränderlicher elektrischer Betriebsmittel.',
    source: 'DGUV Vorschrift 3'
  },
  {
    id: 'lv11', path: 'lehrling-vde', category: 'Spannungsbereiche',
    question: 'Ab welcher Wechselspannung spricht man von Hochspannung?',
    options: ['Über 50 V', 'Über 230 V', 'Über 1000 V', 'Über 30 kV'],
    correct: 2,
    explain: 'Niederspannung: bis 1000 V AC bzw. 1500 V DC. Darüber: Hochspannung (mit Bereichen Mittel-, Hoch-, Höchstspannung).',
    source: 'DIN VDE 0100-100 (Spannungsbereiche)'
  },
  {
    id: 'lv12', path: 'lehrling-vde', category: 'Spannungsbereiche',
    question: 'Wie hoch ist die zulässige Berührungsspannung für Wechselstrom in trockenen Räumen?',
    options: ['12 V', '25 V', '50 V', '120 V'],
    correct: 2,
    explain: 'Maximal 50 V AC bzw. 120 V DC, darüber gilt eine Berührung als gefährlich (Schutzziel der VDE).',
    source: 'DIN VDE 0100-410'
  },
  {
    id: 'lv13', path: 'lehrling-vde', category: 'Schutzkleinspannung',
    question: 'Was ist SELV?',
    options: ['Safety Extra Low Voltage, Schutzkleinspannung mit sicherer Trennung, ohne Erdung',
             'Schutz mit Erdverbindung',
             'Spannung über 50 V',
             'Schaltfähige Spannung über 230 V'],
    correct: 0,
    explain: 'SELV = Safety Extra Low Voltage. Sichere Trennung von Netz, keine Verbindung zur Erde. Im Gegensatz zu PELV (mit Erdung).',
    source: 'DIN VDE 0100-410 / IEC 60364-4-41'
  },
  {
    id: 'lv14', path: 'lehrling-vde', category: 'Installation',
    question: 'Welcher Aderquerschnitt ist üblich für allgemeine Steckdosenstromkreise (16 A)?',
    options: ['0,75 mm²', '1,5 mm²', '4 mm²', '6 mm²'],
    correct: 1,
    explain: '1,5 mm² Cu für Beleuchtung und allgemeine Steckdosen mit 16 A. Bei höherer Belastung oder Verlegeart B2 ggf. 2,5 mm².',
    source: 'DIN VDE 0100-430 / DIN 18015-1'
  },
  {
    id: 'lv15', path: 'lehrling-vde', category: 'Absicherung',
    question: 'Welche maximale Absicherung ist für 1,5 mm² Cu zulässig?',
    options: ['10 A', '13 A', '16 A', '20 A'],
    correct: 2,
    explain: '1,5 mm² Cu wird je nach Verlegeart bis maximal 16 A LS-Schalter abgesichert.',
    source: 'DIN VDE 0100-430 (Schutz bei Überstrom)'
  },
  {
    id: 'lv16', path: 'lehrling-vde', category: 'Schaltungen',
    question: 'Was ist eine Wechselschaltung?',
    options: ['Eine Schaltung mit Stromstoßrelais',
             'Eine Schaltung, mit der eine Lampe von zwei Stellen geschaltet werden kann',
             'Eine Drehstromschaltung',
             'Eine Schaltung mit Kreuzschalter'],
    correct: 1,
    explain: 'Wechselschaltung = Eine Lampe wird von zwei Stellen geschaltet (zwei Wechselschalter, drei korrespondierende Adern).',
    source: 'Installationspraxis (Wechselschaltung)'
  },
  {
    id: 'lv17', path: 'lehrling-vde', category: 'Schaltungen',
    question: 'Wofür wird eine Kreuzschaltung verwendet?',
    options: ['Schalten von 3 oder mehr Stellen aus',
             'Nur zur Verteilung im Drehstromnetz',
             'Nur in Bädern',
             'Zum Dimmen'],
    correct: 0,
    explain: 'Kreuzschaltung = eine Lampe von 3 oder mehr Stellen schalten. Aufbau: Wechsel, Kreuz, …, Wechsel.',
    source: 'Installationspraxis (Kreuzschaltung)'
  },
  {
    id: 'lv18', path: 'lehrling-vde', category: 'Schaltungen',
    question: 'Was bewirkt eine Stromstoßschaltung?',
    options: ['Schaltet Last bei jedem Tastendruck um (ein/aus)',
             'Erhöht die Spannung kurzzeitig',
             'Schaltet nur bei Stromausfall',
             'Schaltet 3-phasig dauerhaft'],
    correct: 0,
    explain: 'Ein Stromstoßrelais kippt bei jedem Tasterimpuls seinen Schaltzustand, ideal bei vielen Schaltstellen mit nur einer Leitung.',
    source: 'Installationspraxis (Stromstoßrelais)'
  },
  {
    id: 'lv19', path: 'lehrling-vde', category: 'Leiter',
    question: 'Was ist ein PEN-Leiter?',
    options: ['Reiner Schutzleiter',
             'Reiner Neutralleiter',
             'Kombinierter Schutz- und Neutralleiter',
             'Außenleiter mit Erdung'],
    correct: 2,
    explain: 'Der PEN-Leiter (TN-C-System) übernimmt sowohl die Funktion des Neutralleiters (N) als auch des Schutzleiters (PE). Querschnitt mind. 10 mm² Cu.',
    source: 'DIN VDE 0100-310 (TN-C-System)'
  },
  {
    id: 'lv20', path: 'lehrling-vde', category: 'Schutzeinrichtungen',
    question: 'Was bedeutet RCD?',
    options: ['Residual Current Device, Fehlerstromschutzschalter',
             'Reverse Current Detector',
             'Resistance Control Device',
             'Relay Common Disconnect'],
    correct: 0,
    explain: 'RCD = Residual Current Device, deutsch: FI-Schutzschalter. Schaltet ab, wenn der Fehlerstrom IΔn überschritten wird.',
    source: 'DIN VDE 0100-410'
  },
  {
    id: 'lv21', path: 'lehrling-vde', category: 'Schutzart',
    question: 'Was beschreibt die IP-Schutzart, z. B. IP44?',
    options: ['Spannungsfestigkeit',
             'Schutz gegen Berührung/Fremdkörper (1. Ziffer) und Wasser (2. Ziffer)',
             'Maximale Stromstärke',
             'Frequenzbereich'],
    correct: 1,
    explain: 'IPxx: Erste Ziffer = Schutz gegen feste Fremdkörper / Berührung, zweite Ziffer = Schutz gegen Wasser. IP44 z. B. Schutz gegen Spritzwasser und Drähte.',
    source: 'DIN EN 60529'
  },
  {
    id: 'lv22', path: 'lehrling-vde', category: 'Bad',
    question: 'Welche Schutzbereiche gibt es im Badezimmer nach VDE 0100-701?',
    options: ['Bereich 0 (im Wasser), 1 (über Wanne), 2 (60 cm seitlich)',
             'Bereich A, B, C, D',
             'Nur ein einziger Bereich',
             'Bereich 1 bis 5'],
    correct: 0,
    explain: 'Schutzbereiche im Bad: 0 = Innenraum Badewanne/Dusche, 1 = darüber bis 2,25 m, 2 = 60 cm seitlich. Frühere Bereiche 3 wurden 2018 gestrichen.',
    source: 'DIN VDE 0100-701'
  },
  {
    id: 'lv23', path: 'lehrling-vde', category: 'Erdung',
    question: 'Welcher Mindestquerschnitt ist für einen Schutzleiter aus Kupfer (verlegt mit Außenleiter ≤ 16 mm²) vorgeschrieben?',
    options: ['Querschnitt wie der Außenleiter', '1,5 mm²', '2,5 mm²', 'Halbierter Querschnitt'],
    correct: 0,
    explain: 'Bis zu Phasenquerschnitt 16 mm² gilt: PE-Querschnitt = Außenleiterquerschnitt. Darüber gelten reduzierte Querschnitte nach VDE.',
    source: 'DIN VDE 0100-540'
  },
  {
    id: 'lv24', path: 'lehrling-vde', category: 'Messtechnik',
    question: 'Mit welchem Gerät wird der Isolationswiderstand gemessen?',
    options: ['Multimeter im Ω-Bereich',
             'Isolationsmessgerät mit 250–1000 V Prüfspannung',
             'Schleifenwiderstandsmessgerät',
             'Erdungsmessgerät'],
    correct: 1,
    explain: 'Isolationsmessung mit definierter Prüfspannung (z. B. 500 V DC bei Niederspannungsanlagen). Mindestwert i. d. R. 1 MΩ.',
    source: 'DGUV V3 / DIN VDE 0100-600'
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
    explain: 'VDE 0105-100 ist die Norm für den Betrieb elektrischer Anlagen, Quelle u. a. der 5 Sicherheitsregeln und der Definition von Elektrofachkraft.'
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
    options: ['1,1, 1,4 · I_n', '3, 5 · I_n', '5, 10 · I_n', '10, 20 · I_n'],
    correct: 1,
    explain: 'B-Charakteristik: magnetische Schnellauslösung bei Ia = 3–5 · I_n. Standard im Wohnbau für ohmsche/leichte Lasten.'
  },
  {
    id: 'lv31', path: 'lehrling-vde', category: 'Schutzeinrichtungen',
    question: 'Welcher Auslösestrombereich gilt für einen LS-Schalter Charakteristik C?',
    options: ['3, 5 · I_n', '5, 10 · I_n', '10, 20 · I_n', '20, 30 · I_n'],
    correct: 1,
    explain: 'C-Charakteristik: Ia = 5–10 · I_n, verwendet bei Verbrauchern mit höheren Einschaltströmen (Trafos, Leuchtstofflampen-Gruppen).'
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
    explain: 'KNX TP1 (Twisted Pair) wird mit 29 V DC versorgt, SELV. Daten und Spannung laufen über das gleiche Buskabel.'
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
    explain: 'Typ A erfasst sinusförmige AC-Fehlerströme und pulsierende DC-Fehlerströme, Standard im Wohnbau. Glatte DC-Anteile (z. B. an Wechselrichtern) braucht Typ B oder Typ-A + RDC-DD.'
  },
  {
    id: 'lv44', path: 'lehrling-vde', category: 'E-Mobilität',
    question: 'Was bedeutet RDC-DD im Kontext von Ladeeinrichtungen für E-Autos?',
    options: ['Eine Lade-Ladekurve',
             'Residual DC Detection Device, erkennt glatte Gleichfehlerströme ≥ 6 mA',
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
    explain: 'VDE 0100-410: Schutzmaßnahmen gegen elektrischen Schlag, Grundnorm für Schutzarten, Schutzklassen, Trennung, Hindernisse, Erdung.'
  },
  {
    id: 'lv48', path: 'lehrling-vde', category: 'Schutzeinrichtungen',
    question: 'Wann sind zwei in Reihe liegende LS-Schalter (vorgelagert 35 A B / nachgelagert 16 A B) bei einem Kurzschluss selektiv?',
    options: ['Immer',
             'Nur eingeschränkt, verlässliche Selektivität meist erst über die Hersteller-Selektivitätstabellen oder mit deutlich „trägerer" Vorsicherung (z. B. NH)',
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
    explain: 'Doppeldreieck mit Blitz und Spannungsangabe (z. B. 1000 V), geprüft nach IEC 60900, Pflicht beim Arbeiten unter Spannung.'
  },
  {
    id: 'lv52', path: 'lehrling-vde', category: 'Werkzeug',
    question: 'Was tut man vor jedem Einsatz mit isoliertem Werkzeug?',
    options: ['Funktionsprüfung mit 1000 V',
             'Sichtprüfung auf Beschädigungen der Isolierung',
             'Reinigen mit Lösungsmittel',
             'Aufladen'],
    correct: 1,
    explain: 'Vor jedem Einsatz Sichtkontrolle: Risse, Beschädigungen, Verformung der Isolierung, sonst aussortieren.'
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
    id: 'm01', path: 'meister', category: 'Recht, HwO',
    question: 'Was regelt die Handwerksordnung (HwO)?',
    options: ['Tarifverträge im Handwerk',
             'Den Aufbau und die Ordnung des deutschen Handwerks',
             'Nur die Meisterprüfung',
             'Steuerrecht für Handwerker'],
    correct: 1,
    explain: 'Die HwO regelt Berufszugang (Anlage A/B), Handwerkskammern, Innungen, Meisterprüfung und Berufsausbildung im Handwerk.',
    source: 'Handwerksordnung (HwO)'
  },
  {
    id: 'm02', path: 'meister', category: 'Recht, HwO',
    question: 'Was findet sich in Anlage A der HwO?',
    options: ['Zulassungspflichtige Handwerke (Meisterpflicht)',
             'Zulassungsfreie Handwerke',
             'Liste der Innungen',
             'Liste der Tarifverträge'],
    correct: 0,
    explain: 'Anlage A = zulassungspflichtige Handwerke (Meisterzwang), z. B. Elektrotechniker. Anlage B1 = zulassungsfrei, B2 = handwerksähnlich.',
    source: 'Handwerksordnung Anlage A'
  },
  {
    id: 'm03', path: 'meister', category: 'Recht, BBiG',
    question: 'Wie lange darf die Probezeit in einem Ausbildungsverhältnis maximal dauern?',
    options: ['1 Monat', '4 Monate', '6 Monate', '1 Jahr'],
    correct: 1,
    explain: '§ 20 BBiG: Mindestens 1, maximal 4 Monate. In der Probezeit kann beidseitig fristlos gekündigt werden.',
    source: '§ 20 BBiG (Probezeit)'
  },
  {
    id: 'm04', path: 'meister', category: 'Recht, BBiG',
    question: 'Wie lange dauert die Regelausbildungszeit zum Elektroniker für Energie- und Gebäudetechnik?',
    options: ['2 Jahre', '3 Jahre', '3,5 Jahre', '4 Jahre'],
    correct: 2,
    explain: 'Regelausbildungszeit: 3,5 Jahre (42 Monate). Verkürzung möglich.',
    source: 'AusbildungsVO Elektroniker EBT'
  },
  {
    id: 'm05', path: 'meister', category: 'Recht',
    question: 'Was ist der wesentliche Inhalt der VOB Teil B?',
    options: ['Vergaberegeln',
             'Allgemeine Vertragsbedingungen für Bauleistungen',
             'Technische Normen',
             'Steuersätze für Bauleistungen'],
    correct: 1,
    explain: 'VOB/B enthält die Allgemeinen Vertragsbedingungen für die Ausführung von Bauleistungen (Pendant zu BGB-Werkvertrag).',
    source: 'VOB/B (Allg. Vertragsbedingungen)'
  },
  {
    id: 'm06', path: 'meister', category: 'Betriebsführung',
    question: 'Wie ist der Deckungsbeitrag definiert?',
    options: ['Erlös, Fixkosten',
             'Erlös, variable Kosten',
             'Gewinn + Steuern',
             'Umsatz, Umsatzsteuer'],
    correct: 1,
    explain: 'Deckungsbeitrag = Erlös, variable Kosten. Er „deckt" Fixkosten und trägt zum Gewinn bei.',
    source: 'Kostenrechnung (Deckungsbeitrag)'
  },
  {
    id: 'm07', path: 'meister', category: 'Betriebsführung',
    question: 'Was sind Fixkosten?',
    options: ['Kosten, die mit der Produktionsmenge steigen',
             'Kosten, die unabhängig von der Produktionsmenge anfallen',
             'Kosten für Rohstoffe',
             'Kosten für Akkordlohn'],
    correct: 1,
    explain: 'Fixkosten fallen mengenunabhängig an: Miete, Versicherungen, Abschreibungen, Gehälter (im Wesentlichen).',
    source: 'Kostenrechnung (Fixkosten)'
  },
  {
    id: 'm08', path: 'meister', category: 'Betriebsführung',
    question: 'Was bedeutet ROI?',
    options: ['Return on Investment, Kapitalrendite',
             'Rate of Inflation', 'Result of Income', 'Recurring Operating Income'],
    correct: 0,
    explain: 'ROI = Gewinn / eingesetztes Kapital · 100 %. Misst die Rentabilität des eingesetzten Kapitals.',
    source: 'Rechnungswesen (Kennzahl ROI)'
  },
  {
    id: 'm09', path: 'meister', category: 'Betriebsführung',
    question: 'Was zeigt eine Gewinn- und Verlustrechnung (GuV)?',
    options: ['Vermögensbestand zum Stichtag',
             'Erträge und Aufwendungen einer Periode',
             'Liquidität',
             'Kundenforderungen'],
    correct: 1,
    explain: 'Die GuV stellt Erträge und Aufwendungen einer Periode gegenüber und ermittelt Gewinn oder Verlust. Bilanz hingegen = Vermögen/Schulden zum Stichtag.',
    source: '§ 242 HGB (GuV)'
  },
  {
    id: 'm10', path: 'meister', category: 'Betriebsführung',
    question: 'Wie wird ein Stundenverrechnungssatz grundsätzlich gebildet?',
    options: ['Materialkosten / Stunden',
             'Lohnkosten + Gemeinkostenzuschläge + Gewinn / produktive Stunden',
             'Nur Bruttogehalt durch Stunden',
             'Nettoumsatz / Anzahl Mitarbeiter'],
    correct: 1,
    explain: 'Lohnkosten je produktiver Stunde + Gemeinkosten + Gewinn-/Wagniszuschlag = kalkulatorischer Stundenverrechnungssatz.',
    source: 'Handwerks-Kalkulation (Stundenverrechnungssatz)'
  },
  {
    id: 'm11', path: 'meister', category: 'AdA, Pädagogik',
    question: 'Wofür steht „AdA"?',
    options: ['Akademie der Ausbilder',
             'Ausbildung der Ausbilder',
             'Allgemeine deutsche Ausbildung',
             'Ausbilder im dualen Ausbildungssystem'],
    correct: 1,
    explain: 'AdA = „Ausbildung der Ausbilder". Voraussetzung für die Ausbildereignung nach AEVO/BBiG.',
    source: 'AEVO (Ausbildereignung)'
  },
  {
    id: 'm12', path: 'meister', category: 'AdA, Pädagogik',
    question: 'Wie lauten die Schritte der 4-Stufen-Methode in der Ausbildung?',
    options: ['Vorbereiten, Vormachen, Nachmachen, Üben',
             'Erklären, Vormachen, Korrigieren, Bewerten',
             'Planen, Demonstrieren, Prüfen, Wiederholen',
             'Lesen, Hören, Sehen, Tun'],
    correct: 0,
    explain: 'Klassische 4-Stufen-Methode: Vorbereiten (Lernort, Auszubildender), Vormachen (Vorbild), Nachmachen (geführt), Üben (selbstständig).',
    source: 'AEVO / Berufspädagogik'
  },
  {
    id: 'm13', path: 'meister', category: 'AdA, Pädagogik',
    question: 'Welche drei Lernzielarten unterscheidet man in der Pädagogik?',
    options: ['kognitiv, affektiv, psychomotorisch',
             'theoretisch, praktisch, sozial',
             'kurz, mittel, lang',
             'fachlich, methodisch, sozial'],
    correct: 0,
    explain: 'Lernzielbereiche: kognitiv (Wissen/Denken), affektiv (Einstellung/Werte), psychomotorisch (Fertigkeiten/Bewegung).',
    source: 'Lernzieltaxonomie (Bloom u.a.)'
  },
  {
    id: 'm14', path: 'meister', category: 'Fachtheorie',
    question: 'Was bedeutet „Selektivität" in der Schutztechnik?',
    options: ['Nur die nächstgelegene Sicherung im Fehlerstromkreis löst aus',
             'Alle Sicherungen lösen gleichzeitig aus',
             'Sicherung mit höchstem Nennstrom löst zuerst aus',
             'Nur Hauptschalter löst aus'],
    correct: 0,
    explain: 'Selektivität: Im Fehlerfall trennt nur die unmittelbar dem Fehler vorgelagerte Schutzeinrichtung, Rest der Anlage bleibt versorgt.',
    source: 'DIN VDE 0100-430 (Selektivität)'
  },
  {
    id: 'm15', path: 'meister', category: 'Fachtheorie, Leistung',
    question: 'Was ist Blindleistung?',
    options: ['Wirklich verbrauchte Leistung in Wärme',
             'Leistung, die zwischen Erzeuger und Verbraucher hin- und herpendelt (Spulen/Kondensatoren)',
             'Leistung, die das Netz verlässt',
             'Geometrische Summe aus Wirk- und Scheinleistung'],
    correct: 1,
    explain: 'Blindleistung Q entsteht in induktiven oder kapazitiven Verbrauchern. Sie wird nicht in Arbeit umgesetzt, belastet aber das Netz.',
    source: 'Wechselstromtechnik (Blindleistung Q)'
  },
  {
    id: 'm16', path: 'meister', category: 'Fachtheorie, Leistung',
    question: 'In welcher Einheit wird Blindleistung angegeben?',
    options: ['Watt (W)', 'Var (var)', 'Voltampere (VA)', 'Joule (J)'],
    correct: 1,
    explain: 'Blindleistung Q wird in Var (Voltampere reaktiv) angegeben. Wirkleistung in W, Scheinleistung in VA.',
    source: 'SI-Einheiten (Var)'
  },
  {
    id: 'm17', path: 'meister', category: 'Fachtheorie, Leistung',
    question: 'Was ist Wirkleistung?',
    options: ['Tatsächlich in Arbeit/Wärme umgesetzte Leistung (P, in W)',
             'Leistung, die zwischen Erzeuger und Verbraucher pendelt',
             'Geometrische Summe aller Leistungen',
             'Leistung der Sicherungen'],
    correct: 0,
    explain: 'Wirkleistung P: Anteil, der tatsächlich in nützliche Arbeit oder Wärme umgesetzt wird. Einheit Watt.',
    source: 'Wechselstromtechnik (Wirkleistung P)'
  },
  {
    id: 'm18', path: 'meister', category: 'Fachtheorie, Leistung',
    question: 'Was beschreibt die Scheinleistung S?',
    options: ['Differenz aus Blind- und Wirkleistung',
             'Geometrische Summe aus Wirk- und Blindleistung (S² = P² + Q²)',
             'Nur den Blindanteil',
             'Nur den Wirkanteil'],
    correct: 1,
    explain: 'Scheinleistung S = √(P² + Q²) in VA. cos φ = P / S.',
    source: 'Wechselstromtechnik (Scheinleistung S² = P² + Q²)'
  },
  {
    id: 'm19', path: 'meister', category: 'Fachtheorie, Leistung',
    question: 'Was sagt der Leistungsfaktor cos φ aus?',
    options: ['Verhältnis Wirk- zu Scheinleistung',
             'Verhältnis Spannung zu Strom',
             'Verhältnis Wirk- zu Blindleistung',
             'Verhältnis Strom zu Frequenz'],
    correct: 0,
    explain: 'cos φ = P / S. Je näher an 1, desto mehr nutzbare Wirkleistung gegenüber Scheinleistung.',
    source: 'Wechselstromtechnik (cos φ)'
  },
  {
    id: 'm20', path: 'meister', category: 'Recht, BGB',
    question: 'Was regelt das BGB im Bereich Werkvertrag (§ 631 ff.)?',
    options: ['Arbeitsverhältnis zwischen AG und AN',
             'Herstellung eines Werkes gegen Vergütung, Erfolg geschuldet',
             'Mietverhältnisse', 'Versicherungsverträge'],
    correct: 1,
    explain: 'Werkvertrag (§§ 631 ff. BGB): Werkunternehmer schuldet einen Erfolg, nicht nur Tätigkeit. Standard für Handwerksleistungen.',
    source: '§ 631 ff. BGB (Werkvertrag)'
  },
  {
    id: 'm21', path: 'meister', category: 'Betriebsführung',
    question: 'Was ist der Break-even-Point?',
    options: ['Punkt, an dem Erlöse die Gesamtkosten decken (Gewinnschwelle)',
             'Punkt der maximalen Auslastung',
             'Punkt der Marktsättigung',
             'Punkt höchster Liquidität'],
    correct: 0,
    explain: 'Break-even (Gewinnschwelle): Umsatz = Gesamtkosten. Ab hier macht der Betrieb Gewinn. x = Fixkosten / Deckungsbeitrag pro Stück.',
    source: 'BWL-Grundlagen (Break-even)'
  },
  {
    id: 'm22', path: 'meister', category: 'Fachtheorie',
    question: 'Welche Aufgabe hat eine Blindstromkompensation?',
    options: ['Reduziert Wirkleistung',
             'Reduziert die übertragene Blindleistung im Netz, verbessert cos φ',
             'Erhöht die Spannung',
             'Verringert die Frequenz'],
    correct: 1,
    explain: 'Mit Kompensationskondensatoren wird induktive Blindleistung lokal kompensiert, cos φ steigt, Netzbelastung und Verluste sinken.',
    source: 'EnWG / Wechselstromtechnik (Blindstromkompensation)'
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
    id: 'm33', path: 'meister', category: 'Recht, BBiG',
    question: 'Wann endet ein Berufsausbildungsverhältnis vorzeitig nach BBiG?',
    options: ['Mit Bestehen der Abschlussprüfung (auch vor vereinbartem Ende)',
             'Erst zum vereinbarten Vertragsende',
             'Mit dem 21. Geburtstag',
             'Niemals vorzeitig'],
    correct: 0,
    explain: '§ 21 BBiG: Mit Bestehen der Abschlussprüfung endet das Ausbildungsverhältnis, auch vor dem vertraglichen Ende.'
  },
  {
    id: 'm34', path: 'meister', category: 'Recht, BBiG',
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
    id: 'm37', path: 'meister', category: 'Recht, BGB',
    question: 'Was unterscheidet einen Werkvertrag von einem Dienstvertrag?',
    options: ['Werkvertrag schuldet Erfolg, Dienstvertrag schuldet Tätigkeit',
             'Beide schulden Erfolg',
             'Werkvertrag ist mündlich, Dienstvertrag schriftlich',
             'Es ist nur ein Begriff für dasselbe'],
    correct: 0,
    explain: 'Werkvertrag (§ 631 ff. BGB): Werkunternehmer schuldet einen mangelfreien Erfolg. Dienstvertrag (§ 611 BGB): nur die Tätigkeit, keinen Erfolg.'
  },
  {
    id: 'm38', path: 'meister', category: 'Recht, BGB',
    question: 'Wie lange beträgt die regelmäßige Gewährleistungsfrist bei Werkleistungen am Bauwerk nach BGB?',
    options: ['1 Jahr', '2 Jahre', '5 Jahre', '10 Jahre'],
    correct: 2,
    explain: '§ 634a BGB: Werkleistungen an einem Bauwerk → 5 Jahre. Andere Werkverträge i. d. R. 2 Jahre.'
  },
  {
    id: 'm39', path: 'meister', category: 'Recht, VOB',
    question: 'Wie lange beträgt die Gewährleistungsfrist bei VOB-Bauverträgen für Bauleistungen?',
    options: ['2 Jahre', '4 Jahre', '5 Jahre', '10 Jahre'],
    correct: 1,
    explain: 'VOB/B § 13 Abs. 4: Gewährleistung Bauwerke 4 Jahre (kürzer als BGB!). Maschinelle/elektrotechnische Anlagen 2 Jahre.'
  },
  {
    id: 'm40', path: 'meister', category: 'Energie',
    question: 'Ab welcher Anlagengröße sind Erzeugungsanlagen (z. B. PV) beim Netzbetreiber typischerweise im vereinfachten Verfahren anschließbar?',
    options: ['Nur ab 100 kWp',
             'Bis 30 kWp im vereinfachten Anschlussverfahren, jede Anlage ist aber anmeldepflichtig',
             'Nur ab 1 MW',
             'Nur Inselanlagen'],
    correct: 1,
    explain: 'Jede netzgekoppelte Erzeugungsanlage muss beim Netzbetreiber angemeldet werden. Vereinfachtes Verfahren bis 30 kWp; darüber Anschlussbegehren mit Berechnungen.'
  },
  {
    id: 'm41', path: 'meister', category: 'Energie',
    question: 'Wann ist nach GEG (Gebäudeenergiegesetz) ein Energieausweis vorzulegen?',
    options: ['Nur bei Neubau',
             'Bei Verkauf, Vermietung oder Verpachtung von Gebäuden, unaufgefordert',
             'Nur bei öffentlichen Gebäuden',
             'Nur auf Anforderung der Bauaufsicht'],
    correct: 1,
    explain: 'GEG § 80: Energieausweis muss bei Verkauf, Vermietung oder Verpachtung dem Interessenten unaufgefordert vorgelegt werden, Bedarfs- oder Verbrauchsausweis.'
  },
  {
    id: 'm42', path: 'meister', category: 'Fachtheorie',
    question: 'Welche Sicherungspaarung ist tendenziell selektiv?',
    options: ['Vorgelagerter NH-Sicherungseinsatz vor nachgelagertem LS-Schalter mit deutlich kleinerem Bemessungsstrom',
             'Zwei LS-Schalter gleichen Typs in Reihe',
             'Zwei NH-Sicherungen gleicher Größe in Reihe',
             'RCD vor LS gleicher Bemessungsgröße'],
    correct: 0,
    explain: 'Selektivität: vorgelagert träge NH-Sicherung mit deutlich höherem Bemessungsstrom, nachgelagert flinker LS, nur der LS löst aus, NH bleibt drin. Verhältnis nach Herstellertabelle.'
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
    id: 'm45', path: 'meister', category: 'Recht, HwO',
    question: 'Was ist der Unterschied zwischen Innung und Handwerkskammer?',
    options: ['Es gibt keinen Unterschied',
             'Innung = freiwillige berufsständische Vereinigung eines Handwerks; HwK = öffentlich-rechtliche Körperschaft mit Pflichtmitgliedschaft aller Handwerksbetriebe',
             'Innung ist die Pflichtmitgliedschaft, HwK freiwillig',
             'Innung ist die Berufsschule, HwK die Prüfungsstelle'],
    correct: 1,
    explain: 'HwK = Pflichtmitgliedschaft, regelt Ausbildung, Prüfungen, Eintragung. Innung = freiwilliger Zusammenschluss von Betrieben gleichen Handwerks zur Interessenvertretung.'
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
    explain: 'U_verkettet = √3 · U_Stern. 230 V · √3 ≈ 400 V, daher 230/400 V im Niederspannungsnetz.',
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
    explain: 'Kurzschluss = sehr niederohmige Verbindung zwischen aktiven Leitern. Sehr hoher Strom, LS-Schalter löst sofort aus.',
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
    explain: 'cos φ = P/S. Bei cos φ = 0,8 ind. ist 80 % Wirkleistung, 60 % Blindleistung. Niedriger cos φ erhöht Verluste, Kompensationspflicht ab gewisser Größe.',
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
    id: 'm48', path: 'meister', category: 'AdA, Pädagogik',
    question: 'Aus welchen Teilen besteht die AdA-Prüfung nach AEVO?',
    options: ['Nur schriftliche Prüfung', 'Nur praktische Prüfung', 'Schriftlicher Teil (Multiple Choice + offene Fragen) und praktischer Teil (Präsentation oder Ausbildungssituation + Fachgespräch)', 'Keine Prüfung erforderlich'],
    correct: 2,
    explain: 'AEVO § 4: schriftlicher und praktischer Teil. Praktisch: Präsentation oder Durchführung einer Ausbildungssituation (15 min) + Fachgespräch (15 min). Beide Teile mind. ausreichend.',
    source: 'AEVO § 4'
  },
  {
    id: 'm49', path: 'meister', category: 'Recht, BGB',
    question: 'Wer haftet bei einem Sachschaden, der durch Pflichtverletzung im Werkvertrag entsteht?',
    options: ['Immer der Unternehmer (verschuldensunabhängig)', 'Der Unternehmer bei Verschulden (Vorsatz oder Fahrlässigkeit, wird vermutet)', 'Immer der Auftraggeber', 'Nur ein Subunternehmer'],
    correct: 1,
    explain: '§ 280 BGB: Schadensersatz bei Pflichtverletzung, wenn Verschulden vorliegt. Verschulden wird vermutet, der Unternehmer muss sich entlasten. Umfasst Vorsatz und (auch leichte) Fahrlässigkeit.',
    source: '§ 280 BGB / § 634 BGB'
  },
  {
    id: 'm50', path: 'meister', category: 'Kalkulation',
    question: 'Welcher Material-Gemeinkostenzuschlag wird im Elektrohandwerk üblicherweise angesetzt?',
    options: ['0 %', '10–15 %', '50–60 %', '100 %'],
    correct: 1,
    explain: 'Üblich sind 10–15 % Materialgemeinkosten-Zuschlag auf den Materialeinkaufspreis. Plus Gewinn-/Wagniszuschlag (5–10 %). Endpreis ≈ EK · 1,2–1,3 für Material.',
    source: 'Handwerks-Kalkulation (HwK-Empfehlungen)'
  },

  // ====== ARBEITSSICHERHEIT (Ersatz für PU003 – eigene Formulierungen mit Quellen) ======
  {
    id: 'as001', path: 'lehrling-vde', category: 'Arbeitsschutz-Recht',
    question: 'Welcher Personenkreis ist an die Unfallverhütungsvorschriften (DGUV) gebunden?',
    options: ['Nur die Geschäftsführung', 'Unternehmer und alle bei ihnen Versicherten (Beschäftigte)', 'Nur Sicherheitsbeauftragte', 'Nur Auszubildende während der Berufsschule'],
    correct: 1,
    explain: 'Nach § 15 SGB VII gelten die UVV der Berufsgenossenschaft sowohl für Unternehmer als auch für alle Versicherten gleichermaßen. Verstöße können bußgeldbewehrt sein.',
    source: '§ 15 SGB VII / DGUV Vorschrift 1'
  },
  {
    id: 'as002', path: 'lehrling-vde', category: 'Arbeitsschutz-Recht',
    question: 'Welchen Rechtscharakter haben Unfallverhütungsvorschriften?',
    options: ['Reine Empfehlungen ohne Verbindlichkeit', 'Allgemeine Regeln der Technik', 'Autonomes Satzungsrecht der Berufsgenossenschaft mit verbindlicher Wirkung', 'Privatrechtliche Vereinbarungen'],
    correct: 2,
    explain: 'UVV werden von der jeweiligen Berufsgenossenschaft als autonomes Satzungsrecht (§ 15 SGB VII) erlassen. Sie sind für die Mitglieder verbindlich, also rechtlich vergleichbar mit Verordnungen.',
    source: '§ 15 SGB VII'
  },
  {
    id: 'as003', path: 'lehrling-vde', category: 'Arbeitsschutz-Recht',
    question: 'Wer trägt im Betrieb die Hauptverantwortung für die Arbeitssicherheit?',
    options: ['Die Sicherheitsfachkraft', 'Der Betriebsrat', 'Der Unternehmer (Arbeitgeber)', 'Jeder Beschäftigte für sich allein'],
    correct: 2,
    explain: 'ArbSchG § 3 und DGUV V1 § 2: Die Verantwortung liegt zunächst beim Unternehmer. Er kann Aufgaben delegieren, die Verantwortung bleibt jedoch bei ihm.',
    source: 'ArbSchG § 3 / DGUV V1 § 2'
  },
  {
    id: 'as004', path: 'lehrling-vde', category: 'Unterweisung',
    question: 'Wie häufig muss jeder Beschäftigte über Unfall- und Gesundheitsgefahren unterwiesen werden?',
    options: ['Einmal beim Eintritt, das reicht für die Dauer des Arbeitsverhältnisses', 'Mindestens einmal jährlich, zusätzlich bei jeder neuen Tätigkeit oder Änderung', 'Nur bei einem Unfall im Betrieb', 'Alle 5 Jahre'],
    correct: 1,
    explain: 'DGUV V1 § 4 i. V. m. ArbSchG § 12: Unterweisung mindestens jährlich. Auszubildende: halbjährlich. Zusätzlich bei Einstellung, Tätigkeitswechsel, neuer Technik, nach Unfällen.',
    source: 'DGUV V1 § 4 / ArbSchG § 12'
  },
  {
    id: 'as005', path: 'lehrling-vde', category: 'Sicherheitsbeauftragte',
    question: 'Ab welcher Beschäftigtenzahl muss in einem Betrieb mindestens ein Sicherheitsbeauftragter bestellt werden?',
    options: ['Ab 5 Beschäftigten', 'Ab 20 Beschäftigten regelmäßig', 'Erst ab 100 Beschäftigten', 'Es gibt keine zahlenmäßige Schwelle'],
    correct: 1,
    explain: '§ 22 SGB VII i. V. m. DGUV V1 § 20: Bei mehr als 20 Beschäftigten ist mindestens ein Sicherheitsbeauftragter zu bestellen. Die genaue Zahl richtet sich nach der Gefährdungslage.',
    source: '§ 22 SGB VII / DGUV V1 § 20'
  },
  {
    id: 'as006', path: 'lehrling-vde', category: 'Sicherheitsbeauftragte',
    question: 'Welche Hauptaufgabe haben Sicherheitsbeauftragte?',
    options: ['Sie haben Weisungsbefugnis gegenüber allen Beschäftigten', 'Sie unterstützen den Unternehmer beratend bei der Verhütung von Arbeitsunfällen', 'Sie sind ausschließlich für Erste Hilfe zuständig', 'Sie ersetzen die Sicherheitsfachkraft'],
    correct: 1,
    explain: 'Sicherheitsbeauftragte sind ehrenamtlich tätig, beraten und unterstützen den Unternehmer und ihre Kollegen in Sicherheitsfragen. Sie haben keine Weisungsbefugnis und keine eigene Verantwortung im Sinne des ArbSchG.',
    source: 'DGUV V1 § 20 / DGUV Information 211-042'
  },
  {
    id: 'as007', path: 'lehrling-vde', category: 'BG-Aufsicht',
    question: 'Wann darf eine Aufsichtsperson der Berufsgenossenschaft (§ 18 SGB VII) einen Betrieb betreten?',
    options: ['Nur nach schriftlicher Voranmeldung', 'Nur wenn der Betriebsrat einverstanden ist', 'Während der Geschäfts- und Betriebszeiten ohne Voranmeldung', 'Nur außerhalb der Arbeitszeit'],
    correct: 2,
    explain: '§ 19 SGB VII: Aufsichtspersonen der Unfallversicherungsträger sind befugt, jederzeit während der Geschäfts- und Betriebszeiten Betriebsstätten zu betreten und zu besichtigen.',
    source: '§ 19 SGB VII'
  },
  {
    id: 'as008', path: 'lehrling-vde', category: 'Arbeitsschutz-Praxis',
    question: 'Was sollte ein Beschäftigter tun, wenn er einen sicherheitstechnischen Mangel erkennt?',
    options: ['Den Mangel sofort selbst beheben, sofern er dazu befugt ist, sonst unverzüglich der Vorgesetzten Person melden', 'Erst die laufende Arbeit beenden und dann den Betriebsrat informieren', 'Abwarten bis zur nächsten Sicherheitsbegehung', 'Nichts tun, da der Sicherheitsbeauftragte dafür allein zuständig ist'],
    correct: 0,
    explain: 'ArbSchG § 16 und DGUV V1 § 16 verpflichten Beschäftigte, jede Gefahr unverzüglich zu beseitigen oder zu melden. Schweigen kann Mithaftung bedeuten.',
    source: 'ArbSchG § 16 / DGUV V1 § 16'
  },
  {
    id: 'as009', path: 'lehrling-vde', category: 'Arbeitskleidung',
    question: 'Sind Schmuckstücke wie Ringe, Halsketten oder Armbänder bei der Arbeit am offenen elektrischen Stromkreis zulässig?',
    options: ['Ja, wenn sie aus Edelmetall sind', 'Nur Eheringe sind erlaubt', 'Nein, wegen Verfangungs- und Kurzschlussgefahr abzulegen', 'Nur wenn sie unter Handschuhen verschwinden'],
    correct: 2,
    explain: 'DGUV V3 / DIN VDE 0105-100: Vor Arbeiten an unter Spannung stehenden Teilen sind metallische Gegenstände (Schmuck, Uhr, Brille mit Metallrand) abzulegen, da sie Lichtbögen oder Hängenbleiben verursachen können.',
    source: 'DIN VDE 0105-100 / DGUV V3 § 4'
  },
  {
    id: 'as010', path: 'lehrling-vde', category: 'Arbeitskleidung',
    question: 'Spitze oder scharfkantige Werkzeuge dürfen lose in der Hosentasche getragen werden, weil…',
    options: ['…sie immer griffbereit sind', '…dies nur bei kurzen Tätigkeiten verboten ist', '…eine schützende Werkzeughülle bzw. Werkzeugtasche ausreicht', 'Falsch, sie sind grundsätzlich nur in geeigneten Werkzeughaltern oder Taschen mit Schutz zu tragen'],
    correct: 3,
    explain: 'Lose getragene scharfe Werkzeuge können bei Stürzen schwere Stich- oder Schnittverletzungen verursachen. Geeignete Köcher, Halter oder Taschen sind Pflicht.',
    source: 'DGUV Information 209-082'
  },
  {
    id: 'as011', path: 'lehrling-vde', category: 'Alkohol-Drogen',
    question: 'Eine Vorgesetzte stellt fest, dass ein Beschäftigter alkoholisiert zur Arbeit erscheint. Welche Pflicht hat sie?',
    options: ['Sie muss ihn nach Hause schicken / die Arbeit untersagen, da er sich und andere gefährdet', 'Sie darf weiterarbeiten lassen, solange keine Maschine bedient wird', 'Nur Personalakte vermerken, kein weiteres Handeln', 'Nichts, Privatsache des Beschäftigten'],
    correct: 0,
    explain: 'DGUV V1 § 7 verbietet, sich durch berauschende Mittel in einen Zustand zu versetzen, in dem man sich oder andere gefährden kann. Vorgesetzte müssen handeln (Beschäftigungsverbot, sicherer Heimweg).',
    source: 'DGUV V1 § 7'
  },
  {
    id: 'as012', path: 'lehrling-vde', category: 'Bildschirmarbeit',
    question: 'Wie sollte ein Bildschirmarbeitsplatz idealerweise zum Fenster ausgerichtet sein?',
    options: ['Mit Blickrichtung direkt zum Fenster', 'Mit dem Rücken zum Fenster', 'Im rechten Winkel (etwa 90°) zum Fenster, um Blendung und Spiegelung zu vermeiden', 'Egal, solange ein Blendschutz vorhanden ist'],
    correct: 2,
    explain: 'ArbStättV Anhang 6 und DGUV Information 215-410: Bildschirme im 90°-Winkel zur Fensterfront aufstellen. So entstehen keine Reflexionen und keine Blendung gegen das Tageslicht.',
    source: 'DGUV Information 215-410 / ASR A1.6'
  },
  {
    id: 'as013', path: 'lehrling-vde', category: 'PSA',
    question: 'Welche der folgenden Ausrüstungsteile zählen typischerweise NICHT zur PSA?',
    options: ['Sicherheitsschuhe S3', 'Schutzhelm', 'Gehörschutz', 'Werkzeugkasten mit Schraubendrehern'],
    correct: 3,
    explain: 'PSA = persönliche Schutzausrüstung. Werkzeuge sind keine PSA, sondern Arbeitsmittel. PSA-Beispiele: Helm, Schutzbrille, Gehörschutz, Sicherheitsschuhe, isolierende Handschuhe.',
    source: 'PSA-BV / DGUV Regel 112-189'
  },
  {
    id: 'as014', path: 'lehrling-vde', category: 'PSA',
    question: 'Wer muss persönliche Schutzausrüstung kostenfrei bereitstellen, wer muss sie tragen?',
    options: ['Beschäftigte zahlen selbst, müssen aber nicht tragen', 'Arbeitgeber stellt sie bereit, Beschäftigte sind verpflichtet zu benutzen', 'Nur in besonderen Branchen verpflichtend', 'Beides freiwillig'],
    correct: 1,
    explain: 'ArbSchG § 3 / PSA-BV § 2: Der Arbeitgeber stellt PSA kostenfrei bereit. Beschäftigte sind nach § 15 ArbSchG verpflichtet, sie bestimmungsgemäß zu benutzen.',
    source: 'PSA-BV § 2 / ArbSchG § 3'
  },
  {
    id: 'as015', path: 'lehrling-vde', category: 'Sicherheitskennzeichen',
    question: 'Ein blaues, rundes Sicherheitszeichen ist nach ASR A1.3 grundsätzlich ein …',
    options: ['Verbotszeichen', 'Gebotszeichen', 'Warnzeichen', 'Rettungszeichen'],
    correct: 1,
    explain: 'ASR A1.3: rund + blau = Gebot (z. B. „Schutzhelm tragen"). Rot rund mit Querbalken = Verbot. Gelbes Dreieck = Warnung. Grünes Rechteck = Rettung. Rotes Rechteck = Brandschutz.',
    source: 'ASR A1.3'
  },
  {
    id: 'as016', path: 'lehrling-vde', category: 'Beleuchtung',
    question: 'Welche Beleuchtungsstärke wird für Büroarbeitsplätze nach ASR A3.4 mindestens gefordert?',
    options: ['100 lx', '300 lx', '500 lx', '750 lx'],
    correct: 2,
    explain: 'ASR A3.4 / DIN EN 12464-1: Büroarbeitsplatz mind. 500 lx. Bei Bildschirmarbeit höhere Anforderungen je nach Tätigkeit. Verkehrswege i. d. R. ≥ 50 lx.',
    source: 'ASR A3.4 / DIN EN 12464-1'
  },
  {
    id: 'as017', path: 'lehrling-vde', category: 'Verkehrswege',
    question: 'Was gilt für Verkehrswege in Arbeitsstätten grundsätzlich?',
    options: ['Sie dürfen kurzzeitig zugestellt werden, wenn niemand vorbeigeht', 'Sie müssen ständig frei und sicher begehbar/befahrbar sein', 'Markierungen sind nicht zwingend erforderlich', 'Stolperstellen über 2 cm sind zulässig'],
    correct: 1,
    explain: 'ASR A1.8: Verkehrswege müssen stets frei sein, ausreichend bemessen und ohne Stolperstellen. Hindernisse sind sofort zu beseitigen oder deutlich zu kennzeichnen.',
    source: 'ASR A1.8'
  },
  {
    id: 'as018', path: 'lehrling-vde', category: 'Fluchtwege',
    question: 'Welche Anforderung gilt für einen Notausgang nach ASR A2.3?',
    options: ['Er darf abgeschlossen sein, wenn der Schlüssel im Sekretariat liegt', 'Er muss von innen jederzeit ohne Hilfsmittel zu öffnen sein', 'Eine Drehtür reicht aus', 'Er darf nur nach innen aufschlagen'],
    correct: 1,
    explain: 'ASR A2.3 / ArbStättV: Notausgangstüren müssen sich in Fluchtrichtung öffnen lassen, von innen jederzeit ohne Hilfsmittel (Schlüssel, Schalter) zu öffnen sein und gut erkennbar sein (Rettungszeichen).',
    source: 'ASR A2.3'
  },
  {
    id: 'as019', path: 'lehrling-vde', category: 'Absturz',
    question: 'Wie sind Absturzkanten ab welcher Absturzhöhe in betrieblichen Bereichen zu sichern?',
    options: ['Erst ab 3 m', 'Ab 1 m durch Geländer/Brüstung oder gleichwertige Maßnahmen', 'Erst nach individueller Risikoabwägung', 'Markierung am Boden reicht'],
    correct: 1,
    explain: 'ASR A2.1: Bereits ab 1 m Absturzhöhe sind Schutzmaßnahmen (Seitenschutz, Brüstung, Abdeckungen) erforderlich. Bei höheren Anforderungen: Anschlagpunkte für PSAgA.',
    source: 'ASR A2.1 / DGUV Information 201-018'
  },
  {
    id: 'as020', path: 'lehrling-vde', category: 'Erste Hilfe',
    question: 'Welche organisatorischen Maßnahmen sind zur Sicherstellung der Ersten Hilfe im Betrieb nötig?',
    options: ['Ausreichend geschulte Ersthelfer (1 je 20 Beschäftigte im Verwaltungs-/Handelsbereich)', 'Verbandkasten nach DIN 13157 / 13169', 'Aushang Erste-Hilfe-Plakat (DGUV Information 204-001)', 'Notruf 112 verfügbar'],
    correct: [0, 1, 2, 3],
    explain: 'DGUV V1 §§ 24-27: Ersthelferanzahl (1:20 in Verwaltung, 1:10 in Produktion), Verbandmittel nach DIN 13157, Aushang DGUV 204-001, Notrufmöglichkeit. Ersthelfer-Schulung alle 2 Jahre auffrischen.',
    source: 'DGUV V1 §§ 24–27'
  },
  {
    id: 'as021', path: 'lehrling-vde', category: 'Leitern',
    question: 'Welche Arbeitsmittel sind beim Arbeiten in der Höhe gegenüber einer Leiter zu bevorzugen?',
    options: ['Stehleiter mit Rückenlehne', 'Gerüst, Hubarbeitsbühne oder mobile Plattform', 'Drehleiter aus Holz', 'Hauptsache eine zweite Person hält die Leiter'],
    correct: 1,
    explain: 'TRBS 2121-2 sieht vor: Leiter ist nur als Arbeitsplatz zulässig, wenn andere Mittel (Gerüst, Hubarbeitsbühne) unverhältnismäßig sind. Standflächen ab 5 m bedürfen besonderer Begründung.',
    source: 'TRBS 2121 / DGUV Information 208-016'
  },
  {
    id: 'as022', path: 'lehrling-vde', category: 'Leitern',
    question: 'Welches Merkmal gehört zu einer SICHEREN Stehleiter?',
    options: ['Wackeliger Spreizschutz', 'Beidseitig begehbare Sprossen ohne Spreizschutz', 'Ausziehbare Spreizsicherung, rutschhemmende Füße, intakte Sprossen', 'Lackierte Holzleiter (Lack zur Konservierung)'],
    correct: 2,
    explain: 'Stehleitern müssen Spreizsicherung gegen Auseinanderrutschen, rutschhemmende Füße und unbeschädigte Sprossen haben. Holzleitern dürfen nicht lackiert werden (verdeckt Risse).',
    source: 'DGUV Information 208-016'
  },
  {
    id: 'as023', path: 'lehrling-vde', category: 'Sicherheitskennzeichen',
    question: 'Welche Bedeutung hat ein gelbes Dreieck mit schwarzem Symbol an einer Maschine?',
    options: ['Brandschutzzeichen', 'Warnung vor einer bestimmten Gefahr (z. B. „Warnung vor Quetschgefahr")', 'Gebot, eine PSA zu tragen', 'Verbot des Eingriffs'],
    correct: 1,
    explain: 'Gelbes Dreieck mit schwarzem Symbol = Warnzeichen. Beispiele: Quetschgefahr, heiße Oberfläche, gefährliche elektrische Spannung. Genaue Bedeutung gibt das Symbol vor (ASR A1.3).',
    source: 'ASR A1.3'
  },
  {
    id: 'as024', path: 'lehrling-vde', category: 'Maschinenschutz',
    question: 'Welche Schutzphilosophie an Maschinen erreicht das höchste Sicherheitsniveau?',
    options: ['Konstruktive Schutzmaßnahmen, die Gefährdungen beseitigen oder vermeiden (TOP-Prinzip „T")', 'Nur Hinweisschilder anbringen', 'Beschäftigte zur Vorsicht ermahnen', 'PSA aushändigen, sonst nichts'],
    correct: 0,
    explain: 'STOP-Prinzip: 1. Substitution/Eliminierung, 2. Technische Maßnahmen (z. B. Schutzgitter), 3. Organisatorische Maßnahmen, 4. PSA. Konstruktive Lösungen sind immer effektiver als nachgelagerte.',
    source: 'ArbSchG § 4 / DGUV Regel 100-001'
  },
  {
    id: 'as025', path: 'lehrling-vde', category: 'Maschinenschutz',
    question: 'Welche Verletzungsarten sind beim Arbeiten an Maschinen typisch?',
    options: ['Quetsch- und Scherverletzungen durch bewegte Teile', 'Schnittverletzungen an scharfen Kanten', 'Augenverletzungen durch wegfliegende Späne', 'Sonnenbrand'],
    correct: [0, 1, 2],
    explain: 'Mechanische Maschinengefährdungen: Quetschen, Scheren, Schneiden, Stoßen, Einziehen, Stechen sowie wegfliegende Teile. Sonnenbrand ist keine maschinentypische Gefährdung im Werkstattbetrieb.',
    source: 'DIN EN ISO 12100 / DGUV Regel 100-500'
  },
  {
    id: 'as026', path: 'lehrling-vde', category: 'Maschinenschutz',
    question: 'Wie können Quetsch- und Scherstellen an Maschinen wirksam abgesichert werden?',
    options: ['Nur Hinweisschild anbringen', 'Trennende Schutzeinrichtungen oder berührungslose Schutzeinrichtungen (z. B. Lichtgitter, Sicherheits-Trittmatten)', 'Auf die Aufmerksamkeit der Bedienenden vertrauen', 'Mit der Hand vorsichtig drumherum greifen'],
    correct: 1,
    explain: 'DIN EN ISO 13855 / 14120: Trennende Schutzeinrichtungen (Verkleidungen, verriegelte Klappen) und nicht-trennende (Lichtschranken, Sicherheitsmatten) verhindern Eingreifen in Gefahrstellen.',
    source: 'DIN EN ISO 14120 / 13855'
  },
  {
    id: 'as027', path: 'lehrling-vde', category: 'Maschinenschutz',
    question: 'Was ist bei der Beseitigung von Störungen an Maschinen zwingend zu beachten?',
    options: ['Maschine im Lauf lassen, damit der Fehler reproduzierbar ist', 'Maschine sicher abschalten / spannungsfrei machen, gegen Wiedereinschalten sichern (LOTO)', 'Schutzeinrichtungen überbrücken', 'Den Beschäftigten vorher auf den Vorfall ansprechen'],
    correct: 1,
    explain: 'LOTO (Lockout-Tagout) bzw. die 5 Sicherheitsregeln aus VDE 0105-100: freischalten, gegen Wiedereinschalten sichern, Spannungsfreiheit feststellen, erden+kurzschließen, benachbarte Teile abdecken. Nie unter Spannung „mal eben" drinhantieren.',
    source: 'DIN VDE 0105-100 / DGUV V3'
  },
  {
    id: 'as028', path: 'lehrling-vde', category: 'Schleifarbeit',
    question: 'In welchem Fall darf beim Schleifen auf eine Schutzbrille verzichtet werden?',
    options: ['Bei kurzen Tätigkeiten unter 2 Minuten', 'Wenn man eine Korrekturbrille trägt', 'Niemals, Schutzbrille (oder Korrektionsschutzbrille) ist beim Schleifen Pflicht', 'Wenn die Schleifscheibe gekapselt ist'],
    correct: 2,
    explain: 'Wegfliegende Schleifpartikel verursachen schwere Augenverletzungen. Eine Schutzbrille (oder eine Korrektionsschutzbrille mit ausreichender Filterklasse) ist immer erforderlich.',
    source: 'DGUV Information 212-686 / TRGS 559'
  },
  {
    id: 'as029', path: 'lehrling-vde', category: 'Sicherheitskennzeichen',
    question: 'Was bedeutet ein grünes Rechteck mit weißem Symbol nach ASR A1.3?',
    options: ['Rettungszeichen (Erste Hilfe, Notausgang, Notdusche)', 'Brandschutzzeichen', 'Verbotszeichen', 'Hinweis auf Lebensmittel'],
    correct: 0,
    explain: 'Grün = Rettung & Erste Hilfe. Rot rechteckig = Brandschutz (Feuerlöscher, Hydrant). Weiß auf Grün: Notausgang, Erste-Hilfe-Kasten, Notdusche.',
    source: 'ASR A1.3'
  },
  {
    id: 'as030', path: 'lehrling-vde', category: 'Elektrik-Unfall',
    question: 'Welche Auswirkungen kann ein Stromunfall auf den Menschen haben?',
    options: ['Direkte Schädigung von Nerven, Herz und Muskulatur', 'Verbrennungen durch Lichtbogen', 'Sekundärunfälle wie Sturz von der Leiter durch Schreckreaktion', 'Innerer Frieden und Entspannung'],
    correct: [0, 1, 2],
    explain: 'DGUV Information 203-001: Direkte Stromwirkung (Herzkammerflimmern!), thermische Wirkung des Lichtbogens und Sekundärunfälle (Absturz, Stoß) sind die drei Haupt-Gefährdungsbereiche.',
    source: 'DGUV Information 203-001'
  },
  {
    id: 'as031', path: 'lehrling-vde', category: 'Elektrik-Unfall',
    question: 'Welche drei Faktoren bestimmen die Schwere eines Stromunfalls hauptsächlich?',
    options: ['Stromstärke', 'Dauer der Durchströmung', 'Stromweg (Eintritts-/Austrittsstelle, ob Herz betroffen)', 'Hautfarbe der Person'],
    correct: [0, 1, 2],
    explain: 'DGUV Info 203-001: Stromstärke (durch den Körper), Einwirkungsdauer und Stromweg (insbesondere Hand-Hand oder Hand-Fuß durchs Herz) bestimmen die Schwere.',
    source: 'DGUV Information 203-001'
  },
  {
    id: 'as032', path: 'lehrling-vde', category: 'Elektrik-Unfall',
    question: 'Wie groß ist der Strom durch einen Menschen mit 1000 Ω Körperwiderstand bei 230 V Berührungsspannung?',
    options: ['ca. 0,23 mA', 'ca. 23 mA', 'ca. 230 mA', 'ca. 2,3 A'],
    correct: 2,
    explain: 'Ohmsches Gesetz: I = U / R = 230 V / 1000 Ω = 0,23 A = 230 mA. Werte ab ca. 30 mA können bereits zu Herzkammerflimmern führen, daher RCD 30 mA.',
    source: 'Ohmsches Gesetz / VDE 0100-410'
  },
  {
    id: 'as033', path: 'lehrling-vde', category: 'Elektrik-Unfall',
    question: 'Ist auch ein Niederspannungslichtbogen (z. B. bei 230 V) gefährlich?',
    options: ['Ja, er kann schwere Verbrennungen, Augenschäden und Brände verursachen', 'Nein, nur Hochspannungs-Lichtbögen sind gefährlich', 'Nur in feuchten Räumen', 'Nur über 1000 V'],
    correct: 0,
    explain: 'Lichtbogentemperaturen können > 4000 °C erreichen, auch bei Niederspannung. UV-/IR-Strahlung verursacht Augenschäden („Verblitzen"), Druckwelle kann Trommelfell schädigen.',
    source: 'DGUV Information 203-077'
  },
  {
    id: 'as034', path: 'lehrling-vde', category: 'Schutzklasse',
    question: 'Was bedeutet das Doppelquadrat (▢▢) auf einem elektrischen Handgerät?',
    options: ['Schutzkleinspannung', 'Schutzklasse I (mit Schutzleiter)', 'Schutzklasse II, schutzisoliert, kein Schutzleiter erforderlich', 'Erhöhter IP-Schutz'],
    correct: 2,
    explain: 'Symbol „zwei ineinanderliegende Quadrate" = Schutzklasse II nach DIN EN 61140. Doppelte oder verstärkte Isolierung, daher kein Schutzleiteranschluss nötig.',
    source: 'DIN EN 61140'
  },
  {
    id: 'as035', path: 'lehrling-vde', category: 'Prüfung',
    question: 'Müssen ortsfeste elektrische Anlagen regelmäßig geprüft werden?',
    options: ['Nein, einmalige Abnahme reicht', 'Nur in Industriebauten', 'Ja, nach DGUV V3 in regelmäßigen, durch Gefährdungsbeurteilung festgelegten Intervallen', 'Nur, wenn der Versicherer es verlangt'],
    correct: 2,
    explain: 'DGUV V3 § 5: Ortsfeste Anlagen werden wiederkehrend geprüft (Wohngebäude empfohlen 4 Jahre, gewerblich i. d. R. 1–4 Jahre nach Gefährdungsbeurteilung). Prüfung nur durch EFK.',
    source: 'DGUV V3 § 5 / TRBS 1201'
  },
  {
    id: 'as036', path: 'lehrling-vde', category: 'Prüfung',
    question: 'Wie häufig werden ortsveränderliche elektrische Betriebsmittel auf Baustellen typischerweise geprüft?',
    options: ['Einmalig vor Erstbenutzung', 'Alle 5 Jahre', 'Etwa alle 3 Monate (je nach Beanspruchung)', 'Nur bei Verdacht eines Defekts'],
    correct: 2,
    explain: 'DGUV V3 § 5 i. V. m. TRBS 1201: Auf Baustellen sind ortsveränderliche Geräte häufig (etwa alle 3 Monate) zu prüfen. Im Bürobereich genügen längere Intervalle (bis 24 Monate).',
    source: 'DGUV V3 / TRBS 1201'
  },
  {
    id: 'as037', path: 'lehrling-vde', category: 'Brandschutz',
    question: 'Welche Bedingungen müssen erfüllt sein, damit ein Brand entstehen kann (Branddreieck)?',
    options: ['Brennbarer Stoff', 'Sauerstoff (oder anderes Oxidationsmittel)', 'Zündenergie (Hitze, Funke, Lichtbogen)', 'Niedriger Luftdruck'],
    correct: [0, 1, 2],
    explain: 'Branddreieck = brennbarer Stoff + Sauerstoff + Zündenergie im richtigen Verhältnis. Fehlt eine Komponente, kann kein Feuer entstehen oder es erlischt.',
    source: 'DGUV Information 205-026'
  },
  {
    id: 'as038', path: 'lehrling-vde', category: 'Brandschutz',
    question: 'Welche Einrichtung ist zur Bekämpfung von Entstehungsbränden im Betrieb vorzuhalten?',
    options: ['Sprinkleranlage in jedem Raum', 'Geeignete Anzahl geprüfter Feuerlöscher entsprechend der Brandgefährdung', 'Wasserschlauch reicht in jedem Fall', 'Eimer mit Sand'],
    correct: 1,
    explain: 'ArbStättV / ASR A2.2: Geeignete und ausreichende Feuerlöscher (passende Brandklasse, Anzahl nach Grundfläche und Gefährdung). Beschäftigte müssen den Umgang regelmäßig üben.',
    source: 'ASR A2.2 / DGUV Information 205-023'
  },
  {
    id: 'as039', path: 'lehrling-vde', category: 'Brandschutz',
    question: 'Wie lange spritzt der Löschstrahl eines voll betätigten 6-kg-Pulverlöschers etwa?',
    options: ['ca. 9 bis 15 Sekunden', 'ca. 1 Minute', 'ca. 5 Minuten', 'ca. 30 Sekunden'],
    correct: 0,
    explain: '6-kg-PG-Pulverlöscher entleert sich bei voll gedrücktem Hebel in nur ca. 9–15 Sekunden. Daher gezielt einsetzen (Brandwurzel, gegen den Wind, in Etappen).',
    source: 'DGUV Information 205-023 / DIN EN 3'
  },
  {
    id: 'as040', path: 'lehrling-vde', category: 'Erste Hilfe',
    question: 'Wie verhält sich ein Ersthelfer richtig bei Brandverletzungen?',
    options: ['Verbrannte Stelle 10–20 min mit handwarmem Wasser kühlen (nicht eiskalt)', 'Brandwunde locker keimfrei abdecken', 'Notruf 112 absetzen', 'Salben und Cremes großzügig auftragen'],
    correct: [0, 1, 2],
    explain: 'DGUV 204-022: Kühlen mit lauwarmem Wasser (max. 20 min, kein Eis), keimfreie lockere Abdeckung, Notruf. KEINE Hausmittel/Salben/Mehl auf die Wunde.',
    source: 'DGUV Information 204-022'
  },
  {
    id: 'as041', path: 'lehrling-vde', category: 'Brandschutz',
    question: 'Was bezeichnet der Flammpunkt einer brennbaren Flüssigkeit?',
    options: ['Die Temperatur, bei der sie ohne Zündquelle entzündet', 'Die niedrigste Temperatur, bei der sich oberhalb der Flüssigkeit ein zündfähiges Dampf-Luft-Gemisch bildet', 'Die Temperatur ihrer Maximalverdunstung', 'Die Siedetemperatur'],
    correct: 1,
    explain: 'Flammpunkt = niedrigste Temperatur, bei der ein zündfähiges Dampf-Luft-Gemisch über der Flüssigkeit entsteht (Zündung durch Funke). Zündtemperatur dagegen = Selbstentzündung ohne Funke.',
    source: 'GefStoffV / TRGS 200'
  },
  {
    id: 'as042', path: 'lehrling-vde', category: 'GHS-Kennzeichnung',
    question: 'Welches GHS-Piktogramm kennzeichnet entzündbare Flüssigkeiten der Kategorie 1 / 2 / 3?',
    options: ['GHS01 (Bombe)', 'GHS02 (Flamme, orange Raute mit schwarzer Flamme)', 'GHS06 (Totenkopf)', 'GHS09 (Umweltgefahr, Fisch und Baum)'],
    correct: 1,
    explain: 'GHS02 „Flamme" kennzeichnet entzündbare Stoffe (Flüssigkeiten, Gase, Aerosole, Feststoffe). Beispiel: Aceton, Benzin, Spiritus.',
    source: 'CLP-VO (EG) Nr. 1272/2008'
  },
  {
    id: 'as043', path: 'lehrling-vde', category: 'GHS-Kennzeichnung',
    question: 'Welche Eigenschaft hat eine „leicht entzündbare" Flüssigkeit nach CLP / GefStoffV (Kat. 2)?',
    options: ['Flammpunkt ≥ 60 °C', 'Flammpunkt < 23 °C und Siedebeginn > 35 °C', 'Flammpunkt zwischen 60 und 100 °C', 'Sie zündet sich auch ohne Sauerstoff'],
    correct: 1,
    explain: 'CLP-Kategorie 2 (vormals „leicht entzündbar"): Flammpunkt < 23 °C bei Siedebeginn > 35 °C. Kat. 1 (extrem entzündbar): Flammpunkt < 23 °C und Siedebeginn ≤ 35 °C. Kat. 3 (entzündbar): Flammpunkt 23–60 °C.',
    source: 'CLP-VO Anhang I'
  },
  {
    id: 'as044', path: 'lehrling-vde', category: 'Brennbare Flüssigkeiten',
    question: 'Wann besteht bei einer brennbaren Flüssigkeit die größte Brandgefahr?',
    options: ['Wenn sie kalt gelagert ist', 'Wenn die Temperatur ihren Flammpunkt erreicht oder überschreitet', 'Wenn sie unter Sauerstoffabschluss steht', 'Nur wenn sie verdünnt ist'],
    correct: 1,
    explain: 'Sobald die Temperatur den Flammpunkt erreicht, kann sich oberhalb der Flüssigkeit ein zündfähiges Dampf-Luft-Gemisch bilden. Mit Zündquelle = sofortige Entzündung möglich.',
    source: 'TRGS 800 / GefStoffV'
  },
  {
    id: 'as045', path: 'lehrling-vde', category: 'Brennbare Flüssigkeiten',
    question: 'Welche Mindestmaßnahmen sind beim Umgang mit brennbaren Flüssigkeiten, auch in kleinen Mengen, zu treffen?',
    options: ['Geeignete, dicht verschlossene Behälter aus zugelassenem Material', 'Zündquellen fernhalten (Funken, Flammen, heiße Oberflächen)', 'Ausreichende Lüftung am Arbeitsplatz', 'Zigarettenanzünder dürfen verwendet werden'],
    correct: [0, 1, 2],
    explain: 'TRGS 510 / TRGS 800: Geeignete Behälter, Zündquellen ausschließen, Lüftung, Mengenbegrenzung am Arbeitsplatz. Rauchen, offenes Feuer und Funken sind verboten.',
    source: 'TRGS 510 / TRGS 800'
  },
  {
    id: 'as046', path: 'lehrling-vde', category: 'Brennbare Flüssigkeiten',
    question: 'In welchem Behälter dürfen wenige Liter Aceton transportiert werden?',
    options: ['Offene Glasflasche', 'Beliebiger Plastiksack', 'Zugelassener UN-geprüfter Sicherheitsbehälter mit dichtem Verschluss', 'Aluminium-Eimer ohne Deckel'],
    correct: 2,
    explain: 'ADR / GGVSE: Brennbare Flüssigkeiten in zugelassenen UN-Behältern (BAM-/UN-Prüfzeichen, dichter Verschluss). Bei kleinen Mengen Sicherheits-Kanister mit Flammendurchschlagsicherung.',
    source: 'ADR / TRGS 510'
  },
  {
    id: 'as047', path: 'lehrling-vde', category: 'Brennbare Flüssigkeiten',
    question: 'Dürfen brennbare Flüssigkeiten dauerhaft am Arbeitsplatz aufbewahrt werden?',
    options: ['Ja, in unbegrenzter Menge', 'Ja, in jedem Behälter', 'Nein, nur die für eine Schicht / einen Arbeitsgang erforderliche Menge in geeigneten Behältern', 'Nein, niemals'],
    correct: 2,
    explain: 'TRGS 510: Am Arbeitsplatz nur die zur Tagesarbeit nötige Menge in geeigneten Behältern. Größere Mengen im zugelassenen Lager (z. B. Sicherheitsschrank Typ 90).',
    source: 'TRGS 510'
  },
  {
    id: 'as048', path: 'lehrling-vde', category: 'Explosion',
    question: 'Was ist eine Explosion im physikalisch-chemischen Sinn?',
    options: ['Eine sehr schnelle, exotherme Reaktion mit plötzlichem Druckanstieg', 'Eine langsame Verbrennung ohne Energiefreisetzung', 'Nur ein Knall ohne chemische Reaktion', 'Ein Knattern in Metallrohren'],
    correct: 0,
    explain: 'Explosion = sehr schnelle Reaktion (Verbrennung) mit plötzlichem Druck-, Wärme- und Lichtanstieg. Detonation: Schallüberschall.',
    source: 'GefStoffV / TRGS 720'
  },
  {
    id: 'as049', path: 'lehrling-vde', category: 'Explosion',
    question: 'Welche Maßnahme im Explosionsschutz ist nach STOP/TOP-Prinzip vorrangig?',
    options: ['Vermeiden bzw. Einschränken explosionsfähiger Atmosphäre (primärer Explosionsschutz)', 'Sofort PSA bereitstellen', 'Auf Aufmerksamkeit der Beschäftigten vertrauen', 'Erst die Zündquellen suchen'],
    correct: 0,
    explain: 'Stufen Explosionsschutz: 1. Primär (Atmosphäre vermeiden) → 2. Sekundär (Zündquellen vermeiden) → 3. Tertiär (Auswirkungen begrenzen). Primärer Schutz hat immer Vorrang.',
    source: 'TRBS 2152 / GefStoffV § 11'
  },
  {
    id: 'as050', path: 'lehrling-vde', category: 'Explosion',
    question: 'Wann besteht eine konkrete Explosionsgefahr?',
    options: ['Brennbarer Stoff in Form Staub/Dampf/Gas in zündfähiger Konzentration', 'Sauerstoff (Luft) ist verfügbar', 'Eine wirksame Zündquelle ist vorhanden oder möglich', 'Hohe Luftfeuchtigkeit'],
    correct: [0, 1, 2],
    explain: 'Explosionsfähige Atmosphäre + wirksame Zündquelle = Explosion. Alle drei Bedingungen müssen gleichzeitig erfüllt sein.',
    source: 'TRBS 2152'
  },
  {
    id: 'as051', path: 'lehrling-vde', category: 'Explosion',
    question: 'Kann man die Konzentration eines explosionsfähigen Gas-Luft-Gemisches am Geruch zuverlässig erkennen?',
    options: ['Ja, immer', 'Nein, Geruchsschwellen liegen oft weit über oder unter zündfähigen Konzentrationen', 'Nur bei Erdgas', 'Nur bei Stadtgas'],
    correct: 1,
    explain: 'Geruchsschwellen sind kein verlässlicher Maßstab. Manche zündfähigen Konzentrationen sind geruchsneutral (z. B. Wasserstoff). Messung mit Gaswarngerät erforderlich.',
    source: 'TRGS 900 / DGUV Information 213-006'
  },
  {
    id: 'as052', path: 'lehrling-vde', category: 'Explosion',
    question: 'Was beschreibt die Zündtemperatur eines brennbaren Stoffes?',
    options: ['Maximale Lagertemperatur', 'Mindestbrennbare Temperatur einer Flüssigkeit', 'Niedrigste Temperatur, bei der sich der Stoff in Luft selbst entzündet (ohne Funke)', 'Erstarrungstemperatur'],
    correct: 2,
    explain: 'Zündtemperatur (auch Selbstentzündungstemperatur) = niedrigste Temperatur, bei der ein Stoff sich in Luft ohne externe Zündquelle entzündet. Wichtig für Heißarbeiten und Maschinen.',
    source: 'DIN EN 14522 / TRGS 720'
  },
  {
    id: 'as053', path: 'lehrling-vde', category: 'Explosion',
    question: 'Welche Zündquellen können explosionsfähige Atmosphären entzünden?',
    options: ['Offene Flamme, heiße Oberfläche', 'Mechanische Funken, elektrostatische Entladung', 'Elektrische Lichtbögen, Schaltvorgänge', 'Tageslicht ohne Brennglas'],
    correct: [0, 1, 2],
    explain: 'TRBS 2152-3 listet 13 Zündquellenarten: heiße Oberflächen, Flammen, Funken (mech./elektr.), Lichtbögen, Statik, Blitz, HF, ionisierende Strahlung … Tageslicht reicht nicht.',
    source: 'TRBS 2152-3'
  },
  {
    id: 'as054', path: 'lehrling-vde', category: 'Explosion',
    question: 'Was sagen untere und obere Explosionsgrenze (UEG/OEG) aus?',
    options: ['Konzentrationsbereich, in dem ein Gas-Luft-Gemisch zündfähig ist', 'Mindest- und Höchsttemperatur', 'Lagermenge ohne Genehmigung', 'Druckbereich der Maschine'],
    correct: 0,
    explain: 'UEG = Mindestkonzentration für eine Explosion, OEG = maximale Konzentration. Innerhalb dieses Bereichs kann das Gemisch durch Zündquelle entzündet werden. Außerhalb: zu „mager" oder zu „fett".',
    source: 'DIN EN 1839 / TRGS 720'
  },
  {
    id: 'as055', path: 'lehrling-vde', category: 'Brennbare Flüssigkeiten',
    question: 'Welche Stoffe können bereits bei Raumtemperatur explosionsfähige Dampf-Luft-Gemische bilden?',
    options: ['Aceton (Flammpunkt -19 °C)', 'Benzin (Flammpunkt < -20 °C)', 'Ethanol (Flammpunkt 12 °C)', 'Wasser'],
    correct: [0, 1, 2],
    explain: 'Stoffe mit Flammpunkt unter Raumtemperatur (~20 °C) können bei Normalbedingungen zündfähige Atmosphären bilden, Aceton, Benzin, Spiritus/Ethanol, Methanol. Wasser ist nicht brennbar.',
    source: 'TRGS 200 / Sicherheitsdatenblätter'
  },
  {
    id: 'as056', path: 'lehrling-vde', category: 'Brennbare Dämpfe',
    question: 'Sind die Dämpfe der meisten brennbaren Flüssigkeiten leichter oder schwerer als Luft?',
    options: ['Schwerer als Luft (sammeln sich am Boden)', 'Leichter als Luft (steigen hoch)', 'Genauso schwer wie Luft', 'Hängt nur von der Temperatur ab'],
    correct: 0,
    explain: 'Die meisten organischen Lösemitteldämpfe (Benzin, Aceton, Ether) sind schwerer als Luft (rel. Dampfdichte > 1) und sammeln sich am Boden, in Gruben, Kanälen.',
    source: 'TRGS 720'
  },
  {
    id: 'as057', path: 'lehrling-vde', category: 'Gase',
    question: 'Welches der folgenden Gase ist schwerer als Luft (Dichte > 1,0)?',
    options: ['Wasserstoff (H₂)', 'Methan (CH₄, Erdgas)', 'Propan / Butan (Flüssiggas)', 'Helium'],
    correct: 2,
    explain: 'Propan (1,55) und Butan (2,1) sind schwerer als Luft → sammeln sich in Gruben/Kellern. Wasserstoff (0,07), Methan (0,55) und Helium (0,14) sind leichter.',
    source: 'Sicherheitsdatenblätter / DGUV Regel 113-001'
  },
  {
    id: 'as058', path: 'lehrling-vde', category: 'Brennbare Flüssigkeiten',
    question: 'Wieviel Kraftstoff genügt im 200-Liter-Fass, um eine zündfähige Atmosphäre zu erzeugen?',
    options: ['Bereits ein Fingerhut bzw. wenige Milliliter', 'Mindestens 5 Liter', 'Mindestens 50 Liter', '0,5 Liter'],
    correct: 0,
    explain: 'Schon kleinste Restmengen (wenige ml) verdunsten im Fass und bilden ein zündfähiges Dampf-Luft-Gemisch. Daher dürfen leere Behälter ohne Reinigung nicht „heiß" bearbeitet werden.',
    source: 'DGUV Information 213-006'
  },
  {
    id: 'as059', path: 'lehrling-vde', category: 'Brennbare Flüssigkeiten',
    question: 'Warum sollten leere Behälter brennbarer Flüssigkeiten nicht in Arbeitsräumen verbleiben?',
    options: ['Sie nehmen Platz weg', 'Restdämpfe können sich entzünden oder explodieren, „leer" ist nicht „luftleer"', 'Sie verschlechtern den Geruch', 'Aus optischen Gründen'],
    correct: 1,
    explain: 'Leere Behälter enthalten oft noch Dampfreste in zündfähiger Konzentration → erhöhte Brand-/Explosionsgefahr. Entweder dampffrei spülen oder im Freien lagern.',
    source: 'TRGS 510 / 800'
  },
  {
    id: 'as060', path: 'lehrling-vde', category: 'GHS-Kennzeichnung',
    question: 'Welche Stoffe werden mit dem GHS01-Symbol „explodierende Bombe" gekennzeichnet?',
    options: ['Giftige Stoffe', 'Explosive Stoffe / Gemische, organische Peroxide bestimmter Typen', 'Stoffe, die nur Geruch verursachen', 'Aggressive Säuren'],
    correct: 1,
    explain: 'GHS01 = Bombe → instabile explosive Stoffe, Gemische, Erzeugnisse mit Explosivstoff, organische Peroxide Typ A/B. Bsp.: TNT, einige Pulver/Treibsätze.',
    source: 'CLP-VO Anhang V'
  },
  {
    id: 'as061', path: 'lehrling-vde', category: 'Gefahrstoffe',
    question: 'Für wen gilt die Gefahrstoffverordnung (GefStoffV)?',
    options: ['Nur für Großunternehmen', 'Für jeden Arbeitgeber, in dessen Betrieb Tätigkeiten mit Gefahrstoffen ausgeübt werden', 'Nur für Chemiebetriebe', 'Nur in Apotheken'],
    correct: 1,
    explain: 'GefStoffV § 1: Gilt für jeden Arbeitgeber, der Tätigkeiten mit Gefahrstoffen ausübt, auch im Handwerk (Reinigungsmittel, Klebstoffe, Lacke …).',
    source: 'GefStoffV § 1'
  },
  {
    id: 'as062', path: 'lehrling-vde', category: 'Gefahrstoffe',
    question: 'Welche Aussagen zu GHS-Piktogrammen sind richtig?',
    options: ['GHS06 (Totenkopf) = akut toxisch (lebensgefährliche Vergiftung)', 'GHS05 (Reagenzgläser) = ätzend (Haut/Augen, Korrosion von Metallen)', 'GHS08 (Gesundheitsgefahr) = krebserzeugend, mutagen, reproduktionstoxisch', 'GHS04 (Gasflasche) = Druckgas (komprimierte / verflüssigte Gase)'],
    correct: [0, 1, 2, 3],
    explain: 'GHS-Piktogramme nach CLP: GHS01 Explosiv, 02 Entzündbar, 03 Brandfördernd, 04 Druckgas, 05 Ätzend, 06 Akut toxisch, 07 gesundheitsschädlich, 08 chronisch gefährlich (CMR), 09 Umwelt.',
    source: 'CLP-VO Anhang V'
  },
  {
    id: 'as063', path: 'lehrling-vde', category: 'Gefahrstoffe',
    question: 'Auf welchen Wegen können Gefahrstoffe in den menschlichen Körper aufgenommen werden?',
    options: ['Einatmen (inhalativ)', 'Hautkontakt / Resorption', 'Verschlucken (oral)', 'Durch Telepathie'],
    correct: [0, 1, 2],
    explain: '3 Aufnahmewege: inhalativ (häufigste!), dermal (Hautresorption, z. B. Lösemittel) und oral (selten am Arbeitsplatz, vor allem Hand-zu-Mund-Kontakt).',
    source: 'TRGS 401 / 402'
  },
  {
    id: 'as064', path: 'lehrling-vde', category: 'Gefahrstoffe',
    question: 'Was bedeutet der Begriff „Hautresorption"?',
    options: ['Aufnahme über die Lunge', 'Aufnahme eines Stoffes durch die intakte Haut in den Körper', 'Allergische Hautreaktion', 'Aufnahme über die Mundschleimhaut'],
    correct: 1,
    explain: 'Hautresorption = Stoff durchdringt die Haut und gelangt in den Blutkreislauf. Lösemittel wie Toluol, Phenol, manche Pestizide. „H315/H317" Hinweise im SDB beachten.',
    source: 'TRGS 401'
  },
  {
    id: 'as065', path: 'lehrling-vde', category: 'Gefahrstoffe',
    question: 'In welchen Erscheinungsformen können Gefahrstoffe vorkommen?',
    options: ['Gasförmig / Dämpfe', 'Flüssig / Aerosole', 'Fest / Stäube', 'Bei Vollmond unsichtbar'],
    correct: [0, 1, 2],
    explain: 'Gefahrstoffe können fest (Stäube, Granulate), flüssig (Lösungen, Sprays) oder gasförmig (Gase, Dämpfe) sein. Aerosole sind feste/flüssige Schwebeteilchen in Gasen.',
    source: 'GefStoffV / TRGS 900'
  },
  {
    id: 'as066', path: 'lehrling-vde', category: 'Sicherheitsdatenblatt',
    question: 'Welche Angaben enthält ein Sicherheitsdatenblatt nach REACH/CLP?',
    options: ['Identität des Stoffes / Gemisches und Lieferantendaten', 'Mögliche Gefahren, Erste-Hilfe-, Brandbekämpfungs- und Schutzmaßnahmen', 'Toxikologie, Ökologie, Entsorgung, Transport', 'Werbeanzeigen für Konkurrenzprodukte'],
    correct: [0, 1, 2],
    explain: 'SDB hat 16 Pflichtabschnitte (Anhang II REACH-VO). Es ist Pflicht-Information vom Lieferanten und Grundlage für Gefährdungsbeurteilung und Betriebsanweisung.',
    source: 'REACH-VO Anhang II / TRGS 220'
  },
  {
    id: 'as067', path: 'lehrling-vde', category: 'Gefahrstoffe',
    question: 'Welche Hauptgefahren können beim Umgang mit Gefahrstoffen auftreten?',
    options: ['Akute oder chronische Vergiftung', 'Brand und Explosion', 'Verätzung, Reizung, Sensibilisierung', 'Glücksspielsucht'],
    correct: [0, 1, 2],
    explain: 'Gefahrenarten: gesundheitlich (akut/chronisch toxisch, ätzend, sensibilisierend, CMR), physikalisch (entzündbar, explosiv), umweltgefährlich.',
    source: 'GefStoffV / CLP-VO'
  },
  {
    id: 'as068', path: 'lehrling-vde', category: 'Arbeitsmedizin',
    question: 'Wann ist eine arbeitsmedizinische Vorsorge nach ArbMedVV anlassbezogen vorgeschrieben (Pflichtvorsorge)?',
    options: ['Bei jedem Beschäftigten unabhängig der Tätigkeit', 'Wenn die Tätigkeit in der ArbMedVV-Anlage als Pflichtvorsorge genannt ist (z. B. KMR-Stoffe, Lärm > 85 dB)', 'Erst nach 5 Jahren im Betrieb', 'Nur bei Krankenhauspersonal'],
    correct: 1,
    explain: 'ArbMedVV Anlage Teil 1: Pflichtvorsorge bei bestimmten Tätigkeiten (KMR-Stoffe, Asbest, Lärm > 85 dB(A), Vibrationen, Atemschutz schwer …). Ohne Vorsorge keine Beschäftigung erlaubt.',
    source: 'ArbMedVV Anhang Teil 1'
  },
  {
    id: 'as069', path: 'lehrling-vde', category: 'Gefahrstoffe',
    question: 'Welche Maßnahmen sind VOR Beginn einer Tätigkeit mit Gefahrstoffen zu treffen?',
    options: ['Gefährdungsbeurteilung erstellen', 'Substitutionsprüfung (gibt es harmlosere Stoffe?)', 'Betriebsanweisung erstellen + Beschäftigte unterweisen', 'Niemand ist zu informieren'],
    correct: [0, 1, 2],
    explain: 'GefStoffV § 6 + § 14: Gefährdungsbeurteilung, Substitutionsprüfung, Betriebsanweisung in verständlicher Sprache, mündliche Unterweisung mind. jährlich.',
    source: 'GefStoffV §§ 6, 14'
  },
  {
    id: 'as070', path: 'lehrling-vde', category: 'Gefahrstoffe',
    question: 'Welche Schutzmaßnahme bei Tätigkeiten mit Gefahrstoffen hat nach dem STOP-Prinzip Vorrang?',
    options: ['Persönliche Schutzausrüstung', 'Substitution durch ungefährlichere Stoffe (S)', 'Hinweisschilder', 'Verkürzte Arbeitszeiten'],
    correct: 1,
    explain: 'STOP-Prinzip: 1. Substitution → 2. Technische Maßnahmen (z. B. Absaugung) → 3. Organisatorische Maßnahmen → 4. PSA (immer letzte Wahl).',
    source: 'GefStoffV § 7 / TRGS 600'
  },
  {
    id: 'as071', path: 'lehrling-vde', category: 'Erste Hilfe',
    question: 'Kann Milchtrinken bei einer Vergiftung als „Gegengift" dienen?',
    options: ['Ja, wirkt immer als Antidot', 'Nein, Milch kann die Aufnahme einiger Stoffe sogar beschleunigen. Nichts geben, sofort 112!', 'Nur bei Säurevergiftung', 'Nur bei Alkohol'],
    correct: 1,
    explain: 'Veraltete Annahme. Bei vielen Gefahrstoffen kann Milch die Resorption fettlöslicher Toxine beschleunigen. Richtig: nichts zu trinken geben (außer Wasser bei klarem ärztlichem Rat), Notruf 112, Giftnotruf.',
    source: 'DGUV Information 204-022 / Giftnotruf'
  },
  {
    id: 'as072', path: 'lehrling-vde', category: 'Gefahrstoffe-Kennzeichnung',
    question: 'Wie müssen Gefahrstoff-Behälter im Betrieb gekennzeichnet sein?',
    options: ['Nur mit dem Markennamen', 'Mit Produktidentifikator, GHS-Piktogrammen, Signalwort, H- und P-Sätzen', 'Mit einem roten Punkt', 'Eine Bedienungsanleitung daneben reicht'],
    correct: 1,
    explain: 'CLP-VO: Etikett enthält Identifikator, Mengenangabe, GHS-Pikto(s), Signalwort (Gefahr/Achtung), H-/P-Sätze, Lieferantendaten. Auch beim Umfüllen Pflicht.',
    source: 'CLP-VO Art. 17'
  },
  {
    id: 'as073', path: 'lehrling-vde', category: 'Gefahrstoffe-Behälter',
    question: 'Welche Anforderungen müssen Behälter für Gefahrstoffe erfüllen?',
    options: ['Gegenüber dem Inhalt beständig (Material/Verschluss)', 'Sicher verschließbar, dicht gegen Auslaufen und Dampfdurchtritt', 'Eindeutig gekennzeichnet (siehe Frage zuvor)', 'Keine besonderen Anforderungen'],
    correct: [0, 1, 2],
    explain: 'TRGS 510: Behälter müssen materialbeständig, dicht, sicher verschließbar, beschriftet und für Lager/Transport zugelassen sein. Lebensmittelbehälter sind verboten!',
    source: 'TRGS 510'
  },
  {
    id: 'as074', path: 'lehrling-vde', category: 'Lüftung',
    question: 'Wie sollen Dämpfe abgeführt werden, die schwerer sind als Luft?',
    options: ['Über Deckenabsaugung am höchsten Punkt', 'Bodennahe Absaugung am Entstehungsort', 'Durch geöffnete Fenster reicht', 'Mit dem Föhn nach oben'],
    correct: 1,
    explain: 'Schwere Dämpfe sammeln sich am Boden → Absaugung muss bodennah erfolgen, möglichst direkt an der Entstehungsstelle (Quellabsaugung).',
    source: 'ASR A3.6 / TRGS 500'
  },
  {
    id: 'as075', path: 'lehrling-vde', category: 'Atemschutz',
    question: 'Welche PSA schützt zuverlässig vor dem Einatmen gesundheitsschädlicher Gase und Dämpfe?',
    options: ['FFP3-Feinstaubmaske', 'Geeigneter Atemschutz mit Gasfilter passender Klasse (z. B. A2B2E2K2-P3)', 'Operationsmaske aus Stoff', 'Schutzbrille'],
    correct: 1,
    explain: 'Partikelmasken (FFP) wirken nicht gegen Gase/Dämpfe! Erforderlich: Gasfilter mit dem passenden Schutztyp (A für organisch, B für anorganisch, E für Säuren, K für Ammoniak) und Schutzklasse.',
    source: 'DIN EN 14387 / DGUV Regel 112-190'
  },
  {
    id: 'as076', path: 'lehrling-vde', category: 'Hautschutz',
    question: 'Welche Maßnahmen schützen die Haut vor Schädigung durch Gefahrstoffe?',
    options: ['Geeignete Schutzhandschuhe (Material zum Stoff passend, Durchbruchszeit beachten)', 'Hautschutzplan: Schutz vor, Reinigung während, Pflege nach der Arbeit', 'Vermeidung direkten Kontakts (Spritzschutz, Werkzeuge)', 'Hände vor Arbeitsbeginn sauber lecken'],
    correct: [0, 1, 2],
    explain: '3-Stufen-Hautschutzplan: Schutz (Creme, Handschuhe), Reinigung (mild!), Pflege (rückfettend). Handschuhmaterial nach Permeations-Tabelle wählen.',
    source: 'TRGS 401 / DGUV Regel 112-195'
  },
  {
    id: 'as077', path: 'lehrling-vde', category: 'Chemie-Praxis',
    question: 'Wie wird konzentrierte Säure verdünnt?',
    options: ['Wasser zur Säure', 'Säure langsam zum Wasser', 'Beides gleichzeitig in dritten Behälter', 'Temperatur ist egal'],
    correct: 1,
    explain: 'Merksatz „Erst das Wasser, dann die Säure, sonst geschieht das Ungeheure". Säure zu Wasser geben, sonst spritzt es heftig (Wärmeentwicklung, Siedeverzug).',
    source: 'Chemie-Lehrbuch / TRGS 555'
  },
  {
    id: 'as078', path: 'lehrling-vde', category: 'Hautschutz',
    question: 'Welche Aussage zum Hautschutz ist richtig?',
    options: ['Hautschutzcreme ersetzt Handschuhe vollständig', 'Hautschutz wirkt nur wenn vor jeder Tätigkeit aufgetragen und Handschuhe trotzdem getragen werden', 'Lederhandschuhe schützen immer gegen Lösemittel', 'Nach 3 Tagen Eingewöhnung braucht man keinen Hautschutz'],
    correct: 1,
    explain: 'Hautschutzcreme ist ergänzend zu Handschuhen, nicht statt! Schützt gegen Wasser, milde Reizstoffe, UV. Lösemittel-Handschuhe nur Nitril/Butyl mit ausreichender Permeationszeit.',
    source: 'TRGS 401 / DGUV Regel 112-195'
  },
  {
    id: 'as079', path: 'lehrling-vde', category: 'Arbeitsmedizin',
    question: 'Wann muss der Arbeitgeber arbeitsmedizinische Angebotsvorsorge anbieten?',
    options: ['Bei Tätigkeiten mit Gefahrstoffen unterhalb der Pflichtgrenzen, wenn Gesundheitsbeeinträchtigung möglich', 'Bildschirmarbeit (Untersuchung der Augen)', 'Tätigkeiten an feuchten Händen länger als 2 h/Tag', 'Niemals'],
    correct: [0, 1, 2],
    explain: 'ArbMedVV Anlage Teil 2: Angebotsvorsorge bei diversen Tätigkeiten, Beschäftigte können freiwillig annehmen. Pflichtvorsorge ist Voraussetzung der Tätigkeit, Angebotsvorsorge nicht.',
    source: 'ArbMedVV Anlage Teil 2'
  },
  {
    id: 'as080', path: 'lehrling-vde', category: 'Erste Hilfe',
    question: 'Welche Erst-Hilfe-Maßnahme ist bei Verätzungen am Auge durch Säure korrekt?',
    options: ['Mit dem Finger reiben', 'Mit reichlich Wasser sofort und mind. 15 min spülen, von innen nach außen, danach Augenarzt', 'Mit Lösemittel neutralisieren', 'Verbinden und nichts tun'],
    correct: 1,
    explain: 'DGUV 204-022: Sofort 15+ Minuten mit Wasser spülen, gesundes Auge nicht kontaminieren (von innen nach außen), parallel Notruf / Augenarzt. Nicht reiben, nicht neutralisieren.',
    source: 'DGUV Information 204-022'
  },
  {
    id: 'as081', path: 'lehrling-vde', category: 'Reinigungsmittel',
    question: 'Welche Gefahren bestehen bei Tätigkeiten mit Kaltreinigern auf Lösemittelbasis?',
    options: ['Brand- und ggf. Explosionsgefahr (entzündbare Lösemittel)', 'Hautreizung und Hautresorption von Lösemitteln', 'Atemwegsbelastung, ggf. ZNS-Effekte (Schwindel, Übelkeit)', 'Erhöhte Konzentrationsfähigkeit'],
    correct: [0, 1, 2],
    explain: 'Kaltreiniger enthalten oft Kohlenwasserstoff- oder Esterlösungsmittel: brennbar, hautresorptiv, atemwegsreizend. Substitution durch wasserbasierte Reiniger prüfen!',
    source: 'TRGS 612 / Sicherheitsdatenblatt'
  },
  {
    id: 'as082', path: 'lehrling-vde', category: 'Reinigungsmittel',
    question: 'Welche Schutzmaßnahmen sind bei Verwendung von lösemittelhaltigen Kaltreinigern erforderlich?',
    options: ['Substitution prüfen (wasserbasiert?)', 'Geeignete Lüftung / Absaugung am Arbeitsplatz', 'Lösemittelbeständige Handschuhe (Nitril/Butyl, Permeation prüfen)', 'Mit offenen Flammen in der Nähe arbeiten'],
    correct: [0, 1, 2],
    explain: 'STOP-Prinzip: Erst Substitution, dann technische Lösungen (Absaugung, Kapselung), dann organisatorisch, zuletzt PSA. Niemals Zündquellen in der Nähe.',
    source: 'GefStoffV § 7 / TRGS 612'
  },
  {
    id: 'as083', path: 'lehrling-vde', category: 'Klebstoffe',
    question: 'Was ist beim Umgang mit reaktiven 2-Komponenten-Klebstoffen / Methacrylaten zu beachten?',
    options: ['Sensibilisierungsgefahr, Hautkontakt strikt vermeiden', 'Geruchsstark, daher gute Lüftung erforderlich', 'Ausgehärtete Reste sind i. d. R. unbedenklich, Bearbeitung von Stäuben aber Atemschutz', 'Nur bei Sonnenschein verwenden'],
    correct: [0, 1, 2],
    explain: 'Methacrylate (Acryl, Cyanacrylat) sind sensibilisierend (H317), reizen Atemwege. Schutzhandschuhe (Nitril, kein Latex), Lüftung, Augenschutz. Ausgehärtetes Material ist meist inert.',
    source: 'TRGS 401 / Sicherheitsdatenblatt'
  },
  {
    id: 'as084', path: 'lehrling-vde', category: 'Sicherheitskennzeichen',
    question: 'Ein Schild mit gelbem Dreieck und Gabelstapler-Symbol bedeutet …',
    options: ['Hinweis auf Lieferzone', 'Warnung vor Flurförderzeugen / Staplerverkehr', 'Verbot für Gabelstapler', 'Werbeschild'],
    correct: 1,
    explain: 'Gelbes Warndreieck = „Warnung vor …". Symbol Stapler = Warnung vor Flurförderzeugen. Beschäftigte müssen besonders auf den Stapler-Verkehr achten.',
    source: 'ASR A1.3'
  },
  {
    id: 'as085', path: 'lehrling-vde', category: 'Sicherheitskennzeichen',
    question: 'Mit welchen Symbolen wird ein Arbeitsplatz mit ätzenden Gefahrstoffen typischerweise gekennzeichnet?',
    options: ['GHS05 (Reagenzgläser auf Hand und Metall)', 'Warnzeichen W023 „Warnung vor ätzenden Stoffen"', 'Gebotszeichen für Schutzhandschuhe und Augenschutz', 'Grüner Pfeil zur Notdusche / Augendusche'],
    correct: [0, 1, 2, 3],
    explain: 'Kombinierte Kennzeichnung am Arbeitsplatz: GHS-Piktogramm an Behältern, ASR-Warn- und -Gebotszeichen am Arbeitsbereich, Rettungszeichen für Augendusche/Notdusche.',
    source: 'ASR A1.3 / CLP-VO'
  },
  {
    id: 'as086', path: 'lehrling-vde', category: 'Wegesicherheit',
    question: 'Sie sind in geselliger Runde und müssen mit dem Auto nach Hause. Wie verhalten Sie sich richtig?',
    options: ['Kein Alkohol, wenn Sie noch fahren wollen', 'Alternativen wählen (Taxi, ÖPNV, abholen lassen, Übernachtung)', 'Schon beim ersten Glas das Fahrzeug stehen lassen', 'Promillegrenze bis zur Hausschwelle ausreizen'],
    correct: [0, 1, 2],
    explain: 'StVG / StGB: 0,5 ‰ ist Ordnungswidrigkeitsgrenze, ab 1,1 ‰ absolute Fahruntüchtigkeit (Straftat). Wegeunfälle sind versichert, nicht jedoch unter Alkoholeinfluss „aus eigener Schuld".',
    source: '§ 24a StVG / § 316 StGB'
  },
  {
    id: 'as087', path: 'lehrling-vde', category: 'Wegesicherheit',
    question: 'Was ist nötig, damit man beim Autofahren stets gute Sicht hat?',
    options: ['Saubere Scheiben innen und außen, intakte Wischer', 'Funktionierende Beleuchtung und Spiegelreinigung', 'Sichtfeld nicht durch Anbauten, Air-Fresheners o. ä. einschränken', 'Frontscheibe mit Sticker dekorieren'],
    correct: [0, 1, 2],
    explain: 'StVZO § 23 + § 41: Sicht muss vollständig erhalten sein. Verschmutzte/beschlagene Scheiben, defekte Wischer oder verdeckte Spiegel sind verboten.',
    source: 'StVZO § 23'
  },
  {
    id: 'as088', path: 'lehrling-vde', category: 'Wegesicherheit',
    question: 'Was ist bei Fahrten im Regen besonders zu beachten?',
    options: ['Geschwindigkeit reduzieren, Bremsweg verlängert sich deutlich', 'Größeren Sicherheitsabstand einhalten (mind. doppelt)', 'Aquaplaning-Gefahr bei stehendem Wasser, sanft lenken/bremsen', 'Sonnenbrille hilft gegen Aquaplaning'],
    correct: [0, 1, 2],
    explain: 'StVO § 3 Abs. 1: Geschwindigkeit den Verhältnissen anpassen. Auf nasser Fahrbahn verdoppeln sich Bremswege, Aquaplaning ab 6–8 mm Wasserhöhe + zu hoher Geschwindigkeit.',
    source: 'StVO § 3 / § 4'
  },
  {
    id: 'as089', path: 'lehrling-vde', category: 'Wegesicherheit',
    question: 'Welche Pflichten bestehen nach einem Verkehrsunfall mit Personenschaden?',
    options: ['Unfallstelle absichern (Warnblinker, Warndreieck, Warnweste)', 'Erste Hilfe leisten und Notruf 112', 'An der Unfallstelle bleiben bis Polizei eintrifft (§ 142 StGB)', 'Sofort weiterfahren, sonst kommt man zu spät zur Arbeit'],
    correct: [0, 1, 2],
    explain: 'Pflichten: Absichern, Hilfe leisten, melden, an Unfallstelle warten. Unerlaubtes Entfernen ist Straftat (§ 142 StGB), erst recht bei Personenschaden.',
    source: 'StVO § 34 / § 142 StGB'
  },
  {
    id: 'as090', path: 'lehrling-vde', category: 'Wegesicherheit',
    question: 'Was ist bei abgefahrenen Winterreifen (Profiltiefe < 4 mm) zu tun?',
    options: ['Weiterfahren, gesetzlich erlaubt sind 1,6 mm', 'Reifen erneuern, Winterreifen verlieren ihre Funktion deutlich unter 4 mm', 'Reifen aufpumpen reicht', 'Frühlingsreifen aufziehen'],
    correct: 1,
    explain: 'Gesetzlich Mindesttiefe 1,6 mm, ADAC empfiehlt für Winterreifen ≥ 4 mm. Darunter Wintereigenschaften (Schnee, Matsch) stark eingeschränkt.',
    source: 'StVZO § 36 / ADAC-Empfehlung'
  },
  {
    id: 'as091', path: 'lehrling-vde', category: 'Wegesicherheit',
    question: 'Was sollte beim Reifenluftdruck regelmäßig kontrolliert werden?',
    options: ['Mindestens monatlich + vor langen Fahrten', 'Bei kalten Reifen messen', 'Herstellerempfehlung im Tankdeckel/Türholm beachten', 'Niemals selbst kontrollieren, nur beim TÜV'],
    correct: [0, 1, 2],
    explain: 'Falscher Luftdruck verschlechtert Fahrverhalten, Bremsweg, Verbrauch und Reifenlebensdauer. Sollwert vom Hersteller, kalt messen, monatlich prüfen.',
    source: 'StVZO § 36 / Herstellervorgaben'
  },
  {
    id: 'as092', path: 'lehrling-vde', category: 'Wegesicherheit',
    question: 'Welche Geschwindigkeit ist mit einem Mofa zulässig?',
    options: ['25 km/h (bauartbedingt) auf der Straße / Radwegen außer Ortschaften erlaubt', '45 km/h', '60 km/h', 'Beliebig'],
    correct: 0,
    explain: 'Mofa = max. 25 km/h bauartbedingt, Versicherungskennzeichen Pflicht, Mofa-Prüfbescheinigung ab 15 Jahren. Schnellere Krafträder = Roller / Motorrad.',
    source: 'FeV / StVZO'
  },
  {
    id: 'as093', path: 'lehrling-vde', category: 'Wegesicherheit',
    question: 'Wie groß sollte der Sicherheitsabstand zum vorausfahrenden Fahrzeug innerorts mindestens sein?',
    options: ['Mindestens halber Tachowert in Metern (klassische Faustregel)', 'Mindestens 100 m', 'Bumper-an-Bumper reicht', 'Eine Fahrzeuglänge'],
    correct: 0,
    explain: 'Faustregel innerorts: ½-Tacho in Metern (z. B. 50 km/h → 25 m). StVO § 4 Abs. 1: Abstand muss so groß sein, dass auch bei plötzlicher Bremsung noch hinter dem Vorausfahrenden gehalten werden kann.',
    source: 'StVO § 4'
  },
  {
    id: 'as094', path: 'lehrling-vde', category: 'Wegesicherheit',
    question: 'Wie verhält man sich bei Stau auf der Autobahn?',
    options: ['Sofort Warnblinker einschalten', 'Rettungsgasse zwischen linker und mittlerer/rechter Spur bilden (StVO § 11 Abs. 2)', 'Nicht aussteigen außer bei Gefahr', 'Auf Standspur wechseln und überholen'],
    correct: [0, 1, 2],
    explain: 'StVO § 11: Bei Stau Warnblinker, Rettungsgasse zwischen linkem und nächstem Streifen rechts (auf BAB mit ≥ 2 Spuren je Richtung). Standstreifen ist NICHT zur Weiterfahrt da.',
    source: 'StVO § 11'
  },
  {
    id: 'as095', path: 'lehrling-vde', category: 'Wegesicherheit',
    question: 'Wie lang ist der Anhalteweg eines PKW bei 50 km/h auf trockener Straße ungefähr?',
    options: ['ca. 14 m', 'ca. 28 m', 'ca. 50 m', 'ca. 80 m'],
    correct: 1,
    explain: 'Faustformel: Reaktionsweg = (km/h ÷ 10) · 3 = 15 m, Bremsweg ≈ (km/h ÷ 10)² = 25 m. Anhalteweg ≈ 28 m. Bei nasser Straße deutlich mehr (Bremsweg verdoppelt).',
    source: 'Fahrschul-Standardformel'
  },
  {
    id: 'as096', path: 'lehrling-vde', category: 'Wegesicherheit',
    question: 'Wie verbessern Motorradfahrer ihre Sichtbarkeit?',
    options: ['Helle, kontrastreiche Schutzkleidung (Warnweste optional)', 'Tagfahrlicht / Abblendlicht ständig eingeschaltet', 'Reflektierende Streifen an Helm/Anzug', 'Schwarze Komplettkleidung'],
    correct: [0, 1, 2],
    explain: 'Motorradfahrer werden statistisch besonders oft übersehen. Helle Kleidung, Reflektoren, Licht an, in der Spur eher mittig fahren, alles verbessert die Erkennbarkeit.',
    source: 'Verkehrserziehung / DGUV Information 214-046'
  },
  {
    id: 'as097', path: 'lehrling-vde', category: 'Wegesicherheit',
    question: 'Wie vermeidet man Türöffner-Unfälle mit vorbeifahrenden Radfahrern (sog. „Dooring")?',
    options: ['Vor dem Öffnen Schulterblick und Rückspiegel', 'Mit der gegenüberliegenden Hand öffnen („Dutch reach")', 'Tür nur kurz und nur soweit nötig öffnen', 'Tür mit Schwung gegen die Fahrbahn aufstoßen'],
    correct: [0, 1, 2],
    explain: 'Dutch Reach: Mit der weiter entfernten Hand greifen → Körper dreht automatisch mit, Schulterblick fast unausweichlich. Hat in NL die Dooring-Unfälle deutlich gesenkt.',
    source: 'DGUV Information 214-046 / Verkehrserziehung'
  },
  {
    id: 'as098', path: 'lehrling-vde', category: 'Wegesicherheit',
    question: 'Welche Beleuchtung ist bei „erheblicher Sichtbehinderung durch Niederschlag" einzuschalten?',
    options: ['Nur Standlicht', 'Abblendlicht', 'Fernlicht (immer)', 'Innenraumbeleuchtung'],
    correct: 1,
    explain: 'StVO § 17 Abs. 1: Tagfahrlicht reicht NICHT. Bei erheblicher Sichtbehinderung Abblendlicht, ggf. Nebelschlussleuchte, wenn Sicht < 50 m, Höchstgeschwindigkeit dann 50 km/h.',
    source: 'StVO § 17'
  },
  {
    id: 'as099', path: 'lehrling-vde', category: 'Wegesicherheit',
    question: 'Wie verhalten sich Fußgänger bei Schnee und Eis am sichersten?',
    options: ['Festes Schuhwerk mit guter Profilsohle tragen', 'Helle / reflektierende Kleidung in der Dunkelheit', 'Geräumte Wege benutzen, nicht ablenken (kein Smartphone in der Hand)', 'Mit Rollkoffer Slalom auf Glatteis üben'],
    correct: [0, 1, 2],
    explain: 'Wegeunfälle in der dunklen Jahreszeit sind häufig (Glätte!). Festes Schuhwerk, Reflektoren / Stirnlampe, Wege wählen statt abkürzen, beide Hände frei.',
    source: 'DGUV Information 208-006'
  },
  {
    id: 'as100', path: 'lehrling-vde', category: 'Wegesicherheit',
    question: 'Was ist beim Fahren in der Dämmerung und bei Dunkelheit zu beachten?',
    options: ['Geschwindigkeit der Sichtweite anpassen, „auf Sicht" fahren', 'Saubere Scheinwerfer und Heckleuchten, Höhe richtig eingestellt', 'Wildwechsel-Schilder ernst nehmen, Abblendlicht bei Gegenverkehr', 'Innenraum hell beleuchten, damit man drinnen besser sieht'],
    correct: [0, 1, 2],
    explain: 'Bei Dunkelheit: auf Sicht fahren (Anhalteweg < Reichweite Abblendlicht!), saubere Beleuchtung, Wildwechselgefahr v. a. in Dämmerung. Innenlicht stört nur die eigene Sicht.',
    source: 'StVO § 3 / § 17'
  }
];
