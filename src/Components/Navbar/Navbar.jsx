import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import './Mobile-Nav.css'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState('dark');

  const handleMenuToggle = () => {
    setNavOpen(prevNavOpen => !prevNavOpen);
    setMenu(prevMenu => !prevMenu);
    document.body.style.overflowY = navOpen ? 'auto' : 'hidden';
    document.body.style.overflowY = !menu ? 'hidden' : 'auto' ;

  };


// state
  const themes = localStorage.getItem('theme')
// on mount 
  theme && document.body.classList.add(themes);



  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme ? 'light-mode' : 'dark');
    document.body.classList.toggle('light-mode'); 

    if( document.body.classList.contains('light-mode') ){

      localStorage.setItem('theme','light-mode');
    }
    else{
      localStorage.removeItem('theme');

    }
  };

  return (
    <>
      <div className=" navbar container light-mode">
        <nav className="navbar-menu">
          <Link to="about" className="navbar-link">
            About
          </Link>
          <Link to="project" className="navbar-link">
            Work
          </Link>
          <Link to="contact" className="navbar-link">
            Contact
          </Link>
          <Link className="navbar-line"></Link>
          <Link>
            <button className="navbar-sun" onClick={toggleTheme}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </button>
          </Link>
          <Link className="navbar-resume btn">Resume</Link>
        </nav>
        
            
        <button className='navbar-bar' onClick={handleMenuToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Navigation */}
      <div className="mobile-nav" style={{display: menu ? "flex" : "none"}}>
        <nav>
          <ul className="mobile-nav-menu">
            <Link to="about" onClick={() => setMenu(false)} className="mobile-nav-link">
              About
            </Link>
            <Link to="project" onClick={() => setMenu(false)} className="mobile-nav-link">
              Work
            </Link>
            <Link to="contact" onClick={() => setMenu(false)} className="mobile-nav-link">
              Contact
            </Link>
            <Link className="mobile-nav-line"></Link>
            <Link className="mobile-nav-sun" onClick={toggleTheme}>
            
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </Link>
            <Link className="btn mobile-nav-btn">Resume</Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
