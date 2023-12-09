import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AutoSlideshow from '../AutoSlideshow.jsx';
import './ProjectBox.css'

const ProjectBox = ({category,title, description, images, projectType}) => {
  useEffect(() => {
    // Any additional setup or cleanup code can go here
    return () => {
      // Cleanup code (if needed)
    };
  }, []);

  // const projectPath = `/${projectType.toLowerCase().replace(/\s/g, '-')}`;

  return (
    // <Link to={projectPath}>
      <div className="component-project-box">
          <h2>{title}</h2>
          <p>{description}</p>
          <AutoSlideshow images={images} />  
          <div className="image-container"/> 
          <Link to={`/projects/${category}/${title}`}>View Details</Link>
      </div>
  //  </Link>
  );
}

export default ProjectBox;