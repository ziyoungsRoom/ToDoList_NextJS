"use client";

import ImageFile from "@/assets/ImageFile.svg";
import Edit from "@/assets/Edit.svg";
import PlusGray from "@/assets/PlusGray.svg";
import Image from "next/image";
import { ItemDetail } from "@/type/type";

interface ImageProps {
  url: string;
  todoDetail: ItemDetail;
  setTodoDetail: React.Dispatch<React.SetStateAction<ItemDetail>>;
}

const ImageInput = ({ url, todoDetail, setTodoDetail }: ImageProps) => {
  const isURL = !!url;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    console.log("target", event.target.files);

    // 유효성 검사
    if (!selectedFile) return;

    // 이미지는 최대 1개만 첨부할 수 있습니다.
    if (event.target.files!.length > 1)
      return alert("이미지는 최대 1개만 첨부할 수 있습니다.");

    // 파일 이름은 영어로만 이루어져야 합니다.
    const isEnglish = /^[a-zA-Z0-9_\-\.]+$/.test(selectedFile.name);
    if (!isEnglish) return alert("파일 이름은 영어로만 이루어져야 합니다.");

    // 파일 크기는 5MB 이하만 가능합니다.
    if (selectedFile.size > 5 * 1024 * 1024)
      return alert("파일 크기는 5MB 이하만 가능합니다.");

    const url = URL.createObjectURL(selectedFile);
    console.log("이미지 경로", url);

    setTodoDetail({ ...todoDetail, imageUrl: url });
    event.target.value = "";
  };
  return (
    <>
      <div
        className={`relative w-full h-full min-h-[311px] p-4 flex items-center justify-center ${
          !url && "border-dashed border-[2px] border-slate-200 bg-slate-50"
        }  rounded-3xl overflow-hidden`}
      >
        {!url && <ImageFile />}
        {url && (
          <Image
            src={url}
            alt="todo image"
            fill
            style={{ objectFit: "cover" }}
          />
        )}

        <input
          type="file"
          id="imageUrl"
          accept=".jpg,.jpeg,.png"
          onChange={onChangeHandler}
          className="hidden"
        />
        <label
          htmlFor="imageUrl"
          className={`${
            isURL
              ? "bg-slate-900/50 border-[2px] border-slate-900"
              : "bg-slate-200"
          } absolute w-[64px] h-[64px] right-3 bottom-3 flex justify-center items-center rounded-full hover:scale-110 duration-300 ease-in-out`}
        >
          {isURL ? (
            <Edit width="24px" height="24px" />
          ) : (
            <PlusGray width="24px" height="24px" />
          )}
        </label>
      </div>
    </>
  );
};

export default ImageInput;
