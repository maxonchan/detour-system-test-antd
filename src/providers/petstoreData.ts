import type { DataProvider } from "@refinedev/core";
import { getPetstoreClient, normalizePath } from "../api/petstore/client";
import {
  addPet,
  updatePet,
  getPetById,
  deletePet,
  findPetsByStatus,
  findPetsByTags,
  updatePetWithForm,
  uploadPetImage,
} from "../api/petstore/pet";
import {
  getInventory,
  getOrderById,
  placeOrder,
  deleteOrder,
} from "../api/petstore/store";
import {
  getUserByName,
  createUser,
  createUsersWithList,
  createUsersWithArray,
  updateUser,
  deleteUser,
} from "../api/petstore/user";
import type { PetStatus } from "../types";

/**
 * 适配 Refine DataProvider 规范的 Petstore Provider
 * 1. 标准方法 (getList / getOne / create / update / deleteOne / getMany / createMany)
 * 2. 通过 meta 参数分流特殊非标接口 (如 findByTags、updatePetWithForm 等)
 * 3. 通过 custom 方法捕获所有其他非标接口 (如 /store/inventory、uploadImage 等)
 */
export const petstoreDataProvider: DataProvider = {
  getList: async ({ resource, pagination, filters, meta }) => {
    const res = resource.toLowerCase();

    if (res === "pets" || res === "pet") {
      let allPets = [];

      // 支持通过 meta.tags 或 filters 中的 tags 字段触发非标接口 GET /pet/findByTags
      const tagFilter = filters?.find((f) => "field" in f && f.field === "tags");
      const tags = (meta?.tags ?? (tagFilter && "value" in tagFilter ? tagFilter.value : undefined)) as
        | string[]
        | string
        | undefined;

      if (tags) {
        const tagList = Array.isArray(tags) ? tags : [tags];
        allPets = await findPetsByTags(tagList);
      } else {
        // 默认触发 GET /pet/findByStatus
        const statusFilter = filters?.find(
          (f) => "field" in f && f.field === "status"
        );
        const statusValue = (
          meta?.status ??
          (statusFilter && "value" in statusFilter ? statusFilter.value : "available")
        ) as PetStatus | PetStatus[];

        const statuses = Array.isArray(statusValue) ? statusValue : [statusValue];
        allPets = await findPetsByStatus(statuses);
      }

      // 客户端内存分页适配
      const currentPage = pagination?.currentPage ?? 1;
      const pageSize = pagination?.pageSize ?? 10;
      const start = (currentPage - 1) * pageSize;
      const paginatedData = allPets.slice(start, start + pageSize);

      return {
        data: paginatedData as any,
        total: allPets.length,
      };
    }

    throw new Error(
      `[PetstoreDataProvider] Resource '${resource}' does not support getList on Swagger Petstore API.`
    );
  },

  getOne: async ({ resource, id }) => {
    const res = resource.toLowerCase();

    if (res === "pets" || res === "pet") {
      const data = await getPetById(id);
      return { data: data as any };
    }
    if (res === "orders" || res === "order") {
      const data = await getOrderById(id);
      return { data: data as any };
    }
    if (res === "users" || res === "user") {
      const data = await getUserByName(String(id));
      return { data: data as any };
    }

    throw new Error(`[PetstoreDataProvider] Resource '${resource}' is not supported in getOne.`);
  },

  getMany: async ({ resource, ids }) => {
    const res = resource.toLowerCase();

    if (res === "pets" || res === "pet") {
      const data = await Promise.all(ids.map((id) => getPetById(id)));
      return { data: data as any };
    }
    if (res === "orders" || res === "order") {
      const data = await Promise.all(ids.map((id) => getOrderById(id)));
      return { data: data as any };
    }
    if (res === "users" || res === "user") {
      const data = await Promise.all(ids.map((id) => getUserByName(String(id))));
      return { data: data as any };
    }

    throw new Error(`[PetstoreDataProvider] Resource '${resource}' is not supported in getMany.`);
  },

  create: async ({ resource, variables }) => {
    const res = resource.toLowerCase();

    if (res === "pets" || res === "pet") {
      const data = await addPet(variables as any);
      return { data: data as any };
    }
    if (res === "orders" || res === "order") {
      const data = await placeOrder(variables as any);
      return { data: data as any };
    }
    if (res === "users" || res === "user") {
      await createUser(variables as any);
      return { data: variables as any };
    }

    throw new Error(`[PetstoreDataProvider] Resource '${resource}' is not supported in create.`);
  },

  createMany: async ({ resource, variables, meta }) => {
    const res = resource.toLowerCase();

    // 捕获非标批量创建接口：POST /user/createWithList 或 POST /user/createWithArray
    if (res === "users" || res === "user") {
      if (meta?.mode === "array") {
        await createUsersWithArray(variables as any);
      } else {
        await createUsersWithList(variables as any);
      }
      return { data: variables as any };
    }

    throw new Error(`[PetstoreDataProvider] Resource '${resource}' is not supported in createMany.`);
  },

  update: async ({ resource, id, variables, meta }) => {
    const res = resource.toLowerCase();

    if (res === "pets" || res === "pet") {
      // 如果声明了 meta.contentType === 'form'，则走非标表单更新 POST /pet/{petId}
      if (meta?.contentType === "form") {
        await updatePetWithForm(id, variables as any);
        return { data: { ...(variables as any), id: Number(id) } };
      }
      const data = await updatePet({ ...(variables as any), id: Number(id) });
      return { data: data as any };
    }
    if (res === "users" || res === "user") {
      await updateUser(String(id), variables as any);
      return { data: { ...(variables as any), username: String(id) } };
    }

    throw new Error(`[PetstoreDataProvider] Resource '${resource}' is not supported in update.`);
  },

  deleteOne: async ({ resource, id, meta }) => {
    const res = resource.toLowerCase();

    if (res === "pets" || res === "pet") {
      await deletePet(id, meta?.apiKey as string | undefined);
      return { data: { id } as any };
    }
    if (res === "orders" || res === "order") {
      await deleteOrder(id);
      return { data: { id } as any };
    }
    if (res === "users" || res === "user") {
      await deleteUser(String(id));
      return { data: { id } as any };
    }

    throw new Error(`[PetstoreDataProvider] Resource '${resource}' is not supported in deleteOne.`);
  },

  /**
   * 专门用于捕获非标准 REST 接口（通过 useCustom / useCustomMutation 触发）
   * 例如：GET /store/inventory、POST /pet/{petId}/uploadImage 等
   */
  custom: async ({ url, method, payload, query, headers }) => {
    const cleanPath = normalizePath(url);

    // 1. 针对已知特殊接口的快捷处理
    if (cleanPath === "store/inventory" && method === "get") {
      const apiKey = (headers as Record<string, string> | undefined)?.api_key;
      const data = await getInventory(apiKey);
      return { data: data as any };
    }

    const uploadMatch = cleanPath.match(/^pet\/([^/]+)\/uploadImage$/);
    if (uploadMatch && method === "post") {
      const petId = uploadMatch[1];
      const data = await uploadPetImage(petId, (payload as any) ?? {});
      return { data: data as any };
    }

    // 2. 通用回退：使用 petstoreClient 处理任意自定义请求
    const client = getPetstoreClient();
    const response = await client(cleanPath, {
      method: method.toUpperCase(),
      searchParams: query as Record<string, string | number | boolean> | undefined,
      json: payload instanceof FormData ? undefined : payload,
      body: payload instanceof FormData ? payload : undefined,
      headers: headers as Record<string, string> | undefined,
    });

    const contentType = response.headers.get("content-type") || "";
    const data = contentType.includes("application/json")
      ? await response.json()
      : await response.text();

    return { data: data as any };
  },

  getApiUrl: () => "https://petstore.swagger.io/v2",
};
