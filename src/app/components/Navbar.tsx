"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    console.log("isNavbarOpen", !!isNavbarOpen);
  });
  return (
    <nav className=" w-full flex gap-3 justify-between items-center p-5 md:px-10 lg:px-20">
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

      {!isNavbarOpen && (
        <Link href="/">
          <Image
            src="/SVG/zaama-logo.svg"
            alt="Zaama-logo"
            width={130}
            height={100}
          />
        </Link>
      )}
      {/* <p className="text-white">{isNavbarOpen ? "true" : "false"}</p> */}
      <ul
        className={`gap-8 items-center pt-5 select-none  ${
          isNavbarOpen ? "flex flex-col mx-auto " : "hidden md:pt-0 md:flex"
        }`}
      >
        {isNavbarOpen && (
          <li onClick={() => setIsNavbarOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#dedede"
              className="w-8 h-8 inline cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </li>
        )}
        <li onClick={() => setIsNavbarOpen(false)}>
          <Link href="/#about" className="p-1 hover:text-zaama_red">
            {" "}
            About
          </Link>
        </li>
        <li onClick={() => setIsNavbarOpen(false)}>
          <Link href="/#store" className="p-1 hover:text-zaama_red">
            {" "}
            Store
          </Link>
        </li>
        <li onClick={() => setIsNavbarOpen(false)}>
          <Link href="/#sponsors" className="p-1 hover:text-zaama_red">
            {" "}
            Sponsors
          </Link>
        </li>
        <li onClick={() => setIsNavbarOpen(false)}>
          <Link href="/#faq" className="p-1 hover:text-zaama_red">
            {" "}
            FAQ
          </Link>
        </li>

        <li onClick={() => setIsNavbarOpen(false)} className="ml-5">
          <Link href="/#tickets">
            <button className="w-48 h-10 bg-[#a9151a] font-semibold rounded-full text-gray-300 transition duration-100 hover:bg-zaama_red/80">
              Get Tickets
            </button>
          </Link>
        </li>
      </ul>

      {!isNavbarOpen && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#dedede"
          className="w-8 h-8 inline cursor-pointer md:hidden"
          onClick={() => setIsNavbarOpen(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      )}

      {/* <div className="text-center mb-2">
        {!isNavbarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#dedede"
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
            stroke="#dedede"
            className="w-8 h-8 inline cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
              onClick={() => setIsNavbarOpen(false)}
            />
          </svg>
        )}
      </div> */}

      {/* <ul
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
      </ul> */}
    </nav>
  );
};

export default Navbar;
