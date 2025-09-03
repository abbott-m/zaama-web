"use client";
import React from "react";
import SingleTicket from "./SingleTicket"; // Your updated component
import { ticketData } from "../lib/ticketData";
import localFont from "next/font/local";
import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

const blatant = localFont({
  src: "../blatant-font/OTF/Blatant.otf",
});

const Ticket = () => {
  return (
    <section id="tickets" className="px-5 pt-20 pb-28 bg-black relative overflow-hidden sm:px-10 lg:px-24">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-green-400/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400/10 to-transparent"></div>
        
        {/* Animated scanning lines */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent scanner-line"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <h2
          data-aos="fade-up"
          className={`${blatant.className} text-center text-xl font-medium mb-4 text-primary uppercase tracking-wider md:text-2xl cyber-text`}
        >
          Choose your ticket package
        </h2>
        <p data-aos="fade-up" data-aos-delay="200" className="mb-2 text-center opacity-80">
          We have uniquely crafted ticket packages for everyone
        </p>
        <div className="mb-10 text-center" data-aos="fade-up" data-aos-delay="400">
          <p className="text-center text-sm opacity-60">
            Ticket Support Numbers:{" "}
            <span className="text-sm whitespace-nowrap text-green-400 hover:text-green-300 transition-colors">
              +233 24 832 5314
            </span>
            {", "}
            <span className="text-sm whitespace-nowrap text-yellow-400 hover:text-yellow-300 transition-colors">
              +233 24 138 3766
            </span>
          </p>
        </div>

        {/* Futuristic Divider */}
        <div className="flex items-center justify-center mb-12" data-aos="fade-up" data-aos-delay="600">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-green-400"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full mx-4 animate-pulse"></div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400"></div>
          <div className="w-2 h-2 bg-red-400 rounded-full mx-4 animate-pulse"></div>
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-red-400"></div>
        </div>
      </div>

      {/* Tickets Display */}
      <div className="relative z-10">
        {/* Desktop: Grid Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center max-w-7xl mx-auto">
            {ticketData.map((ticket, index) => (
              <div
                key={ticket.ticketType}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className={`ticket-glow-${ticket.color}`}
              >
                <SingleTicket
                  color={ticket.color}
                  packageName={ticket.packageName}
                  packageSubName={ticket.packageSubName}
                  dollar_price={ticket.dollar_price}
                  cedi_price={ticket.cedi_price}
                  perks={ticket.perks}
                  available={ticket.available}
                  countDown={ticket.countDown}
                  ticketType={ticket.ticketType}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Swiper with Card Effect */}
        <div className="block md:hidden">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            loop={true}
            speed={800}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            modules={[EffectCards, Autoplay]}
            className="w-80 h-[540px]"
          >
            {ticketData.map((ticket) => (
              <SwiperSlide key={ticket.ticketType} className="bg-transparent rounded-2xl">
                <SingleTicket
                  color={ticket.color}
                  packageName={ticket.packageName}
                  packageSubName={ticket.packageSubName}
                  dollar_price={ticket.dollar_price}
                  cedi_price={ticket.cedi_price}
                  perks={ticket.perks}
                  available={ticket.available}
                  countDown={ticket.countDown}
                  ticketType={ticket.ticketType}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Mobile Swipe Indicator */}
      <p className="mt-5 text-sm italic text-center text-gray-500 md:hidden opacity-60">
        Swipe for more tickets...
      </p>

      {/* Call to Action */}
      <div className="relative z-10 text-center mt-16" data-aos="fade-up" data-aos-delay="800">
        <div className="bg-gradient-to-r from-black/50 via-gray-900/50 to-black/50 rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-sm border border-gray-700/50">
          <h3 className={`${blatant.className} text-xl font-bold text-primary mb-4 uppercase tracking-wide cyber-text`}>
            Secure Your Spot
          </h3>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            Join thousands of music lovers for Ghana's biggest cultural celebration. 
            Tickets are selling fast - don't miss out on this legendary experience!
          </p>
          
          <button
            onClick={() => window.open("https://echolive.live/buy-tickets", "_blank")}
            className={`
              ${blatant.className} cyber-button
              px-8 py-3 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 
              text-black font-bold text-sm uppercase tracking-widest rounded-xl 
              hover:scale-105 transition-all duration-300 transform
              shadow-lg hover:shadow-2xl
              relative overflow-hidden
            `}
          >
            <span className="relative z-10">⚡ Get Tickets Now ⚡</span>
          </button>
          
          <div className="flex items-center justify-center mt-4 gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></span>
              <span>Instant Delivery</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Futuristic Elements */}
      <div className="absolute bottom-10 left-10 w-6 h-6 border border-green-400/30 rotate-45 animate-spin opacity-20"></div>
      <div className="absolute top-1/2 right-10 w-4 h-4 border border-yellow-400/30 rotate-45 animate-ping opacity-20"></div>
      <div className="absolute top-20 left-1/2 w-8 h-8 border border-red-400/20 rounded-full animate-pulse opacity-20"></div>
    </section>
  );
};

export default Ticket;