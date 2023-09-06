"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    {
      id: 1,
      name: "about",
      path: "about",
    },
    {
      id: 2,
      name: "store",
      path: "store",
    },
    {
      id: 3,
      name: "sponsors",
      path: "sponsors",
    },
    {
      id: 4,
      name: "FAQ",
      path: "faq",
    },
  ];
  // const handleNavigate = (path: string) => {
  //   setIsNavbarOpen(false);
  //   router.push(path);
  // };
  const handleScroll = (sectionId: string) => {
    // get the element by id and use scrollIntoView
    const element = document.getElementById(sectionId);
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };
  return (
    <nav className=" w-full flex gap-3 justify-center items-center p-7 md:px-10 lg:px-20 ">
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
          className={`gap-8 items-center select-none  ${
            isNavbarOpen ? "flex flex-col" : "hidden "
          }`}
        >
          <li onClick={() => setIsNavbarOpen(false)}>
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
            // <li
            //   key={item.id}
            //   onClick={() => handleNavigate(item.path)}
            //   className="p-1 uppercase cursor-pointer transition duration-150 hover:text-zaama_green"
            // >
            //   {item.name}
            // </li>
            <li
              key={item.id}
              onClick={(e) => handleScroll(item.path)}
              className="p-1 uppercase cursor-pointer transition duration-150 hover:text-zaama_green"
            >
              {item.name}
            </li>
          ))}

          {/* get ticket button */}

          {/* <li onClick={() => setIsNavbarOpen(false)} className="ml-5">
          <Link href="/#tickets">
            <button className="w-48 h-10 bg-[#a9151a] font-semibold rounded-full text-gray-300 transition duration-100 hover:bg-zaama_red/80">
              Get Tickets
            </button>
          </Link>
        </li> */}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
