import React from 'react';
import ProjectsShow from '../ProjectsShow.jsx';

function StudentProjectsPage() {

  const studentProject = [
  { id: 1, title: 'Gundam Evolution', description: 'lorem', images: [] },
  { id: 2, title: 'KerbalSpaceProgram2', description: 'lorem', images: [] },
];

  return (
    <div className="component-project">
      <ProjectsShow />
      <h2>Student Projects</h2>
    </div>
  );
};

export default StudentProjectsPage;
