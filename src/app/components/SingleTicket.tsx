"use client";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTicketContext } from "../context/ticketContext";

const blatant = localFont({
  src: "../blatant-font/OTF/Blatant.otf",
});
const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant-Bold.otf",
});

type singleTicketProps = {
  color: string;
  packageName: string;
  dollar_price: string;
  cedi_price: string;
  perks: string[];
  available: boolean;
  countDown: boolean;
  ticketID: number;
};

const SingleTicket = ({
  color,
  packageName,
  dollar_price,
  cedi_price,
  perks,
  available,
  countDown,
  ticketID,
}: singleTicketProps) => {
  const router = useRouter();

  const startDate = new Date("2024-12-01T00:00:00"); // countdown timer stops at Nov 10, 2024
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const {
    isTicketModalOpen,
    setIsTicketModalOpen,
    setTicketType,
    setHasCountdown,
  } = useTicketContext();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeDifference = Math.max(startDate.getTime() - now.getTime(), 0);
      setTimeLeft(timeDifference);
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate]);

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  const handleView = () => {
    setIsTicketModalOpen(true);
    setTicketType(ticketID);
    setHasCountdown(countDown);
  };
  return (
    <div
      className={`relative mx-auto w-72 h-[390px] text-gray-200 px-2 py-3 flex flex-col justify-center items-center rounded-2xl bg-transparent  transition duration-100 lg:w-80 
      
       ${
         !available &&
         "grayscale opacity-60 text-gray-400 select-none pointer-events-none"
       }
      
      `}
    >
      <Image
        src={
          color === "green"
            ? "/SVG/ticket-1.svg"
            : color === "red"
            ? "/SVG/ticket-2.svg"
            : "/SVG/ticket-3.svg"
        }
        alt="zaama ticket"
        fill
        className="-z-10"
      />
      <p className={`${blatant.className} uppercase text-lg text-center mb-3`}>
        {packageName}
      </p>
      {/* <p
        className={`${blatant.className} text-center text-2xl mb-5 md:text-4xl`}
      >
        <span className="text-xl">$ </span>
        {dollar_price} /<span className="text-xl"> &#8373; </span> {cedi_price}
      </p> */}
      <p
        className={`${blatantBold.className} text-center text-4xl mb-5 md:text-5xl`}
      >
        <span className="text-lg md:text-2xl"> &#8373; </span> {cedi_price}
      </p>

      {/* {countDown && timeLeft > 0 ? (
        <div className={`${blatant.className} mb-10 w-2/3 text-center`}>
          <p className="">Ticket Available In</p>
          <p className="text-2xl">
            {days.toString().padStart(2, "0")} :{" "}
            {hours.toString().padStart(2, "0")} :{" "}
            {minutes.toString().padStart(2, "0")} :{" "}
            {seconds.toString().padStart(2, "0")}
          </p>
        </div>
      ) : (
      )} */}

      <ul className="mb-5 text-sm  selection:bg-inherit">
        {perks.slice(0, 3).map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-center gap-3 mb-1 text-sm"
          >
            {/* <span className=" w-[6px] h-[6px] inline-block rounded-full bg-white "></span> */}
            {item}
          </li>
        ))}
        <li
          onClick={handleView}
          className="inline-block w-full text-sm text-center text-gray-300 cursor-pointer "
        >
          see more
        </li>
      </ul>
      <button
        onClick={() =>
          window.open("https://echolive.live/buy-tickets", "_blank")
        }
        className={`${
          blatant.className
        }  tracking-widest rounded-sm text-sm w-40 h-10 outline-none font-semibold border   uppercase  select-none transition duration-150  ${
          color === "red"
            ? "border-zaama_red/50 hover:bg-zaama_red/10"
            : color === "green"
            ? "border-zaama_green/50 hover:bg-zaama_green/10"
            : "border-zaama_yellow/50 hover:bg-zaama_yellow/10"
        } ${!countDown && "mb-11"} `}
      >
        Get Ticket
      </button>
      {countDown && timeLeft > 0 && (
        <div className={`${blatant.className} mt-2 w-2/3 text-center`}>
          <p className="text-sm tracking-wide ">Ticket Increases In</p>
          <p className="text-xl">
            {days.toString().padStart(2, "0")} :{" "}
            {hours.toString().padStart(2, "0")} :{" "}
            {minutes.toString().padStart(2, "0")} :{" "}
            {seconds.toString().padStart(2, "0")}
          </p>
        </div>
      )}
    </div>
  );
};

export default SingleTicket;
