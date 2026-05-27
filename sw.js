// Voltify Service Worker
// Cache-Strategie:
// - App-Shell (HTML/CSS/JS/Icons/manifest): cache-first (Performance + Offline)
// - data.js: stale-while-revalidate (Inhalts-Updates ohne Cache-Bump nötig)
// - Cross-Origin (z.B. Schriften, CDN): kein Caching, network-first

const CACHE = 'voltify-v7';

const APP_SHELL = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-180.png',
  './icons/apple-touch-152.png',
  './icons/apple-touch-167.png'
  // data.js wird beim ersten fetch in den Cache geschrieben (stale-while-revalidate)
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(APP_SHELL))
  );
  // Sofort aktivieren – Updates greifen schneller
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Erlaubt der Seite, ein skipWaiting auszulösen ("Update verfügbar – jetzt laden")
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  let url;
  try { url = new URL(req.url); } catch (e) { return; }

  // Cross-Origin (z. B. externe Bilder): pass-through
  if (url.origin !== self.location.origin) return;

  // Frage-Inhalte: stale-while-revalidate
  if (url.pathname.endsWith('/data.js')) {
    event.respondWith(staleWhileRevalidate(req));
    return;
  }

  // App-Shell und Icons: cache-first
  event.respondWith(cacheFirst(req));
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const resp = await fetch(request);
    if (resp && resp.ok && resp.type === 'basic') {
      const copy = resp.clone();
      caches.open(CACHE).then((c) => c.put(request, copy));
    }
    return resp;
  } catch (e) {
    return cached || Response.error();
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then((resp) => {
      if (resp && resp.ok && resp.type === 'basic') {
        cache.put(request, resp.clone());
      }
      return resp;
    })
    .catch(() => cached);
  // Sofort cached zurück, falls vorhanden – parallel updaten
  return cached || network;
}
