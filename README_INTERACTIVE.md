# 交互演示 (Interactive Demo)

此文件为仓库的交互演示说明，演示使用 HTML/CSS/JS 制作的动态页面，位于 `docs/` 目录。该页面适合部署到 GitHub Pages，用于展示比 README 更丰富的动画与交互（不会修改主 README）。

快速链接
- 演示页面： `docs/index.html`
- 交互脚本： `docs/main.js`
- 样式文件： `docs/style.css`

如何启用 GitHub Pages（在仓库设置中执行）
1. 打开 GitHub 仓库页面： https://github.com/<你的用户名>/<仓库名>/settings/pages
2. 在 "Build and deployment" -> "Source" 选择：
   - Branch: `main`
   - Folder: `/docs`
3. 点击 Save，等待几分钟，页面将可访问：
   `https://<你的用户名>.github.io/<仓库名>/`

本地预览（开发阶段）
在本地可以用一个简单的 HTTP 服务器预览（不会执行 GitHub Actions）：

```powershell
# 在仓库根目录运行
python -m http.server 8000 --directory docs
# 然后打开浏览器访问 http://localhost:8000
```

关于安全与替代方案
- README 在 GitHub 上不支持 JavaScript 执行，因此所有交互必须放到独立页面（例如 docs/）或通过 SVG 动画实现。docs 页面允许你使用完整前端能力。
- 如果你希望访客从 README 直接进入互动页面，我可以在 `README.md` 顶部添加一个醒目的按钮（该改动会修改主 README，需你确认）。

自动化与多样化
- 仓库包含 `scripts/rotate_svgs.py` 与 `.github/workflows/rotate_svgs.yml`，用于在仓库级别随机替换 SVG 变体，从而实现“在不同时间访问看到不同 SVG”的体验。这个是服务端的随机化（通过 Actions 自动提交），不会在客户端每次刷新都随机。

下一步建议（我可以代为执行）
1. 我把这个文件推送到远程（已同意）。
2. 我可以帮你在 README 顶部加一个链接/按钮指向演示（需要你确认）。
3. 如需我现在触发一次 SVG 随机化，我可以运行脚本并提交（将产生 commit）。

如需我继续，请回复你想执行的选项（例如："把链接加入 README"、"立即随机化 SVG"、或仅保留当前文件即可）。
