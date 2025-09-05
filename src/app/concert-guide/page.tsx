"use client";
import React, { useEffect } from "react";
import WhatToBringSection from "../components/WhatToBringSection";
import TransportationSection from "../components/TransportationSection";
import CarouselLabel from "../components/CarouselLabel";
import localFont from "next/font/local";
import AOS from "aos";
import "aos/dist/aos.css";

const logikBold = localFont({
  src: "../Logik-font//Logik-Bold.otf",
});

const ConcertGuide = () => {
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
            className={`${logikBold.className} text-4xl md:text-6xl font-bold text-primary mb-6`}
          >
            CONCERT GUIDE
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Everything you need to know for the perfect Zaama Disco experience
          </p>
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              <span>Essential Items</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Transportation Tips</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span>Safety Guidelines</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              <span>Pro Tips</span>
            </div>
          </div>
        </div>
      </section>

      {/* Concert Essentials */}
      <CarouselLabel word="concert essentials • what to bring • be prepared" />
      <WhatToBringSection />

      {/* Transportation */}
      <CarouselLabel word="getting there • transportation • travel smart" />
      <TransportationSection />

      {/* Additional Tips Section */}
      <section className="px-5 py-16 bg-[#161616] sm:px-10 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 
            data-aos="fade-up"
            className={`${logikBold.className} text-2xl md:text-3xl font-bold text-primary mb-8 text-center`}
          >
            PRO TIPS FOR THE ULTIMATE EXPERIENCE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-right" className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">⏰</span>
                <h3 className="text-xl font-bold text-primary">Timing</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Doors open at 4:00 PM</li>
                <li>• Arrive early to avoid long queues</li>
                <li>• Main performances start at 8:00 PM</li>
                <li>• Plan to stay until 2:00 AM</li>
              </ul>
            </div>

            <div data-aos="fade-left" className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🏧</span>
                <h3 className="text-xl font-bold text-primary">Money Matters</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• This is a cashless event</li>
                <li>• Bring your debit/credit cards</li>
                <li>• Mobile money accepted everywhere</li>
                <li>• ATMs available on-site</li>
              </ul>
            </div>

            <div data-aos="fade-right" data-aos-delay="200" className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">📱</span>
                <h3 className="text-xl font-bold text-primary">Stay Connected</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Download the Zaama Disco app</li>
                <li>• Follow @zaamadisco on social</li>
                <li>• Use #ZaamaDiscoExperience</li>
                <li>• Free WiFi available in VIP areas</li>
              </ul>
            </div>

            <div data-aos="fade-left" data-aos-delay="200" className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🎵</span>
                <h3 className="text-xl font-bold text-primary">The Experience</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Multiple stages and performance areas</li>
                <li>• Interactive experiences throughout</li>
                <li>• Meet & greet opportunities</li>
                <li>• Professional photo/video zones</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Info */}
      <section className="px-5 py-16 bg-gradient-to-r from-red-900/20 to-orange-900/20 sm:px-10 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            data-aos="fade-up"
            className={`${logikBold.className} text-2xl md:text-3xl font-bold text-primary mb-8`}
          >
            EMERGENCY INFORMATION
          </h2>
          
          <div data-aos="fade-up" data-aos-delay="200" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="text-3xl mb-4">🚨</div>
              <h3 className="text-lg font-bold text-primary mb-3">Emergency</h3>
              <p className="text-gray-300">Emergency Services: 191</p>
              <p className="text-gray-300">Concert Security: Look for staff with radios</p>
            </div>

            <div className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-lg font-bold text-primary mb-3">Medical</h3>
              <p className="text-gray-300">Medical tents located throughout venue</p>
              <p className="text-gray-300">First aid stations clearly marked</p>
            </div>

            <div className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-lg font-bold text-primary mb-3">Contact</h3>
              <p className="text-gray-300">Event Hotline: +233 24 447 5597</p>
              <p className="text-gray-300">Lost & Found: Main entrance</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ConcertGuide;