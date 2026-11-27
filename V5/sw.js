const CACHE = 'pdf-image-translator-ios-v10';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll([
        './', './index.html', './manifest.webmanifest',
        './apple-touch-icon-v5.png', './icon-192-v5.png', './icon-512-v5.png'
      ]))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.filter((n) => n !== CACHE).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const req = event.request;

  // Navegación y HTML: network-first, para que los arreglos se vean sin limpiar caché.
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

  // Resto de archivos: cache-first (CDN, iconos, etc.).
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
