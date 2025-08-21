export type GetItem = {
  id: number;
  isCompleted: boolean;
  name: string;
};

export type ItemDetail = {
  id?: number;
  tenantId?: string;
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
};
