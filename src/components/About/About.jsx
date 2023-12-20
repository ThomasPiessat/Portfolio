import React from 'react';
import './About.css'
import Experiences from './Experiences/Experiences';
import ToolsUsed from './ToolsUsed';

function About() {
  return (
    <div className="introduction">
      <h1>Thomas Piessat - Software Engineer</h1>
      <p>Working for Black Shamrock <i>- a Virtuos Studio</i></p>
      <Experiences />
      <ToolsUsed />
    </div>
  );
}

export default About;