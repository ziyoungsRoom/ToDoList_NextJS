import CheckListDetail from "@/components/CheckListDetail";
import ImageInput from "@/components/ImageInput";
import MainButton from "@/components/MainButton";
import MemoInput from "@/components/MemoInput";

const ItemPage = () => {
  return (
    <div className="w-full h-full bg-slate-100">
      <div className="w-full desktop:w-[80%] min-w-[400px] h-full min-h-[calc(100vh-60px)] mx-auto bg-white px-[10%] py-[20px] flex flex-col items-center">
        <CheckListDetail text="비타민 챙겨먹기!" isDone={false} />
        <div className="w-full min-h-[311px] flex flex-col desktop:flex-row gap-8 py-4">
          <ImageInput />
          <MemoInput />
        </div>
        <div className="w-full flex justify-center desktop:justify-end  gap-4">
          <MainButton variants="Edit" />
          <MainButton variants="Delete" />
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
