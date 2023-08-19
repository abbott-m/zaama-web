"use client";
import Image from "next/image";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <nav className="p-4 mb-5 md:py-10">
      {/* <Swiper
        loop={true}
        speed={1200}
        slidesPerView={3}
        spaceBetween={5}
        autoplay={{
          delay: 200,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src="/Disco.png"
              width={130}
              height={40}
              alt="zaama logo"
              unoptimized
            />
          </SwiperSlide>
        ))}
      </Swiper> */}

      {/* <article className="flex whitespace-no-wrap overflow-x-hidden">
        <div className="relative">
          <ul className="flex animate-marquee">
            {[1, 2, 3, 4, 5].map(() => (
              <li className="mx-4">
                {" "}
                <Image
                  src="/Disco.png"
                  width={130}
                  height={40}
                  alt="zaama logo"
                  unoptimized
                />
              </li>
            ))}
          </ul>
          <ul className="flex absolute top-0 animate-marquee2">
            {[1, 2, 3, 4, 5].map(() => (
              <li className="mx-4">
                {" "}
                <Image
                  src="/Disco.png"
                  width={130}
                  height={40}
                  alt="zaama logo"
                  unoptimized
                />
              </li>
            ))}
          </ul>
        </div>
      </article> */}

      {/* <ul className="my-3">
        <Image
          src="/zaama-logo.gif"
          width={50}
          height={50}
          alt="zaama logo"
          unoptimized
        />
      </ul> */}
      <div className="text-center mb-2">
        {!isNavbarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#00C986"
            className="w-8 h-8  inline cursor-pointer"
            onClick={() => setIsNavbarOpen(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#00C986"
            className="w-8 h-8  inline cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
              onClick={() => setIsNavbarOpen(false)}
            />
          </svg>
        )}
      </div>
      <ul
        className={`text-center  mt-5 transition-all duration-300  ${
          isNavbarOpen ? "max-h-48 " : " max-h-0 overflow-hidden"
        }`}
      >
        <li className="text-white uppercase mb-3 text-lg">
          <Link
            href="#about"
            className="transition duration-100 hover:text-[#95f4d4]"
          >
            About{" "}
          </Link>
        </li>
        <li className="text-white uppercase mb-3 text-lg">
          {" "}
          <Link
            href="#store"
            className="transition duration-100 hover:text-[#95f4d4]"
          >
            Store{" "}
          </Link>
        </li>
        <li className="text-white uppercase mb-3 text-lg">
          {" "}
          <Link
            href="#sponsors"
            className="transition duration-100 hover:text-[#95f4d4]"
          >
            Sponsors{" "}
          </Link>
        </li>
        <li className="text-white uppercase mb-3 text-lg">
          {" "}
          <Link
            href="#FAQ"
            className="transition duration-100 hover:text-[#95f4d4]"
          >
            FAQ{" "}
          </Link>
        </li>
        <li className="text-white uppercase mb-3 text-lg"> ...</li>
      </ul>
    </nav>
  );
};

export default Navbar;
