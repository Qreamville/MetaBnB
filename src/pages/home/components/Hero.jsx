import React from "react";
import Hero from "../../../assets/image/hero-image.png";

const Home = () => {
  return (
    <header className="hero">
      <div className="flex-1 mb-0 md:mb-16">
        <h2 className="mb-12">
          Rent a <span>Place</span> away from <span>Home</span> in the
          <span> Metaverse</span>
        </h2>
        <p>
          We provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone.
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="text" placeholder="Search for location" />
          <button>Search</button>
        </form>
      </div>
      <div className="flex-1 w-[304px] sm:w-[459px] h-auto">
        <img src={Hero} alt="hero" className="w-full" />
      </div>
    </header>
  );
};

export default Home;
