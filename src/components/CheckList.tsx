import DefaultCheckbox from "@/assets/DefaultCheckbox.svg";
import DoneCheckbox from "@/assets/DoneCheckbox.svg";

interface CheckListProps {
  text: string;
  isDone: boolean;
  setIsDone: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckList = ({ text, isDone, setIsDone }: CheckListProps) => {
  const onClick: React.MouseEventHandler<HTMLElement> = () => {
    setIsDone(!isDone);
  };
  return (
    <div
      onClick={onClick}
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
