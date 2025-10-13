import React, { useState } from 'react';
import './Formation.css';
import diplomePDF from '../assets/certif/Diplôme_national_dingénieur.pdf';
import baccalaureatPDF from '../assets/certif/Diplôme_de_baccalauréat.pdf';
import licencePDF from '../assets/certif/Licence_appliquée.pdf';

const Formation = () => {
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
                  <span className="degree-year">2021</span>
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
                  <button onClick={() => openModal(diplomePDF, 'Diplôme National d\'Ingénieur')} className="btn-primary">
                    📄 Voir le diplôme
                  </button>
                  <button onClick={() => downloadPDF(diplomePDF, 'Diplôme_national_dingénieur.pdf')} className="btn-secondary">
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
                  <span className="degree-year">2018</span>
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
                <div className="actions">
                  <button onClick={() => openModal(licencePDF, 'Licence Appliquée en Génie Civil')} className="btn-primary">
                    📄 Voir le diplôme
                  </button>
                  <button onClick={() => downloadPDF(licencePDF, 'Licence_appliquée.pdf')} className="btn-secondary">
                    ⬇️ Télécharger
                  </button>
                </div>
              </div>
            </div>

            <div className="education-card">
              <div className="card-header">
                <div className="degree-icon">🏫</div>
                <div className="degree-info">
                  <h3>Baccalauréat</h3>
                  <span className="degree-year">2014</span>
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
                <div className="actions">
                  <button onClick={() => openModal(baccalaureatPDF, 'Diplôme de Baccalauréat')} className="btn-primary">
                    📄 Voir le diplôme
                  </button>
                  <button onClick={() => downloadPDF(baccalaureatPDF, 'Diplôme_de_baccalauréat.pdf')} className="btn-secondary">
                    ⬇️ Télécharger
                  </button>
                </div>
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
      {isModalOpen && modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{modalContent.title}</h3>
              <button className="modal-close" onClick={closeModal}>
                ✕
              </button>
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
              <button onClick={() => downloadPDF(modalContent.pdf, modalContent.title.replace(/\s+/g, '_') + '.pdf')} className="btn-download-modal">
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
