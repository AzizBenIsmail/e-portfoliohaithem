import React from 'react';
import './Skills.css';
import autocadLogo from '../assets/images/autocad.png';
import gstarcadLogo from '../assets/images/Gstarcad.png';
import Advance_ConcretLogo from '../assets/images/Advance_Concrete.png';
import Autocad_Structural_DetailingLogo from '../assets/images/Autocad_Structural_Detailing.png';
import Arche_GraitecLogo from '../assets/images/Arche_Graitec.jpeg';
import RevitLogo from '../assets/images/Revit.png';

import Advance_DesignLogo from '../assets/images/Advance_Design.png';
import MS_OfficeLogo from '../assets/images/MS_Office.png';
import Nova_Logo from '../assets/images/Nova.png';
//import Arma_Logo from '../assets/images/Arma.png';
import ADFERLogo from '../assets/images/ADFER.png';
import ARMACADLogo from '../assets/images/ARMACAD.png';


import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  const technicalSkills = t('skills_extra.technicalItems', { returnObjects: true }) || [];

  const softwareSkills = [
    { name: 'Autocad', icon: autocadLogo, level: 100 , niveau : t('skills.level.pro') },
    { name: 'Gstarcad', icon: gstarcadLogo, level: 100, niveau : t('skills.level.pro') },
    { name: 'Advance Concrete', icon: Advance_ConcretLogo, level: 100 , niveau : t('skills.level.pro')},
    { name: 'ASD', icon: Autocad_Structural_DetailingLogo, level: 100 , niveau : t('skills.level.pro')},
    { name: 'Arche Graitec', icon: Arche_GraitecLogo, level: 100 , niveau : t('skills.level.pro')},
    { name: 'Revit', icon: RevitLogo, level: 80 , niveau : t('skills.level.confirmed')},
    { name: 'Advance Design', icon: Advance_DesignLogo, level: 70, niveau : t('skills.level.confirmed') },
    { name: 'MS Office', icon: MS_OfficeLogo, level: 100, niveau : t('skills.level.pro') },
    { name: 'Nova +', icon: Nova_Logo, level: 100 , niveau : t('skills.level.pro')},
    { name: 'Arma +', icon: '⚙️', level: 100 , niveau : t('skills.level.pro')},
    { name: 'ADFER', icon: ADFERLogo, level: 50 , niveau : t('skills.level.amateur')},
    { name: 'ARMACAD', icon: ARMACADLogo, level: 50 , niveau : t('skills.level.amateur')}
  ];

  const languages = t('skills_extra.languages', { returnObjects: true }) || [];

  const certifications = t('skills_extra.certifications', { returnObjects: true }) || [];

  return (
    <section id="competences" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>{t('skills.title')}</h2>
          <p>{t('skills.subtitle')}</p>
        </div>

        <div className="skills-content">
          <div className="skills-section">
            <h3>{t('skills.technicalTitle')}</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <h4>{skill.name}</h4>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="skill-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h3>{t('skills.softwareTitle')}</h3>
            <div className="software-grid">
              {softwareSkills.map((software, index) => (
                <div key={index} className="software-item">
                  <div className="software-icon">
                    {typeof software.icon === 'string' && (software.icon.startsWith('/') || software.icon.includes('.png') || software.icon.includes('.jpg') || software.icon.includes('.svg')) ? (
                      <img src={software.icon} alt={software.name} className="software-logo" />
                    ) : typeof software.icon !== 'string' ? (
                      <img src={software.icon} alt={software.name} className="software-logo" />
                    ) : (
                      software.icon
                    )}
                  </div>
                  <h4>{software.name}</h4>
                  <div className="software-level">
                    <div className="level-bar">
                      <div 
                        className="level-progress" 
                        style={{ width: `${software.level}%` }}
                      ></div>
                    </div>
                    <span>{software.niveau}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h3>{t('skills.languagesTitle')}</h3>
            <div className="languages-grid">
              {languages.map((language, index) => (
                <div key={index} className="language-item">
                  <div className="language-info">
                    <h4>{language.name}</h4>
                    {language.native && <span className="native-badge">{t('skills.native')}</span>}
                  </div>
                  <div className="language-level">
                    <div className="level-bar">
                      <div 
                        className="level-progress" 
                        style={{ width: `${language.level}%` }}
                      ></div>
                    </div>
                    <span>{language.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>        
      </div>
    </section>
  );
};

export default Skills;
