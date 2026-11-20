/* r292 每則預設只顯示縮圖＋標題（沒有新聞圖用第一個商品主圖 th），點標題才展開那一則；超過 5 則先藏標題。r248 每則加「為什麼提到這款」（hit＝直接點名或同系列對應、auto／預設＝同品牌）與「被稱讚的地方」praise，點名本款的排前面；修正與 xwmemo 互搶位置造成的閃爍。r242 可收合：預設只列標題（小圖＋標題），點一下展開全文，記住選擇 xw_bz_open。r237 商品卡「近期話題 BUZZ」（r239 加有名在哪、怎麼帶到本店推薦；r238 加國內／國外、人物、話題圖、連到 buzz.html）：資料 buzz.json（site_tools/buzz/buzz.py 產生），超過兩年（r281 起）的話題這裡也會自動不顯示 */
(function(){
 if(window.__xwBuzz) return; window.__xwBuzz=1;
 function go(){
  var L=document.getElementById('list'); if(!L) return;
  var base=(document.currentScript&&document.currentScript.src)||'https://xsos32-design.github.io/dutyliquorwiki/xwbuzz.js';
  base=base.replace(/xwbuzz\.js.*$/,'');
  fetch(base+'buzz.json?v='+(window.__xwBuzzV||'')).then(function(r){return r.json();}).then(function(B){
   var now=Date.now(), M={};
   (B.items||[]).forEach(function(it){var t=Date.parse(it.d);if(!t||now-t>730*864e5)return;(it.ids||[]).forEach(function(id){(M[id]=M[id]||[]).push(it);});});
   function esc(s){return String(s||'').replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
   function ago(d){var m=Math.round((now-Date.parse(d))/(30.4*864e5));return m<1?'本月':m+' 個月前';}
   function card(c){
    if(!c||!c.id||!M[c.id])return; var body=c.querySelector(':scope > .body'); if(!body)return;
    if(c.__bz){if(body.hasAttribute('data-xtab'))return;var ex=body.querySelector(':scope > .bzsec'),f0=body.querySelector(':scope > div.sec:not(.bzsec):not(.mmsec)');if(ex&&f0&&ex.previousElementSibling!==f0&&(c.__bzm=(c.__bzm||0)+1)<=3)body.insertBefore(ex,f0.nextSibling);return;}
    c.__bz=1;
    function hit(it){return !!(it.hit&&it.hit[c.id]);}
    var its=M[c.id].slice().sort(function(a,b){var x=hit(b)-hit(a);return x||(a.d<b.d?1:-1);}),nh=its.filter(hit).length;
    var h='<div class="bzhd"><span class="bzt">近期話題</span><span class="bze">BUZZ</span><span class="bzn">'+its.length+' 則'+(nh?'・'+nh+' 則點名本款':'・兩年內')+'</span><span class="bzhint">點標題看內容</span></div>';
    its.forEach(function(it,k){
     var th=it.img||it.th, H=hit(it);
     h+='<div class="bzit'+(k>=5?' bzx':'')+'"><button type="button" class="bzrow" aria-expanded="false">'+(th?'<span class="bzth"><img src="'+base+esc(th)+'" alt="" loading="lazy" onerror="this.parentNode.classList.add(\'no\');this.remove()"></span>':'<span class="bzth no"></span>')+
      '<span class="bzrt"><span class="bzm"><span class="bzk">'+esc(it.k)+'</span>'+(H?'<span class="bzhit">點名本款</span>':'')+'<span class="bzd">'+esc(it.d.slice(0,7).replace('-','/'))+'</span></span><b class="bzti">'+esc(it.t)+'</b></span><span class="bzar">▾</span></button>'+
      '<div class="bzfull">'+(it.img?'<a class="bzimg" href="'+base+'buzz.html#bz-'+esc(it.id)+'"><img data-src="'+base+esc(it.img)+'" alt="" onerror="this.parentNode.remove()"></a>':'')+
      '<div class="bzm2"><span class="bzr'+(it.region==='國外'?' f':'')+'">'+esc(it.region||'國內')+'</span>'+(it.who?'<span class="bzw">'+esc(it.who)+'</span>':'')+'<span class="bzd">'+esc(it.d.replace(/-/g,'/'))+'・'+ago(it.d)+'</span></div>'+
      WHY(it)+'<p>'+esc(it.body)+'</p>'+(it.praise?'<p class="bzpraise"><span>被稱讚的地方</span>'+esc(it.praise)+'</p>':'')+(it.fame?'<p class="bzfame"><span>有名在哪</span>'+esc(it.fame)+'</p>':'')+
      (it.note?'<p class="bznote">本店：'+esc(it.note)+'</p>':'')+
      (it.say?'<p class="bzsay"><span>跟客人這樣說</span>'+esc(it.say)+'</p>':'')+(it.pitch?'<p class="bzpitch"><span>怎麼帶到本店推薦</span>'+esc(it.pitch)+'</p>':'')+
      '<div class="bzft">'+(it.u?'<a class="bzsrc" href="'+esc(it.u)+'" target="_blank" rel="noopener">來源：'+esc(it.src||'新聞')+' ›</a>':'')+'<a class="bzsrc bzall" href="'+base+'buzz.html#bz-'+esc(it.id)+'">看全部近期話題 ›</a></div></div></div>';
    });
    if(its.length>5)h+='<button type="button" class="bzmore">還有 '+(its.length-5)+' 則標題 ▾</button>';
    function WHY(it){var h=hit(it),t=h?it.hit[c.id]:(it.auto?it.auto+(it.subj?'（話題主角：'+it.subj+'）':''):'本款沒有被直接點名；話題主角是'+(it.subj||'同品牌其他酒款')+'，因為同品牌才列在這裡，可以借話題帶到本款。');
     return '<p class="bzwhy'+(h?' on':'')+'"><b class="bzwi"><span>'+(h?'點名本款':'同品牌話題')+'</span>'+esc(t)+'</b></p>';}
    var d=document.createElement('div'); d.className='sec bzsec bzc'; d.innerHTML=h;
    var first=body.querySelector(':scope > div.sec:not(.mmsec)'); if(first&&first.nextSibling) body.insertBefore(d,first.nextSibling); else body.insertBefore(d,body.firstChild);
   }
   document.addEventListener('click',function(e){var d=e.target.closest&&e.target.closest('.bzsec');if(!d)return;
    var mo=e.target.closest('.bzmore'),rw=e.target.closest('.bzrow');
    if(mo){e.preventDefault();d.classList.remove('bzc');mo.remove();return;}
    if(rw){e.preventDefault();var it=rw.parentNode,y=rw.getBoundingClientRect().top,o=it.classList.toggle('bzo');rw.setAttribute('aria-expanded',o?'true':'false');
     if(o){var im=it.querySelector('.bzimg img[data-src]');if(im){im.src=im.getAttribute('data-src');im.removeAttribute('data-src');}}
     var dy=rw.getBoundingClientRect().top-y;if(Math.abs(dy)>2)window.scrollBy(0,dy);}},true);
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
    '.bzhd{flex-wrap:wrap;row-gap:2px}.bzhint{flex-basis:100%;font-size:12px;color:#9C8F7A}'+
    '.bzit{padding:0}.bzrow{all:unset;box-sizing:border-box;display:flex;align-items:center;gap:10px;width:100%;padding:8px 0;cursor:pointer;-webkit-tap-highlight-color:transparent}'+
    '.bzth{flex:none;width:72px;height:54px;border-radius:8px;overflow:hidden;background:#0E0C0A}.bzth img{width:100%;height:100%;object-fit:cover;display:block}.bzth.no{background:linear-gradient(135deg,#3A2A1A,#1A1410)}'+
    '.bzrt{flex:1;min-width:0}.bzrt .bzm{margin:0 0 2px;flex-wrap:nowrap}.bzrt .bzd{white-space:nowrap}'+
    '.bzrow .bzti{font-size:14.5px;margin:0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}'+
    '.bzar{flex:none;color:#E88C3C;font-size:14px;transition:transform .2s}.bzo .bzar{transform:rotate(180deg)}'+
    '.bzhit{font-size:11.5px;font-weight:800;padding:1px 7px;border-radius:999px;background:#FFE3C2;color:#1A1410;white-space:nowrap}'+
    '.bzfull{display:none;padding:2px 0 12px}.bzo .bzfull{display:block}.bzo .bzrow .bzti{-webkit-line-clamp:unset;display:block;color:#FFE3C2}'+
    '.bzm2{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:2px 0 4px}'+
    '.bzc .bzx{display:none}.bzmore{all:unset;box-sizing:border-box;display:block;width:100%;text-align:center;margin-top:6px;padding:8px;border-radius:10px;border:1px dashed rgba(232,140,60,.5);font-size:13.5px;color:#F2A65A;cursor:pointer}'+
    '.bzwhy{font-size:14px;line-height:1.7;margin:6px 0!important;padding:7px 10px;border-radius:8px;background:rgba(255,255,255,.04);border:1px solid rgba(232,140,60,.25);color:#E9D7BE}.bzwhy span{display:inline-block;font-size:12px;font-weight:800;padding:1px 8px;border-radius:999px;margin-right:6px;background:#5A4A36;color:#F2E6D2}.bzwhy.on{background:rgba(232,140,60,.14);border-color:rgba(232,140,60,.6);color:#FFE9CF}.bzwhy.on span{background:#E88C3C;color:#1A1410}'+
    '.bzpraise{color:#E9D7BE}.bzpraise span{color:#F2A65A;font-size:12px;font-weight:800;margin-right:5px}'+
    '.bzwi{font-weight:inherit;display:block}';
   document.head.appendChild(st);
   var ids=Object.keys(M),pend=0;function scan(){pend=0;ids.forEach(function(id){card(document.getElementById(id));});}
   scan(); new MutationObserver(function(){if(!pend){pend=1;setTimeout(scan,300);}}).observe(L,{childList:true,subtree:true});
  }).catch(function(){});
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();
