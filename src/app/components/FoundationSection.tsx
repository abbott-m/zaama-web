import React from "react";
import localFont from "next/font/local";
import PrimaryButton from "./PrimaryButton";

const logikBold = localFont({
  src: "../Logik-font//Logik-Bold.otf",
});

const logik = localFont({
  src: "../Logik-font//Logik.otf",
});

const FoundationSection = () => {
  const donationTiers = [
    {
      amount: "GHS 20",
      title: "A seed of hope",
      description: "Provides basic healthcare support and hygiene essentials for a mother and her baby.",
      color: "from-blue-400 to-blue-600",
      icon: "🌱"
    },
    {
      amount: "GHS 30", 
      title: "A gift of comfort",
      description: "Helps supply baby food, diapers, and postnatal needs for newborns.",
      color: "from-blue-400 to-blue-600",
      icon: "🎁"
    },
    {
      amount: "GHS 100+",
      title: "A foundation of love",
      description: "Supports critical maternal healthcare, safe delivery kits, and community programs for mothers in need.",
      color: "from-blue-400 to-blue-600",
      icon: "❤️"
    }
  ];

  const handleDonate = (amount: string) => {
    // This would typically link to a payment processor or donation platform
    window.open(`mailto:info@zaamadisco.com?subject=Donation - ${amount}&body=I would like to make a donation of ${amount} to the Zaama Disco Foundation.`, '_blank');
  };

  return (
    <section className="px-5 py-16 bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#0f1419] sm:px-10 md:px-20 lg:px-28">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            data-aos="fade-down"
            className={`${logikBold.className} text-xl font-medium mb-4 tracking-wider text-primary uppercase md:text-2xl`}
          >
            Foundation & Donations
          </p>
          <p
            data-aos="fade-up"
            className={`${logik.className} text-2xl md:text-3xl font-bold mb-6 text-white`}
          >
            Support Mothers. Nurture Babies. Build the Future.
          </p>
        </div>

        {/* Mission Statement */}
        <div data-aos="fade-up" className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 mb-12 border border-gray-700/30">
          <p className="text-gray-200 leading-relaxed text-center md:text-lg mb-6">
            At Zaama Disco Foundation, we believe every mother deserves safe care and every newborn deserves a 
            healthy start in life. Yet many mothers and babies in our communities face life-threatening challenges 
            due to lack of proper medical care, basic essentials, and emotional support.
          </p>
          <p className="text-gray-300 leading-relaxed text-center">
            Your donation—no matter the size—can help change that story. By giving, you are not just donating; 
            you are saving lives, spreading hope, and building a stronger future for generations to come.
          </p>
        </div>

        {/* Donation Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {donationTiers.map((tier, index) => (
            <div 
              key={index}
              data-aos="fade-up" 
              data-aos-delay={100 * (index + 1)}
              className={`bg-gradient-to-br ${tier.color} rounded-2xl p-6 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-white/20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full border-2 border-white/20"></div>
              </div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 text-center">{tier.icon}</div>
                <div className={`${logik.className} text-2xl font-bold mb-2 text-center`}>
                  {tier.amount}
                </div>
                <h3 className={`${logik.className} text-lg font-semibold mb-4 text-center uppercase tracking-wide`}>
                  {tier.title}
                </h3>
                <p className="text-sm text-white/90 leading-relaxed mb-6 text-center">
                  {tier.description}
                </p>
                
                <div className="h-10">
                  <button
                    onClick={() => handleDonate(tier.amount)}
                    className="w-full h-full bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200 font-semibold text-white border border-white/30"
                  >
                    Donate {tier.amount}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div data-aos="fade-up" className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-2xl p-8 border border-yellow-500/20 text-center">
          <h3 className={`${logik.className} text-xl font-semibold text-yellow-400 uppercase tracking-wide mb-4`}>
            Your Impact
          </h3>
          <p className="text-gray-200 leading-relaxed md:text-lg mb-6">
            Every cedi you give goes directly into supporting maternal health and newborn wellness. 
            Together, we can reduce preventable deaths, ease the struggles of vulnerable mothers, 
            and give babies a fighting chance at life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                💝
              </div>
              <div className="text-left">
                <p className="font-semibold text-yellow-300">Give today. Give life.</p>
                <p className="text-sm text-gray-300">Your kindness matters</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                👶
              </div>
              <div className="text-left">
                <p className="font-semibold text-orange-300">Build the future</p>
                <p className="text-sm text-gray-300">Every baby deserves a chance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div data-aos="fade-up" data-aos-delay="200" className="text-center mt-12">
          <p className={`${logik.className} text-xl md:text-2xl font-bold mb-6 text-primary`}>
            Your kindness is the reason a mother will smile and a baby will thrive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="w-48 h-12">
              <button
                onClick={() => handleDonate("Custom Amount")}
                className="w-full h-full bg-primary hover:bg-secondary rounded-lg transition-colors duration-200 font-semibold text-black"
              >
                Make Custom Donation
              </button>
            </div>
            
            <div className="w-48 h-12">
              <button
                onClick={() => window.open('mailto:info@zaamadisco.com?subject=Foundation Partnership', '_blank')}
                className="w-full h-full bg-transparent hover:bg-primary/10 border border-primary rounded-lg transition-colors duration-200 font-semibold text-primary"
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up" data-aos-delay="300" className="text-center mt-8 text-gray-400 text-sm">
          <p>For more information about our foundation work, contact us at:</p>
          <p className="text-primary">info@zaamadisco.com</p>
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;