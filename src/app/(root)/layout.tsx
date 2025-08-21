import Header from "@/components/Header";
import { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="w-full flex flex-col min-h-screen ">
      <Header />
      <div className="bg-slate-100 flex-grow mt-[60px]">{children}</div>
    </div>
  );
};

export default RootLayout;
