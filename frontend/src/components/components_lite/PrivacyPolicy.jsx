import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", padding: "20px", color: "#333" }}>
      <h1 style={{ color: "#2c3e50", textAlign: "center", marginBottom: "20px" }}>Privacy Policy for Job Portal</h1>

      <h2 style={{ color: "#34495e", marginTop: "20px" }}>1. Introduction</h2>
      <p>
        This Privacy Policy outlines how we collect, use, and protect your
        information when you visit our job portal website.
      </p>

      <h2 style={{ color: "#34495e", marginTop: "20px" }}>2. Information We Collect</h2>
      <ul style={{ paddingLeft: "20px" }}>
        <li>
          <strong>Personal Information:</strong>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Resume/CV</li>
          </ul>
        </li>
        <li>
          <strong>Usage Data:</strong>
          <ul style={{ paddingLeft: "20px" }}>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
          </ul>
        </li>
      </ul>

      <h2 style={{ color: "#34495e", marginTop: "20px" }}>3. How We Use Your Information</h2>
      <ul style={{ paddingLeft: "20px" }}>
        <li>To provide and maintain our services</li>
        <li>To notify you about changes to our services</li>
        <li>To allow you to participate in interactive features</li>
        <li>To provide customer support</li>
        <li>
          To gather analysis or valuable information so that we can improve our
          services
        </li>
        <li>To monitor the usage of our services</li>
        <li>To detect, prevent, and address technical issues</li>
      </ul>

      <h2 style={{ color: "#34495e", marginTop: "20px" }}>4. Data Security</h2>
      <p>
        We take the security of your personal information seriously and
        implement appropriate technical and organizational measures to protect
        it.
      </p>

      <h2 style={{ color: "#34495e", marginTop: "20px" }}>5. Sharing Your Information</h2>
      <p>
        We do not sell or rent your personal information to third parties. We
        may share your information with:
      </p>
      <ul style={{ paddingLeft: "20px" }}>
        <li>Service providers who assist us in operating our website</li>
        <li>Law enforcement agencies if required by law</li>
      </ul>

      <h2 style={{ color: "#34495e", marginTop: "20px" }}>6. Your Rights</h2>
      <p>You have the right to:</p>
      <ul style={{ paddingLeft: "20px" }}>
        <li>Access your personal information</li>
        <li>Request correction of your personal information</li>
        <li>Request deletion of your personal information</li>
      </ul>

      <h2 style={{ color: "#34495e", marginTop: "20px" }}>7. Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page.
      </p>

      <h2 style={{ color: "#34495e", marginTop: "20px" }}>8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at <a href="mailto:your-email@example.com" style={{ color: "#2980b9", textDecoration: "none" }}>your-email@example.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
