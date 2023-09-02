import React from "react";
import About from "./components/About";
import Sponsors from "./components/Sponsors";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Store from "./components/Store";
import Ticket from "./components/Ticket";
import CarouselLabel from "./components/CarouselLabel";

const Home = () => {
  return (
    <main className="">
      <Hero />
      <CarouselLabel word="tickets" />
      <Ticket />
      <CarouselLabel word="about" />
      <About />
      <CarouselLabel word="store" />
      <Store />
      <Sponsors />
      <FAQ />
    </main>
  );
};

export default Home;
