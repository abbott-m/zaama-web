import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant-Bold.otf",
});

const Tables = () => {
  return (
    <section className=" py-4 px-5 bg-[#161616] flex justify-center items-center md:py-8 selection:bg-zaama_red/50">
      <div className=" w-full mb-16 md:bg-[#4c4c4c]/20 md:px-16 md:py-14 md:rounded-2xl md:inline-block   md:w-auto ">
        <h1
          data-aos="fade-down"
          className={`${blatantBold.className} text-xl text-zaama_yellow uppercase tracking-wide font-medium mb-7 text-center md:text-2xl `}
        >
          Table
        </h1>
        <div className="text-center  md:min-w-[700px]">
          <Image
            src="/images/zaama-white-logo.png"
            alt="zaama-logo-white"
            width={160}
            height={160}
            className="mx-auto mt-16 mb-8 animate-pulse"
          />
          <p className="mb-2">Table prices will be available soon.</p>
        </div>
      </div>
    </section>
  );
};

export default Tables;
