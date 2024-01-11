import React from "react";
import { Container, Col } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import "./Footer.css"

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="bottom">
      <Container fluid>
        <Col className="footer-copywright">
          <h3>Designed and Developed by Thomas Piessat</h3>
          <h3>Copyright © {year}</h3>
        </Col>
      </Container>
    </Navbar>
  );
}

export default Footer;