import React, { useState, useEffect } from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';
import useInView from '../hooks/useInView';
import PermisPdf from '../assets/certif/Permis.pdf';
import Permis2Pdf from '../assets/certif/Permis2.pdf';

const Licenses = () => {
  const { t } = useTranslation();

  const licenses = [
    { code: 'AA', emoji: '🏍️', cat: 'heavy' },
    { code: 'B', emoji: '🚗', cat: 'light' },
    { code: 'BE', emoji: '🚗➕', cat: 'light' },
    { code: 'C', emoji: '🚚', cat: 'heavy' },
    { code: 'CE', emoji: '🚛', cat: 'heavy' },
    { code: 'D', emoji: '🚌', cat: 'bus' },
    { code: 'DE', emoji: '🚌➕', cat: 'bus' },
    { code: 'G', emoji: '🚐', cat: 'light' },
    { code: 'H', emoji: '🚜', cat: 'heavy' }
  ];

  const [sectionRef, sectionInView] = useInView({ once: true, threshold: 0.12 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

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
    <section id="permis" className={`licenses-section fade-in ${sectionInView ? 'in-view' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>🚦 {t('about.licensesTitle')}</h2>
          <p className="section-sub">{t('about.licensesNote')}</p>
        </div>

        <div className="license-grid modern">
          {licenses.map((l, idx) => (
            <div
              className={`license-card-item modern ${l.cat} hover-raise slide-up ${sectionInView ? 'in-view' : ''}`}
              key={l.code}
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              <div className="license-icon-emoji" aria-hidden="true">{l.emoji}</div>
              <div className="license-code">{l.code}</div>
              <div className="license-desc">{t(`about.licenses.${l.code}`)}</div>
            </div>
          ))}
        </div>

        <div className="license-files">
          <h4>{t('about.licensesTitle')} - {t('about.viewLicenses')}</h4>
          <div className="license-files-actions">
            <button
              onClick={() => openModal(PermisPdf, t('contact.viewRecto', { defaultValue: 'Permis (Recto)' }))}
              className="btn file-btn"
            >
              📄 {t('contact.viewRecto', { defaultValue: 'Permis (Recto)' })}
            </button>

            <button
              onClick={() => openModal(Permis2Pdf, t('contact.viewVerso', { defaultValue: 'Permis (Verso)' }))}
              className="btn file-btn"
            >
              📄 {t('contact.viewVerso', { defaultValue: 'Permis (Verso)' })}
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{modalContent.title}</h3>
              <button className="modal-close" onClick={closeModal}>✕</button>
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

export default Licenses;
