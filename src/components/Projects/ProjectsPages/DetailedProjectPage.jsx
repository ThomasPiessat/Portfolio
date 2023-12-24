import React from 'react';
import { useParams } from 'react-router-dom';

function DetailedProjectPage({ projects }) {
    const { category, projectId } = useParams();
  
    // Find the project based on category and projectId
    const project = projects.find((p) => p.category === category && p.id.toString() === projectId);
  
    // If project is not found, you can handle it accordingly (e.g., show an error message)
    if (!project) {
      return <div>Project not found</div>;
    }
  
    return (
      <div className="detailed-project">
        <h2>{project.title}</h2>
        <p>
          <strong>Introduction:</strong> {project.introduction}
        </p>
        <p>
          <strong>Project Type:</strong> {project.projectType}
        </p>
        <p>
          <strong>Engine:</strong> {project.engine}
        </p>
        <p>
          <strong>Language:</strong> {project.language}
        </p>
        <p>
          <strong>Team:</strong> {project.team}
        </p>
        <p>
          <strong>Time:</strong> {project.time}
        </p>
        <p>
          <strong>Period:</strong> {project.period}
        </p>
        <p>
          <strong>About the Game:</strong> {project.aboutTheGame}
        </p>
      </div>
    );
  }
  
  export default DetailedProjectPage;