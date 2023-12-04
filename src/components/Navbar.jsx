import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>
        <Link to="/" className="nav-button">
          Thomas Piessat
        </Link>
        <a href="https://github.com/ThomasPiessat" target="_blank" className="nav-button">
          Github
        </a>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70} // Adjust the offset as needed
          className="nav-button"
        >
          Projects
        </ScrollLink>
        <Link to="/Contact" target="_blank" className="nav-button">
          Contact
        </Link>
      </h1>
    </div>
  );
};

export default Navbar;