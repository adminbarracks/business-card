// components/SocialMedia.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  const icons = [
    { href: "https://www.facebook.com/38barracks", icon: <FaFacebook />, alt: "Facebook" },
    { href: "https://x.com/38barracks", icon: <FaTwitter />, alt: "Twitter" },
    { href: "https://www.instagram.com/38barracks/?hl=en", icon: <FaInstagram />, alt: "Instagram" },
    { href: "https://www.youtube.com/@38barracks", icon: <FaYoutube />, alt: "YouTube" },
  ];

  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>Follow Us</h2>
      <div style={styles.icons}>
        {icons.map((icon, index) => (
          <a
            key={index}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
            title={icon.alt}
          >
            {icon.icon}
          </a>
        ))}
      </div>
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
  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  iconLink: {
    fontSize: "30px",
    color: "#fff",
    textDecoration: "none",
  },
};

export default SocialMedia;
