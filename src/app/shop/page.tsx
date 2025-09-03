"use client";
import React, { useEffect } from "react";
import Store from "../components/Store";
import MerchStoreSection from "../components/MerchStoreSection";
import CarouselLabel from "../components/CarouselLabel";
import localFont from "next/font/local";
import AOS from "aos";
import "aos/dist/aos.css";

const blatantBold = localFont({
  src: "../blatant-font/OTF/Blatant-Bold.otf",
});

const Shop = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="px-5 py-20 bg-gradient-to-r from-primary/20 to-secondary/20 sm:px-10 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            data-aos="fade-up"
            className={`${blatantBold.className} text-4xl md:text-6xl font-bold text-primary mb-6`}
          >
            SHOP ZAAMA
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Get the official app and exclusive Blacko Tribe merchandise
          </p>
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              <span>Official App</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Exclusive Merch</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span>Limited Edition</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              <span>Blacko Tribe Gear</span>
            </div>
          </div>
        </div>
      </section>

      {/* App Store Section */}
      <CarouselLabel word="official app • stay connected • exclusive content" />
      <Store />

      {/* Merchandise Section */}
      <CarouselLabel word="official merch • blacko tribe • limited edition" />
      <MerchStoreSection />

      {/* Why Shop With Us Section */}
      <section className="px-5 py-16 bg-[#161616] sm:px-10 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 
            data-aos="fade-up"
            className={`${blatantBold.className} text-2xl md:text-3xl font-bold text-primary mb-12 text-center`}
          >
            WHY SHOP WITH US?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="100" className="text-center">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">100% Authentic</h3>
              <p className="text-gray-300">
                All merchandise is officially licensed and directly from the Zaama Disco and Blacko Tribe collections.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="text-center">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Fast Delivery</h3>
              <p className="text-gray-300">
                Quick shipping across Ghana and international delivery available for our global Blacko Tribe.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="text-center">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Premium Quality</h3>
              <p className="text-gray-300">
                High-quality materials and designs that represent the Iron Boy legacy and Zaama Disco spirit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Features Highlight */}
      <section className="px-5 py-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 sm:px-10 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            data-aos="fade-up"
            className={`${blatantBold.className} text-2xl md:text-3xl font-bold text-primary mb-12`}
          >
            APP EXCLUSIVE FEATURES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div data-aos="fade-up" data-aos-delay="100" className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">🎵</div>
              <h3 className="font-bold text-primary mb-2">Live Updates</h3>
              <p className="text-gray-300 text-sm">Real-time performance schedules and lineup changes</p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-bold text-primary mb-2">Interactive Map</h3>
              <p className="text-gray-300 text-sm">Navigate the venue with ease and find all locations</p>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">🎥</div>
              <h3 className="font-bold text-primary mb-2">Exclusive Content</h3>
              <p className="text-gray-300 text-sm">Behind-the-scenes content and artist interviews</p>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="text-3xl mb-3">🎁</div>
              <h3 className="font-bold text-primary mb-2">Special Offers</h3>
              <p className="text-gray-300 text-sm">App-only discounts and early access to merchandise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-5 py-16 bg-gradient-to-r from-primary/10 to-secondary/10 sm:px-10 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            data-aos="fade-up"
            className={`${blatantBold.className} text-2xl md:text-3xl font-bold text-primary mb-6`}
          >
            JOIN THE BLACKO TRIBE
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
          >
            Show your support for Iron Boy and be part of the movement. Every purchase supports the artist and the Zaama Disco experience.
          </p>
          
          <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => window.open("#", "_blank")}
              className="px-8 py-4 bg-primary text-black font-bold text-lg rounded-lg hover:bg-secondary transition-colors duration-200 transform hover:scale-105"
            >
              📱 Download App
            </button>
            
            <button
              onClick={() => window.open("#", "_blank")}
              className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold text-lg rounded-lg hover:bg-primary/10 transition-colors duration-200"
            >
              🛍️ Shop Merchandise
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;