"use client";

import { useRouter } from "next/navigation";
import { GetItem } from "@/type/type";
import DefaultCheckbox from "@/assets/DefaultCheckbox.svg";
import DoneCheckbox from "@/assets/DoneCheckbox.svg";
import { CheckTodo } from "@/api/todoApi";

interface CheckListProps {
  id: number;
  text: string;
  isDone: boolean;
  setItems: React.Dispatch<React.SetStateAction<GetItem[]>>;
}

const CheckList = ({ id, text, isDone, setItems }: CheckListProps) => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push(`/item/${id}`);
  };

  const onSubmitHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    // 부모 이벤트 전파를 막아줘요.
    event.stopPropagation();
    const data = await CheckTodo(id, isDone);

    setItems((prev) => [
      ...prev.filter((todo) => todo.id !== id),
      { id: data.id, name: data.name, isCompleted: data.isCompleted },
    ]);
  };

  return (
    <div
      onClick={onClickHandler}
      className={`${
        isDone ? "bg-violet-100" : "bg-white"
      } w-full h-[50px] p-[8px] flex items-center gap-[12px] text-[16px] cursor-pointer rounded-full border border-[2px] border-slate-900 hover:scale-102 duration-300 ease-in-out`}
    >
      <button
        type="submit"
        onClick={onSubmitHandler}
        className="z-20 cursor-pointer"
      >
        {isDone ? <DoneCheckbox /> : <DefaultCheckbox />}
      </button>

      <div className={`${isDone && "line-through"}`}>{text}</div>
    </div>
  );
};

export default CheckList;
