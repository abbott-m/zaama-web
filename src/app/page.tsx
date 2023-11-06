"use client";
import React, { useState, useEffect } from "react";
import About from "./components/About";
import Sponsors from "./components/Sponsors";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Store from "./components/Store";
import Ticket from "./components/Ticket";
import CarouselLabel from "./components/CarouselLabel";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import TicketModal from "./components/TicketModal";
import { useTicketContext } from "./context/ticketContext";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const { isTicketModalOpen, setIsTicketModalOpen, setTicketType, ticketType } =
    useTicketContext();

  // initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  // set a  timer to close the loading screen and mount the main page
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3800);
  }, []);

  return (
    <main className="">
      {loading ? (
        <div className="h-screen w-screen fixed top-0 left-0 z-20 bg-[#1a1a1a] flex justify-center items-center">
          <Image
            src="/GIF/zaama-logo-anim.gif"
            alt="zaama-logo-animation"
            unoptimized
            width={300}
            height={100}
            priority
          />
        </div>
      ) : (
        <>
          {isTicketModalOpen && <TicketModal />}
          <Hero />
          <CarouselLabel word="tickets" />
          <Ticket />
          <CarouselLabel word="about" />
          <About />
          <Store />
          <Sponsors />
          {/* <FAQ /> */}
        </>
      )}
    </main>
  );
};

export default Home;
