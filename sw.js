const CACHE_NAME = 'ebd-signature-v3';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './src/css/style.css',
    './src/js/main.js',
    './src/js/utils.js',
    './src/js/template.js',
    './manifest.json',
    'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
    'https://www.ebdgrupo.com.br/wp-content/uploads/2019/08/LOGO-EBD-correto-1024x673.png'
];

// Instalação: Salva arquivos estáticos no cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
    );
    self.skipWaiting();
});

// Ativação: Limpa caches antigos
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) return caches.delete(cache);
                })
            );
        })
    );
});

// Estratégia: Cache primeiro, depois rede
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});
const CACHE_NAME = 'ebd-signature-v3';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './src/css/style.css',
    './src/js/main.js',
    './src/js/utils.js',
    './src/js/template.js',
    './manifest.json',
    'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
    'https://www.ebdgrupo.com.br/wp-content/uploads/2019/08/LOGO-EBD-correto-1024x673.png'
];

// Instalação: Salva arquivos estáticos no cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
    );
    self.skipWaiting();
});

// Ativação: Limpa caches antigos
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) return caches.delete(cache);
                })
            );
        })
    );
});

// Estratégia: Cache primeiro, depois rede
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});