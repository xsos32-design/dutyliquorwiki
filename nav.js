/* ===========================================================
   小韋 · 免稅酒類工具組 共用連結列
   三站共用：改這一支，三個網頁同時更新
   https://xsos32-design.github.io/dutyliquorwiki/nav.js
   =========================================================== */
(function(){
 if(window.__xwNavLoaded) return; window.__xwNavLoaded=true;

 var SITES=[
  {k:'wiki',  t:'酒類商品完整檔案', s:'565 支・話術／規格／圖片', ico:'🥃',
   u:'https://xsos32-design.github.io/dutyliquorwiki/'},
  {k:'promo', t:'活動比較卡',       s:'檔期異動・上下月比較',     ico:'🔁',
   u:'https://xsos32-design.github.io/promotion/'},
  {k:'card',  t:'折扣小卡',         s:'現場快查・折扣一覽',       ico:'🏷',
   u:'https://xsos32-design.github.io/promotion/card.html'}
 ];
 var OWNER='小韋';

 function here(){
  var p=location.pathname.replace(/\/+$/,'/');
  if(/card\.html$/i.test(p)) return 'card';
  if(/dutyliquorwiki/i.test(p)) return 'wiki';
  if(/promotion/i.test(p)) return 'promo';
  return '';
 }
 var CUR=here();

 var css=''
 +'#xwbar{position:fixed;left:0;right:0;top:0;z-index:2147483000;display:flex;align-items:center;gap:8px;'
 +'padding:6px 10px;background:rgba(8,14,24,.94);border-bottom:1px solid rgba(201,164,92,.42);'
 +'backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);'
 +'font-family:"Noto Sans TC",-apple-system,"PingFang TC",sans-serif;overflow-x:auto;scrollbar-width:none}'
 +'#xwbar::-webkit-scrollbar{display:none}'
 +'#xwbar .xwa{display:inline-flex;align-items:center;gap:6px;white-space:nowrap;text-decoration:none;'
 +'font-size:12.5px;line-height:1.2;padding:7px 12px;border-radius:999px;border:1px solid rgba(201,164,92,.32);'
 +'color:#D8CDB4;background:rgba(255,255,255,.03);transition:all .13s}'
 +'#xwbar .xwa:hover{border-color:rgba(201,164,92,.75);color:#E8CD8A}'
 +'#xwbar .xwa.on{background:linear-gradient(180deg,rgba(201,164,92,.30),rgba(201,164,92,.13));'
 +'border-color:rgba(201,164,92,.95);color:#FBF1DC;font-weight:600}'
 +'#xwbar .xwa small{font-size:10px;opacity:.62;font-weight:400}'
 +'#xwbar .xwown{margin-left:auto;white-space:nowrap;font-size:11px;letter-spacing:.5px;color:#8FA0B8;padding-right:4px}'
 +'#xwbar .xwown b{color:#E8CD8A;font-weight:600}'
 +'#xwbar .xwown i{font-style:normal;color:#FFB4B4}'
 +'body{padding-top:var(--xwh,46px)!important}'
 +'#xwfoot{margin:26px 0 0;padding:16px 14px calc(18px + env(safe-area-inset-bottom));'
 +'border-top:1px solid rgba(201,164,92,.35);text-align:center;'
 +'font-family:"Noto Sans TC",-apple-system,"PingFang TC",sans-serif;'
 +'font-size:11.5px;line-height:1.9;color:#B6C2D2;background:#0B1420}'
 +'#xwfoot b{color:#E8CD8A}'
 +'#xwfoot .xwwarn{display:inline-block;margin-top:6px;padding:7px 14px;border-radius:8px;'
 +'border:1px solid rgba(233,90,90,.5);background:rgba(233,90,90,.09);color:#FFC2C2;font-size:11.5px;line-height:1.8}'
 +'@media(max-width:700px){#xwbar{gap:6px;padding:6px 8px}#xwbar .xwa{font-size:12px;padding:7px 10px}'
 +'#xwbar .xwa small{display:none}#xwbar .xwown{font-size:10px}}'
 +'@media print{#xwbar,#xwfoot{display:none!important}body{padding-top:0!important}}';

 function build(){
  if(document.getElementById('xwbar')) return;
  var st=document.createElement('style'); st.id='xwcss'; st.textContent=css;
  document.head.appendChild(st);

  var bar=document.createElement('nav'); bar.id='xwbar';
  var h='';
  SITES.forEach(function(s){
   h+='<a class="xwa'+(s.k===CUR?' on':'')+'" href="'+s.u+'">'+s.ico+' '+s.t
     +'<small>'+s.s+'</small></a>';
  });
  h+='<span class="xwown">製作／整理　<b>'+OWNER+'</b>　<i>⚠ 內部使用</i></span>';
  bar.innerHTML=h;
  document.body.insertBefore(bar,document.body.firstChild);

  function h2(){document.documentElement.style.setProperty('--xwh',bar.offsetHeight+'px');}
  h2(); window.addEventListener('resize',h2);
  setTimeout(h2,300);

  var ft=document.createElement('footer'); ft.id='xwfoot';
  ft.innerHTML='本檔案由 <b>'+OWNER+'</b> 製作整理　·　僅供昇恆昌內部同仁工作參考'
   +'<br><span class="xwwarn">⚠️ 未經 '+OWNER+' 同意，不得轉載、複製、修改、外流或作任何商業用途；'
   +'亦不得提供予非公司同仁。內容如有異動以現場公告與酒標為準。</span>';
  document.body.appendChild(ft);
 }

 if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',build);
 else build();
})();
