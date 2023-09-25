import React from "react";
import Hero from "../components/Hero";
import AboutDetails from "../components/AboutDetails";
import Services from "../components/Services";
import Works from "../components/Works";
import Connect from "../components/Connect";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutDetails />
      <Services />
      <Works />
      <Connect />
      <Blog />
    </>
  );
};

export default Home;
