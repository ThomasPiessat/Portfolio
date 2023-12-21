import React from 'react';
import ProjectsShow from '../ProjectsShow.jsx';
import ProjectBox from '../ProjectBox.jsx';

function ProfessionalProjectsPage() {

  const professionalProject = [
  { id: 1, title: 'Gundam Evolution', description: 'lorem', images: [] },
  { id: 2, title: 'KerbalSpaceProgram2', description: 'lorem', images: [] },
];

  return (
    <div className="component-project">
      <ProjectsShow />
      <h2>Professional Projects</h2>
      <div style={{ display: 'flex' }}>
        {professionalProject.map((project) => (
          <ProjectBox key={project.id} title={project.title} images={project.images} />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalProjectsPage;
