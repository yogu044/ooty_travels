import React from "react";
import "../css/terms.css"

export default function TermsAndConditions() {
  return (
    <div className="legal-page">
      <h1>Terms & Conditions</h1>
      <p><strong>Last Updated:</strong> {new Date().toDateString()}</p>

      <h2>1. About Us</h2>
      <p>
        Ooty Tours provides travel information, tour packages, and booking
        assistance for destinations in and around Ooty, Tamil Nadu.
      </p>

      <h2>2. Use of Website</h2>
      <ul>
        <li>Use this site only for lawful purposes.</li>
        <li>No misuse, hacking, or fraudulent activity.</li>
        <li>No unauthorized access attempts.</li>
      </ul>

      <h2>3. Bookings & Payments</h2>
      <p>
        All bookings are subject to availability. Prices may change based on
        demand and season. Confirmation will be sent via WhatsApp or Email.
      </p>

      <h2>4. Cancellations & Refunds</h2>
      <p>
        Cancellation policies vary by package. Refunds will be processed as per
        agreed conditions during booking.
      </p>

      <h2>5. Liability</h2>
      <p>
        Ooty Tours is not responsible for delays, natural calamities, or
        third-party failures.
      </p>

      <h2>6. Contact</h2>
      <p>
        Phone: +91 86809 59253 <br />
        Email: support@ootytours.com
      </p>
    </div>
  );
}
