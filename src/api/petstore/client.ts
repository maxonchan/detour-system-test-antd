import type { KyInstance } from "ky";
import { kyInstance } from "../../providers/data";

/**
 * 默认使用当前项目的 ky 客户端实例（已配置基础 API_URL 和拦截器）
 */
let petstoreClient: KyInstance = kyInstance;

/**
 * 允许外部覆盖或自定义 API 客户端实例（例如需要切换独立的 Petstore 域名时）
 */
export const setPetstoreClient = (customClient: KyInstance) => {
  petstoreClient = customClient;
};

/**
 * 获取当前的 API 客户端实例
 */
export const getPetstoreClient = (): KyInstance => petstoreClient;

/**
 * 辅助函数：当使用带 prefixUrl 的 ky 客户端时，路径不能以 '/' 开头
 */
export const normalizePath = (path: string): string => {
  return path.replace(/^\/+/, "");
};
