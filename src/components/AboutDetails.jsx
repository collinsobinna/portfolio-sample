import React from "react";
import { Link } from "react-router-dom";
import about from "../images/about-image.jpeg";

const AboutDetails = () => {
  return (
    <section className="aboutDetails-container">
      <div className="aboutDetails-image">
        <img src={about} alt="" />
      </div>

      <div className="aboutDetails-details">
        <div>
          <h2>About</h2>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae,
          eum maiores est enim earum fugiat aspernatur. Fuga qui iste amet
          reiciendis possimus rerum omnis recusandae molestias error
          consequuntur, doloribus inventore reprehenderit officiis. Dolore aut,
          repellendus eius fugiat numquam cumque.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae,
          eum maiores est enim earum fugiat aspernatur. Fuga qui iste amet
          reiciendis possimus rerum omnis recusandae molestias error
          consequuntur, doloribus inventore reprehenderit officiis. Dolore aut,
          repellendus eius fugiat numquam cumque.
        </p>

        <button className="button">
          <Link to="/about" className="btn">
            ABOUT ME
          </Link>
        </button>
      </div>
    </section>
  );
};

export default AboutDetails;
