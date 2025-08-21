import DefaultCheckbox from "@/assets/DefaultCheckbox.svg";
import DoneCheckbox from "@/assets/DoneCheckbox.svg";

interface CheckListDetailProps {
  text: string;
  isDone: boolean;
}

const CheckListDetail = ({ text, isDone }: CheckListDetailProps) => {
  return (
    <div
      className={`${
        isDone ? "bg-violet-100" : "bg-white"
      } w-full h-[64px] p-[8px] flex items-center justify-center gap-[16px] text-[20px] cursor-pointer rounded-full border border-[2px] border-slate-900`}
    >
      {isDone ? <DoneCheckbox /> : <DefaultCheckbox />}

      <div className="underline">{text}</div>
    </div>
  );
};

export default CheckListDetail;
