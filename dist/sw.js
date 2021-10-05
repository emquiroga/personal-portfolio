const CACHE_ELEMENTS = [
    "../dist/",
    "https://use.fontawesome.com/releases/v5.15.4/css/all.css",
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
    "https://fonts.googleapis.com/css2?family=Biryani&family=Cairo&display=swap",
    "../dist/style.css",
    "../dist/main.js"
]
const CACHE_NAME = "v1_cache_portfolio"

self.addEventListener("install", (e) => {
    e.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        cache
          .addAll(CACHE_ELEMENTS)
          .then(() => {
            self.skipWaiting();
          })
          .catch(console.log);
      })
    );
  });
  
  self.addEventListener("activate", (e) => {
    const cacheWhitelist = [CACHE_NAME];
  
    e.waitUntil(
      caches
        .keys()
        .then((cacheNames) => {
          return Promise.all(
            cacheNames.map((cacheName) => {
              return (
                cacheWhitelist.indexOf(cacheName) === -1 &&
                caches.delete(cacheName)
              );
            })
          );
        })
        .then(() => self.clients.claim())
    );
  });
  
  self.addEventListener("fetch", (e) => {
    e.respondWith(
      caches.match(e.request).then((res) => {
        if (res) {
          return res;
        }
  
        return fetch(e.request);
      })
    );
  });
  