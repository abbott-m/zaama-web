import Image from "next/image";
import React from "react";

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className=" px-4 py-10 bg-bg-four bg-top bg-cover sm:px-14 sm:py-24  md:bg-bottom md:gap-8 "
    >
      <p className="text-center text-xl font-medium mb-8 tracking-wider text-zaama_yellow uppercase md:text-2xl md:mb-10">
        Our Sponsors
      </p>
      <div className="flex flex-wrap items-center justify-center my-5 gap-5 md:gap-10">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div
            key={index}
            className="w-36 h-36 bg- bg-gradient-to-tr from-[#1c1c1c] to-[#4a4a4a] rounded-full flex justify-center items-center p-2 shadow-md shadow-[#6c6c6c]"
          >
            <Image
              src="/images/Blache_logo.png"
              alt="Blach-logo"
              width={120}
              height={120}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
