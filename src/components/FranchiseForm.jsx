import React from "react";
import "./FranchiseForm.css";

export default function FranchiseForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We’ve received your inquiry.");
  };

  return (
    <div className="franchise-form-page">
      <h2>Franchise Inquiry</h2>
      <p className="form-subtext">We’re excited to learn about your interest in Urja Mobility.</p>

      <form className="franchise-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" id="name" required />
          <label htmlFor="name">Full Name</label>
        </div>

        <div className="form-group">
          <input type="email" id="email" required />
          <label htmlFor="email">Email Address</label>
        </div>

        <div className="form-group">
          <input type="tel" id="phone" required />
          <label htmlFor="phone">Phone Number</label>
        </div>

        <div className="form-group">
          <input type="text" id="location" required />
          <label htmlFor="location">Location (City/State)</label>
        </div>

        <div className="form-group">
          <textarea id="message" rows="5" required></textarea>
          <label htmlFor="message">Tell us more</label>
        </div>

        <button type="submit">Submit Inquiry</button>
      </form>
    </div>
  );
}
