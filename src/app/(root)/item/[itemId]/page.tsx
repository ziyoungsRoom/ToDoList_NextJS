"use client";

import { GetTodoDetail } from "@/api/todoApi";
import CheckListDetail from "@/components/CheckListDetail";
import ImageInput from "@/components/ImageInput";
import MainButton from "@/components/MainButton";
import MemoInput from "@/components/MemoInput";
import { ItemDetail } from "@/type/type";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ItemPage = () => {
  const params = useParams();
  const itemId = Number(params.itemId);

  const [itemInfo, setItemInfo] = useState<ItemDetail>({
    id: itemId,
    name: "",
    memo: "",
    imageUrl: "",
    isCompleted: false,
  });

  // 상세 페이지가 렌더링되면 이 id를 가진 todo 정보를 불러와요.
  useEffect(() => {
    const GetItemDetail = async (id: number) => {
      const data = await GetTodoDetail(id);

      if (data)
        setItemInfo({
          id: itemId,
          name: data.name,
          memo: data.memo,
          imageUrl: data.imageUrl,
          isCompleted: data.isCompleted,
        });
    };

    GetItemDetail(itemId);
  }, [itemId]);

  return (
    <div className="w-full h-full bg-slate-100">
      {itemInfo.name && (
        <div className="w-full desktop:w-[80%] tablet:max-w-[764px] min-w-[400px] h-full min-h-[calc(100vh-60px)] mx-auto bg-white px-[5%] py-[30px] flex flex-col items-center">
          <CheckListDetail text={itemInfo.name} isDone={false} />
          <div className="w-full min-h-[311px] flex flex-col desktop:flex-row gap-8 my-12">
            <ImageInput url={itemInfo.imageUrl} />
            <MemoInput text={itemInfo.memo} />
          </div>
          <div className="w-full flex justify-center desktop:justify-end  gap-4">
            <MainButton variants="Edit" />
            <MainButton variants="Delete" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemPage;
