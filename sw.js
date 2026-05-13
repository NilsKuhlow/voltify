const CACHE = 'voltify-v3';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data.js',
  './manifest.json',
  './icon.svg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then((cached) => {
      return (
        cached ||
        fetch(e.request)
          .then((resp) => {
            if (resp && resp.ok && resp.type === 'basic') {
              const copy = resp.clone();
              caches.open(CACHE).then((c) => c.put(e.request, copy));
            }
            return resp;
          })
          .catch(() => cached)
      );
    })
  );
});
