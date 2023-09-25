import React from "react";
import project1 from "../images/project-1.jpeg";
import logo from "../images/hero-image.jpeg";

const Project = () => {
  return (
    <section className="project-container">
      <h2>My Projects</h2>

      <div className="blog-grid project">
        <div className="grid">
          <img src={project1} alt="" />

          <h3>Article Title</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            nisi nostrum dignissimos? Odio hic dolore est debitis et magni totam
            beatae explicabo laborum. Nisi tempore quam explicabo id molestiae
            voluptate?
          </p>

          <div>
            <img src={logo} alt="" />

            <p>7 MIN READ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
