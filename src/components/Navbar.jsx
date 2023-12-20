import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './Navbar.css'

function NavBar() {
  const [updateExpanded] = useState(false);

  return (
    <div className="navbar">
      <Navbar.Brand href="/" className="nav-button">
        Thomas Piessat
      </Navbar.Brand>
        <Nav className="navbar" defaultActiveKey="#home">
          <Nav.Link
            as={Link}
            to="/about"
            onClick={() => updateExpanded(false)}
            className="nav-button"
          >
            About
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/project"
            onClick={() => updateExpanded(false)}
            className="nav-button"
          >
            Projects
          </Nav.Link>
      
          <a href="https://github.com/ThomasPiessat" target="_blank" rel="noopener noreferrer" className="nav-button">
            Github
          </a>     
        </Nav>
    </div>
  );
};

export default NavBar;