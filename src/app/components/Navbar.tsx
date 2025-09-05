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
      name: "tickets",
      sectionId: "tickets",
      path: "/#tickets",
    },
    { id: 3, name: "Concert Guide", path: "/concert-guide", sectionId: "" },
    { id: 4, name: "Shop", path: "/shop", sectionId: "" },
    { id: 5, name: "Partners", path: "/partners", sectionId: "" },
    {
      id: 6,
      name: "vendors",
      sectionId: "vendors",
      path: "/vendors",
    },
    {
      id: 7,
      name: "volunteers",
      sectionId: "volunteers",
      path: "/volunteers",
    },
    {
      id: 8,
      name: "tables",
      sectionId: "table",
      path: "/tables",
    },
    {
      id: 9,
      name: "media",
      sectionId: "media",
      path: "/media",
    },
    {
      id: 10,
      name: "sponsor",
      sectionId: "sponsorship",
      path: "/register/sponsorship",
    },
    {
      id: 11,
      name: "contact",
      sectionId: "general",
      path: "/register/general",
    },
    {
      id: 12,
      name: "foundation",
      sectionId: "foundation",
      path: "/foundation",
    },
    {
      id: 13,
      name: "policy",
      sectionId: "policy",
      path: "/policy",
    },
  ];

  return (
    <>
      {!isNavbarOpen ? (
        <div 
          className="fixed top-4 md:top-2 z-10"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <div className="bg-black/80 backdrop-blur-sm rounded-full p-3 transition-all duration-150 hover:bg-black/90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#dedede"
              className="w-8 h-8 transition-all duration-150 cursor-pointer hover:stroke-zaama_greenf hover:stroke-primary"
              onClick={() => setIsNavbarOpen(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      ) : (
        <ul
          className={`fixed top-0 left-0 z-10 pt-16 bg-[#111111]/95 backdrop-blur-sm w-screen h-screen gap-6 items-center justify-center select-none flex flex-col`}
        >
          <li className="absolute top-8 right-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#dedede"
              className="w-8 h-8 transition-all duration-150 cursor-pointer hover:stroke-zaama_greenf hover:stroke-primary"
              onClick={() => setIsNavbarOpen(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </li>

          {navLinks.map((item) => (
            <li
              key={item.id}
              onClick={() => setIsNavbarOpen(false)}
              className="transform transition-all duration-300 hover:scale-110"
            >
              <Link
                href={item.path}
                className="text-lg uppercase font-medium transition duration-300 hover:text-zaama_greenf hover:text-primary px-4 py-2 rounded-lg hover:bg-white/5"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Navbar;