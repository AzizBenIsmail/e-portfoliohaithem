import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="accueil" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Bonjour, je suis</span>
              <span className="name">Haythem Ayadi</span>
              <span className="title">Ingénieur Génie Civil</span>
            </h1>
            <p className="hero-description">
              Spécialisé dans les bureaux d'études offshore avec 7 ans d'expérience 
              dans la conception de bâtiments en béton armé. Expert en sous-traitance 
              pour des sociétés françaises, je recherche de nouvelles opportunités 
              en France.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('projets').scrollIntoView({ behavior: 'smooth' })}
              >
                Voir mes projets
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Me contacter
              </button>
              <a 
                href="/Curriculum-vitae.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                📄 Télécharger mon CV
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
