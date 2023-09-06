"use client";
import React, { useState, useEffect } from "react";
import About from "./components/About";
import Sponsors from "./components/Sponsors";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Store from "./components/Store";
import Ticket from "./components/Ticket";
import CarouselLabel from "./components/CarouselLabel";
import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const Home = () => {
  const [loading, setLoading] = useState(true);

  // initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  // set a  timer to close the loading screen and mount the main page
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5600);
  }, []);

  return (
    <main className="">
      {loading ? (
        <div className="h-screen w-screen fixed flex justify-center items-center">
          <Image
            src="/GIF/zaama-logo-anim.gif"
            alt="zaama-logo-animation"
            width={300}
            height={100}
            priority
          />
        </div>
      ) : (
        <>
          <CarouselLabel word="Zaama: The Disco" />
          <Navbar />
          <Hero />
          <CarouselLabel word="tickets" />
          <Ticket />
          <CarouselLabel word="about" />
          <About />
          <Store />
          <Sponsors />
          <FAQ />
          <Footer />
        </>
      )}
    </main>
  );
};

export default Home;
