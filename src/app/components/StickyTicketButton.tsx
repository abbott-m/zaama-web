// src/app/components/StickyTicketButton.tsx
"use client";
import React, { useState, useEffect } from "react";
import localFont from "next/font/local";

const blatant = localFont({
  src: "../blatant-font/OTF/Blatant.otf",
});

const StickyTicketButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleTicketPurchase = () => {
    window.open("https://echolive.live/buy-tickets", "_blank");
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Sticky Button */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <button
          onClick={handleTicketPurchase}
          className={`${blatant.className} bg-primary text-black px-6 py-3 rounded-full font-bold uppercase tracking-wide shadow-lg hover:bg-secondary transition-all duration-300 transform hover:scale-105 animate-pulse`}
        >
          🎫 Buy Tickets
        </button>
      </div>

      {/* Desktop Sticky Button */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:block">
        <button
          onClick={handleTicketPurchase}
          className={`${blatant.className} bg-primary text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide shadow-2xl hover:bg-secondary transition-all duration-300 transform hover:scale-105 flex items-center gap-3`}
        >
          <span className="text-2xl">🎫</span>
          <div className="flex flex-col items-start">
            <span className="text-sm">Get Your</span>
            <span className="text-lg">TICKETS</span>
          </div>
        </button>
      </div>
    </>
  );
};

export default StickyTicketButton;