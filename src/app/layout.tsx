import "./globals.css";
import type { Metadata } from "next";
import { Syne_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <body className={`${syneMono.className} bg-[#151515] text-gray-200`}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
