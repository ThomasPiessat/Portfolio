import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import AutoSlideshow from '../../components/AutoSlideshow.jsx';
import './ProjectBox.css'

function  ProjectBox ({category, title, description, images})
{
  useEffect(() => {
    // Any additional setup or cleanup code can go here
    return () => {
      // Cleanup code (if needed)
    };
  }, []);

  return (
      <div className="component-project-box">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="slideshow">
          <AutoSlideshow images={images} />  
        </div>
          <Nav.Link
              as={Link}
              to={`/project/${category}`}
              className="view-details"
          >
            View Details
          </Nav.Link>
      </div>
  );
}

export default ProjectBox;