import React from "react";
import "./PartnerSection.css";
import partnerImage from "../assets/partner.jpg";

export default function PartnerSection() {
  return (
    <section className="partner-section">
      <div className="partner-left">
        <h2>Join as a Partner</h2>
        <p>
          Be part of the clean mobility revolution. Collaborate with Urja Mobility and grow your business while driving positive change.
        </p>
        <a href="/franchise-inquiry" className="partner-btn">Become a Partner</a>
      </div>

      <div className="partner-right">
        <div className="journey-card">
          <h3>Your Projected Journey with Us</h3>
          <ul>
            <li>✅ Setup your EV operations with expert support</li>
            <li>✅ Deploy batteries with flexible leasing options</li>
            <li>✅ Earn consistent revenue from daily operations</li>
            <li>✅ Expand your fleet and scale your business</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
