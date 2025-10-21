import React from "react";
import { Container, Col } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import "./Footer.css"

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Navbar expand="lg" className="footer" fixed="bottom">
      <Container fluid className="footer-container">
          <Col md={12} className="footer-content">
            <p className="footer-text">
              Designed &amp; Developed by <span className="footer-highlight">Thomas Piessat</span>
            </p>
            <p className="footer-text">© {year} All Rights Reserved</p>
          </Col>
      </Container>
    </Navbar>
  );
}

export default Footer;