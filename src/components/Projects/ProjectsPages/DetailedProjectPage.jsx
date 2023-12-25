import React from 'react';
import { Slide } from 'react-slideshow-image';
import './DetailedProjectPage.css'

function DetailedProjectPage({ projects }) {
  
    // Find the project based on category and projectId
    const project = projects.find((p) => p.projectType === "StudentProject");
  
    // If project is not found
    if (!project) {
      return <div>Project not found</div>;
    }
  
    return (
      <div className="detailed-project">
        <h1>{project.title}</h1>
        <div className="detailed-slide-container">
          <Slide indicators={true} images={project.images.map((image) => ({ source: image }))} autoplay duration={5000}>
            {project.images.map((image, index) => (
              <div key={index} className="detailed-each-slide-effect">
                <div style={{ backgroundImage: `url(${image})` }} />
              </div>
            ))}
          </Slide>
        </div>
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