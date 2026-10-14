import React from "react";
import { Typography, Space, Tag } from "antd";
import {
  ThunderboltFilled,
  SafetyCertificateFilled,
  BarChartOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export const AuroraHero: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        backgroundColor: "#080c16",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "56px 48px",
        boxSizing: "border-box",
        color: "#ffffff",
      }}
    >
      {/* 极光背景光晕 1：右上角深蓝紫 */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          right: "-10%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(114, 46, 209, 0.45) 0%, rgba(22, 119, 255, 0.15) 50%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      {/* 极光背景光晕 2：左中下方青蓝 */}
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-15%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(22, 119, 255, 0.4) 0%, rgba(19, 194, 194, 0.25) 45%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* 极客微网格点阵 (Dot Grid) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.7,
          pointerEvents: "none",
        }}
      />

      {/* 顶部：Badge 标签与大标语 */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "540px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 14px",
            borderRadius: "20px",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.16)",
            backdropFilter: "blur(12px)",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#52c41a",
              boxShadow: "0 0 10px #52c41a",
            }}
          />
          <span
            style={{
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.5px",
              color: "#d9d9d9",
            }}
          >
            NEXT-GEN ENTERPRISE PLATFORM
          </span>
        </div>

        <Title
          level={1}
          style={{
            color: "#ffffff",
            fontSize: "38px",
            lineHeight: "1.25",
            fontWeight: 700,
            letterSpacing: "-0.8px",
            marginBottom: "16px",
          }}
        >
          数字化高效驱动，
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #69b1ff 0%, #b37feb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            掌控核心业务与数据
          </span>
        </Title>

        <Text
          style={{
            color: "rgba(255, 255, 255, 0.65)",
            fontSize: "16px",
            lineHeight: "26px",
            display: "block",
          }}
        >
          开箱即用的现代化中后台管理体验，提供高可用服务治理、细粒度权限控制与全链路实时监控。
        </Text>
      </div>

      {/* 中部：磨砂玻璃（Glassmorphism）高质感指标卡片群 */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          maxWidth: "520px",
          margin: "36px 0",
        }}
      >
        {/* 卡片 1: 高可用架构与性能 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 22px",
            borderRadius: "14px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
            transition: "all 0.3s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #1677ff 0%, #13c2c2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                color: "#ffffff",
                boxShadow: "0 4px 14px rgba(22, 119, 255, 0.35)",
              }}
            >
              <ThunderboltFilled />
            </div>
            <div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "3px",
                }}
              >
                99.99% 高可用架构
              </div>
              <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.55)" }}>
                毫秒级数据响应与多区域容灾备份
              </div>
            </div>
          </div>
          <Tag
            color="success"
            style={{
              borderRadius: "6px",
              padding: "3px 10px",
              background: "rgba(82, 196, 26, 0.15)",
              border: "1px solid rgba(82, 196, 26, 0.35)",
              color: "#95de64",
              fontWeight: 500,
            }}
          >
            Active
          </Tag>
        </div>

        {/* 卡片 2: 企业级安全与权限控制 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 22px",
            borderRadius: "14px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #722ed1 0%, #1677ff 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                color: "#ffffff",
                boxShadow: "0 4px 14px rgba(114, 46, 209, 0.35)",
              }}
            >
              <SafetyCertificateFilled />
            </div>
            <div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "3px",
                }}
              >
                全链路安全合规
              </div>
              <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.55)" }}>
                RBAC 细粒度权限管控与审计追踪
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "#adc6ff",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <CheckCircleFilled style={{ color: "#69b1ff" }} /> 审计开启
          </div>
        </div>

        {/* 卡片 3: 数据智能分析 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 22px",
            borderRadius: "14px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #eb2f96 0%, #722ed1 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                color: "#ffffff",
                boxShadow: "0 4px 14px rgba(235, 47, 150, 0.35)",
              }}
            >
              <BarChartOutlined />
            </div>
            <div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "3px",
                }}
              >
                多维度实时监控
              </div>
              <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.55)" }}>
                即时可视化分析，助力敏捷业务决策
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "#ff85c0",
              fontWeight: 600,
              fontFamily: "monospace",
            }}
          >
            +38.2%
          </div>
        </div>
      </div>

      {/* 底部：状态与版本信息 */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          paddingTop: "20px",
          color: "rgba(255, 255, 255, 0.45)",
          fontSize: "13px",
        }}
      >
        <Space size="middle">
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#52c41a",
              }}
            />
            全系统节点运行正常
          </span>
        </Space>
        <span>v2.4.0 · Powered by Refine</span>
      </div>
    </div>
  );
};
