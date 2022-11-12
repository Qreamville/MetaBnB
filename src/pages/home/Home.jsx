import React from "react";
import "./home.css";
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Showcase from "./components/Showcase";
import Discover from "./components/Discover";

const Home = () => {
  return (
    <>
      <Hero />
      <Brand />
      <Showcase />
      <Discover />
    </>
  );
};

export default Home;
