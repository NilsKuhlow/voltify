// Voltify – App-Logik
(function () {
  'use strict';

  const STORAGE_KEY = 'voltify-state-v1';

  // Leitner-Box-Intervalle in ms (Index = Box 1..5)
  const DAY = 24 * 60 * 60 * 1000;
  const BOX_INTERVAL = [0, 0, 1 * DAY, 3 * DAY, 7 * DAY, 14 * DAY];

  // ===== STATE =====
  function defaultState() {
    return {
      cards: {},
      streak: 0,
      lastSession: null,
      settings: { batch: 15, theme: 'dark', shuffle: true }
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return Object.assign(defaultState(), parsed, {
          settings: Object.assign(defaultState().settings, parsed.settings || {})
        });
      }
    } catch (e) {
      console.warn('Konnte State nicht laden:', e);
    }
    return defaultState();
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Konnte State nicht speichern:', e);
    }
  }

  let state = loadState();
  let session = null;

  function ensureCardsInitialized() {
    QUESTIONS.forEach((q) => {
      if (!state.cards[q.id]) {
        state.cards[q.id] = { box: 1, lastSeen: 0, nextDue: 0, correct: 0, total: 0 };
      }
    });
  }
  ensureCardsInitialized();

  // ===== HELFER =====
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escapeHtml(s) {
    const div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function isDue(card, now) {
    return card.nextDue <= now;
  }

  function dueCount(pathKey) {
    const now = Date.now();
    return QUESTIONS.filter(
      (q) => (!pathKey || q.path === pathKey) && isDue(state.cards[q.id], now)
    ).length;
  }

  function masteredCount(pathKey) {
    return QUESTIONS.filter(
      (q) => (!pathKey || q.path === pathKey) && state.cards[q.id].box >= 5
    ).length;
  }

  function seenCount(pathKey) {
    return QUESTIONS.filter(
      (q) => (!pathKey || q.path === pathKey) && state.cards[q.id].total > 0
    ).length;
  }

  // Gewichteter Lernfortschritt 0..100 (Box 1=0%, 2=25%, 3=50%, 4=75%, 5=100%)
  function pathProgress(pathKey) {
    const cards = QUESTIONS.filter((q) => !pathKey || q.path === pathKey);
    if (cards.length === 0) return 0;
    const sum = cards.reduce((acc, q) => acc + Math.max(0, state.cards[q.id].box - 1), 0);
    return Math.round((sum / (cards.length * 4)) * 100);
  }

  function renderLevel(box) {
    const filled = Math.max(0, Math.min(5, box));
    return '★'.repeat(filled) + '☆'.repeat(5 - filled);
  }

  function greetingText() {
    const h = new Date().getHours();
    if (h < 5) return 'Spät noch fleißig?';
    if (h < 11) return 'Guten Morgen!';
    if (h < 17) return 'Guten Tag!';
    if (h < 22) return 'Guten Abend!';
    return 'Spät noch fleißig?';
  }

  // ===== SESSION =====
  function startSession(pathKey) {
    const now = Date.now();
    let pool = QUESTIONS.filter((q) => !pathKey || q.path === pathKey);

    pool.sort((a, b) => {
      const ca = state.cards[a.id];
      const cb = state.cards[b.id];
      const dueA = isDue(ca, now) ? 1 : 0;
      const dueB = isDue(cb, now) ? 1 : 0;
      if (dueA !== dueB) return dueB - dueA;
      if (ca.box !== cb.box) return ca.box - cb.box;
      return ca.lastSeen - cb.lastSeen;
    });

    const batch = state.settings.batch;
    const cards = pool.slice(0, batch);

    if (cards.length === 0) {
      const fallback = shuffle(QUESTIONS.filter((q) => !pathKey || q.path === pathKey));
      cards.push(...fallback.slice(0, batch));
    }

    session = {
      pathKey,
      queue: shuffle(cards),
      correct: 0,
      wrong: 0,
      currentIdx: 0,
      seenIds: new Set()
    };

    showQuiz();
  }

  function showQuiz() {
    if (!session) return;
    const q = session.queue[session.currentIdx];
    if (!q) {
      finishSession();
      return;
    }

    showScreen('quiz');

    document.getElementById('progress-text').textContent =
      `${session.currentIdx + 1} / ${session.queue.length}`;
    document.getElementById('progress-fill').style.width =
      `${(session.currentIdx / session.queue.length) * 100}%`;

    document.getElementById('card-category').textContent = q.category;
    const card = state.cards[q.id];
    document.getElementById('card-level').textContent = renderLevel(card.box);
    document.getElementById('card-question').textContent = q.question;

    const optionsEl = document.getElementById('card-options');
    optionsEl.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const indices = q.options.map((_, i) => i);
    const order = state.settings.shuffle ? shuffle(indices) : indices;

    const isMulti = Array.isArray(q.correct);
    const correctSet = new Set(isMulti ? q.correct : [q.correct]);
    const selected = new Set();

    if (isMulti) {
      const hint = document.createElement('div');
      hint.className = 'multi-hint';
      hint.textContent = `Mehrfachauswahl · ${correctSet.size} Antworten richtig`;
      optionsEl.appendChild(hint);
    }

    order.forEach((origIdx, displayIdx) => {
      const btn = document.createElement('button');
      btn.className = 'option' + (isMulti ? ' multi' : '');
      btn.type = 'button';
      const mark = document.createElement('span');
      mark.className = 'option-mark';
      mark.textContent = letters[displayIdx];
      const text = document.createElement('span');
      text.className = 'option-text';
      text.textContent = q.options[origIdx];
      btn.appendChild(mark);
      btn.appendChild(text);
      btn.dataset.origIdx = origIdx;
      if (isMulti) {
        btn.addEventListener('click', () => {
          if (selected.has(origIdx)) {
            selected.delete(origIdx);
            btn.classList.remove('selected');
          } else {
            selected.add(origIdx);
            btn.classList.add('selected');
          }
          const cb = document.getElementById('multi-check');
          if (cb) cb.disabled = selected.size === 0;
        });
      } else {
        btn.addEventListener('click', () => answerQuestion(new Set([origIdx]), btn, correctSet));
      }
      optionsEl.appendChild(btn);
    });

    if (isMulti) {
      const checkBtn = document.createElement('button');
      checkBtn.id = 'multi-check';
      checkBtn.className = 'btn primary multi-check-btn';
      checkBtn.type = 'button';
      checkBtn.textContent = 'Antwort prüfen';
      checkBtn.disabled = true;
      checkBtn.addEventListener('click', () => answerQuestion(selected, null, correctSet));
      optionsEl.appendChild(checkBtn);
    }

    document.getElementById('card-feedback').classList.add('hidden');
  }

  function answerQuestion(chosenSet, clickedBtn, correctSet) {
    const q = session.queue[session.currentIdx];
    const card = state.cards[q.id];
    const correct = chosenSet.size === correctSet.size &&
                    [...chosenSet].every((i) => correctSet.has(i));

    card.total++;
    card.lastSeen = Date.now();
    if (correct) {
      card.correct++;
      card.box = Math.min(5, card.box + 1);
    } else {
      card.box = 1;
    }
    card.nextDue = Date.now() + BOX_INTERVAL[card.box];

    if (correct) {
      session.correct++;
    } else {
      session.wrong++;
      session.queue.push(q);
    }

    document.querySelectorAll('.option').forEach((btn) => {
      btn.disabled = true;
      btn.classList.remove('selected');
      const idx = parseInt(btn.dataset.origIdx, 10);
      if (correctSet.has(idx)) btn.classList.add('correct');
      else if (chosenSet.has(idx)) btn.classList.add('wrong');
    });
    const cb = document.getElementById('multi-check');
    if (cb) cb.remove();
    const mh = document.querySelector('.multi-hint');
    if (mh) mh.remove();

    const fb = document.getElementById('card-feedback');
    const fbHeader = document.getElementById('feedback-header');
    fbHeader.className = 'feedback-header ' + (correct ? 'ok' : 'no');
    fbHeader.textContent = correct ? '✓ Richtig!' : '✗ Falsch';
    document.getElementById('feedback-explain').textContent = q.explain;
    fb.classList.remove('hidden');

    document.getElementById('next-btn').onclick = nextQuestion;

    saveState();
  }

  function nextQuestion() {
    session.currentIdx++;
    showQuiz();
  }

  function finishSession() {
    const today = new Date().toDateString();
    const lastSessionDate = state.lastSession
      ? new Date(state.lastSession).toDateString()
      : null;

    if (lastSessionDate !== today) {
      const yesterday = new Date(Date.now() - DAY).toDateString();
      if (lastSessionDate === yesterday) {
        state.streak++;
      } else {
        state.streak = 1;
      }
      state.lastSession = Date.now();
    }
    saveState();

    showScreen('results');
    document.getElementById('result-correct').textContent = session.correct;
    document.getElementById('result-wrong').textContent = session.wrong;
    const total = session.correct + session.wrong;
    const accuracy = total > 0 ? Math.round((session.correct / total) * 100) : 0;
    document.getElementById('result-accuracy').textContent = accuracy + '%';

    let msg = '';
    if (accuracy === 100) msg = 'Perfekt! Alles richtig.';
    else if (accuracy >= 80) msg = 'Sehr stark! Du bist auf einem guten Weg.';
    else if (accuracy >= 60) msg = 'Solide. Wiederhole die schwierigen Karten gleich.';
    else msg = 'Üben lohnt sich – die falschen Karten kommen bald wieder.';
    document.getElementById('results-subtitle').textContent = msg;
  }

  // ===== HOME =====
  function renderHome() {
    document.getElementById('greeting').textContent = greetingText();
    document.getElementById('stat-streak').textContent = state.streak;
    document.getElementById('stat-mastered').textContent = masteredCount(null);
    document.getElementById('stat-due').textContent = dueCount(null);

    const list = document.getElementById('path-list');
    list.innerHTML = '';

    Object.entries(PATHS).forEach(([key, path]) => {
      const cards = QUESTIONS.filter((q) => q.path === key);
      const total = cards.length;
      const seen = cards.filter((q) => state.cards[q.id].total > 0).length;
      const due = cards.filter((q) => isDue(state.cards[q.id], Date.now())).length;
      const pct = pathProgress(key);
      const circumference = 2 * Math.PI * 24;
      const offset = circumference * (1 - pct / 100);

      const btn = document.createElement('button');
      btn.className = 'path-card';
      btn.type = 'button';
      btn.innerHTML = `
        <div class="path-icon ${key}">${path.icon}</div>
        <div class="path-info">
          <div class="path-title">${escapeHtml(path.name)}</div>
          <div class="path-meta">
            <span>${total} Karten</span>
            <span>${due} fällig</span>
            <span>${seen} gelernt</span>
          </div>
        </div>
        <div class="path-progress" aria-label="Lernfortschritt ${pct} Prozent">
          <svg viewBox="0 0 56 56" aria-hidden="true">
            <circle class="track" cx="28" cy="28" r="24"></circle>
            <circle class="fill" cx="28" cy="28" r="24"
              stroke-dasharray="${circumference}"
              stroke-dashoffset="${offset}"></circle>
          </svg>
          <span>${pct}%</span>
        </div>
      `;
      btn.addEventListener('click', () => startSession(key));
      list.appendChild(btn);
    });
  }

  // ===== STATS =====
  function renderStats() {
    const totalQ = QUESTIONS.length;
    const seen = seenCount(null);
    const mastered = masteredCount(null);
    const overall = pathProgress(null);
    let totalAnswered = 0;
    let totalCorrect = 0;
    QUESTIONS.forEach((q) => {
      const c = state.cards[q.id];
      totalAnswered += c.total;
      totalCorrect += c.correct;
    });
    const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
    const boxes = [0, 0, 0, 0, 0];
    QUESTIONS.forEach((q) => {
      const b = state.cards[q.id].box;
      boxes[Math.max(0, Math.min(4, b - 1))]++;
    });

    let html = `
      <div class="stats-section">
        <h3>Gesamtüberblick</h3>
        <div class="stat-row"><span>Karten insgesamt</span><span>${totalQ}</span></div>
        <div class="stat-row"><span>Schon gesehen</span><span>${seen}</span></div>
        <div class="stat-row"><span>Lernfortschritt</span><span>${overall}%</span></div>
        <div class="stat-row"><span>Beherrscht (Box 5)</span><span>${mastered}</span></div>
        <div class="stat-row"><span>Trefferquote gesamt</span><span>${accuracy}%</span></div>
        <div class="stat-row"><span>Aktuelle Streak</span><span>${state.streak} ${state.streak === 1 ? 'Tag' : 'Tage'}</span></div>
      </div>
      <div class="stats-section">
        <h3>Karten pro Lernbox</h3>
        <p class="stats-hint">Box 1 = noch nicht sicher · Box 5 = beherrscht (Wiedervorlage in 14 Tagen)</p>
        <div class="box-grid">
          ${boxes.map((c, i) => `
            <div class="box">
              <div class="box-num">Box ${i + 1}</div>
              <div class="box-count">${c}</div>
            </div>`).join('')}
        </div>
      </div>
    `;

    Object.entries(PATHS).forEach(([key, path]) => {
      const cards = QUESTIONS.filter((q) => q.path === key);
      const total = cards.length;
      const m = cards.filter((q) => state.cards[q.id].box >= 5).length;
      const prog = pathProgress(key);
      let answered = 0;
      let corr = 0;
      cards.forEach((q) => {
        answered += state.cards[q.id].total;
        corr += state.cards[q.id].correct;
      });
      const acc = answered > 0 ? Math.round((corr / answered) * 100) : 0;
      html += `
        <div class="stats-section">
          <h3>${escapeHtml(path.name)}</h3>
          <div class="stat-row"><span>Karten</span><span>${total}</span></div>
          <div class="stat-row"><span>Lernfortschritt</span><span>${prog}%</span></div>
          <div class="stat-row"><span>Beherrscht (Box 5)</span><span>${m}</span></div>
          <div class="stat-row"><span>Trefferquote</span><span>${acc}%</span></div>
        </div>
      `;
    });

    document.getElementById('stats-content').innerHTML = html;
  }

  // ===== SETTINGS =====
  function renderSettings() {
    document.getElementById('setting-batch').value = state.settings.batch;
    document.getElementById('setting-theme').value = state.settings.theme;
    document.getElementById('setting-shuffle').checked = !!state.settings.shuffle;
  }

  // ===== SCREEN =====
  function showScreen(name) {
    document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
    const screen = document.querySelector(`[data-screen="${name}"]`);
    if (screen) screen.classList.add('active');
    if (name === 'home') renderHome();
    if (name === 'stats') renderStats();
    if (name === 'settings') renderSettings();
    window.scrollTo(0, 0);
  }

  function applyTheme() {
    const t = state.settings.theme;
    if (t === 'auto') {
      const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-theme', t);
    }
    const themeColor = t === 'light' ? '#f5f7fb' : '#0a0e27';
    let meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', themeColor);
  }

  // ===== EVENTS =====
  function bind() {
    document.addEventListener('click', (e) => {
      const navTarget = e.target.closest('[data-nav]');
      if (navTarget) {
        const target = navTarget.dataset.nav;
        if (target === 'quiz-mix') startSession(null);
        else showScreen(target);
        return;
      }
      const actionEl = e.target.closest('[data-action]');
      if (actionEl) {
        const action = actionEl.dataset.action;
        if (action === 'quit-quiz') {
          if (confirm('Session abbrechen? Bisherige Antworten sind bereits gespeichert.')) {
            session = null;
            showScreen('home');
          }
        }
      }
    });

    document.getElementById('repeat-btn').addEventListener('click', () => {
      const path = session ? session.pathKey : null;
      startSession(path);
    });

    document.getElementById('setting-batch').addEventListener('change', (e) => {
      state.settings.batch = parseInt(e.target.value, 10);
      saveState();
    });

    document.getElementById('setting-theme').addEventListener('change', (e) => {
      state.settings.theme = e.target.value;
      applyTheme();
      saveState();
    });

    document.getElementById('setting-shuffle').addEventListener('change', (e) => {
      state.settings.shuffle = e.target.checked;
      saveState();
    });

    document.getElementById('reset-progress').addEventListener('click', () => {
      if (confirm('Wirklich allen Lernfortschritt löschen?')) {
        state = defaultState();
        ensureCardsInitialized();
        saveState();
        showScreen('home');
      }
    });

    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (state.settings.theme === 'auto') applyTheme();
      });
    }
  }

  // ===== SERVICE WORKER =====
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    });
  }

  // ===== BOOT =====
  saveState();
  applyTheme();
  bind();
  showScreen('home');
})();
