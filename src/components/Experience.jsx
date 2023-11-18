import React from 'react';
import './Experience.css'

function Experience({ title, xpTitle, date, location }) {
    return (
        <div class="experience-container">
        <h2>{title}</h2>
        <div class="experience-title">
          <h3>{xpTitle}</h3>
        <div class="date">
          <h4>{date}</h4>
        </div>
        <div class="description">
          <h4>
            {location}           
          </h4>
        </div>
        </div> 
        </div>
    );
  }
    
export default Experience;