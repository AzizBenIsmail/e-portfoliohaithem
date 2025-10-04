import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      period: "2017 - 2024",
      company: "Bureau d'Études Offshore",
      position: "Ingénieur Génie Civil Senior",
      location: "Offshore",
      description: "Conception et calcul de structures en béton armé pour des projets offshore complexes.",
      achievements: [
        "Direction de 15+ projets de structures marines",
        "Formation d'une équipe de 5 ingénieurs juniors",
        "Optimisation des coûts de construction de 20%",
        "Respect systématique des normes françaises et européennes"
      ],
      technologies: ["Autocad", "Revit", "Robot Structural", "Eurocodes"]
    },
    {
      period: "2015 - 2017",
      company: "Société de Sous-traitance",
      position: "Ingénieur Génie Civil",
      location: "Offshore",
      description: "Calculs de structures et rédaction de rapports techniques pour des clients français.",
      achievements: [
        "Réalisation de 25+ études de faisabilité",
        "Collaboration avec 8 sociétés françaises",
        "Développement de méthodes de calcul optimisées",
        "Formation aux logiciels de CAO"
      ],
      technologies: ["Autocad", "SAP2000", "Excel", "Tekla"]
    },
    {
      period: "2014 - 2015",
      company: "Premier Poste",
      position: "Ingénieur Junior",
      location: "Offshore",
      description: "Début de carrière dans l'ingénierie offshore avec focus sur l'apprentissage des normes.",
      achievements: [
        "Apprentissage des normes françaises",
        "Participation à 10+ projets pilotes",
        "Formation intensive aux logiciels spécialisés",
        "Intégration dans l'équipe offshore"
      ],
      technologies: ["Autocad", "Excel", "Formation continue"]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2>Mon Expérience</h2>
          <p>7 années d'expertise dans les bureaux d'études offshore</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-period">{exp.period}</div>
                <h3 className="timeline-position">{exp.position}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <div className="timeline-location">📍 {exp.location}</div>
                
                <p className="timeline-description">{exp.description}</p>
                
                <div className="timeline-achievements">
                  <h5>Réalisations clés :</h5>
                  <ul>
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="timeline-technologies">
                  <h5>Technologies utilisées :</h5>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-summary">
          <div className="summary-card">
            <h3>Expertise Clé</h3>
            <div className="expertise-items">
              <div className="expertise-item">
                <span className="expertise-icon">🏗️</span>
                <div>
                  <h4>Structures Offshore</h4>
                  <p>Conception de bâtiments résistants aux conditions marines</p>
                </div>
              </div>
              <div className="expertise-item">
                <span className="expertise-icon">📐</span>
                <div>
                  <h4>Calculs Avancés</h4>
                  <p>Dimensionnement selon les normes françaises et européennes</p>
                </div>
              </div>
              <div className="expertise-item">
                <span className="expertise-icon">🤝</span>
                <div>
                  <h4>Collaboration</h4>
                  <p>Expérience avec des sociétés françaises en sous-traitance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
