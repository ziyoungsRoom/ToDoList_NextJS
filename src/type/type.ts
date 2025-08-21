export type GetItem = {
  id: number;
  isCompleted: boolean;
  name: string;
};

export type PatchItem = {
  id?: number;
  tenantId?: String;
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
};

type GetItemDetail = {
  id: number;
  isCompleted: boolean;
  imageUrl: string;
  memo: string;
  name: string;
  tenantId: string;
};

type EditItemDetail = {
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
};

type PostImage = {
  url: string;
};
