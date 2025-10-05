import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      period: "04/2024 – Aujourd’hui",
      company: "M.A.M Engineering",
      position: "Ingénieur structure génie civil",
      location: "",
      description: "Conception, modélisation et calcul des structures en béton armé, charpentes métalliques et ossatures bois.",
      achievements: [
        "Élaboration des plans de coffrage et de ferraillage (neuf et réhabilitation)",
        "Rédaction de notes de calcul détaillées et justification des choix techniques",
        "Analyse des dossiers de marché et calcul de la descente des charges",
        "Coordination avec conception et exécution, conformité aux normes",
        "Vérification des plans et calculs pour garantir la qualité",
        "Assistance technique aux équipes chantier et gestion des ajustements"
      ],
      technologies: ["Autocad", "Gstarcad", "Graitec Arche", "Advance Design", "Revit"],
      projects: [
        "Hôtel Reims : fondations et superstructure",
        "École maternelle Gagny : structures porteuses et plans de coffrage",
        "61 logements Vernon : plans de structure du complexe résidentiel",
        "Ensemble immobilier Angerville : conception et calcul de trois bâtiments"
      ]
    },
    {
      period: "03/2018 – 03/2024 (6 ans)",
      company: "FAZ-Project (Sous-traitant GROUPE LEGENDRE CONSTRUCTION & STRUCTURISTE & ARES-CONCEPT)",
      position: "Dessinateur projeteur en béton armé",
      location: "",
      description: "Calculs détaillés, ferraillage et dessins pour éléments BA; plans d’élévations, coupes, vues en plan; dalles coulées et préfabriquées; métrés et kilotage; fonds de plan; lecture et contrôle des plans.",
      achievements: [
        "Calcul et ferraillage de poutres, longrines, voiles, linteaux, poteaux, raidisseurs",
        "Plans d’élévations, coupes et vues en plan des éléments verticaux et fondations",
        "Conception et ferraillage de dalles (in-situ et préfabriquées)",
        "Métrés et kilotage complets de tous plans de ferraillage",
        "Création de fonds de plan à partir des plans d’architecture",
        "Lecture/contrôle de plans de coffrage et résolution de contradictions"
      ],
      technologies: ["Autocad", "Arche Graitec", "AutoCAD Structural Detailing", "Advance Concrete", "Nova+", "Arma+", "Excel", "Word"],
      projects: [
        "Collège GINKO, Bordeaux : collège avec gymnase et logements de fonction",
        "Grand Paris Ligne 15 Sud, Vitry-sur-Seine : maintenance infrastructures",
        "Nouveau Conservatoire, Clichy-sous-Bois : Musique, Danse, Arts",
        "Résidence Sociale, Rosny : 170 logements",
        "Centre de Cancérologie, Le Mans",
        "ZAC Parc d’Affaires Sud : ensemble immobilier et réseau de transport",
        "129 logements, Lormont : avec parking sous-sol"
      ]
    },
    {
      period: "02/2017 – 06/2017",
      company: "CFE-CTE",
      position: "Conducteur de travaux génie civil (Stage)",
      location: "Tunis",
      description: "Surveillance de chantier, suivi administratif, sécurité, coordination d’équipe et planification des étapes.",
      achievements: [
        "Suivi de l’entrée des machines/matériaux jusqu’à l’achèvement",
        "Rédaction de comptes rendus et rapports journaliers",
        "Respect et contrôle des mesures de sécurité sur chantier",
        "Coordination des équipes pour respecter les délais",
        "Surveillance autonome de petits chantiers et support aux grands projets",
        "Planification : coffrage, ferraillage, pose d’armatures, décoffrage"
      ],
      technologies: ["Autocad", "Excel"],
      projects: [
        "Hôtel MARRIOTT R+12 & 3SS : supervision des phases clés du chantier"
      ]
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
                
                {exp.projects && exp.projects.length > 0 && (
                  <div className="timeline-projects">
                    <h5>Projets réalisés :</h5>
                    <ul>
                      {exp.projects.map((project, projIndex) => (
                        <li key={projIndex}>{project}</li>
                      ))}
                    </ul>
                  </div>
                )}

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
