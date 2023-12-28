import React from "react";
import { Container } from "react-bootstrap";
import Home2 from "./Home2";
import "./Home.css"

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
            <h1>Thomas Piessat - Software Engineer</h1>
            <p>Working for Black Shamrock <i>- a Virtuos Studio</i></p>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;