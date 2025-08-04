import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Association.css";

// A reusable Form component defined within the same file
const InquiryForm = ({ formType, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your ${formType} inquiry! We will be in touch soon.`);
    onClose();
  };

  return (
    <div className="inquiry-form-container">
      <h2>{formType} Inquiry</h2>
      <p>Please fill out the form below to proceed.</p>
      <form onSubmit={handleSubmit} className="inquiry-form">
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <input type="tel" name="phone" placeholder="Phone Number" required />
        <textarea name="message" rows="4" placeholder="Tell us more about your interest..."></textarea>
        <button type="submit">Submit Inquiry</button>
      </form>
    </div>
  );
};

export default function Association() {
  // State to manage the modal's visibility and which form to show
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState("");

  const openFormModal = (type) => {
    setFormType(type);
    setIsModalOpen(true);
  };

  const closeFormModal = () => {
    setIsModalOpen(false);
    setFormType("");
  };

  return (
    <>
      <div className="association-container">
        <h1 className="association-title">Partner With Us</h1>
        <p className="association-subtitle">Choose how you’d like to associate with Urja Mobility</p>

        <div className="association-grid">
          <div className="association-card">
            <h2>Franchise Partner</h2>
            <p>
              Join us as a franchise partner to expand Urja Mobility’s battery leasing network.
              We provide full operational support, staff training, and access to high-demand EV zones.
            </p>
            <HashLink smooth to="/#franchise">
              <button>Apply as Franchise</button>
            </HashLink>
          </div>

          <div className="association-card">
            <h2>Retail Customer</h2>
            <p>
              Access affordable and sustainable energy for your electric vehicles through our
              subscription or pay-as-you-go battery plans.
            </p>
            {/* ✅ Updated button with onClick handler */}
            <button onClick={() => openFormModal('Retail Customer')}>Join as Customer</button>
          </div>

          <div className="association-card">
            <h2>B2B Partners</h2>
            <p>
              Collaborate with us to provide scalable battery leasing and swapping infrastructure
              for EV fleet operators, last-mile delivery, and logistics companies.
            </p>
            {/* ✅ Updated button with onClick handler */}
            <button onClick={() => openFormModal('B2B Partner')}>Partner with Us</button>
          </div>

          <div className="association-card">
            <h2>Battery Manufacturer</h2>
            <p>
              Supply high-quality lithium-ion or LFP batteries to support our growing network.
              We work with top manufacturers to meet evolving EV demands.
            </p>
            {/* ✅ Updated button with onClick handler */}
            <button onClick={() => openFormModal('Battery Manufacturer')}>Become a Supplier</button>
          </div>

          <div className="association-card">
            <h2>Become an Investor</h2>
            <p>
              Interested in powering India’s clean mobility revolution? Submit an investor inquiry
              and explore partnership opportunities with Urja Mobility.
            </p>
            {/* ✅ Updated button with onClick handler */}
            <button onClick={() => openFormModal('Investor')}>Invest in Urja</button>
          </div>
        </div>
      </div>

      {/* ✅ JSX for the Modal, which renders when isModalOpen is true */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeFormModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeFormModal}>&times;</button>
            <InquiryForm formType={formType} onClose={closeFormModal} />
          </div>
        </div>
      )}
    </>
  );
}