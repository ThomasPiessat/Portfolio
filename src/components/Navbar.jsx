import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/ProjectsShow" target="_blank" className="nav-button">
          Projects
        </Link>
        <Link to="/Contact" target="_blank" className="nav-button">
          Contact
        </Link>
      </h1>
    </div>
  );
};

export default Navbar;