// src/components/Hero.jsx
import React from "react";
import "./Hero.css";
import heroBg from "../assets/hero-bg.jpg"; // Ensure image is correct

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay" />
      <div className="hero-content animate-fade-in">
        <h1>Powering a <span>Sustainable Future</span></h1>
        <p>Revolutionizing mobility with clean, efficient energy solutions.</p>
        <a href="#about" className="hero-btn">Learn More</a>
      </div>
    </section>
  );
}
