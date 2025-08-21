import PlusDefault from "@/assets/PlusDefault.svg";
import PlusWhite from "@/assets/PlusWhite.svg";
import X from "@/assets/X.svg";
import Check from "@/assets/Check.svg";

interface MainButtonProps {
  type?: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variants: "Add" | "Delete" | "Edit";
  state?: "default" | "active";
}

const MainButton = ({
  onClick,
  variants,
  state = "default",
  type = "button",
}: MainButtonProps) => {
  const DEFAULT = "bg-slate-200 text-slate-900";

  const BUTTON_TYPE: Record<string, string> = {
    Add: `${state === "active" ? "bg-violet-600 text-violet-100 " : DEFAULT} `,
    Edit: `${state === "active" ? "bg-lime-300" : DEFAULT} `,
    Delete: `bg-rose-500 text-white`,
  };

  const isAdd = variants === "Add";
  const isDefault = state === "default";
  const isDelete = variants === "Delete";
  const isEdit = variants === "Edit";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${BUTTON_TYPE[variants]} ${
        isAdd ? `w-[56px] tablet:w-[168px]` : "w-[168px]"
      }  h-[56px] text-[16px] flex-shrink-0 box-content cursor-pointer outline-none rounded-full border-slate-900 border-[2px] shadow-slate-900 shadow-[2px_4px_0] hover:scale-105 duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-center gap-[4px] leading-[16px]">
        {isAdd &&
          (isDefault ? (
            <PlusDefault width="16px" height="16px" />
          ) : (
            <PlusWhite width="16px" height="16px" />
          ))}

        {isAdd && <div className="hidden tablet:block">추가하기</div>}

        {isEdit && (
          <>
            <Check width="16px" height="16px" />
            수정하기
          </>
        )}

        {isDelete && (
          <>
            <X width="16px" height="16px" />
            삭제하기
          </>
        )}
      </div>
    </button>
  );
};

export default MainButton;
