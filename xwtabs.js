// xwtabs.js（r259）商品卡分頁：賣這支／喝起來（巧克力：口味規格）／背景故事／資料來源。
// 不搬動區塊到別的容器：每個 .body 直接子元素標 data-xt，body 標 data-xtab，用 CSS 只顯示目前分頁（注入腳本照常運作）。
// 排序由 window.__xwRank 統一（兩站 index.html 的 rank() 也會先問它），重複內容（記憶卡版 FAB、舊版品牌故事）摺進「其他說法」。
(function(){
 if(window.__xwTabs)return;window.__xwTabs=1;
 var W=/\/dutyliquorwiki\//.test(location.pathname);
 var TABS=[['sell','賣這支'],['taste',W?'喝起來':'口味規格'],['story','背景故事'],['check','資料來源']];
 var css='.xwtabs{position:sticky;top:var(--xwbarh,50px);z-index:6;display:flex;gap:6px;margin:4px -4px 10px;padding:8px 4px;background:#16130F;border-bottom:1px solid rgba(201,164,92,.35);box-shadow:0 6px 10px -8px rgba(0,0,0,.8)}'+
 '.xwtabs button{flex:1 1 0;min-width:0;font:inherit;font-size:15px;font-weight:700;padding:9px 4px;border-radius:10px;border:1px solid rgba(201,164,92,.35);background:transparent;color:#E8CD8A;cursor:pointer;white-space:nowrap;letter-spacing:.02em}'+
 '.xwtabs button.on{background:#C9A45C;color:#17120B;border-color:#C9A45C}'+
 '.xwtabs button[hidden]{display:none}'+
 '.body[data-xtab=sell]>[data-xt]:not([data-xt=sell]),.body[data-xtab=taste]>[data-xt]:not([data-xt=taste]),.body[data-xtab=story]>[data-xt]:not([data-xt=story]),.body[data-xtab=check]>[data-xt]:not([data-xt=check]){display:none!important}'+
 '.xwalt{margin:8px 0 2px;font:inherit;font-size:13.5px;color:#C9A45C;background:none;border:1px dashed rgba(201,164,92,.5);border-radius:999px;padding:5px 12px;cursor:pointer}'+
 '.mmsec:not(.xwaltopen) .mmfab{display:none}'+
 '.xwaltlbl{display:inline-block;margin-left:8px;font-size:12px;font-weight:400;color:#BBA77E;border:1px solid rgba(201,164,92,.4);border-radius:999px;padding:0 8px;vertical-align:middle}'+
 '.xwtnext{display:block;width:100%;margin:14px 0 4px;padding:10px;font:inherit;font-size:14.5px;color:#E8CD8A;background:rgba(201,164,92,.08);border:1px solid rgba(201,164,92,.35);border-radius:12px;cursor:pointer}'+
 'html[data-xwmode=light] .xwtabs{background:#FBF7EF;border-bottom-color:rgba(138,100,32,.35)}html[data-xwmode=light] .xwtabs button{color:#7A5718;border-color:rgba(138,100,32,.4)}html[data-xwmode=light] .xwtabs button.on{background:#8A6420;color:#FFF;border-color:#8A6420}';
 var st=document.createElement('style');st.id='xwtabs-css';st.textContent=css;(document.head||document.documentElement).appendChild(st);
 function head(e){var h=e.querySelector(':scope>summary h3,:scope>summary,:scope>h3,:scope>.h,:scope>b');return ((h||e).textContent||'').replace(/\s+/g,'').slice(0,24);}
 var SAFE=/過敏|堅果|花生|明膠|含酒|酒精|冷藏|保存|融化|麩質|乳製品|大豆/;
 function cls(e){var c=' '+(e.className||'')+' ',t=head(e);
  if(/ xwtabs | xwtnext /.test(c))return null;
  if(/ talkbox | mmsec | wksec | bzsec /.test(c))return 'sell';
  if(/^一句話定位/.test(t)||/^銷售重點/.test(t))return 'sell';
  if(/ warn /.test(c)){return (!W&&SAFE.test((e.textContent||'').slice(0,60))&&!/^建檔備註/.test(t))?'sell':'check';}
  if(/ bsrc /.test(c)||/^官網資料/.test(t))return 'check';
  if(/^(品飲筆記|規格與備註|風味)/.test(t))return 'taste';
  return 'story';}
 function rank(e){var c=' '+(e.className||'')+' ',t=head(e);
  if(/ xwtabs /.test(c))return -10;
  if(/ xwtnext /.test(c))return 99;
  if(/^一句話定位/.test(t))return 0;
  if(/ talkbox /.test(c))return 10;
  if(/ mmsec /.test(c))return 12;
  if(/^銷售重點/.test(t))return 20;
  if(/ wksec /.test(c))return 22;
  if(/ bzsec /.test(c))return 25;
  if(/ warn /.test(c)&&cls(e)==='sell')return 28;
  if(/^品飲筆記・/.test(t))return 31;
  if(/^(品飲筆記|規格與備註)/.test(t))return 30;
  if(/^單品(製作)?由來/.test(t))return 40;
  if(/ bacesec /.test(c))return 45;
  if(/^品牌故事/.test(t)||/ r20brand /.test(c))return 50;
  if(/ brandfab /.test(c))return 60;
  if(/^延伸資料/.test(t))return 70;
  if(/ triv /.test(c))return 75;
  if(/^官網資料/.test(t))return 85;
  if(/ warn /.test(c))return 90;
  if(/ bsrc /.test(c))return 95;
  return 80;}
 window.__xwRank=function(e){var b=e.parentNode;return (b&&b.hasAttribute&&b.hasAttribute('data-xtab'))?rank(e):null;};
 function sort(body){var k=[].slice.call(body.children);var s=k.map(function(e,i){return {e:e,r:rank(e),i:i};}).sort(function(a,b){return a.r-b.r||a.i-b.i;});
  if(s.every(function(x,i){return x.e===k[i];}))return;s.forEach(function(x){body.appendChild(x.e);});}
 function alt(body){
  var mm=body.querySelector(':scope>.mmsec');
  if(mm&&mm.querySelector('.mmfab')&&!mm.querySelector('.xwalt')&&body.querySelector(':scope>.talkbox')){
   var b=document.createElement('button');b.type='button';b.className='xwalt';b.textContent='其他說法：記憶卡版 FAB ▾';
   b.addEventListener('click',function(){var o=mm.classList.toggle('xwaltopen');b.textContent=o?'收起記憶卡版 FAB ▴':'其他說法：記憶卡版 FAB ▾';});
   var f=mm.querySelector('.mmfab');f.parentNode.insertBefore(b,f);}
  else if(mm&&!body.querySelector(':scope>.talkbox'))mm.classList.add('xwaltopen');
  var rb=body.querySelector(':scope>.r20brand'),ba=body.querySelector(':scope>.bacesec');
  if(rb&&ba&&!rb.querySelector('.xwaltlbl')){var s=rb.querySelector(':scope>summary h3')||rb.querySelector(':scope>summary');if(s){var l=document.createElement('span');l.className='xwaltlbl';l.textContent='其他說法';s.appendChild(l);}}}
 function count(card,body){var n={};[].forEach.call(body.children,function(e){var t=e.getAttribute('data-xt');if(t)n[t]=(n[t]||0)+1;});
  [].forEach.call(card.__xtnav.children,function(b){b.hidden=!n[b.getAttribute('data-t')];});
  var nx=card.__xtnext,cur=body.getAttribute('data-xtab'),i=TABS.map(function(x){return x[0];}).indexOf(cur),nxt=null;
  for(var j=i+1;j<TABS.length;j++)if(n[TABS[j][0]]){nxt=TABS[j];break;}
  if(nxt){nx.style.display='';nx.textContent='下一頁：'+nxt[1]+' ›';nx.setAttribute('data-t',nxt[0]);}else nx.style.display='none';}
 function tag(card,body){[].forEach.call(body.children,function(e){var t=cls(e);if(t){if(e.getAttribute('data-xt')!==t)e.setAttribute('data-xt',t);}});alt(body);sort(body);count(card,body);}
 function show(card,t,scroll){var body=card.__xtbody;body.setAttribute('data-xtab',t);
  [].forEach.call(card.__xtnav.children,function(b){b.classList.toggle('on',b.getAttribute('data-t')===t);});
  if(t!=='sell'){var ds=body.querySelectorAll(':scope>details[data-xt='+t+']');var anyOpen=[].some.call(ds,function(d){return d.open;});if(!anyOpen&&ds[0]&&!/bacesec/.test(ds[0].className))ds[0].open=true;}
  count(card,body);
  if(scroll){var bh=(document.getElementById('xwbar')||{}).offsetHeight||50,r=card.__xtnav.getBoundingClientRect(),y=body.getBoundingClientRect().top;
   if(y<bh+4){window.scrollBy(0,y-bh-4);}try{window.__xwAnc&&window.__xwAnc.pick&&window.__xwAnc.pick();}catch(e){}}}
 function first(card){var sh=card.querySelector('.shots');if(!sh||sh.__xtf)return;sh.__xtf=1;var k=sh.querySelectorAll(':scope>.shot');
  if(k.length>1&&k[0].classList.contains('r61kv')){var go=function(){if(sh.scrollLeft<4)sh.scrollLeft=k[1].offsetLeft-sh.offsetLeft;};go();setTimeout(go,300);setTimeout(go,1200);}}
 function build(card){if(card.__xt)return;var body=card.querySelector(':scope>.body');if(!body||/\bbcard\b/.test(card.className))return;
  if(!card.querySelector(':scope>.chead.r79g'))return;
  if(body.children.length<3)return;card.__xt=1;card.__xtbody=body;
  var nav=document.createElement('div');nav.className='xwtabs';nav.setAttribute('data-xwns','1');nav.setAttribute('role','tablist');
  TABS.forEach(function(x){var b=document.createElement('button');b.type='button';b.setAttribute('data-t',x[0]);b.setAttribute('role','tab');b.textContent=x[1];
   b.addEventListener('click',function(){show(card,x[0],true);});nav.appendChild(b);});
  var nx=document.createElement('button');nx.type='button';nx.className='xwtnext';nx.addEventListener('click',function(){show(card,nx.getAttribute('data-t'),true);});
  card.__xtnav=nav;card.__xtnext=nx;body.insertBefore(nav,body.firstChild);body.appendChild(nx);
  body.setAttribute('data-xtab','sell');tag(card,body);show(card,'sell',false);first(card);
  var pend=0;new MutationObserver(function(){if(pend)return;pend=1;requestAnimationFrame(function(){pend=0;tag(card,body);});}).observe(body,{childList:true});}
 function scan(){var cs=document.querySelectorAll('#list section.card');for(var i=0;i<cs.length;i++){if(!cs[i].__xt){try{build(cs[i]);}catch(e){}}}}

 // ── 底部操作列不重複（r259）：頂端列已有「返回」「搜尋」，底部只留 上一支／下一支／頂端；畫面上沒有商品卡時只留「頂端」
 var dk=document.createElement('style');dk.id='xwdock-css';dk.textContent=
  'html body #fback#fback,html body #xwsd#xwsd{display:none!important}'+
  'html.xwdk.xwdk body #pnwrap#pnwrap#pnwrap{left:var(--l)!important;width:calc(var(--w)*3/4)!important;border-radius:20px 0 0 20px!important;border-left:1px solid rgba(201,164,92,.45)!important}'+
  'html.xwdk.xwdk body #ftop#ftop#ftop{left:calc(var(--l) + var(--w)*3/4)!important;width:calc(var(--w)/4)!important}'+
  'html.xwdk.xwnocard body #pnwrap#pnwrap#pnwrap{display:none!important}'+
  'html.xwdk.xwnocard body #ftop#ftop#ftop{left:auto!important;right:16px!important;width:64px!important;border-radius:20px!important;border-left:1px solid rgba(201,164,92,.45)!important}';
 (document.head||document.documentElement).appendChild(dk);
 var R=document.documentElement;R.classList.add('xwdk');
 function nc(){var y=window.innerHeight*0.45,e=document.elementFromPoint(window.innerWidth/2,y),c=e&&e.closest?e.closest('section.card'):null;
  R.classList.toggle('xwnocard',!c||document.body.classList.contains('shon')||document.body.classList.contains('kbon'));}
 var nt=0;window.addEventListener('scroll',function(){if(nt)return;nt=setTimeout(function(){nt=0;nc();},250);},{passive:true});setTimeout(nc,800);setInterval(nc,2000);
 window.__xwTabShow=function(id,t){var c=document.getElementById(id);if(c&&c.__xt)show(c,t||'sell',false);};
 function bar(){var b=document.getElementById('xwbar');if(b)document.documentElement.style.setProperty('--xwbarh',b.offsetHeight+'px');}bar();setTimeout(bar,1500);window.addEventListener('resize',bar);
 scan();var L=document.getElementById('list'),q=0;
 if(L)new MutationObserver(function(){if(q)return;q=1;setTimeout(function(){q=0;scan();},150);}).observe(L,{childList:true});
 setInterval(scan,3000);
 window.addEventListener('hashchange',function(){var id=decodeURIComponent(location.hash.slice(1));setTimeout(function(){var c=document.getElementById(id);if(c&&c.__xt)show(c,'sell',false);},60);});
})();
