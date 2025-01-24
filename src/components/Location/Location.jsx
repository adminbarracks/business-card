// components/Location.jsx
import React from "react";

const Location = () => {
  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>Location</h2>
      <p>📍 M-38, Outer Circle , Connaught Place New Delhi - 110001</p>
      <p>
        <a href="https://g.co/kgs/iEybpnv" target="_blank" rel="noopener noreferrer" style={styles.link}>
          Get Directions
        </a>
      </p>
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

export default Location;
