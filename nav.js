/* ===========================================================
   小韋 · 免稅賣場工具組 共用連結列
   六站共用：改這一支，所有網頁同時更新
   https://xsos32-design.github.io/dutyliquorwiki/nav.js
   =========================================================== */
(function(){
 if(window.__xwNavLoaded) return; window.__xwNavLoaded=true;

 var N_W=659, N_C=200;   /* 商品數：build_search.py 每次重建搜尋資料時自動改寫 */
 var GROUPS=[
  {g:'活動', items:[
   {k:'cal',   t:'活動月曆',         s:'酒＋巧克力・幾號到幾號',   ico:'cal',
    u:'https://xsos32-design.github.io/promotion/calendar.html'}
  ]},
  {g:'酒類', items:[
   {k:'wiki',  t:'酒類速讀檔案', s:N_W+' 支・話術／規格／圖片', ico:'wiki',
    u:'https://xsos32-design.github.io/dutyliquorwiki/'},
   {k:'promo', t:'活動比較卡',       s:'檔期異動・上下月比較',     ico:'promo',
    u:'https://xsos32-design.github.io/promotion/'},
   {k:'card',  t:'折扣小卡',         s:'現場快查・折扣一覽',       ico:'card',
    u:'https://xsos32-design.github.io/promotion/card.html'},
   {k:'shelf', t:'我的架上',         s:'本月目標・獎勵・抽考',     ico:'shelf',
    u:'https://xsos32-design.github.io/dutyliquorwiki/#shelf'}
  ]},
  {g:'巧克力', items:[
   {k:'choc',   t:'巧克力速讀檔案', s:N_C+' 項・10 大類・話術／商訓', ico:'choc',
    u:'https://xsos32-design.github.io/chocolatewiki/'},
   {k:'cpromo', t:'活動比較卡',         s:'檔期異動・上下月比較',       ico:'promo',
    u:'https://xsos32-design.github.io/chocolatepromo/'},
   {k:'ccard',  t:'折扣小卡',           s:'現場快查・折扣一覽',         ico:'card',
    u:'https://xsos32-design.github.io/chocolatepromo/card.html'},
   {k:'cshelf', t:'我的架上',           s:'出清目標・Push Money・抽考', ico:'shelf',
    u:'https://xsos32-design.github.io/chocolatewiki/#shelf'}
  ]}
 ];
 var OWNER='小韋';

 function here(){
  var p=location.pathname.toLowerCase();
  if(/chocolatepromo/.test(p)) return /card\.html$/.test(p)?'ccard':'cpromo';
  if(/chocolatewiki/.test(p))  return 'choc';
  if(/dutyliquorwiki/.test(p)) return 'wiki';
  if(/calendar\.html$/.test(p)) return 'cal';
  if(/card\.html$/.test(p))    return 'card';
  if(/promotion/.test(p))      return 'promo';
  return '';
 }
 var CUR=here(), CHOC=(CUR==='choc'||CUR==='cpromo'||CUR==='ccard');

 /* 2026/10 起酒、巧克力同一套深藍金 */
 var T = {bar:'rgba(17,15,12,.94)',  line:'rgba(201,164,92,.42)',  edge:'rgba(201,164,92,.32)',
     hov:'rgba(201,164,92,.75)',  on1:'rgba(201,164,92,.30)',  on2:'rgba(201,164,92,.13)',
     onb:'rgba(201,164,92,.95)',  ink:'#D8CDB4', ink2:'#FBF1DC', dim:'#ADA69A',
     foot:'#171411', footink:'#CAC6BE', gold:'#E8CD8A'};

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
 +'#xwbar .xwa.xcal{border-color:'+T.onb+';color:'+T.ink2+';font-weight:600}'
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

 +'#xwbar .xwi{width:15px;height:15px;flex:0 0 auto}'
 +'#xwbar .xwsb{flex:0 0 auto;display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 13px;border-radius:999px;border:1px solid '+T.onb+';background:linear-gradient(180deg,'+T.on1+','+T.on2+');color:'+T.ink2+';font:600 12.5px "Noto Sans TC",-apple-system,"PingFang TC",sans-serif;cursor:pointer}'
 +'#xws{position:fixed;inset:0;z-index:2147483500;background:#0B0A07;display:none;overflow:auto;-webkit-overflow-scrolling:touch;padding:max(12px,env(safe-area-inset-top)) 12px 24px;font-family:"Noto Sans TC",-apple-system,"PingFang TC",sans-serif}'
 +'#xws.on{display:block}#xws .xwbx{max-width:680px;margin:0 auto}'
 +'#xws .xwrow{display:flex;gap:8px}'
 +'#xws input{flex:1;min-width:0;box-sizing:border-box;height:48px;border-radius:12px;border:1px solid #C9A45C;background:#1F1B16;color:#F3E9D2;font-size:16px;padding:0 14px;outline:none;font-family:inherit}'
 +'#xws .xwx{flex:0 0 48px;height:48px;border-radius:12px;border:1px solid #504A40;background:#1F1B16;color:#CAC6BE;font:600 14px inherit;cursor:pointer}'
 +'#xws .xwseg{display:flex;gap:6px;margin:10px 0 2px;background:none;border:0;padding:0}'
 +'#xws .xwseg button{height:32px;padding:0 13px;border-radius:999px;border:1px solid #504A40;background:transparent;color:#CAC6BE;font:500 13px inherit;cursor:pointer}'
 +'#xws .xwseg button.on{border-color:#C9A45C;background:rgba(201,164,92,.18);color:#F3E9D2}'
 +'#xws .xwhint{color:#ADA69A;font-size:12.5px;margin:8px 2px 10px;line-height:1.6}'
 +'#xws .xwr{display:grid;grid-template-columns:56px 1fr;gap:12px;align-items:center;padding:10px;border-radius:12px;background:#1F1B16;border:1px solid #39342D;margin-bottom:8px;text-decoration:none;color:#EDE6D6}'
 +'#xws .xwr:focus-visible{outline:2px solid #E8CD8A}'
 +'#xws .xwph{width:56px;height:56px;border-radius:8px;background:#fff center/contain no-repeat}'
 +'#xws .xwph.no{background:#28231C}'
 +'#xws .xwr b{color:#F3E9D2;display:block;font-size:14.5px;line-height:1.4;font-weight:700}'
 +'#xws .xwr span{display:block;font-size:12.5px;line-height:1.5;color:#ADA69A}'
 +'#xws .xwtg{display:inline-block;font-size:11px;font-weight:700;padding:2px 7px;border-radius:999px;margin-right:6px;vertical-align:1px;font-style:normal}'
 +'#xws .xwtg.w{background:rgba(201,164,92,.2);color:#E8CD8A;border:1px solid rgba(201,164,92,.5)}'
 +'#xws .xwtg.c{background:rgba(233,180,138,.14);color:#E9B48A;border:1px solid rgba(233,180,138,.45)}'
 +'#xws .xwpm{color:#7FD1B5!important;font-weight:700}'
 +'#xws .xwmd{color:#CFC4AE!important}'
 +'#xws .xwseg{flex-wrap:wrap}#xws .xwseg em{font-style:normal;opacity:.7;font-size:11.5px;margin-left:2px}'
 +'#xws .xwtg.a{background:rgba(127,209,181,.14);color:#7FD1B5;border:1px solid rgba(127,209,181,.45)}'
 +'#xws .xwtg.b,#xws .xwtg.r{background:rgba(160,180,230,.13);color:#B8C7EE;border:1px solid rgba(160,180,230,.42)}'
 +'#xws .xwtg.g{background:rgba(255,255,255,.08);color:#EDE6D6;border:1px solid rgba(255,255,255,.28)}'
 +'#xws .xwph.no{display:flex;align-items:center;justify-content:center;color:#C9A45C}#xws .xwph.no .xwi{width:24px;height:24px}'
 +'#xws .xwgrp{color:#ADA69A;font-size:12px;letter-spacing:2px;margin:14px 2px 8px}'
 +'#xws .xwchips{display:flex;flex-wrap:wrap;gap:8px}#xws .xwchip{height:34px;padding:0 14px;border-radius:999px;border:1px solid rgba(201,164,92,.45);background:#1F1B16;color:#EDE6D6;font:500 13.5px inherit;cursor:pointer}'
 +'#xwbar #xwsb{position:sticky;left:0;z-index:3;box-shadow:10px 0 14px -8px rgba(0,0,0,.85)}'
 +'details.bd[id],article.rg[id],section.tile,section.promo,section[id]{scroll-margin-top:76px}'
 +'body.xws-on{overflow:hidden}'
 +'#xwbar .xwdd{cursor:pointer;font-family:inherit}#xwbar .xwcar{font-size:10px;opacity:.7;margin-left:2px}'
 +'#xwmenu{position:fixed;z-index:2147483001;min-width:250px;max-width:calc(100vw - 16px);padding:6px;border-radius:14px;background:#17140f;border:1px solid rgba(201,164,92,.45);box-shadow:0 14px 34px rgba(0,0,0,.6)}'
 +'#xwmenu[hidden]{display:none}#xwmenu .xwmi{display:flex;gap:10px;align-items:center;padding:9px 10px;border-radius:10px;color:#EDE6D6;text-decoration:none}'
 +'#xwmenu .xwmi:hover,#xwmenu .xwmi.on{background:rgba(201,164,92,.16);color:#F2D89A}#xwmenu .xwi{width:18px;height:18px;flex:0 0 18px}'
 +'#xwmenu .xwmi b{display:block;font-size:13.5px;font-weight:600}#xwmenu .xwmi small{display:block;font-size:11px;opacity:.65;margin-top:1px}'
 +'#xwbar{padding-top:calc(6px + env(safe-area-inset-top,0px))!important;padding-left:max(8px,env(safe-area-inset-left,0px))!important;padding-right:max(8px,env(safe-area-inset-right,0px))!important}'
 +'/*r58own*/@media(max-width:520px){#xwbar .xwown{display:none!important}}'

 +'/*r59*/#xwbar{overflow:hidden!important;gap:8px!important;-webkit-mask-image:none!important;mask-image:none!important}'
 +'#xwbar .xwsite{flex:0 1 auto;min-width:0;display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 10px;border-radius:10px;border:0;background:transparent;color:'+T.gold+';font:700 15px "Noto Sans TC",-apple-system,"PingFang TC",sans-serif;cursor:pointer;-webkit-tap-highlight-color:transparent}'
 +'#xwbar .xwsite:hover,#xwbar .xwsite[aria-expanded=true]{background:rgba(201,164,92,.14)}'
 +'#xwbar .xwsite .xwsn{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}'
 +'#xwbar .xwsite .xwcar{font-size:11px;opacity:.8;flex:none}'
 +'#xwbar .xwsite .xwi{flex:none}'
 +'#xwbar #xwsb{margin-left:auto;position:static!important;box-shadow:none!important;height:36px;flex:none}'
 +'#xwbar #mb,#xwbar #fsz{flex:none;position:static;display:inline-flex;align-items:center;justify-content:center;gap:5px;height:36px;min-width:44px;margin:0;padding:0 11px;border-radius:999px;border:1px solid '+T.edge+';background:rgba(255,255,255,.03);color:'+T.ink+';font:600 13px "Noto Sans TC",-apple-system,"PingFang TC",sans-serif;cursor:pointer;box-sizing:border-box}'
 +'@media(min-width:901px){#xwbar #mb{display:none!important}}'
 +'@media(max-width:374px){#xwbar{gap:6px!important}#xwbar #mb{font-size:0;padding:0;width:40px;min-width:40px}#xwbar #mb i{font-size:17px;margin:0}#xwbar .xwsite{padding:0 6px;font-size:14px}#xwbar .xwsite>.xwi{display:none}#xwbar #xwsb{padding:0 10px}#xwbar #fsz{min-width:40px;padding:0 8px}}'
 +'html.xw1 body #menu{display:none!important}html.xw1{--mnh:0px!important}'
 +'#xwmenu .xwmg{font-size:11px;letter-spacing:2px;color:'+T.dim+';padding:8px 10px 3px}#xwmenu .xwmg:first-child{padding-top:3px}'
 +'#xwmenu{overflow:auto;-webkit-overflow-scrolling:touch}'
 +'#xws .xwmode{display:none;margin:10px 0 0;border:1px solid #504A40;border-radius:12px;overflow:hidden}'
 +'#xws.xwhasf .xwmode{display:flex}'
 +'#xws .xwmode button{flex:1;height:40px;border:0;background:transparent;color:#CAC6BE;font:600 14px "Noto Sans TC",-apple-system,"PingFang TC",sans-serif;cursor:pointer}'
 +'#xws .xwmode button.on{background:linear-gradient(180deg,rgba(201,164,92,.34),rgba(201,164,92,.18));color:#F3E9D2}'
 +'#xws.xwfind .xwseg,#xws.xwfind #xwsr{display:none}'
 +'#xws .xwfgo{display:none;width:100%;height:48px;margin-top:4px;border-radius:12px;border:1px solid #C9A45C;background:linear-gradient(180deg,rgba(201,164,92,.34),rgba(201,164,92,.18));color:#F3E9D2;font:700 15px "Noto Sans TC",-apple-system,"PingFang TC",sans-serif;cursor:pointer}'
 +'#xws.xwfind .xwfgo{display:block}#xws .xwfgo:disabled{opacity:.45;cursor:default}'
 +'/*r60toc*/#xwbar .xwtb{flex:none;display:inline-flex;align-items:center;justify-content:center;gap:5px;height:36px;min-width:44px;margin:0;padding:0 11px;border-radius:999px;border:1px solid '+T.edge+';background:rgba(255,255,255,.03);color:'+T.ink+';font:600 13px "Noto Sans TC",-apple-system,"PingFang TC",sans-serif;cursor:pointer;box-sizing:border-box;-webkit-tap-highlight-color:transparent}'
 +'#xwbar .xwtb .xwi{width:15px;height:15px}#xwbar .xwtb[aria-expanded=true]{border-color:'+T.onb+';color:'+T.ink2+'}'
 +'@media(max-width:374px){#xwbar #xwtoc{width:40px;min-width:40px;padding:0}#xwbar #xwtoc span{display:none}#xwbar #xwfsz{min-width:40px;padding:0 8px}}'
 +'#xwtocm{position:fixed;inset:0;z-index:2147482990;background:rgba(9,8,6,.55);display:none}#xwtocm.on{display:block}'
 +'#xwtocp{position:fixed;left:0;top:var(--xwh,49px);bottom:0;z-index:2147482995;width:min(330px,86vw);box-sizing:border-box;overflow:auto;-webkit-overflow-scrolling:touch;background:#12100C;border-right:1px solid rgba(201,164,92,.35);transform:translateX(-102%);transition:transform .2s ease;font-family:"Noto Sans TC",-apple-system,"PingFang TC",sans-serif;padding:0 0 calc(24px + env(safe-area-inset-bottom))}'
 +'#xwtocp.on{transform:none}'
 +'#xwtocp .xth{position:sticky;top:0;z-index:2;display:flex;align-items:center;height:54px;padding:0 16px;background:#12100C;border-bottom:1px solid rgba(201,164,92,.2);color:#F2D89A;font-weight:700;letter-spacing:2px;font-size:15px}'
 +'#xwtocp .xth small{margin-left:8px;font-weight:400;letter-spacing:0;font-size:12px;color:#ADA69A}'
 +'#xwtocp .xtg{padding:12px 16px 4px;font-size:11.5px;letter-spacing:2px;color:#ADA69A}'
 +'#xwtocp a{display:block;padding:10px 16px;color:#EDE6D6;text-decoration:none;font-size:14px;line-height:1.45;border-left:3px solid transparent}'
 +'#xwtocp a.sub{padding-left:28px;font-size:13px;color:#CFC4AE}'
 +'#xwtocp a.on{border-left-color:#E8CD8A;background:rgba(201,164,92,.12);color:#F2D89A;font-weight:700}'
 +'#xwtocp a:hover{background:rgba(201,164,92,.08)}'
 +'#xwtocp .xte{padding:16px;color:#ADA69A;font-size:13px;line-height:1.7}'
 +'.xwflash2{outline:3px solid #E8CD8A!important;outline-offset:3px;transition:outline-color 1.6s}'
 +'html.fsbig body>.xwzz{zoom:1.15}'
 +'html.xwsd2 body #xwsd{width:calc(var(--w)/2)}'
 +'html.xwsd2 body #ftop#ftop{left:calc(var(--l) + var(--w)/2)!important;width:calc(var(--w)/2)!important;border-left:1px solid rgba(201,164,92,.2)!important}'
 +'@media print{#xwbar,#xwfoot,#xws,#xwmenu,#xwtocp,#xwtocm{display:none!important}body{padding-top:0!important}html.fsbig body>.xwzz{zoom:1}}';

 var SVG={"cal": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M16 3v4M8 3v4M3 10h18\"/>", "wiki": "<path d=\"M10 2h4v4l2 3v12a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9l2-3z\"/><path d=\"M8 13h8\"/>", "promo": "<path d=\"M21 12a9 9 0 0 1-15.5 6.2L3 16\"/><path d=\"M3 12a9 9 0 0 1 15.5-6.2L21 8\"/><path d=\"M21 3v5h-5M3 21v-5h5\"/>", "card": "<path d=\"M12.6 2.6 21.4 11.4a2 2 0 0 1 0 2.8l-7.2 7.2a2 2 0 0 1-2.8 0L2.6 12.6A2 2 0 0 1 2 11.2V4a2 2 0 0 1 2-2h7.2a2 2 0 0 1 1.4.6z\"/><circle cx=\"7.5\" cy=\"7.5\" r=\"1.5\"/>", "shelf": "<path d=\"M3 9 4.5 4h15L21 9\"/><path d=\"M4 9v11h16V9\"/><path d=\"M3 9h18M9 20v-6h6v6\"/>", "choc": "<rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><path d=\"M5 9h14M5 15h14M12 3v18\"/>", "search": "<circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"m20 20-3.5-3.5\"/>", "map": "<path d=\"M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z\"/><path d=\"M9 4v14M15 6v14\"/>", "page": "<path d=\"M6 2h9l5 5v15H6z\"/><path d=\"M14 2v6h6\"/>", "layers": "<path d=\"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z\"/><path d=\"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65\"/><path d=\"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65\"/>"};
 function ic(k){return '<svg class="xwi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(SVG[k]||'')+'</svg>';}
 function build(){
  if(document.getElementById('xwbar')) return;
  var st=document.createElement('style'); st.id='xwcss'; st.textContent=css;
  document.head.appendChild(st);

  var bar=document.createElement('nav'); bar.id='xwbar';
  bar.setAttribute('aria-label','工具組導覽');
  /*r49dd*//*r59bar*/var NAMES={wiki:'酒類速讀檔案',choc:'巧克力速讀檔案',cal:'活動月曆',promo:'酒類活動比較卡',card:'酒類折扣小卡',cpromo:'巧克力活動比較卡',ccard:'巧克力折扣小卡'};
  var CI={wiki:'wiki',choc:'choc',cal:'cal',promo:'promo',card:'card',cpromo:'promo',ccard:'card'}[CUR]||'page';
  var h='<button type="button" class="xwsite xwdd" id="xwsite" aria-haspopup="true" aria-expanded="false" title="切換網站">'+ic(CI)+'<span class="xwsn">'+(NAMES[CUR]||'小韋工具組')+'</span><span class="xwcar">▾</span></button>'
   +'<button type="button" class="xwsb" id="xwsb" aria-label="搜尋：酒、巧克力、活動、品牌，或在卡片裡找字">'+ic('search')+'搜尋</button>';
  bar.innerHTML=h;
  document.body.insertBefore(bar,document.body.firstChild);
  (function(){var MN=document.getElementById('menu'),MB=document.getElementById('mb'),FS=document.getElementById('fsz');
   if(MN&&MB){bar.insertBefore(MB,bar.firstChild);if(!MB.getAttribute('aria-label'))MB.setAttribute('aria-label','目錄');if(FS)bar.appendChild(FS);document.documentElement.classList.add('xw1');}})();
  var mn=document.createElement('div'); mn.id='xwmenu'; mn.hidden=true; document.body.appendChild(mn);
  var openB=null;
  function closeM(){mn.hidden=true; if(openB){openB.setAttribute('aria-expanded','false');openB=null;}}
  bar.addEventListener('click',function(e){
   var b=e.target.closest?e.target.closest('button.xwdd'):null; if(!b)return;
   e.preventDefault(); if(openB===b){closeM();return;}
   mn.innerHTML=GROUPS.map(function(G){return '<div class="xwmg">'+G.g+'</div>'+G.items.map(function(s){return '<a class="xwmi'+(s.k===CUR?' on':'')+'" href="'+s.u+'"'+(s.k===CUR?' aria-current="page"':'')+'>'+ic(s.ico)+'<span><b>'+s.t+'</b><small>'+s.s+'</small></span></a>';}).join('');}).join('');
   var r=b.getBoundingClientRect(); mn.hidden=false;
   mn.style.maxHeight=Math.max(200,window.innerHeight-r.bottom-14)+'px';
   var w=mn.offsetWidth; mn.style.left=Math.max(8,Math.min(r.left,window.innerWidth-w-8))+'px'; mn.style.top=(r.bottom+6)+'px';
   if(openB)openB.setAttribute('aria-expanded','false'); openB=b; b.setAttribute('aria-expanded','true');
  });
  document.addEventListener('click',function(e){if(!openB)return; if(e.target.closest&&(e.target.closest('#xwmenu')||e.target.closest('button.xwdd')))return; closeM();});
  window.addEventListener('resize',closeM); bar.addEventListener('scroll',closeM); window.addEventListener('scroll',function(){if(!openB)return;var b=openB.getBoundingClientRect();if(b.bottom<0||b.top>window.innerHeight)closeM();},{passive:true});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeM();});
  mn.addEventListener('click',function(e){
   var a=e.target.closest?e.target.closest('a.xwmi'):null; if(!a)return;
   if(/#shelf$/.test(a.getAttribute('href'))){
    var same=(CUR==='wiki'&&/dutyliquorwiki/.test(a.href))||(CUR==='choc'&&/chocolatewiki/.test(a.href));
    var d=document.getElementById('dsh');
    if(same&&d){ e.preventDefault(); closeM(); if(!document.body.classList.contains('shon'))d.click(); window.scrollTo({top:0,behavior:'smooth'}); }
   }
  });
  bar.addEventListener('click',function(e){
   var a=e.target.closest?e.target.closest('a.xwa'):null; if(!a)return;
   if(!/#shelf$/.test(a.getAttribute('href')))return;
   var same=(CUR==='wiki'&&/dutyliquorwiki/.test(a.href))||(CUR==='choc'&&/chocolatewiki/.test(a.href));
   var d=document.getElementById('dsh');
   if(same&&d){ e.preventDefault(); if(!document.body.classList.contains('shon'))d.click(); window.scrollTo({top:0,behavior:'smooth'}); }
  });

  /*r60toc*/(function(){
   if(document.getElementById('mb')) return;
   var de=document.documentElement;
   var tb=document.createElement('button'); tb.type='button'; tb.id='xwtoc'; tb.className='xwtb'; tb.setAttribute('aria-label','本頁目錄'); tb.setAttribute('aria-expanded','false'); tb.innerHTML=ic('layers')+'<span>目錄</span>';
   bar.insertBefore(tb,bar.firstChild);
   var fz=document.createElement('button'); fz.type='button'; fz.id='xwfsz'; fz.className='xwtb'; fz.setAttribute('aria-label','字體放大／還原'); bar.appendChild(fz);
   var K='xw_font_big';
   function setBig(on){de.classList.toggle('fsbig',on);fz.textContent=on?'A−':'A+';fz.setAttribute('aria-pressed',on?'true':'false');
    [].forEach.call(document.body.children,function(c){if(/^(SCRIPT|STYLE|LINK)$/.test(c.tagName)||/^(xwbar|xwfoot|xwmenu|xwveil|xws|xwtocp|xwtocm|xwsd|xwlb)$/.test(c.id))return;var p=getComputedStyle(c).position;if(p==='fixed'||p==='sticky')return;c.classList.add('xwzz');});
    try{localStorage.setItem(K,on?'1':'0');}catch(e){}}
   var big=false;try{big=localStorage.getItem(K)==='1';}catch(e){}
   setBig(big);
   fz.addEventListener('click',function(){var y=window.pageYOffset/Math.max(1,document.documentElement.scrollHeight);setBig(!de.classList.contains('fsbig'));window.scrollTo(0,y*document.documentElement.scrollHeight);});
   var mk=document.createElement('div'); mk.id='xwtocm'; document.body.appendChild(mk);
   var pn=document.createElement('nav'); pn.id='xwtocp'; pn.setAttribute('aria-label','本頁目錄'); document.body.appendChild(pn);
   function vis(e){return !!(e&&e.getClientRects().length)&&getComputedStyle(e).visibility!=='hidden';}
   function chrome(e){return !!(e.closest&&e.closest('#xwbar,#xwfoot,#xwtocp,#xws,#xwmenu,footer'));}
   function clean(e){var c=e.cloneNode(true);[].forEach.call(c.querySelectorAll('.tile-n,button,.tag,svg,.n,.cnt,small'),function(z){z.parentNode.removeChild(z);});var ps=[];[].forEach.call(c.childNodes,function(n){var t=n.textContent.replace(/\s+/g,' ').trim();if(t)ps.push(t);});return ps.join(' ');}
   var ITEMS=[];
   function collect(){
    var it=[], p=location.pathname;
    var views=document.querySelectorAll('#views button,#views [role=tab]');
    if(views.length){it.push({g:'切換分頁'});[].forEach.call(views,function(v){var t=clean(v);it.push({t:t,el:v,view:1,on:v.getAttribute('aria-selected')==='true'||v.classList.contains('on')});});it.push({g:'這個分頁裡'});}
    if(/brands\.html$/.test(p)){var gs={};[].forEach.call(document.querySelectorAll('details.bd[id]'),function(d){if(!vis(d))return;var g=d.getAttribute('data-c')||'';var nb=d.querySelector('summary .nm b'),ni=d.querySelector('summary .nm i');var t=nb?(nb.textContent.trim()+(ni?' '+ni.textContent.trim():'')):d.id;if(gs[g]!==1){gs[g]=1;it.push({g:g||'品牌'});}it.push({t:t.slice(0,40),el:d,brand:1});});}
    else if(document.getElementById('cal-legend')){var cg=document.getElementById('cal-grid');if(cg)it.push({t:'月曆（日期色條）',el:document.querySelector('.cal-nav')||cg});
     [].forEach.call(document.querySelectorAll('#cal-legend > li'),function(li){if(!vis(li))return;if(li.classList.contains('cal-gh'))it.push({g:li.textContent.replace(/\s+/g,' ').trim()});else{var bb=li.querySelector('b'),ct=li.querySelector('.ct'),rg=li.querySelector('.rg');var tt=bb?bb.textContent:li.textContent;if(ct)tt=tt.replace(ct.textContent,'');tt=(ct?'〔'+ct.textContent.trim()+'〕':'')+tt.replace(/\s+/g,' ').trim()+(rg?'　'+rg.textContent.replace(/\s+/g,'').trim():'');it.push({t:tt.slice(0,60),el:li,sub:1});}});}
    else if(document.querySelector('section.card li.h')){it.push({g:'折扣分類'});[].forEach.call(document.querySelectorAll('section.card li.h'),function(li){it.push({t:li.textContent.replace(/\s+/g,' ').trim(),el:li});});}
    else{[].forEach.call(document.querySelectorAll('h2,h3'),function(h){if(!vis(h)||chrome(h))return;var t=clean(h);if(!t)return;it.push({t:t.slice(0,46),el:h,sub:h.tagName==='H3'});});}
    return it;}
   function paint(){ITEMS=collect();var h1=document.querySelector('h1');var h='<div class="xth">本頁目錄<small>'+esc((h1&&clean(h1))||NAMES[CUR]||document.title||'')+'</small></div>';var n=0;
    ITEMS.forEach(function(x,i){if(x.g!==undefined){h+='<div class="xtg">'+esc(x.g)+'</div>';return;}n++;h+='<a href="#" data-i="'+i+'" class="'+(x.sub?'sub':'')+(x.on?' on':'')+'">'+esc(x.t)+'</a>';});
    if(!n)h+='<div class="xte">這一頁內容只有一段，往下捲就能看完。</div>';
    pn.innerHTML=h;}
   function open(v){if(v)paint();pn.classList.toggle('on',v);mk.classList.toggle('on',v);tb.setAttribute('aria-expanded',v?'true':'false');}
   function isOpen(){return pn.classList.contains('on');}
   tb.addEventListener('click',function(e){e.preventDefault();open(!isOpen());});
   mk.addEventListener('click',function(){open(false);});
   document.addEventListener('keydown',function(e){if(e.key==='Escape'&&isOpen())open(false);});
   pn.addEventListener('click',function(e){var a=e.target.closest('a[data-i]');if(!a)return;e.preventDefault();var x=ITEMS[+a.getAttribute('data-i')];if(!x||!x.el)return;open(false);
    if(x.view){x.el.click();setTimeout(function(){window.scrollTo({top:0});},60);return;}
    var el=x.el;if(x.brand&&el.tagName==='DETAILS')el.open=true;
    var y=el.getBoundingClientRect().top+window.pageYOffset-bar.offsetHeight-12;
    try{window.scrollTo({top:Math.max(0,y),behavior:'instant'});}catch(_){window.scrollTo(0,Math.max(0,y));}
    el.classList.add('xwflash2');setTimeout(function(){el.classList.remove('xwflash2');},1800);});
  })();
  function h2(){document.documentElement.style.setProperty('--xwh',bar.offsetHeight+'px');}
  h2(); window.addEventListener('resize',h2); setTimeout(h2,300);
  /*r56veil*/(function(){
   var st=document.createElement('style');
   st.textContent='#xwveil{position:fixed;inset:0;z-index:2147483646;display:flex;align-items:center;justify-content:center;background:rgba(11,10,9,.72);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);opacity:0;transition:opacity .12s;pointer-events:none}'
    +'#xwveil.on{opacity:1;pointer-events:auto}#xwveil div{display:flex;align-items:center;gap:10px;padding:12px 18px;border-radius:14px;background:#1B1914;border:1px solid rgba(201,164,92,.5);color:#F2D89A;font:600 14px "Noto Sans TC",-apple-system,"PingFang TC",sans-serif}'
    +'#xwveil i{width:16px;height:16px;border-radius:50%;border:2px solid rgba(242,216,154,.3);border-top-color:#F2D89A;animation:xwsp .7s linear infinite}@keyframes xwsp{to{transform:rotate(360deg)}}';
   document.head.appendChild(st);
   var v=document.createElement('div');v.id='xwveil';v.innerHTML='<div><i></i><span></span></div>';document.body.appendChild(v);
   var tm=null;
   function hide(){v.classList.remove('on');clearTimeout(tm);}
   document.addEventListener('click',function(e){
    if(e.defaultPrevented||e.button>0||e.metaKey||e.ctrlKey||e.shiftKey)return;
    var a=e.target.closest?e.target.closest('#xwbar a.xwa,#xwmenu a.xwmi'):null;if(!a||a.target==='_blank')return;
    var u;try{u=new URL(a.href,location.href);}catch(x){return;}
    if(u.origin===location.origin&&u.pathname===location.pathname)return;
    var t=(a.querySelector('b')||a).textContent.trim();
    v.querySelector('span').textContent='正在開啟「'+t+'」…';v.classList.add('on');
    clearTimeout(tm);tm=setTimeout(hide,9000);
   });
   window.addEventListener('pageshow',hide);
  })();
  /*r50sd*/(function(){
   var ft=document.getElementById('ftop'); if(!ft) return;
   var st=document.createElement('style'); st.id='xwsdcss';
   st.textContent='html body #xwsd{position:fixed;display:none;flex-direction:column;align-items:center;justify-content:center;gap:2px;z-index:57;padding:0;margin:0;cursor:pointer;'
    +'--w:min(calc(100vw - 32px),440px);--l:calc(50% - var(--w)/2);height:60px;bottom:calc(14px + env(safe-area-inset-bottom));left:var(--l);'
    +'background:#1B1914;border:1px solid rgba(201,164,92,.45);border-right:0;border-radius:20px 0 0 20px;box-shadow:0 14px 30px -14px rgba(0,0,0,.95);'
    +'color:#E8CD8A;font:600 10.5px/1 "Microsoft JhengHei",system-ui,-apple-system,"PingFang TC","Noto Sans TC",sans-serif;letter-spacing:.5px;transition:opacity .35s ease;-webkit-tap-highlight-color:transparent}'
    +'html body #xwsd span{display:block;white-space:nowrap}html body #xwsd svg{width:18px;height:18px}'
    +'html.xwsd5 body #xwsd{width:calc(var(--w)/5)}'
    +'html.xwsd5 body #fback#fback{left:calc(var(--l) + var(--w)/5)!important;width:calc(var(--w)/5)!important;border-radius:0!important;border-left:1px solid rgba(201,164,92,.2)!important}'
    +'html.xwsd5 body #pnwrap#pnwrap{left:calc(var(--l) + var(--w)*2/5)!important;width:calc(var(--w)*2/5)!important}'
    +'html.xwsd5 body #ftop#ftop{left:calc(var(--l) + var(--w)*4/5)!important;width:calc(var(--w)/5)!important}'
    +'html.xwsd4 body #xwsd{width:calc(var(--w)/4)}'
    +'html.xwsd4 body #pnwrap#pnwrap{left:calc(var(--l) + var(--w)/4)!important;width:calc(var(--w)/2)!important;border-radius:0!important;border-left:1px solid rgba(201,164,92,.2)!important}'
    +'html.xwsd4 body #ftop#ftop{left:calc(var(--l) + var(--w)*3/4)!important;width:calc(var(--w)/4)!important}'
    +'@media print{html body #xwsd{display:none!important}}';
   document.head.appendChild(st);
   var b=document.createElement('button'); b.type='button'; b.id='xwsd'; b.setAttribute('aria-label','全站搜尋');
   b.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg><span>搜尋</span>';
   document.body.appendChild(b);
   b.addEventListener('click',function(e){ e.preventDefault(); var t=document.getElementById('xwsb'); if(t) t.click(); });
   var root=document.documentElement, fb=document.getElementById('fback'), pn=document.getElementById('pnwrap');
   function sync(){
    var cf=getComputedStyle(ft), on=cf.display!=='none' && cf.visibility!=='hidden';
    var five=fb && getComputedStyle(fb).display!=='none';
    var four=!five && pn && getComputedStyle(pn).display!=='none';
    root.classList.toggle('xwsd5',on&&!!five); root.classList.toggle('xwsd4',on&&!!four); root.classList.toggle('xwsd2',on&&!five&&!four);
    b.style.display=on?'flex':'none';
    b.style.opacity=cf.opacity;
   }
   sync(); setInterval(sync,400); window.addEventListener('scroll',function(){requestAnimationFrame(sync);},{passive:true});
  })();

  var basis = CHOC ? '現場 POP 與包裝標示' : '現場公告與酒標';
  var ft=document.createElement('footer'); ft.id='xwfoot';
  ft.innerHTML='本檔案由 <b>'+OWNER+'</b> 製作整理　·　僅供昇恆昌內部同仁工作參考'
   +'<br><span class="xwwarn">未經 '+OWNER+' 同意，不得轉載、複製、修改、外流或作任何商業用途；'
   +'亦不得提供予非公司同仁。內容如有異動以'+basis+'為準。</span>';
  document.body.appendChild(ft);
 }

 /* ── 全站搜尋：酒＋巧克力，一次搜完 ── */
 var XS=(function(){
 var T="妝晉齒滿齋漣駐輸穩敗織臟別順稜蘋興擷廳繾賀澀徵帳聖價絢峽際將識鵝窯觀鉅噴連濁隊薑蹟報廠瓊項請蠔畝歡紋畫膩裡籠華鋪遺綿證貓崙啟奪頌丟屬縷銀毀壇錐給鍵悅導殼撲養縈繪儲龜圍擾壘師郵這蔭減醞礦澤鑞蕩錢討東錯慶褲數閃濱銷熾鎖趙療巒藍筆叢瓏譽盡還僅職劑勝侖滯齡嗆強響買轉貿與蝕祕執淵橫籃唸單業併櫟禪變沒鮋灘慮韻衝學圓鑽摺灑爾譯紀輒攤鴉槍財潤視倖換趕灣見閘嶺暫卻專鑄宮暈莊鑑夢産碼稱營親機歷線羅牆嬰騎擇錦棲甕幟滾講頭彙農擠諾緣煙獺績繡檔榲鷹納璽電喚軋夠藪擬繽膽辭擱雞塵勵細逕媽飽殘籌勻計動頁賴誕竄莖饗舊嶇對紐騰歸饒雋糧鵲課檢陳頃為餞驟磚遜訊係臺誦優攝簽關悶禮罌蘚窮屢暉觸茲週棟跡軸鱷較澆兒烏鄰運盃曠捲瀧膚瑪麥頒載則盧賃側鋼適窩術釀權蓽隻銘極腦豔蘇癒鹹鐘銜滷駒誠懸侶級佔濾鑰倉貢湧嚇蓋鋸漬續寶凍曉兩違掃餵傑軒歲盪蘆隸爭蒼嘗託麴臘雖鳴錄癮愛蘭瀨鍾諮額詩斂謐資遷純質霧棗種衛統針選韋拋銅備競帶渦掛岡認獎顛馴獲經綴餅雲發綺謎覓緑監誌夾議輩顆處眾訪臨薩欄雙擁馬銳盤說締覽纖讚揚緒覺偽輔網欖內輝艦纏詞鍍紛巔訓類鄧磯護節險乾睞陽鮪漸喬燦薔談寬園獨饞傳魚鴻搶聽隨醬鹽緩雜涼轟戲嶼堊紮鏽島蟲爛諺製緋鳥漲鎊醫繞鐸渾從韃倫該於緻湯馭貯嚀邏葉凱潔韓約龍紅迴無偉嚕蘊餓綁團漢場號譜彌潑販壯徑規勳麯畢輯務準鴨實話孫結爐檜構攪韌產甦進幹間誰領購嚨棄環難懇評龐賢壺靈麼緯皺揮憶廈鎮鍋陸飯當總慣貨櫸頂腳訝驥驅贏繼標豐寫審災醃調壽堅車廢損籤傷闢麵擋緊後溫鉛疊嚴捨貼組義脫訂會鳳艷飛軟驕賽樓塊殺齊獸穀廚冊們鋒稅誤彿綠蝦鏈餾狀夥燉辦絕裊榮長達謹斷絨廣劇曬擊鑿註濕蔔飾歐軍遞劍裝莢貧張麗嚥靂隴蒔呂檸勢鄉搖願庫國戰參鱘餡髮魷滲駁協櫃過語萬燒鮮綻澱圖鏃禦邁琺獵鷗璉維濃補藥屆擔覲勛諧婦舉攜糾塢聯開頓輪層隱飆貝鮭駿懷邊爍蘿剛漿離紳聲徹飢稈顏壓橋敘撐緞輕練崗亞訣穫遠駕勞塗閉題燻樹許紡書謝個幫篩濟億謬決貴淪擺躍鏡須檻詢厲幣臍應樸體嬌鯖藝顯靜飲潛瀰儂燈礎昇習鮑釋錠膠鋁貫輾範況罈壞確驗陣襯闆讀繩瀾撫綢復淺鉤蔘燼貳驤湊積噸鈷聳閒彈繚紙賦礫聞紹閣編時縮讓楓負鱸熱鏟曆顧撻鈴點魯楊員刪飴鬱寧濤瑩軀樑豬羈櫚萊創滸測訴餘階亂賜薦奧試頗鍛驚預館氣複費嗎厭檳錫櫻嶄謂傾飄賞腸條奮綜鈔暢遊氈鶴並誘猶獻踐尋蠟賣脈樂風嘆窺沖陰絲麩樣儀設鍊鷺詳蔥據雛鑒現記勁襲淨採匯蓮煉幾憑儷論彎賓鈦鶯恆誼問贈廟艱黃態簡燙劃虛縣艙頸濫責區贊終築擴鹼門戶摻異鬆鳶鯛篤兌縱繹嚐菸飼綣來鐵詮脹",S="妆晋齿满斋涟驻输稳败织脏别顺棱苹兴撷厅缱贺涩征帐圣价绚峡际将识鹅窑观巨喷连浊队姜迹报厂琼项请蚝亩欢纹画腻里笼华铺遗绵证猫仑启夺颂丢属缕银毁坛锥给键悦导壳扑养萦绘储龟围扰垒师邮这荫减酝矿泽镴荡钱讨东错庆裤数闪滨销炽锁赵疗峦蓝笔丛珑誉尽还仅职剂胜仑滞龄呛强响买转贸与蚀秘执渊横篮念单业并栎禅变没鲉滩虑韵冲学圆钻折洒尔译纪辄摊鸦枪财润视幸换赶湾见闸岭暂却专铸宫晕庄鉴梦产码称营亲机历线罗墙婴骑择锦栖瓮帜滚讲头汇农挤诺缘烟獭绩绣档榅鹰纳玺电唤轧够薮拟缤胆辞搁鸡尘励细迳妈饱残筹匀计动页赖诞窜茎飨旧岖对纽腾归饶隽粮鹊课检陈顷为饯骤砖逊讯系台诵优摄签关闷礼罂藓穷屡晖触兹周栋迹轴鳄较浇儿乌邻运杯旷卷泷肤玛麦颁载则卢赁侧钢适窝术酿权荜只铭极脑艳苏愈咸钟衔卤驹诚悬侣级占滤钥仓贡涌吓盖锯渍续宝冻晓两违扫喂杰轩岁荡芦隶争苍尝托曲腊虽鸣录瘾爱兰濑钟咨额诗敛谧资迁纯质雾枣种卫统针选韦抛铜备竞带涡挂冈认奖颠驯获经缀饼云发绮谜觅绿监志夹议辈颗处众访临萨栏双拥马锐盘说缔览纤赞扬绪觉伪辅网榄内辉舰缠词镀纷巅训类邓矶护节险干睐阳鲔渐乔灿蔷谈宽园独馋传鱼鸿抢听随酱盐缓杂凉轰戏屿垩扎锈岛虫烂谚制绯鸟涨镑医绕铎浑从鞑伦该于致汤驭贮咛逻叶凯洁韩约龙红回无伟噜蕴饿绑团汉场号谱弥泼贩壮径规勋曲毕辑务准鸭实话孙结炉桧构搅韧产苏进干间谁领购咙弃环难恳评庞贤壶灵么纬皱挥忆厦镇锅陆饭当总惯货榉顶脚讶骥驱赢继标丰写审灾腌调寿坚车废损签伤辟面挡紧后温铅叠严舍贴组义脱订会凤艳飞软骄赛楼块杀齐兽谷厨册们锋税误佛绿虾链馏状伙炖办绝袅荣长达谨断绒广剧晒击凿注湿卜饰欧军递剑装荚贫张丽咽雳陇莳吕柠势乡摇愿库国战参鲟馅发鱿渗驳协柜过语万烧鲜绽淀图镞御迈珐猎鸥琏维浓补药届担觐勋谐妇举携纠坞联开顿轮层隐飙贝鲑骏怀边烁萝刚浆离绅声彻饥秆颜压桥叙撑缎轻练岗亚诀获远驾劳涂闭题熏树许纺书谢个帮筛济亿谬决贵沦摆跃镜须槛询厉币脐应朴体娇鲭艺显静饮潜弥侬灯础升习鲍释锭胶铝贯辗范况坛坏确验阵衬板读绳澜抚绸复浅钩参烬贰骧凑积吨钴耸闲弹缭纸赋砾闻绍阁编时缩让枫负鲈热铲历顾挞铃点鲁杨员删饴郁宁涛莹躯梁猪羁榈莱创浒测诉余阶乱赐荐奥试颇锻惊预馆气复费吗厌槟锡樱崭谓倾飘赏肠条奋综钞畅游毡鹤并诱犹献践寻蜡卖脉乐风叹窥冲阴丝麸样仪设炼鹭详葱据雏鉴现记劲袭净采汇莲炼几凭俪论弯宾钛莺恒谊问赠庙艰黄态简烫划虚县舱颈滥责区赞终筑扩碱门户掺异松鸢鲷笃兑纵绎尝烟饲绻来铁诠胀",M={};for(var i=0;i<T.length;i++)M[T.charAt(i)]=S.charAt(i);
 var AB={"rs": ["皇家礼炮", "royalsalute"], "gf": ["格兰菲迪", "glenfiddich"], "tgl": ["格兰利威", "glenlivet"], "hp": ["高原骑士", "highlandpark"], "kvl": ["噶玛兰", "kavalan"], "kkl": ["金门高粱", "金酒"], "jw": ["约翰走路", "johnniewalker"], "hsy": ["轩尼诗", "hennessy"], "bld": ["bruichladdich", "octomore"], "gn": ["格兰杰", "glenmorangie"], "vcp": ["凯歌", "veuveclicquot"], "dp": ["香槟王", "domperignon"], "mc": ["酩悦", "moet"], "adb": ["黑桃", "armanddebrignac"], "balv": ["百富", "balvenie"], "dal": ["大摩", "dalmore"], "cb": ["云雾之湾", "cloudybay"], "jb": ["金宾", "jimbeam"], "gdronach": ["格兰多纳", "glendronach"], "lt": ["路易十三", "louisxiii"], "xiii": ["路易十三", "louisxiii"]},VOL={"700": ["700ml", "07l", "70cl"], "700ml": ["700ml", "07l", "70cl"], "07": ["700ml", "07l", "70cl"], "07l": ["700ml", "07l", "70cl"], "70cl": ["700ml", "07l", "70cl"], "1l": ["1l", "1000ml", "1公升", "1升"], "1000ml": ["1l", "1000ml", "1公升", "1升"], "1公升": ["1l", "1000ml", "1公升", "1升"], "1升": ["1l", "1000ml", "1公升", "1升"], "1000": ["1l", "1000ml", "1公升", "1升"], "750": ["750ml", "075l", "75cl"], "750ml": ["750ml", "075l", "75cl"], "075": ["750ml", "075l", "75cl"], "075l": ["750ml", "075l", "75cl"], "75cl": ["750ml", "075l", "75cl"], "500ml": ["500ml", "05l", "50cl"], "05l": ["500ml", "05l", "50cl"], "50cl": ["500ml", "05l", "50cl"]};
 function sc(s){var o='';for(var i=0;i<s.length;i++){var c=s.charAt(i);o+=M[c]||c;}return o;}
 function key(t){t=String(t==null?'':t).toLowerCase();try{t=t.normalize('NFD').replace(/[̀-ͯ]/g,'');}catch(e){}
  return sc(t.replace(/[\s'’·・\-–—_.,，。()（）]/g,''));}
 function alts(tok){var b=key(tok);if(!b)return [];var a=[b];if(AB[b])a=(b.length<=2?[]:a).concat(AB[b]);
  var m=/^(\d{1,2})(y|yo|yr|yrs|year|years|年)$/.exec(b);if(m){var n=m[1];a=[n+'年',n+'year',n+'yo',n+'y'];}
  if(VOL[b])a=a.concat(VOL[b]);return a;}
 function words(q){return String(q||'').split(/\s+/).filter(Boolean);}
 function match(q,k){var w=words(q);return w.every(function(t){var a=alts(t);for(var i=0;i<a.length;i++)if(k.indexOf(a[i])>=0)return true;return false;});}
 function lev(a,b){if(Math.abs(a.length-b.length)>2)return 9;var p=[],i,j;for(j=0;j<=b.length;j++)p[j]=j;
  for(i=1;i<=a.length;i++){var c=[i];for(j=1;j<=b.length;j++)c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a.charAt(i-1)===b.charAt(j-1)?0:1));p=c;}return p[b.length];}
 function fix(tok,vocab){var b=key(tok);if(!/^[a-z]{4,}$/.test(b))return null;var lim=b.length<=6?1:2,best=null,bd=9;
  for(var w in vocab){if(w===b)return null;var d=lev(b,w);if(d<bd||(d===bd&&vocab[w]>vocab[best])){bd=d;best=w;}}
  return bd<=lim?best:null;}
 return {key:key,alts:alts,match:match,words:words,fix:fix};
})();
 var SIDX=null, SLOAD=null, SCAT='all', SVOC=null, SN=null;
 var SURL='https://xsos32-design.github.io/dutyliquorwiki/search.json';
 /* r36 全站統一搜尋：酒、巧克力、活動、品牌、產區桶型、頁面工具 */
 var TYPN={w:'酒',c:'巧克力',a:'活動',b:'品牌',r:'產區',g:'頁面'}, TYPO={w:0,c:0,b:1,r:1,a:2,g:3};
 var CATS=[['all','全部'],['w','酒'],['c','巧克力'],['a','活動'],['br','品牌・產區'],['g','頁面']];
 var QUICK=['麥卡倫','Godiva','滿額贈','任 2 件','雪莉桶','艾雷島','送禮'];
 function norm(t){ return XS.key(t); }
 function loadIdx(){
  if(SIDX) return Promise.resolve(SIDX);
  if(!SLOAD) SLOAD=fetch(SURL,{cache:'no-cache'}).then(function(r){return r.json();}).then(function(j){
    SN=j.n||null;
    SIDX=j.items.map(function(x){ x.k=norm([x.n,x.e,x.c,x.q,x.s==='w'||x.s==='c'?'':x.m,(x.s==='w'?x.i:'')].join(' ')); x.kn=norm((x.n||'')+' '+(x.e||'')); return x; }); return SIDX; });
  return SLOAD;
 }
 function esc(t){ return String(t==null?'':t).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
 function hintTxt(){ return SN?('酒類 '+N_W+' 支・巧克力 '+N_C+' 項・活動 '+SN.a+'・品牌 '+SN.b+'・產區桶型 '+SN.r+'・頁面 '+SN.g+'。打字就出現，按 Enter 直接開第一筆。')
   :('酒類 '+N_W+' 支＋巧克力 '+N_C+' 項，也找得到活動、品牌、產區與頁面。打字就出現，按 Enter 直接開第一筆。'); }
 function recent(){ try{ return JSON.parse(localStorage.getItem('xwsRecent')||'[]'); }catch(e){ return []; } }
 function remember(t){ t=String(t||'').trim(); if(!t) return; try{ var r=recent().filter(function(x){return x!==t;}); r.unshift(t); localStorage.setItem('xwsRecent',JSON.stringify(r.slice(0,8))); }catch(e){} }
 function inCat(x,c){ c=c||SCAT; if(c==='all') return true; if(c==='br') return x.s==='b'||x.s==='r'; return x.s===c; }
 function sbuild(){
  var o=document.getElementById('xws'); if(o) return o;
  o=document.createElement('div'); o.id='xws'; o.setAttribute('role','dialog'); o.setAttribute('aria-label','全站搜尋');
  o.innerHTML='<div class="xwbx"><div class="xwrow"><input id="xwsq" type="search" enterkeyhint="search" autocomplete="off" placeholder="搜酒、巧克力、活動、品牌、產區…"><button type="button" class="xwx" aria-label="關閉搜尋">關閉</button></div>'
   +'<div class="xwmode" role="tablist"><button type="button" data-m="all" class="on" role="tab">找商品・品牌・活動</button><button type="button" data-m="find" role="tab">在卡片裡找字</button></div>'
   +'<div class="xwseg">'+CATS.map(function(c,i){return '<button type="button" data-c="'+c[0]+'"'+(i?'':' class="on"')+'>'+c[1]+'<em></em></button>';}).join('')+'</div>'
   +'<div class="xwhint" id="xwsh"></div><button type="button" class="xwfgo" id="xwfgo" disabled>先打字，再按這裡</button><div id="xwsr"></div></div>';
  document.body.appendChild(o);
  var q=o.querySelector('#xwsq');
  q.addEventListener('input',srun);
  q.addEventListener('keydown',function(e){ if(e.key==='Enter'){ if(SMODE==='find'){ e.preventDefault(); sfind(); return; } var f=o.querySelector('#xwsr a.xwr'); if(f){ e.preventDefault(); f.click(); } } });
  [].forEach.call(o.querySelectorAll('.xwmode button'),function(b){ b.addEventListener('click',function(){ smode(b.getAttribute('data-m')); q.focus(); }); });
  o.querySelector('#xwfgo').addEventListener('click',sfind);
  o.querySelector('.xwx').addEventListener('click',sclose);
  o.addEventListener('click',function(e){ if(e.target===o) sclose(); });
  [].forEach.call(o.querySelectorAll('.xwseg button'),function(b){ b.addEventListener('click',function(){
   SCAT=b.getAttribute('data-c'); [].forEach.call(o.querySelectorAll('.xwseg button'),function(x){x.classList.toggle('on',x===b);}); srun(); }); });
  o.addEventListener('click',function(e){
   var ch=e.target.closest?e.target.closest('.xwchip'):null;
   if(ch){ e.preventDefault(); q.value=ch.getAttribute('data-q'); srun(); q.focus(); return; }
   var a=e.target.closest?e.target.closest('a.xwr'):null; if(!a) return;
   remember(q.value);
   var id=a.getAttribute('data-id'), site=a.getAttribute('data-s');
   var here=(site==='w'&&CUR==='wiki')||(site==='c'&&CUR==='choc')||(site==='b'&&/^c:/.test(id)&&CUR==='choc');
   if(here && window.__goCard){ e.preventDefault(); sclose(); window.__goCard(id.replace(/^c:/,'')); return; }
   try{ var U=new URL(a.href); if(U.pathname===location.pathname && U.hash){ sclose(); } }catch(err){}
  });
  return o;
 }
 function emptyView(o){
  var R=o.querySelector('#xwsr'), r=recent();
  var h='';
  if(r.length) h+='<div class="xwgrp">最近搜尋</div><div class="xwchips">'+r.map(function(t){return '<button type="button" class="xwchip" data-q="'+esc(t)+'">'+esc(t)+'</button>';}).join('')+'</div>';
  h+='<div class="xwgrp">常用</div><div class="xwchips">'+QUICK.map(function(t){return '<button type="button" class="xwchip" data-q="'+esc(t)+'">'+esc(t)+'</button>';}).join('')+'</div>';
  R.innerHTML=h;
  [].forEach.call(o.querySelectorAll('.xwseg em'),function(e){e.textContent='';});
 }
 function srun(){
  var o=sbuild(), raw=o.querySelector('#xwsq').value, q=norm(raw), R=o.querySelector('#xwsr'), H=o.querySelector('#xwsh');
  if(SMODE==='find'){ var t0=raw.trim(), fb=o.querySelector('#xwfgo'); fb.disabled=!t0; fb.textContent=t0?'在商品卡裡找「'+t0+'」':'先打字，再按這裡';
   H.textContent='學習用：在這一頁所有商品卡的內文裡找這個字'+(window.__xwFindEx?'（例如'+window.__xwFindEx+'）':'')+'，只留下有這個字的卡，字會標亮，下方用 ‹ › 一個一個看。'; return; }
  if(!q){ H.textContent=hintTxt(); emptyView(o); return; }
  if(!SIDX){ H.textContent='載入中…'; loadIdx().then(srun).catch(function(){ H.textContent='搜尋資料載入失敗，請確認網路後再試一次。'; }); return; }
  var words=raw.split(/\s+/).map(norm).filter(Boolean), out=[], n=0, cnt={all:0,w:0,c:0,a:0,br:0,g:0};
  for(var i=0;i<SIDX.length;i++){ var x=SIDX[i];
   if(!XS.match(raw,x.k)) continue;
   cnt.all++; cnt[(x.s==='b'||x.s==='r')?'br':x.s]++;
   if(!inCat(x)) continue;
   var kn=x.kn, sc=(kn===q||norm(x.n)===q||(x.e&&norm(x.e)===q))?0:(kn.indexOf(q)===0?1:(kn.indexOf(words[0]||q)>=0?2:(x.k.indexOf(q)>=0?3:4)));
   n++; out.push([sc*10+(TYPO[x.s]||0),x]); }
  [].forEach.call(o.querySelectorAll('.xwseg button'),function(b){ var c=b.getAttribute('data-c'), e=b.querySelector('em'); if(e) e.textContent=cnt[c]?' '+cnt[c]:''; });
  if(!cnt.all&&!srun.fz){ if(!SVOC){SVOC={};SIDX.forEach(function(x){String(x.e||'').toLowerCase().split(/[^a-z]+/).forEach(function(w){if(w.length>=4)SVOC[w]=(SVOC[w]||0)+1;});});}
   var ch=0,fx=raw.split(/\s+/).filter(Boolean).map(function(w){var f=XS.fix(w,SVOC);if(f){ch=1;return f;}return w;});
   if(ch){var inp=o.querySelector('#xwsq'),keep=inp.value;inp.value=fx.join(' ');srun.fz=1;try{srun();}finally{srun.fz=0;inp.value=keep;}
    var H2=o.querySelector('#xwsh');if(o.querySelector('#xwsr').children.length)H2.textContent='找不到「'+raw.trim()+'」，以下是「'+fx.join(' ')+'」的結果（'+H2.textContent+'）';return;}}
  out.sort(function(a,b){return a[0]-b[0];}); out=out.slice(0,50).map(function(a){return a[1];});
  H.textContent=n?('找到 '+n+' 筆'+(n>50?'，先列前 50 筆，再多打幾個字可以縮小範圍':'')+'。按 Enter 開第一筆。'):(cnt.all?'這個分類沒有結果，切到「全部」看看（共 '+cnt.all+' 筆）':'找不到，換個關鍵字試試（例如品牌英文名、品號或條碼）');
  R.innerHTML=out.map(function(x){
   var w=x.s==='w', c=x.s==='c';
   var u=x.u||((w?'https://xsos32-design.github.io/dutyliquorwiki/#':'https://xsos32-design.github.io/chocolatewiki/#')+encodeURIComponent(x.i));
   var gl={a:'card',b:(/^c:/.test(x.i)?'choc':'wiki'),r:'map',g:'page'}[x.s];
   var line2=(w||c)?[x.c,x.p?'NT$'+Number(x.p).toLocaleString():''].filter(Boolean).join('・'):[x.e,x.c].filter(Boolean).join('・');
   return '<a class="xwr t'+x.s+'" href="'+esc(u)+'" data-id="'+esc(x.i)+'" data-s="'+x.s+'">'
    +(x.g?'<span class="xwph" style="background-image:url(\''+esc(x.g)+'\')"></span>':'<span class="xwph no">'+(gl?ic(gl):'')+'</span>')
    +'<span><b><i class="xwtg '+x.s+'">'+TYPN[x.s]+'</i>'+esc(x.n)+'</b>'
    +'<span>'+esc(line2)+'</span>'
    +(x.m?'<span class="'+((w||c)?'xwpm':'xwmd')+'">'+esc(x.m)+'</span>':'')+'</span></a>';
  }).join('');
 }
 var SMODE='all';
 function smode(m){ var o=sbuild(); SMODE=(m==='find'&&window.__xwFind)?'find':'all'; o.classList.toggle('xwfind',SMODE==='find');
  [].forEach.call(o.querySelectorAll('.xwmode button'),function(b){ var on=b.getAttribute('data-m')===SMODE; b.classList.toggle('on',on); b.setAttribute('aria-selected',on?'true':'false'); });
  var q=o.querySelector('#xwsq'); q.placeholder=SMODE==='find'?'要在商品卡裡找的字':'搜酒、巧克力、活動、品牌、產區…'; srun(); }
 function sfind(){ var q=document.getElementById('xwsq'), t=(q&&q.value||'').trim(); if(!t||!window.__xwFind) return; remember(t); sclose(); window.__xwFind(t); }
 function sopen(){ var o=sbuild(); o.classList.toggle('xwhasf',!!window.__xwFind); smode('all'); o.classList.add('on'); document.body.classList.add('xws-on'); var q=o.querySelector('#xwsq'); q.focus(); loadIdx().then(function(){ if(!q.value){ o.querySelector('#xwsh').textContent=hintTxt(); } }).catch(function(){}); srun(); }
 function sclose(){ var o=document.getElementById('xws'); if(o) o.classList.remove('on'); document.body.classList.remove('xws-on'); }
 window.__xwSearch=function(t,m){ sopen(); smode(m==='find'?'find':'all'); var q=document.getElementById('xwsq'); q.value=t||''; srun(); };
 document.addEventListener('keydown',function(e){ if(e.key==='Escape') sclose();
  if(e.key==='/' && !e.ctrlKey && !e.metaKey && !/^(INPUT|TEXTAREA|SELECT)$/.test((e.target&&e.target.tagName)||'') && !(e.target&&e.target.isContentEditable)){ e.preventDefault(); sopen(); } });
 document.addEventListener('click',function(e){ var b=e.target.closest?e.target.closest('#xwsb'):null; if(b){ e.preventDefault(); sopen(); } });
 /* r36 活動頁深連結：#xs:sheet:標題 或 #xs:gift:標題 → 切到該分頁並捲到那一組 */
 function xsGo(){
  var h=''; try{ h=decodeURIComponent(location.hash||''); }catch(e){ h=location.hash||''; }
  var m=/^#xs:(\w+):(.+)$/.exec(h);
  if(!m){ var d=h&&h.length>1?document.getElementById(h.slice(1)):null; if(d&&d.tagName==='DETAILS') d.open=true; return; }
  var v=m[1], t=XS.key(m[2]), tries=0;
  (function go(){
   var tab=document.querySelector('#views [data-v="'+v+'"]');
   if(tab && tab.getAttribute('aria-selected')!=='true') tab.click();
   var el=null;
   [].some.call(document.querySelectorAll('section.tile h3, section.promo h2'),function(hd){
    var c=hd.cloneNode(true); [].forEach.call(c.querySelectorAll('.tile-n,button,.tag'),function(z){ z.parentNode.removeChild(z); });
    if(XS.key(c.textContent)===t){ el=hd.closest('section'); return true; } return false; });
   if(!el||!el.offsetParent){ if(++tries<24) setTimeout(go,250); return; }
   var bar=document.getElementById('xwbar');
   var y=el.getBoundingClientRect().top+window.pageYOffset-((bar&&bar.offsetHeight)||0)-14;
   try{ window.scrollTo({top:Math.max(0,y),behavior:'instant'}); }catch(e){ window.scrollTo(0,Math.max(0,y)); }
   el.style.outline='3px solid #E8CD8A'; el.style.outlineOffset='3px';
   setTimeout(function(){ el.style.outline=''; el.style.outlineOffset=''; },2400);
  })();
 }
 window.addEventListener('hashchange',xsGo);
 if(document.readyState==='complete') setTimeout(xsGo,400); else window.addEventListener('load',function(){ setTimeout(xsGo,400); });

 if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',build);
 else build();
})();

/* ===== 2026/09/29 導覽修正 =====
   1) 目錄點商品：一次就跳到位（先關目錄、立即定位，圖片載入造成位移時自動再校正）
   2) 站內連結（活動頁 → 百科）改成同一個分頁開，手機「上一頁」才回得去
   3) 圖片連結改成頁內放大檢視，不另開分頁 */
(function(){
 function headH(){ var xw=document.getElementById('xwbar');
  return (window.innerWidth<=900&&!document.documentElement.classList.contains('xw1')?64:0)+(xw?xw.offsetHeight:0)+12; }
 function to(y){ try{ window.scrollTo({top:y,behavior:'instant'}); }catch(e){ window.scrollTo(0,y); } }
 var run=0;
 window.__goCard=function(id){
  document.body.classList.remove('open');
  var L=document.getElementById('list');
  if(L && L.classList.contains('xwsolo') && window.xwExitSolo) window.xwExitSolo();
  var el=document.getElementById(id);
  if(!el || !el.classList || !el.classList.contains('card')){ location.hash=id; return; }
  var my=++run, t0=Date.now(), stop=false;
  function place(){
   if(my!==run || stop) return;
   var y=Math.max(0,Math.round(window.pageYOffset+el.getBoundingClientRect().top-headH()));
   if(Math.abs(window.pageYOffset-y)>3) to(y);
  }
  function cancel(){ if(Date.now()-t0>400) stop=true; }
  window.addEventListener('touchmove',cancel,{passive:true});
  window.addEventListener('wheel',cancel,{passive:true});
  place(); requestAnimationFrame(place);
  [60,160,320,560,900,1400,2100,3000].forEach(function(ms){ setTimeout(place,ms); });
  setTimeout(function(){ window.removeEventListener('touchmove',cancel); window.removeEventListener('wheel',cancel); },3100);
  el.classList.add('xwflash'); setTimeout(function(){ el.classList.remove('xwflash'); },1800);
 };


 var IMG=/\.(jpe?g|png|webp|gif)$/i;
 function lightbox(src){
  var o=document.getElementById('xwlb');
  if(!o){
   var st=document.createElement('style');
   st.textContent='#xwlb{position:fixed;inset:0;z-index:2147483600;background:rgba(0,0,0,.88);display:none;align-items:center;justify-content:center;padding:16px}'
    +'#xwlb.on{display:flex}#xwlb img{max-width:100%;max-height:100%;object-fit:contain;border-radius:8px}'
    +'#xwlb button{position:absolute;top:max(12px,env(safe-area-inset-top));right:12px;width:42px;height:42px;border-radius:50%;border:0;background:#fff;color:#111;font-size:18px;cursor:pointer}'
    +'.card.xwflash{outline:3px solid #E8CD8A;outline-offset:2px;transition:outline-color 1.6s}';
   document.head.appendChild(st);
   o=document.createElement('div'); o.id='xwlb';
   o.innerHTML='<img alt=""><button type="button" aria-label="關閉"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button>';
   document.body.appendChild(o);
   o.addEventListener('click',function(){ o.classList.remove('on'); o.querySelector('img').removeAttribute('src'); });
  }
  o.querySelector('img').src=src; o.classList.add('on');
 }
 document.addEventListener('keydown',function(e){ var o=document.getElementById('xwlb'); if(e.key==='Escape'&&o) o.classList.remove('on'); });
 document.addEventListener('click',function(e){
  if(e.defaultPrevented || e.button>0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
  var a=e.target && e.target.closest ? e.target.closest('a[target="_blank"]') : null; if(!a) return;
  var u; try{ u=new URL(a.getAttribute('href')||'',location.href); }catch(x){ return; }
  if(IMG.test(u.pathname)){ e.preventDefault(); lightbox(u.href); return; }
  if(u.host===location.host || /(^|\.)xsos32-design\.github\.io$/.test(u.host)) a.removeAttribute('target');
 });
 /* 預先把站內連結的 target 拿掉（長按「在新分頁開啟」仍可用） */
 function strip(){ [].forEach.call(document.querySelectorAll('a[target="_blank"][href*="xsos32-design.github.io"]'),function(a){ a.removeAttribute('target'); }); }
 if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',strip); else strip();
 setTimeout(strip,1500);
})();

/* 頁首主視覺：job/kv.js 決定哪幾頁要放 */
(function(){if(window.__xwKVL)return;window.__xwKVL=1;var s=document.createElement("script");s.src="https://xsos32-design.github.io/job/kv.js";s.defer=true;document.head.appendChild(s);})();
