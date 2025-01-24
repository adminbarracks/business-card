// components/CallToAction.jsx
import React from "react";

const CallToAction = () => {
  return (
    <div style={styles.cta}>
      <a href="https://wa.me/919717306110" target="_blank" rel="noopener noreferrer" style={styles.button}>
        Reserve Now
      </a>
    </div>
  );
};

const styles = {
  cta: {
    textAlign: "center",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    background: "#e74c3c",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default CallToAction;
