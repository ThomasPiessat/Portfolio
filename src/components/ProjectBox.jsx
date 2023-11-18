import React from 'react';
import './ProjectBox.css'

function ProjectBox({ title, description }) {
  return (
    <div class="component-project-box" onclick="openNewWindow()">
        <h2>{title}</h2>
        <p>{description}</p>
        <div class="image-container"/> 
    </div>
  );
}

export default ProjectBox;