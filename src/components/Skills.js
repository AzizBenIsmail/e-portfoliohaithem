import React from 'react';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'Calcul de structures', level: 95, description: 'Analyse et dimensionnement de structures en béton armé' },
    { name: 'Logiciels CAO', level: 90, description: 'Autocad, Revit, Tekla Structures' },
    { name: 'Calculs offshore', level: 85, description: 'Structures marines et environnements hostiles' },
    { name: 'Normes françaises', level: 90, description: 'Eurocodes, DTU, règles BAEL' },
    { name: 'Gestion de projet', level: 80, description: 'Planification et coordination d\'équipes' },
    { name: 'Rapports techniques', level: 95, description: 'Rédaction de notes de calcul et rapports' }
  ];

  const softwareSkills = [
    { name: 'Autocad', icon: '📐', level: 90 },
    { name: 'Revit', icon: '🏗️', level: 85 },
    { name: 'Tekla Structures', icon: '🔧', level: 80 },
    { name: 'Robot Structural', icon: '🤖', level: 85 },
    { name: 'SAP2000', icon: '📊', level: 75 },
    { name: 'Excel Avancé', icon: '📈', level: 90 }
  ];

  const languages = [
    { name: 'Français', level: 95, native: true },
    { name: 'Anglais', level: 85, native: false },
    { name: 'Arabe', level: 100, native: true }
  ];

  return (
    <section id="competences" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Mes Compétences</h2>
          <p>Expertise technique et outils de conception</p>
        </div>

        <div className="skills-content">
          <div className="skills-section">
            <h3>Compétences Techniques</h3>
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
            <h3>Logiciels & Outils</h3>
            <div className="software-grid">
              {softwareSkills.map((software, index) => (
                <div key={index} className="software-item">
                  <div className="software-icon">{software.icon}</div>
                  <h4>{software.name}</h4>
                  <div className="software-level">
                    <div className="level-bar">
                      <div 
                        className="level-progress" 
                        style={{ width: `${software.level}%` }}
                      ></div>
                    </div>
                    <span>{software.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h3>Langues</h3>
            <div className="languages-grid">
              {languages.map((language, index) => (
                <div key={index} className="language-item">
                  <div className="language-info">
                    <h4>{language.name}</h4>
                    {language.native && <span className="native-badge">Natif</span>}
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
