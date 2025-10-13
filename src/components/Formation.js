import React, { useState } from 'react';
import './Formation.css';
import { useTranslation } from 'react-i18next';
import diplomePDF from '../assets/certif/Diplôme_national_dingénieur.pdf';
import baccalaureatPDF from '../assets/certif/Diplôme_de_baccalauréat.pdf';
import licencePDF from '../assets/certif/Licence_appliquée.pdf';
import tcf1PDF from '../assets/certif/TCF1.pdf';
import tcf2PDF from '../assets/certif/TCF2.pdf';
import level5PDF from '../assets/certif/LEVEL 5.pdf';
import level6PDF from '../assets/certif/LEVEL 6.pdf';
import level7PDF from '../assets/certif/LEVEL 7.pdf';
import level8PDF from '../assets/certif/LEVEL 8.pdf';
import revitCertPDF from '../assets/certif/Certificat_Revit_Structure_Ayadi_Haithem.pdf';
import institutFrancaisLogo from '../assets/images/Institut_Francais.jpeg';
import amideastLogo from '../assets/images/Amideast.jpeg';
import franceFlag from '../assets/images/Fr.jpeg';
import usaFlag from '../assets/images/Usa.jpeg';

const Formation = () => {
  const { t } = useTranslation();
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
          <h2>{t('formation.title')}</h2>
          <p>{t('formation.subtitle')}</p>
        </div>
        
        <div className="formation-content">
          <div className="education-grid">
            <div className="education-card featured">
              <div className="card-header">
                <div className="degree-icon">🎓</div>
                <div className="degree-info">
                  <h3>{t('formation.degree.engineerTitle')}</h3>
                  <span className="degree-year">2021</span>
                </div>
              </div>
              <div className="card-body">
                <div className="institution">
                  <span className="institution-icon">🏛️</span>
                  {t('formation.degree.engineerInstitution')}
                </div>
                <p className="description">{t('formation.degree.engineerDescription')}</p>
                <div className="actions">
                  <button onClick={() => openModal(diplomePDF, 'Diplôme National d\'Ingénieur')} className="btn-primary">
                    {t('formation.viewDiploma')}
                  </button>
                  <button onClick={() => downloadPDF(diplomePDF, 'Diplôme_national_dingénieur.pdf')} className="btn-secondary">
                    {t('formation.download')}
                  </button>
                </div>
              </div>
            </div>

            <div className="education-card">
              <div className="card-header">
                <div className="degree-icon">📜</div>
                <div className="degree-info">
                  <h3>{t('formation.degree.licenseTitle')}</h3>
                  <span className="degree-year">2018</span>
                </div>
              </div>
              <div className="card-body">
                <div className="institution">
                  <span className="institution-icon">🏛️</span>
                  {t('formation.degree.licenseInstitution')}
                </div>
                <p className="description">{t('formation.degree.licenseDescription')}</p>
                <div className="actions">
                  <button onClick={() => openModal(licencePDF, t('formation.degree.licenseTitle'))} className="btn-primary">
                    {t('formation.viewDiploma')}
                  </button>
                  <button onClick={() => downloadPDF(licencePDF, 'Licence_appliquée.pdf')} className="btn-secondary">
                    {t('formation.download')}
                  </button>
                </div>
              </div>
            </div>

            <div className="education-card">
              <div className="card-header">
                <div className="degree-icon">🏫</div>
                <div className="degree-info">
                  <h3>{t('formation.degree.baccalaureateTitle')}</h3>
                  <span className="degree-year">2014</span>
                </div>
              </div>
              <div className="card-body">
                <div className="institution">
                  <span className="institution-icon">🏛️</span>
                  {t('formation.degree.baccalaureateInstitution')}
                </div>
                <p className="description">{t('formation.degree.baccalaureateDescription')}</p>
                <div className="actions">
                  <button onClick={() => openModal(baccalaureatPDF, t('formation.degree.baccalaureateTitle'))} className="btn-primary">
                    {t('formation.viewDiploma')}
                  </button>
                  <button onClick={() => downloadPDF(baccalaureatPDF, 'Diplôme_de_baccalauréat.pdf')} className="btn-secondary">
                    {t('formation.download')}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Section Certifications Linguistiques */}
          <div className="certifications-section">
            <h3>{t('formation.linguisticCerts')}</h3>
            <div className="certifications-grid">
              <div className="certification-card">
                <div className="cert-header">
                  <div className="cert-icon">
                    <img src={franceFlag} alt="Drapeau France" className="flag-icon" />
                  </div>
                  <div className="cert-info">
                    <h4>TCF (Test de Connaissance du Français)</h4>
                    <span className="cert-level">Niveau B2</span>
                  </div>
                </div>
                <div className="cert-body">
                  <div className="cert-org">
                    <img src={institutFrancaisLogo} alt="Institut Français" className="org-logo" />
                    Institut Français de Tunisie
                  </div>
                  <p className="cert-description">
                    Test de Connaissance du Français - Certification officielle de niveau linguistique
                  </p>
                  <div className="cert-actions">
                    <button onClick={() => openModal(tcf1PDF, t('formation.cert.tcfTitle'))} className="btn-primary">
                      {t('formation.viewDiploma')}
                    </button>
                    <button onClick={() => downloadPDF(tcf1PDF, 'TCF1.pdf')} className="btn-secondary">
                      {t('formation.download')}
                    </button>
                  </div>
                </div>
              </div>

              <div className="certification-card">
                <div className="cert-header">
                  <div className="cert-icon">
                    <img src={franceFlag} alt="Drapeau France" className="flag-icon" />
                  </div>
                  <div className="cert-info">
                    <h4>TCF (Test de Connaissance du Français)</h4>
                    <span className="cert-level">Niveau C1</span>
                  </div>
                </div>
                <div className="cert-body">
                  <div className="cert-org">
                  <img src={institutFrancaisLogo} alt="Institut Français" className="org-logo" />
                  Institut Français de Tunisie
                  </div>
                  <p className="cert-description">
                    Test de Connaissance du Français - Certification officielle de niveau linguistique avancé
                  </p>
                  <div className="cert-actions">
                    <button onClick={() => openModal(tcf2PDF, t('formation.cert.tcfTitle'))} className="btn-primary">
                      {t('formation.viewDiploma')}
                    </button>
                    <button onClick={() => downloadPDF(tcf2PDF, 'TCF2.pdf')} className="btn-secondary">
                      {t('formation.download')}
                    </button>
                  </div>
                </div>
              </div>

              <div className="certification-card">
                <div className="cert-header">
                  <div className="cert-icon">
                    <img src={usaFlag} alt="Drapeau USA" className="flag-icon" />
                  </div>
                  <div className="cert-info">
                    <h4>Certificat de Langue Anglaise</h4>
                    <span className="cert-level">Niveau 5</span>
                  </div>
                </div>
                <div className="cert-body">
                  <div className="cert-org">
                    <img src={amideastLogo} alt="Amideast" className="org-logo" />
                    Amideast
                  </div>
                  <p className="cert-description">
                    Certification en langue anglaise - Niveau intermédiaire
                  </p>
                  <div className="cert-actions">
                    <button onClick={() => openModal(level5PDF, t('formation.cert.englishCertTitle') + ' - Niveau 5')} className="btn-primary">
                      {t('formation.viewDiploma')}
                    </button>
                    <button onClick={() => downloadPDF(level5PDF, 'LEVEL_5.pdf')} className="btn-secondary">
                      {t('formation.download')}
                    </button>
                  </div>
                </div>
              </div>

              <div className="certification-card">
                <div className="cert-header">
                  <div className="cert-icon">
                    <img src={usaFlag} alt="Drapeau USA" className="flag-icon" />
                  </div>
                  <div className="cert-info">
                    <h4>Certificat de Langue Anglaise</h4>
                    <span className="cert-level">Niveau 6</span>
                  </div>
                </div>
                <div className="cert-body">
                  <div className="cert-org">
                    <img src={amideastLogo} alt="Amideast" className="org-logo" />
                    Amideast
                  </div>
                  <p className="cert-description">
                    Certification en langue anglaise - Niveau avancé
                  </p>
                  <div className="cert-actions">
                    <button onClick={() => openModal(level6PDF, t('formation.cert.englishCertTitle') + ' - Niveau 6')} className="btn-primary">
                      {t('formation.viewDiploma')}
                    </button>
                    <button onClick={() => downloadPDF(level6PDF, 'LEVEL_6.pdf')} className="btn-secondary">
                      {t('formation.download')}
                    </button>
                  </div>
                </div>
              </div>

              <div className="certification-card">
                <div className="cert-header">
                  <div className="cert-icon">
                    <img src={usaFlag} alt="Drapeau USA" className="flag-icon" />
                  </div>
                  <div className="cert-info">
                    <h4>Certificat de Langue Anglaise</h4>
                    <span className="cert-level">Niveau 7</span>
                  </div>
                </div>
                <div className="cert-body">
                  <div className="cert-org">
                    <img src={amideastLogo} alt="Amideast" className="org-logo" />
                    Amideast
                  </div>
                  <p className="cert-description">
                    Certification en langue anglaise - Niveau expert
                  </p>
                  <div className="cert-actions">
                    <button onClick={() => openModal(level7PDF, t('formation.cert.englishCertTitle') + ' - Niveau 7')} className="btn-primary">
                      {t('formation.viewDiploma')}
                    </button>
                    <button onClick={() => downloadPDF(level7PDF, 'LEVEL_7.pdf')} className="btn-secondary">
                      {t('formation.download')}
                    </button>
                  </div>
                </div>
              </div>

              <div className="certification-card">
                <div className="cert-header">
                  <div className="cert-icon">
                    <img src={usaFlag} alt="Drapeau USA" className="flag-icon" />
                  </div>
                  <div className="cert-info">
                    <h4>Certificat de Langue Anglaise</h4>
                    <span className="cert-level">Niveau 8</span>
                  </div>
                </div>
                <div className="cert-body">
                  <div className="cert-org">
                    <img src={amideastLogo} alt="Amideast" className="org-logo" />
                    Amideast
                  </div>
                  <p className="cert-description">
                    Certification en langue anglaise - Niveau maîtrise
                  </p>
                  <div className="cert-actions">
                    <button onClick={() => openModal(level8PDF, t('formation.cert.englishCertTitle') + ' - Niveau 8')} className="btn-primary">
                      {t('formation.viewDiploma')}
                    </button>
                    <button onClick={() => downloadPDF(level8PDF, 'LEVEL_8.pdf')} className="btn-secondary">
                      {t('formation.download')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Certifications Techniques */}
          <div className="certifications-section">
            <h3>{t('formation.technicalCerts')}</h3>
            <div className="certifications-grid">
              <div className="certification-card">
                <div className="cert-header">
                  <div className="cert-icon">🏗️</div>
                  <div className="cert-info">
                    <h4>Certificat Revit Structure</h4>
                    <span className="cert-level">Ironhoster Academy</span>
                  </div>
                </div>
                <div className="cert-body">
                  <div className="cert-org">
                    <span className="org-icon">🎓</span>
                    Ironhoster Academy
                  </div>
                  <p className="cert-description">
                    Certification professionnelle en modélisation et conception de structures avec Revit Structure
                  </p>
                  <div className="cert-actions">
                    <button onClick={() => openModal(revitCertPDF, t('formation.cert.revitTitle'))} className="btn-primary">
                      {t('formation.viewDiploma')}
                    </button>
                    <button onClick={() => downloadPDF(revitCertPDF, 'Certificat_Revit_Structure_Ayadi_Haithem.pdf')} className="btn-secondary">
                      {t('formation.download')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
            <div className="formation-stats">
            <div className="stat-item">
              <div className="stat-number">6</div>
              <div className="stat-label">{t('formation.stats.years')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8</div>
              <div className="stat-label">{t('formation.stats.certs')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Mention</div>
              <div className="stat-label">{t('formation.stats.mention')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">{t('formation.stats.success')}</div>
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
                {t('formation.download')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Formation;
