import React, { useState } from 'react';
import './Experience.css';
import { useTranslation } from 'react-i18next';
import useInView from '../hooks/useInView';

const Experience = () => {
  const { t } = useTranslation();
  const experiences = t('experience.items', { returnObjects: true }) || [];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2>{t('experience.title')}</h2>
          <p>{t('experience.subtitle')}</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <AnimatedTimelineItem key={index} exp={exp} index={index} side={index % 2 === 0 ? 'left' : 'right'} t={t} />
          ))}
        </div>

        <div className="experience-summary">
          <div className="summary-card">
            <h3>{t('experience.expertiseTitle') || 'Expertise Clé'}</h3>
            <div className="expertise-items">
              <div className="expertise-item">
                <span className="expertise-icon">🏗️</span>
                <div>
                  <h4>{t('experience.expertise.offshore')}</h4>
                  <p>{t('experience.expertise.offshoreDescription') || 'Conception de bâtiments résistants aux conditions marines'}</p>
                </div>
              </div>
              <div className="expertise-item">
                <span className="expertise-icon">📐</span>
                <div>
                  <h4>{t('experience.expertise.advanced')}</h4>
                  <p>{t('experience.expertise.advancedDescription') || 'Dimensionnement selon les normes françaises et européennes'}</p>
                </div>
              </div>
              <div className="expertise-item">
                <span className="expertise-icon">🤝</span>
                <div>
                  <h4>{t('experience.expertise.collab')}</h4>
                  <p>{t('experience.expertise.collabDescription') || 'Expérience avec des sociétés françaises en sous-traitance'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

// Animated timeline item component
const AnimatedTimelineItem = ({ exp, index, side, t }) => {
  const [ref, inView] = useInView({ once: true, threshold: 0.15 });
  const delay = Math.min(0.6, 0.08 * index);

  // Modal state for attestation PDF
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPdf, setModalPdf] = useState(null);
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (pdfPath, title) => {
    setModalPdf(pdfPath);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalPdf(null);
    setModalTitle('');
  };

  const downloadPDF = (pdfFile, filename) => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Pre-resolve the PDF path if attestation is present to include it in the bundle
  let attestationSrc = null;
  try {
    if (exp.attestation) {
      attestationSrc = require(`../assets/Attestation_de_Travaille/${exp.attestation}`);
    }
  } catch (e) {
    // If require fails, leave null (file missing)
    console.warn('Attestation file not found:', exp.attestation, e);
  }

  return (
    <div ref={ref} className={`timeline-item ${side} ${inView ? 'in-view' : 'hidden'}`} style={{ '--delay': `${delay}s` }}>
      <div className="timeline-content">
        <div className="timeline-period">{exp.period}</div>
        <h3 className="timeline-position">{exp.position}</h3>
        <h4 className="timeline-company">{exp.company}</h4>
        <div className="timeline-location">📍 {exp.location}</div>
        <p className="timeline-description">{exp.description}</p>

        <div className="timeline-achievements">
          <h5>{t('experience.achievementsTitle')}</h5>
          <ul>
            {exp.achievements.map((achievement, achIndex) => (
              <li key={achIndex}>{achievement}</li>
            ))}
          </ul>
        </div>

        {exp.projects && exp.projects.length > 0 && (
          <div className="timeline-projects">
            <h5>{t('experience.projectsTitle')}</h5>
            <ul>
              {exp.projects.map((project, projIndex) => (
                <li key={projIndex}>{project}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="timeline-technologies">
          <h5>{t('experience.technologiesTitle')}</h5>
          <div className="tech-tags">
            {exp.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        {attestationSrc && (
          <div className="timeline-attestation">
            <button
              type="button"
              className="btn-primary"
              onClick={() => openModal(attestationSrc, `${exp.company} - Attestation`)}
            >
              {t('experience.viewAttestation') || "📄 Voir l'attestation"}
            </button>
          </div>
        )}

        {/* Modal Popup for attestation PDF */}
        {isModalOpen && modalPdf && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{modalTitle}</h3>
                <button className="modal-close" onClick={closeModal}>✕</button>
              </div>
              <div className="modal-body">
                <iframe
                  src={modalPdf}
                  width="100%"
                  height="600px"
                  title={modalTitle}
                  style={{ border: 'none', borderRadius: '8px' }}
                />
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => downloadPDF(modalPdf, (exp.attestation || 'attestation').replace(/\s+/g, '_'))}
                  className="btn-download-modal"
                >
                  {t('formation.download') || '⬇️ Télécharger'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
