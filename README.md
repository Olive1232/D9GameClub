# D9 游研社网站

浅色、简洁的游戏开发社团网站。不展示学校名称。

## GitHub 仓库与网站入口

默认仓库：[Olive1232/D9GameClub](https://github.com/Olive1232/D9GameClub)。原 Gitee 仓库保留为备用远程地址 `gitee`，GitHub 使用 `origin`。

```sh
git push origin main  # 更新 GitHub
git push gitee main   # 如需同步，再更新 Gitee
```

仓库原有的 GitHub Pages 已启用。根目录 `index.html` 将访问转入 `dist/`，`.nojekyll` 用于直接提供静态文件。源码中的相对资源路径支持 GitHub Pages 项目子路径，无需修改。

更新时合并了本地与 GitHub 原有提交历史。原 GitHub 版本另保留在 `backup/before-d9-web-update-4ef69ca` 分支；旧版图片也保留在仓库根目录。

## 本地运行

无需安装依赖。使用 Node.js 运行：

```sh
npm run dev
```

打开 `http://127.0.0.1:4173`。语法检查使用 `npm run check`。

## 页面与功能

- 首页：社团概览、游戏场景插图、各栏目入口。
- 社团简介：游戏开发方向及创作理念。
- 最近活动：近期与往期分类，以及活动形式介绍。真实活动尚待提供。
- 作品展示：按活动分类，包含「全部」「2026TapTap聚光灯」「2026社团迎新GameJam」，作品文章暂留空。
- 开发教程：两篇文章——「游戏开发入门：做出第一个可玩版本」汇总原六篇教程；「游戏开发通识：职位分工与软件工具」介绍项目职位、工具与协作。支持分类、关键词搜索、文章详情及已读标记，原六篇链接会跳转至合并后的教程。
- 部门分工：行政部负责行政事务与学校对接；宣策部承接活动、策划开展、场地设备租借与宣传招新；游研部聚集游戏开发兴趣与创作，提供技术支持并编写教程。
- 加入我们：自我介绍生成与复制、常见问题。此处不会发送入社申请。

支持桌面、平板与手机。使用语义化导航、焦点样式、键盘操作、原生对话框与减少动画偏好。

## 内容维护

- `dist/content.js`：教程全文、旧教程链接映射、作品活动分类与文章数据、部门职责。
- `dist/app.js`：页面结构、活动形式、分类筛选、阅读与自我介绍等交互。
- `dist/styles.css`：颜色、排版与响应式布局。
- `dist/assets/`：线上使用的首页插图与图标。
- `artwork/game-world-original.png`：首页插图原始文件；线上使用约 440 KB 的 JPEG。
- `.openai/hosting.json`：此前 Sites 预览的历史配置，GitHub Pages 不使用此文件。

所有路由采用 `#/…`，静态托管无需配置服务端路由回退。`dist/` 可直接部署。

后续需补齐：正式 Logo、详细社团资料、真实活动时间与报名链接、社团作品与作者资料，以及联系方式。当前界面已明确标识待补充内容。

## 插图来源与生成提示

首页插图使用内置 image_gen 工具生成，原始文件保存于 `artwork/game-world-original.png`，网页版本为 `dist/assets/game-world.jpg`。下列为最终生成提示；站点图标为代码绘制的 SVG。

> Use case: stylized-concept. Asset type: hero illustration for D9, a friendly game development club website, clean modern light design. Create one beautiful high quality stylized 3D diorama, landscape 3:2 composition. A small imaginative game world under construction: a pale seafoam green floating island with rounded grass terraces, a winding cream path, a tiny warm orange explorer, a cream architectural arch gateway, a few rounded trees, scattered small geometric building blocks, a soft aquamarine water channel with waterfall and a simple floating platform. A tiny flag with no letters. Toy-like clay material, sophisticated game concept art, clean ambient occlusion, soft morning studio lighting, crisp detailed silhouettes, gentle shadows, pastel mint and forest green palette, small terracotta orange accents. Isometric camera slightly above, whole island fully visible and centered, atmospheric warm white or very pale mint background with plenty of breathing room. Landscape horizontal image, no words, no letters, no logos, no typography, no website UI, no watermark. Do not add hands, computers, photo props or people.

## 验证记录

已验证 1280 像素桌面与 390 像素手机布局、所有主栏目无横向溢出、两篇教程的分类与搜索、旧教程链接跳转、已读状态、作品活动分类与空列表、三个部门的介绍入口、介绍生成及复制。浏览器检查未见脚本错误。
