import React from 'react';
import { useTranslation } from 'react-i18next';
import './Experiences.css';

function Experience({ titleKey, xpTitleKey, date, locationKey, bulletsKey, compact = false }) {
  const { t } = useTranslation();

  // If bulletsKey is provided, get array safely:
  const bullets = bulletsKey ? t(bulletsKey, { returnObjects: true }) : [];

  return (
    <article className={`experience-card ${compact ? 'compact' : ''}`}>
      <h2 className="exp-section">{t(titleKey)}</h2>

      <div className="exp-header">
        <h3 className="exp-title">{t(xpTitleKey)}</h3>
        <div className="exp-meta">
          <span className="exp-date">{date}</span>
          <span className="exp-dot">•</span>
          <span className="exp-location">{t(locationKey)}</span>
        </div>
      </div>

      {!compact && bullets && Array.isArray(bullets) && bullets.length > 0 && (
        <ul className="exp-bullets">
          {bullets.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default Experience;
