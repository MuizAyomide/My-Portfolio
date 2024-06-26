import React from "react";
import "./Hero.css";
import hero from "../../../public/hero-img.jpg";

const Hero = () => {
  return (
    <div className="hero container">
      <img className="hero-img" src={hero} alt="Profile Picture" />
      <h2 className="hero-sub">Hi, I'm Muiz 👋</h2>
      <h1 className="hero-title">
        FRONT-END <br /> WEB DEVELOPER.
      </h1>
      
      <p className="hero-desc">
        A dedicated and experienced <strong>Frontend developer</strong> and{" "}
        <strong>Graphics designner</strong> with a deep passion for creating
        exceptional user experiences. As a skilled professional in the field of
        web development, I have honed my expertise in translating designs into
        responsive, interactive, and visually appealing web applications.
      </p>
      <a className="hero-btn btn"
      onClick={() =>
        window.open("https://wa.me/2347081386939?text=Hi Akinrinola", "_blank")
      }
       >Reach Out</a>
    </div>
  );
};

export default Hero;
