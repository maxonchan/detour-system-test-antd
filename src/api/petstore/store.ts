import type { InventoryMap, Order } from "../../types/petstore";
import { getPetstoreClient, normalizePath } from "./client";

/**
 * 获取宠物库存状态统计
 * GET /store/inventory
 */
export const getInventory = async (apiKey?: string): Promise<InventoryMap> => {
  const headers: Record<string, string> = {};
  if (apiKey) {
    headers.api_key = apiKey;
  }

  return await getPetstoreClient()
    .get(normalizePath("/store/inventory"), {
      headers,
    })
    .json<InventoryMap>();
};

/**
 * 提交宠物购买订单
 * POST /store/order
 */
export const placeOrder = async (order: Order): Promise<Order> => {
  return await getPetstoreClient()
    .post(normalizePath("/store/order"), {
      json: order,
    })
    .json<Order>();
};

/**
 * 根据订单 ID 查询订单详情
 * GET /store/order/{orderId}
 */
export const getOrderById = async (
  orderId: number | string
): Promise<Order> => {
  return await getPetstoreClient()
    .get(normalizePath(`/store/order/${orderId}`))
    .json<Order>();
};

/**
 * 根据订单 ID 取消/删除订单
 * DELETE /store/order/{orderId}
 */
export const deleteOrder = async (
  orderId: number | string
): Promise<void> => {
  await getPetstoreClient().delete(normalizePath(`/store/order/${orderId}`));
};
