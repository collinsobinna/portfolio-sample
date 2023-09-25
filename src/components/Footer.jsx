import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaBehance,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer-container">
      <div className="icons">
        <a href="https://www.youtube.com/">
          <FaFacebook className="icon footer-icon" />
        </a>
        <a href="https://www.youtube.com/">
          <FaLinkedin className="icon footer-icon" />
        </a>
        <a href="https://www.youtube.com/">
          <FaYoutube className="icon footer-icon" />
        </a>
        <a href="https://www.youtube.com/">
          <FaBehance className="icon footer-icon" />
        </a>
        <a href="https://www.youtube.com/">
          <FaInstagram className="icon footer-icon" />
        </a>
      </div>

      <p>{currentYear} Collins Obinna. All Rights Reserved</p>
    </section>
  );
};

export default Footer;
