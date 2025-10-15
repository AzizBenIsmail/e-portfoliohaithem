import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Portfolio.css';
import { useTranslation } from 'react-i18next';

let imagesMap = {};
try {
  const reqImgs = require.context('../assets/Portfolio', true, /\.(png|jpe?g|svg|webp)$/);
  reqImgs.keys().forEach(key => {
    imagesMap[key.replace('./', '')] = reqImgs(key).default || reqImgs(key);
  });
} catch (e) {
  // ignore when require.context is not available
}

let pdfsMap = {};
try {
  const reqPdfs = require.context('../assets/Portfolio', true, /\.pdf$/);
  reqPdfs.keys().forEach(key => {
    pdfsMap[key.replace('./', '')] = reqPdfs(key).default || reqPdfs(key);
  });
} catch (e) {
  // ignore when require.context is not available
}

const findImageFor = (title) => {
  // try to find any image whose path contains a normalized title
  const norm = title.toLowerCase().replace(/\s+/g, '');
  const matchKey = Object.keys(imagesMap).find(k => k.toLowerCase().replace(/\s+/g, '').includes(norm));
  return matchKey ? imagesMap[matchKey] : null;
}

const Portfolio = () => {
  const { t } = useTranslation();
  const items = t('portfolio.items', { returnObjects: true }) || [];
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPdf, setModalPdf] = useState(null);
  const [modalTitle, setModalTitle] = useState('');
  // keep simple iframe viewer state

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setModalOpen(false); };
    if (modalOpen) {
      window.addEventListener('keydown', onKey);
    }
    return () => {
      window.removeEventListener('keydown', onKey);
    };
  }, [modalOpen]);

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
      // nothing special to clear when closing iframe modal
    }
    // set aria-hidden on header for accessibility
    try {
      const headerEl = document.querySelector('.header');
      if (headerEl) headerEl.setAttribute('aria-hidden', modalOpen ? 'true' : 'false');
    } catch (e) {
      // ignore
    }
  }, [modalOpen]);
  

  if (!items || items.length === 0) return null;

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <h2>{t('portfolio.title')}</h2>
          <p>{t('portfolio.subtitle')}</p>
        </div>

  <div className="portfolio-grid">
          {items.map(item => {
            const img = findImageFor(item.title);
            // find pdf by matching normalized title in pdfsMap keys
            const norm = item.title.toLowerCase().replace(/\s+/g, '');
            const pdfKey = Object.keys(pdfsMap).find(k => k.toLowerCase().replace(/\s+/g, '').includes(norm));
            const pdf = pdfKey ? pdfsMap[pdfKey] : null;

            const onClick = () => {
              if (pdf) {
                setModalPdf(pdf);
                setModalTitle(item.title);
                setModalOpen(true);
              }
            };

            return (
              <div
                key={item.id}
                className={`portfolio-card ${pdf ? 'clickable' : ''}`}
                onClick={onClick}
                role={pdf ? 'link' : 'button'}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { onClick(); } }}
              >
                <div className="portfolio-image">
                  {img ? (
                    <img src={img} alt={item.title} />
                  ) : (
                    <div className="portfolio-placeholder">📁</div>
                  )}
                </div>
                <div className="portfolio-body">
                  <h3>{item.title}</h3>
                  {pdf && <div className="portfolio-pdf-indicator">PDF disponible</div>}
                </div>
              </div>
            );
          })}
        </div>

        {modalOpen && createPortal(
          <div className="portfolio-modal" role="dialog" aria-modal="true" aria-label={modalTitle} onClick={() => setModalOpen(false)}>
            <div className="portfolio-modal-inner" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{modalTitle}</h3>
                <button className="modal-close" onClick={() => setModalOpen(false)} aria-label="Close">✕</button>
              </div>
              <div className="modal-body">
                {/* Only show iframe and download button */}
                {modalPdf ? (
                  <>
                    <iframe src={modalPdf} title={modalTitle} frameBorder="0" style={{ width: '100%', height: '86vh' }} />
                  </>
                ) : (
                  <div>Aucun PDF trouvé.</div>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
};

export default Portfolio;
