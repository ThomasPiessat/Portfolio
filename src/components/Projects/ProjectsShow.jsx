import React from "react";
import { Container } from "react-bootstrap";
import { imagesPerso, imagesPro, imagesStud } from  "../../projectsData.js";
import "./ProjectsShow.css"
import ProjectBox from './ProjectBox.jsx';

const personalProjectImages = [imagesPerso.PCG_Overview, imagesPerso.PCG_CirtyGeneration, imagesPerso.PCG_CityRoad ];
const professionalProjectImages = [];
const studentProjectImages = [];

function ProjectsShow() {
    return (
      <Container fluid className="project-section">
        <div className="projectsBox-container">
          <ProjectBox 
            category="PersonalProject" 
            title="Personal Project" 
            description={"Projects that I did during my free time"} 
            images={personalProjectImages} 
          />
          <ProjectBox 
            category="ProfessionalProject" 
            title="Professional Project" 
            description={"Projects that I did in studios"} 
            images={professionalProjectImages}
          />
          <ProjectBox 
            category="StudentProject" 
            title="Student Project" 
            description={"Projects that I did during my studies"} 
            images={studentProjectImages}
          />
          <ProjectBox 
            category="personal" 
            title="All Projects" 
            description="See all projects" 
          />
        </div>
      </Container>
    );
}

export default ProjectsShow;