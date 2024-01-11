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
      <Navbar.Brand style={{paddingLeft: "25%"}} href="/"><h1>Thomas Piessat</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-3" style={{width: "400px"}}>
        <Nav.Link
            as={Link}
            to="/about"
            onClick={() => updateExpanded(false)}
          >
            <h2>About</h2>
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/project"
            onClick={() => updateExpanded(false)}
          >
            <h2>Projects</h2>
          </Nav.Link>
      
          <Nav.Link
            as={Link}
            to="https://github.com/ThomasPiessat" target="_blank" rel="noopener noreferrer">
            <h2>Github</h2>
          </Nav.Link>     
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;