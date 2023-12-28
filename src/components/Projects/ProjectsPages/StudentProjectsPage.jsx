import React from 'react';
import { projects } from  "../../../projectsData.js";
import ProjectsShow from '../ProjectsShow.jsx';
import ProjectBox from '../ProjectBox.jsx';
import './ProjectsPage.css';

function StudentProjectsPage() {

  const studentProjects = projects.filter((p) => p.projectType === 'StudentProject');
  
    return (
      <div>
        <ProjectsShow />
        <h2>Student Projects</h2>
        <div className="project-box-container">
        {studentProjects.map((project) => (
          <ProjectBox category={project.title} title={project.title} images={project.images} />
        ))}
        </div>
      </div>
    );
  };

export default StudentProjectsPage;
