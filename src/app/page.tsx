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

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6500);
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
