(() => {
  'use strict';
  const {works, workCategories, tutorials, tutorialAliases, departments} = window.D9;
  const main = document.querySelector('main');
  const dialog = document.querySelector('#detail-dialog');
  const dialogContent = document.querySelector('#dialog-content');
  const readIds = new Set();
  let currentWorkCategory = 'all';
  let toastTimer;

  try {
    const saved = JSON.parse(localStorage.getItem('d9-read') || '[]');
    if (Array.isArray(saved)) {
      saved.forEach(id => {if (tutorials.some(t => t.id === id)) readIds.add(id);});
      const legacyIds = Object.keys(tutorialAliases);
      if (legacyIds.length && legacyIds.every(id => saved.includes(id))) readIds.add(tutorialAliases[legacyIds[0]]);
    }
  } catch {}

  const arrow = '<span aria-hidden="true">↗</span>';
  const shortTitle = t => t.shortTitle || t.title;
  const link = (href,label) => `<a class="text-link" href="${href}">${label}${arrow}</a>`;
  const button = (href,label) => `<a class="button" href="${href}">${label}${arrow}</a>`;
  const pageHead = title => `<header class="page-heading container"><h1>${title}</h1></header>`;
  const workItems = categoryId => works.filter(w => categoryId === 'all' || w.category === categoryId);
  const workCard = w => `<article class="work-card"><button class="work-visual" data-work="${w.id}" aria-label="阅读作品：${w.title}">${w.image?`<img src="assets/${w.image}" alt="${w.title}" loading="lazy">`:'<span aria-hidden="true">✦</span>'}</button><h2>${w.title}</h2><p>${workCategories.find(c=>c.id===w.category)?.name||''}</p></article>`;
  const workResults = categoryId => {
    const items = workItems(categoryId);
    return items.length ? `<div class="work-grid">${items.map(workCard).join('')}</div>` : '<div class="empty-state"><p>暂无作品</p></div>';
  };
  const eventResults = past => `<div class="empty-state"><p>${past?'暂无回顾':'暂无活动'}</p></div>`;
  const lessonRow = t => `<a class="lesson-row" href="#/tutorial/${t.id}" aria-label="${t.title}"><div><h3>${shortTitle(t)}</h3><p>${t.summary}</p></div>${arrow}</a>`;

  const home = () => `
    <section class="hero container">
      <div class="hero-copy"><h1>把想法，<br><em>做成游戏。</em></h1><p class="hero-description">D9 游研社 · 游戏开发与交流</p><div class="hero-actions">${button('#/works','查看作品')}${link('#/about','了解社团')}</div></div>
      <div class="hero-art"><img src="assets/game-world.jpg" width="1536" height="1024" alt="D9 游戏概念插图：森林、瀑布与浮空小岛" fetchpriority="high"></div>
    </section>
    <section class="home-learning container"><h2>开发教程</h2><div class="learn-grid">${tutorials.map(lessonRow).join('')}</div></section>`;

  const about = () => `${pageHead('社团简介')}
    <section class="page-content container about-story">
      <img src="assets/game-world.jpg" width="1536" height="1024" alt="D9 游戏概念插图">
      <div><p class="about-lead">D9 游研社是一个游戏开发社团。</p><p>策划、程序、美术、音乐，大家在这里交流、做游戏，也一起参与 Game Jam 与线下活动。</p>${link('#/departments','部门分工')}</div>
    </section>`;

  const worksPage = categoryId => {
    currentWorkCategory = workCategories.some(c=>c.id===categoryId) ? categoryId : 'all';
    const count = workItems(currentWorkCategory).length;
    return `${pageHead('作品展示')}<section class="page-content container"><div class="filter-bar"><div class="filter-buttons">${[{id:'all',name:'全部'},...workCategories].map(c=>`<button class="filter ${c.id===currentWorkCategory?'active':''}" data-work-filter="${c.id}" aria-pressed="${c.id===currentWorkCategory}">${c.name}</button>`).join('')}</div><span class="result-count" id="work-count" ${count?'':'hidden'}>${count} 篇</span></div><div id="work-results" aria-live="polite">${workResults(currentWorkCategory)}</div></section>`;
  };

  const activities = () => `${pageHead('最近活动')}<section class="page-content container"><div class="filter-bar"><div class="filter-buttons"><button class="filter active" data-event-filter="upcoming" aria-pressed="true">近期</button><button class="filter" data-event-filter="past" aria-pressed="false">往期</button></div></div><div id="event-results" aria-live="polite">${eventResults(false)}</div></section>`;

  const tutorialCard = t => `<a class="tutorial-card" href="#/tutorial/${t.id}" aria-label="${t.title}"><div class="card-heading"><h2>${shortTitle(t)}</h2>${arrow}</div><p>${t.summary}</p><span class="card-meta">${t.minutes} 分钟${readIds.has(t.id)?' · 已读':''}</span></a>`;
  const tutorialPage = () => `${pageHead('开发教程')}<section class="page-content container"><div class="tutorial-grid">${tutorials.map(tutorialCard).join('')}</div></section>`;

  const departmentPage = () => `${pageHead('部门分工')}<section class="page-content container"><div class="department-grid">${departments.map(d=>`<article class="department-card"><h2>${d.name}</h2><p>${d.description}</p><details class="department-details"><summary>查看职责</summary><ul>${d.tasks.map(t=>`<li>${t}</li>`).join('')}</ul></details></article>`).join('')}</div></section>`;

  function renderArticle(id) {
    const t = tutorials.find(t=>t.id===id);
    if (!t) return notFound();
    const next = tutorials[tutorials.indexOf(t)+1];
    return `<article class="article container"><header class="article-heading"><a class="back-link" href="#/tutorials">← 开发教程</a><h1>${t.title}</h1><p class="article-meta">约 ${t.minutes} 分钟</p></header><div class="article-body">${t.body}</div><div class="article-bottom"><button class="button ${readIds.has(id)?'secondary':''}" id="mark-read" data-article="${id}" aria-pressed="${readIds.has(id)}">${readIds.has(id)?'已读':'标记已读'}</button>${link('#/tutorials','全部教程')}</div>${next?`<a class="article-next" href="#/tutorial/${next.id}"><span>下一篇</span><strong>${shortTitle(next)}</strong>${arrow}</a>`:''}</article>`;
  }
  const notFound = () => `<section class="not-found container"><h1>404</h1><p>页面未找到</p>${button('#/home','返回首页')}</section>`;

  function render() {
    if (dialog.open) dialog.close();
    const parts=(location.hash.slice(1)||'/home').split('/').filter(Boolean);
    const route=parts[0]||'home';
    if (route==='join') {location.replace('#/home');return;}
    if (route==='tutorial' && tutorialAliases[parts[1]]) {location.replace(`#/tutorial/${tutorialAliases[parts[1]]}`);return;}
    const pages={home,about,activities,works:()=>worksPage(parts[1]),tutorials:tutorialPage,departments:departmentPage,tutorial:()=>renderArticle(parts[1])};
    main.innerHTML=(pages[route]||notFound)();
    const names={home:'把想法做成游戏',about:'社团简介',activities:'最近活动',works:'作品展示',tutorials:'开发教程',departments:'部门分工'};
    document.title=`${route==='tutorial'?(tutorials.find(t=>t.id===parts[1])?.title||'页面未找到'):(names[route]||'页面未找到')} · D9 游研社`;
    document.querySelectorAll('[data-nav]').forEach(a=>{
      const active=a.dataset.nav===(route==='tutorial'?'tutorials':route);
      a.classList.toggle('active',active);
      if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
    });
    closeMenu();
    window.scrollTo({top:0,behavior:'instant'});
    main.focus({preventScroll:true});
  }

  function closeMenu() {
    document.querySelector('#main-nav').classList.remove('open');
    const b=document.querySelector('.menu-toggle');
    b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','展开导航');
  }
  document.querySelector('.menu-toggle').addEventListener('click',()=>{
    const b=document.querySelector('.menu-toggle');
    const open=b.getAttribute('aria-expanded')!=='true';
    b.setAttribute('aria-expanded',open);b.setAttribute('aria-label',open?'收起导航':'展开导航');
    document.querySelector('#main-nav').classList.toggle('open',open);
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  document.querySelector('.skip-link').addEventListener('click',e=>{e.preventDefault();main.focus();main.scrollIntoView();});
  document.querySelector('#year').textContent=new Date().getFullYear();
  window.addEventListener('hashchange',render);

  function toast(message) {
    const node=document.querySelector('.toast');node.textContent=message;node.classList.add('visible');
    clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.classList.remove('visible'),2000);
  }
  function openDialog(html) {dialogContent.innerHTML=html;dialog.showModal();document.body.style.overflow='hidden';}
  document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>{document.body.style.overflow='';});
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});

  document.addEventListener('click',e=>{
    const work=e.target.closest('[data-work]');
    if(work){const item=works.find(w=>w.id===work.dataset.work);if(item)openDialog(`<article class="dialog-inner"><h2 id="dialog-title">${item.title}</h2>${item.body||''}</article>`);return;}
    const wf=e.target.closest('[data-work-filter]');
    if(wf){
      currentWorkCategory=wf.dataset.workFilter;
      document.querySelector('#work-results').innerHTML=workResults(currentWorkCategory);
      const count=workItems(currentWorkCategory).length;
      const countNode=document.querySelector('#work-count');countNode.textContent=`${count} 篇`;countNode.hidden=!count;
      document.querySelectorAll('[data-work-filter]').forEach(b=>{b.classList.toggle('active',b===wf);b.setAttribute('aria-pressed',b===wf);});
      history.replaceState(null,'',currentWorkCategory==='all'?'#/works':`#/works/${currentWorkCategory}`);return;
    }
    const ef=e.target.closest('[data-event-filter]');
    if(ef){document.querySelectorAll('[data-event-filter]').forEach(b=>{b.classList.toggle('active',b===ef);b.setAttribute('aria-pressed',b===ef);});document.querySelector('#event-results').innerHTML=eventResults(ef.dataset.eventFilter==='past');return;}
    const mark=e.target.closest('#mark-read');
    if(mark){
      const id=mark.dataset.article;if(readIds.has(id))readIds.delete(id);else readIds.add(id);
      try{localStorage.setItem('d9-read',JSON.stringify([...readIds]));}catch{}
      const active=readIds.has(id);mark.textContent=active?'已读':'标记已读';mark.classList.toggle('secondary',active);mark.setAttribute('aria-pressed',active);toast(active?'已标记已读':'已取消标记');
    }
  });
  render();
})();
