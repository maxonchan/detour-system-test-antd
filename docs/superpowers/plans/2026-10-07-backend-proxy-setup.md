# 后台接口代理转发配置实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 配置 Vite 开发代理 `/api` 转发至目标测试服务，并更新前端接口基准地址。

**Architecture:** 通过 Vite 的 `server.proxy` 拦截 `/api` 前缀请求，去除 `/api` 前缀后转发至 `VITE_PROXY_TARGET` 目标服务；前端 `API_URL` 常量通过环境变量或默认值指向 `/api`。

**Tech Stack:** React 19, Vite 6, Refine v5, TypeScript.

## Global Constraints
- 前端请求前缀为 `/api`。
- 目标服务路径为 `https://api.fake-rest.refine.dev`。
- 代理须重写路径去除 `/api`。
- 代理目标与前缀须支持环境变量配置。

---

### Task 1: 配置环境变量与 Vite 代理

**Files:**
- Modify: `.env`
- Modify: `vite.config.ts`

**Interfaces:**
- Consumes: 系统环境变量
- Produces: Vite 开发服务器 `/api` 代理路由

- [ ] **Step 1: 更新环境变量文件 `.env`**

在 `.env` 中加入代理目标与基础路径：
```env
VITE_API_BASE_URL=/api
VITE_PROXY_TARGET=https://api.fake-rest.refine.dev
```

- [ ] **Step 2: 修改 `vite.config.ts` 配置代理**

使用 `loadEnv` 读取环境变量，并配置 `server.proxy`：
```ts
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const proxyTarget = env.VITE_PROXY_TARGET || "https://api.fake-rest.refine.dev";

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: proxyTarget,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
```

- [ ] **Step 3: 验证代理转发**

测试通过本地 Vite 服务访问 `/api/blog_posts`：
```bash
powershell -Command "curl.exe -s http://localhost:5173/api/blog_posts | Select-String -Pattern 'title' | Select-Object -First 1"
```
预期：返回包含文章标题的 JSON 数据（HTTP 200）。

- [ ] **Step 4: 提交 Task 1 代码**

```bash
git add .env vite.config.ts
git commit -m "feat: configure vite dev proxy for /api"
```

---

### Task 2: 配置前端数据源常量并整体验证

**Files:**
- Modify: `src/providers/constants.ts`

**Interfaces:**
- Consumes: `import.meta.env.VITE_API_BASE_URL`
- Produces: `API_URL` 导出常量供 Refine dataProvider 使用

- [ ] **Step 1: 修改 `src/providers/constants.ts`**

```ts
export const API_URL = import.meta.env.VITE_API_BASE_URL || "/api";
export const TOKEN_KEY = "refine-auth";
```

- [ ] **Step 2: TypeScript 类型与语法检查**

运行：
```bash
npx tsc --noEmit
```
预期：无类型或语法错误，退出码为 0。

- [ ] **Step 3: 验证文章和分类数据请求**

测试通过本地端口获取分类列表：
```bash
powershell -Command "curl.exe -s http://localhost:5173/api/categories | Select-String -Pattern 'title' | Select-Object -First 1"
```
预期：成功返回分类数据。

- [ ] **Step 4: 提交 Task 2 代码**

```bash
git add src/providers/constants.ts
git commit -m "feat: use relative /api endpoint in constants"
```
