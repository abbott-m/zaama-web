"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="text-center h-96 px-5 pt-10 select-none bg-hero-bg bg-cover bg-no-repeat bg-center sm:px-10  md:px-20 md:h-auto">
      <Image
        src="/images/zaama-3d.png"
        alt="Zaama-logo"
        width={500}
        height={400}
        unoptimized
        className="mx-auto mb-14 "
      />

      <Image
        onClick={() => router.push("/#tickets")}
        src="/images/zaama-arrow-down.png"
        alt="arrow-down"
        width={50}
        height={400}
        className="mx-auto transition duration-150  animate-bounce cursor-pointer hover:animate-none"
      />
    </section>
  );
};

export default Hero;
