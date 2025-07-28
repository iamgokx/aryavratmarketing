import React from "react";
import styles from "../styles/PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <h1>Privacy Policy</h1>
      <p className={styles.date}>
        Effective Date: 8 July 2025
        <br />
        Last Updated: 8 July 2025
      </p>
      <p>
        <strong>Company:</strong> Aryavrat Marketing
        <br />
        <strong>Website:</strong> www.aryavratmarketing.com
      </p>

      <p>
        Aryavrat Marketing ("we," "our," or "us") is committed to protecting
        your privacy...
      </p>

      <h2>1. Information We Collect</h2>
      <h3>A. Personal Information</h3>
      <ul>
        <li>Full Name</li>
        <li>Email Address</li>
        <li>Phone Number</li>
        <li>Company Name</li>
        <li>
          Any other details submitted via contact forms, inquiry forms, or
          WhatsApp links
        </li>
      </ul>

      <h3>B. Automatically Collected Information</h3>
      <ul>
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Device type</li>
        <li>Pages visited</li>
        <li>Time and date of access</li>
        <li>Time spent on pages</li>
        <li>Referring website</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Respond to your inquiries or requests</li>
        <li>Offer advertising and marketing services</li>
        <li>Improve the website’s content, layout, and functionality</li>
        <li>Send marketing communications (with your consent)</li>
        <li>Analyse usage trends and optimise our digital strategy</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>3. Sharing and Disclosure of Information</h2>
      <p>
        We do not sell, rent, or lease your personal data to any third
        parties...
      </p>

      <h2>4. Cookies and Tracking Technologies</h2>
      <p>We use cookies and similar technologies to:</p>
      <ul>
        <li>Recognise your browser</li>
        <li>Save your preferences</li>
        <li>Collect data for analytics and site performance</li>
      </ul>

      <h2>5. Data Retention</h2>
      <p>We retain your information only as long as necessary...</p>

      <h2>6. Your Data Protection Rights</h2>
      <ul>
        <li>Request access to your data</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Object to the processing of your data</li>
        <li>Withdraw your consent at any time</li>
      </ul>

      <h2>7. Security of Your Information</h2>
      <p>We implement industry-standard measures to protect your data...</p>

      <h2>8. External Links</h2>
      <p>Our website may contain links to third-party websites...</p>

      <h2>9. Changes to This Privacy Policy</h2>
      <p>We may update this policy periodically...</p>

      <h2>10. Contact Us</h2>
      <p>
        Email: hello@aryavratmarketing.com
        <br />
        Phone: +91 9209016102
        <br />
        Office: Goa, India
      </p>
    </div>
  );
};

export default PrivacyPolicy;
