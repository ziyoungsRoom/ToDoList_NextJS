"use client";

import DefaultCheckbox from "@/assets/DefaultCheckbox.svg";
import DoneCheckbox from "@/assets/DoneCheckbox.svg";
import { useRouter } from "next/navigation";

interface CheckListProps {
  id: number;
  text: string;
  isDone: boolean;
}

const CheckList = ({ id, text, isDone }: CheckListProps) => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push(`/item/${id}`);
  };
  return (
    <div
      onClick={onClickHandler}
      className={`${
        isDone ? "bg-violet-100" : "bg-white"
      } w-full h-[50px] p-[8px] flex items-center gap-[12px] text-[16px] cursor-pointer rounded-full border border-[2px] border-slate-900 hover:scale-105 duration-300 ease-in-out`}
    >
      {isDone ? <DoneCheckbox /> : <DefaultCheckbox />}

      <div className={`${isDone && "line-through"}`}>{text}</div>
    </div>
  );
};

export default CheckList;
