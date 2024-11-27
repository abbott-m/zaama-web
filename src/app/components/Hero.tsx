"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import handleScroll from "../lib/handleScroll";
import ArrowDownIcon from "../../../public/SVG/arrow-down.svg";

const Hero = () => {
  useEffect(() => {
    handleScroll({ sectionId: window.location.hash.substring(1) });
  }, []);
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

      {/* <Image
        onClick={(e) =>
          handleScroll({
            sectionId: "tickets",
          })
        }
        src="/images/zaama-arrow-down.png"
        alt="arrow-down"
        width={50}
        height={50}
        className="mx-auto mt-20 transition duration-150 cursor-pointer animate-bounce "
      /> */}
      <ArrowDownIcon
        onClick={() =>
          handleScroll({
            sectionId: "tickets",
          })
        }
        className="inline-block w-12 mx-auto mt-20 transition duration-150 cursor-pointer animate-bounce text-primary"
      />
    </section>
  );
};

export default Hero;
