"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import localFont from "next/font/local";
import { ticketData } from "../lib/ticketData";
import { useTicketContext } from "../context/ticketContext";

const blatant = localFont({
  src: "../blatant-font/OTF/Blatant.otf",
});
type MouseEventCallback = (e: MouseEvent) => void;

const TicketModal = () => {
  const { isTicketModalOpen, setIsTicketModalOpen, hasCountdown, ticketType } =
    useTicketContext();
  const startDate = new Date("2024-12-01T00:00:00"); // countdown timer stops at Nov 10, 2024
  const [timeLeft, setTimeLeft] = useState<number>(0);

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

  const modalRef = useRef<HTMLDivElement | null>(null);

  // close dropdown on clicking outside it
  const closeDropdown: MouseEventCallback = useCallback((e) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsTicketModalOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [closeDropdown]);

  const ticket: ITicketData | undefined = ticketData.find(
    (item) => item.ticketType === ticketType
  );

  return (
    <div className="fixed z-20 h-screen w-screen top-0 left-0 ">
      <div className="absolute w-full h-full bg-black/60"></div>
      <div
        ref={modalRef}
        className="absolute z-30 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[95%] 
       rounded-xl px-5 pt-16 pb-10 bg-[#1a1a1a] text-gray-200 sm:px-8 md:w-4/5 md:px-10 lg:px-20 lg:w-3/5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#f5f5f5"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={() => setIsTicketModalOpen(false)}
          className="w-6 h-6 inline-block ml-auto absolute top-8 right-8 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <div className="flex justify-between items-center gap-5 flex-wrap mb-5 md:flex-wrap">
          <div>
            <p className={`${blatant.className} text-lg mb-2`}>Package Name</p>
            <p className="font-medium text-lg ">{ticket?.packageName}</p>
          </div>
          <div>
            <p className={`${blatant.className} text-lg mb-2`}>Ticket Price</p>
            <p className="font-medium text-lg">
              {" "}
              <span className=" text-sm"> &#8373; </span>
              {ticket?.cedi_price}
            </p>
          </div>
        </div>
        <div>
          <p className={`${blatant.className} text-lg mb-2`}>Benefits</p>
          <ul className=" text-sm mb-5">
            {ticket?.perks.map((item, index) => (
              <li key={index} className="mb-1 flex gap-3 items-center text-sm ">
                - {item}
              </li>
            ))}
          </ul>
        </div>
        {/* {hasCountdown && (
          <div className="text-center">
            <p className={`${blatant.className} text-lg mb-2`}>
              Ticket Increases In
            </p>
            <p className={`${blatant.className} text-2xl`}>
              {days.toString().padStart(2, "0")} :{" "}
              {hours.toString().padStart(2, "0")} :{" "}
              {minutes.toString().padStart(2, "0")} :{" "}
              {seconds.toString().padStart(2, "0")}
            </p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default TicketModal;
