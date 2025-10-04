import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/haithem' },
    { name: 'Email', icon: '📧', url: 'mailto:haithem.ingenieur@email.com' },
    { name: 'CV', icon: '📄', url: '#cv' }
  ];

  const quickLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À Propos', href: '#apropos' },
    { name: 'Compétences', href: '#competences' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Projets', href: '#projets' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Haithem</h3>
              <p>Ingénieur Génie Civil</p>
              <span className="specialization">Spécialiste Offshore</span>
            </div>
            <p className="footer-description">
              Ingénieur expérimenté en génie civil offshore, spécialisé dans 
              la conception de structures en béton armé pour environnements marins. 
              Recherche active d'opportunités en France.
            </p>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <p>📧 haithem.ingenieur@email.com</p>
              <p>📱 +33 6 XX XX XX XX</p>
              <p>📍 Recherche en France</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Réseaux</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Haithem - Ingénieur Génie Civil. Tous droits réservés.
            </p>
            <div className="footer-tags">
              <span className="tag">Génie Civil</span>
              <span className="tag">Offshore</span>
              <span className="tag">Béton Armé</span>
              <span className="tag">France</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
