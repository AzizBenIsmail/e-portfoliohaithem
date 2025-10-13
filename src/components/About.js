import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="apropos" className="about">
      <div className="container">
        <div className="section-header">
          <h2>{t('about.title')}</h2>
          <p>{t('about.subtitle')}</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>{t('about.introTitle')}</h3>
              <p>{t('about.intro')}</p>
            </div>
            
            <div className="about-details">
              <div className="detail-item">
                <h4>🎯 Spécialisation</h4>
                <p>{t('about.specialization')}</p>
              </div>
              
              <div className="detail-item">
                <h4>🏢 Expérience</h4>
                <p>{t('about.experience')}</p>
              </div>
              
              <div className="detail-item">
                <h4>🇫🇷 Objectif</h4>
                <p>{t('about.objective')}</p>
              </div>
              
              <div className="detail-item">
                <h4>🤝 Collaboration</h4>
                <p>{t('about.collaboration')}</p>
              </div>
            </div>
            
            <div className="about-mission">
              <h4>{t('about.missionTitle')}</h4>
              <p>{t('about.mission')}</p>
            </div>

          <div className="about-interests">
            <h4>{t('about.interestsTitle')}</h4>
            <div className="interests-list">
              <span className="interest-tag">⚽ Football</span>
              <span className="interest-tag">🏋️‍♂️ Musculation</span>
              <span className="interest-tag">✈️ Voyage</span>
            </div>

            <div className="interests-travel">
              <h5>{t('about.travelTitle')}</h5>
              <div className="travel-badges">
                <span className="travel-badge"><img className="flag-img" src="https://flagcdn.com/w20/rs.png" srcSet="https://flagcdn.com/w40/rs.png 2x" alt="Serbie" loading="lazy" /><span>Serbie</span></span>
                <span className="travel-badge"><img className="flag-img" src="https://flagcdn.com/w20/tr.png" srcSet="https://flagcdn.com/w40/tr.png 2x" alt="Turquie" loading="lazy" /><span>Turquie</span></span>
                <span className="travel-badge"><img className="flag-img" src="https://flagcdn.com/w20/sa.png" srcSet="https://flagcdn.com/w40/sa.png 2x" alt="Arabie saoudite" loading="lazy" /><span>Arabie saoudite</span></span>
                <span className="travel-badge"><img className="flag-img" src="https://flagcdn.com/w20/ma.png" srcSet="https://flagcdn.com/w40/ma.png 2x" alt="Maroc" loading="lazy" /><span>Maroc</span></span>
                <span className="travel-badge"><img className="flag-img" src="https://flagcdn.com/w20/my.png" srcSet="https://flagcdn.com/w40/my.png 2x" alt="Malaisie" loading="lazy" /><span>Malaisie</span></span>
                <span className="travel-badge"><img className="flag-img" src="https://flagcdn.com/w20/id.png" srcSet="https://flagcdn.com/w40/id.png 2x" alt="Indonésie" loading="lazy" /><span>Indonésie</span></span>
                <span className="travel-badge"><img className="flag-img" src="https://flagcdn.com/w20/th.png" srcSet="https://flagcdn.com/w40/th.png 2x" alt="Thaïlande" loading="lazy" /><span>Thaïlande</span></span>
              </div>
            </div>
          </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">7+</div>
              <div className="stat-label">Années d'expérience</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projets réalisés</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction client</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Sociétés partenaires</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
