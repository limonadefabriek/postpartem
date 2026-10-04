/* MILF in shape: offline service worker.
   Bump the version suffix whenever you ship changes, so phones pick up the new files.
   Caches are shared per origin (username.github.io), so this app only ever touches
   caches that start with its own prefix and never deletes another app's. */

const PREFIX = 'milfinshape-';
const CACHE = PREFIX + 'v4';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith(PREFIX) && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// cache first, refresh in the background
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(e.request).then(hit => {
        const net = fetch(e.request).then(res => {
          if (res && res.ok && new URL(e.request.url).origin === location.origin) cache.put(e.request, res.clone());
          return res;
        }).catch(() => hit);
        return hit || net;
      })
    )
  );
});
