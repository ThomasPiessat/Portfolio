import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home2.css"

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p>
              I’m a software engineer with experience in C#/C++, Unity, Unreal Engine, and tools.
            </p>
            <p>
              I’m sort of a generalist, and at the moment my main areas of interest are tools and plugins in Unreal Engine 5.
            </p>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;