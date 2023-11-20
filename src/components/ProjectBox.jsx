import React from 'react';
// import ProjectSlideshow from '../ProjectSlideshow';
import './ProjectBox.css'

const style = {
  margin: '10px', 
  padding: '15px', 
  width: '30%' 
};


function ProjectBox({ title, description, images }) {
  return (
    <div style={style}>
      <div class="component-project-box" onclick="openNewWindow()">
          <h2>{title}</h2>
          <p>{description}</p>
          {/* <ProjectSlideshow images={images} /> */}
          <img src={images} alt="visual-code" class="tool-image"></img>
          <div class="image-container"/> 
      </div>
    </div>
  );
}

export default ProjectBox;