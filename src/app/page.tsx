import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Sponsors from "./components/Sponsors";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Store from "./components/Store";

const Home = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Store />

      <FAQ />
      <Sponsors />
      <Footer />
    </main>
  );
};

export default Home;
