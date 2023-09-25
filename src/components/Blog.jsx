import React from "react";
import project1 from "../images/project-1.jpeg";
import project2 from "../images/project-2.jpeg";
import project3 from "../images/project-3.jpeg";
import project4 from "../images/project-4.jpeg";
import logo from "../images/hero-image.jpeg";

const Blog = () => {
  return (
    <section className="blog-container">
      <h2>Blog</h2>

      <div className="blog-grid">
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
        <div className="grid">
          <img src={project3} alt="" />

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

        <div className="grid">
          <img src={project4} alt="" />

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

export default Blog;
