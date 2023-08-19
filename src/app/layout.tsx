import "./globals.css";
import type { Metadata } from "next";
import { Syne_Mono } from "next/font/google";

const syneMono = Syne_Mono({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Zaama",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${syneMono.className} bg-[#1b1b1b]`}>{children}</body>
    </html>
  );
}
