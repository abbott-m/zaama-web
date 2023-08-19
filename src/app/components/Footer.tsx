import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#282828] text-white flex flex-col  justify-center items-center px-4 py-10 gap-10   sm:flex-row  sm:items-start sm:px-28 sm:py-16 md:gap-20">
      <div>
        <p className="font-semibold text-lg uppercase mb-3 tracking-wide whitespace-nowrap text-center md:text-left">
          mailing list
        </p>
        <div className="w-72 h-12 border-2 border-[#00C986] rounded-md flex gap-2 justify-between items-center px-[6px] ">
          <input
            type="text"
            placeholder="Email address"
            className=" outline-none w-full h-full bg-transparent pl-2 placeholder:text-[#72a191]"
          />
          <button className="h-2/3 px-4  bg-[#00C986] rounded-sm transition duration-100 hover:bg-[#17b27e]">
            Subscribe
          </button>
        </div>
      </div>
      {/* <div className="h-full flex justify-center items-center">
        <Image src="/zaama-logo.gif" alt="zaama-logo" width={60} height={60} />
      </div> */}
      <div className="text-center ">
        <p className="font-semibold text-lg uppercase mb-3 tracking-wide whitespace-nowrap">
          Quick Links
        </p>
        <ul>
          <li className="mb-2 font-light">
            {" "}
            <Link
              href="/FAQ"
              target="_blank"
              rel="noopener"
              className="hover:text-[#d3d3d3] p-[2px] "
            >
              FAQ
            </Link>
          </li>{" "}
          <li className="mb-2 font-light">
            <Link
              href="/store"
              target="_blank"
              rel="noopener"
              className="hover:text-[#d3d3d3] p-[2px]"
            >
              Store
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-center ">
        <p className="font-semibold text-lg uppercase mb-3 tracking-wide whitespace-nowrap">
          Connect
        </p>
        <ul>
          <li className="mb-2 font-light">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              className="hover:text-[#d3d3d3] p-[2px]"
            >
              Instagram
            </Link>
          </li>
          <li className="mb-2 font-light">
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
          <li className="mb-2 font-light">
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
