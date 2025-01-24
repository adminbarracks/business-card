// components/Header.jsx
import React from "react";
import img1 from "../img/file.png"

const Header = () => {
  return (
    <div style={styles.header}>
      <img src={img1} alt="Logo" style={styles.logo} />
      <h1 style={styles.title}>Pushpendra Choudhary</h1>
      <p style={styles.subtitle}>Happiness Expert at 38 Barracks</p>
    </div>
  );
};

const styles = {
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  logo: {
    width: "100px",
    borderRadius: "50%",
  },
  title: {
    margin: "10px 0 5px",
    fontSize: "24px",
    color: "#fff",
  },
  subtitle: {
    fontSize: "16px",
    color: "#fff",
  },
};

export default Header;