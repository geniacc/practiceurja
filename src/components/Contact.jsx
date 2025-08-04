import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="aurora-bg">
        <div className="aurora-shape shape-1"></div>
        <div className="aurora-shape shape-2"></div>
        <div className="aurora-shape shape-3"></div>
      </div>
      <div className="contact-wrapper">
        <div className="section-heading">
            <h2>Contact Us</h2>
            <p className="sub-text">We’d love to hear from you! Reach out with any questions, inquiries, or partnership opportunities.</p>
        </div>

        <div className="contact-grid">
          {/* --- Left Side: Contact Details --- */}
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p className="contact-detail-item">
              <FaEnvelope className="contact-icon" />
              <span>
                <strong>Email</strong>
                <a href="mailto:info@urjamobility.in">info@urjamobility.in</a>
              </span>
            </p>
            <p className="contact-detail-item">
              <FaPhone className="contact-icon" />
              <span>
                <strong>Phone</strong>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </span>
            </p>
            <p className="contact-detail-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>
                <strong>Address</strong>
                Urja Mobility HQ, Delhi, India
              </span>
            </p>
          </div>

          {/* --- Right Side: Contact Form --- */}
          <form 
            className="contact-form"
            action="https://formspree.io/f/YOUR_FORM_ID" // Remember to replace this with your Formspree ID
            method="POST"
          >
            <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <textarea name="message" placeholder="How can we help you?" rows="6" required />
            <button type="submit" className="button-primary">
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}