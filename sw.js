/* r56：頁面先開手機存好的版本、背景只在有變時更新；圖片字型快取跨版本保留 */
const V = 'v2026-10-13-3ef072869d-r111';
const P = self.registration.scope + '|';
const CORE = ['./', './index.html', './img/brand/hero.webp', './icon-192.png', './kb-lazy.json?v=3ef072869d'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(P + 'core|' + V).then(c => c.addAll(CORE.map(x => new Request(x, {cache: 'reload'})))).catch(() => {}).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith(P) && k !== P + 'rt' && !k.endsWith(V)).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
const LAST = new Map();
function notify(){ self.clients.matchAll({type:'window'}).then(cs => cs.forEach(c => c.postMessage({t:'r20-new'}))); }
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  const scope = new URL(self.registration.scope);
  if (r.mode === 'navigate') {
    const key = u.origin + u.pathname + (u.pathname.endsWith('/') ? 'index.html' : '');
    e.respondWith(caches.open(P + 'core|' + V).then(c => c.match(key).then(m => {
      const recent = m && LAST.has(key) && (Date.now() - LAST.get(key) < 300000);
      if (m && recent) return m.clone();
      LAST.set(key, Date.now());
      const net = fetch(new Request(u.origin + u.pathname + u.search, {cache: 'no-cache', credentials: 'same-origin'})).then(res => {
        if (res.ok && res.type === 'basic') {
          const keep = res.clone();
          if (m) {
            const e1 = m.headers.get('etag'), e2 = res.headers.get('etag');
            if (e1 && e2 && e1 === e2) return res;
            const old = m.clone();
            Promise.all([old.text(), res.clone().text()]).then(([a, b]) => { c.put(key, keep).then(() => { if (a !== b) notify(); }); }).catch(() => {});
          } else c.put(key, keep);
        }
        return res;
      });
      if (m) { e.waitUntil(net.catch(() => {})); return m.clone(); }
      return net.catch(() => caches.match('./index.html').then(x => x || caches.match('./')));
    })));
    return;
  }
  const same = u.origin === scope.origin;
  const font = /(^|\.)fonts\.(googleapis|gstatic)\.com$/.test(u.hostname);
  if (!same && !font) return;
  e.respondWith(caches.open(P + 'rt').then(c => c.match(r).then(m => {
    const f = fetch(r).then(res => { if (res.ok && res.type !== 'opaque') c.put(r, res.clone()); return res; }).catch(() => m);
    if (m) { e.waitUntil(f.catch(() => {})); return m; }
    return f;
  })));
});
