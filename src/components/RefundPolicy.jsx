import React from "react";
import "./Policies.css";

export default function RefundPolicy() {
  return (
    <div className="policy-detail">
      {/* ✅ FIX: Added the main page title */}
      <h1>Refund Policy</h1>

      <h3>2.1 Security Deposits and Onboarding Payments</h3>
      <p>
        Security deposits and onboarding payments are refundable only upon successful return and inspection of all leased assets, minus deductions for damages, unpaid dues, or penalties.
      </p>
      <p>
        Refunds are processed to the original payment method within 7–15 business days after asset inspection and verification, per legal requirements.
      </p>

      <h3>2.2 Lease Payments</h3>
      <ul>
        <li>Monthly lease payments, once paid, are non-refundable, even if the customer discontinues use before the end of the paid period.</li>
        <li>In case of order cancellation before delivery, any prepaid amount will not be refunded, as they will be used for administrative or delivery charges or both.</li>
      </ul>

      <h3>2.3 Forfeiture and Deboarding</h3>
      <p>
        If a customer defaults on monthly payments and fails to clear dues within the stipulated grace and recovery period, the battery will be deactivated and physically recovered. All onboarding and security deposits will be forfeited and are non-refundable.
      </p>

      <h3>2.4 Refunds for Defective or Unsatisfactory Products</h3>
      <p>
        For defective or unsatisfactory products, a full refund (excluding admin charges) will be processed within 7–15 days of return, as per the Consumer Protection Act, 2019.
      </p>

      <h3>2.5 Contact Information</h3>
      <p>
        Urja Mobility, Netaji Subhash Place, Pitampura, 11th Floor, BestSky Tower, New Delhi, 110034, India<br />
        <strong>Phone:</strong> <a href="tel:+919871105412">+91 987110 5412</a><br />
        <strong>Email:</strong> <a href="mailto:info@urjamobility.in">info@urjamobility.in</a>
      </p>

      <p>
        This policy ensures full compliance with Indian law, including the Consumer Protection Act, 2019, Consumer Protection (E-Commerce) Rules, 2020, and the Digital Personal Data Protection Act, 2023.
      </p>
    </div>
  );
}