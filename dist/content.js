window.D9 = {
  works: [
    {id:'forest',title:'森林漫游',en:'A LITTLE WALK',category:'入门原型',type:'2D 探索',image:'forest.svg',description:'从移动开始，给一个小小世界赋予生命。用方向键探索森林，收集散落的五颗光点。',lesson:'movement',tags:['角色移动','碰撞检测','收集机制']},
    {id:'orbit',title:'星轨收集',en:'FOLLOW THE STARS',category:'交互练习',type:'点击交互',image:'orbit.svg',description:'一颗星星，一次回应。点击星点，在 20 秒内完成八次收集，感受输入与即时反馈。',lesson:'game-feel',tags:['输入反馈','随机位置','倒计时']},
    {id:'puzzle',title:'点亮方格',en:'LIGHT IT UP',category:'解谜实验',type:'逻辑解谜',image:'puzzle.svg',description:'简单规则也能产生有趣的选择。点击方格会切换它与上下左右的状态，试着点亮整个面板。',lesson:'first-prototype',tags:['规则设计','状态切换','解谜体验']}
  ],
  departments: [
    {id:'code',number:'01',icon:'⌘',name:'程序开发',en:'PROGRAMMING',description:'让规则运转，让世界回应。',tasks:['实现角色、关卡和交互逻辑','搭建工具、整理工程与版本','关注性能与稳定性'],fit:'喜欢拆解问题，愿意动手写代码',color:'mint'},
    {id:'design',number:'02',icon:'✳',name:'游戏策划',en:'GAME DESIGN',description:'把一个好点子，变成可玩的体验。',tasks:['设计核心玩法与系统规则','编排关卡、叙事与成长节奏','制作原型并根据试玩调整'],fit:'对游戏机制好奇，乐于表达想法',color:'peach'},
    {id:'art',number:'03',icon:'◈',name:'美术设计',en:'ART & VISUAL',description:'让每个世界，都有自己的样子。',tasks:['探索角色、场景与整体风格','制作 2D / 3D 素材与动画','设计清晰易用的游戏界面'],fit:'喜欢绘画、建模或视觉表达',color:'lavender'},
    {id:'audio',number:'04',icon:'♫',name:'音频设计',en:'AUDIO',description:'用声音，补上画面之外的想象。',tasks:['构思音乐氛围与声音语言','制作交互、环境和动作音效','与程序协作完成音频接入'],fit:'喜欢音乐、音效与声音叙事',color:'yellow'},
    {id:'test',number:'05',icon:'◎',name:'测试与体验',en:'PLAYTEST',description:'从玩家的感受，找到下一步。',tasks:['组织试玩并记录体验问题','复现缺陷、提供清楚的反馈','跟进修复与新手引导体验'],fit:'观察细致，愿意倾听玩家',color:'blue'},
    {id:'community',number:'06',icon:'↗',name:'运营组织',en:'COMMUNITY',description:'让创作被看见，让伙伴相遇。',tasks:['协助策划交流与创作活动','整理作品资料与开发记录','维护社团内容和对外沟通'],fit:'喜欢交流、写作与组织活动',color:'rose'}
  ],
  tutorials: [
    {id:'first-prototype',title:'从一个点子，到第一个可玩原型',category:'入门',level:'零基础友好',minutes:6,number:'01',summary:'缩小范围，找到一个最值得验证的玩法。你的第一款游戏，可以从一张纸开始。',body:`
      <p class="article-lead">做游戏的第一步，不是构想一个庞大的世界，而是找到一个能被玩家实际操作、能给出反馈的小规则。</p>
      <h2>01 / 先把想法缩成一句话</h2><p>试着用「玩家通过什么操作，完成什么目标」描述你的想法。例如：玩家通过左右移动接住落下的星星，连续接住五颗即可过关。这句话已经包含了输入、规则和目标。</p><p>如果一句话里出现了太多「同时还要」，就先删掉其中一部分。背包、多人联机、随机装备都可以以后再加。</p>
      <h2>02 / 用最便宜的方式验证</h2><p>把规则写在纸上，用硬币代表角色；或者在屏幕上放一个能移动的方块。原型的任务是回答问题，例如「这个操作是否容易理解」「这个选择是否有趣」，因此暂时不需要完整的美术和剧情。</p><div class="article-callout"><strong>动手练习</strong><p>用三个方块和一个目标点，设计一个一分钟内能解释清楚的游戏。只保留一种操作和一个胜利条件。</p></div>
      <h2>03 / 尽早交给别人玩</h2><p>请一位没有听过介绍的人试玩。先观察，别急着教他怎么做。记录他在哪里停住、第一次理解规则用了多久、结束后是否愿意再来一次。</p><p>每次试玩只修改一个关键问题，然后再试一次。一个清楚、有趣的小循环，就是继续做下去的理由。</p>
      <h2>完成检查</h2><ul><li>能用一句话描述玩法。</li><li>有可以重复进行的操作与反馈。</li><li>玩家知道目标，也知道什么时候结束。</li><li>至少有一个别人实际试玩过的版本。</li></ul>`},
    {id:'game-loop',title:'游戏为什么会动？理解游戏循环',category:'程序',level:'基础概念',minutes:7,number:'02',summary:'输入、更新、绘制：理解每一帧发生的事，再让速度和时间正确配合。',body:`
      <p class="article-lead">画面看起来连续，是因为程序持续更新状态并重新绘制。把一帧拆开看，游戏循环其实很清楚。</p>
      <h2>01 / 一帧里的三件事</h2><p>读取输入：玩家按了哪个键？更新状态：角色位置、分数和计时如何变化？绘制画面：根据最新状态把角色画出来。保持这个顺序，会让逻辑更容易理解和调试。</p>
      <h2>02 / 用时间计算移动</h2><p>如果每帧都移动固定距离，刷新率更高的设备可能移动得更快。更可靠的写法是「距离 = 每秒速率 × 两帧之间经过的秒数」。下面是浏览器中的最小示例：</p><pre><code>let previous;
let x = 0;
const speed = 80; // 每秒移动 80 像素

function frame(now) {
  const dt = previous === undefined
    ? 0 : Math.min((now - previous) / 1000, 0.05);
  previous = now;
  x += speed * dt;
  // 清除画布，再根据 x 绘制角色
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);</code></pre><p>这里给 dt 设置上限，是为了避免切回标签页时角色突然跳很远。物理模拟还会涉及固定时间步进；先理解当前这个小循环，再逐步深入。</p>
      <h2>03 / 把状态与画面分开</h2><p>用变量保存角色位置和游戏分数，绘制函数只负责展示它们。这样即使以后换一张角色图，也不需要重写移动规则。</p><div class="article-callout"><strong>动手练习</strong><p>让方块以每秒 80 像素移动，再改成每秒 160 像素。观察改动的是速度，而不是帧率。</p></div>`},
    {id:'movement',title:'做一个会移动、会收集的角色',category:'入门',level:'原型练习',minutes:8,number:'03',summary:'从方向输入到边界限制，用最少的规则搭建一段完整的探索体验。',body:`
      <p class="article-lead">移动与收集是很好的第一次练习：输入明确、结果直观，而且可以自然地加上目标与结束状态。</p>
      <h2>01 / 保存方向键状态</h2><p>按下按键时记为 true，松开时改为 false。每帧读取这些状态，而不是只在按下事件里移动一次。窗口失去焦点时清空按键，避免角色一直向前走。</p><p>左右键对应水平轴，上下键对应垂直轴。如果同时按下两个方向，可以先把向量归一化，避免斜着走比直着走更快。</p>
      <h2>02 / 先用矩形处理边界</h2><p>最简单的地图可以是一块矩形。限制角色中心的位置，给边缘留出半个角色的宽度，就能避免角色走出画面。</p><pre><code>// min、max 是角色中心允许到达的位置
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
player.x = clamp(player.x, minX, maxX);
player.y = clamp(player.y, minY, maxY);</code></pre>
      <h2>03 / 检查角色是否接近目标</h2><p>对于圆形收集物，可以计算两者中心的距离。当距离小于收集半径与角色半径之和时，移除收集物并加分。让消失、分数变化和一句提示同时出现，玩家就能理解发生了什么。</p><div class="article-callout"><strong>动手练习</strong><p>放置五个收集物。收集全部后显示完成提示，并提供重新开始按钮。网站中的「森林漫游」可以作为这次练习的体验参考。</p></div>`},
    {id:'game-feel',title:'让一次点击，也有一点「手感」',category:'设计',level:'体验设计',minutes:5,number:'04',summary:'用及时、清楚、有分寸的反馈，让玩家知道每一次操作都被听见。',body:`
      <p class="article-lead">同样是按下按钮，有的操作显得轻快，有的却令人困惑。差别常常藏在操作与反馈之间。</p>
      <h2>01 / 先让操作被看见</h2><p>玩家点击后，目标颜色变化、大小短暂改变或分数更新，都能确认这次操作已被识别。反馈首先应该准确表达状态，再考虑是否好看。</p><p>先实现最小的视觉回应，再根据场景加入声音。不要用长动画阻塞下一次操作。</p>
      <h2>02 / 为重要变化分配注意力</h2><p>普通收集物可以轻轻闪一下，达成目标则可以给出更明显的完成提示。如果每次操作都伴随强烈震动和满屏特效，真正重要的变化反而会被淹没。</p>
      <h2>03 / 给不同玩家留出余地</h2><p>不要只靠颜色区分成功和失败，可以同时使用形状、文字或图标。提供清晰的可点击区域；在需要时允许减少动态效果。</p><div class="article-callout"><strong>动手练习</strong><p>为「收集一颗星星」制作三个反馈版本：只有分数变化、增加轻微缩放、再增加短暂光点。让别人比较哪个更清楚，哪个过于热闹。</p></div>`},
    {id:'visual-language',title:'为小型游戏建立统一的视觉语言',category:'美术',level:'视觉基础',minutes:6,number:'05',summary:'用有限的颜色、形状和尺寸规则，让原型也能拥有清楚而一致的气质。',body:`
      <p class="article-lead">统一的美术不一定意味着复杂的绘画。对于小型游戏，一组明确的视觉约定往往更有帮助。</p>
      <h2>01 / 先分清楚游戏里的角色</h2><p>列出玩家、可收集物、危险物和背景。让它们在形状、明暗或轮廓上有所区分。玩家需要一眼找到自己的角色，也需要知道什么值得接近。</p>
      <h2>02 / 限制选择，建立约定</h2><p>先选一个背景色、一个主体色和一个强调色。确定像素尺寸或模型尺度，并在整个项目中保持一致。把颜色和尺寸记在一张小表里，方便团队沿用。</p>
      <h2>03 / 在实际游戏画面中检查</h2><p>素材单独看起来漂亮，不代表放进关卡后仍然清楚。把角色缩小到真实尺寸，放到最复杂的背景上，再检查轮廓是否容易辨认。</p><div class="article-callout"><strong>动手练习</strong><p>只用四种颜色与三种几何形状画出玩家、目标和障碍。截一张实际画面，让别人指出可操作的角色与目标。</p></div>`},
    {id:'team-workflow',title:'小团队的第一套协作约定',category:'协作',level:'团队实践',minutes:6,number:'06',summary:'任务拆分、版本记录与试玩反馈，让不同方向的创作者顺畅地一起工作。',body:`
      <p class="article-lead">团队协作的目标，是让每个人都知道正在解决什么问题，以及怎样把自己的工作交给下一位伙伴。</p>
      <h2>01 / 把任务写成可验收的结果</h2><p>「做一下战斗」太模糊；「玩家按空格后释放一次攻击，命中目标时扣除 1 点生命」更容易讨论。每项任务尽量有一个负责人、一条完成标准和清楚的依赖关系。</p>
      <h2>02 / 保持可以运行的共同版本</h2><p>使用版本管理记录改动，每次提交尽量围绕一个明确目的。团队提前约定素材目录与命名方式，避免多人同时修改同一个难以合并的场景文件。</p><p>引擎生成的缓存和本地临时文件通常不需要进入仓库；具体忽略规则要根据所用工具确认。提交前先在自己的设备运行一次，合并后再验证共同版本。</p>
      <h2>03 / 反馈要可复现，也要有优先级</h2><p>记录问题时附上操作步骤、预期结果和实际结果。先处理无法运行、无法继续游戏的问题，再处理影响理解的问题，最后才是细节打磨。</p><div class="article-callout"><strong>动手练习</strong><p>为一个两分钟的小游戏拆出五项任务，每项都写上完成标准。约定一个能让所有人实际玩到版本的时间，一起检查这套拆分是否可行。</p></div>`},
    {id:'game-project-overview',title:'游戏项目全景入门：职位分工与软件工具',category:'入门',level:'零基础全景导读',minutes:16,number:'07',summary:'用一个「收集金币」小游戏，认识策划、程序、美术等职位，理解游戏引擎、Blender、Git 等工具怎样协作。',keywords:['职位','岗位','分工','软件','工具','引擎','项目','Godot','Unity','Unreal','UE','GDScript','VS Code','Visual Studio','Krita','Aseprite','Blender','Figma','Audacity','REAPER','FMOD','Git','GitHub','Gitee','Trello','Notion','Excel','Google Sheets','策划','程序','美术','动画','UI','UX','音频','测试','QA','技术美术','TA','制作人','运营','发行'],body:`
      <p class="article-lead">第一次接触游戏开发，很容易被「策划、程序、技术美术、引擎、Git」这些词绕晕。我们用一个“角色在小岛上收集五枚金币”的小游戏，看看一个项目里有哪些工作、各类软件分别帮什么忙，以及它们怎样一起产出一个能玩的版本。</p>

      <h2>01 / 先把项目看成：人、工具和交付物</h2>
      <p>一个游戏项目，是一群人利用工具完成一系列工作，并把结果接起来的过程。理解它时，可以先问三个问题：</p>
      <div class="article-concept-grid" aria-label="理解游戏项目的三个角度">
        <section><span>PEOPLE</span><h3>谁负责这件事？</h3><p>谁设计规则，谁实现交互，谁验证结果？这是分工。</p></section>
        <section><span>TOOLS</span><h3>用什么来完成？</h3><p>用引擎、画图软件、音频编辑器或任务表来推进工作。</p></section>
        <section><span>DELIVERABLES</span><h3>交给别人什么？</h3><p>一张图片、一段脚本、一份规则说明，或一个试玩版本。</p></section>
      </div>
      <p>例如，“做金币”至少包含三个不同结果：策划说明金币如何计分，美术交付金币图片，程序让金币在碰到角色后消失并加分。只有图片时，金币还只是素材；接入规则和反馈后，它才成为游戏中的可交互对象。</p>

      <h2>02 / 常见职位：每种分工解决什么问题？</h2>
      <p>职位名称会因团队和项目而不同。下面按工作职责梳理常见方向，帮助你理解协作；小型社团项目中，一个人往往会兼顾多个方向。</p>
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
      <p>可以接着阅读<a href="#/tutorial/first-prototype">「从一个点子，到第一个可玩原型」</a>开始缩小范围，或阅读<a href="#/tutorial/team-workflow">「小团队的第一套协作约定」</a>进一步整理任务。想了解网站中展示的协作方向，也可以前往<a href="#/departments">部门分工</a>。</p>

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
