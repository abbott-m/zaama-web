import "./globals.css";
import type { Metadata } from "next";
import { Syne_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CarouselLabel from "./components/CarouselLabel";
import { TicketProvider } from "./context/ticketContext";

const syneMono = Syne_Mono({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://i.postimg.cc"),
  title: "Zaama Disco",
  description:
    "An annual event that seeks to drive the Ghanaian youth and youths around the world with one voice for change through entertainment.",
  openGraph: {
    title: "Zaama Disco",
    description:
      "An annual event that seeks to drive the Ghanaian youth and youths around the world with one voice for change through entertainment.",
    images: "/9M1jmk6c/open-graph.png",
    url: "https://zaamadisco.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syneMono.className}  bg-[#000000] text-gray-200 pt-3 selection:bg-primary/25 md:pt-1 2xl:max-w-screen-2xl 2xl:mx-auto`}
      >
        <CarouselLabel word="Zaama Disco: The Rave" />

        <Navbar />
        <TicketProvider>{children}</TicketProvider>
        <Footer />
      </body>
    </html>
  );
}
