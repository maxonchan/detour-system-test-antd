export interface MockCategory {
  id: number;
  title: string;
}

export const initialCategories: MockCategory[] = [
  { id: 1, title: "技术架构" },
  { id: 2, title: "前端工程化" },
  { id: 3, title: "UI/UX 设计" },
  { id: 4, title: "DevOps & 云原生" },
  { id: 5, title: "产品管理" },
];
