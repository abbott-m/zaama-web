import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="text-center px-5 pt-20  sm:px-10  md:px-20">
      <Image
        src="/images/zaama-white-logo.png"
        alt="saama-logo"
        width={300}
        height={400}
        className="mx-auto mb-14"
      />
      <Link href="/#tickets">
        <Image
          src="/images/zaama-arrow-down.png"
          alt="saama-logo"
          width={50}
          height={400}
          className="mx-auto transition duration-150  animate-bounce hover:animate-none"
        />
      </Link>
    </section>
  );
};

export default Hero;
