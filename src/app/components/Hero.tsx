"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="text-center  px-5 pt-10 select-none sm:px-10  md:px-20  sm:bg-hero-bg sm:bg-cover sm:bg-no-repeat sm:bg-center">
      <Image
        src="/images/zaama-3d.png"
        alt="Zaama-logo"
        width={270}
        height={300}
        priority
        className="mx-auto mb-14 mt-10 bg-transparent"
        data-aos="zoom-in-up"
        data-aos-duration="500"
      />

      <Image
        onClick={() => router.push("/#tickets")}
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
