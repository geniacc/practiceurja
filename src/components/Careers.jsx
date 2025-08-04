import React from "react";
import "./Careers.css";
import { FaPaperPlane, FaLeaf, FaChartLine, FaUserFriends } from "react-icons/fa";

export default function Careers() {
  return (
    <div className="careers-page-wrapper">
      {/* Aurora background is handled by the CSS */}
      <div className="aurora-bg">
        <div className="aurora-shape shape-1"></div>
        <div className="aurora-shape shape-2"></div>
        <div className="aurora-shape shape-3"></div>
      </div>

      <div className="careers-content">
        <section className="careers-hero">
          <div className="hero-badge">Join Our Team</div>
          <h1>Build the Future of Mobility</h1>
          <p>Join Urja Mobility and be a part of India’s clean energy revolution.</p>
        </section>

        <section className="why-us-grid">
          <div className="info-card">
            <div className="icon-wrapper"><FaLeaf /></div>
            <h3>Work for a Greener Planet</h3>
            <p>Contribute to a sustainable future by helping accelerate the adoption of electric vehicles.</p>
          </div>
          <div className="info-card">
            <div className="icon-wrapper"><FaChartLine /></div>
            <h3>Accelerate Your Growth</h3>
            <p>We offer a dynamic work environment where your ideas can make a real impact on a growing industry.</p>
          </div>
          <div className="info-card">
            <div className="icon-wrapper"><FaUserFriends /></div>
            <h3>A Collaborative Culture</h3>
            <p>At Urja Mobility, we believe in innovation, sustainability, and people.</p>
          </div>
        </section>

        <section className="careers-openings">
          <h2>Current Openings</h2>
          <div className="job-listings">
            <div className="job-card">
              <div className="job-card-header">
                <h3>🔧 EV Technician</h3>
                <span>Haldia, West Bengal</span>
              </div>
              <p>Maintain and troubleshoot electric vehicles and battery systems.</p>
              <button className="apply-btn">Apply Now</button>
            </div>

            <div className="job-card">
              <div className="job-card-header">
                <h3>📈 Marketing Executive</h3>
                <span>Kolkata, West Bengal</span>
              </div>
              <p>Plan, execute, and optimize EV marketing campaigns across channels.</p>
              <button className="apply-btn">Apply Now</button>
            </div>

            <div className="job-card">
              <div className="job-card-header">
                <h3>🌍 Franchise Manager</h3>
                <span>Remote</span>
              </div>
              <p>Onboard and manage Urja Mobility franchise partners across India.</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          </div>
        </section>
        
        <section className="careers-footer-cta">
          <div className="icon-wrapper"><FaPaperPlane /></div>
          <h2>Ready to make a difference?</h2>
          <p>Email your resume to <strong>careers@urjamobility.com</strong></p>
        </section>
      </div>
    </div>
  );
}