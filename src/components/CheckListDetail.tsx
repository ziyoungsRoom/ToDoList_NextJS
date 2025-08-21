import DefaultCheckbox from "@/assets/DefaultCheckbox.svg";
import DoneCheckbox from "@/assets/DoneCheckbox.svg";

interface CheckListDetailProps {
  text: string;
  isDone: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
}

const CheckListDetail = ({ text, isDone, onClick }: CheckListDetailProps) => {
  return (
    <div
      onClick={onClick}
      className={`${
        isDone ? "bg-violet-100" : "bg-white"
      } w-full h-[64px] p-[8px] flex items-center justify-center gap-[16px] text-[20px] font-bold cursor-pointer rounded-2xl border border-[2px] border-slate-900`}
    >
      {isDone ? <DoneCheckbox /> : <DefaultCheckbox />}

      <div className="underline">{text}</div>
    </div>
  );
};

export default CheckListDetail;
