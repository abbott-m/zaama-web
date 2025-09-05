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
            Everything you need to know for the perfect Zaama Disco experience at Untamed Empire, Accra
          </p>
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              <span>December 21st, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Transportation Tips</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span>Weather Forecast</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              <span>Pro Tips</span>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details & Weather */}
      <section className="px-5 py-16 bg-[#161616] sm:px-10 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Event Details */}
            <div data-aos="fade-right">
              <h2 className={`${logikBold.className} text-2xl md:text-3xl font-bold text-primary mb-6`}>
                EVENT DETAILS
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">📅</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">Date & Time</h4>
                    <p className="text-gray-400">Saturday, December 21st, 2025</p>
                    <p className="text-gray-400">Doors open: 4:00 PM | Show starts: 8:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">📍</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">Venue</h4>
                    <p className="text-gray-400">Untamed Empire, Accra, Ghana</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">🎫</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">Age Requirement</h4>
                    <p className="text-gray-400">18+ with valid ID required</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Weather Forecast */}
            <div data-aos="fade-left">
              <h2 className={`${logikBold.className} text-2xl md:text-3xl font-bold text-primary mb-6`}>
                WEATHER FORECAST
              </h2>
              <div className="bg-primary/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">December 21st, 2025</h3>
                  <span className="text-3xl">☀️</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Temperature:</span>
                    <span className="text-white font-medium">31°C / 23°C (88°F / 73°F)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Humidity:</span>
                    <span className="text-white font-medium">High</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Rainfall:</span>
                    <span className="text-white font-medium">Low chance (24mm avg)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunshine:</span>
                    <span className="text-white font-medium">7 hours (57% of daylight)</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-yellow-400/20 rounded-lg">
                  <p className="text-sm text-yellow-100">
                    <strong>Weather Tip:</strong> Expect hot and humid conditions with possible light showers. 
                    Dress light, stay hydrated, and bring a light rain cover just in case!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concert Essentials */}
      <CarouselLabel word="concert essentials • what to bring • be prepared" />
      <WhatToBringSection />

      {/* Transportation */}
      <CarouselLabel word="getting there • transportation • bus schedules" />
      
      {/* Enhanced Transportation Section */}
      <section className="px-5 py-16 bg-[#161616] sm:px-10 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 
            data-aos="fade-up"
            className={`${logikBold.className} text-2xl md:text-3xl font-bold text-primary mb-12 text-center`}
          >
            OFFICIAL BUS TRANSPORTATION
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Kumasi to Accra Routes */}
            <div data-aos="fade-right" className="bg-[#4c4c4c]/20 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">🚌</span>
                <h3 className="text-xl font-bold text-primary">Kumasi to Accra</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-white mb-2">Departure Points:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <strong>Konongo:</strong> Main Bus Terminal</li>
                    <li>• <strong>Kumasi Mall:</strong> Main Entrance</li>
                  </ul>
                </div>
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-sm text-primary font-medium">
                    📞 For bus schedules and bookings: +233 24 447 5597
                  </p>
                </div>
              </div>
            </div>

            {/* Accra Local Routes */}
            <div data-aos="fade-left" className="bg-[#4c4c4c]/20 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">🚐</span>
                <h3 className="text-xl font-bold text-primary">Accra Local Routes</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-bold text-white mb-2">Pickup Locations:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <strong>Accra Mall:</strong> Main Car Park</li>
                    <li>• <strong>Osu:</strong> Oxford Street Junction</li>
                    <li>• <strong>Tema:</strong> Community 1 Station</li>
                    <li>• <strong>Airport:</strong> Terminal 3 Arrival</li>
                    <li>• <strong>AMA Head Office:</strong> Main Entrance</li>
                  </ul>
                </div>
                <div className="bg-secondary/10 rounded-lg p-4">
                  <p className="text-sm text-secondary font-medium">
                    ⏰ Buses run every 30 minutes from 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Transportation Tips */}
          <div data-aos="fade-up" data-aos-delay="200" className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-primary mb-4 text-center">🚍 Transportation Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-gray-300">
                <li>• Book your bus seat in advance to guarantee transportation</li>
                <li>• Arrive at pickup points 15 minutes early</li>
                <li>• Keep your ticket receipt for the return journey</li>
                <li>• Buses will return 2 hours after the event ends</li>
              </ul>
              <ul className="space-y-3 text-gray-300">
                <li>• Free WiFi available on all buses</li>
                <li>• Air conditioning for comfort during the journey</li>
                <li>• Secure storage for personal belongings</li>
                <li>• Professional drivers with excellent safety records</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
                <span className="text-2xl mr-3">🌡️</span>
                <h3 className="text-xl font-bold text-primary">Weather Prep</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Wear light, breathable clothing</li>
                <li>• Bring a light rain jacket/poncho</li>
                <li>• Stay hydrated throughout the event</li>
                <li>• Sunscreen for daytime arrival</li>
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

      {/* Security Measures */}
      <section className="px-5 py-16 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 sm:px-10 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 
            data-aos="fade-up"
            className={`${logikBold.className} text-2xl md:text-3xl font-bold text-primary mb-8 text-center`}
          >
            SECURITY & SAFETY MEASURES
          </h2>
          
          <div data-aos="fade-up" data-aos-delay="200" className="bg-[#4c4c4c]/20 rounded-2xl p-8 mb-8">
            <p className="text-gray-300 text-center mb-6">
              Security and safety are of utmost importance at Zaama Disco. We work hand in hand with 
              law enforcement and public safety agencies to ensure the safety of all attendees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="100" className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🔍</span>
                <h3 className="text-lg font-bold text-primary">Entry Security</h3>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Mandatory bag checks for all attendees</li>
                <li>• Walk-through metal detectors (magnetometers)</li>
                <li>• Security screening for staff and performers</li>
                <li>• Valid ID verification required</li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🐕</span>
                <h3 className="text-lg font-bold text-primary">Detection Units</h3>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Specialized dog sweeps of venue</li>
                <li>• Continuous security patrols</li>
                <li>• Professional law enforcement presence</li>
                <li>• Emergency response teams on standby</li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">📹</span>
                <h3 className="text-lg font-bold text-primary">Monitoring</h3>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• CCTV surveillance throughout venue</li>
                <li>• Security personnel with radio communication</li>
                <li>• Emergency information via video screens</li>
                <li>• Audio system emergency announcements</li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">⚠️</span>
                <h3 className="text-lg font-bold text-primary">Safety Protocol</h3>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Arrive early to allow time for security checks</li>
                <li>• Face masks recommended for dust protection</li>
                <li>• Report suspicious activity to security</li>
                <li>• Follow all staff instructions promptly</li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="500" className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🚫</span>
                <h3 className="text-lg font-bold text-primary">Prohibited Items</h3>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Weapons of any kind</li>
                <li>• Glass bottles or containers</li>
                <li>• Professional cameras with detachable lenses</li>
                <li>• Outside food and beverages</li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="600" className="bg-[#4c4c4c]/20 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">📱</span>
                <h3 className="text-lg font-bold text-primary">Emergency Communication</h3>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Mobile notifications for emergencies</li>
                <li>• Designated security staff locations</li>
                <li>• Clear emergency exit signage</li>
                <li>• 24/7 event hotline support</li>
              </ul>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="700" className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">🛡️ Your Safety is Our Priority</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <p className="font-medium text-white mb-2">If you see something, say something:</p>
                <ul className="space-y-1">
                  <li>• Flag down any concert personnel immediately</li>
                  <li>• Look for staff wearing official Zaama Disco gear</li>
                  <li>• Security staff carry radios for instant communication</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white mb-2">What to expect:</p>
                <ul className="space-y-1">
                  <li>• Professional, courteous security screening</li>
                  <li>• Quick and efficient entry process</li>
                  <li>• Visible security presence throughout event</li>
                </ul>
              </div>
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