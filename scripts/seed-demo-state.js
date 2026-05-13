// Befüllt den localStorage mit einem realistischen Demo-State für Screenshots.
// In den DevTools der App ausführen:
//   fetch('scripts/seed-demo-state.js').then(r => r.text()).then(eval);
// Danach Reload. Lernfortschritt wird durch das Skript überschrieben!
(function () {
  if (!confirm('Demo-State setzen? Aktueller Lernfortschritt wird überschrieben!')) return;
  const STORAGE_KEY = 'voltify-state-v1';
  const DAY = 24 * 60 * 60 * 1000;

  if (!window.QUESTIONS) { alert('QUESTIONS nicht geladen.'); return; }

  // Verteile die Karten plausibel über die Boxen
  // Box 5: 12% beherrscht
  // Box 4: 18%
  // Box 3: 24%
  // Box 2: 22%
  // Box 1: 24%
  const dist = { 5: 0.12, 4: 0.18, 3: 0.24, 2: 0.22, 1: 0.24 };
  const cards = {};
  const total = window.QUESTIONS.length;
  let i = 0;
  for (const [box, frac] of Object.entries(dist)) {
    const n = Math.round(total * frac);
    for (let k = 0; k < n && i < total; k++, i++) {
      const id = window.QUESTIONS[i].id;
      const b = parseInt(box, 10);
      cards[id] = {
        box: b,
        lastSeen: Date.now() - DAY * (6 - b),
        nextDue: b <= 2 ? Date.now() : Date.now() + DAY * (b - 1),
        correct: b * 2,
        total: b * 2 + (b === 1 ? 1 : 0),
        bookmarked: i % 27 === 0  // ein paar markierte
      };
    }
  }
  // Rest: Box 1 default
  for (; i < total; i++) {
    cards[window.QUESTIONS[i].id] = {
      box: 1, lastSeen: 0, nextDue: 0, correct: 0, total: 0, bookmarked: false
    };
  }

  const state = {
    schemaVersion: 1,
    cards,
    streak: 12,
    lastSession: Date.now() - DAY,
    profile: { gradeYear: 3, examDate: new Date(Date.now() + 28 * DAY).toISOString().slice(0, 10) },
    settings: { batch: 15, theme: 'dark', shuffle: true }
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  localStorage.setItem('voltify-onboarded', '1');
  alert('Demo-State gesetzt. Seite wird neu geladen.');
  location.reload();
})();
