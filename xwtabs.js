// xwtabs.js（r259；r308 改成「一頁連續＋快速跳轉列」：四段全部顯示、按鈕捲到該段、捲動時自動反白目前段落；開卡先顯示形象海報）商品卡分頁：賣這支／喝起來（巧克力：口味規格）／背景故事／資料來源。
// 不搬動區塊到別的容器：每個 .body 直接子元素標 data-xt，body 標 data-xtab，用 CSS 只顯示目前分頁（注入腳本照常運作）。
// 排序由 window.__xwRank 統一（兩站 index.html 的 rank() 也會先問它），重複內容（記憶卡版 FAB、舊版品牌故事）摺進「其他說法」。
(function(){
 if(window.__xwTabs)return;window.__xwTabs=1;
 var W=/\/dutyliquorwiki\//.test(location.pathname);
 var TABS=[['sell','賣這支'],['taste',W?'喝起來':'口味規格'],['story','背景故事'],['check','資料來源']];
 if(W)TABS.pop(); /* r276 使用者：酒類商品卡「資料來源」有跟沒有一樣，直接刪除（分頁與內容都不顯示） */
 var css='.xwtabs{position:sticky;top:var(--xwbarh,50px);z-index:6;display:flex;gap:6px;margin:4px -4px 10px;padding:8px 4px;background:#16130F;border-bottom:1px solid rgba(201,164,92,.35);box-shadow:0 6px 10px -8px rgba(0,0,0,.8)}'+
 '.xwtabs button{flex:1 1 0;min-width:0;font:inherit;font-size:15px;font-weight:700;padding:9px 4px;border-radius:10px;border:1px solid rgba(201,164,92,.35);background:transparent;color:#E8CD8A;cursor:pointer;white-space:nowrap;letter-spacing:.02em}'+
 '.xwtabs button.on{background:#C9A45C;color:#17120B;border-color:#C9A45C}'+
 '.xwtabs button[hidden]{display:none}'+
 'html body section.card.xtcard{overflow:clip!important}'+
 '.xtgh{display:flex;align-items:center;gap:10px;margin:22px 0 10px;font-size:15px;font-weight:700;letter-spacing:.08em;color:#E8CD8A;scroll-margin-top:calc(var(--xwbarh,50px) + 64px)}.xtgh:first-of-type{margin-top:6px}.xtgh::before,.xtgh::after{content:"";flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(201,164,92,.55),transparent)}.xtgh small{font-size:11px;font-weight:400;color:#9C8E6E;letter-spacing:.12em;margin-left:6px}.xtgh[hidden]{display:none}html[data-xwmode=light] .xtgh{color:#7A5617}'+
 (W?'.body>[data-xt=check],.body>.xtgh[data-g=check]{display:none!important}':'')+
 '.xwalt{margin:8px 0 2px;font:inherit;font-size:13.5px;color:#C9A45C;background:none;border:1px dashed rgba(201,164,92,.5);border-radius:999px;padding:5px 12px;cursor:pointer}'+
 '.mmsec:not(.xwaltopen) .mmfab{display:none}'+
 '.xwaltlbl{display:inline-block;margin-left:8px;font-size:12px;font-weight:400;color:#BBA77E;border:1px solid rgba(201,164,92,.4);border-radius:999px;padding:0 8px;vertical-align:middle}'+
 '.xwtnext{display:block;width:100%;margin:14px 0 4px;padding:10px;font:inherit;font-size:14.5px;color:#E8CD8A;background:rgba(201,164,92,.08);border:1px solid rgba(201,164,92,.35);border-radius:12px;cursor:pointer}'+
 '.chead .meta>.xtsum{order:2}.xtsum{display:flex;flex-wrap:wrap;align-items:center;gap:4px 2px;margin:8px 0 4px;font-size:15px;line-height:1.5;color:#EDE3CC}'+
 '.xtsum i{font-style:normal;color:#8F8571;margin:0 4px}'+
 '.xtsum b{font-weight:700;color:#F5E3B5}'+
 '.xtsumgo{margin-left:auto;font:inherit;font-size:13px;color:#C9A45C;background:none;border:0;border-bottom:1px dashed rgba(201,164,92,.6);padding:2px 0;cursor:pointer}'+
 'html[data-xwmode=light] .xtsum{color:#2B2418}html[data-xwmode=light] .xtsum b{color:#5C4210}'+
 '.chead .meta>.xtwp{order:2}.xtwp{display:flex;flex-wrap:wrap;align-items:center;gap:4px 2px;margin:0 0 6px;font-size:14px;line-height:1.5;color:#D9CFBC}.xtwp i{font-style:normal;color:#8F8571;margin:0 4px}.xtwp b{color:#F5E3B5}.xtwpk{font-size:12px;color:#17120B;background:#C9A45C;border-radius:5px;padding:1px 6px;margin-right:6px;font-weight:700}.xtwpc{margin-left:8px;font-size:13px;font-weight:700}.xtwpc.lo{color:#8FD19E}.xtwpc.hi{color:#F0B47A}.xtwpno{color:#A89D86;font-size:13px}.xtwpno .xtwpk{background:#5A4E38;color:#E9DBB4}'+
 'html[data-xwmode=light] .xtwp{color:#3A3022}html[data-xwmode=light] .xtwp b{color:#5C4210}html[data-xwmode=light] .xtwpc.lo{color:#1F7A35}html[data-xwmode=light] .xtwpc.hi{color:#A4520F}html[data-xwmode=light] .xtwpno{color:#6B5E45}html[data-xwmode=light] .xtwpno .xtwpk{background:#E6D8B8;color:#4A3A1E}'+
 '.xtspec .xtmeta{display:block!important;padding:0!important;margin:0!important}'+
 'html:not(#_xa):not(#_xb) body section.card .xtmeta .specs>.spec{display:block!important}'+
 'html:not(#_xa):not(#_xb) body section.card .xtmeta .r21more{display:none!important}'+
 '.xtspec .tastebar{margin-top:12px!important}'+
 '/*r268*/.xtminib{display:flex;align-items:center;gap:8px;width:100%;box-sizing:border-box;font:inherit;font-size:14px;text-align:left;color:#D9CDB0;background:rgba(201,164,92,.06);border:1px dashed rgba(201,164,92,.45);border-radius:12px;padding:10px 12px;cursor:pointer;-webkit-tap-highlight-color:transparent}'+
 '.xtminib b{color:#E8CD8A;font-weight:700;white-space:nowrap}.xtminib span{flex:1;min-width:0;color:#B3A98F;font-size:13px}.xtminib em{font-style:normal;color:#E8CD8A;white-space:nowrap}'+
 '.sec.xtmini{padding:0!important;border:0!important;background:none!important;box-shadow:none!important;margin:8px 0!important}'+
 '.sec.xtmini>*:not(.xtminib){display:none!important}'+
 '.sec.xtopen>.xtminib{margin-bottom:10px}'+
 'html[data-xwmode=light] .xtminib{color:#3A2E1C;background:#FBF5E8;border-color:rgba(138,100,32,.5)}html[data-xwmode=light] .xtminib b,html[data-xwmode=light] .xtminib em{color:#7A5617}html[data-xwmode=light] .xtminib span{color:#5E5446}'+
 '@media(max-width:700px){html:not(#_a):not(#_b):not(#_c):not(#_d) section.card .shots.r79c>.shot:not(.r61kv) img{max-height:min(30vh,260px)!important;width:auto!important;max-width:100%!important;margin-left:auto!important;margin-right:auto!important;object-fit:contain!important}section.card>.chead .shots>.shot:not(.r61kv) .lbl{white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}}'+
 'html[data-xwmode=light] .xwtabs{background:#FBF7EF;border-bottom-color:rgba(138,100,32,.35)}html[data-xwmode=light] .xwtabs button{color:#7A5718;border-color:rgba(138,100,32,.4)}html[data-xwmode=light] .xwtabs button.on{background:#8A6420;color:#FFF;border-color:#8A6420}';
 var st=document.createElement('style');st.id='xwtabs-css';st.textContent=css;(document.head||document.documentElement).appendChild(st);
 function head(e){var h=e.querySelector(':scope>summary h3,:scope>summary,:scope>h3,:scope>.h,:scope>b');return ((h||e).textContent||'').replace(/\s+/g,'').slice(0,24);}
 var SAFE=/過敏|堅果|花生|明膠|含酒|酒精|冷藏|保存|融化|麩質|乳製品|大豆/;
 function cls(e){var c=' '+(e.className||'')+' ',t=head(e);
  if(/ xwtabs | xwtnext | xtgh /.test(c))return null;
  if(/ xtspec /.test(c))return 'taste';
  if(/ talkbox | mmsec | wksec | bzsec | vdsec /.test(c))return 'sell';
  if(/^一句話定位/.test(t)||/^銷售重點/.test(t))return 'sell';
  if(/ warn /.test(c)){return (!W&&SAFE.test((e.textContent||'').slice(0,60))&&!/^建檔備註/.test(t))?'sell':'check';}
  if(/ bsrc /.test(c)||/^官網資料/.test(t))return 'check';
  if(/^(品飲筆記|規格與備註|風味)/.test(t))return 'taste';
  return 'story';}
 function rank(e){var c=' '+(e.className||'')+' ',t=head(e);
  if(/ xwtabs /.test(c))return -10;
  if(/ xwtnext /.test(c))return 99;
  if(/ xtspec /.test(c))return 29;
  if(/^一句話定位/.test(t))return 0;
  if(/ talkbox /.test(c))return 10;
  if(/ mmsec /.test(c))return 12;
  if(/^銷售重點/.test(t))return 20;
  if(/ wksec /.test(c))return 22;
  if(/ bzsec /.test(c))return 25;
  if(/ vdsec /.test(c))return 24;
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
 var GI={sell:0,taste:1,story:2,check:3};
 function rk(e){var c=' '+(e.className||'')+' ';if(/ xwtabs /.test(c))return -10000;if(/ xtgh /.test(c))return (GI[e.getAttribute('data-g')]||0)*1000-1;if(/ xwtnext /.test(c))return 99999;var g=cls(e);return (GI[g]||0)*1000+rank(e);}
 window.__xwRank=function(e){var b=e.parentNode;return (b&&b.hasAttribute&&b.hasAttribute('data-xtab'))?rk(e):null;};
 function sort(body){var k=[].slice.call(body.children);var s=k.map(function(e,i){return {e:e,r:rk(e),i:i};}).sort(function(a,b){return a.r-b.r||a.i-b.i;});
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
  TABS.forEach(function(x){var h=card.__xth[x[0]];if(h)h.hidden=!n[x[0]];});}

 /* r268 賣這支精簡：沒有點名本款的近期話題、影片收成一行，點了才展開 */
 function mini(body){
  [['bzsec','近期話題'],['vdsec','影片']].forEach(function(x){
   var sec=body.querySelector(':scope>.'+x[0]);if(!sec||sec.__xtm)return;
   var direct,n,what;
   if(x[0]==='bzsec'){if(!sec.querySelector('.bzit'))return;direct=!!sec.querySelector('.bzwhy.on');n=sec.querySelectorAll('.bzit').length;what=n+' 則・同品牌話題，沒有點名這支';}
   else{var vs=sec.querySelectorAll('[data-xvseen^="v:"]');if(!vs.length)return;direct=!!sec.querySelector('.xvtag.me');n=vs.length;var ser=!!sec.querySelector('.xvtag')&&[].some.call(sec.querySelectorAll('.xvtag'),function(t){return /同系列/.test(t.textContent);});what=n+' 支・'+(ser?'同系列／同品牌':'同品牌')+'影片';}
   sec.__xtm=1;if(direct)return;
   var b=document.createElement('button');b.type='button';b.className='xtminib';b.setAttribute('data-xwns','1');
   b.innerHTML='<b>'+x[1]+'</b><span>'+what+'</span><em>看 ▾</em>';
   b.addEventListener('click',function(){var o=sec.classList.toggle('xtmini');sec.classList.toggle('xtopen',!o);b.querySelector('em').textContent=o?'看 ▾':'收起 ▴';});
   sec.insertBefore(b,sec.firstChild);sec.classList.add('xtmini');});}
 function tag(card,body){TABS.forEach(function(x){var h=card.__xth[x[0]];if(h&&h.parentNode!==body)body.appendChild(h);});[].forEach.call(body.children,function(e){var t=cls(e);if(t){if(e.getAttribute('data-xt')!==t)e.setAttribute('data-xt',t);}});alt(body);try{mini(body);}catch(e){}sort(body);count(card,body);}
 function navH(card){return (card.__xtnav&&card.__xtnav.offsetHeight)||52;}
 function barH(){return (document.getElementById('xwbar')||{}).offsetHeight||50;}
 function mark(card,t){if(card.__xtcur===t)return;card.__xtcur=t;[].forEach.call(card.__xtnav.children,function(b){b.classList.toggle('on',b.getAttribute('data-t')===t);});}
 function show(card,t,scroll){var body=card.__xtbody;
  if(t!=='sell'){var ds=body.querySelectorAll(':scope>details[data-xt='+t+']');var anyOpen=[].some.call(ds,function(d){return d.open;});if(!anyOpen&&ds[0]&&!/bacesec/.test(ds[0].className))ds[0].open=true;}
  mark(card,t);
  if(scroll){var h=card.__xth[t];if(!h||h.hidden)return;card.__xtlock=Date.now();try{pinStop();}catch(e){}
   var y=h.getBoundingClientRect().top-(barH()+navH(card)+6);window.scrollBy(0,y);try{window.__xwAnc&&window.__xwAnc.pick&&window.__xwAnc.pick();}catch(e){}}}
 /* 捲動時自動反白目前段落 */
 function spy(){var lim=barH()+70,cs=document.querySelectorAll('#list section.card');for(var i=0;i<cs.length;i++){var c=cs[i];if(!c.__xt)continue;var r=c.getBoundingClientRect();if(r.bottom<0||r.top>window.innerHeight)continue;
   if(c.__xtlock&&Date.now()-c.__xtlock<700)continue;var cur='sell';TABS.forEach(function(x){var h=c.__xth[x[0]];if(h&&!h.hidden&&h.getBoundingClientRect().top<lim+navH(c))cur=x[0];});mark(c,cur);}}
 var spT=0;window.addEventListener('scroll',function(){if(spT)return;spT=setTimeout(function(){spT=0;spy();},120);},{passive:true});
 var FIO=('IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting&&e.target.__xtgo)e.target.__xtgo();});},{rootMargin:'300px 0px'}):null;
 function first(card){/* r308 使用者：開卡先顯示形象海報（第一張），要看商品照自己往右滑；海報是後插到最前面的，瀏覽器會保留原本那張的位置，所以要拉回 0 */ var sh=card.querySelector('.shots');if(!sh||sh.__xtf)return;sh.__xtf=1;var k=sh.querySelectorAll(':scope>.shot');
  new MutationObserver(function(){sh.__xtgo&&sh.__xtgo();}).observe(sh,{childList:true});
  sh.addEventListener('touchstart',function(){sh.__xtu=1;},{passive:true});sh.addEventListener('mousedown',function(){sh.__xtu=1;});var dt=card.querySelector('.r15dots');if(dt)dt.addEventListener('click',function(){sh.__xtu=1;},true);sh.addEventListener('wheel',function(){sh.__xtu=1;},{passive:true});
  sh.__xtgo=function(){if(sh.__xtu)return;var f=sh.querySelector(':scope>.shot');if(!f||!f.classList.contains('r61kv'))return;if(sh.scrollLeft>3)sh.scrollLeft=0;};
  [].forEach.call(sh.querySelectorAll('img'),function(im){im.addEventListener('load',function(){sh.__xtgo();});});
  sh.__xtgo();setTimeout(sh.__xtgo,300);setTimeout(sh.__xtgo,1200);if(FIO)FIO.observe(sh);}

 /* r266：規格表搬進「喝起來／口味規格」分頁；商品名下只留一行重點＋「全部規格 ›」 */
 function esc(t){return String(t).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
 function shortv(v){v=(v||'').replace(/\s+/g,' ').trim();var m=v.split(/[（(，,；;]/)[0].trim()||v;return m.length>18?m.slice(0,18)+'…':m;}

 /* r313 網路參考價（台灣 FindPrice、日本樂天）：商品名下一行，明細在「喝起來」的規格與備註 */
 var WPP=null;function wpGet(){if(!WPP){var b=(document.querySelector('script[src*="xwtabs.js"]')||{}).src||'https://xsos32-design.github.io/dutyliquorwiki/xwtabs.js';b=b.replace(/xwtabs\.js.*$/,'');WPP=fetch(b+'webprice.json?v=f86fc526').then(function(r){return r.json();}).catch(function(){return null;});}return WPP;}
 function ntd(x){return 'NT$'+Math.round(x).toLocaleString('en-US');}
 function wpLine(card,meta,sum){wpGet().then(function(J){if(!J||!J.m)return;var d=J.m[card.id];if(!d)return;var el=document.createElement('div');el.className='xtwp';el.setAttribute('data-xwns','1');var a=[];
  if(d.no){el.className='xtwp xtwpno';el.innerHTML='<span class="xtwpk">網路參考價</span>網路查無同款<i>・</i>'+d.no+(d.ov?'<i>・</i>其他年份 '+d.ov[0]+' 日本樂天 約 <b>'+ntd(d.ov[1])+'</b><button type="button" class="xtsumgo">明細 ›</button>':'');var bb=el.querySelector('button');if(bb)bb.addEventListener('click',function(){show(card,'taste',true);});meta.insertBefore(el,sum.nextSibling);return;}
  if(d.tw)a.push('台灣網路 <b>'+(d.tw[0]===d.tw[1]?ntd(d.tw[0]):ntd(d.tw[0])+'～'+ntd(d.tw[1]))+'</b>'+(d.tw[3]?'（其他容量換算）':''));
  if(d.jp)a.push('日本樂天 約 <b>'+ntd(d.jp)+'</b>');
  var h='<span class="xtwpk">網路參考價</span>'+a.join('<i>・</i>');
  if(d.pv){var ref=d.tw?d.tw[0]:d.jp;var df=d.pv-ref,pc=Math.round(Math.abs(df)/ref*100);var wh=d.tw?'台灣':'日本';h+='<span class="xtwpc '+(df<=0?'lo':'hi')+'">本店'+(Math.abs(df)<1?'和'+wh+'網路最低價一樣':'比'+wh+'網路最低'+(df<0?'便宜 ':'貴 ')+ntd(Math.abs(df))+'（'+pc+'%）')+'</span>';}
  h+='<button type="button" class="xtsumgo">明細 ›</button>';el.innerHTML=h;
  el.querySelector('button').addEventListener('click',function(){show(card,'taste',true);});
  meta.insertBefore(el,sum.nextSibling);});}
 function specMove(card,body){if(card.__xtsp)return;var meta=card.querySelector(':scope>.chead .meta');if(!meta)return;var sp=meta.querySelector(':scope>.specs');if(!sp)return;card.__xtsp=1;
  var sum=document.createElement('div');sum.className='xtsum';sum.setAttribute('data-xwns','1');
  function fill(){var kv={};[].forEach.call(sp.querySelectorAll('.spec'),function(x){var k=x.querySelector('.k'),v=x.querySelector('.v');if(!k||!v)return;var c=v.cloneNode(true);[].forEach.call(c.querySelectorAll('a,button'),function(a){a.remove();});kv[(k.textContent||'').replace(/\s+/g,'')]=shortv(c.textContent);});
   var want=W?['容量','酒精度','產區']:['規格','產地','類別'],parts=[];want.forEach(function(k){if(kv[k])parts.push(k==='酒精度'||k==='容量'||k==='規格'?'<b>'+esc(kv[k])+'</b>':esc(kv[k]));});
   var n=sp.querySelectorAll('.spec').length,h=parts.join('<i>・</i>')+'<button type="button" class="xtsumgo">全部規格 '+n+' 項 ›</button>';
   if(sum.__h!==h){sum.__h=h;sum.innerHTML=h;sum.querySelector('button').addEventListener('click',function(){show(card,'taste',true);});}}
  fill();var fp=0;new MutationObserver(function(){if(fp)return;fp=1;setTimeout(function(){fp=0;fill();},120);}).observe(sp,{childList:true,subtree:true,characterData:true});
  meta.insertBefore(sum,sp);
  if(W)try{wpLine(card,meta,sum);}catch(e){}
  var box=document.createElement('div');box.className='sec xtspec';
  box.innerHTML='<h3>'+(W?'規格與風味輪':'規格')+'</h3>';var wrap=document.createElement('div');wrap.className='meta xtmeta';box.appendChild(wrap);
  var more=meta.querySelector(':scope>.r21more'),tb=meta.querySelector(':scope>.tastebar');
  sp.classList.remove('r21cut');wrap.appendChild(sp);if(more)wrap.appendChild(more);if(tb)wrap.appendChild(tb);
  new MutationObserver(function(){if(sp.classList.contains('r21cut'))sp.classList.remove('r21cut');}).observe(sp,{attributes:true,attributeFilter:['class']});
  body.appendChild(box);}
 function build(card){if(card.__xt)return;var body=card.querySelector(':scope>.body');if(!body||/\bbcard\b/.test(card.className))return;
  if(!card.querySelector(':scope>.chead.r79g'))return;
  if(body.children.length<3)return;card.__xt=1;card.__xtbody=body;card.classList.add('xtcard');
  var nav=document.createElement('div');nav.className='xwtabs';nav.setAttribute('data-xwns','1');nav.setAttribute('role','tablist');
  TABS.forEach(function(x){var b=document.createElement('button');b.type='button';b.setAttribute('data-t',x[0]);b.setAttribute('role','tab');b.textContent=x[1];
   b.addEventListener('click',function(){show(card,x[0],true);});nav.appendChild(b);});
  card.__xth={};TABS.forEach(function(x){var h=document.createElement('div');h.className='xtgh';h.setAttribute('data-g',x[0]);h.setAttribute('data-xwns','1');h.innerHTML=x[1]+'<small>'+({sell:'SELL',taste:W?'TASTE':'SPEC',story:'STORY',check:'SOURCE'})[x[0]]+'</small>';card.__xth[x[0]]=h;body.appendChild(h);});
  card.__xtnav=nav;body.insertBefore(nav,body.firstChild);
  try{specMove(card,body);}catch(e){}
  body.setAttribute('data-xtab','all');tag(card,body);mark(card,'sell');first(card);
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

 // ── 跳到商品卡（搜尋結果、#商品id）後釘住卡片頂端（r260）：前後卡片還在建、照片換張、分頁縮高時，卡片頂端一直停在頂端列下方；手指一碰或滾輪就放開
 var PIN=null,PT=0;
 function pinStop(){PIN=null;}
 ['touchstart','wheel','keydown','mousedown'].forEach(function(ev){window.addEventListener(ev,function(e){if(PIN&&(!e.target||!e.target.closest||!e.target.closest('#xws')))pinStop();},{passive:true,capture:true});});
 function pin(c){if(!c)return;PIN=c;PT=Date.now();requestAnimationFrame(step);}
 function step(){if(!PIN)return;if(Date.now()-PT>15000||!PIN.isConnected||document.body.classList.contains('shon')||document.body.classList.contains('kbon')){PIN=null;return;}
  var _sh=PIN.querySelector('.shots');if(_sh&&_sh.__xtgo)_sh.__xtgo();
  if(PIN.offsetParent!==null){var bh=(document.getElementById('xwbar')||{}).offsetHeight||50,d=PIN.getBoundingClientRect().top-(bh+8);
   if(Math.abs(d)>2){window.scrollBy(0,d);try{window.__xwAnc&&window.__xwAnc.pick&&window.__xwAnc.pick();}catch(e){}}}
  requestAnimationFrame(step);}
 window.addEventListener('popstate',pinStop);window.addEventListener('hashchange',function(){var c=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(!c||c!==PIN)pinStop();},true);
 window.__xwPin=function(id){pin(typeof id==='string'?document.getElementById(id):id);};
 (function(){var L=document.getElementById('list');if(!L)return;var was=false;
  new MutationObserver(function(){var on=L.classList.contains('xwhold');if(on&&!was){setTimeout(function(){var cs=L.querySelectorAll(':scope>section.card');for(var i=0;i<cs.length;i++){if(cs[i].offsetParent!==null){pin(cs[i]);break;}}},30);}was=on;}).observe(L,{attributes:true,attributeFilter:['class']});})();

 // ── 知識庫不重複（r260）：「‹ 回商品首頁」和頂端返回重複→藏；「全部章節」併到頂端「目錄」鈕（在知識庫裡按目錄＝開全部章節）
 var kb=document.createElement('style');kb.id='xwkbdedupe-css';kb.textContent='body.kbon .r59back{display:none!important}html.xwkbmb body.kbon .r116all{display:none!important}';(document.head||document.documentElement).appendChild(kb);
 (function(){var mb=document.getElementById('mb');if(!mb)return;R.classList.add('xwkbmb');
  mb.addEventListener('click',function(e){if(!document.body.classList.contains('kbon'))return;var a=document.querySelector('.r116all');if(!a)return;
   e.preventDefault();e.stopImmediatePropagation();a.click();},true);})();
 window.__xwTabShow=function(id,t){var c=document.getElementById(id);if(c&&c.__xt)show(c,t||'sell',true);};
 function bar(){var b=document.getElementById('xwbar');if(b)document.documentElement.style.setProperty('--xwbarh',b.offsetHeight+'px');}bar();setTimeout(bar,1500);window.addEventListener('resize',bar);
 scan();var L=document.getElementById('list'),q=0;
 if(L)new MutationObserver(function(){if(q)return;q=1;setTimeout(function(){q=0;scan();},150);}).observe(L,{childList:true});
 setInterval(scan,3000);
 window.addEventListener('hashchange',function(){var id=decodeURIComponent(location.hash.slice(1));setTimeout(function(){var c=document.getElementById(id);if(c&&c.matches&&c.matches('#list section.card'))pin(c);},60);});
})();
