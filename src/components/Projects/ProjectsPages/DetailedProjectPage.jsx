import React, { useEffect } from 'react';
import { useParams , Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import './DetailedProjectPage.css'

function DetailedProjectPage({ projects }) {
  const { title } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the project based on title
  const project = projects.find((p) => p.title === title);

  // If project is not found
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="detailed-project">
      <div className="sidebar">
        <h2>All Projects</h2>
        <ul>
          {projects.map((p) => (
            <li key={p.title}>
              <Link to={`/project/${p.title}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
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
          <h3>
            <strong><u>Introduction:</u></strong>
          </h3>
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
          <h3>
            <strong><u>About the Game:</u></strong> 
            <p>{project.aboutTheGame}</p>
          </h3>
        </div>
        <div className="back-button">
          <Link to="/project">Back to Projects View</Link>
        </div>
      </div>
    );
  }
  
  export default DetailedProjectPage;