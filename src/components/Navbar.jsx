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
        <Link to="/" className="nav-button">
          Github
        </Link>
      </h1>
    </div>
  );
};

export default Navbar;