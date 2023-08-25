"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#161616]  flex flex-col  justify-center items-center px-4 py-10 gap-16   sm:flex-row  sm:items-start sm:px-28 sm:py-16 md:gap-24 lg:gap-28 selection:bg-zaama_red/50">
      <div className="text-center sm:text-left">
        <Link href="/" className="mb-6 inline-block py-2 ">
          <Image
            src="/SVGs/zaama-logo.svg"
            alt="zaama-logo"
            width={120}
            height={120}
          />
        </Link>
        <form>
          <p className="font-medium  uppercase mb-4  tracking-wide whitespace-nowrap text-center sm:text-left">
            Join our newsletter
          </p>
          <div>
            <input
              type="text"
              placeholder="Email address"
              className=" w-64 h-10 text-sm outline-none bg-[#272727] rounded-md px-4 mb-3 "
            />
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              type="submit"
              className="h-10 w-64 block  bg-zaama_red rounded-md transition duration-100 hover:bg-[#b21717]"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      <div className="text-center ">
        <p className="font-medium text-lg uppercase mb-4 tracking-wide whitespace-nowrap">
          Quick Links
        </p>
        <ul>
          {" "}
          <li className="mb-3 text-gray-400">
            {" "}
            <Link href="/#about" className="hover:text-[#d3d3d3] p-[2px] ">
              About Zaama
            </Link>
          </li>{" "}
          <li className="mb-3 text-gray-400">
            <Link href="/#tickets" className="hover:text-[#d3d3d3] p-[2px]">
              Tickets
            </Link>
          </li>
          <li className="mb-3 text-gray-400">
            <Link href="/#store" className="hover:text-[#d3d3d3] p-[2px]">
              Store
            </Link>
          </li>{" "}
        </ul>
      </div>
      <div className="text-center ">
        <p className="font-medium text-lg uppercase mb-4 tracking-wide whitespace-nowrap">
          Connect
        </p>
        <ul>
          <li className="mb-3 text-gray-400 ">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              className="hover:text-[#d3d3d3] p-[2px]"
            >
              Instagram
            </Link>
          </li>
          <li className="mb-3 text-gray-400">
            {" "}
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              className="hover:text-[#d3d3d3] p-[2px]"
            >
              Twitter
            </Link>
          </li>
          <li className="mb-3 text-gray-400">
            {" "}
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              className="hover:text-[#d3d3d3] p-[2px]"
            >
              Facebook
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
