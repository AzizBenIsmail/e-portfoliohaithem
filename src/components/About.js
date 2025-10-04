import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="apropos" className="about">
      <div className="container">
        <div className="section-header">
          <h2>À Propos de Moi</h2>
          <p>Mon parcours et ma passion pour l'ingénierie civile</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Ingénieur Génie Civil Expérimenté</h3>
              <p>
                Avec 7 années d'expérience dans les bureaux d'études offshore, 
                je me spécialise dans la conception et l'analyse de structures 
                en béton armé pour des projets complexes en environnement marin.
              </p>
            </div>
            
            <div className="about-details">
              <div className="detail-item">
                <h4>🎯 Spécialisation</h4>
                <p>Bâtiments en béton armé pour environnements offshore</p>
              </div>
              
              <div className="detail-item">
                <h4>🏢 Expérience</h4>
                <p>7 ans dans des bureaux d'études en sous-traitance</p>
              </div>
              
              <div className="detail-item">
                <h4>🇫🇷 Objectif</h4>
                <p>Recherche d'opportunités en France</p>
              </div>
              
              <div className="detail-item">
                <h4>🤝 Collaboration</h4>
                <p>Expérience avec des sociétés françaises</p>
              </div>
            </div>
            
            <div className="about-mission">
              <h4>Ma Mission</h4>
              <p>
                Concevoir des structures durables et sécurisées qui résistent 
                aux conditions extrêmes des environnements offshore, tout en 
                respectant les normes françaises et internationales les plus 
                strictes.
              </p>
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
