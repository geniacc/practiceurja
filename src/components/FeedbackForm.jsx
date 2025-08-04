import React, { useState } from "react";
import "./FeedbackForm.css"; // ✅ MAKE SURE THIS IMPORT IS AT THE TOP
import { FaPaperPlane } from "react-icons/fa";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the data to your server here.
    setSubmitted(true); // Show the success message
  };

  return (
    <div className="feedback-wrapper">
      {submitted ? (
        <div className="submission-success-card">
          <h3>Thank You!</h3>
          <p>We've received your feedback and appreciate you helping us improve.</p>
        </div>
      ) : (
        <div className="feedback-card">
          <h2 className="feedback-title">We Value Your Feedback</h2>
          <p className="feedback-subtitle">
            Let us know what we’re doing well or what we can improve.
          </p>
          <form onSubmit={handleSubmit} className="feedback-form">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Your Email</label>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="message">Your Feedback</label>
            </div>
            <button type="submit" className="button-primary">
              Submit Feedback <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}