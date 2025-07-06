// src/components/Home.jsx
import React from "react";
import Hero from "./Hero";
import About from "./About";
import Products from "./Products";
import Franchise from "./Franchise";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Hero />

      {/* 👇 Add this wrapper to properly scroll to About */}
      <section id="about">
        <About />
      </section>
      <Products />
      <Contact />
      <Franchise />
      
    </>
  );
}
