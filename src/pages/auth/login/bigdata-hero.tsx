import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

export const BigDataHero: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1b3bf1 0%, #1526cf 45%, #0b1584 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "48px 40px",
        boxSizing: "border-box",
        overflow: "hidden",
        color: "#ffffff",
      }}
    >
      {/* 背景深邃光晕与立体柱光柱（参考图背景里的淡淡暗色高楼/光斑效果） */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "15%",
          width: "80px",
          height: "350px",
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, transparent 100%)",
          borderRadius: "8px",
          transform: "skewY(-15deg)",
          filter: "blur(2px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "5%",
          right: "12%",
          width: "110px",
          height: "420px",
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.07) 0%, transparent 100%)",
          borderRadius: "10px",
          transform: "skewY(-15deg)",
          filter: "blur(3px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "20%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 210, 255, 0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* 核心内容区 */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "520px",
          textAlign: "center",
        }}
      >
        {/* 顶部标题区（参考图排版） */}
        <div style={{ marginBottom: "28px" }}>
          <Title
            level={1}
            style={{
              color: "#ffffff",
              fontSize: "44px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              marginBottom: "8px",
              textShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
            }}
          >
            Big Data
          </Title>
          <Text
            style={{
              color: "rgba(255, 255, 255, 0.85)",
              fontSize: "20px",
              fontWeight: 400,
              letterSpacing: "0.5px",
              display: "block",
            }}
          >
            GAW grid system
          </Text>
        </div>

        {/* 2.5D 等轴测科技感大数据网格插画 (Isometric 3D Big Data Platform) */}
        <svg
          viewBox="0 0 520 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "380px",
            filter: "drop-shadow(0 24px 36px rgba(0, 8, 80, 0.45))",
          }}
        >
          <defs>
            {/* 网格顶面发光渐变 */}
            <linearGradient id="gridSurfaceGrad" x1="260" y1="140" x2="260" y2="330" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0c2396" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#08146e" stopOpacity="0.95" />
            </linearGradient>

            {/* 底座侧边厚度渐变 */}
            <linearGradient id="baseSideLeft" x1="80" y1="240" x2="260" y2="350" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00b4d8" />
              <stop offset="100%" stopColor="#0077b6" />
            </linearGradient>
            <linearGradient id="baseSideRight" x1="260" y1="240" x2="440" y2="350" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0077b6" />
              <stop offset="100%" stopColor="#023e8a" />
            </linearGradient>

            {/* 柱状图侧面与顶面渐变 */}
            <linearGradient id="barTop" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#64dfdf" />
              <stop offset="100%" stopColor="#48cae4" />
            </linearGradient>
            <linearGradient id="barFront" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00b4d8" />
              <stop offset="100%" stopColor="#0077b6" />
            </linearGradient>
            <linearGradient id="barSide" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0077b6" />
              <stop offset="100%" stopColor="#03045e" />
            </linearGradient>

            {/* 饼图渐变 */}
            <linearGradient id="pieGrad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00f5d4" />
              <stop offset="100%" stopColor="#00bbf9" />
            </linearGradient>
            <linearGradient id="pieGrad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0077b6" />
              <stop offset="100%" stopColor="#03045e" />
            </linearGradient>
          </defs>

          {/* 底座下方的悬浮悬臂条（参考图周围漂浮的小长条） */}
          <g opacity="0.8">
            {/* 左侧悬浮横条 */}
            <polygon points="40,200 90,175 110,185 60,210" fill="#0096c7" opacity="0.6" />
            <polygon points="40,200 60,210 60,218 40,208" fill="#0077b6" opacity="0.8" />
            
            {/* 右后悬浮长条 */}
            <polygon points="380,150 430,125 450,135 400,160" fill="#0096c7" opacity="0.6" />
            
            {/* 底部悬浮延伸条 */}
            <polygon points="120,335 180,305 200,315 140,345" fill="#00b4d8" opacity="0.7" />
            <polygon points="120,335 140,345 140,353 120,343" fill="#0077b6" opacity="0.9" />

            <polygon points="320,335 380,305 400,315 340,345" fill="#00b4d8" opacity="0.7" />
            <polygon points="320,335 340,345 340,353 320,343" fill="#0077b6" opacity="0.9" />
          </g>

          {/* 主底座 - 侧边厚度与阴影 (Isometric Platform Base) */}
          {/* 左下厚度面 */}
          <polygon points="80,240 260,330 260,348 80,258" fill="url(#baseSideLeft)" />
          {/* 右下厚度面 */}
          <polygon points="260,330 440,240 440,258 260,348" fill="url(#baseSideRight)" />

          {/* 主底座 - 顶表面 (菱形网格台面) */}
          <polygon points="260,150 440,240 260,330 80,240" fill="url(#gridSurfaceGrad)" stroke="#00f0ff" strokeWidth="1.5" />

          {/* 顶表面上的发光青色等轴测网格线 */}
          <g stroke="#00d4ff" strokeWidth="0.8" opacity="0.45">
            {/* 从左往右下的平行线 */}
            <line x1="110" y1="225" x2="290" y2="315" />
            <line x1="140" y1="210" x2="320" y2="300" />
            <line x1="170" y1="195" x2="350" y2="285" />
            <line x1="200" y1="180" x2="380" y2="270" />
            <line x1="230" y1="165" x2="410" y2="255" />

            {/* 从右往左下的平行线 */}
            <line x1="230" y1="165" x2="110" y2="225" />
            <line x1="260" y1="150" x2="140" y2="210" />
            <line x1="290" y1="165" x2="110" y2="255" />
            <line x1="320" y1="180" x2="140" y2="270" />
            <line x1="350" y1="195" x2="170" y2="285" />
            <line x1="380" y1="210" x2="200" y2="300" />
            <line x1="410" y1="225" x2="230" y2="315" />
          </g>

          {/* 底座正中央发光边缘高光 */}
          <line x1="80" y1="240" x2="260" y2="330" stroke="#00f5d4" strokeWidth="2.5" opacity="0.9" />
          <line x1="260" y1="330" x2="440" y2="240" stroke="#00b4d8" strokeWidth="2" opacity="0.7" />

          {/* 3D 柱状图群 (Isometric Bars) */}
          {/* Bar 1 (矮) */}
          <g transform="translate(190, 185)">
            {/* 左侧面 */}
            <polygon points="0,-40 16,-32 16,0 0,-8" fill="url(#barFront)" />
            {/* 右侧面 */}
            <polygon points="16,-32 32,-40 32,-8 16,0" fill="url(#barSide)" />
            {/* 顶面 */}
            <polygon points="16,-48 32,-40 16,-32 0,-40" fill="url(#barTop)" />
          </g>

          {/* Bar 2 (中矮) */}
          <g transform="translate(210, 175)">
            <polygon points="0,-60 16,-52 16,0 0,-8" fill="url(#barFront)" />
            <polygon points="16,-52 32,-60 32,-8 16,0" fill="url(#barSide)" />
            <polygon points="16,-68 32,-60 16,-52 0,-60" fill="url(#barTop)" />
          </g>

          {/* Bar 3 (中高) */}
          <g transform="translate(230, 165)">
            <polygon points="0,-85 16,-77 16,0 0,-8" fill="url(#barFront)" />
            <polygon points="16,-77 32,-85 32,-8 16,0" fill="url(#barSide)" />
            <polygon points="16,-93 32,-85 16,-77 0,-85" fill="url(#barTop)" />
          </g>

          {/* Bar 4 (最高) */}
          <g transform="translate(250, 155)">
            <polygon points="0,-115 16,-107 16,0 0,-8" fill="url(#barFront)" />
            <polygon points="16,-107 32,-115 32,-8 16,0" fill="url(#barSide)" />
            <polygon points="16,-123 32,-115 16,-107 0,-115" fill="url(#barTop)" />
          </g>

          {/* 3D 饼图 (Isometric Pie Chart) 位于底座右侧 */}
          <g transform="translate(325, 230)">
            {/* 饼图底面厚度 */}
            <path
              d="M -30,0 C -30,18 30,18 30,0 L 30,12 C 30,30 -30,30 -30,12 Z"
              fill="url(#pieGrad2)"
            />
            {/* 饼图顶面椭圆 */}
            <ellipse cx="0" cy="0" rx="30" ry="16" fill="url(#pieGrad1)" />
            {/* 分割切角立体块 */}
            <path
              d="M 0,0 L 22,-10 A 30 16 0 0 1 28,6 Z"
              fill="#00f5d4"
              opacity="0.9"
            />
          </g>

          {/* 前方悬浮立体波形折线 (Glowing Line Chart) */}
          <path
            d="M 110,255 Q 140,210 170,240 T 230,220 T 290,265"
            fill="none"
            stroke="#00f5d4"
            strokeWidth="3.5"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 8px #00f5d4)" }}
          />
          {/* 折线关键节点微光圈 */}
          <circle cx="170" cy="240" r="4" fill="#ffffff" stroke="#00f5d4" strokeWidth="2" />
          <circle cx="230" cy="220" r="4" fill="#ffffff" stroke="#00f5d4" strokeWidth="2" />

          {/* 底部悬浮指示小圆环 (Ring Indicator) */}
          <g transform="translate(295, 290)">
            <ellipse cx="0" cy="0" rx="14" ry="7" fill="none" stroke="#00f5d4" strokeWidth="2.5" />
            <ellipse cx="0" cy="0" rx="7" ry="3.5" fill="none" stroke="#00f5d4" strokeWidth="1.5" opacity="0.6" />
          </g>

          {/* 台子底部右侧品牌微标文字 */}
          <text
            x="360"
            y="338"
            fill="#00f0ff"
            fontSize="11"
            fontWeight="bold"
            letterSpacing="2"
            opacity="0.8"
          >
            ETST
          </text>
        </svg>

        {/* 底部微小说明文字 */}
        <div style={{ marginTop: "24px" }}>
          <Text style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "14px" }}>
            Real-time Distributed Data Grid & Monitoring Architecture
          </Text>
        </div>
      </div>
    </div>
  );
};
