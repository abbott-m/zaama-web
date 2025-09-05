"use client";
import React from "react";
import SingleTicket from "./SingleTicket";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import localFont from "next/font/local";
import { ticketData } from "../lib/ticketData";

const logikBold = localFont({
  src: "../Logik-font//Logik-Bold.otf",
});

const Ticket = () => {
  return (
    <section
      id="tickets"
      className="relative w-full px-5 overflow-hiddenf pt-14 pb-28 sm:py-10 lg:px-16 "
    >
      <p
        data-aos="fade-up"
        className={`${logikBold.className} text-center text-xl font-medium mb-4 text-primary uppercase tracking-wider md:text-2xl`}
      >
        Choose your package - Early Bird
      </p>
      <p data-aos="fade-up" className="mb-2 text-center">
        We have uniquely crafted ticket packages for everyone
      </p>
      
      {/* Updated ticket information */}
      <div className="mb-10 text-center">
        <p data-aos="fade-up" className="text-center mb-2">
          Ticket Support Numbers:{" "}
          <span className="text-sm whitespace-nowrap">+233 24 832 5314,</span>{" "}
          <span className="text-sm whitespace-nowrap">+233 24 138 3766</span>
        </p>
        <p data-aos="fade-up" className="text-center text-sm text-gray-400">
          All tickets available at{" "}
          <a 
            href="" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Coming Soon
          </a>
        </p>
      </div>

      <div data-aos="fade-up">
        <div className="">
          <Swiper
            loop={true}
            speed={1200}
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2700,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            breakpoints={{
              // when window width is >= 640px (tablet)
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1024px (desktop)
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {ticketData.map((item, index) => (
              <SwiperSlide key={index} className="">
                <SingleTicket
                  color={item.color}
                  packageName={item.packageName}
                  packageSubName={item.packageSubName}
                  dollar_price={item.dollar_price}
                  cedi_price={item.cedi_price}
                  perks={item.perks}
                  available={item.available}
                  countDown={item.countDown}
                  ticketID={item.ticketType}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <p className="mt-5 text-sm italic text-center text-gray-300 md:mt-10">
          Swipe for more...
        </p>
      </div>

      {/* Additional ticket info */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div data-aos="fade-up" className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-xl p-6 border border-gray-700/30">
          <h3 className={`${logikBold.className} text-lg font-semibold text-primary uppercase tracking-wide mb-4 text-center`}>
            Important Ticket Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-white mb-2">✓ What's Included:</h4>
              <ul className="space-y-1 text-gray-300">
                <li>• Age requirement: 18+ (Valid ID required)</li>
                <li>• Entry wristband for all ticket types</li>
                <li>• Access to main festival grounds</li>
                <li>• Live performances from top West African artists</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Important Notes:</h4>
              <ul className="space-y-1 text-gray-300">
                <li>• No re-entry once you leave the venue</li>
                <li>• All sales are final - no refunds</li>
                <li>• Tickets may be transferred via official platform</li>
                <li>• Cashless payments only at venue</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ticket;