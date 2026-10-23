# D9 游研社网站

浅色、简洁的游戏开发社团网站。不展示学校信息。

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
- 作品展示：分类与三个可试玩的原创教学原型：森林漫游、星轨收集、点亮方格。
- 开发教程：六篇完整的入门内容、分类、搜索、文章详情、已读标记。已读状态保存在当前浏览器。
- 部门分工：六个建议协作方向及职责说明，正式设置待确认。
- 加入我们：自我介绍生成与复制、常见问题。此处不会发送入社申请。

支持桌面、平板与手机。使用语义化导航、焦点样式、键盘操作、原生对话框与减少动画偏好。

## 内容维护

- `dist/content.js`：教程全文、作品资料、部门职责。
- `dist/app.js`：页面结构、活动形式、交互和教学原型。
- `dist/styles.css`：颜色、排版与响应式布局。
- `dist/assets/`：线上使用的插图、原型封面与图标。
- `artwork/game-world-original.png`：首页插图原始文件；线上使用约 440 KB 的 JPEG。
- `.openai/hosting.json`：Sites 标识与静态发布目录，后续更新沿用同一站点。

所有路由采用 `#/…`，静态托管无需配置服务端路由回退。`dist/` 可直接部署。

后续需补齐：正式 Logo、详细社团资料、真实活动时间与报名链接、社团作品与作者、正式部门设置和联系方式。当前界面已明确标识待补充内容与教学示例。

## 插图来源与生成提示

首页插图使用内置 image_gen 工具生成，原始文件保存于 `artwork/game-world-original.png`，网页版本为 `dist/assets/game-world.jpg`。下列为最终生成提示；原型封面与站点图标为代码绘制的 SVG。

> Use case: stylized-concept. Asset type: hero illustration for D9, a friendly game development club website, clean modern light design. Create one beautiful high quality stylized 3D diorama, landscape 3:2 composition. A small imaginative game world under construction: a pale seafoam green floating island with rounded grass terraces, a winding cream path, a tiny warm orange explorer, a cream architectural arch gateway, a few rounded trees, scattered small geometric building blocks, a soft aquamarine water channel with waterfall and a simple floating platform. A tiny flag with no letters. Toy-like clay material, sophisticated game concept art, clean ambient occlusion, soft morning studio lighting, crisp detailed silhouettes, gentle shadows, pastel mint and forest green palette, small terracotta orange accents. Isometric camera slightly above, whole island fully visible and centered, atmospheric warm white or very pale mint background with plenty of breathing room. Landscape horizontal image, no words, no letters, no logos, no typography, no website UI, no watermark. Do not add hands, computers, photo props or people.

## 验证记录

已验证 1360 像素桌面与 390 像素手机布局、所有主栏目无横向溢出、教程搜索空结果与分类、文章刷新后已读状态、作品筛选、三个原型的完成流程、解谜重置、部门方向传入介绍工具、介绍生成及复制。浏览器检查未见脚本错误。
