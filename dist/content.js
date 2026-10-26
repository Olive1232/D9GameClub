window.D9 = {
  workCategories: [
    {id:'taptap-2026',name:'2026TapTap聚光灯',en:'TAPTAP SPOTLIGHT / 2026',icon:'✦',color:'mint'},
    {id:'welcome-gamejam-2026',name:'2026社团迎新GameJam',en:'WELCOME GAME JAM / 2026',icon:'✳',color:'peach'}
  ],
  works: [
    {
      id:'red-cave',
      title:'红溶洞',
      category:'taptap-2026',
      genre:'3D 模拟游戏',
      image:'red-cave-cover.webp',
      imageWidth:1080,
      imageHeight:608,
      description:'进入神秘的地下洞穴，开始你与 的奇怪冒险吧。在各个岩洞之间穿梭，收集这里为数不多的生物，并将它们喂给 ，最终揭开 的面纱....',
      screenshots:[{image:'red-cave-gameplay-01.webp',width:1656,height:932,alt:'《红溶洞》游戏实机：地下岩洞与可收集的生物'}],
      downloadUrl:'https://pan.quark.cn/s/e49c694e5bf9'
    }
  ],
  departments: [
    {id:'admin',number:'01',icon:'▦',name:'行政部',en:'ADMINISTRATION',description:'行政事务与学校对接',tasks:['负责社团行政事务与相关协调工作','与学校相关部门对接，沟通社团工作安排','向宣策部下发活动安排及相关要求'],fit:'愿意沟通协调，关注行政流程与事务落实',color:'mint'},
    {id:'publicity',number:'02',icon:'✳',name:'宣策部',en:'EVENTS & PUBLICITY',description:'活动承办与宣传招新',tasks:['承接、承办行政部下发的活动','策划并开展 Game Jam、线下团建等活动','协调活动场地与设备的租借及现场事务','负责社团宣传、招新与相关内容制作'],fit:'喜欢活动策划、组织执行、宣传或招新工作',color:'peach'},
    {id:'gamedev',number:'03',icon:'⌘',name:'游研部',en:'GAME DEVELOPMENT',description:'游戏开发与技术支持',tasks:['为对游戏开发感兴趣的同学提供交流与创作空间','围绕策划、程序、美术、音乐等方向共同学习与实践','承接其他部门的技术需求，提供相应支持','编写游戏开发教程，整理经验与学习资料'],fit:'想专注游戏开发，或愿意参与社团技术支持',color:'lavender'}
  ],
  tutorialAliases: {
    'first-prototype':'game-development-basics',
    'game-loop':'game-development-basics',
    'movement':'game-development-basics',
    'game-feel':'game-development-basics',
    'visual-language':'game-development-basics',
    'team-workflow':'game-development-basics'
  },
  tutorials: [
    {id:'game-development-basics',title:'游戏开发入门：做出第一个可玩版本',shortTitle:'开发入门',category:'开发入门',level:'零基础友好',minutes:7,number:'01',summary:'从想法到第一个可玩版本。',keywords:['原型','游戏循环','移动','碰撞','收集','反馈','手感','美术','视觉','协作','版本管理','Git','试玩','程序','策划','入门'],body:`
      <p class="article-lead">用一个能移动、能收集、能重新开始的小游戏，走完第一次开发。先把想法做小，再把输入、规则、画面与反馈接起来。</p>
      <h2>01 / 把点子缩成一个可验证的目标</h2>
      <p>用一句话写清“玩家怎样操作，完成什么目标”。例如：用方向键移动角色，收集五枚金币后过关。第一版只保留一种主要操作和一个胜利条件，先用纸笔或几何方块验证规则。</p>
      <h2>02 / 理解每一帧：输入、更新、绘制</h2>
      <p>游戏不断重复读取输入、更新状态、绘制画面。用变量保存位置、分数与游戏状态，再根据这些数据显示画面。移动距离按“每秒速度 × 经过的时间”计算，避免把速度直接绑在帧数上。</p>
      <h2>03 / 接起移动、收集和结束状态</h2>
      <p>记录方向键的按下与松开状态，给角色设置地图边界；同时按两个方向时，统一移动向量的长度。检测角色与收集物是否接触，收集后只加分一次并移除目标。集齐五枚后显示完成提示，重新开始时重置分数、角色和收集物。</p>
      <h2>04 / 让每次操作都有清楚的反馈</h2>
      <p>收集发生时，让金币消失、计数变化，并加入适量的视觉或声音回应。反馈要及时、能说明状态；普通操作保持轻快，完成目标时再强调。重要信息同时用文字、形状或图标表达，避免只靠颜色区分。</p>
      <h2>05 / 用少量规则统一视觉</h2>
      <p>先分清玩家、目标、障碍和背景，再约定几种颜色、统一的素材尺寸与轮廓。使用占位图就能开始验证；素材完成后，放到真实游戏尺寸与最复杂的背景里检查，确认角色与目标仍然容易辨认。</p>
      <h2>06 / 一起协作，再交给别人试玩</h2>
      <p>把任务写成可验收的结果，例如“碰到金币加 1 分，同一枚不重复计分”，并明确负责人。用版本管理记录改动，提前约定目录、命名和素材交接方式。请没听过介绍的人试玩，先观察再解释；记录操作步骤、预期与实际结果，每次优先解决一个关键问题。</p>
      <div class="article-callout"><strong>完成你的第一次小练习</strong><p>做一个能移动、收集五枚金币并重新开始的版本。把它交给一位伙伴试玩，记录一个问题，修改后再导出一次。</p></div>
      <h2>交付前，检查这五件事</h2>
      <ul><li>玩家能理解操作方式和目标。</li><li>移动、收集与计分按规则工作。</li><li>完成提示清楚，重开后状态正确重置。</li><li>角色、目标与背景容易区分。</li><li>有一个别人实际运行过、并根据反馈改进的版本。</li></ul>
      <p>想先了解项目里的职位、软件和交付物，可以阅读<a href="#/tutorial/game-project-overview">「游戏开发通识：职位分工与软件工具」</a>。</p>`},
    {id:'game-project-overview',title:'游戏开发通识：职位分工与软件工具',shortTitle:'开发通识',category:'开发通识',level:'零基础全景导读',minutes:16,number:'02',summary:'认识项目分工与常用工具。',keywords:['职位','岗位','分工','软件','工具','引擎','项目','Godot','Unity','Unreal','UE','GDScript','VS Code','Visual Studio','Krita','Aseprite','Blender','Figma','Audacity','REAPER','FMOD','Git','GitHub','Gitee','Trello','Notion','Excel','Google Sheets','策划','程序','美术','动画','UI','UX','音频','测试','QA','技术美术','TA','制作人','运营','发行'],body:`
      <p class="article-lead">第一次接触游戏开发，很容易被「策划、程序、技术美术、引擎、Git」这些词绕晕。我们用一个“角色在小岛上收集五枚金币”的小游戏，看看一个项目里有哪些工作、各类软件分别帮什么忙，以及它们怎样一起产出一个能玩的版本。</p>

      <h2>01 / 先把项目看成：人、工具和交付物</h2>
      <p>一个游戏项目，是一群人利用工具完成一系列工作，并把结果接起来的过程。理解它时，可以先问三个问题：</p>
      <div class="article-concept-grid" aria-label="理解游戏项目的三个角度">
        <section><h3>谁负责这件事？</h3><p>谁设计规则，谁实现交互，谁验证结果？这是分工。</p></section>
        <section><h3>用什么来完成？</h3><p>用引擎、画图软件、音频编辑器或任务表来推进工作。</p></section>
        <section><h3>交给别人什么？</h3><p>一张图片、一段脚本、一份规则说明，或一个试玩版本。</p></section>
      </div>
      <p>例如，“做金币”至少包含三个不同结果：策划说明金币如何计分，美术交付金币图片，程序让金币在碰到角色后消失并加分。只有图片时，金币还只是素材；接入规则和反馈后，它才成为游戏中的可交互对象。</p>

      <h2>02 / 常见职位：每种分工解决什么问题？</h2>
      <p>下面介绍游戏项目中的常见工作职责，小型团队中，一个人往往会兼顾多个方向。D9 的社团组织由行政部、宣策部、游研部组成；这些项目职位可以在游研部的创作小组内协作，具体部门职责见<a href="#/departments">部门分工</a>。</p>
      <p class="article-table-hint">窄屏阅读时，表格可以左右滑动。</p>
      <div class="article-table-wrap" tabindex="0" role="region" aria-label="常见游戏开发职位与交付物对照表，可横向滚动">
        <table class="article-table">
          <caption>从“负责什么”认识职位</caption>
          <thead><tr><th scope="col">职位 / 方向</th><th scope="col">主要负责什么</th><th scope="col">常见交付物</th></tr></thead>
          <tbody>
            <tr><th scope="row">游戏策划</th><td>设计玩法规则、关卡、数值与叙事，明确玩家做什么、目标是什么。</td><td>玩法说明、关卡草图、数值表、对话文本。</td></tr>
            <tr><th scope="row">程序开发</th><td>实现角色操作、碰撞、界面、存档等功能；处理错误和性能问题。联网项目还会涉及客户端与服务端分工。</td><td>脚本与代码、功能原型、开发工具、可运行版本。</td></tr>
            <tr><th scope="row">美术与动画</th><td>制作角色、场景、道具、贴图、动作与特效；2D 和 3D 项目的具体流程不同。</td><td>原画、精灵图、3D 模型、贴图、动画与特效素材。</td></tr>
            <tr><th scope="row">UI / UX 设计</th><td>UI 是玩家看见的界面；UX 关注使用过程是否容易理解。这个方向会设计菜单、提示、操作流程和信息层级。</td><td>界面布局、流程图、交互原型、按钮与图标规范。</td></tr>
            <tr><th scope="row">技术美术（TA）</th><td>连接美术与程序，例如制作材质和着色器、改进素材导入流程、协助排查画面性能问题。</td><td>材质、着色器、素材制作规范、辅助工具。</td></tr>
            <tr><th scope="row">音乐与音效</th><td>设计配乐、环境声、动作和交互音效，并与程序讨论何时播放、如何变化。</td><td>音乐、音效、音频事件说明、混音方案。</td></tr>
            <tr><th scope="row">测试 / QA 与试玩研究</th><td>QA 关注功能是否按预期工作、问题如何复现；试玩观察还会关注玩家是否看懂、哪里卡住。</td><td>缺陷记录、复现步骤、测试清单、试玩反馈。</td></tr>
            <tr><th scope="row">制作人与项目管理</th><td>协调目标、范围、资源、排期和沟通，让团队清楚当前优先级与下一次交付。</td><td>里程碑、任务分配、进度记录、版本计划。</td></tr>
            <tr><th scope="row">发行与运营</th><td>整理对外展示内容、维护发布页面、组织宣传与交流、收集上线后的反馈。</td><td>作品介绍、截图与视频、发布说明、社区反馈记录。</td></tr>
          </tbody>
        </table>
      </div>
      <div class="article-callout"><strong>职责可以合并，但要有人认领</strong><p>两三个人做小游戏时，可以由一人负责程序和版本管理，一人负责美术和界面，一人负责玩法与试玩组织。其他职责共同补位。重要的是把“谁来做、交付什么、怎样算完成”说清楚。</p></div>

      <h2>03 / 软件地图：它们分别用在项目的哪一环？</h2>
      <p>先分清软件的类别，再记软件名。同一类别通常有多种选择；表中的软件是帮助理解的例子，可以按项目需求和已有经验选用。</p>
      <div class="article-table-wrap" tabindex="0" role="region" aria-label="游戏开发软件类别、用途与产出对照表，可横向滚动">
        <table class="article-table">
          <caption>按工作任务选择工具</caption>
          <thead><tr><th scope="col">类别与软件例子</th><th scope="col">主要用途</th><th scope="col">你会得到什么</th></tr></thead>
          <tbody>
            <tr><th scope="row">游戏引擎<br>Godot / Unity / Unreal Engine</th><td>组织场景、显示画面、处理输入和物理、播放音频、执行游戏逻辑，并导出可运行的游戏。</td><td>包含场景、代码和资源的工程，以及导出的游戏版本。</td></tr>
            <tr><th scope="row">代码编辑器 / IDE<br>引擎内置编辑器、VS Code、Visual Studio</th><td>编写代码，查找定义、检查错误和调试。具体语言与调试方式取决于引擎及配套配置。</td><td>实现行为的脚本或程序代码。Godot 的 GDScript 可以直接用内置脚本编辑器编写。</td></tr>
            <tr><th scope="row">2D 图像与像素动画<br>Krita / Aseprite</th><td>Krita 可用于绘画、概念图与贴图；Aseprite 面向像素图与精灵动画。</td><td>可继续编辑的源文件，以及用于引擎的 PNG 图片、精灵图集等。</td></tr>
            <tr><th scope="row">3D 制作<br>Blender</th><td>制作模型、材质、骨骼绑定与动画，再按引擎支持的流程导出和接入。</td><td>3D 模型、动画、贴图等资源，以及可继续修改的工程文件。</td></tr>
            <tr><th scope="row">界面与交互设计<br>Figma 等设计工具</th><td>讨论界面布局、按钮状态和页面之间的跳转，先验证信息和操作流程。</td><td>界面设计与交互原型；实际游戏里的界面仍需在引擎中实现。</td></tr>
            <tr><th scope="row">音频录制与编辑<br>Audacity / REAPER</th><td>录制、剪辑、整理和处理声音；音乐制作也会用到音源与编曲工具。</td><td>配乐、音效与音频工程，供后续接入游戏。</td></tr>
            <tr><th scope="row">交互音频中间件<br>FMOD Studio</th><td>为较复杂的声音需求组织音频事件、混音与随游戏状态变化的音乐，再与引擎集成。</td><td>音频事件及相关资源，游戏逻辑通过集成接口驱动它们。</td></tr>
            <tr><th scope="row">版本控制与远程托管<br>Git + GitHub / Gitee</th><td>Git 在本地记录版本与分支；GitHub、Gitee 托管远程仓库，方便共享与协作。</td><td>可追踪的提交历史、团队共同使用的仓库。</td></tr>
            <tr><th scope="row">文档与任务管理<br>共享文档、Trello、Notion</th><td>整理规则和素材规范，记录任务由谁负责、做到哪一步、还在等什么。</td><td>设计文档、任务看板、会议与版本记录。</td></tr>
            <tr><th scope="row">表格与数据整理<br>Excel / Google Sheets</th><td>记录数值、道具、对话或测试结果；程序可按约定读取导出的数据。</td><td>数值表、内容清单，以及 CSV 等数据文件。</td></tr>
          </tbody>
        </table>
      </div>
      <p>例如，<a href="https://docs.godotengine.org/en/stable/getting_started/step_by_step/nodes_and_scenes.html" target="_blank" rel="noopener noreferrer">Godot 的场景与节点文档</a>展示了引擎怎样把图像、碰撞和相机等组件组织起来；<a href="https://www.blender.org/features/" target="_blank" rel="noopener noreferrer">Blender 的功能介绍</a>则覆盖模型与动画制作。它们在一条流程中处理不同的工作，素材需要经过导出、导入和配置才能在游戏中发挥作用。</p>
      <p>2D 小游戏可以先使用画图工具和引擎；基础音效也可以直接使用引擎的音频功能。需要 3D 内容、复杂音频或更专门的协作流程时，再增加相应工具。</p>

      <h2>04 / 一枚金币，从想法到玩家手里</h2>
      <p>把软件和职位连起来看会更直观。假设目标是：玩家走近金币即可收集，收集五枚后显示完成提示。</p>
      <ol class="article-project-steps">
        <li><strong>策划写清规则</strong><p>“碰到一枚金币加 1 分；金币消失；同一枚只能计分一次；达到 5 分时完成。”输出一段规则和可验收条件。</p></li>
        <li><strong>美术准备看得见的素材</strong><p>先用占位图验证流程，再用 Krita 或 Aseprite 制作金币图片或动画。交付时说明尺寸、透明背景与命名方式，例如 coin.png。</p></li>
        <li><strong>程序把素材接成一个对象</strong><p>在引擎中组合显示图像、检测接近或碰撞的组件，写出加分与移除逻辑，再把这个金币对象放进关卡。</p></li>
        <li><strong>界面与音频补足反馈</strong><p>界面显示“已收集 1 / 5”；音频伙伴交付一段收集音效；程序在收集发生时播放它们。先约定触发时机，再检查听感与信息是否清楚。</p></li>
        <li><strong>测试把规则逐条走一遍</strong><p>检查一枚金币是否会重复加分、第五枚是否触发完成、重开后计数是否归零。把复现步骤写进问题记录，让负责人可以重现。</p></li>
        <li><strong>团队整理并交付一个版本</strong><p>修复问题后提交到 Git 仓库，导出目标平台的试玩包，写明运行方法和改动，请没有参与制作的人体验。</p></li>
      </ol>
      <p>这套过程会反复迭代：试玩发现金币不明显，可能需要调整颜色或摆放；发现加分两次，就需要检查逻辑与事件触发。反馈可以回到任何一个环节。</p>

      <h2>05 / 项目文件、素材源文件和游戏成品有什么区别？</h2>
      <p>在 Godot 的 2D 示例中，工程目录可以像下面这样整理。目录名只是示意，团队可以采用自己的约定：</p>
      <pre><code>coin-demo/
  project.godot       # 工程配置
  scenes/            # 场景、角色和金币对象
  scripts/           # 游戏行为脚本
  assets/
    art/             # 导入引擎的图片等素材
    audio/           # 导入引擎的音乐与音效
  docs/              # 规则、素材约定与试玩记录</code></pre>
      <ul>
        <li><strong>工程与源码：</strong>让开发者继续制作游戏的文件，例如场景、脚本、资源和项目配置。</li>
        <li><strong>素材源文件：</strong>方便作者继续修改的绘画、建模或音频工程。例如 .kra、.aseprite、.blend 文件，通常还会导出为引擎可使用的资源。</li>
        <li><strong>构建 / 导出版本：</strong>给目标平台运行的游戏产物。它和开发工程的用途不同；修改源码之后，还需要重新导出，玩家才会拿到新版本。</li>
        <li><strong>仓库：</strong>用 Git 管理的一组项目文件及其提交历史。它可以只在本地，也可以推送到 GitHub 或 Gitee。</li>
      </ul>
      <div class="article-callout"><strong>保存、提交、推送、导出，是四个动作</strong><p>保存把修改写进文件；提交把选定文件的状态记入本地 Git 历史；推送把提交上传到远程仓库；导出把工程生成为目标平台的游戏版本。远程仓库中的源码更新后，是否自动生成或发布游戏，要看项目有没有配置相应流程。</p></div>
      <p>团队开始协作前，先约定引擎版本、文件命名、素材尺寸与导出格式，并商量哪些场景或素材文件由谁修改。较大的图片、模型等二进制文件通常无法像文本代码那样自动逐行合并，需要提前协调。</p>

      <h2>06 / 零基础的小团队，先准备哪几样就够了？</h2>
      <p>如果目标是一个简单的单机 2D 原型，可以先采用下面这组组合，边做边补充：</p>
      <ul>
        <li><strong>一个引擎：</strong>例如 Godot，用它搭场景、写行为和运行游戏。使用 GDScript 时，可以直接从内置脚本编辑器开始。</li>
        <li><strong>一种画图方式：</strong>先使用几何占位图；需要制作正式 2D 素材时，再从 Krita 或 Aseprite 中选择适合风格的工具。</li>
        <li><strong>基础音频工具：</strong>需要录制、剪辑和整理音效时使用 Audacity 等工具，再把音频导入引擎。</li>
        <li><strong>一个 Git 仓库：</strong>记录每一次明确的改动，用 GitHub 或 Gitee 与伙伴共享。</li>
        <li><strong>一份共同任务表：</strong>列出任务、负责人和完成条件；共享文档或简单表格就能作为起点。</li>
      </ul>
      <p>如果团队已经熟悉 Unity、Unreal Engine 或其他引擎，也可以沿用已有工具和经验。先围绕明确的小目标完成一次“制作—试玩—修改—交付”，再决定下一项要深入的技能。</p>

      <h2>07 / 你的第一个练习：给三人小组分工</h2>
      <div class="article-callout"><strong>目标：完成一个能收集五枚金币的小游戏</strong><p>A 负责规则、关卡草图与试玩记录；B 负责角色、金币、界面和音效素材的整理；C 负责引擎实现与导出。三个人都参与试玩，并约定每次改动如何进入共同版本。</p></div>
      <p>写下下面五件事，再开始制作：</p>
      <ol>
        <li>玩家怎样操作？怎样算完成？</li>
        <li>每个人这一次要交付什么文件或结果？</li>
        <li>哪些内容先使用占位素材？尺寸和命名怎么约定？</li>
        <li>什么时候可以交给一个不懂项目的人试玩？</li>
        <li>试玩后最先解决哪个问题？下一版由谁跟进？</li>
      </ol>
      <p>可以接着阅读<a href="#/tutorial/game-development-basics">「游戏开发入门：做出第一个可玩版本」</a>，把想法、实现、反馈与协作串成一次小练习。想了解社团三个部门的职责，可以前往<a href="#/departments">部门分工</a>。</p>

      <h2>继续查阅：官方资料</h2>
      <p>下面的资料可以按需查阅。软件用途依据官方介绍整理，本文不限定具体版本，也不要求把所有工具都装好才开始制作。</p>
      <ul class="article-sources">
        <li>引擎与脚本：<a href="https://docs.godotengine.org/en/stable/getting_started/step_by_step/nodes_and_scenes.html" target="_blank" rel="noopener noreferrer">Godot 场景与节点</a>、<a href="https://docs.godotengine.org/en/stable/tutorials/editor/script_editor.html" target="_blank" rel="noopener noreferrer">Godot 脚本编辑器</a>、<a href="https://unity.com/products/unity-engine" target="_blank" rel="noopener noreferrer">Unity</a>、<a href="https://www.unrealengine.com/en-US" target="_blank" rel="noopener noreferrer">Unreal Engine</a>。</li>
        <li>美术与动画：<a href="https://krita.org/en/features/" target="_blank" rel="noopener noreferrer">Krita</a>、<a href="https://www.aseprite.org/docs/" target="_blank" rel="noopener noreferrer">Aseprite</a>、<a href="https://www.blender.org/features/" target="_blank" rel="noopener noreferrer">Blender</a>。</li>
        <li>音频：<a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer">Audacity</a>、<a href="https://www.reaper.fm/" target="_blank" rel="noopener noreferrer">REAPER</a>、<a href="https://www.fmod.com/studio" target="_blank" rel="noopener noreferrer">FMOD Studio</a>。</li>
        <li>编辑与版本管理：<a href="https://code.visualstudio.com/docs/sourcecontrol/overview" target="_blank" rel="noopener noreferrer">VS Code 的版本控制说明</a>、<a href="https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F" target="_blank" rel="noopener noreferrer">Git：什么是 Git</a>。</li>
      </ul>`}
  ]
};
