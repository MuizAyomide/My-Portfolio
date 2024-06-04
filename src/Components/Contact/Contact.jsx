import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="section contact container">
      <h2 className="contact-title">Get In Contact</h2>
      <p className="contact-desc">
        Whenever you are starting a project, have business inquires or just want
        to say hi, my inbox is always open so feel free to reach out and I will
        get back to you as soon as possible.
      </p>
      <a
        href="mailto:akinrinolamuiz@gmail.com"
        target="_blank"
        className="btn contact-btn"
      >
        Reach Out
      </a>
    </div>
  );
};

export default Contact;
