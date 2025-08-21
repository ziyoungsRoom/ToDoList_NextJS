"use client";

import Done from "@/assets/Done.svg";
import Todo from "@/assets/Todo.svg";
import Empty from "@/components/Empty";

import { useEffect, useState } from "react";
import SearchComponent from "@/components/SearchComponent";
import MainButton from "@/components/MainButton";
import { GetTodos, PostTodo } from "@/api/todoApi";
import CheckList from "@/components/CheckList";
import { GetItem } from "@/type/type";

const MainPage = () => {
  const [items, setItems] = useState<GetItem[]>([]);
  const [value, setValue] = useState<string>("");

  // 페이지가 렌더링되면 todolist 를 불러와요.
  useEffect(() => {
    const GetItems = async () => {
      const data: GetItem[] = await GetTodos();

      if (!data.length) return;

      setItems([...data]);
    };

    GetItems();
  }, []);

  // isCompleted 값 필터링을 통해 배열을 분리해요.
  const todoItems = items.filter((todo) => todo.isCompleted === false);
  const doneItems = items.filter((todo) => todo.isCompleted === true);

  // 추가하기 버튼 클릭 시 todolist에 등록해요.
  const PostItem = async () => {
    // 유효성 검사
    if (value.trim() === "") return alert("투두 이름을 입력해주세요 !");

    const data = await PostTodo(value.trim());
    if (data) setItems((prev) => [...prev, data]);

    setValue("");
  };

  return (
    <div className="w-full min-h-screen desktop:w-[80%] mx-auto mt-[20px] px-4 flex flex-col gap-12">
      <div className="w-full h-full flex gap-4">
        <SearchComponent value={value} setValue={setValue} />
        <MainButton
          variants="Add"
          state="active"
          type="submit"
          onClick={PostItem}
        />
      </div>
      <div className="w-full flex flex-col items-center desktop:items-start desktop:flex-row gap-16 ">
        <section className="w-full min-w-[120px] h-full min-h-[240px] flex flex-col gap-4 ">
          <Todo />
          <div className="w-full h-full flex flex-col gap-2">
            {!todoItems && <Empty section={"todo"} />}
            {todoItems &&
              todoItems.map((todo) => (
                <CheckList
                  key={todo.id}
                  id={todo.id}
                  text={todo.name}
                  isDone={todo.isCompleted}
                  setItems={setItems}
                />
              ))}
          </div>
        </section>
        <section className="w-full min-w-[120px] h-full min-h-[240px] flex flex-col gap-4 ">
          <Done />
          <div className="w-full h-full flex flex-col gap-2">
            {!doneItems.length && <Empty section={"done"} />}
            {doneItems &&
              doneItems.map((done) => (
                <CheckList
                  key={done.id}
                  id={done.id}
                  text={done.name}
                  isDone={done.isCompleted}
                  setItems={setItems}
                />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
