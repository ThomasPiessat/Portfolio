import React from "react";
import { images } from  "../../projectsData.js";
import { Element } from 'react-scroll';
import ProjectBox from './ProjectBox.jsx';

const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

const personalProjectImages = [images.PCG_Overview, images.PCG_CirtyGeneration, images.PCG_CityRoad ];

// const personalProjects = [
//   { id: 1, title: 'Procedural Content Generation', description: 'Procedural City Generation', images: [projectsData.PCG_Overview, projectsData.PCG_CirtyGeneration, projectsData.PCG_CityRoad ] },
//   { id: 2, title: 'Personnal P2', description: 'Personnal P2 description', images: [projectsData.PCG_Overview, projectsData.PCG_CirtyGeneration, projectsData.PCG_CityRoad ] },
//   { id: 3, title: 'Personnal P3', description: 'Personnal P3 description', images: [projectsData.PCG_Overview, projectsData.PCG_CirtyGeneration, projectsData.PCG_CityRoad ] },
// ];

// const professionalProject = [
//   { id: 1, title: 'Professional', description: 'Professional', images: [projectsData.PCG_Overview, projectsData.PCG_CirtyGeneration, projectsData.PCG_CityRoad ] },
//   { id: 2, title: 'Professional  P2', description: 'Professional P2 description', images: [projectsData.PCG_Overview, projectsData.PCG_CirtyGeneration, projectsData.PCG_CityRoad ] },
//   { id: 3, title: 'Professional P3', description: 'Professional P3 description', images: [projectsData.PCG_Overview, projectsData.PCG_CirtyGeneration, projectsData.PCG_CityRoad ] },
// ];

const ProjectsShow = () => {
    return (
    <Element name="projects">
        <div style={styles}>
          <ProjectBox title="Personal Project" description={"Projects that I did during my free time"} images={personalProjectImages} projectType="Personal Projects"/>
          <ProjectBox title="Professional Project" description={"Projects that I did in studios"} />
          <ProjectBox title="Student Project" description={"Projects that I did during my studies"} />
        </div>
    </Element>
    );
}

export default ProjectsShow;