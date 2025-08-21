import Memo from "@/assets/Memo.svg";

const MemoInput = () => {
  return (
    <div className="relative w-full h-full rounded-3xl flex flex-col items-center justify-center">
      <Memo className="w-[100%] h-[100%] min-h-[311px] rounded-3xl" />
      <div className="absolute top-5 text-amber-800 font-extrabold">Memo</div>
      <div className="absolute">비타민을 먹었는데 오줌이 노란생이야.</div>
    </div>
  );
};

export default MemoInput;
