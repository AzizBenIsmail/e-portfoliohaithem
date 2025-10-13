import React from 'react';
import './Formation.css';
import diplomePDF from '../assets/certif/Diplômes.pdf';

const Formation = () => {
  return (
    <section id="formation" className="formation">
      <div className="container">
        <div className="section-header">
          <h2>Formation</h2>
          <p>Mon parcours académique et mes certifications</p>
        </div>
        
        <div className="formation-content">
          <div className="diplome-card">
            <div className="diplome-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                <path d="M19 15L20.09 21.26L27 22L20.09 22.74L19 29L17.91 22.74L11 22L17.91 21.26L19 15Z" fill="currentColor"/>
                <path d="M5 15L6.09 21.26L13 22L6.09 22.74L5 29L3.91 22.74L-3 22L3.91 21.26L5 15Z" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="diplome-info">
              <h3>Diplôme d'Ingénieur</h3>
              <p className="diplome-description">
                Diplôme d'ingénieur en Génie Civil obtenu avec mention, 
                spécialisé dans la conception et l'analyse de structures 
                en béton armé.
              </p>
              
              <div className="diplome-details">
                <div className="detail-row">
                  <span className="detail-label">🏛️ Institution:</span>
                  <span className="detail-value">École d'Ingénieurs</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">📅 Année:</span>
                  <span className="detail-value">2017</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">🎯 Spécialisation:</span>
                  <span className="detail-value">Génie Civil</span>
                </div>
              </div>
              
              <div className="diplome-actions">
                <a 
                  href={diplomePDF} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-download"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15L8 11H10.5V6H13.5V11H16L12 15Z" fill="currentColor"/>
                    <path d="M4 18H20V20H4V18Z" fill="currentColor"/>
                  </svg>
                  Télécharger le diplôme
                </a>
                
                <a 
                  href={diplomePDF} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-view"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="currentColor"/>
                  </svg>
                  Visualiser le diplôme
                </a>
              </div>
            </div>
          </div>
          
          <div className="formation-stats">
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Années d'études</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Mention</div>
              <div className="stat-label">Bien</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Réussite</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formation;
