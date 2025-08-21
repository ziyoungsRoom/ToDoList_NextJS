"use client";

import ImageFile from "@/assets/ImageFile.svg";
import SubButton from "./SubButton";
import Image from "next/image";

interface ImageProps {
  url: string;
}

const ImageInput = ({ url }: ImageProps) => {
  return (
    <>
      {!url && (
        <div className="relative w-full h-full min-h-[311px] p-4 flex items-center justify-center border-dashed border-[2px] border-slate-200 bg-slate-50 rounded-3xl">
          <ImageFile />

          <SubButton
            variants="add"
            onClick={() => {}}
            className="absolute right-3 bottom-3"
          />
        </div>
      )}
      {url && (
        <div className="relative w-full h-full min-h-[311px] p-4 rounded-3xl overflow-hidden">
          <Image
            src={url}
            alt="todo image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
    </>
  );
};

export default ImageInput;
