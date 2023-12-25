import React from 'react';
import { projects } from  "../../../projectsData.js";
import ProjectsShow from '../ProjectsShow.jsx';
import ProjectBox from '../ProjectBox.jsx';
import './ProfessionalProjectsPage.css';

function ProfessionalProjectsPage() {

  const professionalProjects = projects.filter((p) => p.projectType === 'ProfessionalProject');
  
  return (
    <div>
      <ProjectsShow />
      <h2>Professional Projects</h2>
      <div className="project-box-container">
        {professionalProjects.map((project) => (
          <ProjectBox category={project.title} title={project.title} images={project.images} />
        ))}
        </div>
    </div>
  );
};

export default ProfessionalProjectsPage;
