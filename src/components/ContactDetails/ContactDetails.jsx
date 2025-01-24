// components/ContactDetails.jsx
import React from "react";

const ContactDetails = () => {
  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>Contact Details</h2>
      <p>📞 Phone: <a href="tel:+919717306110" style={styles.link}>+91-9717306110</a></p>
      <p>📧 Email: <a href="mailto:38barracksmktg@gmail.com" style={styles.link}>38barracksmktg@gmail.com</a></p>
      <p>🌐 Website: <a href="https://www.38barracks.com" target="_blank" rel="noopener noreferrer" style={styles.link}>www.38barracks.com</a></p>
    </div>
  );
};

const styles = {
  section: {
    marginBottom: "20px",
  },
  heading: {
    fontSize: "20px",
    color: "#fff",
    marginBottom: "10px",
  },
  link: {
    color: "#3498db",
    textDecoration: "none",
  },
};

export default ContactDetails;