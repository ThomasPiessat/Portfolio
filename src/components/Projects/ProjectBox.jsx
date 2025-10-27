import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import { useTranslation } from "react-i18next";
import 'react-slideshow-image/dist/styles.css';
import Nav from "react-bootstrap/Nav";
import './ProjectBox.css';

function ProjectBox({ category, title, description, images, detailsButtonText, linkTo }) {
  const { t } = useTranslation();
  const buttonStyle = { width: "30px", background: 'none', border: 0 };

  const properties = {
    prevArrow: (
      <button style={buttonStyle} aria-label="Previous slide">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg>
      </button>
    ),
    nextArrow: (
      <button style={buttonStyle} aria-label="Next slide">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg>
      </button>
    )
  };

  const label = detailsButtonText || t("projects.viewDetails"); 
  const target = linkTo ?? { pathname: `/project/${category}`, hash: "#projects-grid" };

  return (
    <div className="component-project-box">
      <header className="projectbox-header">
        <h2>{title}</h2>
        {description && <p className="projectbox-desc">{description}</p>}
      </header>

      <div className="projectbox-slide">
        <Slide indicators autoplay duration={5000} {...properties}>
          {images.map((image, index) => (
            <div key={index} className="each-slide-effect">
              <div style={{ backgroundImage: `url(${image})` }}>
                <span>{getImageName(image)}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>

      <Nav.Link
        as={Link}
        to={target}
        state={{ scrollTo: "projects-grid", fromOverview: true }}
        className="view-details"
      >
        {label}
      </Nav.Link>
    </div>
  );
}

function getImageName(path) {
  const file = path.split('/').pop() || '';
  return file.split('.').shift();
}

export default ProjectBox;
