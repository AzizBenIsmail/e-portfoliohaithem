import React, { useState } from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const { t } = useTranslation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi (à remplacer par une vraie API)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: t('contact.info.emailTitle', { defaultValue: 'Email' }),
      value: 'Engineer.haithem.ayadi@gmail.com',
      action: 'mailto:Engineer.haithem.ayadi@gmail.com'
    },
    {
      icon: '📱',
      title: t('contact.info.phoneTitle', { defaultValue: 'Téléphone' }),
      value: '+33 611488502',
      action: 'tel:+33611488502'
    },
    {
      icon: '📍',
      title: t('contact.info.locationTitle', { defaultValue: 'Localisation' }),
      value: t('contact.address'),
      action: null
    },
    {
      icon: '🟢',
      title: t('contact.info.whatsappTitle', { defaultValue: 'WhatsApp' }),
      value: '+216 23294229',
      action: 'https://wa.me/21623294229'
    },
    {
      icon: '💼',
      title: t('contact.info.linkedInTitle', { defaultValue: 'LinkedIn' }),
      value: 'linkedin.com/in/ayadi-haithem-aa26791a9',
      action: 'https://www.linkedin.com/in/ayadi-haithem-aa26791a9/'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.subtitle')}</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>{t('contact.infoTitle')}</h3>
            <p>
              {t('contact.available')} 
              {t('contact.subtitle')}
            </p>
            
            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-details">
                    <h4>{item.title}</h4>
                    {item.action ? (
                      <a href={item.action} target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="availability">
              <h4>{t('contact.availabilityTitle')}</h4>
              <p>
                <span className="status-indicator available"></span>
                {t('contact.available')}
              </p>
              <p>
                <span className="status-indicator"></span>
                {t('contact.address')}
              </p>
              <div className="cv-download">
                <a 
                  href="/Curriculum-vitae.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cv-btn"
                >
                  {t('contact.downloadCV')}
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>{t('contact.form.formTitle')}</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.form.placeholders.name')}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.form.placeholders.email')}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company">{t('contact.form.company')}</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t('contact.form.placeholders.company')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t('contact.form.subject')}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form.placeholders.subject')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder={t('contact.form.placeholders.message')}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.sendMessage')}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">{t('contact.form.success')}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
