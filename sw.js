// Minimal app-shell service worker for Stock Scanner Pro.
// Scope: caches ONLY this app's own static shell (index.html, manifest,
// icons) so the app can still open when offline. It deliberately does NOT
// intercept or cache any network calls to Yahoo/Stooq/Finnhub/Twelve
// Data/FMP/Polygon/Alpha Vantage/Tiingo/EODHD/CORS proxies — those must
// always go to the network for live data; caching them would silently
// serve stale prices/scores.
const CACHE_NAME = 'scanner-pro-shell-v1';
const SHELL_FILES = ['./index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(SHELL_FILES))
      .catch((e) => console.warn('SW install: shell cache failed (non-fatal):', e.message))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  // Only handle same-origin GET requests for the shell files themselves.
  // Everything else (all live API/proxy traffic, which is cross-origin
  // anyway) passes straight through to the network untouched.
  const isShellRequest = url.origin === self.location.origin &&
    event.request.method === 'GET' &&
    SHELL_FILES.some((f) => url.pathname.endsWith(f.replace('./', '/')) || url.pathname === '/' );
  if (!isShellRequest) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetch(event.request)
        .then((res) => {
          if (res && res.ok) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return res;
        })
        .catch(() => cached); // offline — fall back to cache
      return cached || networkFetch;
    })
  );
});
