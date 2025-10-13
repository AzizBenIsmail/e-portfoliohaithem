import React from 'react';
import './Hero.css';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="accueil" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">{t('hero.greeting')}</span>
              <span className="name">{t('hero.name')}</span>
              <span className="title">{t('hero.title')}</span>
            </h1>
            <p className="hero-description">{t('hero.description')}</p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('projets').scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.seeProjects')}
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.contactMe')}
              </button>
              <a 
                href="/Curriculum-vitae.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                {t('hero.downloadCV')}
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image-container">
              <img 
                src="/haythem-profile.jpg" 
                alt="Haythem Ayadi - Ingénieur Génie Civil"
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder" style={{display: 'none'}}>
                <div className="engineer-icon">👷‍♂️</div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
