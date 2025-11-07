
# Hi 👋，我是 天晴风吹过

<div align="center">
  <!-- 内嵌纯 SVG 动画头图（SMIL + 内部 CSS，GitHub README 可渲染） -->
  <svg width="100%" height="220" viewBox="0 0 1200 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="lg" x1="0%" x2="100%">
        <stop offset="0%" stop-color="#7F56D9"/>
        <stop offset="50%" stop-color="#00D4FF"/>
        <stop offset="100%" stop-color="#FF6B6B"/>
      </linearGradient>
      <filter id="blur"><feGaussianBlur stdDeviation="6"/></filter>
    </defs>
    <rect width="1200" height="220" fill="#071022" />

    <!-- 渐变波纹 -->
    <g opacity="0.9">
      <path id="wave" fill="url(#lg)" d="M0 120 C300 40 900 200 1200 120 L1200 220 L0 220 Z" opacity="0.85">
        <animate attributeName="d" dur="8s" repeatCount="indefinite"
          values="M0 120 C300 40 900 200 1200 120 L1200 220 L0 220 Z;
                  M0 100 C300 180 900 40 1200 100 L1200 220 L0 220 Z;
                  M0 120 C300 40 900 200 1200 120 L1200 220 L0 220 Z"/>
      </path>
    </g>

    <!-- 漂浮光点 -->
    <g fill="#fff" opacity="0.9" filter="url(#blur)">
      <circle cx="160" cy="60" r="4" fill="#fff" opacity="0.9">
        <animate attributeName="cy" values="60;40;60" dur="5s" repeatCount="indefinite"/>
        <animate attributeName="cx" values="160;200;160" dur="7s" repeatCount="indefinite"/>
      </circle>
      <circle cx="420" cy="40" r="3.5" fill="#fff" opacity="0.8">
        <animate attributeName="cy" values="40;70;40" dur="6s" repeatCount="indefinite"/>
      </circle>
      <circle cx="900" cy="80" r="5" fill="#fff" opacity="0.85">
        <animate attributeName="cy" values="80;50;80" dur="9s" repeatCount="indefinite"/>
      </circle>
    </g>

    <!-- 标题文字 -->
    <text x="48" y="68" font-family="Segoe UI, Roboto, Arial" font-size="30" fill="#fff" font-weight="700">天晴风吹过</text>
    <text x="48" y="96" font-family="Segoe UI, Roboto" font-size="13" fill="#cfe3ff">代码 · 视觉 · 交互</text>
  </svg>
</div>

