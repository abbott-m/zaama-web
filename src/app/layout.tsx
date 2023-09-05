"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Syne_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CarouselLabel from "./components/CarouselLabel";
import Image from "next/image";
import { useState, useEffect } from "react";

const syneMono = Syne_Mono({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://i.postimg.cc"),
  title: "Zaama Disco",
  description:
    "An annual event that seeks to drive the Ghanaian youth with one voice for change through entertainment.",
  openGraph: {
    title: "Zaama Disco",
    description:
      "An annual event that seeks to drive the Ghanaian youth with one voice for change through entertainment.",
    images: "/9M1jmk6c/open-graph.png",
    url: "https://zaamaweb.netlify.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6400);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${syneMono.className} bg-[#151515] text-gray-200 pt-3 max-w-[2200px] lg:mx-auto`}
      >
        {loading ? (
          <div className="h-screen w-screen fixed flex justify-center items-center">
            <Image
              src="/GIF/zaama-logo-anim.gif"
              alt="zaama-logo-animation"
              width={300}
              height={100}
            />
          </div>
        ) : (
          <>
            <CarouselLabel word="Zaama: The Disco" />
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
