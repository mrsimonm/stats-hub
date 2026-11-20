// Statistics Hub offline support: the app and every lecture file keep working without a connection.
// Bump V when you change this file. Content files (json, md, js, html) are fetched fresh when online,
// so new lectures show up without touching the service worker; the saved copy is used offline.
const V = "stats-hub-v6";
const SHELL = [
  "./", "./index.html", "./app.js", "./lib/lecture-lib.js", "./lib/formulas.js", "./lib/apply.js", "./lib/path.js",
  "./lib/firebase-config.js", "./lib/firebase-sync.js",
  "./courses/stats/course.json", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"
];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(V).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const r = e.request;
  if (r.method !== "GET") return;
  const u = new URL(r.url);
  const same = u.origin === location.origin;
  const fonts = u.hostname === "fonts.googleapis.com" || u.hostname === "fonts.gstatic.com";
  // KaTeX for the typed formula panel: a pinned version, so the saved copy never goes stale.
  const katex = u.hostname === "cdnjs.cloudflare.com" && u.pathname.startsWith("/ajax/libs/KaTeX/0.16.9/");
  if (!same && !fonts && !katex) return;
  const put = (res) => { if (res.ok || res.type === "opaque") { const cp = res.clone(); caches.open(V).then((c) => c.put(r, cp)); } return res; };
  // Fonts, icons, KaTeX and formula sheet pages: saved copy first (bump V when a sheet image changes).
  if (fonts || katex || /\.(png|jpg|woff2?)$/.test(u.pathname)) {
    e.respondWith(caches.match(r).then((m) => m || fetch(r).then(put)));
    return;
  }
  // Everything else on this site: newest when online, saved copy when offline.
  e.respondWith(fetch(r, { cache: "no-cache" }).then(put).catch(() => caches.match(r).then((m) => m || (r.mode === "navigate" ? caches.match("./index.html") : Response.error()))));
});
