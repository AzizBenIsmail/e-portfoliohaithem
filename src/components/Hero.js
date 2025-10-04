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
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <div className="engineer-icon">👷‍♂️</div>
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
