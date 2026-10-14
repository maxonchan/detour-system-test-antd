import type { BaseRecord } from "@refinedev/core";

/**
 * 宠物状态枚举
 */
export type PetStatus = "available" | "pending" | "sold";

/**
 * 订单状态枚举
 */
export type OrderStatus = "placed" | "approved" | "delivered";

/**
 * 通用 API 响应
 */
export interface ApiResponse {
  code?: number;
  type?: string;
  message?: string;
}

/**
 * 分类模型
 */
export interface Category {
  id?: number;
  name?: string;
}

/**
 * 标签模型
 */
export interface Tag {
  id?: number;
  name?: string;
}

/**
 * 宠物模型
 */
export interface Pet {
  id?: number;
  category?: Category;
  name: string;
  photoUrls: string[];
  tags?: Tag[];
  status?: PetStatus;
}

/**
 * 订单模型
 */
export interface Order {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;
  status?: OrderStatus;
  complete?: boolean;
}

/**
 * 用户模型
 */
export interface User {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  userStatus?: number;
}

// -------------------------------------------------------------
// Refine BaseRecord 扩展类型，便于直接用于 useTable / useForm 等钩子
// -------------------------------------------------------------
export type PetRecord = Pet & BaseRecord;
export type OrderRecord = Order & BaseRecord;
export type UserRecord = User & BaseRecord;
export type CategoryRecord = Category & BaseRecord;
export type TagRecord = Tag & BaseRecord;

// -------------------------------------------------------------
// API 请求与响应参数类型定义
// -------------------------------------------------------------

/**
 * 上传宠物图片参数
 */
export interface UploadPetImageParams {
  additionalMetadata?: string;
  file?: File | Blob;
}

/**
 * 表单更新宠物参数
 */
export interface UpdatePetWithFormParams {
  name?: string;
  status?: string;
}

/**
 * 根据状态查询宠物参数
 */
export interface FindPetsByStatusParams {
  status: PetStatus[];
}

/**
 * 根据标签查询宠物参数
 */
export interface FindPetsByTagsParams {
  tags: string[];
}

/**
 * 用户登录参数
 */
export interface LoginUserParams {
  username: string;
  password: string;
}

/**
 * 商店库存响应映射 (状态 -> 数量)
 */
export type InventoryMap = Record<string, number>;
