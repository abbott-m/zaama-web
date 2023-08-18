import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="text-center">
      <Image
        src="/zaama-logo.gif"
        alt="saama-logo"
        width={300}
        height={400}
        className="mx-auto"
      />
      <Link href="/#about">
        <Image
          src="/zaama-arrow-down.png"
          alt="saama-logo"
          width={100}
          height={400}
          className="mx-auto"
        />
      </Link>
    </section>
  );
};

export default Hero;
