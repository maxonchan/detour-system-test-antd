import React from "react";
import { theme } from "antd";

export const GeometricHero: React.FC = () => {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        backgroundColor: token.colorBgLayout || "#f8fafc",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "48px 48px",
        boxSizing: "border-box",
        overflow: "hidden",
        borderRight: `1px solid ${token.colorBorderSecondary}`,
      }}
    >
      {/* 极简左上角品牌文字 */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: token.colorPrimary,
            }}
          />
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: token.colorTextHeading,
            }}
          >
            Detour System
          </span>
        </div>
      </div>

      {/* 居中：极简现代几何图形艺术构图 (Minimalist Bauhaus / Swiss Geometric Composition) */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <svg
          viewBox="0 0 540 540"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "100%",
            maxWidth: "460px",
            height: "auto",
          }}
        >
          <defs>
            {/* 主圆微渐变 */}
            <linearGradient id="geoGrad1" x1="120" y1="120" x2="380" y2="380" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1677ff" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#69b1ff" stopOpacity="0.4" />
            </linearGradient>

            {/* 辅助圆渐变 */}
            <linearGradient id="geoGrad2" x1="280" y1="160" x2="440" y2="320" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#597ef7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#b37feb" stopOpacity="0.15" />
            </linearGradient>

            {/* 极简网格条纹图案 */}
            <pattern id="stripes" width="16" height="16" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="16" stroke={token.colorBorder || "#e2e8f0"} strokeWidth="1.5" />
            </pattern>
          </defs>

          {/* 细致同心几何圆环 */}
          <circle cx="270" cy="270" r="230" stroke={token.colorBorder || "#e2e8f0"} strokeWidth="1" strokeDasharray="4 6" opacity="0.8" />
          <circle cx="270" cy="270" r="180" stroke={token.colorBorder || "#e2e8f0"} strokeWidth="1" opacity="0.6" />
          <circle cx="270" cy="270" r="130" stroke={token.colorBorder || "#e2e8f0"} strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />

          {/* 45度斜线纹理的矩形块（极简包豪斯构成感） */}
          <rect x="180" y="150" width="180" height="240" rx="20" fill="url(#stripes)" opacity="0.85" />

          {/* 大圆（主几何视觉核心） */}
          <circle cx="240" cy="250" r="110" fill="url(#geoGrad1)" />

          {/* 悬浮交叠次圆（带玻璃半透明效果） */}
          <circle cx="340" cy="220" r="75" fill="url(#geoGrad2)" />
          <circle cx="340" cy="220" r="75" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.5" />

          {/* 极简空心圆环 */}
          <circle cx="200" cy="330" r="50" stroke={token.colorPrimary} strokeWidth="3" fill="none" opacity="0.85" />

          {/* 极简实心圆小装饰点 */}
          <circle cx="350" cy="340" r="8" fill={token.colorPrimary} />
          <circle cx="160" cy="180" r="4" fill="#8c8c8c" opacity="0.7" />
          <circle cx="390" cy="160" r="5" fill="#8c8c8c" opacity="0.5" />

          {/* 几何对齐辅助十字线标记 */}
          <g stroke={token.colorTextQuaternary || "#8c8c8c"} strokeWidth="1" opacity="0.7">
            {/* 左上十字 */}
            <line x1="85" y1="110" x2="95" y2="110" />
            <line x1="90" y1="105" x2="90" y2="115" />

            {/* 右上十字 */}
            <line x1="445" y1="110" x2="455" y2="110" />
            <line x1="450" y1="105" x2="450" y2="115" />

            {/* 右下十字 */}
            <line x1="445" y1="430" x2="455" y2="430" />
            <line x1="450" y1="425" x2="450" y2="435" />

            {/* 左下十字 */}
            <line x1="85" y1="430" x2="95" y2="430" />
            <line x1="90" y1="425" x2="90" y2="435" />

            {/* 穿过中心的轻柔横线与坚线 */}
            <line x1="40" y1="270" x2="80" y2="270" strokeDasharray="3 3" />
            <line x1="460" y1="270" x2="500" y2="270" strokeDasharray="3 3" />
            <line x1="270" y1="40" x2="270" y2="80" strokeDasharray="3 3" />
            <line x1="270" y1="460" x2="270" y2="500" strokeDasharray="3 3" />
          </g>

          {/* 一个干净精巧的几何弧线 */}
          <path
            d="M 270 90 A 180 180 0 0 1 450 270"
            stroke={token.colorPrimary}
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* 底部：极简版权与设计理念 */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "12px",
          color: token.colorTextTertiary,
          letterSpacing: "0.5px",
        }}
      >
        <span>Design System · Pure & Minimal</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </div>
  );
};
