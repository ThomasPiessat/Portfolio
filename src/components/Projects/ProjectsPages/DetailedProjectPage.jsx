import React, { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./DetailedProjectPage.css";

function DetailedProjectPage({ projects }) {
  const { title } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Find the project based on title
  const project = useMemo(
    () => projects.find((p) => p.title === title),
    [projects, title]
  );

  if (!project) {
    return <div className="detailed-project not-found">Project not found</div>;
  }

  // Helper: conditionally render a labeled field
  const Field = ({ label, value, isLink }) => {
    if (!value) return null;
    return (
      <p className="dp-field">
        <strong>{label}:</strong>{" "}
        {isLink ? (
          <a href={value} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        ) : (
          value
        )}
      </p>
    );
  };

  const aboutTitle = t("projectDetails.about", {
    kind: project.projectKind || "Project",
  });

  const hasImages = Array.isArray(project.images) && project.images.length > 0;

  return (
    <div className="detailed-project">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>{t("projectDetails.allProjects")}</h2>
        <ul>
          {projects.map((p) => (
            <li key={p.title}>
              <Link
                to={`/project/${p.title}`}
                className={p.title === project.title ? "active" : ""}
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Content */}
      <section className="content">
        <h1 className="dp-title">{project.title}</h1>

        {/* Slideshow (if images exist) */}
        {hasImages && (
          <div className="detailed-slide-container">
            <Slide indicators autoplay duration={5000}>
              {project.images.map((image, index) => (
                <div key={index} className="detailed-each-slide-effect">
                  <div style={{ backgroundImage: `url(${image})` }} />
                </div>
              ))}
            </Slide>
          </div>
        )}

        {/* Project meta (only render non-empty fields) */}
        <div className="dp-meta">
          <Field label={t("projectDetails.projectType")} value={project.projectType} />
          <Field label={t("projectDetails.kind")} value={project.projectKind} />
          <Field label={t("projectDetails.engine")} value={project.engine} />
          <Field label={t("projectDetails.language")} value={project.language} />
          <Field label={t("projectDetails.team")} value={project.team} />
          <Field label={t("projectDetails.time")} value={project.time} />
          <Field label={t("projectDetails.period")} value={project.period} />
          <Field
            label={t("projectDetails.projectPage")}
            value={project.projectPage}
            isLink
          />
        </div>

        {/* About section (only if text exists) */}
        {project.aboutTheGame && (
          <div className="dp-about">
            <h3>
              <strong>
                <u>{aboutTitle}:</u>
              </strong>
            </h3>
            <p>{project.aboutTheGame}</p>
          </div>
        )}

        <div className="dp-actions">
          <Link to="/project" className="btn-accent">
            {t("projectDetails.back")}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default DetailedProjectPage;
