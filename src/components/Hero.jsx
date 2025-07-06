// Hero.jsx
import React from "react";
import "./Hero.css";
import { HashLink } from "react-router-hash-link";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay" />
      <div className="hero-content animate-fade-in">
        <h1>Powering a <span>Sustainable Future</span></h1>
        <p>Revolutionizing mobility with clean, efficient energy solutions.</p>
        
        {/* FIXED: Use HashLink for smooth scrolling */}
        <HashLink smooth to="/#about" className="hero-btn">
          Learn More
        </HashLink>
      </div>
    </section>
  );
}
