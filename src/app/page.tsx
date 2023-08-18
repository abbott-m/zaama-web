import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Sponsors from "./components/Sponsors";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Sponsors />
      <Footer />
    </main>
  );
};

export default Home;
