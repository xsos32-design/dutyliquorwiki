/* ===========================================================
   小韋 · 免稅賣場工具組 共用連結列
   六站共用：改這一支，所有網頁同時更新
   https://xsos32-design.github.io/dutyliquorwiki/nav.js
   =========================================================== */
(function(){
 if(window.__xwNavLoaded) return; window.__xwNavLoaded=true;

 var GROUPS=[
  {g:'酒類', items:[
   {k:'wiki',  t:'酒類商品完整檔案', s:'564 支・話術／規格／圖片', ico:'🥃',
    u:'https://xsos32-design.github.io/dutyliquorwiki/'},
   {k:'promo', t:'活動比較卡',       s:'檔期異動・上下月比較',     ico:'🔁',
    u:'https://xsos32-design.github.io/promotion/'},
   {k:'card',  t:'折扣小卡',         s:'現場快查・折扣一覽',       ico:'🏷',
    u:'https://xsos32-design.github.io/promotion/card.html'}
  ]},
  {g:'巧克力', items:[
   {k:'choc',   t:'巧克力商品完整檔案', s:'172 項・9 大類・話術／商訓', ico:'🍫',
    u:'https://xsos32-design.github.io/chocolatewiki/'},
   {k:'cpromo', t:'活動比較卡',         s:'檔期異動・上下月比較',       ico:'🔁',
    u:'https://xsos32-design.github.io/chocolatepromo/'},
   {k:'ccard',  t:'折扣小卡',           s:'現場快查・折扣一覽',         ico:'🏷',
    u:'https://xsos32-design.github.io/chocolatepromo/card.html'}
  ]}
 ];
 var OWNER='小韋';

 function here(){
  var p=location.pathname.toLowerCase();
  if(/chocolatepromo/.test(p)) return /card\.html$/.test(p)?'ccard':'cpromo';
  if(/chocolatewiki/.test(p))  return 'choc';
  if(/dutyliquorwiki/.test(p)) return 'wiki';
  if(/card\.html$/.test(p))    return 'card';
  if(/promotion/.test(p))      return 'promo';
  return '';
 }
 var CUR=here(), CHOC=(CUR==='choc'||CUR==='cpromo'||CUR==='ccard');

 /* 兩條產品線各自的底色，讓連結列與所在網頁同色系 */
 var T = CHOC
  ? {bar:'rgba(21,14,9,.94)',  line:'rgba(214,168,110,.42)', edge:'rgba(214,168,110,.32)',
     hov:'rgba(214,168,110,.75)', on1:'rgba(214,168,110,.30)', on2:'rgba(214,168,110,.13)',
     onb:'rgba(214,168,110,.95)', ink:'#E0D2BE', ink2:'#F2D3A6', dim:'#8A7660',
     foot:'#1B120B', footink:'#CBBBA5', gold:'#F2D3A6'}
  : {bar:'rgba(8,14,24,.94)',  line:'rgba(201,164,92,.42)',  edge:'rgba(201,164,92,.32)',
     hov:'rgba(201,164,92,.75)',  on1:'rgba(201,164,92,.30)',  on2:'rgba(201,164,92,.13)',
     onb:'rgba(201,164,92,.95)',  ink:'#D8CDB4', ink2:'#FBF1DC', dim:'#8FA0B8',
     foot:'#0B1420', footink:'#B6C2D2', gold:'#E8CD8A'};

 var css=''
 +'#xwbar{position:fixed;left:0;right:0;top:0;z-index:2147483000;display:flex;align-items:center;gap:8px;'
 +'padding:6px 10px;background:'+T.bar+';border-bottom:1px solid '+T.line+';'
 +'backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);'
 +'font-family:"Noto Sans TC",-apple-system,"PingFang TC",sans-serif;overflow-x:auto;scrollbar-width:none}'
 +'#xwbar::-webkit-scrollbar{display:none}'
 +'#xwbar .xwg{display:inline-flex;align-items:center;gap:7px;white-space:nowrap}'
 +'#xwbar .xwgl{font-size:10px;letter-spacing:2px;color:'+T.dim+';padding:0 1px}'
 +'#xwbar .xwsep{flex:0 0 1px;align-self:stretch;margin:3px 3px;background:'+T.edge+'}'
 +'#xwbar .xwa{display:inline-flex;align-items:center;gap:6px;white-space:nowrap;text-decoration:none;'
 +'font-size:12.5px;line-height:1.2;padding:7px 12px;border-radius:999px;border:1px solid '+T.edge+';'
 +'color:'+T.ink+';background:rgba(255,255,255,.03);transition:all .13s}'
 +'#xwbar .xwa:hover{border-color:'+T.hov+';color:'+T.gold+'}'
 +'#xwbar .xwa:focus-visible{outline:2px solid '+T.gold+';outline-offset:2px}'
 +'#xwbar .xwa.on{background:linear-gradient(180deg,'+T.on1+','+T.on2+');'
 +'border-color:'+T.onb+';color:'+T.ink2+';font-weight:600}'
 +'#xwbar .xwa small{font-size:10px;opacity:.62;font-weight:400}'
 +'#xwbar .xwown{margin-left:auto;white-space:nowrap;font-size:11px;letter-spacing:.5px;color:'+T.dim+';padding-right:4px}'
 +'#xwbar .xwown b{color:'+T.gold+';font-weight:600}'
 +'#xwbar .xwown i{font-style:normal;color:#FFB4B4}'
 +'body{padding-top:var(--xwh,46px)!important}'
 +'#xwfoot{margin:26px 0 0;padding:16px 14px calc(18px + env(safe-area-inset-bottom));'
 +'border-top:1px solid '+T.line+';text-align:center;'
 +'font-family:"Noto Sans TC",-apple-system,"PingFang TC",sans-serif;'
 +'font-size:11.5px;line-height:1.9;color:'+T.footink+';background:'+T.foot+'}'
 +'#xwfoot b{color:'+T.gold+'}'
 +'#xwfoot .xwwarn{display:inline-block;margin-top:6px;padding:7px 14px;border-radius:8px;'
 +'border:1px solid rgba(233,90,90,.5);background:rgba(233,90,90,.09);color:#FFC2C2;font-size:11.5px;line-height:1.8}'
 +'@media(max-width:700px){#xwbar{gap:6px;padding:6px 8px}#xwbar .xwa{font-size:12px;padding:7px 10px}'
 +'#xwbar .xwa small{display:none}#xwbar .xwgl{display:none}#xwbar .xwown{font-size:10px}}'
 +'@media print{#xwbar,#xwfoot{display:none!important}body{padding-top:0!important}}';

 function build(){
  if(document.getElementById('xwbar')) return;
  var st=document.createElement('style'); st.id='xwcss'; st.textContent=css;
  document.head.appendChild(st);

  var bar=document.createElement('nav'); bar.id='xwbar';
  bar.setAttribute('aria-label','工具組導覽');
  var h='';
  GROUPS.forEach(function(G,gi){
   if(gi) h+='<span class="xwsep"></span>';
   h+='<span class="xwg"><span class="xwgl">'+G.g+'</span>';
   G.items.forEach(function(s){
    h+='<a class="xwa'+(s.k===CUR?' on':'')+'" href="'+s.u+'"'+(s.k===CUR?' aria-current="page"':'')+'>'
      +s.ico+' '+s.t+'<small>'+s.s+'</small></a>';
   });
   h+='</span>';
  });
  h+='<span class="xwown">製作／整理　<b>'+OWNER+'</b>　<i>⚠ 內部使用</i></span>';
  bar.innerHTML=h;
  document.body.insertBefore(bar,document.body.firstChild);

  function h2(){document.documentElement.style.setProperty('--xwh',bar.offsetHeight+'px');}
  h2(); window.addEventListener('resize',h2); setTimeout(h2,300);

  var basis = CHOC ? '現場 POP 與包裝標示' : '現場公告與酒標';
  var ft=document.createElement('footer'); ft.id='xwfoot';
  ft.innerHTML='本檔案由 <b>'+OWNER+'</b> 製作整理　·　僅供昇恆昌內部同仁工作參考'
   +'<br><span class="xwwarn">⚠️ 未經 '+OWNER+' 同意，不得轉載、複製、修改、外流或作任何商業用途；'
   +'亦不得提供予非公司同仁。內容如有異動以'+basis+'為準。</span>';
  document.body.appendChild(ft);
 }

 if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',build);
 else build();
})();
