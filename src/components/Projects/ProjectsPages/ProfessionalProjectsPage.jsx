import React from 'react';
import ProjectsShow from '../ProjectsShow.jsx';

function ProfessionalProjectsPage() {

  const professionalProject = [
  { id: 1, title: 'Gundam Evolution', description: 'lorem', images: [] },
  { id: 2, title: 'KerbalSpaceProgram2', description: 'lorem', images: [] },
];

  return (
    <div className="component-project">
      <ProjectsShow />
      <h2>Professional Projects</h2>
    </div>
  );
};

export default ProfessionalProjectsPage;

