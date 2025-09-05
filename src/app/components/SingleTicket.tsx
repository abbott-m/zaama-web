"use client";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTicketContext } from "../context/ticketContext";

const logik = localFont({
  src: "../Logik-font//Logik.otf",
});
const logikBold = localFont({
  src: "../Logik-font//Logik-Bold.otf",
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

  const startDate = new Date("2024-12-01T00:00:00");
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
      className={`cursor-pointer relative mx-auto w-80 h-[480px] text-gray-200 flex flex-col justify-between items-center rounded-2xl bg-transparent transition duration-200 lg:w-96 lg:h-[620px] lg:hover:text-gray-200 overflow-hidden
      
       ${
         !available &&
         "grayscale opacity-60 text-gray-400 select-none pointer-events-none"
       }
      
      `}
    >
      {/* Expanded background image */}
      <Image
        src={
          color === "green"
            ? "/images/ticket-1-.png"
            : color === "red"
            ? "/images/ticket-2-.png"
            : "/images/ticket-3-.png"
        }
        alt="zaama ticket"
        fill
        className="-z-10 object-cover scale-110"
        priority
      />
      
      {/* Package Name at the very top - Smaller on mobile */}
      <div className="relative z-10 px-4 pt-14 md:pt-20 w-full">
        <div
          className={`${logik.className} uppercase text-xs md:text-sm text-center w-48 mx-auto`}
        >
          <p>{packageName}</p>
          {!!packageSubName && <p className="text-xs md:text-sm">({packageSubName})</p>}
        </div>
      </div>

      {/* Middle content container - Smaller price on mobile */}
      <div className="relative z-10 px-4 w-full flex flex-col justify-center items-center flex-grow">
        <p
          className={`${logikBold.className} text-center text-base md:text-lg lg:text-xl mb-6 w-24 md:w-32 mx-auto`}
        >
          <span className="text-sm md:text-base lg:text-lg"> &#8373; </span> {cedi_price}
        </p>

        <ul className="mb-6 text-sm selection:bg-inherit max-h-46 overflow-y-auto w-44 md:w-56 mx-auto">
          {perks.slice(0, 3).map((item, index) => (
            <li
              key={index}
              className="flex items-start justify-start gap-2 mb-2 text-[10px] md:text-xs text-left leading-tight"
            >
              <span className="w-1 h-1 rounded-full bg-white inline-block flex-shrink-0 mt-1.5"></span>
              <span className="break-words">{item}</span>
            </li>
          ))}
          {perks?.length > 3 && (
            <li
              onClick={handleView}
              className="inline-block w-full text-xs text-center text-gray-300 cursor-pointer hover:text-white transition-colors"
            >
              +{perks.length - 3} more benefits...
            </li>
          )}
        </ul>
      </div>

      {/* Bottom content container - Smaller button on mobile */}
      <div className="relative z-10 px-3 pb-6 md:pb-9 w-full flex flex-col items-center">
         <button
          // onClick={() =>
          //   window.open("", "_blank")
          // }
          className={`${logik.className} tracking-widest rounded-sm text-xs md:text-sm w-52 md:w-64 h-10 md:h-12 outline-none font-semibold border select-none transition duration-150 border-gray-200/50 hover:bg-gray-200/10 text-black`}
          style={{ backgroundColor: '#90bafa' }}
        >
          Select This Ticket
        </button>

        {countDown && timeLeft > 0 && (
          <div className={`${logik.className} mt-3 w-2/3 text-center`}>
            <p className="text-xs md:text-sm tracking-wide">Ticket Increases In</p>
            <p className="text-lg md:text-xl">
              {days.toString().padStart(2, "0")} :{" "}
              {hours.toString().padStart(2, "0")} :{" "}
              {minutes.toString().padStart(2, "0")} :{" "}
              {seconds.toString().padStart(2, "0")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleTicket;