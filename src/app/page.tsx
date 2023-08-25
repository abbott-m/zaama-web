import React from "react";
import About from "./components/About";
import Sponsors from "./components/Sponsors";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Store from "./components/Store";
import Ticket from "./components/Ticket";

const Home = () => {
  return (
    <main className="">
      <Hero />
      <Ticket />
      <About />
      <Store />
      <Sponsors />
      <FAQ />
    </main>
  );
};

export default Home;
