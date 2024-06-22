import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about container section">
      <div className="about-content">
        <h2 className="about-title">About</h2>
        <p className="about-desc">
          Hello! I'm Akinrinola Muiz Ayomide, a{" "}
          
          <strong> Computer engineering </strong> student and experienced
          <strong> Frontend web developer</strong> and{" "}
          <strong>Graphics designer</strong> with a deep passion for creating
          exceptional user experiences. As a skilled professional in the field
          of web development, I have honed my expertise in translating designs
          into responsive, interactive, and visually appealing web applications.
        </p>
        <p className="about-desc">
          With a strong foundation in HTML, CSS, JavaScript, and React, I
          possess the technical prowess to bring ideas to life and deliver
          high-performing, user-friendly web solutions.
        </p>
        <p className="about-desc">
          Beyond my professional pursuits, I have a deep love for music and can
          often be found indoors, coding away while immersed in my favorite
          tunes. People often describe me as an introvert, as I prefer to focus
          my energy on honing my craft and continuously improving my skills.
        </p>
        <hr className="about-hr" />
        <h3 className="about-sub">Technologies</h3>
        <div className="about-ul-container">
          <ul className="about-ul">
            <li className="about-list">JavaScript</li>
            <li className="about-list">HTML</li>
            <li className="about-list">CSS</li>
          </ul>
          <ul className="about-ul">
            <li className="about-list">ReactJs</li>
            <li className="about-list">TypeScript</li>
            <li className="about-list">Firebase</li>
          </ul>
        </div>
      </div>
      <div className="about-img-wrapper">
        <img className="about-img" src="/about-img.jpg" alt="Profile picture" />
      </div>
    </div>
  );
};

export default About;
