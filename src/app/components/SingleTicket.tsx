import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

const blatant = localFont({
  src: "../blatant-font/OTF/Blatant.otf",
});

type singleTicketProps = {
  color: string;
  packageName: string;
  price: string;
  perks: string[];
};

const SingleTicket = ({
  color,
  packageName,
  price,
  perks,
}: singleTicketProps) => {
  return (
    <div
      className={`relative mx-auto w-72 h-96  px-2 py-4 flex flex-col justify-center items-center rounded-2xl bg-transparent  transition duration-100 hover:scale-105  hover:text-gray-200 selection:bg-zaama_red/50 
       ${
         color === "red"
           ? "hoverr:bg-zaama_red/60"
           : color === "green"
           ? "hoverr:bg-zaama_green/60"
           : "hoverr:bg-zaama_orange/60"
       }
      
      `}
    >
      <Image
        src={
          color === "green"
            ? "/images/ticket-1.svg"
            : color === "red"
            ? "/images/ticket-2.svg"
            : "/images/ticket-3.svg"
        }
        alt="zaama ticket"
        fill
        className="-z-10"
      />
      <p className={`${blatant.className} uppercase text-lg text-center mb-3`}>
        {packageName}
      </p>
      <p
        className={`${blatant.className} text-center text-4xl mb-5 md:text-5xl`}
      >
        <span className="text-3xl">$</span>
        {price}
      </p>

      <ul className=" text-sm mb-5 selection:bg-gray-200">
        {perks.map((item, index) => (
          <li key={index} className="mb-1 flex gap-3 items-center">
            <span className=" w-[6px] h-[6px] inline-block rounded-full bg-white "></span>
            {item}
          </li>
        ))}
      </ul>
      <button
        className={`${
          blatant.className
        }  tracking-widest rounded-sm text-sm w-44 h-10 outline-none font-semibold border   uppercase  select-none transition duration-150  ${
          color === "red"
            ? "border-zaama_red/50 hover:bg-zaama_red/10"
            : color === "green"
            ? "border-zaama_green/50 hover:bg-zaama_green/10"
            : "border-zaama_yellow/50 hover:bg-zaama_yellow/10"
        } `}
      >
        Get Ticket
      </button>
    </div>
  );
};

export default SingleTicket;
