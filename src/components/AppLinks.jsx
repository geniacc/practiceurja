import React from "react";
import "./AppLinks.css"; // This import for the styles is still essential

// --- SVG Icon Components ---
// ✅ UPDATED: The SVG code is now modified for high visibility on dark backgrounds.

const PlayStoreBadge = () => (
  <svg width="135" height="40" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* FIX: Changed fill from black to white */}
    <rect width="135" height="40" rx="6" fill="white"/>
    <path d="M13.81 20L5.33 11.52V28.48L13.81 20Z" fill="#99A93A"/>
    <path d="M16.48 17.33L13.81 20L16.48 22.67L26.33 12.82L16.48 17.33Z" fill="#FBC02D"/>
    <path d="M26.33 27.18L16.48 22.67L13.81 20L5.33 28.48C6.55 29.7 8.32 30.13 10.05 29.4L26.33 27.18Z" fill="#EA4335"/>
    <path d="M26.33 12.82L10.05 10.6C8.32 9.87 6.55 10.3 5.33 11.52L13.81 20L26.33 12.82Z" fill="#4285F4"/>
    {/* FIX: Changed text fill from white to black */}
    <g fill="black">
      <text x="37" y="19" fontFamily="Arial, sans-serif" fontSize="6" fontWeight="bold">GET IT ON</text>
      <text x="37" y="30" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold">Google Play</text>
    </g>
  </svg>
);

const AppStoreBadge = () => (
  <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* FIX: Changed fill from black to white */}
    <rect width="120" height="40" rx="6" fill="white"/>
    <path d="M17.47 16.5C17.55 16.27 17.65 16.05 17.77 15.84C18.25 14.99 18.89 14.28 19.69 13.72C20.49 13.15 21.41 12.87 22.44 12.87C22.56 12.87 22.68 12.88 22.8 12.89C21.75 12.18 20.59 11.77 19.33 11.77C18.29 11.77 17.3 12.06 16.38 12.63C15.46 13.2 14.77 14 14.33 14.99C13.43 16.92 13.52 19.22 14.54 20.95C15.08 21.86 15.82 22.6 16.74 23.15C17.66 23.7 18.68 23.96 19.72 23.96C20.8 23.96 21.79 23.68 22.7 23.1C23.61 22.52 24.31 21.76 24.78 20.83C24.83 20.73 24.88 20.63 24.93 20.53C24.92 20.53 23.23 19.9 23.23 17.58C23.23 16.37 23.99 15.65 24.97 15.22C24.21 14.28 23.2 13.62 22.03 13.23C21.05 14.07 20.31 15.15 19.83 16.46C19.35 15.93 18.49 15.42 17.47 16.5Z" fill="black"/>
    {/* FIX: Changed text fill from white to black */}
    <g fill="black">
        <text x="35" y="19" fontFamily="Arial, sans-serif" fontSize="6" fontWeight="bold">Download on the</text>
        <text x="35" y="30" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold">App Store</text>
    </g>
  </svg>
);


export default function AppLinks() {
  return (
    <section className="app-links-bar">
      <div className="app-links-bar-content">
        <p className="app-bar-text">
          📱 <strong>Get the Urja Mobility App</strong>
        </p>
        <div className="app-store-icons">
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <PlayStoreBadge />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <AppStoreBadge />
          </a>
        </div>
      </div>
    </section>
  );
}