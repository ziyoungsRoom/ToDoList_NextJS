"use client";

import ImageFile from "@/assets/ImageFile.svg";
import SubButton from "./SubButton";

const ImageInput = () => {
  return (
    <div className="relative w-full h-full min-h-[311px] p-4 flex items-center justify-center border-dashed border-[2px] border-slate-200 bg-slate-50 rounded-3xl">
      <ImageFile />
      <SubButton
        variants="add"
        onClick={() => {}}
        className="absolute right-3 bottom-3"
      />
    </div>
  );
};

export default ImageInput;
