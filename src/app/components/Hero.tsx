"use client";
import Image from "next/image";
import React from "react";
import handleScroll from "../lib/handleScroll";

const Hero = () => {
  return (
    <section className="text-center  px-5 pt-10 select-none sm:px-10  md:px-20  ">
      <div className="h-full w-full fixed top-0 left-0 bg-black/50 -z-[5]"></div>
      <video
        autoPlay
        loop
        muted
        className=" h-5/6 w-full absolute top-0 left-0 object-cover -z-10 md:h-full"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>
      <Image
        src="/images/zaama-3d-new.png"
        alt="Zaama-logo"
        width={260}
        height={200}
        priority
        className="mx-auto mb-14 mt-10 bg-transparent"
        data-aos="zoom-in-up"
        data-aos-duration="500"
      />

      <Image
        onClick={(e) =>
          handleScroll({
            sectionId: "tickets",
            behavior: "instant",
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