<div align="center" style="margin-top:12px;">
  <!-- 内嵌纯 SVG 技能条与环形进度（无 JS） -->
  <svg width="700" height="160" viewBox="0 0 700 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <style>
      .label{font-family:Inter,Segoe UI,Roboto,Arial;font-size:12px;fill:#dbeffd}
      .skill-name{font-size:13px;fill:#fff}
    </style>
    <!-- 背景卡片 -->
    <rect x="0" y="0" width="700" height="160" rx="10" fill="#071225" opacity="0.9"/>

    <!-- 技能条 1 -->
    <text x="24" y="36" class="skill-name">Python</text>
    <rect x="24" y="44" width="620" height="18" rx="9" fill="#0b2230" />
    <rect x="24" y="44" width="0" height="18" rx="9" fill="#7F56D9">
      <animate attributeName="width" from="0" to="480" dur="1.6s" begin="0.2s" fill="freeze"/>
    </rect>

    <!-- 技能条 2 -->
    <text x="24" y="84" class="skill-name">JavaScript</text>
    <rect x="24" y="92" width="620" height="18" rx="9" fill="#0b2230" />
    <rect x="24" y="92" width="0" height="18" rx="9" fill="#00D4FF">
      <animate attributeName="width" from="0" to="420" dur="1.8s" begin="0.4s" fill="freeze"/>
    </rect>

    <!-- 技能条 3 -->
    <text x="24" y="132" class="skill-name">CSS / HTML</text>
    <rect x="24" y="140" width="620" height="12" rx="6" fill="#0b2230" />
    <rect x="24" y="140" width="0" height="12" rx="6" fill="#FF6B6B">
      <animate attributeName="width" from="0" to="520" dur="2s" begin="0.6s" fill="freeze"/>
    </rect>

    <!-- 三个环形进度 -->
    <g transform="translate(500,28)">
      <circle r="28" cx="0" cy="0" fill="#071225" stroke="#14314a" stroke-width="6"/>
      <circle r="28" cx="0" cy="0" fill="none" stroke="#7F56D9" stroke-width="6" stroke-linecap="round" stroke-dasharray="176" stroke-dashoffset="176">
        <animate attributeName="stroke-dashoffset" from="176" to="52" dur="1.6s" begin="0.2s" fill="freeze"/>
      </circle>
      <text x="-16" y="6" class="label">Py</text>
    </g>

    <g transform="translate(560,28)">
      <circle r="28" cx="0" cy="0" fill="#071225" stroke="#14314a" stroke-width="6"/>
      <circle r="28" cx="0" cy="0" fill="none" stroke="#00D4FF" stroke-width="6" stroke-linecap="round" stroke-dasharray="176" stroke-dashoffset="176">
        <animate attributeName="stroke-dashoffset" from="176" to="76" dur="1.8s" begin="0.4s" fill="freeze"/>
      </circle>
      <text x="-20" y="6" class="label">JS</text>
    </g>

    <g transform="translate(620,28)">
      <circle r="28" cx="0" cy="0" fill="#071225" stroke="#14314a" stroke-width="6"/>
      <circle r="28" cx="0" cy="0" fill="none" stroke="#FF6B6B" stroke-width="6" stroke-linecap="round" stroke-dasharray="176" stroke-dashoffset="176">
        <animate attributeName="stroke-dashoffset" from="176" to="36" dur="2s" begin="0.6s" fill="freeze"/>
      </circle>
      <text x="-24" y="6" class="label">HTML</text>
    </g>
  </svg>
</div>

---

[▶️ 打开交互演示](https://skh2945932142.github.io/SKH2945932142/)


<div align="center">
  <!-- 本地 SVG header（images/header.svg） -->
  <img src="images/header.svg" alt="header" width="100%" />
</div>

<div align="center" style="margin-top:14px;">
  <!-- 轻量链接按钮 -->
  <a href="docs/index.html" style="text-decoration:none;background:#0b1221;color:#cfe3ff;padding:8px 14px;border-radius:8px;border:1px solid rgba(255,255,255,0.03);"> 在 docs 中打开完整交互演示</a>
</div>

---

## 更复杂的动画与交互（纯前端、无 JS）

GitHub README 中脚本会被剥离，为了在 README 里呈现「看起来很交互」的效果，我使用了：

- 纯 SVG（包含 SMIL 动画）用于路径变形、渐变位移与进度环动画；
- 内嵌 SVG 样式（有限的 :hover 与动画控制，GitHub 对部分内联样式保留）；
- 更完整的交互（鼠标粒子、拖动、富交互）请在 `docs/` 下查看（需要启用 Pages 或本地打开）。

下面是增强版的示例：

<div align="center" style="margin-top:12px;">
  <!-- 复合动画：背景波、变形 blob、渐变进度 -->
  <svg width="100%" height="320" viewBox="0 0 1200 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="gradA" x1="0%" x2="100%">
        <stop offset="0%" stop-color="#7F56D9" />
        <stop offset="50%" stop-color="#00D4FF" />
        <stop offset="100%" stop-color="#FF6B6B" />
      </linearGradient>
      <filter id="fBlur"><feGaussianBlur stdDeviation="20"/></filter>
    </defs>

    <rect width="1200" height="320" fill="#06070a" />

    <!-- 背景移动渐变波纹（多个矩形位移） -->
    <g opacity="0.24">
      <rect x="-200" y="40" width="1600" height="120" fill="url(#gradA)">
        <animate attributeName="x" values="-200;0;-200" dur="12s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.18;0.26;0.18" dur="9s" repeatCount="indefinite"/>
      </rect>
      <rect x="-400" y="160" width="1600" height="80" fill="url(#gradA)" opacity="0.12">
        <animate attributeName="x" values="-400;-200;-400" dur="10s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.08;0.14;0.08" dur="8s" repeatCount="indefinite"/>
      </rect>
    </g>

    <!-- 变形 blob（路径插值） -->
    <g transform="translate(300,140)">
      <g filter="url(#fBlur)" opacity="0.9">
        <path id="blob" d="M120,-80 C200,-40 220,40 150,110 C80,180 -20,200 -80,150 C-140,100 -170,30 -130,-30 C-90,-90 40,-120 120,-80Z" fill="url(#gradA)">
          <animate attributeName="d" dur="6s" repeatCount="indefinite"
            values="M120,-80 C200,-40 220,40 150,110 C80,180 -20,200 -80,150 C-140,100 -170,30 -130,-30 C-90,-90 40,-120 120,-80Z;
                    M140,-70 C220,-10 240,60 180,120 C120,180 20,200 -40,160 C-100,120 -150,40 -120,-30 C-90,-100 40,-140 140,-70Z;
                    M120,-80 C200,-40 220,40 150,110 C80,180 -20,200 -80,150 C-140,100 -170,30 -130,-30 C-90,-90 40,-120 120,-80Z"/>
        </path>
      </g>
    </g>

    <!-- 主标题与说明 -->
    <g>
      <text x="560" y="120" font-family="Segoe UI, Roboto, Arial" font-size="28" fill="#f4f8ff" font-weight="700">天晴风吹过</text>
      <text x="560" y="152" font-family="Segoe UI, Roboto" font-size="14" fill="#a6c8ff">纯 SVG 动画：路径变形、渐变移动、进度环。更多交互见 docs/。</text>
    </g>

    <!-- 渐进条（进度 + 悬停变速） -->
    <g transform="translate(520,180)">
      <rect x="0" y="0" width="360" height="12" rx="6" fill="#071123" />
      <rect id="bar" x="0" y="0" width="0" height="12" rx="6" fill="url(#gradA)">
        <animate attributeName="width" from="0" to="360" dur="3.2s" begin="0.4s" fill="freeze"/>
      </rect>
      <text x="372" y="10" font-family="Segoe UI, Roboto" font-size="12" fill="#cfe3ff">交互式预览</text>
    </g>

    <!-- 三个进度环（再现技能条） -->
    <g transform="translate(900,210)">
      <g transform="translate(0,-20)">
        <circle r="26" cx="0" cy="0" fill="#071123" stroke="#0f2a3b" stroke-width="6" />
        <circle r="26" cx="0" cy="0" fill="none" stroke="#7F56D9" stroke-width="6" stroke-linecap="round" stroke-dasharray="163" stroke-dashoffset="163">
          <animate attributeName="stroke-dashoffset" values="163;40" dur="1.6s" begin="0s" fill="freeze"/>
        </circle>
      </g>
      <g transform="translate(70,-20)">
        <circle r="26" cx="0" cy="0" fill="#071123" stroke="#0f2a3b" stroke-width="6" />
        <circle r="26" cx="0" cy="0" fill="none" stroke="#00D4FF" stroke-width="6" stroke-linecap="round" stroke-dasharray="163" stroke-dashoffset="163">
          <animate attributeName="stroke-dashoffset" values="163;70" dur="1.8s" begin="0.2s" fill="freeze"/>
        </circle>
      </g>
      <g transform="translate(140,-20)">
        <circle r="26" cx="0" cy="0" fill="#071123" stroke="#0f2a3b" stroke-width="6" />
        <circle r="26" cx="0" cy="0" fill="none" stroke="#FF6B6B" stroke-width="6" stroke-linecap="round" stroke-dasharray="163" stroke-dashoffset="163">
          <animate attributeName="stroke-dashoffset" values="163;25" dur="2s" begin="0.4s" fill="freeze"/>
        </circle>
      </g>
    </g>

    <!-- 提示：悬停会稍微放慢动画（部分平台支持） -->
    <style>
      /* 在支持 CSS hover 时，为 SVG 添加交互反馈（不是所有平台都支持） */
      svg:hover #bar animate { animation-play-state: paused; }
    </style>
  </svg>
</div>

<details style="margin-top:10px">
  <summary>查看交互演示页面（包含更多动画与交互）</summary>
  <p>演示位于 <code>docs/</code>，也可以通过 GitHub Pages 访问：
  <a href="https://skh2945932142.github.io/SKH2945932142/">演示页面</a></p>
</details>
