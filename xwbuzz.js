/* r242 可收合：預設只列標題（小圖＋標題），點一下展開全文，記住選擇 xw_bz_open。r237 商品卡「近期話題 BUZZ」（r239 加有名在哪、怎麼帶到本店推薦；r238 加國內／國外、人物、話題圖、連到 buzz.html）：資料 buzz.json（site_tools/buzz/buzz.py 產生），超過一年的話題這裡也會自動不顯示 */
(function(){
 if(window.__xwBuzz) return; window.__xwBuzz=1;
 function go(){
  var L=document.getElementById('list'); if(!L) return;
  var base=(document.currentScript&&document.currentScript.src)||'https://xsos32-design.github.io/dutyliquorwiki/xwbuzz.js';
  base=base.replace(/xwbuzz\.js.*$/,'');
  fetch(base+'buzz.json?v='+(window.__xwBuzzV||'')).then(function(r){return r.json();}).then(function(B){
   var now=Date.now(), M={};
   (B.items||[]).forEach(function(it){var t=Date.parse(it.d);if(!t||now-t>365*864e5)return;(it.ids||[]).forEach(function(id){(M[id]=M[id]||[]).push(it);});});
   function esc(s){return String(s||'').replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
   function ago(d){var m=Math.round((now-Date.parse(d))/(30.4*864e5));return m<1?'本月':m+' 個月前';}
   function card(c){
    if(!c||!c.id||!M[c.id])return; var body=c.querySelector(':scope > .body'); if(!body)return;
    if(c.__bz){var ex=body.querySelector(':scope > .bzsec'),f0=body.querySelector(':scope > div.sec:not(.bzsec)');if(ex&&f0&&ex.previousElementSibling!==f0)body.insertBefore(ex,f0.nextSibling);return;}
    c.__bz=1;
    var its=M[c.id].slice().sort(function(a,b){return a.d<b.d?1:-1;});
    var h='<button type="button" class="bzhd" aria-expanded="false"><span class="bzt">近期話題</span><span class="bze">BUZZ</span><span class="bzn">'+its.length+' 則・一年內</span><span class="bztg"></span></button>';
    its.forEach(function(it){
     h+='<div class="bzit">'+(it.img?'<a class="bzimg" href="'+base+'buzz.html#bz-'+esc(it.id)+'"><img src="'+base+esc(it.img)+'" alt="" loading="lazy" onerror="this.parentNode.remove()"></a>':'')+'<div class="bzm"><span class="bzk">'+esc(it.k)+'</span><span class="bzr'+(it.region==='國外'?' f':'')+'">'+esc(it.region||'國內')+'</span>'+(it.who?'<span class="bzw">'+esc(it.who)+'</span>':'')+'<span class="bzd">'+esc(it.d.replace(/-/g,'/'))+'・'+ago(it.d)+'</span></div>'+
      '<b class="bzti">'+esc(it.t)+'</b><p>'+esc(it.body)+'</p>'+(it.fame?'<p class="bzfame"><span>有名在哪</span>'+esc(it.fame)+'</p>':'')+
      (it.note?'<p class="bznote">本店：'+esc(it.note)+'</p>':'')+
      (it.say?'<p class="bzsay"><span>跟客人這樣說</span>'+esc(it.say)+'</p>':'')+(it.pitch?'<p class="bzpitch"><span>怎麼帶到本店推薦</span>'+esc(it.pitch)+'</p>':'')+
      '<div class="bzft">'+(it.u?'<a class="bzsrc" href="'+esc(it.u)+'" target="_blank" rel="noopener">來源：'+esc(it.src||'新聞')+' ›</a>':'')+'<a class="bzsrc bzall" href="'+base+'buzz.html#bz-'+esc(it.id)+'">看全部近期話題 ›</a></div></div>';
    });
    if(its.length>3)h+='<button type="button" class="bzmore">還有 '+(its.length-3)+' 則，點開看全部 ▾</button>';
    var d=document.createElement('div'); d.className='sec bzsec'+(OPEN()?'':' bzc'); d.innerHTML=h; paint(d);
    var first=body.querySelector(':scope > div.sec'); if(first&&first.nextSibling) body.insertBefore(d,first.nextSibling); else body.insertBefore(d,body.firstChild);
   }
   function OPEN(){try{return localStorage.getItem('xw_bz_open')==='1';}catch(e){return false;}}
   function paint(d){var c=d.classList.contains('bzc'),b=d.querySelector('.bztg'),hd=d.querySelector('.bzhd');if(b)b.textContent=c?'展開全文 ▾':'收起 ▴';if(hd)hd.setAttribute('aria-expanded',c?'false':'true');}
   document.addEventListener('click',function(e){var d=e.target.closest&&e.target.closest('.bzsec');if(!d)return;
    var hd=e.target.closest('.bzhd,.bzmore'),it=e.target.closest('.bzit');
    if(hd){e.preventDefault();var y=d.getBoundingClientRect().top;d.classList.toggle('bzc');paint(d);try{localStorage.setItem('xw_bz_open',d.classList.contains('bzc')?'0':'1');}catch(x){}
     var dy=d.getBoundingClientRect().top-y;if(Math.abs(dy)>2)window.scrollBy(0,dy);return;}
    if(it&&d.classList.contains('bzc')){e.preventDefault();d.classList.remove('bzc');paint(d);try{localStorage.setItem('xw_bz_open','1');}catch(x){}
     var r=it.getBoundingClientRect();if(r.top<70||r.top>innerHeight*0.6)window.scrollBy(0,r.top-120);}},true);
   var st=document.createElement('style'); st.id='xwbuzz-css';
   st.textContent='.bzsec{border:1px solid rgba(232,140,60,.45)!important;border-radius:14px;padding:12px 14px!important;margin:10px 0!important;background:linear-gradient(160deg,rgba(232,140,60,.10),rgba(232,140,60,.02))}'+
    '.bzhd{display:flex;align-items:baseline;gap:8px;margin-bottom:6px}.bzt{font-weight:800;font-size:17px;color:#F2A65A}.bze{font-size:11px;letter-spacing:3px;color:#C9884A}.bzn{margin-left:auto;font-size:12px;color:#BDB09A}'+
    '.bzit{padding:10px 0;border-top:1px dashed rgba(232,140,60,.3)}.bzit:first-of-type{border-top:0}.bzm{display:flex;gap:8px;align-items:center;margin-bottom:4px}'+
    '.bzk{font-size:12px;font-weight:800;padding:2px 9px;border-radius:999px;background:#E88C3C;color:#1A1410}.bzd{font-size:12px;color:#BDB09A}'+
    '.bzti{display:block;font-size:15.5px;line-height:1.5;color:#FFE3C2;margin:2px 0 4px}.bzit p{font-size:14px;line-height:1.7;margin:4px 0}'+
    '.bznote{color:#E8CD8A}.bzsay{background:rgba(201,164,92,.12);border-left:3px solid #C9A45C;padding:6px 10px;border-radius:0 8px 8px 0}.bzsay span{display:block;font-size:12px;font-weight:800;color:#C9A45C}'+
    '.bzsrc{font-size:12.5px;color:#C9A45C!important}'+
    '.bzimg{display:block;margin:2px 0 8px;border-radius:10px;overflow:hidden;aspect-ratio:16/9;background:#0E0C0A}.bzimg img{width:100%;height:100%;object-fit:cover;display:block}'+
    '.bzr{font-size:12px;font-weight:800;padding:2px 8px;border-radius:999px;background:#3D7A4A;color:#fff}.bzr.f{background:#2A6F97}.bzw{font-size:12px;padding:1px 8px;border-radius:999px;border:1px solid rgba(232,140,60,.55);color:#F2A65A}'+
    '.bzfame{color:#E9D7BE}.bzfame span{color:#F2A65A;font-size:12px;font-weight:800;margin-right:5px}.bzpitch{background:rgba(232,140,60,.10);border-left:3px solid #E88C3C;padding:6px 10px;border-radius:0 8px 8px 0}.bzpitch span{display:block;font-size:12px;font-weight:800;color:#F2A65A}'+
    '.bzm{flex-wrap:wrap}.bzft{display:flex;flex-wrap:wrap;gap:4px 14px}'+
    'button.bzhd{all:unset;box-sizing:border-box;display:flex;align-items:baseline;gap:8px;width:100%;margin-bottom:6px;cursor:pointer;-webkit-tap-highlight-color:transparent}'+
    '.bztg{margin-left:10px;flex:none;font-size:12.5px;font-weight:700;color:#1A1410;background:#E88C3C;border-radius:999px;padding:3px 10px;align-self:center}.bzn{margin-left:auto}'+
    '.bzc .bzit{display:grid;grid-template-columns:76px 1fr;column-gap:10px;align-items:center;padding:8px 0;cursor:pointer}'+
    '.bzc .bzimg{grid-column:1;grid-row:1/3;margin:0;aspect-ratio:4/3;border-radius:8px;pointer-events:none}'+
    '.bzc .bzm,.bzc .bzti{grid-column:2;min-width:0}.bzc .bzm{margin:0}.bzc .bzm .bzw,.bzc .bzm .bzd{display:none}'+
    '.bzc .bzti{font-size:14.5px;margin:2px 0 0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}'+
    '.bzt,.bze,.bzn{white-space:nowrap}.bzc .bzit:nth-of-type(n+4){display:none}.bzmore{display:none}.bzc .bzmore{all:unset;box-sizing:border-box;display:block;width:100%;text-align:center;margin-top:6px;padding:8px;border-radius:10px;border:1px dashed rgba(232,140,60,.5);font-size:13.5px;color:#F2A65A;cursor:pointer}'+
    '.bzc .bzit>p,.bzc .bzft{display:none!important}.bzc .bzit:not(:has(.bzimg)){grid-template-columns:1fr}.bzc .bzit:not(:has(.bzimg)) .bzm,.bzc .bzit:not(:has(.bzimg)) .bzti{grid-column:1}';
   document.head.appendChild(st);
   var ids=Object.keys(M),pend=0;function scan(){pend=0;ids.forEach(function(id){card(document.getElementById(id));});}
   scan(); new MutationObserver(function(){if(!pend){pend=1;setTimeout(scan,300);}}).observe(L,{childList:true,subtree:true});
  }).catch(function(){});
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();
