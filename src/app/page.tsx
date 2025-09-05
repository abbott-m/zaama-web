"use client";
import React, { useState, useEffect } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Ticket from "./components/Ticket";
import CarouselLabel from "./components/CarouselLabel";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import TicketModal from "./components/TicketModal";
import { useTicketContext } from "./context/ticketContext";
import { homeFAQ } from "./lib/faqData";
import Link from "next/link";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { isTicketModalOpen } = useTicketContext();

  // initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // set a timer to close the loading screen and mount the main page
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3800);
  }, []);

  return (
    <main className="">
      {loading ? (
        <div className="h-screen w-screen fixed top-0 left-0 z-20 bg-[#1a1a1a] flex justify-center items-center">
          <div className="text-center">
            <Image
              src="/GIF/zaama-logo-anim.gif"
              alt="zaama-logo-animation"
              unoptimized
              width={300}
              height={100}
              priority
              className="mb-4"
            />
            <p className="text-primary text-lg animate-pulse">Loading the experience...</p>
          </div>
        </div>
      ) : (
        <>
          {isTicketModalOpen && <TicketModal />}
          
          {/* Hero Section */}
          <Hero />
          
          {/* Tickets Section */}
          <CarouselLabel word="Zaama Disco – Where Music, Fashion & Food Collide! Join the movement. Get your tickets now" />
          <Ticket />
          
          {/* About Section */}
          <CarouselLabel word="Step into the Exclusive Experience ! Zaama Disco brings you the ultimate fusion of culture, style & sound" />
          <About />
          
          {/* Quick Links Section */}
          <section className="px-5 py-16 bg-gradient-to-r from-gray-900 to-gray-800 sm:px-10 md:px-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
                Everything You Need
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Concert Guide */}
                <Link href="/concert-guide" className="group">
                  <div className="bg-[#4c4c4c]/20 rounded-2xl p-8 hover:bg-[#4c4c4c]/30 transition-all duration-200 transform group-hover:scale-105">
                    {/* <div className="text-4xl mb-4">🎪</div> */}
                    <h3 className="text-xl font-bold text-primary mb-3">Concert Guide</h3>
                    <p className="text-gray-300 text-sm">
                      Everything you need to know - what to bring, transportation, and essential tips for the perfect concert experience.
                    </p>
                  </div>
                </Link>

                {/* Shop */}
                <Link href="/shop" className="group">
                  <div className="bg-[#4c4c4c]/20 rounded-2xl p-8 hover:bg-[#4c4c4c]/30 transition-all duration-200 transform group-hover:scale-105">
                    {/* <div className="text-4xl mb-4">🛍️</div> */}
                    <h3 className="text-xl font-bold text-primary mb-3">Shop</h3>
                    <p className="text-gray-300 text-sm">
                      Get the official Zaama Disco app and exclusive Blacko Tribe merchandise to show your support.
                    </p>
                  </div>
                </Link>

                {/* Partners */}
                <Link href="/partners" className="group">
                  <div className="bg-[#4c4c4c]/20 rounded-2xl p-8 hover:bg-[#4c4c4c]/30 transition-all duration-200 transform group-hover:scale-105">
                    {/* <div className="text-4xl mb-4">🤝</div> */}
                    <h3 className="text-xl font-bold text-primary mb-3">Partners</h3>
                    <p className="text-gray-300 text-sm">
                      Meet our amazing sponsors and learn about the Zaama Disco Foundation's community impact.
                    </p>
                  </div>
                </Link>

                {/* Vendors */}
                <Link href="/vendors" className="group">
                  <div className="bg-[#4c4c4c]/20 rounded-2xl p-8 hover:bg-[#4c4c4c]/30 transition-all duration-200 transform group-hover:scale-105">
                    {/* <div className="text-4xl mb-4">🏪</div> */}
                    <h3 className="text-xl font-bold text-primary mb-3">Become a Vendor</h3>
                    <p className="text-gray-300 text-sm">
                      Join our marketplace and showcase your business to thousands of concert attendees.
                    </p>
                  </div>
                </Link>

                {/* Volunteers */}
                <Link href="/volunteers" className="group">
                  <div className="bg-[#4c4c4c]/20 rounded-2xl p-8 hover:bg-[#4c4c4c]/30 transition-all duration-200 transform group-hover:scale-105">
                    {/* <div className="text-4xl mb-4">🙋‍♀️</div> */}
                    <h3 className="text-xl font-bold text-primary mb-3">Volunteer</h3>
                    <p className="text-gray-300 text-sm">
                      Be part of the team that makes Zaama Disco happen. Gain experience while contributing to something special.
                    </p>
                  </div>
                </Link>

                {/* Tables */}
                <Link href="/tables" className="group">
                  <div className="bg-[#4c4c4c]/20 rounded-2xl p-8 hover:bg-[#4c4c4c]/30 transition-all duration-200 transform group-hover:scale-105">
                    {/* <div className="text-4xl mb-4">🍾</div> */}
                    <h3 className="text-xl font-bold text-primary mb-3">VIP Tables</h3>
                    <p className="text-gray-300 text-sm">
                      Upgrade your experience with premium table packages for you and your crew.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <div className="px-5 py-10 mx-auto w-fit sm:w-4/5 md:w-5/6 md:py-10 lg:w-3/5">
            <FAQ
              faqData={homeFAQ}
              headerText="Frequently Asked Questions"
            />
          </div>
          
          {/* Call to Action */}
          <div className="px-5 py-16 bg-gradient-to-r from-primary/10 to-secondary/10 sm:px-10 md:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Ready to Join the Movement?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Don't just watch history—be part of it. Get your tickets now and experience 
                the magic of Zaama Disco with Iron Boy and the Blacko Tribe.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => window.open("", "_blank")}
                  className="px-8 py-4 bg-primary text-black font-bold text-lg rounded-lg hover:bg-secondary transition-colors duration-200 transform hover:scale-105"
                >
                  Get Tickets Now
                </button>
                
                <Link
                  href="/concert-guide"
                  className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold text-lg rounded-lg hover:bg-primary/10 transition-colors duration-200 text-center"
                >
                  Learn More
                </Link>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span>Ages 18+</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span>Cashless Event</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span>Live Streaming Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span>No Re-entry</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Home;