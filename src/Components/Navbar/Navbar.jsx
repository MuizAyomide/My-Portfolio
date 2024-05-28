import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className=" navbar container">
      <nav className="navbar-menu">
        <Link className="navbar-link">About</Link>
        <Link className="navbar-link">Work</Link>
        <Link className="navbar-link">Contact</Link>
        <Link className="navbar-line"></Link>
        <Link>
          <button className="navbar-sun">
            
          </button>
        </Link>
        <Link className="navbar-resume btn">Resume</Link>
      </nav>
      <button className="navbar-bars"></button>
    </div>
  );
};

export default Navbar;
