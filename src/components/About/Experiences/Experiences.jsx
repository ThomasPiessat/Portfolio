import React from 'react';
import Experience from './Experience';
import './Experiences.css';

// Default data with i18n keys
export const defaultExperiences = [
  {
    id: 'professional',
    titleKey: 'exp.professional.title',        
    xpTitleKey: 'exp.professional.xpTitle',    
    date: 'June 2020 – November 2024',
    locationKey: 'exp.professional.location',  
    bulletsKey: 'exp.professional.bullets'     
  },
  {
    id: 'education',
    titleKey: 'exp.education.title',           
    xpTitleKey: 'exp.education.xpTitle',       
    date: '2017 – 2020',
    locationKey: 'exp.education.location'      
  }
];

const Experiences = ({ data = defaultExperiences, compact = false }) => {
  const items = compact ? data.slice(0, 1) : data; // teaser = first item
  return (
    <div className={`experience-container-box ${compact ? 'compact' : ''}`}>
      {items.map((experience) => (
        <Experience
          key={experience.id}
          {...experience}
          compact={compact}
        />
      ))}
    </div>
  );
};

export default Experiences;
