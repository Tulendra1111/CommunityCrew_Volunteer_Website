import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="banner">
        <h1>CommunityCrew</h1>
        <p>
          Join our vibrant community of changemakers working together to create 
          positive impact in our world. Together, we can build a better future 
          through collaboration, innovation, and shared purpose.
        </p>
        <Link to={"/donate"} className="btn">
          Join Our Mission
        </Link>
      </div>
      <div className="banner">
        <img src="/hero.png" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
