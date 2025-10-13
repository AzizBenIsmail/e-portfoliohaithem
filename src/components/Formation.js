import React, { useState } from 'react';
import './Formation.css';
import diplomePDF from '../assets/certif/Diplôme_national_dingénieur.pdf';

const Formation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = diplomePDF;
    link.download = 'Diplôme_national_dingénieur.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="formation" className="formation">
      <div className="container">
        <div className="section-header">
          <h2>Formation</h2>
          <p>Mon parcours académique et mes certifications</p>
        </div>
        
        <div className="formation-content">
          <div className="education-grid">
            <div className="education-card featured">
              <div className="card-header">
                <div className="degree-icon">🎓</div>
                <div className="degree-info">
                  <h3>Diplôme national d'ingénieur</h3>
                  <span className="degree-year">2017</span>
                </div>
              </div>
              <div className="card-body">
                <div className="institution">
                  <span className="institution-icon">🏛️</span>
                  Université Arabe des Sciences, Tunis
                </div>
                <p className="description">
                  Projet de fin d'étude intitulé : Etude d'un bâtiment Ilot WURTZ-JUVISY sur ORGE-FRANCE (note : 16/20)
                </p>
                <div className="actions">
                  <button onClick={openModal} className="btn-primary">
                    📄 Voir le diplôme
                  </button>
                  <button onClick={downloadPDF} className="btn-secondary">
                    ⬇️ Télécharger
                  </button>
                </div>
              </div>
            </div>

            <div className="education-card">
              <div className="card-header">
                <div className="degree-icon">📜</div>
                <div className="degree-info">
                  <h3>Licence appliquée</h3>
                  <span className="degree-year">2014</span>
                </div>
              </div>
              <div className="card-body">
                <div className="institution">
                  <span className="institution-icon">🏛️</span>
                  ISTEUB, Tunis
                </div>
                <p className="description">
                  Génie Civil - Projet MARRIOTT (R+12 et 3SS) - Mention : Très bien
                </p>
              </div>
            </div>

            <div className="education-card">
              <div className="card-header">
                <div className="degree-icon">🏫</div>
                <div className="degree-info">
                  <h3>Baccalauréat</h3>
                  <span className="degree-year">2011</span>
                </div>
              </div>
              <div className="card-body">
                <div className="institution">
                  <span className="institution-icon">🏛️</span>
                  Lycée 2 mars 1934, Tunis
                </div>
                <p className="description">
                  Baccalauréat Science technique
                </p>
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

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Diplôme National d'Ingénieur</h3>
              <button className="modal-close" onClick={closeModal}>
                ✕
              </button>
            </div>
            <div className="modal-body">
              <iframe
                src={diplomePDF}
                width="100%"
                height="600px"
                title="Diplôme National d'Ingénieur"
                style={{ border: 'none', borderRadius: '8px' }}
              />
            </div>
            <div className="modal-footer">
              <button onClick={downloadPDF} className="btn-download-modal">
                ⬇️ Télécharger le PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Formation;
