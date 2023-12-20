import React from "react";
import { Container } from "react-bootstrap";
import { images } from  "../../projectsData.js";
import "./ProjectsShow.css"
import ProjectBox from './ProjectBox.jsx';

const personalProjectImages = [images.PCG_Overview, images.PCG_CirtyGeneration, images.PCG_CityRoad ];

// const personalProjects = [
//   { id: 1, title: 'Procedural Content Generation', description: 'Procedural City Generation', images: [projectsData.PCG_Overview, projectsData.PCG_CirtyGeneration, projectsData.PCG_CityRoad ] },
//   { id: 2, title: 'Personnal P2', description: 'Personnal P2 description', images: [projectsData.PCG_Overview, projectsData.PCG_CirtyGeneration, projectsData.PCG_CityRoad ] },
//   { id: 3, title: 'Personnal P3', description: 'Personnal P3 description', images: [projectsData.PCG_Overview, projectsData.PCG_CirtyGeneration, projectsData.PCG_CityRoad ] },
// ];

// const professionalProject = [
//   { id: 1, title: 'Professiona},
//   { id: 2, title: 'Professional  P2', description: 'Professional P2 description', images: [projectsData.PCG_Overview, projectsData.PCG_CirtyGenl', description: 'Professional', images: [projectsData.PCG_Overview, projectsData.PCG_CirtyGeneration, projectsData.PCG_CityRoad ] eration, projectsData.PCG_CityRoad ] },
//   { id: 3, title: 'Professional P3', description: 'Professional P3 description', images: [projectsData.PCG_Overview, projectsData.PCG_CirtyGeneration, projectsData.PCG_CityRoad ] },
// ];

function ProjectsShow() {
    return (
      <Container fluid className="project-section">
        <Container>
        <div className="projectsBox-container">
          <ProjectBox 
            category="PersonalProject" 
            title="Personal Project" 
            description={"Projects that I did during my free time"} 
            images={personalProjectImages} 
            projectType="Personal Projects"
          />
          <ProjectBox 
            category="ProfesionalProject" 
            title="Professional Project" 
            description={"Projects that I did in studios"} 
          />
          <ProjectBox 
            category="personal" 
            title="Student Project" 
            description={"Projects that I did during my studies"} 
          />
          <ProjectBox 
            category="personal" 
            title="All Projects" 
            description="See all projects" 
          />
        </div>
        </Container>
      </Container>
    );
}

export default ProjectsShow;