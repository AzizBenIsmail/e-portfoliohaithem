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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (pdfFile, title) => {
    setModalContent({ pdf: pdfFile, title });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const downloadPDF = (pdfFile, filename) => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

                    {pdfsMap[project.assetPath.replace(/\.[^.]+$/, '.pdf')] && (
                      <div className="pdf-actions">
                        <button
                          className="project-pdf-link btn-primary"
                          onClick={() => openModal(pdfsMap[project.assetPath.replace(/\.[^.]+$/, '.pdf')], project.title)}
                        >
                          {t('formation.viewDiploma', { defaultValue: 'Voir le diplôme' })}
                        </button>
                        <a
                          className="project-pdf-download btn-secondary"
                          href={pdfsMap[project.assetPath.replace(/\.[^.]+$/, '.pdf')]}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t('formation.download', { defaultValue: 'Télécharger' })}
                        </a>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="project-icon">{project.image}</div>
                    {project.pdf && (
                      <div className="pdf-actions">
                        <button className="project-pdf-link btn-primary" onClick={() => openModal(project.pdf, project.title)}>
                          {t('formation.viewDiploma', { defaultValue: 'Voir le diplôme' })}
                        </button>
                        <a className="project-pdf-download btn-secondary" href={project.pdf} target="_blank" rel="noreferrer">
                          {t('formation.download', { defaultValue: 'Télécharger' })}
                        </a>
                      </div>
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
      {/* Modal Popup for project PDFs (same behavior as Formation.js) */}
      {isModalOpen && modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{modalContent.title}</h3>
              <button className="modal-close" onClick={closeModal}>✕</button>
            </div>
            <div className="modal-body">
              <iframe
                src={modalContent.pdf}
                width="100%"
                height="600px"
                title={modalContent.title}
                style={{ border: 'none', borderRadius: '8px' }}
              />
            </div>
            <div className="modal-footer">
              <button onClick={() => downloadPDF(modalContent.pdf, (modalContent.title || 'document').replace(/\s+/g, '_') + '.pdf')} className="btn-download-modal">
                {t('formation.download', { defaultValue: 'Télécharger' })}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
