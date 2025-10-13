import React, { useEffect, useState } from 'react';
import './Header.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initial);
    if (initial === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    if (next === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>Haythem Ayadi</h2>
            <span>Ingénieur Génie Civil</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('accueil')}>{t('header.home')}</button></li>
              <li><button onClick={() => scrollToSection('apropos')}>{t('header.about')}</button></li>
              <li><button onClick={() => scrollToSection('competences')}>{t('header.skills')}</button></li>
              <li><button onClick={() => scrollToSection('formation')}>{t('header.formation')}</button></li>
              <li><button onClick={() => scrollToSection('experience')}>{t('header.experience')}</button></li>
              <li><button onClick={() => scrollToSection('projets')}>{t('header.projects')}</button></li>
              <li><button onClick={() => scrollToSection('contact')}>{t('header.contact')}</button></li>
            </ul>
          </nav>

          <button className="theme-toggle" onClick={toggleTheme} aria-label="Basculer le thème">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <div className="language-select">
            <button
              className={`lang-btn ${i18n.language === 'fr' ? 'active' : ''}`}
              onClick={() => changeLanguage('fr')}
              aria-label="Langue Français"
            >
              FR
            </button>
            <button
              className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
              aria-label="Language English"
            >
              EN
            </button>
          </div>

          <div className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
