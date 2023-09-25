import React from "react";
import { Link } from "react-router-dom";
import hero from "../images/hero-image.jpeg";
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaBehance,
  FaInstagram,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-details">
        <div className="underline"></div>

        <h1>I'm Collins</h1>

        <p>Freelance Web Developer & Mobile UI/UX Designer</p>

        <button className="button">
          <Link to="/contact" className="btn">
            HIRE ME
          </Link>
        </button>

        <div className="icons">
          <a href="https://www.youtube.com/">
            <FaFacebook className="icon" />
          </a>
          <a href="https://www.youtube.com/">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://www.youtube.com/">
            <FaYoutube className="icon" />
          </a>
          <a href="https://www.youtube.com/">
            <FaBehance className="icon" />
          </a>
          <a href="https://www.youtube.com/">
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={hero} alt="" />

        <div className="hero-absolute"></div>
      </div>
    </section>
  );
};

export default Hero;
