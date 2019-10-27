// sw.js
const cacheName = "PWAv1";
const filesToCache = ['index.html' , 'worker_transit.js' , 'worker_punts.js' , 'worker_colisions.js' , 'background_Montserrat.gif' , 'background_Sahara.gif' , 'background_Fujiyama.gif' , 'background_Egipt.gif' , 'background_China.gif' , 'car.png', 'car1.png', 'car2.png', 'car3.png', 'car4.png', 'car5.png', 'car6.png', 'car7.png', 'car8.png', 'car9.png', 'car10.png', 'car11.png', 'car12.png', 'car13.png', '14.png', 'car15.png', 'car16.png' , 'favicon.png', 'favicon40.png', 'favicon192.png', 'favicon512.png', 'manifest.manifest'];

self.addEventListener("install", function(event) {
  // Perform install steps
  console.log("[Servicework] Install");
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", function(event) {
  console.log("[Servicework] Activate");
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log("[ServiceWorker] Removing old cache shell", key);
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log("[ServiceWorker] Fetch");
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        let responseClone = response.clone();
        caches.open(cacheName).then(function(cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      });
    }).catch(function() {
      return caches.match(filesToCache);
    })
  );
});


