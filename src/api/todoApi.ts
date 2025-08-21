import { ItemDetail } from "@/type/type";
import { api } from "./api";

export const GetTodos = async () => {
  try {
    const res = await api.get("/items");

    return res?.data;
  } catch (error) {
    console.error(error);
  }
};

export const GetTodoDetail = async (itemId: number) => {
  try {
    if (!itemId) throw new Error("Id is required");

    const res = await api.get(`/items/${itemId}`);

    return res?.data;
  } catch (error) {
    console.error(error);
  }
};

export const PostTodo = async (value: string) => {
  try {
    const res = await api.post("/items", {
      name: value,
    });

    return res?.data;
  } catch (error) {
    console.error(error);
  }
};

export const PatchTodo = async (itemId: number, todoDetail: ItemDetail) => {
  try {
    if (!itemId) throw new Error("Id is required");

    const payload: ItemDetail = {
      name: todoDetail.name,
      memo: todoDetail.memo === null ? "" : todoDetail.memo,
      imageUrl: todoDetail.imageUrl === null ? "" : todoDetail.imageUrl,
      isCompleted: todoDetail.isCompleted,
    };

    const res = await api.patch(`/items/${itemId}`, payload);

    return res?.data;
  } catch (error) {
    console.error(error);
  }
};

export const CheckTodo = async (itemId: number, isCompleted: boolean) => {
  try {
    if (!itemId) throw new Error("Id is required");

    const getResponse = await api.get(`/items/${itemId}`);

    const payload: ItemDetail = {
      name: getResponse.data.name,
      memo: getResponse.data.memo === null ? "" : getResponse.data.memo,
      imageUrl:
        getResponse.data.imageUrl === null ? "" : getResponse.data.imageUrl,
      isCompleted: !isCompleted,
    };

    const res = await api.patch(`/items/${itemId}`, payload);

    return res?.data;
  } catch (error) {
    console.error(error);
  }
};

export const DeleteTodo = async (itemId: number) => {
  try {
    if (!itemId) throw new Error("Id is required");

    const res = await api.delete(`/items/${itemId}`);

    return res?.data;
  } catch (error) {
    console.error(error);
  }
};
