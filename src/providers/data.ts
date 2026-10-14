import { createSimpleRestDataProvider } from "@refinedev/rest/simple-rest";
import type { DataProvider } from "@refinedev/core";
import { API_URL } from "./constants";
import { initialCategories, type MockCategory } from "./mockCategories";

const baseProvider = createSimpleRestDataProvider({
  apiURL: API_URL,
});

// 本地内存中保存的 categories 状态（支持增删改查）
let mockCategories: MockCategory[] = [...initialCategories];

export const dataProvider: DataProvider = {
  ...baseProvider.dataProvider,

  getList: async (params) => {
    if (params.resource === "categories") {
      let data = [...mockCategories];

      // 处理排序
      if (params.sorters && params.sorters.length > 0) {
        const { field, order } = params.sorters[0];
        data.sort((a, b) => {
          const valA = (a as any)[field];
          const valB = (b as any)[field];
          if (valA < valB) return order === "asc" ? -1 : 1;
          if (valA > valB) return order === "asc" ? 1 : -1;
          return 0;
        });
      }

      // 处理分页
      const currentPage = params.pagination?.currentPage ?? 1;
      const pageSize = params.pagination?.pageSize ?? 10;
      const start = (currentPage - 1) * pageSize;
      const paginatedData = data.slice(start, start + pageSize);

      return {
        data: paginatedData as any,
        total: data.length,
      };
    }

    return baseProvider.dataProvider.getList(params);
  },

  getMany: async (params) => {
    if (params.resource === "categories") {
      const ids = params.ids.map(String);
      const data = mockCategories.filter((item) => ids.includes(String(item.id)));
      return {
        data: data as any,
      };
    }

    return baseProvider.dataProvider.getMany
      ? baseProvider.dataProvider.getMany(params)
      : { data: [] };
  },

  getOne: async (params) => {
    if (params.resource === "categories") {
      const item = mockCategories.find((cat) => String(cat.id) === String(params.id));
      if (!item) {
        throw new Error(`Category with id ${params.id} not found`);
      }
      return { data: { ...item } as any };
    }

    return baseProvider.dataProvider.getOne(params);
  },

  create: async (params) => {
    if (params.resource === "categories") {
      const maxId = mockCategories.reduce(
        (max, item) => Math.max(max, Number(item.id) || 0),
        0
      );
      const newItem: MockCategory = {
        id: maxId + 1,
        title: (params.variables as any)?.title || "",
        ...(params.variables as any),
      };
      mockCategories.unshift(newItem);
      return { data: newItem as any };
    }

    return baseProvider.dataProvider.create(params);
  },

  update: async (params) => {
    if (params.resource === "categories") {
      const id = params.id;
      const index = mockCategories.findIndex((item) => String(item.id) === String(id));
      if (index === -1) {
        throw new Error(`Category with id ${id} not found`);
      }

      const updatedItem: MockCategory = {
        ...mockCategories[index],
        ...(params.variables as any),
      };
      mockCategories[index] = updatedItem;

      return { data: updatedItem as any };
    }

    return baseProvider.dataProvider.update(params);
  },

  deleteOne: async (params) => {
    if (params.resource === "categories") {
      const item = mockCategories.find((c) => String(c.id) === String(params.id));
      mockCategories = mockCategories.filter((c) => String(c.id) !== String(params.id));
      return { data: (item || { id: params.id }) as any };
    }

    return baseProvider.dataProvider.deleteOne(params);
  },
};

export const { kyInstance } = baseProvider;
