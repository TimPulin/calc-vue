/* eslint-disable  */
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
workbox.core.setCacheNameDetails({ prefix: 'pwa-test' });

precacheAndRoute(self.__WB_MANIFEST);

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
      .catch(() => {
        return caches.match('/offline/');
      })
  );
});
