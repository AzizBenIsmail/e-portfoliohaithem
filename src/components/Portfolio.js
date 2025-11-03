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

// Also include images placed under src/assets/images (some images may be added there)
try {
  const reqImgs2 = require.context('../assets/images', false, /\.(png|jpe?g|svg|webp)$/);
  reqImgs2.keys().forEach(key => {
    // prefix with folder name to avoid key collision with Portfolio subfolders
    const cleanKey = key.replace('./', 'images/');
    imagesMap[cleanKey] = reqImgs2(key).default || reqImgs2(key);
  });
} catch (e) {
  // ignore when require.context is not available
}

// Include images from modelisation folder
try {
  const reqImgs3 = require.context('../assets/modelisation', true, /\.(png|jpe?g|svg|webp)$/);
  reqImgs3.keys().forEach(key => {
    // prefix with folder name to avoid key collision
    const cleanKey = key.replace('./', 'modelisation/');
    imagesMap[cleanKey] = reqImgs3(key).default || reqImgs3(key);
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
  // guard: title may be undefined coming from translations
  if (!title || typeof title !== 'string') return null;
  // try to find any image whose path contains a normalized title
  const norm = title.toLowerCase().replace(/\s+/g, '');
  const matchKey = Object.keys(imagesMap).find(k => k.toLowerCase().replace(/\s+/g, '').includes(norm));
  return matchKey ? imagesMap[matchKey] : null;
}

const findPdfsFor = (title) => {
  if (!title || typeof title !== 'string') return [];
  const norm = title.toLowerCase().replace(/\s+/g, '');
  return Object.entries(pdfsMap)
    .filter(([key]) => key.toLowerCase().replace(/\s+/g, '').includes(norm))
    .map(([_, value]) => value);
}

const Portfolio = () => {
  const { t } = useTranslation();
  const items = t('portfolio.items', { returnObjects: true }) || [];
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPdf, setModalPdf] = useState(null);
  const [modalTitle, setModalTitle] = useState('');
  const [currentPdfs, setCurrentPdfs] = useState([]);
  const [currentPdfIndex, setCurrentPdfIndex] = useState(0);
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

  {/* Section des plans de détails techniques */}
  <div className="portfolio-grid">
          {items.map(item => {
            const title = (item && item.title) ? item.title : '';
            const img = findImageFor(title);
            const pdfs = findPdfsFor(title);

            const onClick = () => {
              if (pdfs.length > 0) {
                setCurrentPdfs(pdfs);
                setCurrentPdfIndex(0);
                setModalPdf(pdfs[0]);
                setModalTitle(item.title);
                setModalOpen(true);
              }
            };

            return (
              <div
                key={item.id}
                className={`portfolio-card ${pdfs.length > 0 ? 'clickable' : ''}`}
                onClick={onClick}
                role={pdfs.length > 0 ? 'link' : 'button'}
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
                  {pdfs.length > 0 && (
                    <div className="portfolio-pdf-indicator">
                      {pdfs.length} PDF{pdfs.length > 1 ? 's' : ''} disponible{pdfs.length > 1 ? 's' : ''}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Section des modélisations */}
        <br></br>
        <div className="section-header">
          <h3>{t('portfolio.modelisationTitle')}</h3>
        </div>
        <div className="portfolio-grid">
          {t('portfolio.modelisationItems', { returnObjects: true })?.map(item => {
            const title = (item && item.title) ? item.title : '';
            const img = findImageFor(title);
            const norm = title.toLowerCase().replace(/\s+/g, '');
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
                {modalPdf ? (
                  <>
                    <div className="modal-controls" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          if (currentPdfIndex > 0) {
                            setCurrentPdfIndex(currentPdfIndex - 1);
                            setModalPdf(currentPdfs[currentPdfIndex - 1]);
                          }
                        }}
                        disabled={currentPdfIndex === 0}
                        style={{ padding: '5px 10px' }}
                      >
                        ← Précédent
                      </button>
                      <span>PDF {currentPdfIndex + 1} sur {currentPdfs.length}</span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          if (currentPdfIndex < currentPdfs.length - 1) {
                            setCurrentPdfIndex(currentPdfIndex + 1);
                            setModalPdf(currentPdfs[currentPdfIndex + 1]);
                          }
                        }}
                        disabled={currentPdfIndex === currentPdfs.length - 1}
                        style={{ padding: '5px 10px' }}
                      >
                        Suivant →
                      </button>
                    </div>
                    <iframe src={modalPdf} title={modalTitle} frameBorder="0" style={{ width: '100%', height: '82vh' }} />
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
