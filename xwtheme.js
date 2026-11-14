/* ===========================================================
   小韋 · 免稅賣場工具組 顯示設定：配色（深色／淺色）、字體放大一級、文字對比
   由 nav.js 載入，所有網頁共用。2026/11/11 r214
   做法：逐一讀元素的樣式，算出要覆寫的顏色／字級／粗細，寫成
   @layer xwthm{ html.xwon .xw-n{…!important} } 規則（用 class 才快；分批處理，不卡畫面）。
   淺色模式：深底→淺底、淺字→深字（照片橫幅保留原樣）；兩種模式都把文字對比補到 7:1（大字 5:1）。
   =========================================================== */
(function(){
 if(window.__xwThemeLoaded) return; window.__xwThemeLoaded=true;
 var de=document.documentElement, K='xw_theme';
 if(/\/card(_\w+)?\.html$/.test(location.pathname)) return;   /* 折扣小卡是列印版面，不處理 */
 var mode='dark'; try{ var v=localStorage.getItem(K); if(v==='light'||v==='dark') mode=v; }catch(e){}
 de.setAttribute('data-xwmode',mode);
 /* r242 活動頁原本是白底卡片：深色模式也要翻成深色 */
 var FORCE=/\/(promotion|chocolatepromo)\/(index\.html|oct\.html|calendar\.html|owner\.html)?$/.test(location.pathname)||de.hasAttribute('data-xwforce');
 if(FORCE) de.setAttribute('data-xwforce','1');
 /* 淺色模式：開頁時先遮一下（最多 0.8 秒），避免先閃一下深色畫面 */
 var veil=document.createElement('style'); veil.textContent='html.xwveil body{visibility:hidden!important}';
 if(mode==='light'||FORCE){ (document.head||de).appendChild(veil); de.classList.add('xwveil'); setTimeout(unveil,800); }
 function unveil(){ de.classList.remove('xwveil'); }

 /* ---------- 顏色工具 ---------- */
 function parse(s){ if(!s) return null; var m=/rgba?\(([^)]+)\)/.exec(s);
  if(!m){ var k=/color\(srgb ([\d.e-]+) ([\d.e-]+) ([\d.e-]+)(?: \/ ([\d.e-]+))?\)/.exec(s); if(k) return [k[1]*255,k[2]*255,k[3]*255,k[4]==null?1:+k[4]]; return null; }
  var p=m[1].split(/[\s,\/]+/).filter(Boolean).map(parseFloat); return [p[0],p[1],p[2],p.length>3?p[3]:1]; }
 function str(c){ return c[3]>=0.999?'rgb('+Math.round(c[0])+','+Math.round(c[1])+','+Math.round(c[2])+')'
  :'rgba('+Math.round(c[0])+','+Math.round(c[1])+','+Math.round(c[2])+','+(Math.round(c[3]*1000)/1000)+')'; }
 function same(a,b){ return !!a&&!!b&&Math.abs(a[0]-b[0])<1&&Math.abs(a[1]-b[1])<1&&Math.abs(a[2]-b[2])<1&&Math.abs(a[3]-b[3])<0.01; }
 function blend(c,b){ var a=c[3]; return [c[0]*a+b[0]*(1-a),c[1]*a+b[1]*(1-a),c[2]*a+b[2]*(1-a),1]; }
 function lin(v){ v/=255; return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4); }
 function lum(c){ return 0.2126*lin(c[0])+0.7152*lin(c[1])+0.0722*lin(c[2]); }
 function ratio(a,b){ var x=lum(a),y=lum(b); return (Math.max(x,y)+0.05)/(Math.min(x,y)+0.05); }
 function toHsl(c){ var r=c[0]/255,g=c[1]/255,b=c[2]/255,mx=Math.max(r,g,b),mn=Math.min(r,g,b),h=0,s=0,l=(mx+mn)/2;
  if(mx!==mn){ var d=mx-mn; s=l>0.5?d/(2-mx-mn):d/(mx+mn); h=mx===r?(g-b)/d+(g<b?6:0):mx===g?(b-r)/d+2:(r-g)/d+4; h/=6; } return [h,s,l]; }
 function hue2(p,q,t){ if(t<0)t+=1; if(t>1)t-=1; if(t<1/6)return p+(q-p)*6*t; if(t<1/2)return q; if(t<2/3)return p+(q-p)*(2/3-t)*6; return p; }
 function fromHsl(h,s,l,a){ var r,g,b; if(s===0){r=g=b=l;} else { var q=l<0.5?l*(1+s):l+s-l*s,p=2*l-q; r=hue2(p,q,h+1/3); g=hue2(p,q,h); b=hue2(p,q,h-1/3); }
  return [r*255,g*255,b*255,a==null?1:a]; }
 /* 文字對比補到 target：深底往亮、淺底往暗，保留色相 */
 function fix(c,bg,target){ c=blend(c,bg); if(ratio(c,bg)>=target) return c;
  var h=toHsl(c), up=lum(bg)<0.2, l=h[2], s=h[1];
  for(var i=0;i<45;i++){ l=up?Math.min(1,l+0.025):Math.max(0,l-0.025); s*=0.97; var n=fromHsl(h[0],s,l,1); if(ratio(n,bg)>=target) return n; if(l<=0||l>=1) break; }
  return up?[255,255,255,1]:[0,0,0,1]; }
 /* 換配色：底色與字色明暗翻轉（保留色相） */
 function mapBg(c,to){ if(!c||c[3]===0) return c; var h=toHsl(c),l=h[2];
  /* 有顏色的標籤／色條（飽和度高）保留原色，只翻轉中性色與很深／很淺的底 */
  if(to==='light'){ if(l>=0.55||(l>=0.2&&h[1]>=0.3)) return c; return fromHsl(h[0],h[1]*0.5,Math.min(0.975,0.985-l*0.55),c[3]); }
  if(l<=0.45||(l<=0.8&&h[1]>=0.3)) return c; return fromHsl(h[0],h[1]*0.55,Math.max(0.05,0.06+(1-l)*0.22),c[3]); }
 function mapFg(c,to){ if(!c) return c; var h=toHsl(c),l=h[2];
  if(to==='light'){ if(l<=0.45) return c; return fromHsl(h[0],Math.min(1,h[1]*1.05),Math.max(0.1,1.02-l),c[3]); }
  if(l>=0.55) return c; return fromHsl(h[0],h[1],Math.min(0.92,1.02-l),c[3]); }
 /* 框線：深色模式時很淺的灰框改成暗金細線，不要白線 */
 function mapBd(c,to){ if(!c) return c; var h=toHsl(c);
  if(to==='dark'&&h[2]>=0.7&&h[1]<0.5) return [201,164,92,Math.min(c[3],0.28)]; return mapFg(c,to); }
 function mapGrad(s,to,fn){ return s.replace(/rgba?\([^)]+\)/g,function(x){ var c=parse(x); return c?str(fn(c,to)):x; }); }

 /* ---------- 覆寫方式：固定幾條規則＋每個元素自己的 CSS 變數 ----------
    （每改一次規則表，瀏覽器就要整頁重算樣式；改成只在元素上設變數＋加 class，只重算那個元素）
    cascade layer 裡的 !important 比頁面上一般的 !important 優先 */
 var PROPS={'color':'c','background-color':'b','background-image':'i','border-color':'d','font-size':'f','font-weight':'w','opacity':'o','-webkit-text-fill-color':'t'};
 var PPROPS={'color':'c','background-color':'b','background-image':'i','border-color':'d'};
 var css='';
 for(var p0 in PROPS) css+='html.xwon .xq-'+PROPS[p0]+'{'+p0+':var(--xq-'+PROPS[p0]+')!important}';
 ['::before','::after'].forEach(function(pn){ var t=pn==='::before'?'b':'a';
  for(var p1 in PPROPS) css+='html.xwon .xq-'+t+PPROPS[p1]+pn+'{'+p1+':var(--xq-'+t+PPROPS[p1]+')!important}'; });
 css+='html.xwon .xq-f{overflow-wrap:anywhere;text-wrap:pretty}';
 var sheet=document.createElement('style'); sheet.id='xwthm-rules'; sheet.media='screen'; sheet.textContent='@layer xwthm{'+css+'}';
 var base=document.createElement('style'); base.id='xwthm-base';
 (document.head||de).appendChild(base); (document.head||de).appendChild(sheet);
 var AP=new WeakMap();   /* 元素 → 目前套用的 {短碼:值} */
 function apply(el,out,pr){
  var nw={}, k;
  for(k in out) nw[PROPS[k]]=out[k];
  for(var pn in pr){ var t=pn==='::before'?'b':'a'; for(k in pr[pn]) nw[t+PPROPS[k]]=pr[pn][k]; }
  var old=AP.get(el)||{}, st=el.style, cl=el.classList, any=false;
  for(k in old) if(!(k in nw)){ cl.remove('xq-'+k); st.removeProperty('--xq-'+k); }
  for(k in nw){ any=true; if(old[k]!==nw[k]){ st.setProperty('--xq-'+k,nw[k]); if(!(k in old)) cl.add('xq-'+k); } }
  if(any) AP.set(el,nw); else AP.delete(el); }
 function clearAp(el){ var old=AP.get(el); if(!old) return; for(var k in old){ el.classList.remove('xq-'+k); el.style.removeProperty('--xq-'+k); } AP.delete(el); }
 function stripC(c){ return (c||'').replace(/(^|\s)xq-[a-z]+/g,'').replace(/\s+/g,' ').trim(); }
 function stripS(c){ return (c||'').replace(/--xq-[a-z]+:[^;]*;?/g,'').replace(/\s+/g,' ').trim(); }

 /* ---------- 讀原本樣式 ---------- */
 var SKIP=/^(SCRIPT|STYLE|LINK|META|NOSCRIPT|BR|WBR|IMG|PICTURE|SOURCE|VIDEO|AUDIO|CANVAS|IFRAME|TEMPLATE|HEAD|TITLE|svg|path|g|circle|rect|line|polyline|polygon|use|defs|ellipse|text|tspan|symbol|clipPath|mask|linearGradient|radialGradient|stop)$/;
 var O=new WeakMap(), ALL=[], CUR=new WeakMap();
 var BASE0=[16,14,11,1], NATIVE='dark', BASE=BASE0;
 function hasText(el){ if(/^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) return true;
  for(var n=el.firstChild;n;n=n.nextSibling) if(n.nodeType===3&&/\S/.test(n.nodeValue)) return true; return false; }
 function cur(el){ var v=CUR.get(el); if(v) return v; var cs=getComputedStyle(el);
  v={c:parse(cs.color),fs:parseFloat(cs.fontSize),fw:parseInt(cs.fontWeight,10)||400}; CUR.set(el,v); return v; }
 /* 讀樣式時，父層若已被覆寫，繼承來的值要換回父層原值 */
 function read(el){
  var cs=getComputedStyle(el), par=el.parentElement, po=par&&O.get(par), pc=po&&AP.has(par)?cur(par):null;
  var c=parse(cs.color), fs=parseFloat(cs.fontSize), fw=parseInt(cs.fontWeight,10)||400;
  if(pc){ if(same(c,pc.c)) c=po.c;
   if(Math.abs(fs-pc.fs)<0.01) fs=po.fs; else if(Math.abs(pc.fs-po.fs)>0.01) fs=fs*po.fs/pc.fs;
   if(fw===pc.fw) fw=po.fw; }
  var o={c:c,fs:fs,fw:fw,bg:parse(cs.backgroundColor),bi:cs.backgroundImage,op:parseFloat(cs.opacity),pos:cs.position,
   bt:parse(cs.borderTopColor),bw:parseFloat(cs.borderTopWidth)||0,tf:cs.webkitTextFillColor||'',clip:cs.webkitBackgroundClip||cs.backgroundClip||'',
   txt:hasText(el),rep:cs.backgroundRepeat,bot:cs.bottom,disp:cs.display,ovx:cs.overflowX!=='visible'||cs.textOverflow==='ellipsis',ps:[]};
  if(o.pos==='fixed'){ o.w=el.offsetWidth; o.h=el.offsetHeight; }   /* 只量固定列（量尺寸會逼瀏覽器重排，很慢） */
  ['::before','::after'].forEach(function(pn){ var p=getComputedStyle(el,pn), ct=p.content;
   if(!ct||ct==='none'||ct==='normal') return;
   var pcol=parse(p.color); if(same(pcol,parse(cs.color))) pcol=null;  /* 繼承元素字色 */
   var q={pn:pn,c:pcol,bg:parse(p.backgroundColor),bi:p.backgroundImage,bt:parse(p.borderTopColor),bw:parseFloat(p.borderTopWidth)||0,txt:/^["'].*\S.*["']$/.test(ct)};
   if((q.bg&&q.bg[3]>0)||(q.bi&&q.bi!=='none')||(q.txt&&q.c)||q.bw>0) o.ps.push(q); });
  o.chrome=!!el.closest('#xwbar,#xwmenu');
  o.keep=!!el.closest('.namecard,.nc,[data-xwkeep]');
  o.noscale=o.chrome||!!el.closest('.namecard,.nc,#cal-grid,.cal-grid,[data-xwns]');
  /* 照片橫幅：不重複的 url 背景，且有深色底色或漸層遮罩（只有裝飾圖、沒有深底的不算） */
  function darkGrad(g){ if(!/gradient/.test(g||'')) return false; var cs2=(g.match(/rgba?\([^)]+\)/g)||[]).map(parse), mx=0;
   for(var i=0;i<cs2.length;i++){ var c2=cs2[i]; if(c2[3]>0.05&&lum(c2)>0.08) return false; mx=Math.max(mx,c2[3]); } return mx>=0.5; }
  var darkUnder=(o.bg&&o.bg[3]>=0.5&&lum(o.bg)<0.1)||darkGrad(o.bi)||o.ps.some(function(q){return (q.bg&&q.bg[3]>0.4&&lum(q.bg)<0.1)||darkGrad(q.bi);});
  o.photo=!!(o.bi&&/url\(/.test(o.bi)&&!/data:image\/svg/.test(o.bi)&&/no-repeat/.test(o.rep)&&!/^(SPAN|A|I|B|EM|STRONG|LABEL|BUTTON|SMALL|U|S)$/.test(el.tagName)&&!o.chrome&&darkUnder);
  var prev=O.get(el);
  if(!prev) ALL.push(el);
  else if(prev.photo!==o.photo||!same(prev.bg,o.bg)||prev.bi!==o.bi){   /* 底色變了：已處理過的子元素重算 */
   var ds=el.getElementsByTagName('*'); for(var di=0;di<ds.length;di++) if(O.has(ds[di])) Q.push([ds[di],0,false]); }
  O.set(el,o); return o; }

 /* ---------- 算覆寫值 ---------- */
 var E=new WeakMap();   /* 元素 → 新樣式下的實際底色 */
 function effOf(el){
  if(!el||el.nodeType!==1) return BASE;
  var v=E.get(el); if(v) return v;
  var o=O.get(el), par=effOf(el.parentElement); if(!o){ E.set(el,par); return par; }
  var bg=o.bg, r;
  if(o.photo) r=(bg&&bg[3]>0)?blend(bg,[24,20,16,1]):[24,20,16,1];
  else { if(bg&&bg[3]>0&&flipOf(el,o)) bg=mapBg(bg,mode); r=(bg&&bg[3]>0)?blend(bg,par):par; }
  E.set(el,r); return r; }
 function flipOf(el,o){ if(inPhoto(el)) return false; if(mode!==NATIVE) return true; return FORCE&&mode==='dark'&&!(o&&o.keep); }
 function inPhoto(el){ for(var p=el;p&&p.nodeType===1;p=p.parentElement){ var o=O.get(p); if(o&&o.photo) return true; } return false; }
 function compute(el){
  var o=O.get(el); if(!o||!de.contains(el)) return;
  var out={}, flip=flipOf(el,o);
  if(flip){
   if(o.bg&&o.bg[3]>0){ var nb=mapBg(o.bg,mode); if(!same(nb,o.bg)) out['background-color']=str(nb); }
   if(o.bi&&o.bi!=='none'){
    var bi=o.bi;
    if(/url\(/.test(bi)&&!/data:image\/svg/.test(bi)&&(el===document.body||el===de||!/no-repeat/.test(o.rep)))
     bi=bi.split(/,(?![^(]*\))/).filter(function(x){return !/url\(/.test(x);}).join(',')||'none';
    if(/gradient/.test(bi)) bi=mapGrad(bi,mode,/text/.test(o.clip)?mapFg:mapBg);
    if(bi!==o.bi) out['background-image']=bi;
   }
   if(o.bt&&o.bt[3]>0&&o.bw>0) out['border-color']=str(mapBd(o.bt,mode));
  }
  /* 底部固定列：改成不透明，不再透出下面的字 */
  if(o.pos==='fixed'&&parseFloat(o.bot)<=12&&o.h<160&&o.w>200&&o.bg&&o.bg[3]>0&&o.bg[3]<0.92){
   var fb=flip?mapBg(o.bg,mode):o.bg; out['background-color']=str([fb[0],fb[1],fb[2],0.97]); }
  if(o.txt){
   var bg=effOf(el), clear=/rgba\(0, 0, 0, 0\)|transparent/.test(o.tf);
   if(o.c&&o.c[3]>0&&!(/text/.test(o.clip)&&clear)){
    var big=o.fs>=20||(o.fs>=16&&o.fw>=700);
    var n=fix(flip?mapFg(o.c,mode):o.c,bg,big?5:7);
    if(!same(n,o.c)) out['color']=str(n);
    if(o.tf&&!clear&&!same(parse(o.tf),o.c)) out['-webkit-text-fill-color']=str(n);
   }
   /* 字級放大一級、細字加粗（頂端選單列不放大，避免擠掉按鈕） */
   var fs=o.fs, nf=fs<12?Math.max(fs*1.2,13):fs<20?fs*1.12:fs<28?fs*1.06:fs;
   var lv=LV.get(el)||0; if(lv===1) nf=fs<12?fs*1.08:fs*1.05;   /* 第一次放不下：只放大一點點 */
   nf=Math.round(nf*2)/2; if(nf>fs+0.2&&!o.noscale&&lv<2) out['font-size']=nf+'px';
   if(o.fw<500&&fs<28&&lv<2) out['font-weight']='500';
   if(o.op>=0.45&&o.op<0.95) out['opacity']='1';
  }
  var pr={};
  o.ps.forEach(function(q){ var po={};
   if(flip){ if(q.bg&&q.bg[3]>0) po['background-color']=str(mapBg(q.bg,mode));
    if(q.bi&&/gradient/.test(q.bi)) po['background-image']=mapGrad(q.bi,mode,mapBg);
    if(q.bt&&q.bt[3]>0&&q.bw>0) po['border-color']=str(mapBd(q.bt,mode)); }
   if(q.txt&&q.c&&q.c[3]>0){ var pn=fix(flip?mapFg(q.c,mode):q.c,effOf(el),5); if(!same(pn,q.c)) po['color']=str(pn); }
   for(var z in po){ pr[q.pn]=po; break; } });
  apply(el,out,pr);
 }

 /* ---------- 分批處理（由上往下，每格畫面處理一批） ---------- */
 var Q=[], timer=0, raf=window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(f){return setTimeout(f,16);};
 function pageBase(){ var b=parse(getComputedStyle(document.body).backgroundColor), h=parse(getComputedStyle(de).backgroundColor);
  var c=(b&&b[3]>0)?b:(h&&h[3]>0)?h:[255,255,255,1]; return blend(c,[255,255,255,1]); }
 function setBase(){ BASE=(mode===NATIVE)?BASE0:blend(mapBg(BASE0,mode),mode==='light'?[255,255,255,1]:[0,0,0,1]); }
 var ST={enq:0,ms:0,n:0,steps:0,tr:0,tc:0,t0:0,io:0,fit:0,fitms:0};
 /* ---------- 放大後不可以讓版面跑掉：短標籤放大後如果多出一行，就退回原本字級 ---------- */
 var LV=new WeakMap(), PRE=new WeakMap(), FIT=[];   /* LV：1＝只放大一點、2＝維持原字級 */
 function lines(el){ var r=document.createRange(); r.selectNodeContents(el); var rs=r.getClientRects(), tops=[];
  for(var i=0;i<rs.length;i++){ var q=rs[i]; if(q.width<1||q.height<1) continue; var t=q.top+q.height/2, f=false;
   for(var j=0;j<tops.length;j++) if(Math.abs(tops[j]-t)<q.height*0.45){ f=true; break; } if(!f) tops.push(t); }
  return tops.length; }
 function fitCand(el,o){ if(!o||!o.txt||o.noscale||o.fs>=28||(LV.get(el)||0)>=2||o.disp==='none'||o.disp==='contents') return false;
  if(/^(INPUT|TEXTAREA|SELECT|OPTION)$/.test(el.tagName)) return false;
  if(el.getElementsByTagName('*').length>12) return false; var t=el.textContent; if(!(t.length>0&&t.length<=90)) return false;
  /* 行內文字（連結、粗體）只在短標籤裡檢查；長段落裡的行內字本來就會換行 */
  if(o.disp==='inline'){ var p=el.parentElement; while(p&&getComputedStyle(p).display==='inline') p=p.parentElement; if(!p||p.textContent.length>90) return false; }
  return true; }
 function clipped(el){ return el.scrollWidth>el.clientWidth+1; }
 function checkFit(){ var L=FIT, t0=Date.now(); FIT=[]; var bad=[];
  for(var i=0;i<L.length;i++){ var el=L[i]; if(!de.contains(el)) continue; var p=PRE.get(el); if(p==null) continue; var o=O.get(el);
   var pa=el.parentElement, n1=lines(el);
   if(n1>p[0]||(o&&o.ovx&&!p[1]&&clipped(el))||(pa&&!p[2]&&clipped(pa))||(pa&&p[3]>0&&lines(pa)>p[3])) bad.push(el);   /* 自己放大後把旁邊的字擠到下一行也算 */ }
  if(!bad.length){ ST.fitms+=Date.now()-t0; return; }
  E=new WeakMap();
  var again=[];
  function off(el,lv){ if((LV.get(el)||0)>=lv) return; LV.set(el,lv); ST.fit++; compute(el); if(lv<2&&PRE.has(el)) again.push(el);
   var ds=el.getElementsByTagName('*'); for(var k=0;k<ds.length;k++){ var o=O.get(ds[k]); if(o&&o.disp==='inline'&&(LV.get(ds[k])||0)<lv){ LV.set(ds[k],lv); compute(ds[k]); } } }
  /* 同一組裡的同款標籤（例如並排的方塊標題）一起退回，大小才會一致 */
  function sig(el){ var p=el.parentElement; return el.tagName+'.'+stripC(el.getAttribute('class'))+'<'+(p?p.tagName+'.'+stripC(p.getAttribute('class')):''); }
  bad.forEach(function(el){ var lv=(LV.get(el)||0)+1; off(el,lv); var sg=sig(el), g=el.parentElement;
   /* 往上找到「有好幾個同款標籤」的那一層（例如方塊格子），整組一起調 */
   for(var up=0;up<5&&g;up++){ g=g.parentElement; if(!g||g===document.body||g===de||g.getElementsByTagName('*').length>800) return;
    var cs=g.getElementsByTagName(el.tagName), m=[]; for(var k=0;k<cs.length;k++){ var c=cs[k]; if(c!==el&&O.has(c)&&sig(c)===sg) m.push(c); }
    if(m.length){ m.forEach(function(c){ off(c,lv); }); return; } } });
  /* 只放大一點的，下一格畫面再檢查一次 */
  again.forEach(function(el){ if(FIT.indexOf(el)<0) FIT.push(el); });
  ST.fitms+=Date.now()-t0; }
 function enqueue(root,deep,reread){
  if(!root||root.nodeType!==1||SKIP.test(root.tagName)) return;
  if(!O.has(root)&&inPending(root)) return;   /* 還沒捲到的區塊：等看得到再一起處理 */
  ST.enq++;
  Q.push([root,deep,reread]); if(!timer&&!running) timer=setTimeout(function(){ timer=0; running=true; raf(step); },ST.steps?60:0); }
 /* 大頁面（數萬個元素）只先處理畫面附近的區塊，其他區塊捲到附近或顯示出來時才處理 */
 /* 大頁面（數萬個元素）只處理畫面附近的區塊：區塊交給 IntersectionObserver，捲到附近或顯示出來時才處理
    種類：self＝只處理元素本身（大容器）、all＝整塊處理、part＝原本隱藏的大塊，顯示後再切塊 */
 var PB=new WeakMap();
 function inPending(el){ for(var p=el;p&&p!==document.body;p=p.parentElement){ var k=PB.get(p); if(k&&k!=='self') return true; } return false; }
 var IO=('IntersectionObserver' in window)?new IntersectionObserver(function(es){ es.forEach(function(e){ if(!e.isIntersecting) return; var t=e.target, k=PB.get(t);
   IO.unobserve(t); PB.delete(t); ST.io++; enqueue(t,k==='all'?2:k==='part'?1:0,false); }); },{rootMargin:'1200px 0px 1200px 0px'}):null;
 function watch(el,k){ PB.set(el,k); IO.observe(el); }
 function pushAll(b,out){ out.push(b);
  /* 整塊處理時，裡面隱藏的部分（例如收合的段落）一樣先跳過 */
  (function walk(p){ for(var c=p.firstElementChild;c;c=c.nextElementSibling){ if(SKIP.test(c.tagName)) continue;
   if(IO&&getComputedStyle(c).display==='none'){ watch(c,'part'); continue; } out.push(c); walk(c); } })(b); }
 function partition(root,out,top){
  if(!IO){ pushAll(root,out); return; }
  /* 隱藏中的區塊（display:none）整塊跳過：讀隱藏元素的樣式特別慢，等它顯示出來（瀏覽器會通知）再處理 */
  var rcs=getComputedStyle(root);
  if(root!==document.body&&rcs.display==='none'){ watch(root,'part'); return; }
  /* content-visibility:auto 的卡片：裡面的版面還沒排，先整張等捲到附近 */
  if(!top&&root!==document.body&&rcs.contentVisibility==='auto'){ out.push(root); watch(root,'part'); return; }
  var n=root.getElementsByTagName('*').length;
  if(n>400){ if(root===document.body||root===de) out.push(root); else watch(root,'self');
   for(var c=root.firstElementChild;c;c=c.nextElementSibling){ if(!SKIP.test(c.tagName)) partition(c,out,false); } return; }
  watch(root,'all');
 }
 var work=[], wi=0, running=false, NB=300, LSC=0; addEventListener('scroll',function(){LSC=Date.now();},{passive:true}); addEventListener('touchmove',function(){LSC=Date.now();},{passive:true});   /* r231：手指滑動中每格只做 6ms，停下來才做 16ms */
 function step(){
  if(FIT.length) checkFit();
  var t0=Date.now();
  if(wi>=work.length){ work=[]; wi=0;
   var seen=new Set();
   while(Q.length){ var j=Q.shift(), r=j[0]; if(!de.contains(r)) continue; var sk=(j[1]||0)+(j[2]?'r':''); if(seen.has(r)&&!j[1]) continue; seen.add(r);
    if(SKIP.test(r.tagName)||r.closest('svg')) continue;
    if(!O.has(r)&&j[1]!==2&&inPending(r)) continue;   /* 所在區塊還在等，之後整塊處理 */
    if(j[1]){ var L=[]; if(j[1]===2) pushAll(r,L); else partition(r,L,true); for(var i=0;i<L.length;i++) work.push([L[i],j[2]]); }
    else work.push([r,j[2]]); }
   if(!work.length){ if(FIT.length){ raf(step); return; } running=false; window.__xwThemeDone=Date.now(); if(ST.io>0) unveil(); return; }
  }
  CUR=new WeakMap(); E=new WeakMap();
  /* 一批的數量依上一批速度調整；先拿掉要重讀的舊規則 → 一次讀完 → 一次寫入（避免讀寫交錯讓瀏覽器一直重算） */
  var end=Math.min(work.length,wi+NB), batch=[];
  for(var a=wi;a<end;a++){ var w0=work[a]; if(w0[1]) clearAp(w0[0]); }
  var ta=Date.now();
  for(;wi<end;wi++){ var w=work[wi], el=w[0]; if(!de.contains(el)) continue; if(w[1]||!O.has(el)) read(el); batch.push(el); }
  var pend=[]; for(var b0=0;b0<batch.length;b0++){ var e0=batch[b0]; var o0=O.get(e0); if(fitCand(e0,o0)){ var pp=e0.parentElement, pl=(pp&&pp!==document.body&&pp.getElementsByTagName('*').length<=12&&pp.textContent.length<=120)?lines(pp):-1;
    PRE.set(e0,[lines(e0),o0.ovx&&clipped(e0),!pp||clipped(pp),pl]); pend.push(e0); } }
  var tb=Date.now();
  for(var b=0;b<batch.length;b++) compute(batch[b]);
  for(var b1=0;b1<pend.length;b1++){ var ap=AP.get(pend[b1]); if(ap&&ap.f) FIT.push(pend[b1]); }
  ST.tr+=tb-ta; ST.tc+=Date.now()-tb; ST.t0+=ta-t0;
  var dt=Date.now()-t0; ST.ms+=dt; ST.n+=batch.length; ST.steps++;
  var _tg=(Date.now()-LSC<200)?6:16; NB=Math.max(40,Math.min(3000,Math.round(NB*(dt>0?_tg/dt:2))));
  raf(step);
 }
 function start(){
  BASE0=pageBase(); NATIVE=lum(BASE0)<0.4?'dark':'light'; de.setAttribute('data-xwnative',NATIVE); setBase();
  de.classList.add('xwon');
  enqueue(document.body,1,false);
  new MutationObserver(function(ms){
   ms.forEach(function(m){
    if(m.type==='childList'){ [].forEach.call(m.addedNodes,function(n){ if(n.nodeType===1) enqueue(n,1,false); else if(n.nodeType===3&&m.target.nodeType===1) enqueue(m.target,false,true); }); }
    else if(m.type==='characterData'){ if(m.target.parentElement) enqueue(m.target.parentElement,false,true); }
    else { var t=m.target;
     if(m.attributeName==='class'&&stripC(m.oldValue)===stripC(t.getAttribute('class'))) return;   /* 只是本程式自己加減 xq- class */
     if(m.attributeName==='style'&&stripS(m.oldValue)===stripS(t.getAttribute('style'))) return;
     enqueue(t,false,true);
     /* 狀態改變（class／open…）：小範圍連子元素一起重算 */
     var all=t.getElementsByTagName('*'); if(all.length<150) for(var i=0;i<all.length;i++) if(O.has(all[i])) Q.push([all[i],0,true]);
     /* 展開／顯示（details open、hidden、class）：裡面等待中的區塊重新請瀏覽器回報是否看得到 */
     if(IO&&(/^(open|hidden|aria-expanded)$/.test(m.attributeName)||all.length<4000)) for(var q=0;q<all.length;q++){ var pk=PB.get(all[q]); if(pk&&pk!=='self'){ IO.unobserve(all[q]); IO.observe(all[q]); } } } });
  }).observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeOldValue:true,attributeFilter:['class','style','open','hidden','aria-pressed','aria-selected','aria-expanded','aria-current','data-on']});
  document.addEventListener('change',function(e){ var t=e.target&&e.target.parentElement; if(t) enqueue(t.parentElement||t,2,true); },true);
  var tries=0; (function t(){ if(!addBtn()&&tries++<40) setTimeout(t,150); })();
 }
 function switchMode(m){ mode=m; try{localStorage.setItem(K,mode);}catch(e){} de.setAttribute('data-xwmode',mode); setBase();
  /* 原本樣式已讀過，只要重算覆寫值 */
  var L=ALL.filter(function(el){ return de.contains(el); }); ALL=L; var i=0;
  (function go(){ var t=Date.now(); E=new WeakMap(); while(i<L.length&&Date.now()-t<30) compute(L[i++]); if(i<L.length) raf(go); else window.__xwThemeDone=Date.now(); })(); }

 /* ---------- 切換按鈕 ---------- */
 base.textContent=
  '#xwthm{flex:none;display:inline-flex;align-items:center;justify-content:center;height:36px;min-width:40px;padding:0 9px;border-radius:999px;border:1px solid rgba(201,164,92,.32);background:rgba(255,255,255,.03);color:#D8CDB4;cursor:pointer;margin:0;box-sizing:border-box}'
  +'#xwthm svg{width:18px;height:18px}'
  +'html[data-xwmode=light] #xwthm{background:rgba(255,255,255,.55);color:#5A4318;border-color:rgba(150,112,44,.3)}'
  +'@media(max-width:440px){#xwbar{gap:5px!important}#xwbar .xwsite>.xwi{display:none}#xwbar .xwsite{padding:0 9px!important}#xwbar .xwtb{padding:0 9px}#xwthm{min-width:34px;padding:0 7px}}'
  +'@media(max-width:400px){#xwbar{gap:4px!important}#xwbar .xwtb{padding:0 7px;gap:3px}#xwbar .xwsite{padding:0 7px!important}#xwthm{min-width:32px;padding:0 6px}}';
 var SUN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></svg>';
 var MOON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>';
 function paintBtn(b){ b.innerHTML=mode==='light'?MOON:SUN; var t=mode==='light'?'切換成深色':'切換成淺色'; b.setAttribute('aria-label',t); b.title=t; }
 function addBtn(){ if(document.getElementById('xwthm')) return true;
  var bar=document.getElementById('xwbar'); if(!bar) return false;
  var b=document.createElement('button'); b.type='button'; b.id='xwthm'; paintBtn(b);
  var fz=bar.querySelector('#xwfsz,#fsz'); if(fz&&fz.parentNode===bar) bar.insertBefore(b,fz); else bar.appendChild(b);
  b.addEventListener('click',function(){ switchMode(mode==='light'?'dark':'light'); paintBtn(b); });
  return true; }
 window.__xwTheme={stats:function(){return {fit:ST.fit,fitms:ST.fitms,tr:ST.tr,tc:ST.tc,tpre:ST.t0,ms:ST.ms,n:ST.n,steps:ST.steps,nb:NB,enq:ST.enq,io:ST.io,q:Q.length,work:work.length,wi:wi,running:running};},get mode(){return mode;},get busy(){return running||Q.length>0||!!timer;},set:function(m){switchMode(m);},info:function(el){var o=O.get(el);return o?JSON.parse(JSON.stringify(o)):null;},re:function(el){E=new WeakMap();compute(el);return [inPhoto(el),str(effOf(el)),AP.get(el)];},native:function(){return NATIVE;},pb:function(el){return PB.get(el)||null;}};
 if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
})();
