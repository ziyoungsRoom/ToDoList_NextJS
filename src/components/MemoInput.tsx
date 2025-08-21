import Memo from "@/assets/Memo.svg";

interface MemoProps {
  text: string;
}

const MemoInput = ({ text }: MemoProps) => {
  return (
    <div className="relative w-full h-full rounded-3xl flex flex-col items-center justify-center">
      <Memo className="w-[100%] h-[100%] min-h-[311px] rounded-3xl" />
      <div className="absolute top-7 text-amber-800 font-extrabold">Memo</div>
      <div className="absolute w-[90%] h-[75%] mt-12 overflow-auto text-wrap break-words truncate">
        {text}
      </div>
    </div>
  );
};

export default MemoInput;
