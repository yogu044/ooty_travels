import React from "react";
import "../css/terms.css"

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <h1>Privacy Policy</h1>
      <p><strong>Last Updated:</strong> {new Date().toDateString()}</p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Name</li>
        <li>Phone Number</li>
        <li>Email</li>
        <li>Tour enquiry details</li>
      </ul>

      <h2>How We Use Your Data</h2>
      <p>
        Your data is used only to respond to enquiries, process bookings, and
        improve our services.
      </p>

      <h2>Data Protection</h2>
      <p>
        We use reasonable security measures to protect your personal data.
      </p>

      <h2>Cookies</h2>
      <p>
        We may use cookies to enhance your browsing experience.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We may integrate WhatsApp and analytics tools which follow their own
        privacy policies.
      </p>

      <h2>Contact</h2>
      <p>
        Phone: +91 86809 59253 <br />
        Email: support@ootytours.com
      </p>
    </div>
  );
}
