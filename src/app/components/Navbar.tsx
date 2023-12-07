"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const navLinks: navLinks = [
    {
      id: 1,
      name: "home",
      sectionId: "",
      path: "/",
    },

    {
      id: 2,
      name: "vendors",
      sectionId: "vendors",
      path: "/vendors",
    },
    {
      id: 3,
      name: "volunteers",
      sectionId: "volunteers",
      path: "/volunteers",
    },

    {
      id: 4,
      name: "tables",
      sectionId: "table",
      path: "/tables",
    },
    {
      id: 5,
      name: "media",
      sectionId: "media",
      path: "/media",
    },
    {
      id: 6,
      name: "policy",
      sectionId: "policy",
      path: "/policy",
    },
  ];

  return (
    <nav className="absolute z-10 w-full flex gap-3 justify-center items-center p-2 md:p-1 md:px-10 lg:px-20 ">
      {!isNavbarOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#dedede"
          className="w-8 h-8 inline cursor-pointer transition-all duration-150 hover:stroke-zaama_green"
          onClick={() => setIsNavbarOpen(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      ) : (
        <ul
          className={`fixed top-0 left-0 z-10 pt-16 bg-[#111111] w-screen h-screen gap-7 items-center select-none  ${
            isNavbarOpen ? "flex flex-col" : "hidden "
          }`}
        >
          <li onClick={() => setIsNavbarOpen(false)} className="mb-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#dedede"
              className="w-8 h-8 inline cursor-pointer transition-all duration-150 hover:stroke-zaama_green"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </li>

          {navLinks.map((item) => (
            <li key={item.id} onClick={() => setIsNavbarOpen(false)}>
              <Link
                href={item.path}
                className="p-1 uppercase inline-block transition duration-150 hover:text-zaama_green"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <span
              onClick={() =>
                window.open("https://paystack.com/pay/zaamadisco ", "_blank")
              }
              className="p-1 uppercase inline-block transition duration-150 cursor-pointer hover:text-zaama_green"
            >
              Cashless
            </span>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
