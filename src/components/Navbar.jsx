import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  const [updateExpanded] = useState(false);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky="top">
    <Container>
      <Navbar.Brand href="/">Thomas Piessat</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link
            as={Link}
            to="/about"
            onClick={() => updateExpanded(false)}
          >
            About
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/project"
            onClick={() => updateExpanded(false)}
          >
            Projects
          </Nav.Link>
      
          <Nav.Link
            as={Link}
            to="https://github.com/ThomasPiessat" target="_blank" rel="noopener noreferrer">
            Github
          </Nav.Link>     
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;