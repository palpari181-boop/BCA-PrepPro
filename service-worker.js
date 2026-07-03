const CACHE_NAME = "bcahub-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./notes.html",
  "./videos.html",
  "./courses.html",
  "./roadmap.html",
  "./profile.html",
  "./assets/images/logo.png"
];

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)

      .then(cache => cache.addAll(urlsToCache))

  );

});

self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)

      .then(response => response || fetch(event.request))

  );

});