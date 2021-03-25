const FILES_TO_CACHE = [
    "./public/index.html",
    "./Develop/public/css/style.css",
    "./Develop/public/css/bootstrap.css",
    "./Develop/models/transaction.js",
    "./Develop/public/js/index.js",
    "./Develop/public/idb.js",
    "./Develop/server.js"
]
const APP_PREFIX = 'FoodFest-'
const VERSION = 'version_01'
const CACHE_NAME = APP_PREFIX + VERSION



self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('installing cache : ' + CACHE_NAME)
            return cache.addAll(FILES_TO_CACHE)
        })
    )
})