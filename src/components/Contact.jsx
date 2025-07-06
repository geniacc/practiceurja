import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <p className="sub-text">We’d love to hear from you! Reach out with any questions or inquiries.</p>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Email:</strong> <a href="mailto:info@urjamobility.in">info@urjamobility.in</a></p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> Urja Mobility HQ, Delhi, India</p>
        </div>

        {/* Plug your Formspree endpoint in action="" */}
        <form 
          className="contact-form"
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
