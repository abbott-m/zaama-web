"use client";
import React, { useEffect } from "react";
import SingleTicket from "./SingleTicket";
import { ticketData } from "../lib/ticketData";
import localFont from "next/font/local";
import AOS from "aos";
import "aos/dist/aos.css";

const blatant = localFont({
  src: "../blatant-font/OTF/Blatant.otf",
});

const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant-Bold.otf",
});

const Ticket = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section id="tickets" className="px-5 py-20 bg-gradient-to-b from-black to-gray-900 sm:px-10 lg:px-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2
          data-aos="fade-up"
          className={`${blatantBold.className} text-4xl md:text-5xl font-bold text-primary mb-6 tracking-wide uppercase`}
        >
          Choose Your Experience
        </h2>
        <p 
          data-aos="fade-up" 
          data-aos-delay="200"
          className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto"
        >
          From general admission to VIP luxury - we have the perfect ticket for your Zaama Disco experience
        </p>
        
        <div 
          data-aos="fade-up" 
          data-aos-delay="400"
          className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span>Instant Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span>Mobile Tickets</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>24/7 Support</span>
          </div>
        </div>

        {/* Support Numbers */}
        <div data-aos="fade-up" data-aos-delay="600" className="text-center text-gray-400">
          <p className="text-sm">
            Ticket Support: 
            <span className="text-primary ml-2 font-semibold hover:text-primary/80 transition-colors">+233 24 832 5314</span> | 
            <span className="text-primary ml-1 font-semibold hover:text-primary/80 transition-colors">+233 24 138 3766</span>
          </p>
        </div>
      </div>

      {/* Tickets Grid */}
      <div className="max-w-7xl mx-auto">
        {/* Desktop: Grid, Mobile: Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
          {ticketData.map((ticket, index) => (
            <div
              key={ticket.ticketType}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className={`w-full max-w-sm ticket-card-hover ${
                ticket.ticketType === 3 ? 'ticket-premium-glow' : 'ticket-primary-glow'
              }`}
            >
              <SingleTicket
                color={ticket.color} // Still pass for compatibility, but won't be used for colors
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

        {/* Additional Info */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="800"
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-2xl p-8 max-w-4xl mx-auto border border-primary/20 backdrop-blur-sm">
            <h3 className={`${blatantBold.className} text-2xl font-bold text-primary mb-4`}>
              Important Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <span className="text-primary mr-2">📅</span>
                  Event Details
                </h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Date: December 31st, 2024</li>
                  <li>• Doors Open: 4:00 PM</li>
                  <li>• Age Requirement: 18+</li>
                  <li>• Venue: Accra, Ghana</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <span className="text-primary mr-2">🎫</span>
                  Ticket Policy
                </h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• All sales are final</li>
                  <li>• Transfers available through platform</li>
                  <li>• Valid ID required for entry</li>
                  <li>• No re-entry allowed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="1000"
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Don't wait - tickets are selling fast! Join thousands of music lovers for Ghana's biggest cultural celebration.
          </p>
          <button
            onClick={() => window.open("https://echolive.live/buy-tickets", "_blank")}
            className={`
              ${blatantBold.className}
              px-8 py-4 bg-gradient-to-r from-primary to-blue-400 
              text-black font-bold text-lg rounded-2xl 
              hover:scale-105 transition-all duration-200 
              shadow-lg hover:shadow-xl transform
              inline-flex items-center gap-2
              theme-button
            `}
          >
            <span>🎵</span>
            Buy Tickets Now
            <span className="animate-bounce">→</span>
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(167, 204, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-400/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Ticket;