import { api } from "./api";

export const GetTodos = async () => {
  try {
    const res = await api.get("/items");
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
