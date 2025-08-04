import React, { useEffect } from "react";
import customerVideo from "../assets/customer-journey.mp4";
import customer1 from "../assets/customer1.jpg";
import customer2 from "../assets/customer2.jpg";
import customer3 from "../assets/customer3.jpg";
import milestone2022 from "../assets/member1.jpg";
import milestone2023 from "../assets/member2.jpg";
import milestone2024 from "../assets/member3.jpg";
import milestone2025 from "../assets/member4.jpg";
import "./Journey.css";

export default function Journey() {
  const reviews = [
    { name: "Ramesh", text: "Zero battery downtime—my daily income rose 30%", rating: 5, img: customer1 },
    { name: "Priya", text: "Super-fast swaps and no hidden fees. Love Urja!", rating: 4, img: customer2 },
    { name: "Amit", text: "Reliable support and clear pricing. Highly recommended.", rating: 5, img: customer3 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll(".timeline-item");
    targets.forEach((target) => observer.observe(target));

    return () => targets.forEach((target) => observer.unobserve(target));
  }, []);

  return (
    <section className="journey-section" id="journey">
      <div className="aurora-bg">
        <div className="aurora-shape shape-1"></div>
        <div className="aurora-shape shape-2"></div>
        <div className="aurora-shape shape-3"></div>
      </div>

      <div className="journey-wrapper">
        <div className="journey-header">
          <h2>Our Journey & Yours</h2>
          <p className="journey-intro">
            From a pilot in Delhi to a nationwide network, follow our story and see how you can be a part of it. We are revolutionizing the way last-mile logistics work in India with cleaner energy and smarter tools.
          </p>
        </div>

        <div className="journey-timeline">

          {/* --- Milestone 1 --- */}
          <div className="timeline-item">
            <div className="timeline-text-block">
              <h3><span className="timeline-year-tag">2022</span> Foundation</h3>
              {/* ✅ Content Updated */}
              <p>Urja Mobility was founded with a vision to revolutionize energy access by offering affordable, sustainable lithium-ion battery leasing solutions for India’s growing electric mobility ecosystem.</p>
            </div>
            <div className="timeline-media-block">
              <img src={milestone2022} alt="Pilot launch in Delhi" className="content-image" />
            </div>
          </div>
          
          {/* --- Milestone 2 --- */}
          <div className="timeline-item">
            <div className="timeline-text-block">
              <h3><span className="timeline-year-tag">2023</span> Scaling Up</h3>
              {/* ✅ Content Updated */}
              <p>With 7,000+ batteries already deployed, Urja Mobility is rapidly scaling operations, enhancing last-mile energy access, and building India’s most efficient battery leasing network for electric mobility.</p>
            </div>
            <div className="timeline-media-block">
              <img src={milestone2023} alt="Expansion to metro cities" className="content-image" />
            </div>
          </div>

          {/* --- Milestone 3 --- */}
          <div className="timeline-item">
            <div className="timeline-text-block">
              <h3><span className="timeline-year-tag">2024</span> Tech Innovation</h3>
              {/* ✅ Content Updated */}
              <p>Urja Mobility leverages advanced battery analytics, remote monitoring, and modular IoT integrations to ensure high uptime, predictive maintenance, and smarter energy usage across our leasing network.</p>
            </div>
            <div className="timeline-media-block">
              <img src={milestone2024} alt="AI-powered smart swaps" className="content-image" />
            </div>
          </div>
          
          {/* --- How It Works --- */}
          <div className="timeline-item">
            <div className="timeline-text-block">
              <h3><span className="timeline-year-tag">Today</span> How it Works</h3>
              {/* ✅ Content Updated */}
              <ul className="how-it-works-steps">
                <li>Customers lease lithium-ion batteries on flexible terms.</li>
                <li>Real-time tracking ensures usage transparency and efficiency.</li>
                <li>Smart diagnostics enable proactive maintenance.</li>
                <li>Affordable monthly payments reduce upfront EV costs.</li>
              </ul>
            </div>
            <div className="timeline-media-block">
              <video controls muted autoPlay loop className="content-video">
                <source src={customerVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* --- Customer Reviews --- */}
          <div className="timeline-item">
            <div className="timeline-text-block">
              <h4>What Our Customers Say</h4>
              <p>Real feedback from drivers who rely on Urja every day to power their livelihoods and contribute to a cleaner India.</p>
            </div>
            <div className="timeline-media-block">
              <div className="review-cards">
                {reviews.map((r, i) => (
                  <div key={i} className="review-card">
                    <img src={r.img} alt={r.name} className="review-img" />
                    <div className="review-details">
                      <p className="review-text">“{r.text}”</p>
                      <p className="review-author">-- {r.name} <span>{Array(r.rating).fill("⭐").join("")}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- Milestone 4 --- */}
          <div className="timeline-item">
            <div className="timeline-text-block">
              <h3><span className="timeline-year-tag">2025 & Beyond</span> Future Planning</h3>
              {/* ✅ Content Updated */}
              <p>Urja Mobility envisions becoming India’s leading battery asset management company, driving recurring revenue growth through scale, optimized utilization, and innovative financing models in the electric mobility ecosystem.</p>
            </div>
            <div className="timeline-media-block">
              <img src={milestone2025} alt="Future vision" className="content-image" />
            </div>
          </div>
        </div>

        <div className="cta-summary-box">
          <h4>Be Part of the EV Revolution</h4>
          <p>Join 10,000+ drivers already powering India forward with clean mobility. Drive smarter, earn more, and help build a sustainable tomorrow.</p>
          <button className="cta-button">Start Your Journey</button>
        </div>
      </div>
    </section>
  );
}