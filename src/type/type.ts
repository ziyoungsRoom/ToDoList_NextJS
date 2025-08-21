export type GetItem = {
  id: number;
  isCompleted: boolean;
  name: string;
};

export type ItemDetail = {
  id?: number;
  tenantId?: String;
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
};
