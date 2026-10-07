# 2026-10-07 后台接口代理转发配置设计

## 1. 目标
将前端开发环境中的后台接口请求由直接请求远端切换为通过本地 Vite 代理（`/api` 前缀）转发到目标接口服务，并支持通过 `.env` 快速切换代理目标地址。

## 2. 现状分析
- 当前项目为 Refine + Vite + React 19 + Ant Design。
- `src/providers/constants.ts` 写死为 `https://api.fake-rest.refine.dev`。
- `vite.config.ts` 仅配置了 `@vitejs/plugin-react`，未配置 `server.proxy`。
- 测试服务 `https://api.fake-rest.refine.dev` 接口路径不带 `/api`（例如直接是 `/blog_posts`），因此本地代理路由需要通过 `rewrite: (path) => path.replace(/^\/api/, '')` 去除 `/api` 前缀。

## 3. 详细设计

### 3.1 环境变量配置 (`.env`)
新增并规范环境变量：
```env
VITE_API_BASE_URL=/api
VITE_PROXY_TARGET=https://api.fake-rest.refine.dev
```

### 3.2 Vite 开发服务器代理配置 (`vite.config.ts`)
使用 Vite 的 `loadEnv(mode, process.cwd())` 加载环境变量，并在 `server.proxy` 配置转发规则：
- 前缀：`/api`
- 目标：读取 `env.VITE_PROXY_TARGET || 'https://api.fake-rest.refine.dev'`
- `changeOrigin: true`（修改请求头 Host 为目标服务 Host）
- `secure: false`
- `rewrite: (path) => path.replace(/^\/api/, '')`

### 3.3 数据源常量配置 (`src/providers/constants.ts`)
将 `API_URL` 修改为：
```ts
export const API_URL = import.meta.env.VITE_API_BASE_URL || "/api";
export const TOKEN_KEY = "refine-auth";
```

## 4. 验证计划
1. 检查环境变量和代码语法、类型检查 (`tsc --noEmit`)。
2. 启动或触发开发服务器热更新，通过本地网络请求测试：
   - 访问 `http://localhost:5173/api/blog_posts`，验证是否返回 200 及对应的 JSON 数据。
3. 检查前端应用控制台及数据列表，确保 blog-posts 列表正常加载。
