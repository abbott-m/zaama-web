import React, { useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { useTicketContext } from "../context/ticketContext";

const blatant = localFont({
  src: "../blatant-font/OTF/Blatant.otf",
});
const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant-Bold.otf",
});

interface SingleTicketProps {
  color: string;
  packageName: string;
  packageSubName?: string;
  dollar_price: string;
  cedi_price: string;
  perks: string[];
  available: boolean;
  countDown: boolean;
  ticketType: number;
}

const SingleTicket: React.FC<SingleTicketProps> = ({
  color,
  packageName,
  packageSubName,
  dollar_price,
  cedi_price,
  perks,
  available,
  countDown,
  ticketType,
}) => {
  const [showAllPerks, setShowAllPerks] = useState(false);
  const { setIsTicketModalOpen, setTicketType, setHasCountdown } = useTicketContext();

  const handleTicketClick = () => {
    if (available) {
      setTicketType(ticketType);
      setHasCountdown(countDown);
      setIsTicketModalOpen(true);
    }
  };

  // Get the appropriate SVG based on color
  const getTicketSVG = () => {
    switch (color) {
      case "green":
        return "/SVG/ticket-1.svg";
      case "red":
        return "/SVG/ticket-2.svg";
      case "yellow":
        return "/SVG/ticket-3.svg";
      default:
        return "/SVG/ticket-1.svg";
    }
  };

  // Display limited perks or all perks
  const displayedPerks = showAllPerks ? perks : perks.slice(0, 5);
  const hasMorePerks = perks.length > 5;

  return (
    <div
      className={`
        cursor-pointer relative mx-auto w-80 h-[520px] px-4 py-6 
        flex flex-col justify-between items-center rounded-2xl 
        bg-transparent transition duration-300 ease-out
        transform hover:scale-[1.02] hover:shadow-2xl
        ${available 
          ? "lg:hover:scale-105 hover:text-gray-100" 
          : "opacity-60 grayscale cursor-not-allowed"
        }
        group
      `}
      onClick={handleTicketClick}
    >
      {/* Futuristic Glow Effect */}
      <div className={`
        absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
        ${color === 'green' ? 'shadow-[0_0_50px_rgba(34,197,94,0.3)]' : 
          color === 'red' ? 'shadow-[0_0_50px_rgba(239,68,68,0.3)]' : 
          'shadow-[0_0_50px_rgba(251,191,36,0.3)]'}
      `}></div>

      {/* SVG Background */}
      <Image
        src={getTicketSVG()}
        alt="zaama ticket"
        fill
        className="-z-10 object-contain group-hover:brightness-110 transition-all duration-300"
      />

      {/* Status Badge */}
      {!available && (
        <div className="absolute top-4 right-4 z-10 bg-red-500/80 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
          SOLD OUT
        </div>
      )}

      {/* Countdown Badge */}
      {countDown && available && (
        <div className="absolute top-4 left-4 z-10 bg-yellow-500/90 text-black px-3 py-1 rounded-full text-xs font-bold animate-pulse">
          ⏰ LIMITED TIME
        </div>
      )}

      {/* Package Name */}
      <div className="text-center mt-8 mb-2">
        <h3 className={`${blatant.className} uppercase text-lg text-center mb-2 font-medium tracking-wide`}>
          {packageName}
        </h3>
        {packageSubName && (
          <p className={`${blatant.className} text-sm text-center opacity-80 font-light`}>
            {packageSubName}
          </p>
        )}
      </div>

      {/* Price */}
      <div className="text-center mb-4">
        <div className={`${blatantBold.className} text-center mb-2`}>
          <span className="text-4xl md:text-5xl">
            <span className="text-lg md:text-2xl">&#8373;</span> {cedi_price}
          </span>
        </div>
        <div className="text-xs opacity-60 line-through">
          ${dollar_price} USD
        </div>
      </div>

      {/* Perks Section - Scrollable Container */}
      <div className="flex-1 w-full px-2 mb-4 overflow-hidden">
        <div className="text-center mb-3">
          <div className={`${blatantBold.className} uppercase text-sm font-bold tracking-wider opacity-90`}>
            What's Included
          </div>
          <div className={`w-12 h-0.5 mx-auto mt-1 ${
            color === 'green' ? 'bg-green-400' : 
            color === 'red' ? 'bg-red-400' : 
            'bg-yellow-400'
          }`}></div>
        </div>
        
        <div 
          className={`
            text-xs leading-relaxed space-y-1 text-center
            ${showAllPerks ? 'max-h-40 overflow-y-auto futuristic-scroll' : 'max-h-32 overflow-hidden'}
            transition-all duration-300
          `}
        >
          {displayedPerks.map((perk, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
            >
              <span className={`
                text-xs ${
                  color === 'green' ? 'text-green-400' : 
                  color === 'red' ? 'text-red-400' : 
                  'text-yellow-400'
                }
              `}>
                ▸
              </span>
              <span className="text-xs flex-1 text-center">{perk}</span>
            </div>
          ))}
          
          {/* Fade out effect when not expanded */}
          {!showAllPerks && hasMorePerks && (
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
          )}
        </div>

        {/* Show More/Less Button */}
        {hasMorePerks && (
          <div className="text-center mt-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowAllPerks(!showAllPerks);
              }}
              className={`
                text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full
                border transition-all duration-200 hover:scale-105
                ${color === 'green' 
                  ? 'text-green-400 border-green-400/50 hover:bg-green-400/10' : 
                  color === 'red' 
                  ? 'text-red-400 border-red-400/50 hover:bg-red-400/10' : 
                  'text-yellow-400 border-yellow-400/50 hover:bg-yellow-400/10'
                }
              `}
            >
              {showAllPerks ? 'Show Less ▲' : `+${perks.length - 5} More ▼`}
            </button>
          </div>
        )}
      </div>

      {/* Action Button */}
      <div className="text-center mb-6">
        <button
          className={`
            ${blatantBold.className} uppercase text-sm font-bold tracking-wider
            px-6 py-3 rounded-xl border-2 transition-all duration-200
            ${available 
              ? `hover:scale-105 active:scale-95 ${
                  color === 'green' 
                    ? 'text-green-400 border-green-400 hover:bg-green-400 hover:text-black shadow-lg hover:shadow-green-400/25' : 
                  color === 'red' 
                    ? 'text-red-400 border-red-400 hover:bg-red-400 hover:text-white shadow-lg hover:shadow-red-400/25' : 
                    'text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-black shadow-lg hover:shadow-yellow-400/25'
                }`
              : 'text-gray-500 border-gray-500 cursor-not-allowed'
            }
          `}
          disabled={!available}
        >
          {available ? 'Select Ticket' : 'Sold Out'}
        </button>
      </div>

      {/* Futuristic Corner Elements */}
      <div className={`
        absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 opacity-30
        ${color === 'green' ? 'border-green-400' : 
          color === 'red' ? 'border-red-400' : 
          'border-yellow-400'}
      `}></div>
      <div className={`
        absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 opacity-30
        ${color === 'green' ? 'border-green-400' : 
          color === 'red' ? 'border-red-400' : 
          'border-yellow-400'}
      `}></div>
      <div className={`
        absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 opacity-30
        ${color === 'green' ? 'border-green-400' : 
          color === 'red' ? 'border-red-400' : 
          'border-yellow-400'}
      `}></div>
      <div className={`
        absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 opacity-30
        ${color === 'green' ? 'border-green-400' : 
          color === 'red' ? 'border-red-400' : 
          'border-yellow-400'}
      `}></div>

      {/* Scanning Line Animation on Hover */}
      <div className={`
        absolute top-0 left-0 w-full h-0.5 transform -translate-y-full
        group-hover:animate-pulse opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        ${color === 'green' ? 'bg-gradient-to-r from-transparent via-green-400 to-transparent' : 
          color === 'red' ? 'bg-gradient-to-r from-transparent via-red-400 to-transparent' : 
          'bg-gradient-to-r from-transparent via-yellow-400 to-transparent'}
      `}></div>
    </div>
  );
};

export default SingleTicket;