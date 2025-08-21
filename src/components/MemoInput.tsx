import Memo from "@/assets/Memo.svg";
import { ItemDetail } from "@/type/type";

interface MemoProps {
  text: string;
  todoDetail: ItemDetail;
  setTodoDetail: React.Dispatch<React.SetStateAction<ItemDetail>>;
}

const MemoInput = ({ text, todoDetail, setTodoDetail }: MemoProps) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTodoDetail({ ...todoDetail, memo: event.target.value });
  };
  return (
    <div className="relative w-full h-full rounded-3xl flex flex-col items-center justify-center">
      <Memo className="w-[100%] h-[100%] min-h-[311px] rounded-3xl" />
      <div className="absolute top-7 text-amber-800 font-extrabold">Memo</div>
      <textarea
        defaultValue={text}
        onChange={onChangeHandler}
        className="absolute w-[90%] h-[75%] mt-12 overflow-auto text-wrap break-words truncate outline-none"
      />
    </div>
  );
};

export default MemoInput;
