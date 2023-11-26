import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AutoSlideshow from './AutoSlideshow.jsx';
import './ProjectBox.css'

const style = {
  margin: '10px', 
  padding: '15px', 
  width: '30%' 
};

const ProjectBox = ({title, description, images, projectType}) => {
  useEffect(() => {
    // Any additional setup or cleanup code can go here
    return () => {
      // Cleanup code (if needed)
    };
  }, []);

  const projectPath = `/${projectType.toLowerCase().replace(/\s/g, '-')}`;

  return (
    <Link to={projectPath}>
      <div style={style}>
        <div className="component-project-box">
            <h2>{title}</h2>
            <p>{description}</p>
            <AutoSlideshow images={images} />  
            <div className="image-container"/> 
        </div>
      </div>
   </Link>
  );
}

export default ProjectBox;