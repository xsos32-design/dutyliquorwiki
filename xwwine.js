// r250 葡萄酒・香檳 銷售包 WINE KIT：在酒類商品卡「一句話定位」後插入分頁區塊（介紹／話術／客人常問／搭餐侍酒／推薦）
// 資料 winekit.json（build.py 產生）；IDS 由 build.py 嵌入。不搬動其他注入區塊、自己只插一次，避免互搬閃爍。
(function(){
 if(window.__xwWine)return;window.__xwWine=1;
 if(!/\/dutyliquorwiki\/(index\.html)?$/.test(location.pathname))return;
 var IDS=["armanddebrignac-075l", "armanddebrignac-075l-2", "armanddebrignac-075l-3", "armanddebrignac-bdn-2015", "armanddebrignac-bdn-no4", "armanddebrignac-bdn-no5", "armanddebrignac-demisec", "armanddebrignac-green", "bottega", "bottega-gold-prosecco-brut-3l", "bottega-petalo-manzoni-moscato-rose", "dom-p-dom-075l", "domperignon-2008y-dom", "inniskillin-075l", "inniskillin-075l-2", "inniskillin-vidal-sparkling", "krug-rose", "lgd-rose-2015", "moet", "moet-075l", "moet-075l-2", "moet-ice-075l", "penfolds-champagne-cuvee-brut-nv", "pj-belle-epoque-rose-2012", "pj-blason-rose", "ruinart-bdb", "ruinart-rose", "vcp-lgd-2015", "vcp-lgd-2018", "veuve-clicquot-vcp-075l", "veuveclicquot-075l", "veuveclicquot-075l-2"],V='f0e2f8e0',D=null,Q=[],busy=0;
 var BASE='https://xsos32-design.github.io/dutyliquorwiki/';
 function E(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
 function load(cb){if(D)return cb();Q.push(cb);if(busy)return;busy=1;fetch(BASE+'winekit.json?v='+V).then(function(r){return r.json();}).then(function(j){D=j;Q.splice(0).forEach(function(f){try{f();}catch(e){}});}).catch(function(){busy=0;});}
 var st=document.createElement('style');st.id='xwwine-css';
 st.textContent='.wksec{margin:14px 0;border:1px solid rgba(201,164,92,.45);border-radius:14px;background:linear-gradient(180deg,rgba(201,164,92,.10),rgba(201,164,92,.03));overflow:hidden}'+
 '.wksec .wkhd{display:flex;align-items:center;gap:10px;padding:12px 14px 6px}.wksec .wkhd b{font-size:16px;color:#F3D9A0}.wksec .wkhd i{font-style:normal;font-size:11px;letter-spacing:.18em;color:#C9A45C}'+
 '.wksec .wkone{padding:0 14px 8px;font-size:15px;line-height:1.6;color:#F2EBDD}'+
 '.wksec .wktabs{display:flex;gap:6px;overflow-x:auto;padding:4px 12px 8px;scrollbar-width:none}.wksec .wktabs::-webkit-scrollbar{display:none}'+
 '.wksec .wktabs button{flex:0 0 auto;font:inherit;font-size:13.5px;padding:6px 12px;border-radius:999px;border:1px solid rgba(201,164,92,.4);background:transparent;color:#E8CD8A;cursor:pointer}'+
 '.wksec .wktabs button.on{background:#C9A45C;color:#1A1410;border-color:#C9A45C;font-weight:700}'+
 '.wksec .wkp{display:none;padding:2px 14px 14px;font-size:14.5px;line-height:1.75;color:#EFE6D3}.wksec .wkp.on{display:block}'+
 '.wksec .wkp h5{margin:10px 0 4px;font-size:14px;color:#E8BE6E}.wksec .wkp p{margin:0 0 8px}'+
 '.wksec dl{display:grid;grid-template-columns:max-content 1fr;gap:4px 10px;margin:6px 0}.wksec dt{color:#C9A45C;font-weight:700}.wksec dd{margin:0}'+
 '.wksec ol{margin:4px 0 8px;padding-left:20px}.wksec .wkq{margin:0 0 8px;padding:8px 10px;border-left:3px solid #C9A45C;background:rgba(0,0,0,.18);border-radius:0 8px 8px 0}.wksec .wkq b{display:block;color:#FFE3B0}'+
 '.wksec .wksay{padding:8px 10px;border-radius:10px;background:rgba(0,0,0,.22);margin:0 0 8px}.wksec .wksay em{font-style:normal;font-size:12px;color:#C9A45C;display:block}'+
 '.wksec .wkalt{display:flex;gap:8px;overflow-x:auto;padding:4px 0}.wksec .wkalt a{flex:0 0 120px;text-decoration:none;color:#EFE6D3;font-size:12.5px;line-height:1.4}.wksec .wkalt img{width:120px;height:120px;object-fit:contain;background:rgba(255,255,255,.04);border-radius:10px;display:block;margin-bottom:4px}.wksec .wkalt i{font-style:normal;color:#C9A45C;display:block}'+
 '.wksec .wksrc{font-size:12px;color:#A99B80;margin-top:6px}.wksec .wkmore{display:inline-block;margin-top:6px;color:#E8CD8A;font-size:13.5px}'+
 'html[data-xwmode=light] .wksec{background:linear-gradient(180deg,#FBF3E2,#FFFDF8);border-color:#C9A45C}html[data-xwmode=light] .wksec .wkhd b{color:#6B4A12}html[data-xwmode=light] .wksec .wkone,html[data-xwmode=light] .wksec .wkp{color:#2A2118}html[data-xwmode=light] .wksec .wkp h5,html[data-xwmode=light] .wksec dt,html[data-xwmode=light] .wksec .wkalt i{color:#8A6420}html[data-xwmode=light] .wksec .wktabs button{color:#7A5714}html[data-xwmode=light] .wksec .wktabs button.on{color:#1A1410}html[data-xwmode=light] .wksec .wkq,html[data-xwmode=light] .wksec .wksay{background:rgba(201,164,92,.10)}html[data-xwmode=light] .wksec .wkq b{color:#6B4A12}html[data-xwmode=light] .wksec .wkalt a{color:#2A2118}';
 document.head.appendChild(st);
 var TAB=[['in','介紹'],['talk','話術'],['faq','客人常問'],['serve','搭餐・侍酒'],['alt','推薦']];
 function render(id){
  var w=D.w[id];if(!w)return'';var b=D.br[w.brand]||{};
  var h='<div class="wkhd"><i>WINE KIT</i><b>銷售包</b></div><p class="wkone">'+E(w.one)+'</p><div class="wktabs" role="tablist">';
  TAB.forEach(function(t,i){h+='<button type="button" data-t="'+t[0]+'"'+(i?'':' class="on"')+'>'+t[1]+'</button>';});
  h+='</div>';
  h+='<div class="wkp on" data-p="in"><h5>這支酒</h5><p>'+E(w.bg)+'</p>';
  if(w.facts&&w.facts.length){h+='<dl>';w.facts.forEach(function(f){h+='<dt>'+E(f[0])+'</dt><dd>'+E(f[1])+'</dd>';});h+='</dl>';}
  if(b.bg)h+='<h5>酒莊背景・'+E(b.name)+'</h5><p>'+E(b.bg)+'</p>';
  if(w.how)h+='<h5>怎麼介紹（三步）</h5><ol>'+w.how.map(function(x){return'<li>'+E(x)+'</li>';}).join('')+'</ol>';
  h+='</div>';
  var t=w.talk||{};h+='<div class="wkp" data-p="talk">';
  [['open','開場'],['pitch','主推'],['close','成交']].forEach(function(x){if(t[x[0]])h+='<div class="wksay"><em>'+x[1]+'</em>'+E(t[x[0]])+'</div>';});
  if(b.line)h+='<p><b>品牌一句話：</b>'+E(b.line)+'</p>';
  h+='</div><div class="wkp" data-p="faq">'+(w.faq||[]).map(function(q){return'<div class="wkq"><b>'+E(q[0])+'</b>'+E(q[1])+'</div>';}).join('')+'</div>';
  h+='<div class="wkp" data-p="serve"><h5>搭餐</h5><p>'+E(w.food)+(w.foodSrc?'<br><small>（'+E(w.foodSrc)+'）</small>':'')+'</p><h5>侍酒</h5><p>'+E(w.serve)+'</p></div>';
  h+='<div class="wkp" data-p="alt"><div class="wkalt">'+(w.alt||[]).map(function(a){var o=D.th[a[0]]||{};return'<a href="#'+E(a[0])+'" data-go="'+E(a[0])+'"><img src="img/kbw/'+E(a[0])+'.webp" alt="" loading="lazy">'+E(o.n||a[0])+'<i>'+E(a[1])+'</i></a>';}).join('')+'</div>';
  h+='<a class="wkmore" href="'+(w.kb||'#kb:wspk')+'">看知識庫完整章節 ›</a> ・ <a class="wkmore" href="winekit.html">葡萄酒香檳速成 ›</a></div>';
  if(w.src)h+='<p class="wksrc" style="padding:0 14px 12px">資料來源：'+E(w.src.join('、'))+'</p>';
  return h;
 }
 function put(card){
  var id=card.id;if(card.__wk||IDS.indexOf(id)<0)return;card.__wk=1;
  load(function(){var body=card.querySelector(':scope > .body');if(!body||body.querySelector(':scope > .wksec'))return;
   var d=document.createElement('div');d.className='sec wksec';d.setAttribute('data-xwns','1');d.innerHTML=render(id);
   var first=body.querySelector(':scope > div.sec:not(.bzsec):not(.mmsec):not(.wksec)'),at=first?first.nextElementSibling:body.firstElementChild;
   while(at&&/\b(bzsec|mmsec)\b/.test(at.className||''))at=at.nextElementSibling;
   body.insertBefore(d,at||null);
   d.addEventListener('click',function(e){var b=e.target.closest('.wktabs button');if(!b)return;var k=b.getAttribute('data-t');
    [].forEach.call(d.querySelectorAll('.wktabs button'),function(x){x.classList.toggle('on',x===b);});
    [].forEach.call(d.querySelectorAll('.wkp'),function(x){x.classList.toggle('on',x.getAttribute('data-p')===k);});});
  });
 }
 var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){io.unobserve(en.target);put(en.target);}});},{rootMargin:'800px 0px'}):null;
 function scan(){[].forEach.call(document.querySelectorAll('#list section.card[id]'),function(c){if(c.__wkq||IDS.indexOf(c.id)<0)return;c.__wkq=1;if(io)io.observe(c);else put(c);});}
 var pend=0;function later(){if(pend)return;pend=1;setTimeout(function(){pend=0;scan();},400);}
 function go(){scan();var L=document.getElementById('list');if(L)new MutationObserver(later).observe(L,{childList:true});}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();
