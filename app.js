// Voltify – App-Logik
(function () {
  'use strict';

  const STORAGE_KEY = 'voltify-state-v1';
  const CURRENT_SCHEMA = 1;
  const FIRST_VISIT_KEY = 'voltify-onboarded';

  // Leitner-Box-Intervalle in ms (Index = Box 1..5)
  const DAY = 24 * 60 * 60 * 1000;
  const BOX_INTERVAL = [0, 0, 1 * DAY, 3 * DAY, 7 * DAY, 14 * DAY];

  // ===== STATE =====
  function defaultState() {
    return {
      schemaVersion: CURRENT_SCHEMA,
      cards: {},
      streak: 0,
      lastSession: null,
      sessionDays: {},
      profile: { gradeYear: null, examDate: null },
      settings: { batch: 15, theme: 'dark', shuffle: true }
    };
  }

  // Schema-Migration. Bei späteren Schema-Änderungen hier Stufen einfügen:
  //   if (v < 2) { state = migrateV1ToV2(state); v = 2; }
  //   if (v < 3) { state = migrateV2ToV3(state); v = 3; }
  function migrate(state) {
    if (!state || typeof state !== 'object') return defaultState();
    // Migrationen rückwirkend
    if (!state.sessionDays || typeof state.sessionDays !== 'object') {
      state.sessionDays = {};
    }
    state.schemaVersion = CURRENT_SCHEMA;
    return state;
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        let parsed = JSON.parse(raw);
        parsed = migrate(parsed);
        return Object.assign(defaultState(), parsed, {
          settings: Object.assign(defaultState().settings, parsed.settings || {}),
          profile: Object.assign(defaultState().profile, parsed.profile || {})
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
        state.cards[q.id] = {
          box: 1, lastSeen: 0, nextDue: 0,
          correct: 0, total: 0, bookmarked: false
        };
      } else if (typeof state.cards[q.id].bookmarked !== 'boolean') {
        state.cards[q.id].bookmarked = false;
      }
    });
  }
  ensureCardsInitialized();

  function bookmarkedCount(pathKey) {
    return QUESTIONS.filter(
      (q) => (!pathKey || q.path === pathKey) && state.cards[q.id].bookmarked
    ).length;
  }

  function toggleBookmark(id) {
    if (state.cards[id]) {
      state.cards[id].bookmarked = !state.cards[id].bookmarked;
      saveState();
    }
  }

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

  // ===== BACKUP / RESTORE =====
  function exportState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY) || '{}';
      const data = {
        app: 'voltify',
        schemaVersion: CURRENT_SCHEMA,
        exportedAt: new Date().toISOString(),
        state: JSON.parse(raw)
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: 'application/json'
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
      a.href = url;
      a.download = `voltify-backup-${ts}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {
      alert('Export fehlgeschlagen: ' + e.message);
    }
  }

  function importState(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const parsed = JSON.parse(e.target.result);
        if (parsed.app !== 'voltify') {
          throw new Error('Datei ist kein Voltify-Backup.');
        }
        if (!parsed.state || typeof parsed.state.cards !== 'object') {
          throw new Error('Backup-Datei ist unvollständig.');
        }
        if (!confirm('Aktuellen Lernfortschritt durch das Backup ersetzen?')) {
          return;
        }
        const migrated = migrate(parsed.state);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
        alert('Backup wurde eingespielt. Die App wird neu geladen.');
        location.reload();
      } catch (err) {
        alert('Import fehlgeschlagen: ' + err.message);
      }
    };
    reader.onerror = function () {
      alert('Datei konnte nicht gelesen werden.');
    };
    reader.readAsText(file);
  }

  // ===== ERST-START-WIZARD =====
  function showVisitStep(n) {
    document.querySelectorAll('.visit-step').forEach((s) => {
      s.classList.toggle('hidden', s.dataset.step !== String(n));
    });
  }

  function maybeShowFirstVisit() {
    try {
      if (!localStorage.getItem(FIRST_VISIT_KEY)) {
        showVisitStep(1);
        document.getElementById('first-visit').classList.remove('hidden');
      }
    } catch (e) {}
  }

  function dismissFirstVisit() {
    try { localStorage.setItem(FIRST_VISIT_KEY, '1'); } catch (e) {}
    document.getElementById('first-visit').classList.add('hidden');
    renderHome();  // Profile-Daten ggf. jetzt anzeigen
  }

  // ===== PRÜFUNGSSIMULATOR =====
  let examTimerId = null;
  let examEndTs = null;

  function startExam(opts) {
    const pathKey = opts.pathKey || null;
    const count = opts.count || 30;
    const timeMin = opts.timeMin || 0;

    let pool = QUESTIONS.filter((q) => !pathKey || q.path === pathKey);
    if (pool.length === 0) {
      alert('Für diesen Bereich sind keine Fragen verfügbar.');
      return;
    }
    pool = shuffle(pool).slice(0, Math.min(count, pool.length));

    session = {
      pathKey,
      queue: pool,
      correct: 0,
      wrong: 0,
      currentIdx: 0,
      seenIds: new Set(),
      mode: 'exam',
      answers: [],
      startedAt: Date.now()
    };

    const timerEl = document.getElementById('exam-timer');
    if (timeMin > 0) {
      examEndTs = Date.now() + timeMin * 60 * 1000;
      timerEl.classList.remove('hidden');
      updateExamTimer();
      examTimerId = setInterval(updateExamTimer, 1000);
    } else {
      examEndTs = null;
      timerEl.classList.add('hidden');
    }

    showQuiz();
  }

  function updateExamTimer() {
    if (!examEndTs) return;
    const remaining = Math.max(0, examEndTs - Date.now());
    const min = Math.floor(remaining / 60000);
    const sec = Math.floor((remaining % 60000) / 1000);
    const el = document.getElementById('exam-timer');
    el.textContent = String(min).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
    el.classList.toggle('urgent', remaining > 0 && remaining < 60000);
    if (remaining === 0) {
      stopExamTimer();
      finishSession();
    }
  }

  function stopExamTimer() {
    if (examTimerId) { clearInterval(examTimerId); examTimerId = null; }
    examEndTs = null;
    const el = document.getElementById('exam-timer');
    if (el) el.classList.add('hidden');
  }

  function renderExamResult() {
    const total = session.correct + session.wrong;
    const pct = total > 0 ? Math.round((session.correct / total) * 100) : 0;

    let grade, gradeClass, msg;
    if (pct >= 92) { grade = '1'; gradeClass = 'pass'; msg = 'Sehr gut!'; }
    else if (pct >= 81) { grade = '2'; gradeClass = 'pass'; msg = 'Gut.'; }
    else if (pct >= 67) { grade = '3'; gradeClass = 'pass'; msg = 'Befriedigend.'; }
    else if (pct >= 50) { grade = '4'; gradeClass = 'pass'; msg = 'Ausreichend – knapp bestanden.'; }
    else if (pct >= 30) { grade = '5'; gradeClass = 'fail'; msg = 'Mangelhaft – wiederhole die schwachen Bereiche.'; }
    else { grade = '6'; gradeClass = 'fail'; msg = 'Ungenügend – mehr Übung nötig.'; }

    const gradeEl = document.getElementById('exam-grade');
    gradeEl.textContent = grade;
    gradeEl.className = 'exam-grade ' + gradeClass;

    document.getElementById('exam-subtitle').textContent =
      msg + ' Du hattest ' + session.correct + ' von ' + total + ' Fragen richtig.';
    document.getElementById('exam-correct').textContent = session.correct;
    document.getElementById('exam-wrong').textContent = session.wrong;
    document.getElementById('exam-percent').textContent = pct + '%';

    const list = document.getElementById('exam-detail-list');
    list.innerHTML = '';
    session.answers.forEach((a, i) => {
      const q = QUESTIONS.find((qq) => qq.id === a.qId);
      if (!q) return;
      const row = document.createElement('div');
      row.className = 'exam-detail-row ' + (a.correct ? 'ok' : 'no');
      const meta = document.createElement('div');
      meta.className = 'exam-detail-meta';
      meta.innerHTML = `<span>${i + 1}/${session.answers.length}</span>
        <span>${escapeHtml(q.category)}</span>
        <span>${a.correct ? '✓ richtig' : '✗ falsch'}</span>`;
      const qEl = document.createElement('div');
      qEl.className = 'exam-detail-q';
      qEl.textContent = q.question;
      row.appendChild(meta);
      row.appendChild(qEl);
      list.appendChild(row);
    });
  }

  // ===== BROWSE / SUCHE =====
  const browseFilter = { path: '', status: 'all', q: '' };

  function renderBrowse() {
    let list = QUESTIONS.slice();
    if (browseFilter.path) {
      list = list.filter((q) => q.path === browseFilter.path);
    }
    if (browseFilter.q) {
      const ql = browseFilter.q.toLowerCase();
      list = list.filter((q) =>
        q.question.toLowerCase().includes(ql) ||
        q.options.some((o) => String(o).toLowerCase().includes(ql)) ||
        String(q.category || '').toLowerCase().includes(ql) ||
        String(q.explain || '').toLowerCase().includes(ql)
      );
    }
    const now = Date.now();
    if (browseFilter.status === 'bookmarked') {
      list = list.filter((q) => state.cards[q.id].bookmarked);
    } else if (browseFilter.status === 'due') {
      list = list.filter((q) => isDue(state.cards[q.id], now));
    } else if (browseFilter.status === 'weak') {
      list = list.filter((q) => state.cards[q.id].box <= 2);
    }

    document.getElementById('browse-meta').textContent =
      list.length === 1 ? '1 Treffer' : `${list.length} Treffer`;

    const container = document.getElementById('browse-list');
    container.innerHTML = '';

    if (list.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'browse-empty';
      empty.textContent = 'Keine Fragen passen zu deinem Filter.';
      container.appendChild(empty);
      return;
    }

    const MAX = 200;
    list.slice(0, MAX).forEach((q) => {
      const card = state.cards[q.id];
      const btn = document.createElement('button');
      btn.className = 'browse-card';
      btn.type = 'button';
      btn.setAttribute('aria-label',
        `${q.category}: ${q.question}. Lernstand Box ${card.box}.`);
      btn.innerHTML = `
        <div class="browse-card-meta">
          <span class="browse-card-cat">${escapeHtml(q.category || '–')}</span>
          <span class="browse-card-stars">
            ${card.bookmarked ? '<span class="browse-card-bookmark">★</span>' : ''}
            <span>${renderLevel(card.box)}</span>
          </span>
        </div>
        <div class="browse-card-q">${escapeHtml(q.question)}</div>
      `;
      btn.addEventListener('click', () => startSingleCardSession(q.id));
      container.appendChild(btn);
    });
    if (list.length > MAX) {
      const more = document.createElement('div');
      more.className = 'browse-empty';
      more.textContent = `${list.length - MAX} weitere – bitte Suche verfeinern.`;
      container.appendChild(more);
    }
  }

  function startSingleCardSession(id) {
    const q = QUESTIONS.find((qq) => qq.id === id);
    if (!q) return;
    session = {
      pathKey: q.path,
      queue: [q],
      correct: 0,
      wrong: 0,
      currentIdx: 0,
      seenIds: new Set()
    };
    showQuiz();
  }

  // ===== EXAM-COUNTDOWN =====
  function renderExamCountdown() {
    const el = document.getElementById('exam-countdown');
    if (!el) return;
    const date = state.profile && state.profile.examDate;
    if (!date) {
      el.classList.add('hidden');
      el.textContent = '';
      return;
    }
    const exam = new Date(date + 'T00:00:00');
    if (isNaN(exam.getTime())) { el.classList.add('hidden'); return; }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days = Math.round((exam - today) / DAY);
    let txt;
    if (days < 0) txt = `Prüfung war vor ${-days} ${-days === 1 ? 'Tag' : 'Tagen'}`;
    else if (days === 0) txt = 'Heute ist deine Prüfung – viel Erfolg!';
    else if (days === 1) txt = 'Morgen ist deine Prüfung – viel Erfolg!';
    else txt = `Noch ${days} Tage bis zur Prüfung`;
    el.textContent = txt;
    el.classList.remove('hidden');
    el.classList.toggle('urgent', days >= 0 && days <= 14);
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

    // Bookmark-Button für aktuelle Karte
    const bmBtn = document.getElementById('bookmark-btn');
    const bmIcon = document.getElementById('bookmark-icon');
    const isBookmarked = !!card.bookmarked;
    bmBtn.setAttribute('aria-pressed', String(isBookmarked));
    bmBtn.setAttribute('aria-label', isBookmarked ? 'Markierung entfernen' : 'Karte merken');
    bmIcon.textContent = isBookmarked ? '★' : '☆';
    bmBtn.onclick = () => {
      toggleBookmark(q.id);
      const now = !!state.cards[q.id].bookmarked;
      bmBtn.setAttribute('aria-pressed', String(now));
      bmBtn.setAttribute('aria-label', now ? 'Markierung entfernen' : 'Karte merken');
      bmIcon.textContent = now ? '★' : '☆';
    };

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

    // Im Exam-Mode: keine Lernstand-Updates, kein Feedback, direkt weiter
    if (session.mode === 'exam') {
      session.answers.push({ qId: q.id, chosenSet: [...chosenSet], correct });
      if (correct) session.correct++; else session.wrong++;
      // Nicht in queue zurück (Exam-Modus zeigt jede Frage genau 1x)
      session.currentIdx++;
      showQuiz();
      return;
    }

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
    const fbSource = document.getElementById('feedback-source');
    if (q.source) {
      fbSource.textContent = 'Quelle: ' + q.source;
      fbSource.classList.remove('hidden');
    } else {
      fbSource.textContent = '';
      fbSource.classList.add('hidden');
    }
    fb.classList.remove('hidden');

    document.getElementById('next-btn').onclick = nextQuestion;

    saveState();
  }

  function nextQuestion() {
    session.currentIdx++;
    showQuiz();
  }

  function finishSession() {
    stopExamTimer();

    const now = new Date();
    const today = now.toDateString();
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

    // Aktivitäts-Heatmap pro Tag
    if (!state.sessionDays) state.sessionDays = {};
    const dayKey = now.toISOString().slice(0, 10);
    state.sessionDays[dayKey] = (state.sessionDays[dayKey] || 0) + 1;
    // Alte Einträge > 90 Tage aufräumen (Storage klein halten)
    const cutoff = Date.now() - 90 * DAY;
    Object.keys(state.sessionDays).forEach((k) => {
      if (new Date(k + 'T00:00:00').getTime() < cutoff) delete state.sessionDays[k];
    });

    saveState();

    if (session && session.mode === 'exam') {
      showScreen('exam-result');
      renderExamResult();
      return;
    }

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
    renderExamCountdown();

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

    // Heatmap-HTML vorbereiten (letzte 30 Tage)
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const days = state.sessionDays || {};
    const counts = Object.values(days).filter((v) => v > 0);
    const maxCount = counts.length ? Math.max(...counts) : 1;
    let heatCells = '';
    for (let i = 29; i >= 0; i--) {
      const d = new Date(today.getTime() - i * DAY);
      const key = d.toISOString().slice(0, 10);
      const c = days[key] || 0;
      const level = c === 0 ? 0 : Math.min(4, Math.ceil(4 * c / maxCount));
      const label = d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' }) +
                    ': ' + (c === 0 ? 'keine Session' : c + ' Session' + (c === 1 ? '' : 's'));
      heatCells += `<div class="heat-cell level-${level}" title="${label}" aria-label="${label}"></div>`;
    }
    const activeDaysLast30 = Object.keys(days).filter((k) => {
      const t = new Date(k + 'T00:00:00').getTime();
      return t >= today.getTime() - 29 * DAY;
    }).length;

    let html = `
      <div class="stats-section">
        <h3>Aktivität · letzte 30 Tage</h3>
        <p class="stats-hint">${activeDaysLast30} aktive Tage. Heller = mehr Sessions an dem Tag.</p>
        <div class="heatmap">${heatCells}</div>
        <div class="heatmap-legend" aria-hidden="true">
          <span>weniger</span>
          <span class="heat-cell level-0"></span>
          <span class="heat-cell level-1"></span>
          <span class="heat-cell level-2"></span>
          <span class="heat-cell level-3"></span>
          <span class="heat-cell level-4"></span>
          <span>mehr</span>
        </div>
      </div>
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
    document.getElementById('setting-grade').value =
      state.profile && state.profile.gradeYear ? String(state.profile.gradeYear) : '';
    document.getElementById('setting-exam-date').value =
      state.profile && state.profile.examDate ? state.profile.examDate : '';
  }

  // ===== SCREEN =====
  function showScreen(name) {
    document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
    const screen = document.querySelector(`[data-screen="${name}"]`);
    if (screen) screen.classList.add('active');
    if (name === 'home') renderHome();
    if (name === 'stats') renderStats();
    if (name === 'settings') renderSettings();
    if (name === 'browse') renderBrowse();
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
            stopExamTimer();
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

    document.getElementById('setting-grade').addEventListener('change', (e) => {
      const v = e.target.value;
      state.profile.gradeYear = v ? parseInt(v, 10) : null;
      saveState();
    });

    document.getElementById('setting-exam-date').addEventListener('change', (e) => {
      state.profile.examDate = e.target.value || null;
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

    document.getElementById('export-progress').addEventListener('click', exportState);

    document.getElementById('import-progress').addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) importState(file);
      e.target.value = '';
    });

    // Erst-Start-Wizard
    document.getElementById('visit-next-1').addEventListener('click', () => showVisitStep(2));
    document.querySelectorAll('.grade-option').forEach((b) => {
      b.addEventListener('click', () => {
        const g = parseInt(b.dataset.grade, 10);
        if (g > 0) state.profile.gradeYear = g;
        saveState();
        showVisitStep(3);
      });
    });
    document.getElementById('visit-skip-date').addEventListener('click', dismissFirstVisit);
    document.getElementById('visit-finish').addEventListener('click', () => {
      const v = document.getElementById('exam-date-input').value;
      if (v) state.profile.examDate = v;
      saveState();
      dismissFirstVisit();
    });

    // Browse-Screen
    document.querySelectorAll('[data-filter-path]').forEach((b) => {
      b.addEventListener('click', () => {
        document.querySelectorAll('[data-filter-path]').forEach((c) => c.classList.remove('active'));
        b.classList.add('active');
        browseFilter.path = b.dataset.filterPath;
        renderBrowse();
      });
    });
    document.querySelectorAll('[data-filter-status]').forEach((b) => {
      b.addEventListener('click', () => {
        document.querySelectorAll('[data-filter-status]').forEach((c) => c.classList.remove('active'));
        b.classList.add('active');
        browseFilter.status = b.dataset.filterStatus;
        renderBrowse();
      });
    });
    let searchDebounce;
    document.getElementById('browse-search').addEventListener('input', (e) => {
      clearTimeout(searchDebounce);
      const val = e.target.value.trim();
      searchDebounce = setTimeout(() => {
        browseFilter.q = val;
        renderBrowse();
      }, 120);
    });

    // Exam-Setup
    document.getElementById('exam-start').addEventListener('click', () => {
      const pathKey = document.getElementById('exam-path').value || null;
      const count = parseInt(document.getElementById('exam-count').value, 10) || 30;
      const timeMin = parseInt(document.getElementById('exam-time').value, 10) || 0;
      startExam({ pathKey, count, timeMin });
    });

    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (state.settings.theme === 'auto') applyTheme();
      });
    }

    // Tastatur-Shortcuts: Escape, Quiz-Antworten 1-9 / A-H, Weiter (Space/Enter), Bookmark (B)
    document.addEventListener('keydown', (e) => {
      // Im Such-/Input-Feld nichts kapern
      const t = e.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT')) {
        return;
      }
      const fv = document.getElementById('first-visit');
      const fvOpen = fv && !fv.classList.contains('hidden');
      const active = document.querySelector('.screen.active');
      const screen = active ? active.dataset.screen : null;

      // Escape: zurück, wenn nicht im Quiz, nicht im Wizard
      if (e.key === 'Escape') {
        if (fvOpen) return;
        const escapable = ['imprint', 'privacy', 'browse', 'settings',
                           'exam-setup', 'exam-result', 'stats', 'results'];
        if (escapable.includes(screen)) showScreen('home');
        return;
      }

      // Im Quiz aktiv?
      if (screen !== 'quiz' || fvOpen) return;

      const fbHidden = document.getElementById('card-feedback').classList.contains('hidden');

      // Weiter (Space / Enter) – nur wenn Feedback sichtbar
      if ((e.key === ' ' || e.key === 'Enter') && !fbHidden) {
        e.preventDefault();
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn && !nextBtn.disabled) nextBtn.click();
        return;
      }

      // Bookmark-Toggle (B oder M)
      if ((e.key === 'b' || e.key === 'B' || e.key === 'm' || e.key === 'M') && fbHidden) {
        e.preventDefault();
        const bm = document.getElementById('bookmark-btn');
        if (bm) bm.click();
        return;
      }

      // Antwort-Selektion via Ziffer (1..9) oder Buchstabe (A..H) – nur wenn Feedback noch nicht da
      if (!fbHidden) return;
      const opts = Array.from(document.querySelectorAll('.option'));
      if (opts.length === 0) return;

      let idx = -1;
      // 1..9
      if (/^[1-9]$/.test(e.key)) idx = parseInt(e.key, 10) - 1;
      // A..H (case-insensitiv)
      else if (/^[a-hA-H]$/.test(e.key)) idx = e.key.toUpperCase().charCodeAt(0) - 65;

      if (idx < 0 || idx >= opts.length) return;
      const btn = opts[idx];
      if (btn.disabled) return;
      e.preventDefault();
      btn.click();

      // Bei Multi-Choice ist nach Auswahl noch keine Auswertung – wenn ENTER danach gedrückt wird,
      // soll der Multi-Check-Button greifen.
      // (Wird beim nächsten Tastendruck-Cycle erfasst, siehe Block oben "Weiter".)
      // Ergänzung: Auch Multi-Check über Enter ermöglichen, wenn er sichtbar und enabled ist.
      const mc = document.getElementById('multi-check');
      if (mc && !mc.disabled) {
        // separat behandelt im nächsten Enter-Druck – nichts weiter tun
      }
    });

    // Enter im Multi-Mode: löst Antwort-prüfen aus, wenn vorhanden
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;
      const t = e.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT')) return;
      const active = document.querySelector('.screen.active');
      if (!active || active.dataset.screen !== 'quiz') return;
      const mc = document.getElementById('multi-check');
      if (mc && !mc.disabled) {
        e.preventDefault();
        mc.click();
      }
    });
  }

  // ===== SERVICE WORKER + UPDATE-BANNER =====
  function showUpdateBanner(reg) {
    const banner = document.getElementById('update-banner');
    if (!banner) return;
    banner.classList.remove('hidden');
    const reloadBtn = document.getElementById('update-reload');
    const dismissBtn = document.getElementById('update-dismiss');
    reloadBtn.onclick = () => {
      reloadBtn.disabled = true;
      reloadBtn.textContent = 'lädt…';
      if (reg.waiting) reg.waiting.postMessage({ type: 'SKIP_WAITING' });
    };
    dismissBtn.onclick = () => banner.classList.add('hidden');
    // Reload, sobald der neue SW die Kontrolle übernimmt
    let didReload = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (didReload) return;
      didReload = true;
      window.location.reload();
    });
  }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').then((reg) => {
        if (!reg) return;
        // Bei Page-Load nochmal explizit nach Updates checken
        reg.update().catch(() => {});
        // Wenn schon ein waiting-SW da ist (Tab-Wechsel etc.)
        if (reg.waiting && navigator.serviceWorker.controller) {
          showUpdateBanner(reg);
        }
        // Auf neue Versionen lauschen
        reg.addEventListener('updatefound', () => {
          const nw = reg.installing;
          if (!nw) return;
          nw.addEventListener('statechange', () => {
            if (nw.state === 'installed' && navigator.serviceWorker.controller) {
              showUpdateBanner(reg);
            }
          });
        });
      }).catch(() => {});
    });
  }

  // ===== URL-Action (App-Icon-Shortcuts: ?action=mix|exam|browse) =====
  function handleStartAction() {
    try {
      const params = new URLSearchParams(location.search);
      const action = params.get('action');
      if (!action) return;
      // Saubere URL ohne Action (damit Reload nicht erneut feuert)
      const clean = location.pathname + location.hash;
      history.replaceState({}, '', clean);
      if (action === 'mix') startSession(null);
      else if (action === 'exam') showScreen('exam-setup');
      else if (action === 'browse') showScreen('browse');
    } catch (e) {}
  }

  // ===== BOOT =====
  saveState();
  applyTheme();
  bind();
  showScreen('home');
  maybeShowFirstVisit();
  handleStartAction();
})();
