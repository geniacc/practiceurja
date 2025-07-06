import React from "react";
import "./Policies.css";

export default function PrivacyPolicy() {
  return (
    <div className="policy-detail">
      <h1>Privacy Policy</h1>
      <p>
        Urja Mobility (“we”, “our”, or “us”) is committed to protecting your privacy
        and ensuring the security of your personal data. This Privacy Policy describes
        how we collect, use, disclose, and safeguard your information when you use our
        website, mobile applications, and services.
      </p>

      <h3>Applicability</h3>
      <p>
        This Privacy Policy applies to all users who access our website, apps, or services.
        By using our services, you signify your acceptance of this policy. If you do not agree,
        please do not use our website or provide us with your information.
      </p>

      <h3>Information We Collect</h3>
      <ul>
        <li>Identity & Contact Data: Name, address, email, phone, IDs, and KYC documents.</li>
        <li>Financial Data: Payment details, transaction history, deposits, onboarding fees, credit scores.</li>
        <li>Vehicle & Asset Data: Information about your vehicle, leased battery, charger usage, and condition.</li>
        <li>Technical & Usage Data: Battery performance, location, IoT telemetry, app usage, IP address.</li>
        <li>Communication Data: Customer support interactions and service requests.</li>
      </ul>

      <h3>Data Sharing and Security</h3>
      <p>
        We do not sell or rent personal data. Data is shared with trusted service providers for service delivery only.
        Visit our <a href="/policies">Policies Page</a> for more details.
      </p>

      <h3>Contact Information</h3>
      <p>
        For questions, contact us at:
        <br />
        Urja Mobility, Netaji Subhash Place, Pitampura, 11th Floor, BestSky Tower, New Delhi, India
        <br />
        Phone: <a href="tel:+919871105412">+91 98711 05412</a>
        <br />
        Email: <a href="mailto:info@urjamobility.in">info@urjamobility.in</a>
      </p>
    </div>
  );
}
