import React from "react";
import { Container } from "react-bootstrap";
import { imagesPerso, imagesPro, imagesStud } from  "../../projectsData.js";
import "./ProjectsShow.css"
import ProjectBox from './ProjectBox.jsx';

const personalProjectImages = [imagesPerso.PCG_Overview, imagesPerso.PCG_CirtyGeneration, imagesPerso.PCG_CityRoad ];
const professionalProjectImages = [imagesPerso.PCG_Overview, imagesPerso.PCG_CirtyGeneration, imagesPerso.PCG_CityRoad ];
const studentProjectImages = [imagesStud.Accel_Overview, imagesPerso.PCG_CirtyGeneration, imagesPerso.PCG_CityRoad ];

function ProjectsShow() {
  const projectCategories = [
    {
      category: "PersonalProject",
      title: "Personal Project",
      description: "Projects that I did during my free time",
      images: personalProjectImages,
    },
    {
      category: "ProfessionalProject",
      title: "Professional Project",
      description: "Projects that I did in studios",
      images: professionalProjectImages,
    },
    {
      category: "StudentProject",
      title: "Student Project",
      description: "Projects that I did during my studies",
      images: studentProjectImages,
    },
    {
      category: "AllProjects",
      title: "All Projects",
      description: "See all projects",
      images: personalProjectImages.concat(
        professionalProjectImages,
        studentProjectImages
      ),
    },
  ];

  return (
    <Container fluid className="project-section">
      <div className="projectsBox-container">
        {projectCategories.map((categoryData) => (
          <ProjectBox key={categoryData.category} {...categoryData} />
        ))}
      </div>
    </Container>
  );
}

export default ProjectsShow;