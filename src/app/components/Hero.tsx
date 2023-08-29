import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="text-center px-5 pt-20 select-none sm:px-10  md:px-20">
      <Image
        src="/GIF/zaama-logo-anim.gif"
        alt="Zaama-logo"
        width={400}
        height={300}
        unoptimized
        className="mx-auto mb-14 "
      />
      <Link href="/#tickets">
        <Image
          src="/images/zaama-arrow-down.png"
          alt="arrow-down"
          width={50}
          height={400}
          className="mx-auto transition duration-150  animate-bounce hover:animate-none"
        />
      </Link>
    </section>
  );
};

export default Hero;
