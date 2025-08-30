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

type SingleTicketProps = {
  color: string;
  packageName: string;
  packageSubName?: string;
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
  packageSubName,
  dollar_price,
  cedi_price,
  perks,
  available,
  countDown,
  ticketID,
}: SingleTicketProps) => {
  const router = useRouter();

  const startDate = new Date("2024-12-01T00:00:00"); // countdown timer stops at Dec 1, 2024
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
      className={`cursor-pointer relative mx-auto w-72 h-[420px] text-gray-200 px-2 py-3 flex flex-col justify-center items-center rounded-2xl bg-transparent transition duration-200 lg:w-80 lg:hover:scale-105 lg:hover:text-gray-200
      
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
      
      <div
        className={`${blatant.className} uppercase text-lg text-center mb-3`}
      >
        <p>{packageName}</p>
        {!!packageSubName && <p className="text-sm">({packageSubName})</p>}
      </div>
      
      <p
        className={`${blatantBold.className} text-center text-4xl mb-5 md:text-5xl`}
      >
        <span className="text-lg md:text-2xl"> &#8373; </span> {cedi_price}
      </p>

      <ul className="mb-5 text-sm selection:bg-inherit max-h-32 overflow-y-auto">
        {perks.slice(0, 4).map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-center gap-2 mb-1 text-xs text-center"
          >
            <span className="w-1 h-1 rounded-full bg-white inline-block flex-shrink-0"></span>
            {item}
          </li>
        ))}
        {perks?.length > 4 && (
          <li
            onClick={handleView}
            className="inline-block w-full text-xs text-center text-gray-300 cursor-pointer hover:text-white transition-colors"
          >
            +{perks.length - 4} more benefits...
          </li>
        )}
      </ul>

      <button
        onClick={() =>
          window.open("https://echolive.live/buy-tickets", "_blank")
        }
        className={`${
          blatant.className
        } tracking-widest rounded-sm text-sm w-40 h-10 outline-none font-semibold border uppercase select-none transition duration-150 border-gray-200/50 hover:bg-gray-200/10 ${
          !countDown && "mb-8"
        } `}
      >
        Get Ticket
      </button>

      {countDown && timeLeft > 0 && (
        <div className={`${blatant.className} mt-2 w-2/3 text-center`}>
          <p className="text-sm tracking-wide">Ticket Increases In</p>
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