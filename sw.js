/* 頁面：先用手機裡存好的版本秒開，同時在背景下載新版；新版不同時通知頁面顯示「有新版內容」（r20）。圖片字型：快取優先、背景更新 */
const V = 'v2026-10-13-3ef072869d-r38';
const P = self.registration.scope + '|';
const CORE = ['./', './index.html', './img/brand/hero.webp', './icon-192.png', './kb-lazy.json?v=3ef072869d'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(P + 'core|' + V).then(c => c.addAll(CORE.map(x => new Request(x, {cache: 'reload'})))).catch(() => {}).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith(P) && !k.endsWith(V)).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
function notify(){ self.clients.matchAll({type:'window'}).then(cs => cs.forEach(c => c.postMessage({t:'r20-new'}))); }
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  const scope = new URL(self.registration.scope);
  if (r.mode === 'navigate') {
    const key = u.origin + u.pathname + (u.pathname.endsWith('/') ? 'index.html' : '');
    e.respondWith(caches.open(P + 'core|' + V).then(c => c.match(key).then(m => {
      const net = fetch(new Request(u.origin + u.pathname + u.search, {cache: 'no-store', credentials: 'same-origin'})).then(res => {
        if (res.ok && res.type === 'basic') {
          const keep = res.clone();
          if (m) {
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
  e.respondWith(caches.open(P + 'rt|' + V).then(c => c.match(r).then(m => {
    const f = fetch(r).then(res => { if (res.ok && res.type !== 'opaque') c.put(r, res.clone()); return res; }).catch(() => m);
    return m || f;
  })));
});
