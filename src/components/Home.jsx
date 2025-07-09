import React from "react";
import Hero from "./Hero";
import About from "./About";
import Products from "./Products";
import Franchise from "./Franchise";
import Contact from "./Contact";
import MetalPricesBar from "./MetalPricesBar";
import Journey from "./Journey"; 
import LiveStats from "./LiveStats.jsx";
import AppLinks from "./AppLinks.jsx";
import PartnerSection from "./PartnerSection.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <MetalPricesBar />
      <section id="about">
        <About />
      </section>
      <Products />
      <Contact />
      <Journey />
      <PartnerSection />
      <Franchise />


      <AppLinks />
      <LiveStats />
    </>
  );
}
