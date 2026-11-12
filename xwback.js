/* r220 返回上一步（四站共用，由 nav.js 載入）
   1) 打開的畫面（我的架上、知識庫與分頁、全部資料一次看、抽考、比較、放大圖、目錄、搜尋…）都記進瀏覽器歷史：
      按手機返回鍵／左右滑＝關掉最上層畫面、回到剛剛的位置，不會直接離開網站。
   2) 頂端列最左邊加「‹」返回鈕：主畫面加到桌面（沒有瀏覽器返回鍵）時也能回上一步；沒有上一步時回本站首頁。 */
(function(){
 if(window.__xwBack)return;window.__xwBack=1;
 var D=document;
 function $(s){return D.querySelector(s);}
 function B(c){return !!(D.body&&D.body.classList.contains(c));}
 function clk(s){var e=typeof s==='string'?$(s):s;if(e)e.click();}
 function shown(s){var e=$(s);if(!e)return false;if(e.hidden)return false;var cs=getComputedStyle(e);return cs.display!=='none'&&cs.visibility!=='hidden';}
 /* 由下往上：越後面越上層 */
 var LAY=[
  {k:'shelf',on:function(){return B('shon');},close:function(){clk('#dsh');},open:function(){clk('#dsh');},hash:/^#shelf$/},
  {k:'kb',on:function(){return B('kbon');},close:function(){clk('#dkb');},open:function(){clk('#dkb');},hash:/^#kb/,
   sub:function(){var t=$('#kbview .kbnav.on');return t?t.getAttribute('data-kb')||'':'';},
   set:function(v){var t=$('#kbview .kbnav[data-kb="'+v+'"]');if(t&&!t.classList.contains('on'))t.click();}},
  {k:'doc',on:function(){var v=$('#shview');return !!(v&&v.classList.contains('docon'));},close:function(){if(window.xwShelfDocClose)window.xwShelfDocClose();},open:function(){clk('#shdocbtn');}},
  {k:'quiz',on:function(){return B('quizon');},close:function(){clk('#shquit');}},
  {k:'drawer',on:function(){return B('open')&&window.innerWidth<=900;},close:function(){D.body.classList.remove('open');}},
  {k:'filter',on:function(){return !!$('#fpanel.open');},close:function(){clk('#pclose');}},
  {k:'toc',on:function(){return !!$('#xwtocm.on');},close:function(){clk('#xwtocm');}},
  {k:'menu',on:function(){var m=$('#xwmenu');return !!(m&&!m.hidden);},close:function(){var m=$('#xwmenu');if(m)m.hidden=true;[].forEach.call(D.querySelectorAll('#xwbar [aria-expanded="true"]'),function(b){b.setAttribute('aria-expanded','false');});}},
  {k:'chap',on:function(){return shown('#r116sheet');},close:function(){clk('#r116sheet');}},
  {k:'cmp',on:function(){return B('cmpon');},close:function(){clk('#cmpv .x')||0;clk('#c20v .x');}},
  {k:'photo',on:function(){return B('plbon');},close:function(){clk('#plb');}},
  {k:'pic',on:function(){return !!$('#r109lb');},close:function(){clk('#r109lb');}},
  {k:'zoom',on:function(){return !!$('#kmp-zoom');},close:function(){var z=$('#kmp-zoom');if(z)z.remove();}},
  {k:'img',on:function(){return !!$('#xwlb.on');},close:function(){clk('#xwlb');}},
  {k:'calpv',on:function(){return shown('#cal-pv');},close:function(){clk('#cal-pv');}},
  {k:'search',on:function(){return !!$('#xws.on');},close:function(){clk('#xws .xwx');}}
 ];
 var BY={};LAY.forEach(function(L){BY[L.k]=L;});
 function tok(L){var s=L.sub?L.sub():'';return s?L.k+':'+s:L.k;}
 function now(){var a=[];LAY.forEach(function(L){try{if(L.on())a.push(tok(L));}catch(e){}});return a;}
 function key(t){return String(t).split(':')[0];}
 function m1(a,b){return a===b||(key(a)===key(b)&&(a.indexOf(':')<0||b.indexOf(':')<0));}
 function pre(a,b){if(a.length>b.length)return false;for(var i=0;i<a.length;i++)if(!m1(a[i],b[i]))return false;return true;}
 function eq(a,b){return a.length===b.length&&pre(a,b);}
 function implied(){var h=location.hash||'';return LAY.filter(function(L){return L.hash&&L.hash.test(h);}).map(function(L){return L.k;});}
 function mine(){var s=history.state;return s&&s.xwb?s:null;}
 function here(){var s=mine();return s?s.L:implied();}
 function keep(o){var s=history.state;var n={};if(s&&typeof s==='object')for(var k in s)n[k]=s[k];for(var k2 in o)n[k2]=o[k2];return n;}
 var applying=0,skip=0,loops=0;
 function check(){
  if(applying||skip)return;
  var n=now(),h=here();
  if(eq(n,h)){if(mine()&&n.join('|')!==h.join('|'))try{history.replaceState(keep({L:n}),'');}catch(e){}return;}
  if(pre(n,h)){ /* 用畫面上的按鈕關掉了：把多出來的歷史退掉 */
   var s=mine();
   if(s&&s.p&&loops<12){loops++;skip=1;try{history.scrollRestoration='manual';}catch(e){}try{history.back();}catch(e){skip=0;}setTimeout(function(){skip=0;try{history.scrollRestoration='auto';}catch(e){}},700);}
   else{try{history.replaceState(keep({xwb:1,L:n}),'');}catch(e){}}
   return;
  }
  loops=0;
  /* 上一層是不能重開的暫時畫面（選單、目錄…）且已經關了：直接換掉那一筆，不多疊一層 */
  var top=h[h.length-1],TL=top&&BY[key(top)];
  if(mine()&&TL&&!TL.open&&!n.some(function(c){return key(c)===key(top);})){try{history.replaceState(keep({L:n}),'');}catch(e){}return;}
  try{history.replaceState(keep({y:window.pageYOffset}),'');}catch(e){}
  try{history.pushState({xwb:1,p:1,L:n,y:window.pageYOffset},'',location.href);}catch(e){}
 }
 function to(target,y){
  applying=1;var n=now();
  for(var i=n.length-1;i>=0;i--){var k=key(n[i]),t=null;for(var j=0;j<target.length;j++)if(key(target[j])===k){t=target[j];break;}
   var L=BY[k];if(!L)continue;
   if(!t){try{L.close();}catch(e){}}
   else if(t!==n[i]&&t.indexOf(':')>0&&L.set){try{L.set(t.split(':').slice(1).join(':'));}catch(e){}}}
  var cur=now();
  target.forEach(function(t){var k=key(t),L=BY[k];if(!L)return;var have=cur.some(function(c){return key(c)===k;});
   if(!have&&L.open){try{L.open();}catch(e){}}
   if(t.indexOf(':')>0&&L.set){try{L.set(t.split(':').slice(1).join(':'));}catch(e){}}});
  function sc(){if(typeof y==='number'){try{window.scrollTo({top:y,behavior:'instant'});}catch(e){window.scrollTo(0,y);}}}
  setTimeout(sc,30);setTimeout(sc,320);
  setTimeout(function(){applying=0;var a=now();if(mine()&&!eq(a,target))try{history.replaceState(keep({L:a}),'');}catch(e){}},700);
 }
 window.addEventListener('popstate',function(){
  if(skip){ /* 我們自己退的：若退到的那一筆比現在多開了畫面，再退一次 */
   skip=0;var n=now(),h=here(),s=mine();
   if(!eq(n,h)&&pre(n,h)&&s&&s.p&&loops<12){loops++;skip=1;try{history.back();}catch(e){skip=0;}setTimeout(function(){skip=0;try{history.scrollRestoration='auto';}catch(e){}},700);return;}
   try{history.scrollRestoration='auto';}catch(e){}
   if(!eq(n,h)&&s){try{history.replaceState(keep({L:n}),'');}catch(e){}}
   else loops=0;
   return;}
  loops=0;var s=mine(),hs=history.state;to(s?s.L:implied(),hs&&typeof hs.y==='number'?hs.y:undefined);
 });
 /* 離開這一筆之前記下捲動位置（點商品卡等會換網址的動作） */
 D.addEventListener('click',function(e){if(e.target&&e.target.closest&&e.target.closest('#xwback'))return;
  try{history.replaceState(keep({y:window.pageYOffset}),'');}catch(x){}
  setTimeout(check,90);setTimeout(check,520);},true);
 D.addEventListener('keydown',function(e){if(e.key==='Escape'||e.key==='Enter')setTimeout(check,120);},true);
 window.addEventListener('hashchange',function(){setTimeout(check,350);});
 setInterval(check,1200);setTimeout(check,1500);

 /* ---------- 頂端「‹ 返回」鈕 ---------- */
 function home(){var p=location.pathname,m=p.match(/^\/[^\/]+\//);return m?m[0]:'/';}
 function atHome(){var p=location.pathname;return p===home()||p===home()+'index.html';}
 function toast(t){var d=$('#xwbktoast');if(!d){d=D.createElement('div');d.id='xwbktoast';D.body.appendChild(d);}d.textContent=t;d.classList.add('on');clearTimeout(d._t);d._t=setTimeout(function(){d.classList.remove('on');},1600);}
 function back(){
  var n=now();
  if(n.length&&!mine()){ /* 畫面不是從歷史開的：直接關最上層 */
   var L=BY[key(n[n.length-1])];if(L){try{L.close();}catch(e){}setTimeout(check,120);return;}}
  var moved=false;function mv(){moved=true;}
  window.addEventListener('popstate',mv);window.addEventListener('pagehide',mv);window.addEventListener('hashchange',mv);
  try{history.back();}catch(e){}
  setTimeout(function(){window.removeEventListener('popstate',mv);window.removeEventListener('hashchange',mv);
   if(moved)return;
   if(location.hash&&location.hash!=='#'){location.hash='';return;}
   if(!atHome()){location.href=home();return;}
   toast('已經在首頁了');},450);
 }
 window.__xwGoBack=back;
 var st=D.createElement('style');
 st.textContent='#xwbar #xwback{flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;gap:2px;min-width:38px;height:36px;padding:0 10px 0 6px;margin-right:4px;border-radius:999px;border:1px solid rgba(201,164,92,.42);background:#1A1712;color:#FBF1DC;font-weight:600;font-size:13px;line-height:1;cursor:pointer;-webkit-tap-highlight-color:transparent;box-sizing:border-box}'
  +'@media(max-width:420px){#xwbar #mb .xwmbt,#xwbar #xwtoc span{display:none}#xwbar #mb,#xwbar #xwtoc{min-width:40px;width:40px;padding:0;justify-content:center}}'
  +'html[data-xwmode=light] #xwbar #xwback,html[data-xwmode=light] #xwbar #xwtoc,html[data-xwmode=light] #xwbar #mb{background:#FFF8EA!important;color:#5A4318!important;border-color:#B48A3C!important}'
  +'#xwback svg{display:block}#xwback span{font-size:13px;letter-spacing:.5px}#xwback:active{background:rgba(201,164,92,.25)}'
  +'@media(max-width:420px){#xwbar #xwback span{display:none}#xwbar #xwback{padding:0;width:38px}}'
  +'#xwbar #xwsite{min-width:0;flex-shrink:1}#xwbar #xwsite>*{min-width:0}'
  +'#xwbktoast{position:fixed;left:50%;top:70px;transform:translateX(-50%);z-index:2147483647;padding:8px 16px;border-radius:999px;background:#1B1914;border:1px solid rgba(201,164,92,.5);color:#E8CD8A;font:600 14px/1.4 sans-serif;opacity:0;pointer-events:none;transition:opacity .2s}#xwbktoast.on{opacity:1}'
  +'@media print{#xwback{display:none!important}}';
 (D.head||D.documentElement).appendChild(st);
 function put(){var bar=D.getElementById('xwbar');if(!bar)return false;if(D.getElementById('xwback'))return true;
  var b=D.createElement('button');b.type='button';b.id='xwback';b.setAttribute('aria-label','回上一步');b.title='回上一步';
  b.innerHTML='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg><span>返回</span>';
  b.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();back();});
  bar.insertBefore(b,bar.firstChild);
  var mb=D.getElementById('mb');if(mb&&!mb.querySelector('.xwmbt')){[].slice.call(mb.childNodes).forEach(function(n){if(n.nodeType===3&&n.nodeValue.trim()){var sp=D.createElement('span');sp.className='xwmbt';sp.textContent=n.nodeValue;mb.replaceChild(sp,n);}});}
  return true;}
 if(!put()){var tries=0,iv=setInterval(function(){if(put()||++tries>60)clearInterval(iv);},150);}
})();
