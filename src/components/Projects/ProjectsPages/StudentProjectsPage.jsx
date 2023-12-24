import React from 'react';
import { imagesStud } from  "../../../projectsData.js";
import ProjectsShow from '../ProjectsShow.jsx';
import ProjectBox from '../ProjectBox.jsx';

function StudentProjectsPage() {

  const studentProject = [
    { id: 1, title: 'ACCEL', description: 'lorem', images: [imagesStud.Accel_Overview, imagesStud.Accel_Gameplay1, imagesStud.Accel_Gameplay2] },
     ];
  
    return (
      <div className="component-project">
        <ProjectsShow />
        <h2>Students Projects</h2>
        <div style={{ display: 'flex' }}>
          {studentProject.map((project) => (
            <ProjectBox category={project.title} title={project.title} images={project.images} />
          ))}
        </div>
      </div>
    );
  };

export default StudentProjectsPage;
