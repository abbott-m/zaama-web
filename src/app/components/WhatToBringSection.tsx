import React from "react";
import localFont from "next/font/local";

const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant-Bold.otf",
});

const blatant = localFont({
  src: "../blatant-font/OTF/Blatant.otf",
});

const WhatToBringSection = () => {
  const whatToWear = [
    "Dress for comfort + style—express yourself through fashion",
    "Sneakers > heels (you'll thank us later)",
    "Bring a light jacket—Accra nights can surprise you",
    "Glow-in-the-dark fits, tribal prints, and statement pieces will get you noticed"
  ];

  const whatToBring = [
    "Your ticket (digital or printed)",
    "A valid photo ID",
    "Cashless payment options for food, drinks & merch",
    "Power bank (for photos + staying connected)",
    "Sunglasses & hat (daytime vibes)"
  ];

  const whatNotToBring = [
    "No weapons, sharp objects, or illegal substances",
    "No outside food or alcohol (we've got plenty inside)",
    "No professional cameras without a media pass",
    "No bad vibes. Only love + energy is allowed"
  ];

  const vibeProTips = [
    "Come early—the energy builds from the start",
    "Explore all zones (fashion, art, and experiential areas)",
    "Stay hydrated (water is your best friend)",
    "Meet new people—Zaama Disco is about unity + tribe",
    "Save some energy for the After-Party (if you've got Plus or VIP)",
    "Tag us on socials with #ZaamaDisco to get featured on the live festival wall",
    "Roll with your squad for maximum fun (and discounts)",
    "Don't just come for the music—the fashion, art, and visuals will blow your mind"
  ];

  return (
    <section className="px-5 py-16 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] sm:px-10 md:px-20 lg:px-28">
      <div className="max-w-6xl mx-auto">
        <p
          data-aos="fade-down"
          className={`${blatantBold.className} text-center text-xl font-medium mb-12 tracking-wider text-primary uppercase md:text-2xl`}
        >
          Festival Guide
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* What to Wear */}
          <div data-aos="fade-up" data-aos-delay="100" className="space-y-4">
            <h3 className={`${blatant.className} text-lg font-semibold text-zaama_yellowf text-primary uppercase tracking-wide`}>
              What to Wear
            </h3>
            <ul className="space-y-3">
              {whatToWear.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What to Bring */}
          <div data-aos="fade-up" data-aos-delay="200" className="space-y-4">
            <h3 className={`${blatant.className} text-lg font-semibold text-zaama_yellowf text-primary uppercase tracking-wide`}>
              What to Bring
            </h3>
            <ul className="space-y-3">
              {whatToBring.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What NOT to Bring */}
          <div data-aos="fade-up" data-aos-delay="300" className="space-y-4">
            <h3 className={`${blatant.className} text-lg font-semibold text-zaama_redf text-zaama_red uppercase tracking-wide`}>
              What NOT to Bring
            </h3>
            <ul className="space-y-3">
              {whatNotToBring.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How to Vibe Like a Pro */}
          <div data-aos="fade-up" data-aos-delay="400" className="space-y-4">
            <h3 className={`${blatant.className} text-lg font-semibold text-zaama_orangef text-zaama_orange uppercase tracking-wide`}>
              Vibe Like a Pro
            </h3>
            <ul className="space-y-2">
              {vibeProTips.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick Do's & Don'ts */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade-right" className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
            <h3 className={`${blatant.className} text-lg font-semibold text-green-400 uppercase tracking-wide mb-4`}>
              ✓ DO's
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Do bring your ID & ticket</li>
              <li>• Do wear comfortable + stylish clothes</li>
              <li>• Do stay hydrated & eat well</li>
              <li>• Do explore every area of the festival</li>
              <li>• Do spread good vibes & connect with new people</li>
            </ul>
          </div>

          <div data-aos="fade-left" className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
            <h3 className={`${blatant.className} text-lg font-semibold text-red-400 uppercase tracking-wide mb-4`}>
              ✗ DON'Ts
            </h3>
            <ul className="space-y-2 text-sm">
              <li>• Don't bring prohibited items (weapons, drugs, alcohol)</li>
              <li>• Don't sneak in food or drinks</li>
              <li>• Don't lose your wristband—no re-entry without it</li>
              <li>• Don't block views with umbrellas or big bags</li>
              <li>• Don't kill the vibe—negativity stays at home</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToBringSection;