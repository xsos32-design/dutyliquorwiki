// xwbace.js 品牌王牌卡 BRAND ACE（r254）：在兩站商品卡（與巧克力品牌檔案卡）插入可收合的「品牌王牌卡」。
// 先載小檔 bace_?m.json（商品→品牌、品牌名，約 30 KB）插入收合標題；按開才載完整內容 bace_?.json。
// 資料由 site_tools/brandace/build.py 產生；每張卡只插一次、不搬動。
(function(){
 if(window.__xwBace)return;window.__xwBace=1;
 var W=/\/dutyliquorwiki\//.test(location.pathname),SITE=W?'w':'c',B='https://xsos32-design.github.io/dutyliquorwiki/bace_'+SITE;
 var UM=B+'m.json?v='+(W?'9c7747ef':'5764ec6c'),UF=B+'.json?v='+(W?'d084ec31':'e3d64032');
 var st=document.createElement('style');st.id='xwbace-css';st.textContent=".bace{font-size:14.5px;line-height:1.7}\n.bace h4{margin:14px 0 6px;font-size:14px;color:#E8CD8A;letter-spacing:.5px;border-left:3px solid #C9A45C;padding-left:8px}\n.bace ul,.bace ol{margin:0;padding-left:20px}\n.bace li{margin:4px 0}\n.bace li b{color:#F2D89A;margin-right:6px}\n.bace .ba-or{margin:4px 0 6px;padding:10px 12px;border:1px solid rgba(201,164,92,.35);border-radius:10px;background:rgba(201,164,92,.07)}\n.bace .ba-or>b{display:inline-block;background:#C9A45C;color:#1A140A;border-radius:6px;padding:0 7px;margin-right:8px;font-size:12.5px}\n.bace .ba-h{display:block;font-weight:700;color:#F2D89A;margin:2px 0 4px}\n.bace .ba-nm{font-size:13px;opacity:.9}\n.bace .ba-1 li{list-style:none;margin-left:-20px;padding:8px 10px;border-radius:10px;background:rgba(201,164,92,.12);border:1px solid rgba(201,164,92,.4);margin-bottom:6px}\n.bace .ba-1 li b{display:block;margin:0 0 2px}\n.bace .ba-1 li span{font-size:13px;opacity:.9}\n.bace .ba-web small{opacity:.75;margin-left:4px}\n.bace .ba-n{font-size:11.5px;color:#C9A45C;text-decoration:none;margin-left:3px;white-space:nowrap}\n.bace .ba-say ol{padding:10px 12px 10px 30px;border-radius:10px;background:rgba(255,255,255,.04);border:1px dashed rgba(201,164,92,.45)}\n.bace .ba-pk{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}\n.bace .ba-pk1{display:flex;flex-direction:column;align-items:center;text-align:center;text-decoration:none;color:inherit;border:1px solid rgba(201,164,92,.3);border-radius:10px;padding:6px 4px 8px;background:rgba(255,255,255,.03)}\n.bace .ba-pk1 .l{font-size:11.5px;font-weight:700;color:#1A140A;background:#C9A45C;border-radius:999px;padding:0 8px}\n.bace .ba-pk1 img{width:72px;height:96px;object-fit:contain;margin:4px 0}\n.bace .ba-pk1 .t{font-size:12px;line-height:1.35;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n.bace .ba-pk1 .p{font-size:12px;color:#E8CD8A;margin-top:2px}\n.bace .ba-src{margin-top:12px;font-size:12.5px}\n.bace .ba-src summary{cursor:pointer;color:#C9A45C}\n.bace .ba-src a{color:#C9A45C;word-break:break-all}\n.bace .ba-ft{font-size:12px;opacity:.75;margin:10px 0 0}\n.bace .ba-ft a{color:#E8CD8A;margin-left:6px}\n.bacesec>summary i{font-style:normal;font-size:12px;letter-spacing:1px;color:#C9A45C;margin-left:8px}\n.bace .ba-aw{list-style:none;padding:0}\n.bace .ba-aw li{padding:7px 2px;border-bottom:1px solid rgba(201,164,92,.2)}\n.bace .ba-aw .y{display:inline-block;font-weight:700;color:#E8CD8A;margin-right:6px}\n.bace .ba-aw .r{display:inline-block;font-weight:700;color:#1A140A;background:#E8CD8A;border-radius:6px;padding:0 6px;margin-right:6px;font-size:12.5px}\n.bace .ba-aw small{display:block;opacity:.75;font-size:12.5px}\n.bacesec>summary h3{white-space:nowrap!important;flex:0 0 auto!important}.bacesec>summary i{flex:1 1 auto;min-width:0}\n.bace .ba-ap ul{list-style:none;padding:10px 12px;margin:0;border-radius:10px;background:rgba(159,211,184,.07);border:1px solid rgba(159,211,184,.35)}\n.bace .ba-ap li{margin:3px 0}.bace .ba-ap li b{margin-right:8px}\n.bace .ba-ap li a{color:#E8CD8A;font-size:12.5px}\n.bace .ba-lk p{margin:0;padding:10px 12px;border-radius:10px;background:rgba(232,180,154,.07);border:1px solid rgba(232,180,154,.35)}\n.bace .ba-lk p.ba-tl{margin-top:6px;padding:0;border:0;background:none}.bace .ba-tl a{color:#E8CD8A;font-size:13.5px;text-decoration:underline}\n";(document.head||document.documentElement).appendChild(st);
 function getter(u){var d=null,busy=false,q=[];return function(cb){if(d)return cb(d);q.push(cb);if(busy)return;busy=true;
  fetch(u).then(function(r){return r.json();}).then(function(j){d=j;var a=q;q=[];a.forEach(function(f){try{f(d);}catch(e){}});}).catch(function(){busy=false;q=[];});};}
 var getM=getter(UM),getF=getter(UF);
 function head(d){var s=d.querySelector(':scope>summary');return s?s.textContent.replace(/\s+/g,''):'';}
 function place(card,el){
  var body=card.querySelector(':scope>.body')||card,ref=null;
  if(!W)ref=body.querySelector(':scope>.r20brand');
  if(!ref){var ds=body.querySelectorAll(':scope>details.sec');for(var i=0;i<ds.length;i++){if(/^單品(製作)?由來/.test(head(ds[i])))ref=ds[i];}}
  if(ref){ref.parentNode.insertBefore(el,ref.nextSibling);return;}
  var tv=body.querySelector(':scope>.triv,:scope>.warn');
  if(tv)body.insertBefore(el,tv);else body.appendChild(el);
 }
 function fill(card,M){
  if(card.__bace)return;var id=card.id;if(!id)return;card.__bace=1;
  var k=M.m[id];if(!k||!M.n[k])return;
  var d=document.createElement('details');d.className='sec fold bacesec';
  d.innerHTML='<summary><h3>品牌王牌卡</h3><i>BRAND ACE・'+M.n[k].replace(/[<>&]/g,'')+'</i></summary><div class="bace"><p class="ba-ft">載入中…</p></div>';
  d.addEventListener('toggle',function(){if(!d.open||d.__f)return;d.__f=1;
   getF(function(F){var b=F.b[k];var x=d.querySelector(':scope>.bace');if(b&&x)x.outerHTML=b[1];});});
  place(card,d);
 }
 var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var c=e.target;getM(function(M){fill(c,M);});});},{rootMargin:'600px 0px'}):null;
 function scan(){var cs=document.querySelectorAll('section.card');for(var i=0;i<cs.length;i++){(function(c){if(c.__baceo)return;c.__baceo=1;if(io)io.observe(c);else getM(function(M){fill(c,M);});})(cs[i]);}}
 scan();
 var t=null;new MutationObserver(function(){if(t)return;t=setTimeout(function(){t=null;scan();},400);}).observe(document.getElementById('list')||document.body,{childList:true});
 setInterval(scan,4000);
})();
