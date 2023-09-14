import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant-Bold.otf",
});

const Tables = () => {
  return (
    <section className="relative pt-16 pb-20  bg-bg-three bg-cover bg-center bg-no-repeat selection:bg-zaama_red/50">
      <div className="absolute top-0 left-0 h-full w-full bg-black/80"></div>
      <div className="relative">
        <h1
          data-aos="fade-down"
          className={`${blatantBold.className} text-xl text-zaama_yellow uppercase tracking-wide font-medium mb-3 text-center md:text-2xl `}
        >
          Tables
        </h1>
        <div className="text-center  my-5">
          <p className="mb-5">Table prices will be available soon</p>
          {/* <p>Stay Close!!!</p> */}
          <Image
            src="/images/happy-zaama.png"
            alt="zaama-tape"
            width={100}
            height={100}
            className="mx-auto mix-blend-luminosity"
          />
        </div>
      </div>
    </section>
  );
};

export default Tables;
