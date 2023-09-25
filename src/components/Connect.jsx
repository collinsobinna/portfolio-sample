import React from "react";
import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <section className="connect-container">
      <div className="connect-details">
        <h2>Let's Get In Touch</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione
          perferendis exercitationem sit. Beatae eius commodi officiis rem
          soluta ratione dignissimos quisquam tempore laudantium, porro vitae
          cupiditate dicta magni quas corrupti aperiam, rerum minus odio totam
          repellendus delectus nostrum veniam!
        </p>

        <button className="button">
          <Link to="/contact" className="btn">
            CONTACT ME
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Connect;
