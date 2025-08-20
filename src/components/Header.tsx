"use client";

import LogoLarge from "@/assets/LogoLarge.svg";
import LogoSmall from "@/assets/LogoSmall.svg";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const onClick = () => {
    router.push("/");
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-20 w-full h-[60px] px-[24px] desktop:px-[10%] flex items-center border-b-slate-100 border-b-[1px]">
      <div onClick={onClick} className="cursor-pointer">
        <LogoSmall className="tablet:hidden" />
        <LogoLarge className="hidden tablet:block" />
      </div>
    </div>
  );
};

export default Header;
