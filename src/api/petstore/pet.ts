import type {
  ApiResponse,
  Pet,
  PetStatus,
  UpdatePetWithFormParams,
  UploadPetImageParams,
} from "../../types/petstore";
import { getPetstoreClient, normalizePath } from "./client";

/**
 * 添加新宠物到商店
 * POST /pet
 */
export const addPet = async (pet: Pet): Promise<Pet> => {
  return await getPetstoreClient()
    .post(normalizePath("/pet"), {
      json: pet,
    })
    .json<Pet>();
};

/**
 * 更新现有宠物信息
 * PUT /pet
 */
export const updatePet = async (pet: Pet): Promise<Pet> => {
  return await getPetstoreClient()
    .put(normalizePath("/pet"), {
      json: pet,
    })
    .json<Pet>();
};

/**
 * 根据状态筛选宠物列表
 * GET /pet/findByStatus
 */
export const findPetsByStatus = async (
  status: PetStatus[] = ["available"]
): Promise<Pet[]> => {
  const searchParams = new URLSearchParams();
  status.forEach((s) => searchParams.append("status", s));

  return await getPetstoreClient()
    .get(normalizePath("/pet/findByStatus"), {
      searchParams,
    })
    .json<Pet[]>();
};

/**
 * 根据标签筛选宠物列表（注意：Swagger 文档中标记为 deprecated，但仍可正常调用）
 * GET /pet/findByTags
 */
export const findPetsByTags = async (tags: string[]): Promise<Pet[]> => {
  const searchParams = new URLSearchParams();
  tags.forEach((tag) => searchParams.append("tags", tag));

  return await getPetstoreClient()
    .get(normalizePath("/pet/findByTags"), {
      searchParams,
    })
    .json<Pet[]>();
};

/**
 * 根据 ID 查询宠物详情
 * GET /pet/{petId}
 */
export const getPetById = async (petId: number | string): Promise<Pet> => {
  return await getPetstoreClient()
    .get(normalizePath(`/pet/${petId}`))
    .json<Pet>();
};

/**
 * 使用表单数据更新宠物（名称、状态）
 * POST /pet/{petId}
 */
export const updatePetWithForm = async (
  petId: number | string,
  params: UpdatePetWithFormParams
): Promise<void> => {
  const body = new URLSearchParams();
  if (params.name !== undefined) body.append("name", params.name);
  if (params.status !== undefined) body.append("status", params.status);

  await getPetstoreClient().post(normalizePath(`/pet/${petId}`), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });
};

/**
 * 根据 ID 删除宠物
 * DELETE /pet/{petId}
 */
export const deletePet = async (
  petId: number | string,
  apiKey?: string
): Promise<void> => {
  const headers: Record<string, string> = {};
  if (apiKey) {
    headers.api_key = apiKey;
  }

  await getPetstoreClient().delete(normalizePath(`/pet/${petId}`), {
    headers,
  });
};

/**
 * 上传宠物图片
 * POST /pet/{petId}/uploadImage
 */
export const uploadPetImage = async (
  petId: number | string,
  params: UploadPetImageParams
): Promise<ApiResponse> => {
  const formData = new FormData();
  if (params.additionalMetadata) {
    formData.append("additionalMetadata", params.additionalMetadata);
  }
  if (params.file) {
    formData.append("file", params.file);
  }

  return await getPetstoreClient()
    .post(normalizePath(`/pet/${petId}/uploadImage`), {
      body: formData,
    })
    .json<ApiResponse>();
};
