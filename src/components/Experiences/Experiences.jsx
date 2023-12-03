import React from 'react';
import Experience from './Experience';
import './Experiences.css'

const experiencesData = [
  { title:"Education", xpTitle:"Objectif 3D - Gameplay programmer", date:"2017-2020", location:"Montpellier, France" },
  { title:"Professional Experience", xpTitle:"Software Engineer", date:"2020-Present", location:"Black Shamrock - a Virtuos Studio, Dublin" },
]

const Experiences = () => {
  return (
      <div className="experience-container-box">
      {experiencesData.map((experience, index) => (
        <Experience
          key={index}
          title={experience.title}
          xpTitle={experience.xpTitle}
          date={experience.date}
          location={experience.location}
        />
      ))}
    </div>
  );
};
    
export default Experiences;