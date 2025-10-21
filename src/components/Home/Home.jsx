import React from "react";
import { Container } from "react-bootstrap";
import Home2 from "./Home2";
import "./Home.css";

function Home() {
  return (
    <section className="home-wrapper">
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <h1 className="home-title">Thomas Piessat</h1>
          <h2 className="home-subtitle">Software Engineer</h2>
          <p className="home-company">
            Working for <strong>LVCIM</strong>
          </p>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
