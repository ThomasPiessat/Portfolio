import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (  
    <div>
      <h2>Projects</h2>
      <Link to="/projects/personal">Personal Projects</Link>
      <Link to="/projects/professional">Professional Projects</Link>
      <Link to="/projects/school">School Projects</Link>
      <Link to="/projects/all">All Projects</Link>
    </div>
  );
};

export default Projects;