import React, { useState } from 'react';
import './Projects.css';
import { useTranslation } from 'react-i18next';

// Load all image assets inside src/assets/projects (recursively)
// We build maps so translations can reference files by relative path like "TOUR HEMERA/TOUR HEMERA.png"
let imagesMap = {};
let pdfsMap = {};
try {
  const reqImgs = require.context('../assets/projects', true, /\.(png|jpe?g|svg|webp)$/);
  reqImgs.keys().forEach(key => {
    // key looks like './FOLDER/FILE.png' -> remove './'
    imagesMap[key.replace('./', '')] = reqImgs(key).default || reqImgs(key);
  });
} catch (e) {
  // ignore in environments where require.context is not available
}
try {
  const reqPdfs = require.context('../assets/projects', true, /\.pdf$/);
  reqPdfs.keys().forEach(key => {
    pdfsMap[key.replace('./', '')] = reqPdfs(key).default || reqPdfs(key);
  });
} catch (e) {
  // ignore
}

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
                {project.assetPath ? (
                  <>
                    {imagesMap[project.assetPath] ? (
                      <img src={imagesMap[project.assetPath]} alt={project.title} className="project-img" />
                    ) : (
                      <div className="project-icon">{project.image || '📁'}</div>
                    )}

                    {/* overlay with title/meta/actions */}
                    <div className="project-overlay">
                      <div className="overlay-left">
                        <h3 className="overlay-title">{project.title}</h3>
                        <div className="overlay-meta">
                          <span className="overlay-client">{project.client}</span>
                          <span className="overlay-year">{project.year}</span>
                        </div>
                      </div>
                      <div className="overlay-actions">
                        {pdfsMap[project.assetPath.replace(/\.[^.]+$/, '.pdf')] && (
                          <a
                            className="overlay-btn"
                            href={pdfsMap[project.assetPath.replace(/\.[^.]+$/, '.pdf')]}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Voir le PDF
                          </a>
                        )}
                      </div>
                    </div>

                  </>
                ) : (
                  <>
                    <div className="project-icon">{project.image}</div>
                    {project.pdf && (
                      <a className="project-pdf-link" href={project.pdf} target="_blank" rel="noreferrer">Voir le PDF</a>
                    )}
                  </>
                )}

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
                
                
                
                {(project.localisation || project.location) && (
                  <div className="project-location">
                    <h4>{t('projects.locationLabel')}</h4>
                    <div>{project.localisation || project.location}</div>
                  </div>
                )}

                {(project.intervenants && project.intervenants.length > 0) || (project.partners && project.partners.length > 0) ? (
                  <div className="project-intervenants">
                    <h4>{t('projects.partnersLabel')}</h4>
                    <ul>
                      {(project.intervenants || project.partners).map((p, idx) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
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
