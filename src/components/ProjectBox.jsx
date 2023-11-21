import React, { useEffect } from 'react';
import AutoSlideshow from './AutoSlideshow.jsx';
import './ProjectBox.css'

const style = {
  margin: '10px', 
  padding: '15px', 
  width: '30%' 
};

const ProjectBox = ({title, description, images}) => {
  useEffect(() => {
    // Any additional setup or cleanup code can go here
    return () => {
      // Cleanup code (if needed)
    };
  }, []);

  return (
    <div style={style}>
      <div class="component-project-box">
          <h2>{title}</h2>
          <p>{description}</p>
          <AutoSlideshow images={images} />  
          <div class="image-container"/> 
      </div>
    </div>
  );
}

export default ProjectBox;