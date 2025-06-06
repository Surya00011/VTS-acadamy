import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "orange",
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <div style={{ marginBottom: "10px", fontSize: "18px" }}>
        &copy; {new Date().getFullYear()} EduPlatform. All rights reserved.
      </div>
      <div style={{ fontSize: "20px", display: "flex", justifyContent: "center", gap: "20px" }}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "none" }}
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "none" }}
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "none" }}
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "none" }}
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
