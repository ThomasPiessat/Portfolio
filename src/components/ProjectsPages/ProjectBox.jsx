import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AutoSlideshow from '../AutoSlideshow.jsx';
import './ProjectBox.css'

function  ProjectBox ({category, title, description, images})
{
  useEffect(() => {
    // Any additional setup or cleanup code can go here
    return () => {
      // Cleanup code (if needed)
    };
  }, []);

  //const projectPath = `/${projectType.toLowerCase().replace(/\s/g, '-')}`;

  return (
      <div className="component-project-box">
        <h2>{title}</h2>
        <p>{description}</p>
        <AutoSlideshow images={images} />  
        <Link to={`/projects/${category}`}>View Details</Link>
      </div>
  );
}

export default ProjectBox;