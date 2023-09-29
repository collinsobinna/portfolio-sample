import React, { useState } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <section className="navbar-container">
      <div className="logo">
        {/* <img src={logo} alt="" /> */}
        <h1>
          Collins <span>Obinna</span>
        </h1>
      </div>

      <div>
        <ul
          className={click ? "navbar-links active" : "navbar-links"}
          onClick={handleClick}
        >
          <li>
            <Link to="/portfolio-sample" className="mainLink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="mainLink">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="mainLink">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="mainLink">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="hamburger" onClick={handleClick}>
        <GiHamburgerMenu />
      </div>
    </section>
  );
};

export default NavBar;
