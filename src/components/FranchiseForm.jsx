import React, { useState } from "react";
import "./FranchiseForm.css"; // ✅ MAKE SURE THIS IMPORT IS AT THE TOP
import { FaPaperPlane } from "react-icons/fa";

export default function FranchiseForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission to a backend here.
    // For this example, we'll just show the success message.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="franchise-form-page">
        <div className="submission-success-card">
          <h3>Thank You!</h3>
          <p>We have received your inquiry and will be in touch with you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="franchise-form-page">
      <form className="franchise-form" onSubmit={handleSubmit}>
        <h2>Franchise Inquiry</h2>
        <p className="form-subtext">We’re excited to learn about your interest in Urja Mobility.</p>

        <div className="form-group">
          <input type="text" id="name" required placeholder=" " />
          <label htmlFor="name">Full Name</label>
        </div>

        <div className="form-group">
          <input type="email" id="email" required placeholder=" " />
          <label htmlFor="email">Email Address</label>
        </div>

        <div className="form-group">
          <input type="tel" id="phone" required placeholder=" " />
          <label htmlFor="phone">Phone Number</label>
        </div>

        <div className="form-group">
          <input type="text" id="location" required placeholder=" " />
          <label htmlFor="location">Location (City/State)</label>
        </div>

        <div className="form-group">
          <textarea id="message" rows="5" required placeholder=" "></textarea>
          <label htmlFor="message">Tell us more about your interest</label>
        </div>

        <button type="submit" className="button-primary">
          Submit Inquiry <FaPaperPlane />
        </button>
      </form>
    </div>
  );
}