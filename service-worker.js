const CACHE_NAME = "bcahub-v2";

const urlsToCache = [
  "/BCA-PrepPro/",
  "/BCA-PrepPro/index.html",
  "/BCA-PrepPro/style.css",
  "/BCA-PrepPro/script.js",
  "/BCA-PrepPro/assets/images/logo.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});