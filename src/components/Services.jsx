import React from "react";
import { HiCodeBracket } from "react-icons/hi2";
import { IoDiamond, IoLogoAppleAppstore } from "react-icons/io5";

const Services = () => {
  return (
    <section className="services-container">
      <h2>Services</h2>

      <div className="service">
        <div>
          <HiCodeBracket className="service-icon" />
          <h3>web development</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
            obcaecati vero.
          </p>
        </div>

        <div>
          <IoDiamond className="service-icon" />
          <h3>web design</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
            obcaecati vero.
          </p>
        </div>

        <div>
          <IoLogoAppleAppstore className="service-icon" />
          <h3>app design</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
            obcaecati vero.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
