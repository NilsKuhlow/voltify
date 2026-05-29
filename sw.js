// Voltify Service Worker
// Cache-Strategie:
// - App-Shell (HTML/CSS/JS/Icons/manifest, data.js): cache-first im Pre-Cache.
// - data.js zusätzlich: stale-while-revalidate (Inhalts-Updates ohne CACHE-Bump).
// - Cross-Origin (z.B. Schriften, CDN): pass-through.

const CACHE = 'voltify-v8';

const APP_SHELL = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data.js',
  './manifest.json',
  './icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-180.png',
  './icons/apple-touch-152.png',
  './icons/apple-touch-167.png',
  './fonts/crimson-pro-400.woff2',
  './fonts/crimson-pro-600.woff2',
  './fonts/crimson-pro-italic.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((c) =>
      // .add() einzeln, damit ein fehlender Font nicht den ganzen Install kippt
      Promise.all(APP_SHELL.map((u) => c.add(u).catch(() => null)))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

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
  if (url.origin !== self.location.origin) return;

  if (url.pathname.endsWith('/data.js')) {
    event.respondWith(staleWhileRevalidate(req));
    return;
  }

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
  return cached || network;
}
