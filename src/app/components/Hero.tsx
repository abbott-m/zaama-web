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
    <section className="relative px-5 pt-10 text-center select-none sm:px-10 md:px-20 ">
      <div className="h-full w-full fixed top-0 left-0 bg-black/50 -z-[5]"></div>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 object-cover w-full h-full -z-10 md:h-full"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>

      <Image
        src="/GIF/hero-logo-anim-2.gif"
        alt="zaama-logo"
        unoptimized
        width={700}
        height={200}
        priority
        className="mx-auto mt-12 mb-5 animate-little_bounce"
      />

      {/* Rotating Hero Messages */}
      <div className="mb-8 px-4">
        <p className="text-lg md:text-xl font-semibold text-primary animate-pulse transition-opacity duration-1000">
          {heroMessages[currentMessageIndex]}
        </p>
      </div>

      <ArrowDownIcon
        onClick={() =>
          handleScroll({
            sectionId: "tickets",
          })
        }
        className="inline-block w-12 mx-auto mt-12 transition duration-150 cursor-pointer animate-bounce text-primary"
      />
    </section>
  );
};

export default Hero;