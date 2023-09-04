import "./globals.css";
import type { Metadata } from "next";
import { Syne_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CarouselLabel from "./components/CarouselLabel";

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
  return (
    <html lang="en">
      <body className={`${syneMono.className} bg-[#151515] text-gray-200 pt-3`}>
        <CarouselLabel word="Zaama: The Disco" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
