/* r241 風味圖示（記憶用）：key＝風味標籤，[顏色, SVG 內容(24x24 線條)] */
var XWFI={
'甜潤':['#E6A85C','<path d="M12 3c3.2 4.3 6 7.4 6 11a6 6 0 0 1-12 0c0-3.6 2.8-6.7 6-11z"/><path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5"/>'],
'果香':['#D9614C','<path d="M12 7c-4-2-8 1-7 6 .7 4 3.5 8 7 7 3.5 1 6.3-3 7-7 1-5-3-8-7-6z"/><path d="M12 7c0-2 1-3.5 3-4"/>'],
'雪莉果乾':['#9A4B6E','<circle cx="9" cy="9" r="2.6"/><circle cx="15" cy="9" r="2.6"/><circle cx="12" cy="13.5" r="2.6"/><circle cx="8" cy="15" r="2.4"/><circle cx="16" cy="15" r="2.4"/><circle cx="12" cy="19" r="2.2"/><path d="M12 6V3"/>'],
'辛香料':['#C77B3A','<path d="M12 3l1.8 5.2L19 6l-2.2 5L22 12l-5.2 1.8L19 18l-5.2-2.2L12 21l-1.8-5.2L5 18l2.2-5L2 12l5.2-1.8L5 6l5.2 2.2z"/><circle cx="12" cy="12" r="1.6"/>'],
'香草奶油':['#E8D08A','<path d="M6 20c3-6 7-11 12-16"/><path d="M8 18c1.5.3 3 0 4-1"/><path d="M14 4c1 2 1 3.5 0 5"/><path d="M17 7c-2 .3-3.5 0-4.5-1"/>'],
'厚重濃郁':['#8C5A2B','<path d="M6 4h12M6 20h12"/><path d="M6 4c-1.5 5-1.5 11 0 16M18 4c1.5 5 1.5 11 0 16"/><path d="M5 9h14M5 15h14"/>'],
'輕盈好入口':['#9CC7C1','<path d="M20 4C11 4 6 10 5 20"/><path d="M20 4c0 8-5 13-12 13"/><path d="M9 14l3-3M11 11h3"/>'],
'溫和低酒感':['#8FB98A','<path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z"/><path d="M5 19L14 10"/>'],
'柑橘清爽':['#F0A93A','<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="5"/><path d="M12 7v10M7 12h10M8.5 8.5l7 7M15.5 8.5l-7 7"/>'],
'花香':['#D987B2','<circle cx="12" cy="12" r="2.2"/><path d="M12 9.8c-1.8-3.5 1.8-5.8 0-6.8-1.8 1 1.8 3.3 0 6.8z"/><circle cx="12" cy="6.3" r="2.6"/><circle cx="17.3" cy="10.3" r="2.6"/><circle cx="15.3" cy="16.6" r="2.6"/><circle cx="8.7" cy="16.6" r="2.6"/><circle cx="6.7" cy="10.3" r="2.6"/>'],
'巧克力咖啡':['#7A4A2E','<ellipse cx="12" cy="12" rx="6" ry="8.5" transform="rotate(30 12 12)"/><path d="M9 6.5c3 3 3 8 6 11"/>'],
'煙燻泥煤':['#8E8E8E','<path d="M8 20c-2-2 0-4 0-6s-2-3-1-6"/><path d="M12 20c-2-3 1-5 0-8s-1-4 1-7"/><path d="M16 20c-2-2 0-4 0-6s-1-3 0-5"/>'],
'無煙燻':['#7FA07F','<path d="M10 20c-2-3 1-5 0-8s-1-4 1-7"/><path d="M15 20c-2-2 0-4 0-6"/><path d="M4 4l16 16"/>'],
'熱帶水果':['#E9C23A','<ellipse cx="12" cy="15" rx="5" ry="6"/><path d="M9 12l6 6M15 12l-6 6M9 15h6"/><path d="M12 9V4M12 7l-3-3M12 7l3-3"/>'],
'堅果':['#B07A44','<path d="M6 10h12c0 6-3 10-6 10s-6-4-6-10z"/><path d="M5 10c0-3 3-5 7-5s7 2 7 5z"/><path d="M12 5V3"/>'],
'高酒感':['#E0563A','<path d="M12 3c1 4 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-4 2.5-5 .5 2 1.5 3 2.5 3 0-3-1-5 0-8z"/>'],
'木質檀香':['#9C6B3E','<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="2"/>'],
'海鹽礦石':['#4F9BC8','<path d="M3 9c3-3 6 3 9 0s6 3 9 0"/><path d="M3 14c3-3 6 3 9 0s6 3 9 0"/><path d="M3 19c3-3 6 3 9 0s6 3 9 0"/>'],
'麥芽穀物':['#D2B061','<path d="M12 21V6"/><path d="M12 9c-3-1-4-3-4-5 3 0 4 2 4 5zM12 9c3-1 4-3 4-5-3 0-4 2-4 5zM12 14c-3-1-4-3-4-5 3 0 4 2 4 5zM12 14c3-1 4-3 4-5-3 0-4 2-4 5z"/>'],
'莓果':['#C2405A','<circle cx="9" cy="13" r="3.5"/><circle cx="15" cy="13" r="3.5"/><circle cx="12" cy="17.5" r="3.5"/><path d="M12 9.5V5M12 6l3-2"/>'],
'牛奶':['#EDE6D6','<path d="M9 3h6v3l2 3v12H7V9l2-3z"/><path d="M7 13h10"/>'],
'黑巧':['#5B3A26','<rect x="4" y="6" width="16" height="12" rx="1.5"/><path d="M4 12h16M9.3 6v12M14.7 6v12"/>'],
'白巧':['#F3EBD8','<rect x="4" y="6" width="16" height="12" rx="1.5"/><path d="M4 12h16M12 6v12"/>'],
'榛果':['#A8703D','<path d="M6 11h12c0 5.5-3 9-6 9s-6-3.5-6-9z"/><path d="M5 11c0-3 3-5 7-5s7 2 7 5z"/>'],
'杏仁':['#C9955E','<path d="M12 3c4 4 5 9 3 14-1.5 3-4.5 3-6 0-2-5-1-10 3-14z"/><path d="M12 6v11"/>'],
'開心果':['#9BBB59','<path d="M12 4c4 0 6 4 6 8s-2 8-6 8-6-4-6-8 2-8 6-8z"/><path d="M12 4c-2 5-2 11 0 16"/>'],
'草莓':['#D9435A','<path d="M12 8c5 0 7 2 7 4 0 4-4 8-7 8s-7-4-7-8c0-2 2-4 7-4z"/><path d="M9 4l3 4 3-4M12 8V3"/><path d="M10 13h.01M14 13h.01M12 16h.01"/>'],
'抹茶':['#6E9A3E','<path d="M5 9h14l-1.5 9a2 2 0 0 1-2 1.7h-7a2 2 0 0 1-2-1.7z"/><path d="M8 5c0 1 1 1 1 2M12 4c0 1 1 1 1 2"/>'],
'焦糖':['#C4782A','<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M7 9L3 6M17 15l4 3M3 6v4M21 18v-4"/>'],
'海鹽':['#4F9BC8','<path d="M3 11c3-3 6 3 9 0s6 3 9 0"/><path d="M3 17c3-3 6 3 9 0s6 3 9 0"/><path d="M12 4l1 2-1 2-1-2z"/>'],
'酒心':['#A7643A','<path d="M10 3h4v5c2 1 3 3 3 5v7H7v-7c0-2 1-4 3-5z"/><path d="M7 14h10"/>'],
'薄荷':['#4FB38A','<path d="M12 21V9"/><path d="M12 12c-5 0-7-4-7-8 4 0 7 3 7 8zM12 12c5 0 7-4 7-8-4 0-7 3-7 8z"/>'],
'咖啡':['#6B4226','<ellipse cx="12" cy="12" rx="6" ry="8.5" transform="rotate(30 12 12)"/><path d="M9 6.5c3 3 3 8 6 11"/>'],
'餅乾':['#D2A15E','<circle cx="12" cy="12" r="8"/><path d="M9 9h.01M14 8h.01M15 13h.01M10 14h.01M12 17h.01"/>'],
'威化':['#D8B57A','<rect x="4" y="7" width="16" height="10" rx="1"/><path d="M4 12h16M8 7v10M12 7v10M16 7v10"/>'],
'軟糖':['#E8749C','<path d="M7 9c0-3 2-5 5-5s5 2 5 5v6c0 3-2 5-5 5s-5-2-5-5z"/><path d="M10 10h.01M14 10h.01"/>'],
'糖果':['#E8749C','<circle cx="12" cy="12" r="4"/><path d="M8 12L3 9v6zM16 12l5-3v6z"/>'],
'椰子':['#9C7A55','<circle cx="12" cy="13" r="7"/><path d="M9 11h.01M12 10h.01M15 11h.01"/>'],
'柑橘':['#F0A93A','<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="5"/><path d="M12 7v10M7 12h10"/>'],
'蜂蜜':['#E9B53A','<path d="M8 4h8l4 7-4 7H8l-4-7z"/><path d="M12 8l2.5 1.5v3L12 14l-2.5-1.5v-3z"/>'],
'松露':['#6E4A32','<circle cx="12" cy="13" r="7"/><path d="M8 11c1.5-1 3-1 4 0s2.5 1 4 0M8 15c1.5-1 3-1 4 0s2.5 1 4 0"/>'],
'紅酒桶果香':['#8E2F45','<path d="M7 3h10l-1 7a4 4 0 0 1-8 0z"/><path d="M12 14v6M8 21h8"/>']
};
function xwFI(k,sz){var d=XWFI[k];if(!d)return '';return '<svg viewBox="0 0 24 24" width="'+(sz||18)+'" height="'+(sz||18)+'" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+d[1]+'</svg>';}

/* r241 商品卡「一眼記住 MEMO」（記憶口訣＋風味圖示＋FAB）＋首頁「看圖記憶練習」入口；由 nav.js 的 xwmemo 行載入（工具 site_tools/memo/mkjs.py 產生） */
(function(){
 if(window.__xwMemo)return;window.__xwMemo=1;
 var base='https://xsos32-design.github.io/dutyliquorwiki/';
 var SITE=/chocolatewiki/.test(location.pathname)?'c':(/dutyliquorwiki\/?(index\.html)?$/.test(location.pathname)?'w':'');
 function E(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
 function txt(v){if(Array.isArray(v))v=v.map(function(x){return x&&typeof x==='object'?(x.v||''):String(x);}).join(' ');return String(v||'').replace(/<[^>]+>/g,'').trim();}
 var CASK=[['PX','PX 雪莉桶'],['Oloroso','雪莉桶'],['雪莉','雪莉桶'],['Sherry','雪莉桶'],['波特','波特桶'],['Port','波特桶'],['馬德拉','馬德拉桶'],['蘭姆','蘭姆桶'],['Rum','蘭姆桶'],['葡萄酒','葡萄酒桶'],['紅酒','紅酒桶'],['Wine','葡萄酒桶'],['干邑','干邑桶'],['水楢','水楢桶'],['Mizunara','水楢桶'],['泥煤','泥煤'],['波本','波本桶'],['Bourbon','波本桶'],['美國橡木','美國橡木'],['歐洲橡木','歐洲橡木']];
 var CT=[["牛奶", "牛奶"], ["Milk", "牛奶"], ["黑巧", "黑巧"], ["Dark", "黑巧"], ["白巧", "白巧"], ["White", "白巧"], ["榛果", "榛果"], ["Hazel", "榛果"], ["杏仁", "杏仁"], ["Almond", "杏仁"], ["開心果", "開心果"], ["Pistach", "開心果"], ["草莓", "草莓"], ["Strawberr", "草莓"], ["抹茶", "抹茶"], ["Matcha", "抹茶"], ["焦糖", "焦糖"], ["Caramel", "焦糖"], ["海鹽", "海鹽"], ["Sea Salt", "海鹽"], ["酒心", "酒心"], ["Liqueur", "酒心"], ["威士忌", "酒心"], ["薄荷", "薄荷"], ["Mint", "薄荷"], ["咖啡", "咖啡"], ["Coffee", "咖啡"], ["餅乾", "餅乾"], ["Biscuit", "餅乾"], ["威化", "威化"], ["Wafer", "威化"], ["軟糖", "軟糖"], ["Gumm", "軟糖"], ["椰", "椰子"], ["Coconut", "椰子"], ["柳橙", "柑橘"], ["Orange", "柑橘"], ["檸檬", "柑橘"], ["蜂蜜", "蜂蜜"], ["Honey", "蜂蜜"], ["莓", "莓果"], ["Berr", "莓果"], ["松露", "松露"], ["Truffle", "松露"], ["夏威夷豆", "堅果"], ["Macadamia", "堅果"], ["花生", "堅果"], ["Peanut", "堅果"], ["糖果", "糖果"], ["Candy", "糖果"], ["棒棒糖", "糖果"]];
 function sb(b){b=String(b||'').replace(/（.*?）|\(.*?\)/g,'').trim();var z=b.match(/[一-鿿]+/);return z?z[0]:b;}
 function info(p){var n=p.nameZh||p.id,en=p.nameEn||'',tags,mn;
  if(SITE==='w'){tags=(p.taste||[]).filter(function(t){return XWFI[t];}).slice(0,5);var ck='',src=((p.casks||'')+' '+n+' '+en).toLowerCase();for(var i=0;i<CASK.length;i++){var kk=CASK[i][0],hit=/^[\x00-\x7f]+$/.test(kk)?new RegExp('\\b'+kk.toLowerCase()+'\\b').test(src):src.indexOf(kk.toLowerCase())>=0;if(hit){ck=CASK[i][1];break;}}
   var ag=(/(\d{1,2})\s*年/.exec(n)||[])[1];
   if(/葡萄酒|香檳|氣泡/.test(p.cat||'')){var vin=(/(19|20)\d{2}/.exec(n)||[''])[0],rg=((p.region||'').match(/[\u4e00-\u9fff]+/)||[''])[0];mn=[sb(p.brand),vin,rg,tags.slice(0,2).join('／')].filter(Boolean).join('・');}
   else mn=[sb(p.brand),ag?ag+' 年':'',ck,tags.filter(function(t){return t!=='無煙燻';}).slice(0,2).join('／')].filter(Boolean).join('・');}
  else{var bl=(n+' '+en+' '+txt(p.pos)).toLowerCase();tags=[];CT.forEach(function(r){if(bl.indexOf(r[0].toLowerCase())>=0&&tags.indexOf(r[1])<0)tags.push(r[1]);});tags=tags.slice(0,5);
   var k=(/(\d+)\s*(顆|入|片|PCS|pcs)/.exec(n+' '+(p.spec||''))||[])[1];mn=[p.brand||'',k?k+' 入':(p.spec||''),tags.slice(0,2).join('／')].filter(Boolean).join('・');}
  var f=p.fab||{};return {tags:tags,mn:mn,F:txt(f.F)||txt(p.pos),A:(f.A||p.points||[]).map(txt).filter(function(a){return a&&!/價卡|^酒標：|官網補充/.test(a);}).slice(0,2),B:txt(f.B)};}
 function cut(s,n){return s.length>n?s.slice(0,n-1)+'…':s;}
 var BY=null;function byId(id){if(!BY){BY={};(window.P||[]).forEach(function(p){if(p&&p.id)BY[p.id]=p;});}return BY[id];}
 function block(c){var p=byId(c.id);if(!p)return null;var x=info(p);if(!x.mn)return null;
  var h='<div class="mmhd"><span class="mmt">一眼記住</span><span class="mme">MEMO・FAB</span></div><div class="mmmn"><small>記憶口訣</small>'+E(x.mn)+'</div>';
  if(x.tags.length)h+='<div class="mmic">'+x.tags.map(function(k){var d=XWFI[k];return '<span><i style="background:'+d[0]+'">'+xwFI(k,15)+'</i>'+E(k)+'</span>';}).join('')+'</div>';
  h+='<div class="mmfab">'+(x.F?'<div><b class="f">F</b><span><em>是什麼</em>'+E(cut(x.F,64))+'</span></div>':'')+(x.A.length?'<div><b class="a">A</b><span><em>為什麼好</em>'+x.A.map(function(a){return E(cut(a,46));}).join('<br>')+'</span></div>':'')+(x.B?'<div><b class="b">B</b><span><em>客人得到</em>'+E(cut(x.B,70))+'</span></div>':'')+'</div>';
  h+='<div class="mmbt"><a href="'+base+'memo.html#card='+encodeURIComponent(c.id)+'">存成記憶卡</a><a href="'+base+'memo.html#brand='+encodeURIComponent(p.brand||'')+'&s='+SITE+'">同品牌對照</a><a href="'+base+'memo.html#quiz-'+SITE+'">看圖練習</a></div>';
  var d=document.createElement('div');d.className='sec mmsec';d.innerHTML=h;return d;}
 function place(c){var body=c.querySelector(':scope > .body');if(!body)return;var ex=body.querySelector(':scope > .mmsec');
  var anchor=body.querySelector(':scope > .bzsec')||body.querySelector(':scope > div.sec:not(.mmsec)');
  if(!ex){if(c.__mm)return;c.__mm=1;ex=block(c);if(!ex)return;}
  if(anchor&&ex.previousElementSibling!==anchor)body.insertBefore(ex,anchor.nextSibling);else if(!anchor&&!ex.parentNode)body.insertBefore(ex,body.firstChild);}
 var css='.mmsec{border:1px solid rgba(201,164,92,.45)!important;border-radius:14px;padding:12px 14px!important;margin:10px 0!important;background:linear-gradient(160deg,rgba(201,164,92,.10),rgba(201,164,92,.02))}'+
  '.mmhd{display:flex;align-items:baseline;gap:8px;margin-bottom:6px}.mmt{font-weight:800;font-size:17px;color:#E8CD8A}.mme{font-size:11px;letter-spacing:3px;color:#C9A45C}'+
  '.mmmn{font-size:16px;font-weight:800;color:#E8CD8A;background:rgba(201,164,92,.12);border-left:4px solid #C9A45C;padding:6px 10px;border-radius:0 9px 9px 0;margin:4px 0 8px;line-height:1.5}.mmmn small{display:block;font-size:11.5px;color:#BDB6A9;font-weight:400}'+
  '.mmic{display:flex;flex-wrap:wrap;gap:6px;margin:4px 0 8px}.mmic span{display:inline-flex;align-items:center;gap:4px;font-size:12.5px;padding:2px 9px 2px 4px;border-radius:999px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12)}'+
  '.mmic i{display:inline-flex;width:23px;height:23px;border-radius:50%;align-items:center;justify-content:center;color:#16120C}'+
  '.mmfab{display:grid;gap:6px}.mmfab>div{display:grid;grid-template-columns:28px 1fr;gap:8px;align-items:start;font-size:14px;line-height:1.6}.mmfab b{display:inline-flex;width:26px;height:26px;border-radius:7px;align-items:center;justify-content:center;font-size:14px;color:#fff}'+
  '.mmfab b.f{background:#5B8DEF}.mmfab b.a{background:#E0A23A}.mmfab b.b{background:#4FB38A}.mmfab em{font-style:normal;font-size:11.5px;color:#BDB6A9;display:block}'+
  '.mmbt{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.mmbt a{font-size:13px;padding:5px 11px;border-radius:999px;border:1px solid rgba(201,164,92,.5);color:#E8CD8A!important;text-decoration:none!important}'+
  '#mmhome{display:flex;align-items:center;gap:12px;margin:0;padding:12px 14px;border-radius:14px;border:1px solid rgba(201,164,92,.5);background:linear-gradient(120deg,rgba(201,164,92,.18),rgba(201,164,92,.04));text-decoration:none!important;color:inherit!important}'+
  '#mmhome .ico{flex:0 0 44px;height:44px;border-radius:12px;background:#C9A45C;display:flex;align-items:center;justify-content:center;color:#16120C}#mmhome b{display:block;font-size:16px;color:#E8CD8A}#mmhome span{font-size:13px;color:#BDB6A9}#mmhome .go{margin-left:auto;font-size:22px;color:#C9A45C}';
 var st=document.createElement('style');st.id='xwmemo-css';st.textContent=css;document.head.appendChild(st);
 function home(){var mo=document.querySelector('.r59month');if(!mo||document.getElementById('mmhome'))return;var pr={};try{pr=JSON.parse(localStorage.getItem('xw_memo')||'{}');}catch(e){}
  var ks=Object.keys(pr),got=0,ng=0,dn=0,now=Date.now();ks.forEach(function(k){var r=pr[k];if(r[0]>=3)got++;if(r[0]===0)ng++;if(r[1]<=now)dn++;});
  var a=document.createElement('a');a.id='mmhome';a.href=base+'memo.html#quiz-'+SITE;
  a.innerHTML='<div class="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="13" height="16" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v13"/><path d="M7 11h5M7 15h3"/></svg></div><div><b>看圖記憶練習（FAB）</b><span>'+(ks.length?('已記住 '+got+' 支・待加強 '+ng+' 支・今天該複習 '+dn+' 支'):'每天 10 張，看圖猜品名＋記憶口訣，答錯的會一直回來')+'</span></div><span class="go">›</span>';
  var hh=mo.querySelector('.r59h');mo.insertBefore(a,hh?hh.nextSibling:mo.firstChild);}
 function scan(){(window.P||[]).length&&document.querySelectorAll('#list section.card[id]').forEach(place);home();}
 var pend=0;function go(){if(!SITE)return;scan();var L=document.getElementById('list')||document.body;new MutationObserver(function(){if(!pend){pend=1;setTimeout(function(){pend=0;scan();},350);}}).observe(L,{childList:true,subtree:true});
  new MutationObserver(function(){if(!document.getElementById('mmhome'))home();}).observe(document.body,{childList:true,subtree:true});var n=0,iv=setInterval(function(){home();if(document.getElementById('mmhome')||++n>40)clearInterval(iv);},400);}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();
