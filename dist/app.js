(() => {
  'use strict';
  const {works, workCategories, tutorials, tutorialAliases, departments} = window.D9;
  const main = document.querySelector('main');
  const dialog = document.querySelector('#detail-dialog');
  const dialogContent = document.querySelector('#dialog-content');
  let toastTimer;
  let currentCategory = '全部';
  let currentWorkCategory = 'all';
  let searchTerm = '';
  const readIds = new Set();
  try {
    const saved = JSON.parse(localStorage.getItem('d9-read') || '[]');
    if (Array.isArray(saved)) {
      saved.forEach(id => {if (tutorials.some(t => t.id === id)) readIds.add(id);});
      const legacyIds = Object.keys(tutorialAliases);
      if (legacyIds.length && legacyIds.every(id => saved.includes(id))) readIds.add(tutorialAliases[legacyIds[0]]);
    }
  } catch {}
  const arrow = '<span aria-hidden="true">↗</span>';
  const eyebrow = text => `<p class="eyebrow">${text}</p>`;
  const link = (href,label) => `<a class="text-link" href="${href}">${label}${arrow}</a>`;
  const button = (href,label,secondary=false) => `<a class="button${secondary?' secondary':''}" href="${href}">${label}<span aria-hidden="true">↗</span></a>`;
  const note = text => `<div class="notice"><span class="status-dot" aria-hidden="true"></span><p>${text}</p></div>`;
  const pageHead = (name,en,intro) => `<section class="page-heading container"><div class="breadcrumb"><a href="#/home">首页</a><span>/</span><span>${name}</span></div>${eyebrow(en)}<h1>${name}</h1><p class="intro">${intro}</p></section>`;
  const sectionHead = (en,title,href,label,support='') => `<div class="section-head"><div>${eyebrow(en)}<h2>${title}</h2>${support?`<p class="support">${support}</p>`:''}</div>${href?link(href,label):''}</div>`;
  const joinBanner = () => `<section class="join-banner"><div class="container join-banner-inner"><div>${eyebrow('YOUR NEXT ADVENTURE')}<h2>下一个好玩的想法，来自你。</h2><p>无论是第一次尝试，还是已经开始创造，都能从一个小小的原型出发。</p></div><span class="join-spark" aria-hidden="true">✳</span>${button('#/join','一起做游戏')}</div></section>`;
  const workItems = categoryId => works.filter(w => categoryId === 'all' || w.category === categoryId);
  const workCard = w => `<article class="work-card"><button class="work-visual" data-work="${w.id}" aria-label="阅读作品：${w.title}">${w.image?`<img src="assets/${w.image}" alt="${w.title}" loading="lazy">`:'<span class="work-cover-icon" aria-hidden="true">✦</span>'}<span class="work-open" aria-hidden="true">↗</span></button><div class="work-meta"><h3>${w.title}</h3></div><p>${workCategories.find(c=>c.id===w.category)?.name||''}</p></article>`;
  const workCategoryCard = c => `<a class="work-category-card ${c.color}" href="#/works/${c.id}"><div class="work-category-top"><span class="work-category-icon" aria-hidden="true">${c.icon}</span><span>${workItems(c.id).length} 篇作品</span></div><p class="work-category-en">${c.en}</p><h3>${c.name}</h3><div class="work-category-bottom"><span>${workItems(c.id).length?'查看活动作品':'作品待发布'}</span><span aria-hidden="true">↗</span></div></a>`;
  function workResults(categoryId) {
    const items = workItems(categoryId);
    if (items.length) return `<div class="work-grid">${items.map(workCard).join('')}</div>`;
    const category = workCategories.find(c=>c.id===categoryId);
    return `<div class="work-empty"><span class="work-empty-icon" aria-hidden="true">${category?.icon||'▦'}</span>${category?`<p class="work-empty-category">${category.name}</p>`:''}<h2>尚未发布作品</h2><p>${category?'这个活动分类下还没有作品文章。':'活动分类已建立，作品文章将在发布后展示。'}</p></div>`;
  }
  const lessonRow = t => `<a class="lesson-row" href="#/tutorial/${t.id}"><span class="lesson-number">${t.number}</span><div><h3>${t.title}</h3><p>${t.category} / ${t.level} / 约 ${t.minutes} 分钟</p></div><span class="arrow" aria-hidden="true">↗</span></a>`;
  const activityFormats = [
    {icon:'⌘',name:'Game Jam',desc:'给一个主题，一起把灵感变成游戏。',detail:'围绕共同主题，在约定时间内组队制作小型游戏。可以从纸面原型开始，用一次完整的创作练习串起策划、程序、美术与音频。具体主题、时间与参与方式将在活动正式发布时说明。'},
    {icon:'✳',name:'开发交流',desc:'聊聊开发中的新发现，也聊聊踩过的坑。',detail:'分享一个具体的开发问题、一段实现思路或一次项目复盘。适合带着可展示的小案例交流，也可以带着还没有解决的问题来讨论。具体安排待正式活动发布。'},
    {icon:'▷',name:'作品试玩',desc:'把手柄交给伙伴，让反馈推动下一次迭代。',detail:'把可运行的原型交给其他人体验，观察他们如何理解玩法，记录卡住的地方与意外的乐趣，再选择一个最重要的问题继续改进。作品征集与参与方式待正式发布。'}
  ];
  const home = () => `<section class="hero container"><div class="hero-copy">${eyebrow('D9 GAME DEVELOPMENT CLUB')}<h1>让好玩的想法，<br><em>真的发生。</em></h1><p class="hero-description">我们是 D9 游研社，一个热爱游戏开发的社团。<br>在这里，把脑海里的奇思妙想，<br>一点点变成可以探索、可以体验的世界。</p><div class="hero-actions">${button('#/works','探索我们的世界')}<a class="quiet-link" href="#/about"><span class="play-icon" aria-hidden="true">▶</span>认识 D9</a></div><p class="hero-note"><span class="status-dot" aria-hidden="true"></span>保持好奇，持续创造。 LET’S MAKE SOMETHING.</p></div><div class="hero-art"><img src="assets/game-world.jpg" width="1536" height="1024" alt="一座正在被创造的浮空游戏小岛，拥有森林、传送门、瀑布和一位橙色小探险家" fetchpriority="high"><div class="art-top"><span>A SMALL IDEA. A WHOLE NEW WORLD.</span><span>SCENE / 001</span></div><span class="art-star" aria-hidden="true">✳</span><div class="art-label"><span>✦</span><b>每一个世界，都从一个想法开始。</b></div><span class="art-caption">D9 · 概念插图</span></div></section>
  <div class="container idea-strip"><span class="strip-caption">A PLACE TO CREATE</span><span class="strip-item"><i aria-hidden="true">⌘</i>写一点代码</span><span class="strip-item"><i aria-hidden="true">◈</i>造一个世界</span><span class="strip-item"><i aria-hidden="true">✳</i>讲一段故事</span><span class="strip-item"><i aria-hidden="true">↗</i>做一款游戏</span><span class="strip-item"><i aria-hidden="true">☺</i>和有趣的人一起</span></div>
  <section class="section container about-teaser"><div>${eyebrow('HELLO, WE ARE D9')}<h2>一群爱玩游戏的人，<br>开始认真地<span>做游戏。</span></h2>${link('#/about','多了解我们一点')}</div><div class="about-copy"><p>游戏不只是屏幕里的冒险，也是一种表达与创造。<br>D9 游研社围绕游戏开发，让不同的想法相遇，让不同的创作方向协作，一起探索从灵感到作品的过程。</p><div class="process-list"><div><span>01 / THINK</span><h3>大胆想一想</h3><p>从好奇出发<br>找到值得尝试的点子</p></div><div><span>02 / MAKE</span><h3>动手试一试</h3><p>从小原型开始<br>让想法获得形状</p></div><div><span>03 / PLAY</span><h3>一起玩一玩</h3><p>用体验交换反馈<br>把作品再往前推进</p></div></div></div></section>
  <section class="section works-section"><div class="container">${sectionHead('OUR CREATIVE ARCHIVE','每一次创作，都有它的故事。','#/works','浏览全部作品','按活动整理社团作品，记录从灵感到完成的过程。')}<div class="work-category-grid">${workCategories.map(workCategoryCard).join('')}</div></div></section>
  <section class="section container activities-layout"><div class="activity-intro">${eyebrow('BETTER, TOGETHER')}<h2>有些灵感，<br>要碰面才会发生。</h2><p>一次共同创作、一场开发交流，或一段意料之外的试玩反馈。让做游戏的过程，多一点同伴。</p>${link('#/activities','查看活动动态')}</div><div><div class="activity-rows">${activityFormats.map((a,i)=>`<button class="activity-row" data-format="${i}"><span class="activity-square" aria-hidden="true">${a.icon}</span><div><h3>${a.name}</h3><p>${a.desc}</p></div><span class="activity-arrow" aria-hidden="true">↗</span></button>`).join('')}</div><p class="subtle-label">活动形式示意 · 具体活动日程待发布</p></div></section>
  <section class="section learn-section"><div class="container">${sectionHead('START SMALL, KEEP LEARNING','第一步，也可以很好玩。','#/tutorials','进入开发教程','从零开始理解游戏开发，把今天学到的一点点，变成明天能玩的东西。')}<div class="learn-grid">${tutorials.map(lessonRow).join('')}</div></div></section>
  <section class="section container"><div class="about-teaser"><div>${eyebrow('THREE TEAMS, ONE CLUB')}<h2>三种分工，<br><span>同一个 D9。</span></h2>${link('#/departments','认识三个部门')}</div><div class="about-copy"><p>行政部负责行政事务与学校对接，宣策部承接活动并开展宣传招新，游研部聚集希望专注游戏开发的伙伴，也为社团提供技术支持。</p><div class="process-list"><div><span>ADMINISTRATION</span><h3>行政部</h3><p>行政事务<br>学校对接</p></div><div><span>EVENTS</span><h3>宣策部</h3><p>活动策划与开展<br>宣传招新</p></div><div><span>DEVELOPMENT</span><h3>游研部</h3><p>游戏学习与创作<br>社团技术支持</p></div></div></div></div></section>${joinBanner()}`;

  const about = () => `${pageHead('社团简介','A PLACE FOR CURIOUS CREATORS','我们是 D9 游研社，一个围绕游戏开发展开创作、学习与交流的社团。')}<div class="page-content container"><section class="about-story"><img src="assets/game-world.jpg" width="1536" height="1024" alt="为 D9 网站创作的浮空岛游戏概念插图"><div>${eyebrow('WHY WE CREATE')}<h2>从「这个游戏真好玩」，<br>到「我也想做一个」。</h2><p>游戏开发让一个想法获得规则、画面、声音和可以被体验的形状。D9 游研社以游戏开发为方向，这个网站用来介绍社团、整理学习内容，也为活动和作品留下一处可以持续更新的空间。</p><p>无论是一个会移动的方块，还是一个正在成长的世界，每一个可玩的版本，都值得被认真对待。</p><p class="soft-note">页面插图为本站概念视觉，不代表社团已发布作品。</p></div></section><section class="value-grid"><div><span class="lesson-number">01 / CURIOSITY</span><h3>带着好奇开始</h3><p>不必等到所有事情都准备好。一个问题、一张草图、一个小实验，都能成为起点。</p></div><div><span class="lesson-number">02 / COLLABORATION</span><h3>让不同想法相遇</h3><p>开发是一场共同创作。理解彼此的工作，把自己的专业变成团队的可能性。</p></div><div><span class="lesson-number">03 / ITERATION</span><h3>在体验中继续生长</h3><p>做出来，交给别人玩，再往前走一步。每一次反馈，都可以成为新的灵感。</p></div></section><div class="about-next"><h3>找到你感兴趣的方向，开始下一步。</h3>${button('#/departments','了解部门分工')}</div></div>${joinBanner()}`;

  const worksPage = categoryId => {
    currentWorkCategory = workCategories.some(c=>c.id===categoryId) ? categoryId : 'all';
    return `${pageHead('作品展示','OUR CREATIVE ARCHIVE','按每一次活动收录作品，留住创作过程与完成时的心情。')}<section class="page-content container"><div class="filter-bar"><div class="filter-buttons">${[{id:'all',name:'全部'},...workCategories].map(c=>`<button class="filter ${c.id===currentWorkCategory?'active':''}" data-work-filter="${c.id}" aria-pressed="${c.id===currentWorkCategory}">${c.name}</button>`).join('')}</div><span class="result-count" id="work-count">${workItems(currentWorkCategory).length} 篇作品</span></div><div id="work-results">${workResults(currentWorkCategory)}</div></section>${joinBanner()}`;
  };

  const activities = () => `${pageHead('最近活动','LET’S MAKE SOMETHING TOGETHER','一起动手、交换想法、体验作品。让创作的过程，多一点相遇。')}<section class="page-content container"><div class="filter-bar"><div class="filter-buttons"><button class="filter active" data-event-filter="upcoming" aria-pressed="true">近期活动</button><button class="filter" data-event-filter="past" aria-pressed="false">往期回顾</button></div><span class="result-count">正式活动待发布</span></div><div class="event-empty" id="event-results"><div class="empty-icon" aria-hidden="true">▦</div><h2>下一次相遇，正在等待发生。</h2><p>目前还没有发布活动日程。<br>先从一个小原型开始，下一次创作就多一份准备。</p>${button('#/tutorials','先去学一点新东西',true)}</div><h2 class="section-subtitle">可以一起做些什么？</h2><p>以下为活动形式介绍，具体举办安排以正式发布信息为准。</p><div class="format-grid">${activityFormats.map((a,i)=>`<article class="format-card"><span aria-hidden="true">${a.icon}</span><h3>${a.name}</h3><p>${a.desc}</p><button class="text-link" data-format="${i}">了解这种活动${arrow}</button></article>`).join('')}</div></section>`;

  const tutorialCard = t => `<a class="tutorial-card" href="#/tutorial/${t.id}"><div class="tutorial-top"><span class="category-pill">${t.category}</span><span class="lesson-number">${t.number}</span></div><h2>${t.title}</h2><p>${t.summary}</p><div class="tutorial-meta"><span>${t.level}</span><span>·</span><span>${t.minutes} 分钟</span>${readIds.has(t.id)?'<span class="read-marker">已读</span>':''}<span class="arrow" aria-hidden="true">↗</span></div></a>`;
  const tutorialPage = () => `${pageHead('开发教程','LEARN A LITTLE. MAKE A LITTLE.','一篇简洁的开发入门，一篇认识职位与工具的开发通识。先了解全景，再动手完成一个小版本。')}<section class="page-content container"><div class="filter-bar"><div class="filter-buttons">${['全部',...new Set(tutorials.map(t=>t.category))].map(c=>`<button class="filter ${c===currentCategory?'active':''}" data-tutorial-filter="${c}" aria-pressed="${c===currentCategory}">${c}</button>`).join('')}</div><label class="search-wrap"><span aria-hidden="true">⌕</span><input id="tutorial-search" type="search" placeholder="搜索你想学的内容" aria-label="搜索教程" maxlength="100"></label></div><div class="reading-progress"><span id="tutorial-count">${tutorials.length} 篇教程 · 已读 ${readIds.size} 篇</span><div class="progress-track" role="progressbar" aria-label="教程阅读进度" aria-valuenow="${readIds.size}" aria-valuemin="0" aria-valuemax="${tutorials.length}"><div class="progress-fill" style="width:${readIds.size/tutorials.length*100}%"></div></div></div><div id="tutorial-results" class="tutorial-grid tutorial-grid-pair">${tutorials.map(tutorialCard).join('')}</div></section>`;
  const departmentPage = () => `${pageHead('部门分工','THREE TEAMS, ONE CLUB','行政部、宣策部、游研部：从行政对接、活动开展，到游戏创作与技术支持，一起让社团运转起来。')}<section class="page-content container"><div class="department-grid">${departments.map(d=>`<article class="department-card ${d.color}"><div class="top"><span class="department-icon" aria-hidden="true">${d.icon}</span><span class="lesson-number">${d.number} / D9</span></div><h2>${d.name}</h2><p class="department-en">${d.en}</p><p class="department-description">${d.description}</p><ul>${d.tasks.map(t=>`<li>${t}</li>`).join('')}</ul><p class="department-fit">适合这样的你 · ${d.fit}</p>${link(`#/join/${d.id}`,'我对这个部门感兴趣')}</article>`).join('')}</div><div class="collaboration-band"><div><h3>各有分工，也彼此支持。</h3><p>行政部对接与下发安排，宣策部策划开展活动，游研部承接各部门的技术需求。</p></div><div class="collaboration-flow">行政部<span>→</span>宣策部<span>↔</span>游研部</div></div></section>`;

  const joinPage = direction => `${pageHead('加入我们','YOUR FIRST STEP INTO GAME MAKING','带上一个好奇的问题、一个想尝试的点子，或者一份想做游戏的心情。')}<section class="page-content container"><div class="join-layout"><div class="join-story"><h2>你的第一款游戏，<br>可以从这里开始想象。</h2><p>可以先阅读开发通识与入门教程，了解游戏开发，再看看行政部、宣策部、游研部各自的工作。找到想参与的部门，也认识不同方向的伙伴。</p><ul class="join-checks"><li>从简单、有边界的小目标开始</li><li>尝试一个方向，也理解其他分工</li><li>用可以体验的原型交流想法</li></ul><div class="contact-state"><strong><span class="status-dot" aria-hidden="true"></span> 联系渠道待补充</strong>社团的正式招新方式、要求与联系方式尚未提供。你可以先准备一段自我介绍，等待渠道公布后联系社团。</div>${link('#/departments','先认识社团的三个部门')}</div><form class="join-form" id="intro-form"><h2>先写下你的创作起点。</h2><p class="soft-note">这是自我介绍整理工具，生成后可复制；此处不会提交入社申请。</p><label class="form-field">怎么称呼你？<input name="nickname" placeholder="你的名字或昵称" maxlength="40" required autocomplete="nickname"></label><label class="form-field">你感兴趣的部门<select name="direction"><option value="explore">还在探索，想先了解一下</option>${departments.map(d=>`<option value="${d.id}" ${direction===d.id?'selected':''}>${d.name}</option>`).join('')}</select></label><label class="form-field">想参与什么，或有什么点子？<textarea name="idea" placeholder="游戏创作、活动策划、宣传内容，或一次想尝试的合作……" maxlength="500"></textarea></label><button class="button" type="submit">生成我的自我介绍 <span aria-hidden="true">↗</span></button><div class="intro-result" hidden><label class="form-field">你的自我介绍<textarea id="intro-output" readonly aria-label="生成的自我介绍"></textarea></label><button type="button" class="button secondary" id="copy-intro">复制介绍 <span aria-hidden="true">↗</span></button></div></form></div><div class="faq"><h2>也许你还想知道</h2><details><summary>完全没有开发经验，可以从哪里开始？</summary><p>先阅读「游戏开发入门：做出第一个可玩版本」，做一个只包含一种操作和一个目标的练习。是否招收零基础成员、具体招新要求等，请以社团正式发布的信息为准。</p></details><details><summary>一定要会写代码吗？</summary><p>行政部侧重行政事务与学校对接，宣策部负责活动承办和宣传招新；游研部也包含策划、美术、音乐等游戏开发方向。可以按兴趣了解对应部门，具体招新要求以社团正式发布的信息为准。</p></details><details><summary>作品展示为什么暂时没有文章？</summary><p>目前已建立「2026TapTap聚光灯」与「2026社团迎新GameJam」两个活动分类，尚未发布作品文章。后续作品将按对应活动收录。</p></details><details><summary>活动什么时候举办，如何报名？</summary><p>目前尚未提供正式活动日程和报名渠道。发布后会在「最近活动」展示时间、参与方式及相应说明。</p></details></div></section>`;

  function renderArticle(id) {
    const t = tutorials.find(t=>t.id===id);
    if (!t) return notFound();
    const next = tutorials[tutorials.indexOf(t)+1];
    return `<article class="article container"><header class="page-heading"><div class="breadcrumb"><a href="#/home">首页</a><span>/</span><a href="#/tutorials">开发教程</a><span>/</span><span>${t.category}</span></div>${eyebrow(`D9 BEGINNER’S HANDBOOK / ${t.number}`)}<h1>${t.title}</h1><div class="article-info"><span class="category-pill">${t.category}</span><span>${t.level}</span><span>阅读约 ${t.minutes} 分钟</span><span>D9 开发手册</span></div></header><div class="article-body">${t.body}</div><div class="article-bottom"><button class="button ${readIds.has(id)?'secondary':''}" id="mark-read" data-article="${id}" aria-pressed="${readIds.has(id)}">${readIds.has(id)?'✓ 已标记为读完':'标记为读完'}<span aria-hidden="true">↗</span></button>${link('#/tutorials','返回教程目录')}</div>${next?`<a class="article-next" href="#/tutorial/${next.id}"><span>继续下一篇 ↗</span><strong>${next.title}</strong></a>`:''}</article>`;
  }
  function notFound(){return '<section class="not-found container"><h1>404</h1><p>这个世界的入口还没有出现。</p>'+button('#/home','回到首页')+'</section>';}
  function updateTutorials(){
    const q=searchTerm.trim().toLowerCase();
    const items=tutorials.filter(t=>(currentCategory==='全部'||t.category===currentCategory)&&`${t.title} ${t.summary} ${t.category} ${(t.keywords||[]).join(' ')}`.toLowerCase().includes(q));
    const results=document.querySelector('#tutorial-results');if(!results)return;
    results.innerHTML=items.length?items.map(tutorialCard).join(''):'<div class="empty-result"><h2>还没找到这方面的教程</h2><p>换一个关键词，或看看全部教程。</p><button class="button secondary small" id="reset-search">查看全部教程 ↗</button></div>';
    document.querySelector('#tutorial-count').textContent=`${items.length} 篇教程 · 已读 ${readIds.size} / ${tutorials.length} 篇`;
    document.querySelectorAll('[data-tutorial-filter]').forEach(b=>{const active=b.dataset.tutorialFilter===currentCategory;b.classList.toggle('active',active);b.setAttribute('aria-pressed',active);});
  }
  function render(){
    if(dialog.open)dialog.close();
    const parts=(location.hash.slice(1)||'/home').split('/').filter(Boolean);
    const route=parts[0]||'home';
    if (route==='tutorial' && tutorialAliases[parts[1]]) { location.replace(`#/tutorial/${tutorialAliases[parts[1]]}`); return; }
    const pages={home,about,activities,works:()=>worksPage(parts[1]),tutorials:tutorialPage,departments:departmentPage,join:()=>joinPage(parts[1]),tutorial:()=>renderArticle(parts[1])};
    main.innerHTML=(pages[route]||notFound)();
    const names={home:'把想法做成游戏',about:'社团简介',activities:'最近活动',works:'作品展示',tutorials:'开发教程',departments:'部门分工',join:'加入我们'};
    document.title=`${route==='tutorial'?(tutorials.find(t=>t.id===parts[1])?.title||'未找到教程'):(names[route]||'页面未找到')} · D9 游研社`;
    document.querySelectorAll('[data-nav]').forEach(a=>{const active=a.dataset.nav===(route==='tutorial'?'tutorials':route);a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
    closeMenu();
    if(route==='tutorials'){document.querySelector('#tutorial-search').value=searchTerm;updateTutorials();}
    window.scrollTo({top:0,behavior:'instant'});
    main.focus({preventScroll:true});
  }
  function closeMenu(){document.querySelector('#main-nav').classList.remove('open');const b=document.querySelector('.menu-toggle');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','展开导航');}
  document.querySelector('.menu-toggle').addEventListener('click',()=>{const b=document.querySelector('.menu-toggle');const open=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',open);b.setAttribute('aria-label',open?'收起导航':'展开导航');document.querySelector('#main-nav').classList.toggle('open',open);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  document.querySelector('.skip-link').addEventListener('click',e=>{e.preventDefault();main.focus();main.scrollIntoView();});
  document.querySelector('#year').textContent=new Date().getFullYear();
  window.addEventListener('hashchange',render);
  function toast(message){const node=document.querySelector('.toast');node.textContent=message;node.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.classList.remove('visible'),2500);}
  function openDialog(html){dialogContent.innerHTML=html;dialog.showModal();document.body.style.overflow='hidden';}
  document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>{document.body.style.overflow='';});
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  document.addEventListener('input',e=>{if(e.target.id==='tutorial-search'){searchTerm=e.target.value;updateTutorials();}});
  document.addEventListener('click',async e=>{
    const work=e.target.closest('[data-work]');if(work){const item=works.find(w=>w.id===work.dataset.work);if(item)openDialog(`<article class="dialog-inner">${eyebrow('D9 WORKS')}<h2 id="dialog-title">${item.title}</h2>${item.body||''}</article>`);return;}
    const format=e.target.closest('[data-format]');if(format){const a=activityFormats[Number(format.dataset.format)];openDialog(`<div class="dialog-inner">${eyebrow('WAYS TO CREATE TOGETHER')}<h2 id="dialog-title">${a.name}</h2><p>${a.detail}</p><div style="margin-top:23px">${note('这是活动形式介绍，具体日程与报名方式待正式发布。')}${button('#/tutorials','先开始一个小练习',true)}</div></div>`);return;}
    const wf=e.target.closest('[data-work-filter]');if(wf){currentWorkCategory=wf.dataset.workFilter;document.querySelector('#work-results').innerHTML=workResults(currentWorkCategory);document.querySelector('#work-count').textContent=`${workItems(currentWorkCategory).length} 篇作品`;document.querySelectorAll('[data-work-filter]').forEach(b=>{b.classList.toggle('active',b===wf);b.setAttribute('aria-pressed',b===wf);});history.replaceState(null,'',currentWorkCategory==='all'?'#/works':`#/works/${currentWorkCategory}`);return;}
    const tf=e.target.closest('[data-tutorial-filter]');if(tf){currentCategory=tf.dataset.tutorialFilter;updateTutorials();return;}
    const ef=e.target.closest('[data-event-filter]');if(ef){document.querySelectorAll('[data-event-filter]').forEach(b=>{b.classList.toggle('active',b===ef);b.setAttribute('aria-pressed',b===ef);});const past=ef.dataset.eventFilter==='past';document.querySelector('#event-results').innerHTML=`<div class="empty-icon" aria-hidden="true">${past?'◷':'▦'}</div><h2>${past?'往期的故事，等待被记录。':'下一次相遇，正在等待发生。'}</h2><p>${past?'暂未收录往期活动回顾。<br>活动照片、作品与创作记录将在资料补齐后展示。':'目前还没有发布活动日程。<br>先从一个小原型开始，下一次创作就多一份准备。'}</p>${button('#/tutorials','先去学一点新东西',true)}`;return;}
    if(e.target.closest('#reset-search')){currentCategory='全部';searchTerm='';document.querySelector('#tutorial-search').value='';updateTutorials();return;}
    const mark=e.target.closest('#mark-read');if(mark){const id=mark.dataset.article;if(readIds.has(id))readIds.delete(id);else readIds.add(id);try{localStorage.setItem('d9-read',JSON.stringify([...readIds]));}catch{}const active=readIds.has(id);mark.innerHTML=`${active?'✓ 已标记为读完':'标记为读完'}<span aria-hidden="true">↗</span>`;mark.classList.toggle('secondary',active);mark.setAttribute('aria-pressed',active);toast(active?'又往前走了一小步，做个小练习吧。':'已取消读完标记');return;}
    if(e.target.closest('#copy-intro')){const output=document.querySelector('#intro-output');try{await navigator.clipboard.writeText(output.value);toast('已复制，可以带着它介绍自己了。');}catch{output.focus();output.select();toast('请复制已选中的自我介绍。');}}
  });
  document.addEventListener('submit',e=>{if(e.target.id!=='intro-form')return;e.preventDefault();const data=new FormData(e.target);const nickname=String(data.get('nickname')).trim();if(!nickname){e.target.elements.nickname.setCustomValidity('请输入名字或昵称');e.target.elements.nickname.reportValidity();return;}const direction=departments.find(d=>d.id===data.get('direction'));const idea=String(data.get('idea')).trim();const output=`大家好，我是${nickname}。\n\n${direction?`我对${direction.name}感兴趣，希望了解并参与这个部门的工作。`:'我希望先了解社团的三个部门，找到自己感兴趣的参与方式。'}${idea?`\n\n我想参与或尝试的事情是：${idea}`:''}\n\n期待和 D9 游研社的伙伴交流，一起参与社团活动与游戏创作！`;document.querySelector('#intro-output').value=output;document.querySelector('.intro-result').hidden=false;document.querySelector('.intro-result').scrollIntoView({behavior:'smooth',block:'nearest'});});
  document.addEventListener('input',e=>{if(e.target.name==='nickname')e.target.setCustomValidity('');});

  render();
})();
