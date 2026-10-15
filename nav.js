/* ===========================================================
   小韋 · 免稅賣場工具組 共用連結列
   六站共用：改這一支，所有網頁同時更新
   https://xsos32-design.github.io/dutyliquorwiki/nav.js
   =========================================================== */
(function(){
 if(window.__xwNavLoaded) return; window.__xwNavLoaded=true;

 var N_W=652, N_C=200;   /* 商品數：build_search.py 每次重建搜尋資料時自動改寫 */
 var GROUPS=[
  {g:'活動', items:[
   {k:'cal',   t:'活動月曆',         s:'酒＋巧克力・幾號到幾號',   ico:'cal',
    u:'https://xsos32-design.github.io/promotion/calendar.html'}
  ]},
  {g:'酒類', items:[
   {k:'wiki',  t:'酒類商品完整檔案', s:N_W+' 支・話術／規格／圖片', ico:'wiki',
    u:'https://xsos32-design.github.io/dutyliquorwiki/'},
   {k:'promo', t:'活動比較卡',       s:'檔期異動・上下月比較',     ico:'promo',
    u:'https://xsos32-design.github.io/promotion/'},
   {k:'card',  t:'折扣小卡',         s:'現場快查・折扣一覽',       ico:'card',
    u:'https://xsos32-design.github.io/promotion/card.html'},
   {k:'shelf', t:'我的架上',         s:'本月目標・獎勵・抽考',     ico:'shelf',
    u:'https://xsos32-design.github.io/dutyliquorwiki/#shelf'}
  ]},
  {g:'巧克力', items:[
   {k:'choc',   t:'巧克力商品完整檔案', s:N_C+' 項・10 大類・話術／商訓', ico:'choc',
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
 +'body.xws-on{overflow:hidden}'
 +'@media print{#xwbar,#xwfoot,#xws{display:none!important}body{padding-top:0!important}}';

 var SVG={"cal": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M16 3v4M8 3v4M3 10h18\"/>", "wiki": "<path d=\"M10 2h4v4l2 3v12a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9l2-3z\"/><path d=\"M8 13h8\"/>", "promo": "<path d=\"M21 12a9 9 0 0 1-15.5 6.2L3 16\"/><path d=\"M3 12a9 9 0 0 1 15.5-6.2L21 8\"/><path d=\"M21 3v5h-5M3 21v-5h5\"/>", "card": "<path d=\"M12.6 2.6 21.4 11.4a2 2 0 0 1 0 2.8l-7.2 7.2a2 2 0 0 1-2.8 0L2.6 12.6A2 2 0 0 1 2 11.2V4a2 2 0 0 1 2-2h7.2a2 2 0 0 1 1.4.6z\"/><circle cx=\"7.5\" cy=\"7.5\" r=\"1.5\"/>", "shelf": "<path d=\"M3 9 4.5 4h15L21 9\"/><path d=\"M4 9v11h16V9\"/><path d=\"M3 9h18M9 20v-6h6v6\"/>", "choc": "<rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><path d=\"M5 9h14M5 15h14M12 3v18\"/>", "search": "<circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"m20 20-3.5-3.5\"/>"};
 function ic(k){return '<svg class="xwi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(SVG[k]||'')+'</svg>';}
 function build(){
  if(document.getElementById('xwbar')) return;
  var st=document.createElement('style'); st.id='xwcss'; st.textContent=css;
  document.head.appendChild(st);

  var bar=document.createElement('nav'); bar.id='xwbar';
  bar.setAttribute('aria-label','工具組導覽');
  var h='<button type="button" class="xwsb" id="xwsb" aria-label="搜尋酒和巧克力">'+ic('search')+'搜尋</button><span class="xwsep"></span>';
  GROUPS.forEach(function(G,gi){
   if(gi) h+='<span class="xwsep"></span>';
   h+='<span class="xwg"><span class="xwgl">'+G.g+'</span>';
   G.items.forEach(function(s){
    h+='<a class="xwa'+(s.k==='cal'?' xcal':'')+(s.k===CUR?' on':'')+'" href="'+s.u+'"'+(s.k===CUR?' aria-current="page"':'')+'>'
      +ic(s.ico)+s.t+'<small>'+s.s+'</small></a>';
   });
   h+='</span>';
  });
  h+='<span class="xwown">製作／整理　<b>'+OWNER+'</b>　<i>內部使用</i></span>';
  bar.innerHTML=h;
  document.body.insertBefore(bar,document.body.firstChild);
  bar.addEventListener('click',function(e){
   var a=e.target.closest?e.target.closest('a.xwa'):null; if(!a)return;
   if(!/#shelf$/.test(a.getAttribute('href')))return;
   var same=(CUR==='wiki'&&/dutyliquorwiki/.test(a.href))||(CUR==='choc'&&/chocolatewiki/.test(a.href));
   if(same){ e.preventDefault(); var d=document.getElementById('dsh');
    if(d){ if(!document.body.classList.contains('shon'))d.click(); window.scrollTo({top:0,behavior:'smooth'}); } }
  });

  function h2(){document.documentElement.style.setProperty('--xwh',bar.offsetHeight+'px');}
  h2(); window.addEventListener('resize',h2); setTimeout(h2,300);

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
 var SIDX=null, SLOAD=null, SCAT='all', SVOC=null;
 var SURL='https://xsos32-design.github.io/dutyliquorwiki/search.json';
 function norm(t){ return XS.key(t); }
 function loadIdx(){
  if(SIDX) return Promise.resolve(SIDX);
  if(!SLOAD) SLOAD=fetch(SURL,{cache:'no-cache'}).then(function(r){return r.json();}).then(function(j){
    SIDX=j.items.map(function(x){ x.k=norm(x.n+' '+x.e+' '+x.c+' '+(x.q||'')+' '+(x.s==='w'?x.i:'')); return x; }); return SIDX; });
  return SLOAD;
 }
 function esc(t){ return String(t==null?'':t).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
 function sbuild(){
  var o=document.getElementById('xws'); if(o) return o;
  o=document.createElement('div'); o.id='xws'; o.setAttribute('role','dialog'); o.setAttribute('aria-label','搜尋酒和巧克力');
  o.innerHTML='<div class="xwbx"><div class="xwrow"><input id="xwsq" type="search" enterkeyhint="search" autocomplete="off" placeholder="搜酒和巧克力：中文、英文、品號都可以"><button type="button" class="xwx" aria-label="關閉搜尋">關閉</button></div>'
   +'<div class="xwseg"><button type="button" data-c="all" class="on">全部</button><button type="button" data-c="w">只看酒</button><button type="button" data-c="c">只看巧克力</button></div>'
   +'<div class="xwhint" id="xwsh">酒類 '+N_W+' 支＋巧克力 '+N_C+' 項。打字就出現，點一下直接打開那張卡片。</div><div id="xwsr"></div></div>';
  document.body.appendChild(o);
  var q=o.querySelector('#xwsq');
  q.addEventListener('input',srun);
  o.querySelector('.xwx').addEventListener('click',sclose);
  o.addEventListener('click',function(e){ if(e.target===o) sclose(); });
  [].forEach.call(o.querySelectorAll('.xwseg button'),function(b){ b.addEventListener('click',function(){
   SCAT=b.getAttribute('data-c'); [].forEach.call(o.querySelectorAll('.xwseg button'),function(x){x.classList.toggle('on',x===b);}); srun(); }); });
  o.addEventListener('click',function(e){
   var a=e.target.closest?e.target.closest('a.xwr'):null; if(!a) return;
   var id=a.getAttribute('data-id'), site=a.getAttribute('data-s');
   var here=(site==='w'&&CUR==='wiki')||(site==='c'&&CUR==='choc');
   if(here && window.__goCard){ e.preventDefault(); sclose(); window.__goCard(id); }
  });
  return o;
 }
 function srun(){
  var o=sbuild(), raw=o.querySelector('#xwsq').value, q=norm(raw), R=o.querySelector('#xwsr'), H=o.querySelector('#xwsh');
  if(!q){ R.innerHTML=''; H.textContent='酒類 '+N_W+' 支＋巧克力 '+N_C+' 項。打字就出現，點一下直接打開那張卡片。'; return; }
  if(!SIDX){ H.textContent='載入中…'; loadIdx().then(srun).catch(function(){ H.textContent='搜尋資料載入失敗，請確認網路後再試一次。'; }); return; }
  var words=raw.split(/\s+/).map(norm).filter(Boolean), out=[], n=0;
  for(var i=0;i<SIDX.length;i++){ var x=SIDX[i];
   if(SCAT!=='all' && x.s!==SCAT) continue;
   var exact=x.k.indexOf(q)>=0&&XS.match(raw,x.k), nm=norm(x.n+' '+x.e).indexOf(words[0]||q)>=0;
   if(!exact && !XS.match(raw,x.k)) continue;
   n++; out.push([exact?0:(nm?1:2),x]); }
  var fixNote='';
  if(!n&&!srun.fz){ if(!SVOC){SVOC={};SIDX.forEach(function(x){String(x.e||'').toLowerCase().split(/[^a-z]+/).forEach(function(w){if(w.length>=4)SVOC[w]=(SVOC[w]||0)+1;});});}
   var ch=0,fx=raw.split(/\s+/).filter(Boolean).map(function(w){var f=XS.fix(w,SVOC);if(f){ch=1;return f;}return w;});
   if(ch){var inp=o.querySelector('#xwsq'),keep=inp.value;inp.value=fx.join(' ');srun.fz=1;try{srun();}finally{srun.fz=0;inp.value=keep;}
    var H2=o.querySelector('#xwsh');if(o.querySelector('#xwsr').children.length)H2.textContent='找不到「'+raw.trim()+'」，以下是「'+fx.join(' ')+'」的結果（'+H2.textContent+'）';return;}}
  out.sort(function(a,b){return a[0]-b[0];}); out=out.slice(0,40).map(function(a){return a[1];});
  H.textContent=n?('找到 '+n+' 項'+(n>40?'，先列前 40 項，再多打幾個字可以縮小範圍':'')):'找不到，換個關鍵字試試（例如品牌英文名或品號）';
  R.innerHTML=out.map(function(x){
   var w=x.s==='w', u=(w?'https://xsos32-design.github.io/dutyliquorwiki/#':'https://xsos32-design.github.io/chocolatewiki/#')+encodeURIComponent(x.i);
   return '<a class="xwr" href="'+u+'" data-id="'+esc(x.i)+'" data-s="'+x.s+'">'
    +(x.g?'<span class="xwph" style="background-image:url(\''+esc(x.g)+'\')"></span>':'<span class="xwph no"></span>')
    +'<span><b><i class="xwtg '+(w?'w':'c')+'">'+(w?'酒':'巧克力')+'</i>'+esc(x.n)+'</b>'
    +'<span>'+esc([x.c,x.p?'NT$'+Number(x.p).toLocaleString():''].filter(Boolean).join('・'))+'</span>'
    +(x.m?'<span class="xwpm">'+esc(x.m)+'</span>':'')+'</span></a>';
  }).join('');
 }
 function sopen(){ var o=sbuild(); o.classList.add('on'); document.body.classList.add('xws-on'); var q=o.querySelector('#xwsq'); q.focus(); loadIdx().catch(function(){}); if(q.value) srun(); }
 function sclose(){ var o=document.getElementById('xws'); if(o) o.classList.remove('on'); document.body.classList.remove('xws-on'); }
 window.__xwSearch=function(t){ sopen(); var q=document.getElementById('xwsq'); q.value=t||''; srun(); };
 document.addEventListener('keydown',function(e){ if(e.key==='Escape') sclose(); });
 document.addEventListener('click',function(e){ var b=e.target.closest?e.target.closest('#xwsb'):null; if(b){ e.preventDefault(); sopen(); } });

 if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',build);
 else build();
})();

/* ===== 2026/09/29 導覽修正 =====
   1) 目錄點商品：一次就跳到位（先關目錄、立即定位，圖片載入造成位移時自動再校正）
   2) 站內連結（活動頁 → 百科）改成同一個分頁開，手機「上一頁」才回得去
   3) 圖片連結改成頁內放大檢視，不另開分頁 */
(function(){
 function headH(){ var xw=document.getElementById('xwbar');
  return (window.innerWidth<=900?64:0)+(xw?xw.offsetHeight:0)+12; }
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
