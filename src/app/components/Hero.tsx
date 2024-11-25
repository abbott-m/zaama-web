"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import handleScroll from "../lib/handleScroll";

const Hero = () => {
  useEffect(() => {
    handleScroll({ sectionId: window.location.hash.substring(1) });
  }, []);
  return (
    <section className="relative text-center  px-5 pt-10 select-none sm:px-10  md:px-20  ">
      <div className="h-full w-full fixed top-0 left-0 bg-black/50 -z-[5]"></div>
      <video
        autoPlay
        loop
        muted
        className=" h-full w-full absolute top-0 left-0 object-cover -z-10 md:h-full"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>

      <Image
        src="/GIF/hero-logo-anim.gif"
        alt="zaama-logo"
        unoptimized
        width={700}
        height={200}
        priority
        className="mx-auto mb-5 mt-12  animate-little_bounce"
      />

      <Image
        onClick={(e) =>
          handleScroll({
            sectionId: "tickets",
          })
        }
        src="/images/zaama-arrow-down.png"
        alt="arrow-down"
        width={50}
        height={50}
        className="mx-auto transition duration-150 animate-bounce mt-20 cursor-pointer "
      />
    </section>
  );
};

export default Hero;
