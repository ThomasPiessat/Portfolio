import React from 'react';
import { projects } from  "../../../projectsData.js";
import ProjectsShow from '../ProjectsShow.jsx';
import ProjectBox from '../ProjectBox.jsx';
import './PersonalProjectsPage.css';

function PersonalProjectsPage() {

  const personalProjects = projects.filter((p) => p.projectType === 'PersonalProject');
  
  return (
    <div>
      <ProjectsShow />
      <h2>Personal Projects</h2>
      <div className="project-box-container">
        {personalProjects.map((project) => (
          <ProjectBox category={project.title} title={project.title} images={project.images} />
        ))}
        </div>
    </div>
  );
};

export default PersonalProjectsPage;