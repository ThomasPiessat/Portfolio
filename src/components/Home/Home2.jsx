import React, { useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { cv } from "../../projectsData";
import resumePdf from "../../assets/dl/FR_CV.pdf";
import "./Home2.css";

function Home2() {
  const { t } = useTranslation();

  // Optional: keep a JS fallback download for older browsers
  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Thomas_Piessat_CV.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, []);

  return (
    <Container fluid className="home-about-section" id="about" aria-labelledby="intro-heading">
      <Row className="home-about-grid">
        {/* Left column: intro */}
        <Col lg={7} className="home-about-description">
          <h1 id="intro-heading">{t("introTitle")}</h1>
          <p>{t("introText1")}</p>
          <p>{t("introText2")}</p>
        </Col>

        {/* Right column: resume card */}
        <Col lg={5} className="resume-col">
          <section className="resume-card" aria-labelledby="resume-title">
            <h2 id="resume-title">{t("resume")}</h2>
            <div className="resume-card-body">
              <img
                src={cv?.CV || "/assets/img/resume-preview.jpg"}
                alt={t("resumeAlt", { defaultValue: "Resume preview" })}
                className="resume-img"
                loading="lazy"
              />
              <div className="resume-actions">
                <button className="btn-primary" onClick={handleDownload}>
                  {t("download")}
                </button>
                <a className="btn-secondary" href={resumePdf} target="_blank" rel="noreferrer">
                  {t("open")}
                </a>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default Home2;
