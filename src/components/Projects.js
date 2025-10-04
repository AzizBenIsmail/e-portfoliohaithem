import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('tous');

  const projects = [
    {
      id: 1,
      title: "Plateforme Offshore Complexe",
      category: "offshore",
      description: "Conception d'une plateforme offshore de 15 000 m² avec structures en béton armé résistant aux conditions marines extrêmes.",
      image: "🏗️",
      technologies: ["Autocad", "Revit", "Robot Structural", "Eurocodes"],
      features: [
        "Résistance aux vents de 200 km/h",
        "Protection contre la corrosion marine",
        "Fondations sur pieux de 50m",
        "Système de drainage intégré"
      ],
      client: "Société Française d'Ingénierie",
      year: "2023",
      status: "Livré"
    },
    {
      id: 2,
      title: "Bâtiment Résidentiel Haute Performance",
      category: "residential",
      description: "Étude complète d'un complexe résidentiel de 200 logements avec optimisation énergétique et structure en béton armé.",
      image: "🏢",
      technologies: ["Revit", "Tekla Structures", "SAP2000"],
      features: [
        "Certification HQE",
        "Isolation thermique renforcée",
        "Structure antisismique",
        "Parking souterrain intégré"
      ],
      client: "Promoteur Immobilier Français",
      year: "2022",
      status: "En cours"
    },
    {
      id: 3,
      title: "Infrastructure Portuaire",
      category: "infrastructure",
      description: "Conception de quais et entrepôts portuaires avec structures en béton armé pour charges lourdes et environnement marin.",
      image: "⚓",
      technologies: ["Autocad", "Robot Structural", "Excel"],
      features: [
        "Charges de 50 tonnes/m²",
        "Résistance à l'eau de mer",
        "Système de levage intégré",
        "Maintenance facilitée"
      ],
      client: "Autorité Portuaire",
      year: "2021",
      status: "Livré"
    },
    {
      id: 4,
      title: "Centre Commercial Moderne",
      category: "commercial",
      description: "Étude structurelle d'un centre commercial de 25 000 m² avec parking multi-niveaux et espaces commerciaux.",
      image: "🛍️",
      technologies: ["Revit", "Tekla", "Robot Structural"],
      features: [
        "Grandes portées sans poteaux",
        "Éclairage naturel optimisé",
        "Accessibilité PMR",
        "Sécurité incendie renforcée"
      ],
      client: "Groupe Commercial Français",
      year: "2020",
      status: "Livré"
    },
    {
      id: 5,
      title: "Usine Industrielle Offshore",
      category: "offshore",
      description: "Conception d'une usine de traitement offshore avec structures spécialisées pour environnements hostiles.",
      image: "🏭",
      technologies: ["Autocad", "SAP2000", "Robot Structural"],
      features: [
        "Résistance aux explosions",
        "Ventilation forcée",
        "Évacuation d'urgence",
        "Maintenance aérienne"
      ],
      client: "Industriel Français",
      year: "2019",
      status: "Livré"
    },
    {
      id: 6,
      title: "Complexe Hôtelier de Luxe",
      category: "residential",
      description: "Étude complète d'un hôtel 5 étoiles avec piscines, spa et structures en béton armé de haute qualité.",
      image: "🏨",
      technologies: ["Revit", "Tekla Structures", "Excel"],
      features: [
        "Acoustique optimisée",
        "Climatisation centralisée",
        "Sécurité renforcée",
        "Design architectural"
      ],
      client: "Chaîne Hôtelière Française",
      year: "2018",
      status: "Livré"
    }
  ];

  const categories = [
    { id: 'tous', name: 'Tous les projets' },
    { id: 'offshore', name: 'Offshore' },
    { id: 'residential', name: 'Résidentiel' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'infrastructure', name: 'Infrastructure' }
  ];

  const filteredProjects = activeCategory === 'tous' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projets" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Mes Projets</h2>
          <p>Portfolio de réalisations en génie civil offshore</p>
        </div>

        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
                <div className="project-status">{project.status}</div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-meta">
                    <span className="project-client">{project.client}</span>
                    <span className="project-year">{project.year}</span>
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Caractéristiques :</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  <h4>Technologies :</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-summary">
          <div className="summary-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projets réalisés</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Sociétés partenaires</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction client</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">7</div>
              <div className="stat-label">Années d'expérience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
