import React from 'react';
import './Experience.css';
import { useTranslation } from 'react-i18next';

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
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
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
              </div>
            </div>
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
