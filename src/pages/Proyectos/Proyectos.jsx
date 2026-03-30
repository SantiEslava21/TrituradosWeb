import React, { useState } from 'react';
import '../../styles/pages/Proyectos.css';
// Importa la imagen desde src/assets
import primeraimagen from '../../assets/Gemini_Generated_Image_tpx6vltpx6vltpx6.png';
import segundaimagen from '../../assets/urbanismo.png';
import terceraimagen from '../../assets/canalizacion.png';

const PROYECTOS_DETALLE = [
  {
    id: 'infraestructura-vial',
    nombre: 'Infraestructura Vial',
    title: 'Infraestructura Vial',
    subtitle: 'pavimentos de alta resistencia',
    description: 'Ejecución de pavimentos, bases y sub-bases para carreteras nacionales y regionales.',
    features: ['Ingeniería de precisión', 'Control de calidad', 'Materiales premium'],
    capacity: '+100 km',
    area: 'Nacional',
    price: 'Proyectos a medida',
    image: primeraimagen, 
    amenities: ['preparación del terreno', 'Wi-Fi en obra', 'asesoría técnica', 'seguimiento', 'equipo especializado'],
    tags: ['Pavimentación', 'Carreteras', 'Ingeniería Civil']
  },
  {
    id: 'urbanismo',
    nombre: 'Urbanismo y Paisajismo',
    title: 'Urbanismo y Paisajismo',
    subtitle: 'espacios que transforman',
    description: 'Desarrollo de infraestructura urbana de alta calidad, incluyendo andenes, sardineles y adecuación de espacios públicos.',
    features: ['Diseño sostenible', 'Materiales nobles', 'Integración paisajística'],
    capacity: '+50 proyectos',
    area: 'Urbano',
    price: 'Diseño personalizado',
    image: segundaimagen,
    amenities: ['planificación urbana', 'diseño de espacios', 'accesibilidad', 'sostenibilidad', 'participación ciudadana'],
    tags: ['Urbanismo', 'Espacio Público', 'Prefabricados']
  },
  {
    id: 'canalizacion',
    nombre: 'Canalización de Ríos',
    title: 'Canalización de Ríos',
    subtitle: 'armonía con el agua',
    description: 'Obras hidráulicas estratégicas para el manejo de aguas superficiales y protección de riberas.',
    features: ['Sostenibilidad ambiental', 'Tecnología innovadora', 'Impacto positivo'],
    capacity: '+30 proyectos',
    area: 'Hidráulico',
    price: 'Soluciones sostenibles',
    image: terceraimagen,
    amenities: ['protección de riberas', 'control de erosión', 'monitoreo ambiental', 'gestión de aguas', 'restauración ecológica'],
    tags: ['Protección de Riberas', 'Obras Hidráulicas', 'Sostenibilidad']
  }
];

const ProyectosPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="proyectos-page">
      <div className="container">
        <div className="page-header">
          <h1>Nuestros Proyectos</h1>
          <p>Experiencia sólida en la ejecución de obras que transforman el territorio. Desde infraestructura vial hasta urbanismo, construimos soluciones duraderas.</p>
        </div>

        <div className="projects-grid">
          {PROYECTOS_DETALLE.map((proj, index) => (
            <div 
              key={proj.id}
              className={`project-card ${hoveredCard === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ backgroundImage: `url(${proj.image})` }}
            >
              <div className="card-glass-content">
                <div className="card-content">
                  <h2 className="card-title">{proj.title}</h2>
                  <p className="card-subtitle">{proj.subtitle}</p>
                  <p className="card-description">{proj.description}</p>
                  
                  <div className="card-amenities">
                    {proj.amenities.map((amenity, idx) => (
                      <span key={idx} className="amenity">{amenity}</span>
                    ))}
                  </div>
                  
                  <div className="card-details">
                    <div className="detail">
                      <span className="detail-label">Capacidad</span>
                      <span className="detail-value">{proj.capacity}</span>
                    </div>
                    <div className="detail">
                      <span className="detail-label">Área</span>
                      <span className="detail-value">{proj.area}</span>
                    </div>
                    <div className="detail">
                      <span className="detail-label">Inversión</span>
                      <span className="detail-value">{proj.price}</span>
                    </div>
                  </div>
                  
                  <a href="#contacto"><button className="card-button">
                    Solicitar Información
                  </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProyectosPage;