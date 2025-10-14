import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';

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

  return (
    <section id="permis" className="licenses-section">
      <div className="container">
        <div className="section-header">
          <h2>🚦 {t('about.licensesTitle')}</h2>
          <p className="section-sub">{t('about.licensesNote')}</p>
        </div>

        <div className="license-grid modern">
          {licenses.map((l) => (
            <div className={`license-card-item modern ${l.cat}`} key={l.code}>
              <div className="license-icon-emoji" aria-hidden="true">{l.emoji}</div>
              <div className="license-code">{l.code}</div>
              <div className="license-desc">{t(`about.licenses.${l.code}`)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Licenses;
