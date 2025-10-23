import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { imagesPerso, imagesPro, imagesStud } from "../../projectsData";
import "./ProjectsShow.css";
import ProjectBox from "./ProjectBox";

const personalProjectImages = [imagesPerso.PCG_Overview];
const professionalProjectImages = [imagesPro.GundamEvo_Overview, imagesPro.KSP2_Overview];
const studentProjectImages = [imagesStud.Accel_Overview];

function ProjectsShow() {
  const { t } = useTranslation();

  const projectCategories = [
    {
      category: "PersonalProject",
      title: t("projects.personal"),
      description: t("projects.personalDescription"),
      images: personalProjectImages,
    },
    {
      category: "ProfessionalProject",
      title: t("projects.professional"),
      description: t("projects.professionalDescription"),
      images: professionalProjectImages,
    },
    {
      category: "StudentProject",
      title: t("projects.student"),
      description: t("projects.studentDescription"),
      images: studentProjectImages,
    },
  ];

  return (
    <Container fluid className="project-section" id="projects-section">
      <div className="projectsBox-container" id="projects-grid">
        {projectCategories.map((c) => (
          <ProjectBox
            key={c.category}
            {...c}
            detailsButtonText={t("projects.viewMoreProjects")}
          />
        ))}
      </div>
    </Container>
  );
}

export default ProjectsShow;
