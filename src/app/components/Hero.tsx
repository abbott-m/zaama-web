"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import handleScroll from "../lib/handleScroll";
import ArrowDownIcon from "../../../public/SVG/arrow-down.svg";

const Hero = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const heroMessages = [
    "IRON BOY RETURNS Zaama Disco One Night. One City. One Legend. • Tickets live now",
    "Black Sherif (Iron Boy) takes Zaama Disco by storm • Early Bird almost gone • Grab yours",
    "Accra, are you ready? Iron Boy live at Zaama Disco • Don't miss history • Secure your tickets",
    "From Ghana to the world Iron Boy headlines Zaama Disco • Limited slots • Buy tickets",
    "Big steppa energy only • Iron Boy on the Zaama Disco stage • Lock in your tickets now"
  ];

  useEffect(() => {
    handleScroll({ sectionId: window.location.hash.substring(1) });
  }, []);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        (prevIndex + 1) % heroMessages.length
      );
    }, 4000);

    return () => clearInterval(messageInterval);
  }, [heroMessages.length]);

  return (
    <section className="relative px-5 text-center select-none sm:px-10 md:px-20 min-h-screen flex flex-col justify-between">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 object-cover w-full h-full -z-10"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Bottom section with messages + arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full px-4">
        {/* <p className="text-lg md:text-xl font-semibold text-primary animate-pulse transition-opacity duration-1000 mb-6">
          {heroMessages[currentMessageIndex]}
        </p> */}

        <ArrowDownIcon
          className="inline-block w-12 mx-auto cursor-pointer animate-bounce text-primary"
        />
      </div>
    </section>
  );
};

export default Hero;