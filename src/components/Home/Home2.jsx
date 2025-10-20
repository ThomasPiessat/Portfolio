import React, { useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { cv } from "../../projectsData"; // you were already importing this
import { useTranslation } from "react-i18next";
import resumePdf from "../../assets/dl/FR_CV.pdf"; // prefer importing the file
import "./Home2.css";

function Home2() {
  const { t, i18n } = useTranslation();
  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Thomas_Piessat_CV.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, []);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Row className="home-about-grid">
        {/* Left column: intro */}
        <Col lg={7} className="home-about-description">
          <div className="lang-switch">
            <button onClick={() => changeLanguage("en")}>🇬🇧 EN</button>
            <button onClick={() => changeLanguage("fr")}>🇫🇷 FR</button>
          </div>
          <h1>{t("introTitle")}</h1>
          <p>{t("introText1")}</p>
          <p>{t("introText2")}</p>
        </Col>

        {/* Right column: resume card */}
        <Col lg={5} className="resume-col">
          <div className="resume-card">
            <h2>{t("resume")}</h2>
            <div className="resume-card-body">
              {/* Use the preview image from your data if you like */}
              <img
                src={cv.CV}             /* or a dedicated preview image */
                alt="Thomas Piessat — Resume"
                className="resume-img"
              />
              <div className="resume-actions">
                <button className="btn-primary" onClick={handleDownload}>
                  {t("download")}
                </button>
                {/* Optional open-in-new-tab */}
                <a className="btn-secondary" href={resumePdf} target="_blank" rel="noreferrer">
                  {t("open")}
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
