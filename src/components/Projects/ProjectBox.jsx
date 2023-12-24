import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Nav from "react-bootstrap/Nav";
import './ProjectBox.css';

function ProjectBox ({category, title, description, images})
{
  const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px'
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
}

  return (
      <div className="component-project-box">
        <h2>{title}</h2>
        <p>{description}</p>
            <Slide indicators={true} {...properties} images={images.map((image) => ({ source: image }))} autoplay duration={5000}>
              {images.map((image, index) => (
                <div key={index} className="each-slide-effect">
                  <div style={{ backgroundImage: `url(${image})` }}>
                    <span>{getImageName(image)}</span>
                  </div>
                </div>
              ))}
            </Slide>
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

function getImageName(path) {
  const pathArray = path.split('/');
  const fileNameWithExtension = pathArray[pathArray.length - 1];
  const [fileNameWithoutExtension] = fileNameWithExtension.split('.');
  return fileNameWithoutExtension;
}

export default ProjectBox;