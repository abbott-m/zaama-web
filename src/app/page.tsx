"use client";
import React, { useState, useEffect } from "react";
import About from "./components/About";
import Sponsors from "./components/Sponsors";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Store from "./components/Store";
import Ticket from "./components/Ticket";
import CarouselLabel from "./components/CarouselLabel";
import WhatToBringSection from "./components/WhatToBringSection";
import TransportationSection from "./components/TransportationSection";
import FoundationSection from "./components/FoundationSection";
import MerchStoreSection from "./components/MerchStoreSection";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import TicketModal from "./components/TicketModal";
import { useTicketContext } from "./context/ticketContext";
import { homeFAQ } from "./lib/faqData";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { isTicketModalOpen } = useTicketContext();

  // initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // set a timer to close the loading screen and mount the main page
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3800);
  }, []);

  return (
    <main className="">
      {loading ? (
        <div className="h-screen w-screen fixed top-0 left-0 z-20 bg-[#1a1a1a] flex justify-center items-center">
          <div className="text-center">
            <Image
              src="/GIF/zaama-logo-anim.gif"
              alt="zaama-logo-animation"
              unoptimized
              width={300}
              height={100}
              priority
              className="mb-4"
            />
            <p className="text-primary text-lg animate-pulse">Loading the experience...</p>
          </div>
        </div>
      ) : (
        <>
          {isTicketModalOpen && <TicketModal />}
          
          {/* Hero Section */}
          <Hero />
          
          {/* Tickets Section */}
          <CarouselLabel word="tickets • iron boy • blacko tribe" />
          <Ticket />
          
          {/* About Section */}
          <CarouselLabel word="about zaama disco • the movement" />
          <About />
          
          {/* Festival Guide */}
          <WhatToBringSection />
          
          {/* Transportation */}
          <TransportationSection />
          
          {/* App Store Section */}
          <Store />
          
          {/* Merch Store */}
          <MerchStoreSection />
          
          {/* Sponsors */}
          <Sponsors />
          
          {/* Foundation */}
          <div id="foundation">
            <FoundationSection />
          </div>
          
          {/* FAQ Section */}
          <div className="px-5 py-10 mx-auto w-fit sm:w-4/5 md:w-5/6 md:py-10 lg:w-3/5">
            <FAQ
              faqData={homeFAQ}
              headerText="Frequently Asked Questions"
            />
          </div>
          
          {/* Final Call to Action */}
          <div className="px-5 py-16 bg-gradient-to-r from-primary/10 to-secondary/10 sm:px-10 md:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Ready to Join the Movement?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Don't just watch history—be part of it. Get your tickets now and experience 
                the magic of Zaama Disco with Iron Boy and the Blacko Tribe.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => window.open("https://echolive.live/buy-tickets", "_blank")}
                  className="px-8 py-4 bg-primary text-black font-bold text-lg rounded-lg hover:bg-secondary transition-colors duration-200 transform hover:scale-105"
                >
                  🎫 Get Tickets Now
                </button>
                
                <button
                  onClick={() => {
                    const element = document.getElementById('about');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold text-lg rounded-lg hover:bg-primary/10 transition-colors duration-200"
                >
                  Learn More
                </button>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span>Ages 18+</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span>Cashless Event</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                  <span>Live Streaming Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                  <span>No Re-entry</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Home;