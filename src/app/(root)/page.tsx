"use client";

import Done from "@/assets/Done.svg";
import Todo from "@/assets/Todo.svg";
import Empty from "@/components/Empty";

import { useEffect, useState } from "react";
import SearchComponent from "@/components/SearchComponent";
import MainButton from "@/components/MainButton";
import { GetTodos } from "@/api/todoApi";
import CheckList from "@/components/CheckList";

const MainPage = () => {
  const [todoItems, setTodoItems] = useState<GetItem[]>([]);
  const [doneItems, setDoneItems] = useState<GetItem[]>([]);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const GetItems = async () => {
      const data: GetItem[] = await GetTodos();

      if (!data.length) return;

      const todoItems = data.filter((todo) => todo.isCompleted === false);
      const doneItems = data.filter((todo) => todo.isCompleted === true);

      if (todoItems.length) setTodoItems([...todoItems]);
      if (doneItems.length) setDoneItems([...doneItems]);
    };

    GetItems();
  }, []);

  return (
    <div className="w-full desktop:w-[80%] mx-auto mt-[20px] flex flex-col gap-12">
      <div className="w-full flex gap-4">
        <SearchComponent value={value} setValue={setValue} />
        <MainButton variants="Add" state="active" />
      </div>
      <div className="relative w-full flex flex-col items-center desktop:flex-row gap-16 ">
        <section className=" w-[50%] tablet:w-full min-w-[120px] h-full gap-4 ">
          <Todo className="absolute top-0" />
          <div className="min-h-[240px] mt-[50px] desktop:h-full desktop:mt-0">
            {!todoItems.length && <Empty section={"todo"} />}
            {todoItems.length &&
              todoItems.map((todo) => (
                <CheckList
                  key={todo.id}
                  id={todo.id}
                  text={todo.name}
                  isDone={todo.isCompleted}
                />
              ))}
          </div>
        </section>
        <section className="w-[50%] tablet:w-full min-w-[120px] h-full gap-4 ">
          <Done className="absolute desktop:top-0" />
          <div>
            {!doneItems.length && <Empty section={"done"} />}
            {doneItems.length &&
              doneItems.map((done) => (
                <CheckList
                  key={done.id}
                  id={done.id}
                  text={done.name}
                  isDone={done.isCompleted}
                />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
