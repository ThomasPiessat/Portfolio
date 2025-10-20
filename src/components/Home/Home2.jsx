import React, { useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { cv } from "../../projectsData"; // you were already importing this
import resumePdf from "../../assets/dl/FR_CV.pdf"; // prefer importing the file
import "./Home2.css";

function Home2() {
  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Thomas_Piessat_CV.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, []);

  return (
    <Container fluid className="home-about-section" id="about">
      <Row className="home-about-grid">
        {/* Left column: intro */}
        <Col lg={7} className="home-about-description">
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

        {/* Right column: resume card */}
        <Col lg={5} className="resume-col">
          <div className="resume-card">
            <h2>Résumé</h2>
            <div className="resume-card-body">
              {/* Use the preview image from your data if you like */}
              <img
                src={cv.CV}             /* or a dedicated preview image */
                alt="Thomas Piessat — Resume"
                className="resume-img"
              />
              <div className="resume-actions">
                <button className="btn-primary" onClick={handleDownload}>
                  Download PDF
                </button>
                {/* Optional open-in-new-tab */}
                <a className="btn-secondary" href={resumePdf} target="_blank" rel="noreferrer">
                  Open in new tab
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home2;
