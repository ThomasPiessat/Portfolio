import React, { useEffect } from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { projects } from "../../../projectsData";
import ProjectBox from '../ProjectBox';
import './ProjectsPage.css';

function CategoryNav() {
  const { t } = useTranslation();
  const cats = [
    { to: "/project/PersonalProject", label: t("categories.personal") },
    { to: "/project/ProfessionalProject", label: t("categories.professional") },
    { to: "/project/StudentProject", label: t("categories.student") },
    { to: "/project", label: t("categories.all") },
  ];
  return (
    <nav className="category-nav" aria-label="Project categories">
      {cats.map((c) => (
        <NavLink key={c.to} to={c.to} className={({isActive}) => `cat-link ${isActive ? 'active' : ''}`}>
          {c.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default function ProfessionalProjectsPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const professionalProjects = projects.filter((p) => p.projectType === 'ProfessionalProject');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const byState = location.state?.scrollTo;
    const byHash = location.hash ? location.hash.slice(1) : null;
    const byQuery = params.get('scroll');
    const targetId = byState || byHash || byQuery;

    // scroll after paint so #projects-grid exists
    requestAnimationFrame(() => {
      const el = targetId && document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // default: just land at top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }, [location]);

  return (
    <div className="category-page">
      <h2 className="category-title">{t("projects.professional")}</h2>

      <CategoryNav />

      <div className="project-box-container" id="projects-grid">
        {professionalProjects.map((project) => (
          <ProjectBox
            key={project.title}
            category={project.title}
            title={project.title}
            images={project.images}
            detailsButtonText="View Details"
            linkTo={`/project/${project.title}`}
          />
        ))}
      </div>

      <div className="back-overview">
        <Link to="/project" className="view-details">{t("projectDetails.backToCategories")}</Link>
      </div>
    </div>
  );
}