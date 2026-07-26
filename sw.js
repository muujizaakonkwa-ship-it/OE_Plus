const CACHE="obedi-v1";

const FILES=[
"./",
"./index.html",
"./style.css",
"./script.js",
"./manifest.json",
"./votre_image_hier.png",
"./icon-192.png",
"./icon-512.png"
];

self.addEventListener("install",e=>{
e.waitUntil(
caches.open(CACHE).then(cache=>cache.addAll(FILES))
);
});

self.addEventListener("fetch",e=>{
e.respondWith(
caches.match(e.request).then(r=>r||fetch(e.request))
);
});