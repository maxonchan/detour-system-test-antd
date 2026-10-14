import type { LoginUserParams, User } from "../../types/petstore";
import { getPetstoreClient, normalizePath } from "./client";

/**
 * 创建新用户
 * POST /user
 */
export const createUser = async (user: User): Promise<void> => {
  await getPetstoreClient().post(normalizePath("/user"), {
    json: user,
  });
};

/**
 * 批量创建用户（数组格式）
 * POST /user/createWithArray
 */
export const createUsersWithArray = async (users: User[]): Promise<void> => {
  await getPetstoreClient().post(normalizePath("/user/createWithArray"), {
    json: users,
  });
};

/**
 * 批量创建用户（列表格式）
 * POST /user/createWithList
 */
export const createUsersWithList = async (users: User[]): Promise<void> => {
  await getPetstoreClient().post(normalizePath("/user/createWithList"), {
    json: users,
  });
};

/**
 * 用户登录
 * GET /user/login
 */
export const loginUser = async (params: LoginUserParams): Promise<string> => {
  const searchParams = new URLSearchParams({
    username: params.username,
    password: params.password,
  });

  return await getPetstoreClient()
    .get(normalizePath("/user/login"), {
      searchParams,
    })
    .text();
};

/**
 * 用户登出当前会话
 * GET /user/logout
 */
export const logoutUser = async (): Promise<void> => {
  await getPetstoreClient().get(normalizePath("/user/logout"));
};

/**
 * 根据用户名获取用户信息
 * GET /user/{username}
 */
export const getUserByName = async (username: string): Promise<User> => {
  return await getPetstoreClient()
    .get(normalizePath(`/user/${encodeURIComponent(username)}`))
    .json<User>();
};

/**
 * 更新指定用户信息
 * PUT /user/{username}
 */
export const updateUser = async (
  username: string,
  user: User
): Promise<void> => {
  await getPetstoreClient().put(
    normalizePath(`/user/${encodeURIComponent(username)}`),
    {
      json: user,
    }
  );
};

/**
 * 删除指定用户
 * DELETE /user/{username}
 */
export const deleteUser = async (username: string): Promise<void> => {
  await getPetstoreClient().delete(
    normalizePath(`/user/${encodeURIComponent(username)}`)
  );
};
