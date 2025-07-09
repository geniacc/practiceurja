import React from "react";
import "./AppLinks.css";
import playstoreIcon from "../assets/playstore.png";
import appstoreIcon from "../assets/appstore.png";

export default function AppLinks() {
  return (
    <section className="app-links-section">
      <h2>Get the Urja Mobility App</h2>
      <p>Manage your journeys, track your rides, and stay connected.</p>
      
      <div className="app-links">
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <img src={playstoreIcon} alt="Get it on Google Play" />
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img src={appstoreIcon} alt="Download on the App Store" />
        </a>
      </div>
    </section>
  );
}
