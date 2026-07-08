// =============================================================
//  sw.js — Service worker for offline support (index.html only)
//
//  Three caches:
//   - STATIC_CACHE: the app shell (HTML/CSS/JS + the Firebase SDK
//     chunks index.html imports), precached on install, served
//     network-first (freshness matters — see the no-store note below).
//   - PDF_CACHE: uploaded ticket/voucher PDFs, cached lazily the
//     first time each one is fetched (via the page's openPdf()
//     helper, not via direct <a target="_blank"> navigation).
//   - IMAGE_CACHE: hero/destination photos (Unsplash + local
//     assets/images/*), served cache-first since a photo never
//     changes once published — this is what stops them re-fetching
//     on every tab switch and makes them resilient to a flaky
//     connection after the first successful load.
//
//  Firestore's own data (activities/flights/accommodations/tours/
//  dayNotes/japanItems) is NOT cached here — the Firestore SDK's
//  built-in IndexedDB persistence (enabled in index.html via
//  persistentLocalCache) already handles that, and trying to
//  intercept Firestore's WebChannel traffic with the Cache API
//  would be fragile and redundant.
// =============================================================

const STATIC_CACHE = 'mi-viaje-static-v2';
const PDF_CACHE = 'mi-viaje-pdfs-v1';
const IMAGE_CACHE = 'mi-viaje-images-v1';

const PRECACHE_URLS = [
  './',
  './index.html',
  './style.css',
  './data.js',
  './firebase-config.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './assets/images/honeymoon-hero.jpg',
  './assets/images/boda-hero.jpg',
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== PDF_CACHE && key !== IMAGE_CACHE)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

function isPdfRequest(url) {
  return url.includes('firebasestorage.googleapis.com');
}

function isImageRequest(url) {
  return url.includes('images.unsplash.com') || url.includes('/assets/images/');
}

// Cache-first — once a photo has loaded successfully, it never needs the
// network again, so switching tabs back and forth or losing connection
// doesn't re-trigger a fetch or risk a broken-image icon.
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const fresh = await fetch(request);
  if (fresh && fresh.ok) cache.put(request, fresh.clone());
  return fresh;
}

// Network-first, fall back to cache — always prefer fresh data when
// online, but never show a broken page when offline.
//
// `cache: 'no-store'` on the fetch is deliberate: GitHub Pages serves
// app-shell files with `Cache-Control: max-age=600`, so a plain fetch()
// can be silently satisfied from the browser's own HTTP cache for up to
// 10 minutes — defeating "network-first" entirely and showing stale HTML/
// CSS on a device that's actually online. Forcing no-store guarantees a
// real round-trip every time, with the SW's own cache as the ONLY layer
// that persists content for offline use.
async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(new Request(request, { cache: 'no-store' }));
    if (fresh && fresh.ok) cache.put(request, fresh.clone());
    return fresh;
  } catch (err) {
    const cached = await cache.match(request);
    if (cached) return cached;
    throw err;
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  // Only intercept same-origin requests, the precached Firebase SDK
  // chunks, and Storage PDF downloads. Everything else (Firestore's
  // own WebChannel/gRPC traffic, Google Maps, TikTok, etc.) passes
  // straight through untouched.
  const url = request.url;
  const sameOrigin = url.startsWith(self.location.origin);
  const isFirebaseSdk = url.startsWith('https://www.gstatic.com/firebasejs/');

  if (isPdfRequest(url)) {
    event.respondWith(networkFirst(request, PDF_CACHE));
    return;
  }

  if (isImageRequest(url)) {
    event.respondWith(cacheFirst(request, IMAGE_CACHE));
    return;
  }

  if (sameOrigin || isFirebaseSdk) {
    event.respondWith(networkFirst(request, STATIC_CACHE));
  }
});
