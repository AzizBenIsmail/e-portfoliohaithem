import React, { useState } from 'react';
import './Projects.css';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('tous');

  const projects = t('projects.items', { returnObjects: true }) || [];

  const categories = [
    { id: 'tous', name: t('projects.filters.tous') },
    { id: 'offshore', name: t('projects.filters.offshore') },
    { id: 'residential', name: t('projects.filters.residential') },
    { id: 'commercial', name: t('projects.filters.commercial') },
    { id: 'infrastructure', name: t('projects.filters.infrastructure') }
  ];

  const filteredProjects = activeCategory === 'tous' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projets" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>{t('projects.title')}</h2>
          <p>{t('projects.subtitle')}</p>
        </div>

        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
                <div className="project-status">{project.status}</div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-meta">
                    <span className="project-client">{project.client}</span>
                    <span className="project-year">{project.year}</span>
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>{t('projects.featuresLabel')}</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  <h4>{t('projects.technologiesLabel')}</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-summary">
          <div className="summary-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">{t('projects.stats.projects')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">{t('projects.stats.partners')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">{t('projects.stats.satisfaction')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">7</div>
              <div className="stat-label">{t('projects.stats.years')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
