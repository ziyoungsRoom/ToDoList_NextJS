import Edit from "@/assets/Edit.svg";
import PlusGray from "@/assets/PlusGray.svg";

interface SubButtonProps {
  variants: "add" | "edit";
  type?: "button" | "submit";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const SubButton = ({
  variants,
  type = "button",
  onClick,
  className,
}: SubButtonProps) => {
  const isAdd = variants === "add";
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        isAdd ? "bg-slate-200" : "bg-slate-900/50 border-[2px] border-slate-900"
      } w-[64px] h-[64px] flex justify-center items-center rounded-full hover:scale-110 duration-300 ease-in-out ${className}`}
    >
      {isAdd ? (
        <PlusGray width="24px" height="24px" />
      ) : (
        <Edit width="24px" height="24px" />
      )}
    </button>
  );
};

export default SubButton;
