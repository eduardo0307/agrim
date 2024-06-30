const CACHE_NAME = 'AgroConexão-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/scripts.js',
    '/images/banner.jpg',
    '/manifest.json',
    '/service-worker.js'
];

self.addEventListener('install', event => {
    event.waiUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.responWith(
        caches.match(event.request)
        .then(response => {
            return response || fetch(event.request);
        })
    );
});