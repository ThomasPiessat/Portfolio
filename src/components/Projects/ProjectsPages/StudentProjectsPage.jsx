import React from 'react';
import { projects } from  "../../../projectsData.js";
import ProjectsShow from '../ProjectsShow.jsx';
import ProjectBox from '../ProjectBox.jsx';

function StudentProjectsPage() {

  const project = projects.find((p) => p.projectType === 'StudentProject');
  
    return (
      <div className="component-project">
        <ProjectsShow />
        <h2>Students Projects</h2>
        <div style={{ display: 'flex' }}>
          <ProjectBox category={project.title} title={project.title} images={project.images} />
        </div>
      </div>
    );
  };

export default StudentProjectsPage;
