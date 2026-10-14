import React from "react";
import { useLogin, useTranslate } from "@refinedev/core";
import { ThemedTitle } from "@refinedev/antd";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  Row,
  Col,
  theme,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { DetourRouteHero } from "./detour-route-hero";

const { Title, Text } = Typography;

interface LoginFormTypes {
  username: string;
  password: string;
  remember?: boolean;
}

export const Login: React.FC = () => {
  const { token } = theme.useToken();
  const translate = useTranslate();
  const { mutate: login, isPending } = useLogin<LoginFormTypes>();

  const onFinish = (values: LoginFormTypes) => {
    login(values);
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
        backgroundColor: token.colorBgContainer,
      }}
    >
      <Row style={{ minHeight: "100vh", width: "100%", margin: 0 }}>
        {/* 左侧：备用线路切换拓扑示意图展示区 */}
        <Col
          xs={0}
          md={12}
          lg={13}
          xl={14}
          style={{
            position: "relative",
            minHeight: "100vh",
            padding: 0,
            overflow: "hidden",
          }}
        >
          <DetourRouteHero />

          {/* 右边缘多层小半径波浪过渡（完全还原参考图的波浪曲面） */}
          <svg
            viewBox="0 0 120 1000"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              top: 0,
              right: "-1px",
              height: "100%",
              width: "90px",
              zIndex: 3,
              pointerEvents: "none",
            }}
          >
            <defs>
              <linearGradient id="waveCyanGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#00f5d4" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#1890ff" stopOpacity="0.25" />
              </linearGradient>
              <linearGradient id="waveLightGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* 第 1 层：青蓝半透明小半径波浪底层 */}
            <path
              d="M 120,0 C 45,70 10,150 42,250 C 75,350 90,430 40,530 C 0,620 15,720 65,810 C 98,870 60,945 120,1000 L 120,0 Z"
              fill="url(#waveCyanGrad)"
            />

            {/* 第 2 层：柔白半透明小半径波浪过渡层 */}
            <path
              d="M 120,0 C 60,75 22,155 52,255 C 82,355 100,435 50,535 C 10,625 25,725 72,815 C 106,875 70,948 120,1000 L 120,0 Z"
              fill="url(#waveLightGrad)"
            />

            {/* 第 3 层：主波浪（与右侧表单背景色一致的纯白实体层） */}
            <path
              d="M 120,0 C 72,80 35,160 65,260 C 95,360 112,440 60,540 C 20,630 35,730 85,820 C 115,880 80,950 120,1000 L 120,0 Z"
              fill={token.colorBgContainer}
            />
          </svg>
        </Col>

        {/* 右侧：整屏右半边纯净登录表单区 */}
        <Col
          xs={24}
          md={12}
          lg={11}
          xl={10}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            padding: "48px 36px",
            backgroundColor: token.colorBgContainer,
            zIndex: 4,
          }}
        >
          <div style={{ width: "100%", maxWidth: "360px" }}>
            {/* 品牌 Logo 与标题 */}
            <div style={{ marginBottom: "36px" }}>
              <div style={{ marginBottom: "20px" }}>
                <ThemedTitle collapsed={false} />
              </div>
              <Title
                level={2}
                style={{
                  marginBottom: "8px",
                  fontWeight: 600,
                  color: token.colorTextHeading,
                  letterSpacing: "-0.5px",
                }}
              >
                {translate("pages.login.title", "欢迎登录")}
              </Title>
              <Text type="secondary" style={{ fontSize: "14px" }}>
                {translate(
                  "pages.login.subtitle",
                  "请输入您的用户名与密码以进入系统"
                )}
              </Text>
            </div>

            {/* 登录表单 */}
            <Form<LoginFormTypes>
              layout="vertical"
              initialValues={{
                username: "admin",
                password: "password",
                remember: true,
              }}
              onFinish={onFinish}
              requiredMark={false}
              size="large"
            >
              {/* 用户名 */}
              <Form.Item
                name="username"
                label={
                  <span style={{ fontWeight: 500, color: token.colorText }}>
                    {translate("pages.login.fields.username", "用户名")}
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: translate(
                      "pages.login.errors.requiredUsername",
                      "请输入用户名"
                    ),
                  },
                ]}
              >
                <Input
                  prefix={
                    <UserOutlined style={{ color: "#1b3bf1" }} />
                  }
                  placeholder={translate(
                    "pages.login.fields.username",
                    "请输入用户名"
                  )}
                  style={{
                    borderRadius: "8px",
                    height: "44px",
                  }}
                />
              </Form.Item>

              {/* 密码 */}
              <Form.Item
                name="password"
                label={
                  <span style={{ fontWeight: 500, color: token.colorText }}>
                    {translate("pages.login.fields.password", "密码")}
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: translate(
                      "pages.login.errors.requiredPassword",
                      "请输入密码"
                    ),
                  },
                ]}
              >
                <Input.Password
                  prefix={
                    <LockOutlined style={{ color: "#1b3bf1" }} />
                  }
                  autoComplete="current-password"
                  placeholder={translate(
                    "pages.login.fields.password",
                    "请输入密码"
                  )}
                  style={{
                    borderRadius: "8px",
                    height: "44px",
                  }}
                />
              </Form.Item>

              {/* 记住我 */}
              <Form.Item
                name="remember"
                valuePropName="checked"
                style={{ marginBottom: "26px" }}
              >
                <Checkbox style={{ fontSize: "14px" }}>
                  {translate(
                    "pages.login.buttons.rememberMe",
                    "记住登录状态"
                  )}
                </Checkbox>
              </Form.Item>

              {/* 登录按钮 */}
              <Form.Item style={{ marginBottom: 0 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={isPending}
                  block
                  style={{
                    height: "46px",
                    fontSize: "16px",
                    fontWeight: 600,
                    borderRadius: "24px",
                    backgroundColor: "#1b3bf1",
                    boxShadow: "0 6px 18px rgba(27, 59, 241, 0.4)",
                  }}
                >
                  {translate("pages.login.buttons.submit", "登录")}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};
