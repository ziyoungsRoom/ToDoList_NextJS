import EmptyTodoLarge from "@/assets/EmptyTodoLarge.svg";
import EmptyTodoSmall from "@/assets/EmptyTodoSmall.svg";
import EmptyDoneLarge from "@/assets/EmptyDoneLarge.svg";
import EmptyDoneSmall from "@/assets/EmptyDoneSmall.svg";

interface EmptyProps {
  section: string;
}

const Empty = ({ section }: EmptyProps) => {
  return (
    <>
      {section === "todo" && (
        <div className="w-full flex flex-col items-center mt-[20%]">
          <EmptyTodoSmall className="tablet:hidden w-[120px] h-[120px]" />
          <EmptyTodoLarge className="hidden tablet:block w-[240px] h-[240px]" />
          <div className="text-center text-slate-400 text-[16px]">
            <div>할 일이 없어요.</div>
            <div>TODO를 새롭게 추가해주세요!</div>
          </div>
        </div>
      )}

      {section === "done" && (
        <div className="w-full flex flex-col items-center mt-[20%]">
          <EmptyDoneSmall className="tablet:hidden w-[120px] h-[120px]" />
          <EmptyDoneLarge className="hidden tablet:block w-[240px] h-[240px]" />
          <div className="text-center text-slate-400 text-[16px]">
            <div>아직 다 한 일이 없어요.</div>
            <div>해야 할 일을 체크해보세요!</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Empty;
