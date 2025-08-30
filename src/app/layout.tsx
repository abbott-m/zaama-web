import "./globals.css";
import type { Metadata } from "next";
import { Syne_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CarouselLabel from "./components/CarouselLabel";
import StickyTicketButton from "./components/StickyTicketButton";
import { TicketProvider } from "./context/ticketContext";

const syneMono = Syne_Mono({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://i.postimg.cc"),
  title: "Zaama Disco - Iron Boy Returns",
  description:
    "Zaama Disco isn't just an event—it's a movement. Join us for one night, one city, one legend as Iron Boy takes the stage in Ghana's biggest cultural celebration.",
  keywords: "Zaama Disco, Iron Boy, Black Sherif, Ghana music festival, Accra events, Blacko Tribe",
  openGraph: {
    title: "Zaama Disco - Iron Boy Returns",
    description:
      "Zaama Disco isn't just an event—it's a movement. Join us for one night, one city, one legend as Iron Boy takes the stage in Ghana's biggest cultural celebration.",
    images: "/9M1jmk6c/open-graph.png",
    url: "https://zaamadisco.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaama Disco - Iron Boy Returns",
    description: "One Night. One City. One Legend. Get your tickets now!",
    images: ["/9M1jmk6c/open-graph.png"],
    creator: "@zaamadisco",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#A7CCFF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/zaama-white-logo.png" />
        
        {/* Structured Data for Events */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicEvent",
              "name": "Zaama Disco - Iron Boy Returns",
              "description": "Ghana's biggest cultural celebration featuring Iron Boy (Black Sherif)",
              "image": "https://zaamadisco.com/images/zaama-white-logo.png",
              "startDate": "2024-12-31T20:00:00+00:00",
              "location": {
                "@type": "Place",
                "name": "Accra, Ghana",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Accra",
                  "addressCountry": "GH"
                }
              },
              "performer": {
                "@type": "Person",
                "name": "Black Sherif"
              },
              "organizer": {
                "@type": "Organization",
                "name": "Zaama Disco",
                "url": "https://zaamadisco.com"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://echolive.live/buy-tickets",
                "price": "300",
                "priceCurrency": "GHS",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
      </head>
      <body
        className={`${syneMono.className} bg-[#000000] text-gray-200 pt-3 selection:bg-primary/25 md:pt-1 2xl:max-w-screen-2xl 2xl:mx-auto`}
      >
        <CarouselLabel word="IRON BOY RETURNS • One Night. One City. One Legend." />

        <Navbar />
        <TicketProvider>
          {children}
          <StickyTicketButton />
        </TicketProvider>
        <Footer />
      </body>
    </html>
  );
}