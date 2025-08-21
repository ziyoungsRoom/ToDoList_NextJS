import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "do it ;",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
