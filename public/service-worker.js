const CACHE_NAME = 'pwa-hhs-cache';
const URLS_TO_CACHE = [
  '/',
  '/assets/icon-192x192.png',
  '/assets/icon-512x512.png',
  '/assets/hhs-b.avif',
  '/assets/hhs-black.avif',
  '/assets/hhs-white.avif',
  '/assets/hhs.avif',
  '/manifesto',
  '/team',
  '/events',
  '/contact',
  '/history'
];
const CACHE_LIFETIME = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

function setCacheTimestamp() {
  localStorage.setItem('cache-timestamp', Date.now());
}

function isCacheExpired() {
  const cachedTime = localStorage.getItem('cache-timestamp');
  return !cachedTime || (Date.now() - cachedTime) > CACHE_LIFETIME;
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE).then(() => {
        setCacheTimestamp();
      });
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (isCacheExpired()) {
    caches.delete(CACHE_NAME).then(() => {
      caches.open(CACHE_NAME).then((cache) => {
        cache.addAll(URLS_TO_CACHE);
        setCacheTimestamp();
      });
    });
  }

  if (event.request.mode === 'navigate' || event.request.method === 'GET') {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            setCacheTimestamp(); // Update cache timestamp
            return networkResponse;
          });
        });
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('/');
        }
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});


// Delete outdated caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
