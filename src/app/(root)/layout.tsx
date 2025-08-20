import Header from "@/components/Header";
import { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="w-full flex flex-col min-h-screen ">
      <Header />
      <div className="flex-grow mt-[70px] tablet:mt-[100px] px-4">
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
