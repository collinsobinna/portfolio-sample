import React from "react";
import project1 from "../images/project-1.jpeg";
import project2 from "../images/project-2.jpeg";
import project3 from "../images/project-3.jpeg";
import project4 from "../images/project-4.jpeg";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <section className="works-container">
      <h2>latest works</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        repudiandae cupiditate ea facilis incidunt, non sapiente! Debitis
        magnam, earum assumenda obcaecati cum quaerat facere ratione molestiae
        dignissimos aliquid blanditiis architecto voluptates delectus voluptate
        animi nulla! Autem explicabo perspiciatis officia ea.
      </p>

      <div className="grid-container">
        <div className="grid-item">
          <img src={project1} alt="" />

          <div className="absolute">
            <Link to="/projects" className="absolute-details">
              <h2>Project Title</h2> <p>Client Name</p>
            </Link>
          </div>
        </div>

        <div className="grid-item">
          <img src={project2} alt="" />

          <div className="absolute">
            <Link to="/projects" className="absolute-details">
              <h2>Project Title</h2> <p>Client Name</p>
            </Link>
          </div>
        </div>

        <div className="grid-item">
          <img src={project3} alt="" />

          <div className="absolute">
            <Link to="/projects" className="absolute-details">
              <h2>Project Title</h2> <p>Client Name</p>
            </Link>
          </div>
        </div>

        <div className="grid-item">
          <img src={project4} alt="" />

          <div className="absolute">
            <Link to="/projects" className="absolute-details">
              <h2>Project Title</h2> <p>Client Name</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
