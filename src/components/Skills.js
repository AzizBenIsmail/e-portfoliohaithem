import React from 'react';
import './Skills.css';

const Skills = () => {
  const getEducationIcon = (degree) => {
    const lower = (degree || '').toLowerCase();
    if (lower.includes('ingénieur') || lower.includes("ingénieur")) return '🎓';
    if (lower.includes('licence')) return '📜';
    if (lower.includes('baccalauréat')) return '🏫';
    return '🎓';
  };
  const technicalSkills = [
    { name: 'Calcul de structures', level: 95, description: 'Analyse et dimensionnement de structures en béton armé' },
    { name: 'Logiciels CAO', level: 90, description: 'Autocad, Revit, Tekla Structures' },
    { name: 'Calculs offshore', level: 85, description: 'Structures marines et environnements hostiles' },
    { name: 'Normes françaises', level: 90, description: 'Eurocodes, DTU, règles BAEL' },
    { name: 'Gestion de projet', level: 80, description: 'Planification et coordination d\'équipes' },
    { name: 'Rapports techniques', level: 95, description: 'Rédaction de notes de calcul et rapports' }
  ];

  const softwareSkills = [
    { name: 'Autocad', icon: '📐', level: 100 },
    { name: 'Gstarcad', icon: '📏', level: 100 },
    { name: 'Advance Concrete', icon: '🧱', level: 100 },
    { name: 'Autocad Structural Detailing', icon: '🏗️', level: 100 },
    { name: 'Arche Graitec', icon: '🧮', level: 100 },
    { name: 'Revit', icon: '🏢', level: 80 },
    { name: 'Advance Design', icon: '🛠️', level: 70 },
    { name: 'MS Office', icon: '📊', level: 100 },
    { name: 'Nova +', icon: '🧩', level: 100 },
    { name: 'Arma +', icon: '⚙️', level: 100 },
    { name: 'ADFER', icon: '📐', level: 50 },
    { name: 'ARMACAD', icon: '🏗️', level: 50 }
  ];

  const languages = [
    { name: 'Français', level: 90, native: false },
    { name: 'Anglais', level: 80, native: false },
    { name: 'Arabe', level: 100, native: true }
  ];

  const certifications = [
    { title: 'Certificat General English (Levels 5, 6, 7 & 8)', org: 'Amideast' },
    { title: 'Certificat Revit Structure', org: 'Ironhoster Academy' },
  ];

  const education = [
    {
      degree: "Diplôme national d’ingénieur",
      institution: 'Université Arabe des Science, Tunis',
      details: "Projet de fin d'étude intitulé : Etude d'un bâtiment Ilot WURTZ-JUVISY sur ORGE-FRANCE (note : 16/20)"
    },
    {
      degree: 'Licence appliquée en génie civil',
      institution: "Institut Supérieur des Technologies de l'Environnement d'Urbanisme et des Bâtiments, Tunis",
      details: "Projet de fin d'étude : Gestion, suivi, planification et métré de l'hôtel MARRIOTT (R+12 et 3SS) (mentien : Trés bien)"
    },
    {
      degree: 'Baccalauréat Science technique',
      institution: 'Lycée 2 mars 1934, Tunis',
      details: ''
    }
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

        <div className="skills-section">
          <h3>Certificats & Formations</h3>
          <div className="languages-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="language-item">
                <div className="language-info">
                  <h4>{cert.title}</h4>
                  <span className="native-badge">{cert.org}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h3>Formation académique</h3>
          <div className="education-timeline">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-dot" aria-hidden="true"></div>
                <div className="education-card">
                  <div className="education-card-header">
                    <div className="education-icon" aria-hidden="true">{getEducationIcon(edu.degree)}</div>
                    <h4 className="education-degree">{edu.degree}</h4>
                  </div>
                  <div className="education-institution-badge">{edu.institution}</div>
                  {edu.details && (
                    <p className="education-details">{edu.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
