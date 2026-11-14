/* r242 版面美術：首頁圖像化入口＋知識庫章節橫幅與本章重點（兩站共用，由 nav.js 的 xwlook 行載入） */
(function(){
 if(window.__xwLook) return; window.__xwLook=1;
 /* r246 子頁固定列：品牌頁、產區頁、更新日誌、獎勵圖牆的 .tools／.jump 原本 top:0，會躲到頂端選單列下面；背景漸層透明會讓下面的字疊上來 */
 (function(){
  if(!/\/(brands|regions|changelog|rewards)\.html$/.test(location.pathname)) return;
  var st=document.createElement('style'); st.id='xwstick-css';
  st.textContent='body .tools,body .jump{background:var(--bg,#0E0C0A)!important;box-shadow:0 8px 12px -8px rgba(0,0,0,.6)}html[data-xwmode=light] body .tools,html[data-xwmode=light] body .jump{box-shadow:0 8px 12px -10px rgba(0,0,0,.25)}';
  (document.head||document.documentElement).appendChild(st);
  function fix(){var x=document.getElementById('xwbar'),r=x?x.getBoundingClientRect():null,t=(r&&r.height&&getComputedStyle(x).position!=='static')?Math.max(0,Math.round(r.bottom)):0;
   [].forEach.call(document.querySelectorAll('.tools,.jump'),function(e){if(getComputedStyle(e).position==='sticky'&&e.style.top!==t+'px')e.style.top=t+'px';});}
  function go(){fix();var n=0,iv=setInterval(function(){fix();if(++n>20)clearInterval(iv);},300);addEventListener('resize',fix);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
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
 /* 工具卡：左邊金色圖示 */
 +'html:not(#_xa):not(#_xb) .r59t.xl{flex-direction:row!important;align-items:center!important;justify-content:flex-start!important;gap:11px!important}'
 +'html:not(#_xa):not(#_xb) .r59t.xl .xl-ti{flex:0 0 40px;height:40px;border-radius:11px;display:flex;align-items:center;justify-content:center;color:#E8CD8A;border:1px solid rgba(201,164,92,.45);background:radial-gradient(circle at 30% 25%,rgba(201,164,92,.28),rgba(201,164,92,.06))}'
 +'html:not(#_xa):not(#_xb) .r59t.xl.hi .xl-ti{color:#9FE3CB;border-color:rgba(127,209,181,.5);background:radial-gradient(circle at 30% 25%,rgba(127,209,181,.25),rgba(127,209,181,.05))}'
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

 /* ---------- 首頁 ---------- */
 function home(){
  $$('.r59h:not(.xl)').forEach(function(h){var t=h.textContent.trim(),e=EN[t];h.classList.add('xl');if(e)h.innerHTML=esc(t)+'<i>'+e+'</i>';});
  $$('.r59kg:not(.xl)').forEach(function(g){g.classList.add('xl');});
  $$('.r59k:not(.xl)').forEach(function(b){var k=(b.getAttribute('data-r59')||'').replace('kbg:','');if(!k)return;b.classList.add('xl');
   var im=document.createElement('img');im.className='xl-kim';im.alt='';im.loading='lazy';im.decoding='async';im.src='img/kbmap/wide/g_'+k+'.webp';
   im.onerror=function(){im.remove();};b.insertBefore(im,b.firstChild);});
  $$('.r59t:not(.xl)').forEach(function(t){var k=t.getAttribute('data-r59');if(!ICO[k])return;t.classList.add('xl');
   var w=document.createElement('div');w.className='xl-tt';while(t.firstChild)w.appendChild(t.firstChild);
   var i=document.createElement('i');i.className='xl-ti';i.setAttribute('aria-hidden','true');i.innerHTML=ICO[k];t.appendChild(i);t.appendChild(w);});
 }
 /* ---------- 知識庫章節 ---------- */
 function info(id){var c=document.querySelector('#kbview .kmp-card[data-c="'+id+'"]');if(!c)return null;
  var s=c.closest('.kmp-step'),no=s&&s.querySelector('.kmp-no'),sb=s&&s.querySelector('.kmp-sh b'),cards=s?$$('.kmp-card',s):[c];
  var p=c.querySelector('.kmp-tx>p');var lr=p?p.textContent.replace(/^看完會/,'').trim():'';
  return {en:(c.querySelector('.kmp-tx>em')||{}).textContent||'',lr:lr,mt:((c.querySelector('.kmp-tx>small')||{}).textContent||'').trim(),
   st:(no?'第 '+no.textContent.trim()+' 步・':'')+(sb?sb.textContent.trim():'')+'・第 '+(cards.indexOf(c)+1)+'／'+cards.length+' 章'};}
 var SRC={"w": {"scotch": "w_grains", "terms": "still", "cask": "w_staves", "wjt": "w_j_yama", "wbase": "w_terroir", "wgrape": "w_g_cabs", "wlaw": "w_bdx", "wworld": "ph_cognacvine", "winesp": "w_bdx", "weu": "w_bgn", "wam": "w_usa", "wau": "w_aus", "wtaste": "w_swirl", "bcog": "w_cogv", "bchn": "w_sorg", "bsake": "w_sake", "bspi": "w_cocktails", "wqa": "w_q_highball", "wsell": "w_pairing", "duty": "pour", "mbrand": "ph_glenfiddich", "mprod": "ob2_macallan-12y-dc", "mproc": "still_system", "blend": "w_blender", "sheets": "ph_glendronach", "pics": "ph_islay", "mind": "w_iris", "memop": "ob2_macallan-12y-dc"}, "c": {"t-basic": "snap2", "cbean": "pod2", "cmake": "roast", "ctype": "dmw", "ctaste": "w_c_wheel", "t-talk": "ob_c2732706011650", "k-scene": "ob_c2732706011990", "k-cfaq": "w_c_bloom", "k-best": "truffle", "k-story": "dubai", "k-mnemo": "w_c_tablet", "memoc": "ob_c2732706011650", "t-rule": "ob_c2732706012000", "t-allergen": "w_c_liq", "cbrand": "w_c_praline", "venchi": "ob_c2732895000940"}};
 function bars(){var m=0;['xwbar','kbnavbar','r116bar'].forEach(function(i){var e=document.getElementById(i);if(!e)return;var p=getComputedStyle(e).position;if(p!=='sticky'&&p!=='fixed')return;var r=e.getBoundingClientRect();if(r.top<170&&r.bottom>m&&r.height<260)m=r.bottom;});return m;}
 function chapters(){
  $$('#kbview .kbchap[data-kb]').forEach(function(ch){var id=ch.getAttribute('data-kb');if(id==='kbmap'||id==='check')return;
   var h2=ch.querySelector(':scope>h2');if(!h2)return;
   if(!ch.querySelector(':scope>.xl-ch')){var d=info(id);if(d){var b=document.createElement('div');b.className='xl-ch';
    var sb=(SRC[SITE]||{})[id],dup=false;if(sb){$$('img',ch).slice(0,4).forEach(function(x){if(!x.closest('.xl-ch')&&(x.getAttribute('src')||'').indexOf(sb)>=0)dup=true;});}
    var h2t=h2.textContent.toLowerCase();if(d.en&&h2t.indexOf(d.en.toLowerCase())>=0)d.en='';
    if(dup)b.classList.add('noimg');
    b.innerHTML=(dup?'':'<img src="img/kbmap/wide/'+esc(id)+'.webp" alt="" loading="lazy" decoding="async"><span class="xl-chs"></span>')+'<div class="xl-cht"><span class="xl-st">'+esc(d.st)+'</span>'
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
