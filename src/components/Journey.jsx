// src/components/Journey.jsx
import React, { useRef } from "react";
import investorVideo from "../assets/investor-journey.mp4";
import investor1 from "../assets/investor1.jpg";
import investor2 from "../assets/investor2.jpg";
import customerVideo from "../assets/customer-journey.mp4";
import customer1 from "../assets/customer1.jpg";
import customer2 from "../assets/customer2.jpg";
import customer3 from "../assets/customer3.jpg";
import "./Journey.css";

export default function Journey() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const reviews = [
    { name: "Ramesh", text: "Zero battery downtime—my daily income rose 30%!", rating: 5, img: customer1 },
    { name: "Priya", text: "Super‑fast swaps and no hidden fees. Love Urja!", rating: 4, img: customer2 },
    { name: "Amit", text: "Reliable support and clear pricing. Highly recommended.", rating: 5, img: customer3 },
  ];

  return (
    <section className="journey-section">
      <h2>Our Journey</h2>

      {/* Scroll Buttons */}
      <div className="scroll-buttons">
        <button onClick={scrollLeft}>&#8592;</button>
        <button onClick={scrollRight}>&#8594;</button>
      </div>

      <div className="journey-scroll-container" ref={scrollRef}>
        {/* Investor Journey */}
        <div className="journey-card">
          <h3>Investor Journey</h3>
          <div className="investor-profiles">
            <div className="profile-card">
              <img src={investor1} alt="Anita Desai" className="profile-img" />
              <div className="profile-name">Anita Desai</div>
              <div className="profile-role">Seed Investor</div>
            </div>

            <div className="profile-card">
              <img src={investor2} alt="Ravi Menon" className="profile-img" />
              <div className="profile-name">Ravi Menon</div>
              <div className="profile-role">Series A Lead</div>
            </div>
          </div>

          <video controls className="journey-video">
            <source src={investorVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="journey-text">
            <p><strong>Anita Desai</strong> seeded ₹2 Crore in 2022 to pilot our battery‑as‑a‑service model.</p>
            <p>By mid‑2023, Series A of ₹10 Crore expanded us to Chennai and Bengaluru.</p>
            <p><strong>Ravi Menon’s</strong> fund is now helping us close Series B to reach 10 cities.</p>
            <p>Each ₹1 Lakh invested helps avoid over <strong>8,000 kg</strong> of CO₂ emissions annually.</p>
          </div>

          <div className="cta-box">
            <button className="cta-button" onClick={() => window.location.href = "#contact"}>
              Join the Journey
            </button>
          </div>
        </div>

        {/* Customer Journey */}
        <div className="journey-card">
          <h3>Customer Journey</h3>

          <video controls className="journey-video">
            <source src={customerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="journey-text">
            <p><strong>Ramesh</strong> swaps batteries in under 2 minutes, covering 120 km/day.</p>
            <p>Priya benefits from our 24/7 swap stations. Amit calls us "the backbone of our business."</p>
          </div>

          <div className="reviews-section">
            <h4>What Our Customers Say</h4>
            <div className="review-cards">
              {reviews.map((r, i) => (
                <div key={i} className="review-card">
                  <img src={r.img} alt={r.name} className="review-img" />
                  <p className="review-text">“{r.text}”</p>
                  <p className="review-author">
                    — {r.name} {Array(r.rating).fill("⭐")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-box">
            <button className="cta-button" onClick={() => window.location.href = "#contact"}>
              Join the Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
