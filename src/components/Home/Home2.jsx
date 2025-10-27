import React, { useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import resumePdfEN from "../../assets/dl/CV_SoftwareEngineer_EN.pdf";
import resumePdfFR from "../../assets/dl/CV_SoftwareEngineer_FR.pdf";
import resumePreviewEN from "../../assets/img/resume/CV_en_preview.png";
import resumePreviewFR from "../../assets/img/resume/CV_fr_preview.png";

import "./Home2.css";

function Home2() {
  const { t, i18n } = useTranslation();

  const lang = i18n.resolvedLanguage || i18n.language || "en";
  const isFR = lang?.toLowerCase().startsWith("fr");

  const resumePdf = isFR ? resumePdfFR : resumePdfEN;
  const resumePreview = isFR ? resumePreviewFR : resumePreviewEN;
  const downloadName = isFR ? "CV_Thomas_Piessat_FR.pdf" : "Resume_Thomas_Piessat_EN.pdf";

  const handleDownload = useCallback(() => {
    const a = document.createElement("a");
    a.href = resumePdf;
    a.download = downloadName;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }, [resumePdf, downloadName]);


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
          <div className="resume-card">
            <h2>{t("resume")}</h2>
            <div className="resume-card-body">
              <img
                src={resumePreview}
                alt={isFR ? "CV — Thomas Piessat (FR)" : "Resume — Thomas Piessat (EN)"}
                className="resume-img"
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
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home2;
