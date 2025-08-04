import React, { useState } from "react";
import { FaCommentDots } from "react-icons/fa"; // ✅ Add icon import

// Import all your page sections
import Hero from "./Hero";
import About from "./About";
import Products from "./Products";
import Franchise from "./Franchise";
import Contact from "./Contact";
import MetalPricesBar from "./MetalPricesBar";
import Journey from "./Journey";
import LiveStats from "./LiveStats";
import AppLinks from "./AppLinks";
import FeedbackForm from "./FeedbackForm";
import Media from "./Media";
import Modal from "./Modal";


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* --- Main sections re-ordered for a better user flow --- */}
   <Hero />
    <LiveStats />
    <MetalPricesBar />
      
      <section id="about">
        <About />
      </section>
      
      <section id="products">
        <Products />
      </section>
      
      <section id="journey">
        <Journey />
      </section>

      <section id="media">
        <Media />
      </section>
      
      <section id="franchise">
        <Franchise />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <AppLinks />

      {/* ✅ Upgraded Feedback Button using the theme's reusable class */}
      <div className="feedback-button-container">
        <button className="button-primary" onClick={openModal}>
          <FaCommentDots /> Give Feedback
        </button>
      </div>

      {/* ✅ Feedback Modal wired up to the button */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <FeedbackForm />
      </Modal>
    </>
  );
}