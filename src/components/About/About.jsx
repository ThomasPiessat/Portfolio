import React from 'react';
import './About.css'
import ProfileHeader from '../Profile/ProfileHeader';
import Experiences, { defaultExperiences } from './Experiences/Experiences';
import ToolsUsed from './ToolsUsed';

function About() {
  return (
    <div className="introduction">
      <ProfileHeader />
      <Experiences data={defaultExperiences} />
      <ToolsUsed />
    </div>
  );
}

export default About;