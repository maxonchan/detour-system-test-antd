import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

export const DetourRouteHero: React.FC = () => {
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
      {/* 科技背景光晕 */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          right: "10%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 245, 212, 0.18) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-5%",
          left: "10%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(27, 59, 241, 0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* 微点阵科技网格 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      {/* 内容区域 */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "540px",
          textAlign: "center",
        }}
      >
        {/* 顶部标题与说明 */}
        <div style={{ marginBottom: "28px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 14px",
              borderRadius: "20px",
              background: "rgba(0, 245, 212, 0.12)",
              border: "1px solid rgba(0, 245, 212, 0.35)",
              marginBottom: "14px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#00f5d4",
                boxShadow: "0 0 10px #00f5d4",
              }}
            />
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "1px",
                color: "#00f5d4",
                textTransform: "uppercase",
              }}
            >
              Automatic Failover Active
            </span>
          </div>

          <Title
            level={1}
            style={{
              color: "#ffffff",
              fontSize: "36px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              marginBottom: "8px",
              textShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
            }}
          >
            备用线路智能切换
          </Title>
          <Text
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "15px",
              fontWeight: 400,
              display: "block",
            }}
          >
            主路故障即时熔断 · 毫秒级自动绕行中继
          </Text>
        </div>

        {/* 纯示意图 SVG（无任何文字标签，纯图形与动效表达） */}
        <svg
          viewBox="0 0 540 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "360px",
            filter: "drop-shadow(0 20px 32px rgba(0, 10, 80, 0.45))",
          }}
        >
          <style>
            {`
              @keyframes flowAnimation {
                from { stroke-dashoffset: 40; }
                to { stroke-dashoffset: 0; }
              }
              @keyframes nodeGlow {
                0%, 100% { stroke-opacity: 0.8; }
                50% { stroke-opacity: 0.3; }
              }
              .active-link-flow {
                stroke-dasharray: 8 6;
                animation: flowAnimation 1.2s linear infinite;
              }
              .standby-ring {
                animation: nodeGlow 2s ease-in-out infinite;
              }
            `}
          </style>

          <defs>
            {/* 绿色/青蓝备用流光渐变 */}
            <linearGradient id="activeLinkGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00f5d4" />
              <stop offset="100%" stopColor="#00b4d8" />
            </linearGradient>

            {/* 故障主线路红橙渐变 */}
            <linearGradient id="faultLinkGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ff4d4f" />
              <stop offset="50%" stopColor="#ff7875" />
              <stop offset="100%" stopColor="#ff4d4f" />
            </linearGradient>

            {/* 节点底色渐变 */}
            <linearGradient id="nodeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0f2b99" />
              <stop offset="100%" stopColor="#06165c" />
            </linearGradient>

            {/* 发光阴影效果 */}
            <filter id="neonGlowCyan" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#00f5d4" floodOpacity="0.8" />
            </filter>
            <filter id="neonGlowRed" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#ff4d4f" floodOpacity="0.85" />
            </filter>
          </defs>

          {/* ================= 线路部分 ================= */}

          {/* 1. 主线路 A -> B (故障中断) */}
          <g>
            {/* 故障底光背景 */}
            <line
              x1="130"
              y1="220"
              x2="410"
              y2="220"
              stroke="#ff4d4f"
              strokeWidth="6"
              strokeDasharray="6 6"
              opacity="0.25"
            />
            {/* 故障主虚线 */}
            <line
              x1="130"
              y1="220"
              x2="410"
              y2="220"
              stroke="url(#faultLinkGrad)"
              strokeWidth="2.5"
              strokeDasharray="6 6"
            />

            {/* 中间纯图形打叉断开警报（静态红色圆圈与 X 完美重叠） */}
            <g transform="translate(270, 220)">
              {/* 静态红色圆圈 */}
              <circle cx="0" cy="0" r="14" fill="#ff4d4f" stroke="#ffffff" strokeWidth="2" filter="url(#neonGlowRed)" />
              {/* 白色 X 符号，与红色圆圈重叠居中 */}
              <line x1="-5" y1="-5" x2="5" y2="5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="5" y1="-5" x2="-5" y2="5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
            </g>
          </g>

          {/* 2. 备用线路 A -> C -> B (绿色/青蓝高亮通流) */}
          <g>
            {/* A -> C 曲线光晕 */}
            <path
              d="M 125,195 C 135,115 195,85 235,85"
              fill="none"
              stroke="#00f5d4"
              strokeWidth="6"
              opacity="0.25"
            />
            {/* A -> C 动态流动虚线 */}
            <path
              d="M 125,195 C 135,115 195,85 235,85"
              fill="none"
              stroke="url(#activeLinkGrad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="active-link-flow"
              filter="url(#neonGlowCyan)"
            />
            {/* A -> C 动感指向箭头 */}
            <polygon points="188,110 200,108 194,119" fill="#00f5d4" />

            {/* C -> B 曲线光晕 */}
            <path
              d="M 305,85 C 345,85 405,115 415,195"
              fill="none"
              stroke="#00f5d4"
              strokeWidth="6"
              opacity="0.25"
            />
            {/* C -> B 动态流动虚线 */}
            <path
              d="M 305,85 C 345,85 405,115 415,195"
              fill="none"
              stroke="url(#activeLinkGrad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="active-link-flow"
              filter="url(#neonGlowCyan)"
            />
            {/* C -> B 动感指向箭头 */}
            <polygon points="340,108 352,110 346,119" fill="#00f5d4" />
          </g>

          {/* ================= 路由器节点 (纯图形设备，无任何文字) ================= */}

          {/* 节点 A (左侧路由器) */}
          <g transform="translate(65, 175)">
            <rect
              x="0"
              y="0"
              width="90"
              height="75"
              rx="14"
              fill="url(#nodeGrad)"
              stroke="#1677ff"
              strokeWidth="2"
              filter="drop-shadow(0 10px 20px rgba(0,0,0,0.45))"
            />

            {/* 天线与信号发射头 */}
            <line x1="28" y1="0" x2="28" y2="-14" stroke="#69b1ff" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="28" cy="-14" r="3.5" fill="#00f5d4" filter="url(#neonGlowCyan)" />
            <line x1="62" y1="0" x2="62" y2="-14" stroke="#69b1ff" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="62" cy="-14" r="3.5" fill="#00f5d4" filter="url(#neonGlowCyan)" />

            {/* 内部网络芯片/路由接口纯图形 */}
            <g transform="translate(18, 22)">
              {/* 四个运行状态 LED 灯 */}
              <circle cx="6" cy="4" r="3" fill="#52c41a" />
              <circle cx="18" cy="4" r="3" fill="#52c41a" />
              <circle cx="30" cy="4" r="3" fill="#00f5d4" />
              <circle cx="42" cy="4" r="3" fill="#00f5d4" />

              {/* 网口端口插槽 (Ethernet Ports) */}
              <rect x="0" y="16" width="10" height="12" rx="2" fill="#0b174a" stroke="#4096ff" strokeWidth="1" />
              <rect x="15" y="16" width="10" height="12" rx="2" fill="#0b174a" stroke="#4096ff" strokeWidth="1" />
              <rect x="30" y="16" width="10" height="12" rx="2" fill="#0b174a" stroke="#4096ff" strokeWidth="1" />
              <rect x="45" y="16" width="10" height="12" rx="2" fill="#0b174a" stroke="#4096ff" strokeWidth="1" />
            </g>
          </g>

          {/* 节点 B (右侧路由器) */}
          <g transform="translate(385, 175)">
            <rect
              x="0"
              y="0"
              width="90"
              height="75"
              rx="14"
              fill="url(#nodeGrad)"
              stroke="#1677ff"
              strokeWidth="2"
              filter="drop-shadow(0 10px 20px rgba(0,0,0,0.45))"
            />

            <line x1="28" y1="0" x2="28" y2="-14" stroke="#69b1ff" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="28" cy="-14" r="3.5" fill="#00f5d4" filter="url(#neonGlowCyan)" />
            <line x1="62" y1="0" x2="62" y2="-14" stroke="#69b1ff" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="62" cy="-14" r="3.5" fill="#00f5d4" filter="url(#neonGlowCyan)" />

            <g transform="translate(18, 22)">
              <circle cx="6" cy="4" r="3" fill="#52c41a" />
              <circle cx="18" cy="4" r="3" fill="#52c41a" />
              <circle cx="30" cy="4" r="3" fill="#00f5d4" />
              <circle cx="42" cy="4" r="3" fill="#00f5d4" />

              <rect x="0" y="16" width="10" height="12" rx="2" fill="#0b174a" stroke="#4096ff" strokeWidth="1" />
              <rect x="15" y="16" width="10" height="12" rx="2" fill="#0b174a" stroke="#4096ff" strokeWidth="1" />
              <rect x="30" y="16" width="10" height="12" rx="2" fill="#0b174a" stroke="#4096ff" strokeWidth="1" />
              <rect x="45" y="16" width="10" height="12" rx="2" fill="#0b174a" stroke="#4096ff" strokeWidth="1" />
            </g>
          </g>

          {/* 节点 C (顶部备用中继路由器) */}
          <g transform="translate(225, 45)">
            {/* 呼吸发光外围环 */}
            <rect
              x="-4"
              y="-4"
              width="98"
              height="83"
              rx="17"
              fill="none"
              stroke="#00f5d4"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="standby-ring"
            />
            <rect
              x="0"
              y="0"
              width="90"
              height="75"
              rx="14"
              fill="url(#nodeGrad)"
              stroke="#00f5d4"
              strokeWidth="2.5"
              filter="drop-shadow(0 0 20px rgba(0,245,212,0.45))"
            />

            {/* 天线高亮发光 */}
            <line x1="28" y1="0" x2="28" y2="-14" stroke="#00f5d4" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="28" cy="-14" r="3.5" fill="#00f5d4" filter="url(#neonGlowCyan)" />
            <line x1="62" y1="0" x2="62" y2="-14" stroke="#00f5d4" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="62" cy="-14" r="3.5" fill="#00f5d4" filter="url(#neonGlowCyan)" />

            <g transform="translate(18, 22)">
              <circle cx="6" cy="4" r="3" fill="#00f5d4" />
              <circle cx="18" cy="4" r="3" fill="#52c41a" />
              <circle cx="30" cy="4" r="3" fill="#52c41a" />
              <circle cx="42" cy="4" r="3" fill="#00f5d4" />

              <rect x="0" y="16" width="10" height="12" rx="2" fill="#061c47" stroke="#00f5d4" strokeWidth="1" />
              <rect x="15" y="16" width="10" height="12" rx="2" fill="#061c47" stroke="#00f5d4" strokeWidth="1" />
              <rect x="30" y="16" width="10" height="12" rx="2" fill="#061c47" stroke="#00f5d4" strokeWidth="1" />
              <rect x="45" y="16" width="10" height="12" rx="2" fill="#061c47" stroke="#00f5d4" strokeWidth="1" />
            </g>
          </g>
        </svg>

        {/* 底部业务保障说明 */}
        <div style={{ marginTop: "18px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
              background: "rgba(0, 15, 60, 0.45)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "10px",
              padding: "8px 20px",
              fontSize: "13px",
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <span>● 故障检测响应：&lt; 50ms</span>
            <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>|</span>
            <span style={{ color: "#00f5d4", fontWeight: 500 }}>● 数据零丢包无感切换</span>
          </div>
        </div>
      </div>
    </div>
  );
};
