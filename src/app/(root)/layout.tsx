import Header from "@/components/Header";
import { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <div className="flex-grow mt-[70px] tablet:mt-[100px]">{children}</div>
    </div>
  );
};

export default RootLayout;
