import React, { useState } from "react";
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
  const [isExpanded, setIsExpanded] = useState(false);
  const { setIsTicketModalOpen, setTicketType, setHasCountdown } = useTicketContext();

  // Theme-based styling - using website's actual colors
  const getTicketStyles = (ticketType: number) => {
    const baseStyles = {
      gradient: "from-primary/20 to-primary/5",
      border: "border-primary/30",
      accent: "text-primary",
      button: "bg-primary hover:bg-primary/80 text-black",
      glow: "shadow-primary/20",
      highlight: "bg-primary/10"
    };

    // Subtle variations for different ticket types
    switch (ticketType) {
      case 1: // General Admission - Standard primary
        return baseStyles;
      
      case 2: // General Access Plus - Slightly enhanced
        return {
          ...baseStyles,
          gradient: "from-primary/25 to-blue-500/10",
          border: "border-primary/40",
          glow: "shadow-primary/25"
        };
      
      case 3: // VIP - Premium styling
        return {
          ...baseStyles,
          gradient: "from-primary/30 to-blue-400/15",
          border: "border-primary/50",
          accent: "text-blue-300",
          button: "bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90 text-black",
          glow: "shadow-primary/30",
          highlight: "bg-primary/15"
        };
      
      case 4: // Squad Package - Group styling
        return {
          ...baseStyles,
          gradient: "from-primary/20 to-purple-500/10",
          border: "border-primary/35",
          accent: "text-blue-200",
          glow: "shadow-primary/25"
        };
      
      default:
        return baseStyles;
    }
  };

  const ticketStyles = getTicketStyles(ticketType);
  const visiblePerks = isExpanded ? perks : perks.slice(0, 4);
  const hasMorePerks = perks.length > 4;

  const handleTicketSelect = () => {
    if (available) {
      setTicketType(ticketType);
      setHasCountdown(countDown);
      setIsTicketModalOpen(true);
    }
  };

  return (
    <div 
      className={`
        relative group cursor-pointer
        bg-gradient-to-br ${ticketStyles.gradient} 
        backdrop-blur-sm border ${ticketStyles.border}
        rounded-3xl p-6 
        transition-all duration-300 ease-out
        hover:scale-[1.02] hover:shadow-2xl ${ticketStyles.glow}
        ${available ? 'opacity-100' : 'opacity-60 grayscale'}
        w-full max-w-sm mx-auto
        h-auto min-h-[500px] flex flex-col
        bg-black/20
      `}
      onClick={handleTicketSelect}
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        {countDown && available && (
          <span className="px-3 py-1 rounded-full text-xs font-semibold text-black bg-primary animate-pulse mb-2 block">
            ⏰ Limited Time
          </span>
        )}
        {available ? (
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${ticketStyles.accent} bg-black/30`}>
            Available
          </span>
        ) : (
          <span className="px-3 py-1 rounded-full text-xs font-semibold text-gray-400 bg-black/50">
            Sold Out
          </span>
        )}
      </div>

      {/* Header */}
      <div className="text-center mb-6 pt-8">
        <h3 className={`${blatantBold.className} text-2xl font-bold text-white mb-2`}>
          {packageName}
        </h3>
        {packageSubName && (
          <p className={`${blatant.className} text-sm ${ticketStyles.accent} font-medium`}>
            {packageSubName}
          </p>
        )}
      </div>

      {/* Pricing */}
      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center gap-3 mb-2">
          <span className={`${blatantBold.className} text-4xl font-bold text-white`}>
            ₵{cedi_price}
          </span>
          <span className={`text-lg text-gray-400 line-through`}>
            ${dollar_price}
          </span>
        </div>
        <p className="text-xs text-gray-400">
          Best value for your concert experience
        </p>
      </div>

      {/* Perks Section - Scrollable */}
      <div className="flex-1 mb-6">
        <h4 className={`${blatantBold.className} text-lg font-semibold text-white mb-4 flex items-center`}>
          <span className={`w-2 h-2 rounded-full bg-primary mr-3`}></span>
          What's Included
        </h4>
        
        <div className="space-y-3 max-h-60 overflow-y-auto custom-scrollbar">
          {visiblePerks.map((perk, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 text-gray-200 text-sm leading-relaxed"
            >
              <span className={`${ticketStyles.accent} mt-1 text-xs flex-shrink-0`}>✓</span>
              <span className="flex-1">{perk}</span>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {hasMorePerks && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className={`mt-4 text-xs ${ticketStyles.accent} hover:underline font-medium flex items-center gap-1`}
          >
            {isExpanded ? (
              <>Show Less <span className="transform rotate-180">↓</span></>
            ) : (
              <>Show {perks.length - 4} More <span>↓</span></>
            )}
          </button>
        )}
      </div>

      {/* Action Button */}
      <div className="mt-auto">
        <button
          onClick={handleTicketSelect}
          disabled={!available}
          className={`
            w-full py-4 px-6 rounded-2xl font-bold text-lg
            transition-all duration-200 transform
            ${available 
              ? `${ticketStyles.button} hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl` 
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }
            ${blatantBold.className}
          `}
        >
          {available ? 'Select This Ticket' : 'Sold Out'}
        </button>
      </div>

      {/* Decorative Elements - Theme colored */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl pointer-events-none">
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${ticketStyles.gradient} opacity-30 blur-3xl`}></div>
        <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${ticketStyles.gradient} opacity-20 blur-2xl`}></div>
      </div>

      {/* Premium Badge for VIP */}
      {ticketType === 3 && (
        <div className="absolute top-4 left-4 z-10">
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-primary/80 to-blue-400/80 text-black text-xs font-bold">
            <span>👑</span>
            <span>PREMIUM</span>
          </div>
        </div>
      )}

      {/* Group Badge for Squad Package */}
      {ticketType === 4 && (
        <div className="absolute top-4 left-4 z-10">
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/80 text-black text-xs font-bold">
            <span>👥</span>
            <span>GROUP</span>
          </div>
        </div>
      )}

      {/* Highlight strip for active tickets */}
      {available && (
        <div className={`absolute top-0 left-0 right-0 h-1 ${ticketStyles.highlight} rounded-t-3xl`}></div>
      )}
    </div>
  );
};

export default SingleTicket;