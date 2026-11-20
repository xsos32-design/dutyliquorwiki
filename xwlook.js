/* r242 版面美術：首頁圖像化入口＋知識庫章節橫幅與本章重點（兩站共用，由 nav.js 的 xwlook 行載入） */
(function(){
 if(window.__xwLook) return; window.__xwLook=1;
 /* r246 子頁固定列：品牌頁、產區頁、更新日誌、獎勵圖牆的 .tools／.jump 原本 top:0，會躲到頂端選單列下面；背景漸層透明會讓下面的字疊上來 */
 (function(){
  if(!/\/(brands|regions|changelog|rewards|why)\.html$/.test(location.pathname)) return;
  var st=document.createElement('style'); st.id='xwstick-css';
  st.textContent='body .tools,body .jump{background:var(--bg,#0E0C0A)!important;box-shadow:0 8px 12px -8px rgba(0,0,0,.6)}html[data-xwmode=light] body .tools,html[data-xwmode=light] body .jump{box-shadow:0 8px 12px -10px rgba(0,0,0,.25)}';
  (document.head||document.documentElement).appendChild(st);
  function fix(){var x=document.getElementById('xwbar'),r=x?x.getBoundingClientRect():null,t=(r&&r.height&&getComputedStyle(x).position!=='static')?Math.max(0,Math.round(r.bottom)):0;
   [].forEach.call(document.querySelectorAll('.tools,.jump'),function(e){if(getComputedStyle(e).position==='sticky'&&e.style.top!==t+'px')e.style.top=t+'px';});}
  function go(){fix();var n=0,iv=setInterval(function(){fix();if(++n>20)clearInterval(iv);},300);addEventListener('resize',fix);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
 })();
 /* r259 子頁頁首的「‹ 回○○速讀檔案」和頂端列的返回鍵重複：有頂端列時藏起來（站名按鈕也能回速讀檔案） */
 (function(){var st=document.createElement('style');st.id='xwnoback-css';st.textContent='body:has(#xwbar) header>a.back{display:none!important}';(document.head||document.documentElement).appendChild(st);})();
 /* r268 子頁小按鈕放大到手指好按（產區頁酒款清單、表格支數連結、葡萄酒產區「看講義」、促銷頁勾選框） */
 (function(){var P=location.pathname,c='';
  if(/regions\.html$/.test(P))c+='ul.pl>li>a{display:inline-block;padding:7px 0;line-height:1.45}ul.pl>li{margin:0!important}table td>a{display:inline-block;padding:6px 6px;margin:-6px -6px}';
  if(/wines\.html$/.test(P))c+='.reg h4 a.kb{display:inline-block;padding:7px 12px;margin:-4px 0;border:1px solid rgba(201,164,92,.45);border-radius:999px}';
  if(/\/(promotion|chocolatepromo)\//.test(P))c+='label.cmp{padding:6px 4px;cursor:pointer}label.cmp input[type=checkbox]{width:20px!important;height:20px!important;vertical-align:-4px;accent-color:#C9A45C}';
  if(!c)return;var st=document.createElement('style');st.id='xlsmall-css';st.textContent=c;(document.head||document.documentElement).appendChild(st);})();
 /* r293 學習區導覽列：知識庫、影片教室、為什麼百科、酒類圖鑑、葡萄酒速成、產區桶型、葡萄酒產區、看圖記憶、巧克力知識庫 互相一鍵切換（子頁放在頂端列下方；兩站首頁放在知識庫最上面） */
 (function(){
  var B='https://xsos32-design.github.io/';
  var L=[['kbw','酒類知識庫',B+'dutyliquorwiki/#kb'],['video','影片教室',B+'dutyliquorwiki/video.html'],['why','為什麼百科',B+'dutyliquorwiki/why.html'],['types','酒類圖鑑',B+'dutyliquorwiki/types.html'],
   ['wkit','葡萄酒速成',B+'dutyliquorwiki/winekit.html'],['regions','產區・桶型',B+'dutyliquorwiki/regions.html'],['wines','葡萄酒產區',B+'dutyliquorwiki/wines.html'],['memo','看圖記憶',B+'dutyliquorwiki/memo.html'],['kbc','巧克力知識庫',B+'chocolatewiki/#kb']];
  var p=location.pathname, cur=/\/video\.html$/.test(p)?'video':/\/why\.html$/.test(p)?'why':/\/types\.html$/.test(p)?'types':/\/winekit\.html$/.test(p)?'wkit':
   /\/regions\.html$/.test(p)?'regions':/\/wines\.html$/.test(p)?'wines':/\/memo\.html$/.test(p)?'memo':/\/chocolatewiki\/(index\.html)?$/.test(p)?'kbc':/\/dutyliquorwiki\/(index\.html)?$/.test(p)?'kbw':'';
  if(!cur) return;
  var css='.xwlearn{display:flex;align-items:center;gap:7px;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:9px 14px;margin:0;background:#0E0C0A;border-bottom:1px solid rgba(201,164,92,.22);position:relative;z-index:5}'+
   '.xwlearn::-webkit-scrollbar{display:none}.xwlearn .xlh{flex:none;font-size:11px;letter-spacing:.22em;color:#C9A45C;margin-right:2px;font-weight:700}'+
   '.xwlearn a{flex:none;display:inline-block;padding:6px 12px;border:1px solid rgba(201,164,92,.35);border-radius:999px;font-size:13.5px;line-height:1.3;color:#E9DFCC!important;text-decoration:none!important;white-space:nowrap;background:rgba(255,255,255,.02)}'+
   '.xwlearn a.on{background:#C9A45C;border-color:#C9A45C;color:#16120C!important;font-weight:700}'+
   '#kbview .xwlearn{margin:10px 0 14px;border:1px solid rgba(201,164,92,.22);border-radius:14px;padding:9px 10px}'+
   'html[data-xwmode=light] .xwlearn{background:#F4EEE2}html[data-xwmode=light] .xwlearn a{color:#3B2F1E!important;background:#fff}html[data-xwmode=light] .xwlearn a.on{color:#16120C!important;background:#C9A45C}';
  var st=document.createElement('style');st.id='xwlearn-css';st.textContent=css;(document.head||document.documentElement).appendChild(st);
  function bar(){var d=document.createElement('nav');d.className='xwlearn';d.setAttribute('data-xwns','');d.setAttribute('aria-label','學習區');
   d.innerHTML='<span class="xlh">學習區</span>'+L.map(function(x){return '<a href="'+x[2]+'"'+(x[0]===cur?' class="on" aria-current="page"':'')+'>'+x[1]+'</a>';}).join('');
   d.addEventListener('click',function(e){var a=e.target.closest('a');if(!a)return;
    if((cur==='kbw'&&/dutyliquorwiki\/#kb$/.test(a.href))||(cur==='kbc'&&/chocolatewiki\/#kb$/.test(a.href))){e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});}});
   return d;}
  function center(d){var o=d.querySelector('a.on');if(o)d.scrollLeft=Math.max(0,o.offsetLeft-d.clientWidth/2+o.offsetWidth/2);}
  function put(){
   if(cur==='kbw'||cur==='kbc'){var t=document.querySelector('#kbview .kbtop');if(!t)return false;if(document.querySelector('#kbview .xwlearn'))return true;var d=bar();t.parentNode.insertBefore(d,t.nextSibling);setTimeout(function(){center(d);},50);return true;}
   if(document.querySelector('.xwlearn'))return true;
   var x=document.getElementById('xwbar');if(!x&&document.readyState!=='complete')return false;
   var d=bar();if(x&&x.parentNode)x.parentNode.insertBefore(d,x.nextSibling);else document.body.insertBefore(d,document.body.firstChild);center(d);return true;}
  var n=0;(function tick(){if(put())return;if(++n<60)setTimeout(tick,250);})();
  if(cur==='kbw'||cur==='kbc')(function ob(){if(!document.body){setTimeout(ob,200);return;}new MutationObserver(function(){if(document.body.classList.contains('kbon'))put();}).observe(document.body,{attributes:true,attributeFilter:['class']});})();
 })();
 var P=location.pathname, SITE=/chocolatewiki/.test(P)?'c':(/\/dutyliquorwiki\/(index\.html)?$/.test(P)?'w':'');
 if(!SITE) return;
 function $$(s,r){return [].slice.call((r||document).querySelectorAll(s));}
 function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
 var I='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">';
 var ICO={
  brand:I+'<path d="M4 19.5V5a2 2 0 0 1 2-2h13v16H6.5A2.5 2.5 0 0 0 4 21.5v-2"/><path d="M8 7h7M8 11h5"/></svg>',
  reg:I+'<path d="M12 21s-6-5.3-6-11a6 6 0 0 1 12 0c0 5.7-6 11-6 11z"/><circle cx="12" cy="10" r="2.2"/></svg>',
  wheel:I+'<circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4"/></svg>',
  pick:I+'<path d="M12 3l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.8z"/></svg>',
  gift:I+'<rect x="3" y="8" width="18" height="13" rx="1.5"/><path d="M12 8v13M3 12h18M12 8S10.5 3 7.8 4.2C5.6 5.2 7.5 8 12 8zm0 0s1.5-5 4.2-3.8C18.4 5.2 16.5 8 12 8z"/></svg>',
  promo:I+'<path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>',
  shelf:I+'<path d="M12 2l9 5-9 5-9-5z"/><path d="M3 12l9 5 9-5M3 17l9 5 9-5"/></svg>',
  quiz:I+'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 12.5l2.8 2.8L16.5 9"/></svg>'
 };
 var EN={'商訓知識庫':'LEARN','查詢工具':'TOOLS','本月與練習':'THIS MONTH'};
 var css=''
 /* 區塊標題：中文＋英文小字＋金線 */
 +'html:not(#_xa):not(#_xb) .r59h.xl,html:not(#_xa):not(#_xb) .r59hd .r59h.xl{display:flex;align-items:center;gap:10px;font-family:"Noto Serif TC",serif;font-size:17px!important;letter-spacing:3px;color:#EAD9B0!important;font-weight:600;margin:14px 2px 0!important}'
 +'html:not(#_xa):not(#_xb) .r59h.xl i{font-style:normal;font-family:"Cormorant Garamond",Georgia,serif;font-size:12px;letter-spacing:3px;color:#C9A45C}'
 +'html:not(#_xa):not(#_xb) .r59h.xl::after{content:"";flex:1;height:1px;background:linear-gradient(90deg,rgba(201,164,92,.55),rgba(201,164,92,0))}'
 +'html:not(#_xa):not(#_xb) .r59hd{align-items:center!important}'
 /* 知識庫分組：上方照片橫幅 */
 +'html:not(#_xa):not(#_xb) .r59kg.xl{gap:10px!important}'
 +'html:not(#_xa):not(#_xb) .r59k.xl{padding:0 0 10px!important;overflow:hidden;justify-content:flex-start!important;border-color:rgba(201,164,92,.34)!important;background:#1B1813!important;min-height:0!important}'
 +'html:not(#_xa):not(#_xb) .r59k.xl .xl-kim{display:block;width:100%;aspect-ratio:16/7;object-fit:cover;margin:0 0 8px;border-bottom:1px solid rgba(201,164,92,.3);filter:saturate(.92) brightness(.92)}'
 +'html:not(#_xa):not(#_xb) .r59k.xl>b,html:not(#_xa):not(#_xb) .r59k.xl>span,html:not(#_xa):not(#_xb) .r59k.xl>em{padding:0 12px;box-sizing:border-box}'
 +'html:not(#_xa):not(#_xb) .r59k.xl>b{color:#F2D89A!important;font-size:15px}'
 +'html:not(#_xa):not(#_xb) .r59k.xl>em{color:#C9A45C!important}'
 +'html:not(#_xa):not(#_xb) .r59k.xl:hover .xl-kim{filter:none}'
 +'html:not(#_xa):not(#_xb) .r59k.xl.last{border-color:#C9A45C!important;box-shadow:0 0 0 1px rgba(201,164,92,.45)}'
 +'html:not(#_xa):not(#_xb) .r59k.xl.last em{background:#C9A45C!important;color:#16120C!important;margin-left:12px;padding:3px 8px!important}'
 +'html:not(#_xa):not(#_xb) .r59kg.xl>.r59k:last-child:nth-child(odd){grid-column:1/-1}'
 +'html:not(#_xa):not(#_xb) .r59kg.xl>.r59k:last-child:nth-child(odd) .xl-kim{aspect-ratio:16/5}'
 /* 工具卡：左邊圖示（r249 改用 AI 生成圖示 img/why/ico_*.webp） */
 +'html:not(#_xa):not(#_xb) .r59t.xl{flex-direction:row!important;align-items:center!important;justify-content:flex-start!important;gap:11px!important}'
 +'html:not(#_xa):not(#_xb) .r59t.xl .xl-ti{flex:0 0 40px;height:40px;border-radius:11px;display:flex;align-items:center;justify-content:center;color:#E8CD8A;border:1px solid rgba(201,164,92,.45);background:radial-gradient(circle at 30% 25%,rgba(201,164,92,.28),rgba(201,164,92,.06))}'
 +'html:not(#_xa):not(#_xb) .r59t.xl.hi .xl-ti{color:#9FE3CB;border-color:rgba(127,209,181,.5);background:radial-gradient(circle at 30% 25%,rgba(127,209,181,.25),rgba(127,209,181,.05))}'
 +'html:not(#_xa):not(#_xb) .r59t.xl .xl-ti.xl-ai{flex:0 0 48px;height:48px;border-radius:12px;background-size:cover!important;background-position:center!important;background-repeat:no-repeat!important;border:1px solid rgba(201,164,92,.5);box-shadow:0 2px 8px rgba(0,0,0,.35)}'
 +'html:not(#_xa):not(#_xb) .r59t.xl .xl-tt{display:flex;flex-direction:column;gap:3px;min-width:0}'
 +'html:not(#_xa):not(#_xb) #mmhome{margin:0!important}'
 /* 知識庫章節橫幅 */
 +'.xl-ch{position:relative;margin:4px 0 16px;border-radius:16px;overflow:hidden;border:1px solid rgba(201,164,92,.35);background:#17140F}'
 +'.xl-ch>img{display:block;width:100%;aspect-ratio:16/7;max-height:260px;object-fit:cover}'
 +'.xl-ch .xl-chs{position:absolute;left:0;right:0;top:0;aspect-ratio:16/7;max-height:260px;background:linear-gradient(180deg,rgba(15,12,8,0) 45%,rgba(15,12,8,.88));pointer-events:none}'
 +'.xl-ch .xl-cht{position:relative;margin-top:-64px;padding:0 14px 12px}'
 +'.xl-ch .xl-st{display:inline-block;font-size:12px;letter-spacing:1.5px;color:#16120C;background:#C9A45C;border-radius:999px;padding:3px 10px;font-weight:700}'
 +'.xl-ch .xl-en{display:block;margin-top:6px;font-family:"Cormorant Garamond",Georgia,serif;font-style:italic;font-size:19px;color:#F4E6C6;text-shadow:0 1px 6px rgba(0,0,0,.7)}'
 +'.xl-ch .xl-lr{margin:10px 0 0;font-size:14.5px;line-height:1.65;color:#E6DFD1}.xl-ch .xl-lr b{color:#E8CD8A;margin-right:6px}'
 +'.xl-ch .xl-mt{display:block;margin-top:6px;font-size:12.5px;color:#ADA69A}'
 +'.xl-ch.noimg{background:linear-gradient(120deg,rgba(201,164,92,.16),rgba(201,164,92,.03))}.xl-ch.noimg .xl-cht{margin-top:0;padding-top:12px}.xl-ch.noimg .xl-en{color:#E8CD8A;text-shadow:none}'
 +'.xl-toc{margin:0 0 22px;border:1px solid rgba(201,164,92,.28);border-radius:14px;padding:11px 12px;background:rgba(201,164,92,.05)}.xl-toc>b{display:block;font-size:12.5px;letter-spacing:2px;color:#C9A45C;margin:0 0 7px}'
 +'.xl-toc ol{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:6px}'
 +'.xl-toc li{margin:0}.xl-toc button{font:inherit;font-size:13px;line-height:1.35;color:#EDE3CC;background:rgba(201,164,92,.08);border:1px solid rgba(201,164,92,.32);border-radius:999px;padding:5px 11px;cursor:pointer;text-align:left}'
 +'.xl-toc button i{font-style:normal;color:#C9A45C;margin-right:5px;font-variant-numeric:tabular-nums}'
 +'.xl-toc button:active{background:rgba(201,164,92,.25)}'
 +'.xl-toc.more ol{max-height:122px;overflow:hidden;-webkit-mask-image:linear-gradient(180deg,#000 70%,transparent);mask-image:linear-gradient(180deg,#000 70%,transparent)}.xl-toc .xl-mo{margin-top:6px;font:inherit;font-size:12.5px;color:#C9A45C;background:none;border:0;padding:2px 0;cursor:pointer}'
 +'.kbsec.xl-hit{box-shadow:-2px 0 0 #E8CD8A;transition:box-shadow 1.2s}';
 var st=document.createElement('style');st.id='xwlook-css';st.textContent=css;(document.head||document.documentElement).appendChild(st);



 /* r268 首頁快捷列：搜尋框下 4 顆常用（折扣小卡、我的架上、活動月曆、獎勵圖牆）；手機版大標題圖收起 */
 var QI={
  card:I+'<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10h4M7 14h7"/><circle cx="17" cy="11" r="1.6"/></svg>',
  cal:I+'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h3"/></svg>',
  rw:I+'<circle cx="12" cy="9" r="5.5"/><path d="M8.5 13.5 7 21l5-2.6 5 2.6-1.5-7.5"/></svg>'
 };
 function qk(){
  if(document.getElementById('xlqk'))return;
  var sb=document.querySelector('#r16home button.srch,#r20home button.srch');if(!sb)return;
  var CH=!!document.getElementById('r20home'),U='https://xsos32-design.github.io/';
  var L=[['card','折扣小卡','現場快查',U+(CH?'chocolatepromo/card.html':'promotion/card.html')],
   ['shelf','我的架上','本月清單',''],
   ['cal','活動月曆','活動日期',U+'promotion/calendar.html'],
   ['rw','獎勵圖牆','獎金・贈品',U+'dutyliquorwiki/rewards.html']];
  var d=document.createElement('div');d.id='xlqk';d.setAttribute('data-xwns','1');
  d.innerHTML=L.map(function(x){var ic=QI[x[0]]||ICO[x[0]]||'';var inner='<i>'+ic+'</i><b>'+x[1]+'</b><small>'+x[2]+'</small>';
   return x[3]?'<a class="xlqk" href="'+x[3]+'">'+inner+'</a>':'<button type="button" class="xlqk" data-qk="'+x[0]+'">'+inner+'</button>';}).join('');
  d.addEventListener('click',function(e){var b=e.target.closest('button[data-qk]');if(!b)return;var t=document.querySelector('.r59t[data-r59="'+b.getAttribute('data-qk')+'"]');if(t)t.click();});
  sb.parentNode.insertBefore(d,sb.nextSibling);
 }
 (function(){var st=document.createElement('style');st.id='xlqk-css';st.textContent=''
  +'#xlqk{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:10px 0 14px}'
  +'#xlqk .xlqk{display:flex;flex-direction:column;align-items:center;gap:3px;padding:10px 4px 9px;min-height:84px;box-sizing:border-box;border:1px solid rgba(201,164,92,.40);border-radius:14px;background:linear-gradient(180deg,rgba(201,164,92,.13),rgba(201,164,92,.03));color:#EDE3CC;text-decoration:none;font:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;text-align:center}'
  +'#xlqk .xlqk:active{background:rgba(201,164,92,.28)}'
  +'#xlqk i{display:flex;color:#E8CD8A;margin-bottom:2px}#xlqk i svg{width:24px;height:24px}'
  +'#xlqk b{font-size:14px;font-weight:700;color:#F2D89A;line-height:1.25}'
  +'#xlqk small{font-size:11.5px;line-height:1.3;color:#B9B0A0}'
  +'html[data-xwmode=light] #xlqk .xlqk{background:#FBF5E8;border-color:#C9A45C;color:#3A2E1C}html[data-xwmode=light] #xlqk b{color:#7A5617}html[data-xwmode=light] #xlqk i{color:#8A6420}html[data-xwmode=light] #xlqk small{color:#5E5446}'
  +'@media(max-width:700px){#r16home>.hero .r22art,#r20home>.hero .r22art{display:none!important}#r16home>.hero,#r20home>.hero{padding-bottom:14px!important;min-height:0!important}}';
  (document.head||document.documentElement).appendChild(st);})();
 /* ---------- 首頁 ---------- */
 function home(){
  qk();
  $$('.r59h:not(.xl)').forEach(function(h){var t=h.textContent.trim(),e=EN[t];h.classList.add('xl');if(e)h.innerHTML=esc(t)+'<i>'+e+'</i>';});
  $$('.r59kg:not(.xl)').forEach(function(g){g.classList.add('xl');});
  $$('.r59k:not(.xl)').forEach(function(b){var k=(b.getAttribute('data-r59')||'').replace('kbg:','');if(!k)return;b.classList.add('xl');
   var im=document.createElement('img');im.className='xl-kim';im.alt='';im.loading='lazy';im.decoding='async';im.src='img/kbmap/wide2/g_'+k+'.webp';
   im.onerror=function(){im.remove();};b.insertBefore(im,b.firstChild);});
  $$('.r59t:not(.xl)').forEach(function(t){var k=t.getAttribute('data-r59');if(!ICO[k])return;t.classList.add('xl');
   var w=document.createElement('div');w.className='xl-tt';while(t.firstChild)w.appendChild(t.firstChild);
   var i=document.createElement('i');i.className='xl-ti';i.setAttribute('aria-hidden','true');i.style.backgroundImage='url(https://xsos32-design.github.io/dutyliquorwiki/img/why/ico_'+k+'.webp)';i.classList.add('xl-ai');t.appendChild(i);t.appendChild(w);});
 }
 /* ---------- 知識庫章節 ---------- */
 function info(id){var c=document.querySelector('#kbview .kmp-card[data-c="'+id+'"]');if(!c)return null;
  var s=c.closest('.kmp-step'),no=s&&s.querySelector('.kmp-no'),sb=s&&s.querySelector('.kmp-sh b'),cards=s?$$('.kmp-card',s):[c];
  var p=c.querySelector('.kmp-tx>p');var lr=p?p.textContent.replace(/^看完會/,'').trim():'';
  return {en:(c.querySelector('.kmp-tx>em')||{}).textContent||'',lr:lr,mt:((c.querySelector('.kmp-tx>small')||{}).textContent||'').trim(),
   st:(no?'第 '+no.textContent.trim()+' 步・':'')+(sb?sb.textContent.trim():'')+'・第 '+(cards.indexOf(c)+1)+'／'+cards.length+' 章'};}
 var SRC={"w": {"scotch": "scotch", "terms": "terms", "cask": "cask", "whyw": "fortified", "wjt": "wjt", "wbase": "wbase", "wgrape": "wgrape", "wlaw": "wlaw", "wworld": "wworld", "winesp": "w_bdx", "weu": "weu", "wam": "wam", "wau": "wau", "wspk": "wspk", "wkitp": "ai_hero", "wtaste": "wtaste", "bcog": "bcog", "bchn": "bchn", "bsake": "bsake", "bspi": "bspi", "wqa": "wqa", "wsell": "wsell", "duty": "duty", "mbrand": "mbrand", "mprod": "mprod", "mproc": "mproc", "blend": "blend", "sheets": "sheets", "pics": "pics", "mind": "mind", "memop": "ob2_macallan-12y-dc"}, "c": {"t-basic": "t-basic", "cbean": "cbean", "cmake": "cmake", "ctype": "ctype", "ctaste": "ctaste", "whyc": "cmake", "t-talk": "t-talk", "k-scene": "k-scene", "k-cfaq": "k-cfaq", "k-best": "k-best", "k-story": "k-story", "k-mnemo": "k-mnemo", "memoc": "ob_c2732706011650", "t-rule": "t-rule", "t-allergen": "t-allergen", "cbrand": "cbrand", "venchi": "venchi"}};
 function bars(){var m=0;['xwbar','kbnavbar','r116bar'].forEach(function(i){var e=document.getElementById(i);if(!e)return;var p=getComputedStyle(e).position;if(p!=='sticky'&&p!=='fixed')return;var r=e.getBoundingClientRect();if(r.top<170&&r.bottom>m&&r.height<260)m=r.bottom;});return m;}
 function chapters(){
  $$('#kbview .kbchap[data-kb]').forEach(function(ch){var id=ch.getAttribute('data-kb');if(id==='kbmap'||id==='check')return;
   var h2=ch.querySelector(':scope>h2');if(!h2)return;
   if(!ch.querySelector(':scope>.xl-ch')){var d=info(id);if(d){var b=document.createElement('div');b.className='xl-ch';
    var sb=(SRC[SITE]||{})[id],dup=false;if(sb){$$('img',ch).slice(0,4).forEach(function(x){if(!x.closest('.xl-ch')&&(x.getAttribute('src')||'').indexOf(sb)>=0)dup=true;});}
    var h2t=h2.textContent.toLowerCase();if(d.en&&h2t.indexOf(d.en.toLowerCase())>=0)d.en='';
    if(dup)b.classList.add('noimg');
    b.innerHTML=(dup?'':'<img src="img/kbmap/wide2/'+esc(id)+'.webp" alt="" loading="lazy" decoding="async"><span class="xl-chs"></span>')+'<div class="xl-cht"><span class="xl-st">'+esc(d.st)+'</span>'
     +(d.en?'<span class="xl-en">'+esc(d.en)+'</span>':'')+(d.lr?'<p class="xl-lr"><b>看完會</b>'+esc(d.lr)+'</p>':'')+(d.mt?'<small class="xl-mt">'+esc(d.mt)+'</small>':'')+'</div>';
    var im=b.querySelector('img');if(im)im.onerror=function(){im.remove();b.querySelector('.xl-chs').remove();b.querySelector('.xl-cht').style.marginTop='12px';};
    h2.parentNode.insertBefore(b,h2.nextSibling);}}
   var hs=$$(':scope>.kbsec>h3,:scope>section>h3',ch).filter(function(h){return h.textContent.trim();});
   var old=ch.querySelector(':scope>.xl-toc');
   if(hs.length<3){if(old)old.remove();return;}
   if(old&&+old.getAttribute('data-n')===hs.length)return;if(old)old.remove();
   var t=document.createElement('div');t.className='xl-toc';t.setAttribute('role','navigation');t.setAttribute('data-n',hs.length);
   t.innerHTML='<b>本章重點 '+hs.length+' 節（點一下跳過去）</b><ol>'+hs.map(function(h,i){return '<li><button type="button" data-i="'+i+'"><i>'+(i+1)+'</i>'+esc(h.textContent.trim().replace(/\s+/g,' ').slice(0,26))+'</button></li>';}).join('')+'</ol>';
   if(hs.length>8){t.classList.add('more');var mo=document.createElement('button');mo.type='button';mo.className='xl-mo';mo.textContent='看全部 '+hs.length+' 節 ▾';t.appendChild(mo);
    mo.addEventListener('click',function(){var on=t.classList.toggle('more');mo.textContent=on?'看全部 '+hs.length+' 節 ▾':'收起 ▴';});}
   t.addEventListener('click',function(e){var bt=e.target.closest('button[data-i]');if(!bt)return;var h=hs[+bt.getAttribute('data-i')];if(!h)return;
    var y=h.getBoundingClientRect().top+window.pageYOffset-bars()-14;try{window.scrollTo({top:y,behavior:'smooth'});}catch(x){window.scrollTo(0,y);}
    var sec=h.parentNode;sec.classList.add('xl-hit');setTimeout(function(){sec.classList.remove('xl-hit');},1500);});
   var anchor=ch.querySelector(':scope>.xl-ch')||h2, nx=anchor.nextSibling;
   while(nx&&nx.nodeType===1&&nx.classList.contains('kbdesc'))nx=nx.nextSibling;
   ch.insertBefore(t,nx);
  });}
 var tm=0;function later(){if(tm)return;tm=setTimeout(function(){tm=0;run();},250);}
 /* r247：首頁做完就不再掃；章節只在知識庫打開時處理（開頁時不跑），避免開頁時一直掃 4 萬個元素 */
 var HD=0;function homeDone(){return !!document.querySelector('.r59month')&&!document.querySelector('.r59h:not(.xl),.r59k:not(.xl),.r59kg:not(.xl)');}
 function run(){if(!HD){home();if(homeDone())HD=1;}if(document.body.classList.contains('kbon'))chapters();}
 function go(){run();var n=0,iv=setInterval(function(){if(HD){clearInterval(iv);return;}run();if(++n>20)clearInterval(iv);},500);
  var kv=document.getElementById('kbview');if(kv)new MutationObserver(function(){if(document.body.classList.contains('kbon'))later();}).observe(kv,{childList:true,subtree:true});
  new MutationObserver(function(){if(document.body.classList.contains('kbon'))later();}).observe(document.body,{attributes:true,attributeFilter:['class']});}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();
