// src/components/Careers.jsx
import React from "react";
import "./Careers.css";

export default function Careers() {
  return (
    <div className="careers-page">
      <section className="careers-hero">
        <h1>Build the Future of Mobility</h1>
        <p>Join Urja Mobility and be a part of India’s clean energy revolution.</p>
      </section>

      <section className="careers-why">
        <h2>Why Work With Us?</h2>
        <p>
          At Urja Mobility, we believe in innovation, sustainability, and people.
          We offer a dynamic work environment where your ideas can make a real impact.
        </p>
        <ul>
          <li>🌿 Work for a greener planet</li>
          <li>🚀 Accelerate your career growth</li>
          <li>🤝 Supportive and collaborative culture</li>
        </ul>
      </section>

      <section className="careers-openings">
        <h2>Current Openings</h2>

        <div className="job-card">
          <h3>🔧 EV Technician</h3>
          <p>Location: Haldia, West Bengal</p>
          <p>Maintain and troubleshoot electric vehicles and battery systems.</p>
          <button>Apply Now</button>
        </div>

        <div className="job-card">
          <h3>📈 Marketing Executive</h3>
          <p>Location: Kolkata, West Bengal</p>
          <p>Plan, execute, and optimize EV marketing campaigns across channels.</p>
          <button>Apply Now</button>
        </div>

        <div className="job-card">
          <h3>🌍 Franchise Manager</h3>
          <p>Location: Remote</p>
          <p>Onboard and manage Urja Mobility franchise partners across India.</p>
          <button>Apply Now</button>
        </div>
      </section>

      <section className="careers-hiring-process">
        <h2>Our Hiring Process</h2>
        <ol>
          <li>📩 Submit your application</li>
          <li>📞 Telephonic/Virtual interview</li>
          <li>🧪 Technical round (if needed)</li>
          <li>✅ Final offer</li>
        </ol>
      </section>

      <section className="careers-footer-cta">
        <h2>Ready to make a difference?</h2>
        <p>Email your resume to <strong>careers@urjamobility.com</strong></p>
      </section>
    </div>
  );
}
