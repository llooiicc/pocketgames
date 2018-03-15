var cacheName = "pocket-7-0-9";

var urlsToPrefetch = [
    '/',
    '/manifest.json',
    '/action-games.json',
    '/arcade-games.json',
    '/race-games.json',
    '/shooting-games.json',
    '/strategy-games.json',
    '/javascripts/gameLuncher.js',
    '/javascripts/gamesInjector.js',
    '/javascripts/newsInjector.js',
    '/javascripts/newsLetterController.js',
    '/images/app/offline.png',
    '/images/app/pacman_1_.ico'
];

self.addEventListener('install', function(event) {

    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(urlsToPrefetch);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});



self.addEventListener('fetch', function(event) {
    if(event.request.method != 'POST') {
        console.log('[sw][fetch] : ' + event.request.url);
        event.respondWith(
            caches.open(cacheName).then(function (cache) {
                return cache.match(event.request).then(function (response) {
                    return response || fetch(event.request).then(function (response) {
                        cache.put(event.request, response.clone());
                        return response;
                    });
                });
            })
        );
    }
});

