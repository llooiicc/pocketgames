var cacheName = "cache_1-0-0";

var urlsToPrefetch = [
    '/',
    '/games.json',
    // '/images/Egypt-Stone-War/egypt.Thumb.png',
    // '/images/Goblin-Run/Thumbnail 270x196.png',
    // '/images/Neon-Dunk/270x196 Thumbnail.png',
    // '/images/Santa-Run/270x196 Thumbnail.png',
    // '/images/The-Office-Guy/270x196Thumbnail The office guy.png',
    '/javascripts/gameLuncher.js/',
    '/javascripts/gamesInjector.js/'
];


self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(
                [
                    '/',
                    // ---------- SCRIPTS --------- //
                    '/javascripts/gamesInjector.js',
                    '/javascripts/gameLuncher.js',
                    // ---------- GAMES DATAS ----- //
                    '/games.json',
                    // ---------- ASSETS ---------- //
                    '/images/Egypt-Stone-War/egypt.Thumb.png',
                    '/images/Goblin-Run/Thumbnail 270x196.png',
                    '/images/Neon-Dunk/270x196 Thumbnail.png',
                    '/images/Santa-Run/270x196 Thumbnail.png',
                    '/images/The-Office-Guy/270x196Thumbnail The office guy.png'
                ]
            );
        })
    );
});


self.addEventListener('fetch', function(event) {
    console.log('[sw][fetch] : ' + event.request.url);
    event.respondWith(
        caches.open(cacheName).then(function(cache) {
            return cache.match(event.request).then(function (response) {
                return response || fetch(event.request).then(function(response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});

