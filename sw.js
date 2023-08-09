const cacheName = 'fsk8-calc-v1';
const assetsToCache = ['./', 'index.html', 'main.js', 'style.css'];

self.addEventListener('instal', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
