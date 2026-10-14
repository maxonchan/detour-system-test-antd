import React from "react";

export const LoginIllustration: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  return (
    <svg
      viewBox="0 0 500 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", maxHeight: "360px", ...style }}
    >
      <defs>
        {/* 背景光晕渐变 */}
        <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#1677ff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#1677ff" stopOpacity="0" />
        </radialGradient>

        {/* 主卡片渐变 */}
        <linearGradient id="mainCardGrad" x1="0" y1="0" x2="420" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#f0f5ff" stopOpacity="0.85" />
        </linearGradient>

        {/* 蓝紫渐变条 */}
        <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1677ff" />
          <stop offset="100%" stopColor="#597ef7" />
        </linearGradient>

        {/* 折线图渐变 */}
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1677ff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1677ff" stopOpacity="0.0" />
        </linearGradient>

        {/* 浮动卡片渐变 */}
        <linearGradient id="floatCardGrad" x1="0" y1="0" x2="150" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f6f9fc" />
        </linearGradient>

        {/* 阴影效果 */}
        <filter id="shadowMain" x="30" y="40" width="410" height="310" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#0958d9" floodOpacity="0.12" />
        </filter>
        <filter id="shadowFloat" x="250" y="160" width="220" height="190" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000000" floodOpacity="0.1" />
        </filter>
        <filter id="shadowShield" x="40" y="190" width="130" height="140" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#1677ff" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* 背景光环 */}
      <circle cx="250" cy="210" r="200" fill="url(#bgGlow)" />

      {/* 装饰圆点与几何网格 */}
      <g opacity="0.6">
        <circle cx="90" cy="80" r="4" fill="#69b1ff" />
        <circle cx="420" cy="90" r="5" fill="#85a5ff" />
        <circle cx="440" cy="280" r="3" fill="#adc6ff" />
        <circle cx="70" cy="320" r="6" fill="#adc6ff" />
        <rect x="400" y="140" width="12" height="12" rx="3" fill="#1677ff" opacity="0.25" transform="rotate(25 400 140)" />
        <rect x="90" y="180" width="10" height="10" rx="2" fill="#597ef7" opacity="0.3" transform="rotate(-15 90 180)" />
      </g>

      {/* 主面板窗口 */}
      <g filter="url(#shadowMain)">
        <rect x="60" y="60" width="350" height="250" rx="18" fill="url(#mainCardGrad)" stroke="#d6e4ff" strokeWidth="1.5" />
        
        {/* 窗口顶部红黄绿控制按钮 */}
        <circle cx="86" cy="84" r="5" fill="#ff7875" />
        <circle cx="102" cy="84" r="5" fill="#ffd666" />
        <circle cx="118" cy="84" r="5" fill="#95de64" />
        <line x1="60" y1="104" x2="410" y2="104" stroke="#f0f0f0" strokeWidth="1" />

        {/* 面板左侧快捷导航小条 */}
        <rect x="80" y="125" width="60" height="8" rx="4" fill="url(#accentGrad)" />
        <rect x="80" y="145" width="45" height="6" rx="3" fill="#d9d9d9" opacity="0.7" />
        <rect x="80" y="160" width="52" height="6" rx="3" fill="#d9d9d9" opacity="0.7" />
        <rect x="80" y="175" width="40" height="6" rx="3" fill="#d9d9d9" opacity="0.7" />

        {/* 柱状统计图 */}
        <g transform="translate(170, 125)">
          <rect x="0" y="55" width="14" height="25" rx="3" fill="#d6e4ff" />
          <rect x="22" y="35" width="14" height="45" rx="3" fill="#91caff" />
          <rect x="44" y="20" width="14" height="60" rx="3" fill="#4096ff" />
          <rect x="66" y="10" width="14" height="70" rx="3" fill="#1677ff" />
          <rect x="88" y="28" width="14" height="52" rx="3" fill="#597ef7" />
        </g>

        {/* 底部折线趋势图 */}
        <g transform="translate(80, 220)">
          <path
            d="M 0 45 Q 60 10 120 30 T 240 15 L 240 60 L 0 60 Z"
            fill="url(#chartGrad)"
          />
          <path
            d="M 0 45 Q 60 10 120 30 T 240 15"
            fill="none"
            stroke="#1677ff"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="120" cy="30" r="4" fill="#ffffff" stroke="#1677ff" strokeWidth="2" />
          <circle cx="240" cy="15" r="4" fill="#ffffff" stroke="#1677ff" strokeWidth="2" />
        </g>
      </g>

      {/* 右侧悬浮数据卡片 */}
      <g filter="url(#shadowFloat)">
        <rect x="270" y="180" width="170" height="140" rx="14" fill="url(#floatCardGrad)" stroke="#adc6ff" strokeWidth="1" />
        
        {/* 数据卡片头部圆环指示 */}
        <circle cx="300" cy="215" r="16" fill="#e6f4ff" />
        <circle cx="300" cy="215" r="16" fill="none" stroke="#1677ff" strokeWidth="3" strokeDasharray="60 40" strokeLinecap="round" />
        <circle cx="300" cy="215" r="4" fill="#1677ff" />

        <rect x="328" y="205" width="75" height="8" rx="4" fill="#262626" opacity="0.8" />
        <rect x="328" y="220" width="50" height="6" rx="3" fill="#8c8c8c" opacity="0.6" />

        {/* 进度条与标签 */}
        <rect x="290" y="250" width="130" height="6" rx="3" fill="#f0f0f0" />
        <rect x="290" y="250" width="95" height="6" rx="3" fill="url(#accentGrad)" />

        <g transform="translate(290, 275)">
          <rect x="0" y="0" width="60" height="24" rx="6" fill="#f6ffed" stroke="#b7eb8f" strokeWidth="0.8" />
          <text x="30" y="16" fill="#52c41a" fontSize="11" fontWeight="bold" textAnchor="middle">Verified</text>

          <rect x="70" y="0" width="60" height="24" rx="6" fill="#e6f4ff" stroke="#91caff" strokeWidth="0.8" />
          <text x="100" y="16" fill="#1677ff" fontSize="11" fontWeight="bold" textAnchor="middle">Active</text>
        </g>
      </g>

      {/* 左下方安全盾牌微标 */}
      <g filter="url(#shadowShield)">
        <rect x="60" y="210" width="80" height="90" rx="14" fill="#ffffff" stroke="#bae0ff" strokeWidth="1" />
        {/* 盾牌图形 */}
        <path
          d="M 100 232 C 100 232 118 238 122 245 C 122 265 110 278 100 284 C 90 278 78 265 78 245 C 82 238 100 232 100 232 Z"
          fill="url(#accentGrad)"
        />
        {/* 对勾 */}
        <path
          d="M 94 257 L 98 261 L 107 251"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
