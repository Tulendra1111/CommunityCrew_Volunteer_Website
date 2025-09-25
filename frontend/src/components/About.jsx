import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="hero">
        <div className="banner">
          <h1>Our Story</h1>
          <p>
            CommunityCrew was born from a simple belief: that meaningful change 
            happens when passionate people come together. We're a diverse community 
            of volunteers, activists, and changemakers united by our commitment to 
            creating positive impact in our world. Through collaboration, innovation, 
            and shared purpose, we're building a better future for everyone.
          </p>
        </div>
        <div className="banner">
          <img src="/about.png" alt="aboutImg" />
        </div>
      </div>
    </section>
  );
};

export default About;
