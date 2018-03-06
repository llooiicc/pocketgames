// ==========================  SERVICE WORKER ================================== //

var cacheVersion = 'cache_V_1-0-0';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheVersion).then(function(cache) {
            return cache.addAll([
                '/',
                '/images/Egypt-Stone-War/egypt.Thumb.png',
                '/games.ejs'
            ]);
        }).catch(function (reason) {
            console.log(reason);
        })
    );
});