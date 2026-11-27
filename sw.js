const CACHE = 'pdf-translator-root-v12';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll([
        './', './index.html', './manifest.webmanifest',
        './apple-touch-icon.png', './icon-192.png', './icon-512.png'
      ]))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.filter((n) => n !== CACHE && (n.startsWith('pdf-translator-root-') || n === 'pdf-image-translator-ios-v1')).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const req = event.request;

  if (req.mode === 'navigate' || new URL(req.url).pathname.endsWith('/index.html')) {
    event.respondWith(
      fetch(req).then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy));
        }
        return response;
      }).catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((response) => {
      if (response.ok && req.url.startsWith('https://cdn.jsdelivr.net')) {
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(req, copy));
      }
      return response;
    }))
  );
});
