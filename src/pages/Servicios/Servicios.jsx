import React, { useState, useEffect, useRef } from 'react';
import '../../styles/Servicios.css';

const SECCIONES_SERVICIOS = [
  {
    id: 'maquinaria',
    label: 'Alquiler de Maquinaria',
    title: 'Alquiler de Maquinaria Amarilla',
    description: 'En Triturados Paz de Río ofrecemos un amplio portafolio de maquinaria pesada con tecnología de última generación. Nuestro equipo garantiza eficiencia y cumplimiento en los tiempos de entrega para sus proyectos más exigentes.',
    features: [
      'Maquinaria de última generación',
      'Operadores altamente capacitados',
      'Mantenimiento preventivo riguroso',
      'Disponibilidad inmediata'
    ],
    image: 'https://static.wixstatic.com/media/64566e_edf550d55c434abc9d692a2c49c02da6~mv2.jpg/v1/fill/w_1262,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Excavadora.jpg'
  },
  {
    id: 'transportes',
    label: 'Transportes',
    title: 'Transporte de Materiales',
    description: 'Contamos con una flota moderna y dedicada para el transporte de materiales granulares, triturados y mezclas asfálticas. Aseguramos que sus insumos lleguen a tiempo y en óptimas condiciones a cualquier punto de la región.',
    features: [
      'Flota de volquetas moderna',
      'Rastreo y monitoreo constante',
      'Cumplimiento de normatividad vial',
      'Logística optimizada'
    ],
    image: 'https://static.wixstatic.com/media/64566e_372cbfed51e949a480d07b019a746969~mv2.jpg/v1/fill/w_1266,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Transporte.jpg'
  },
  {
    id: 'obras-civiles',
    label: 'Obras Civiles',
    title: 'Construcción de Obras Civiles',
    description: 'Ejecutamos proyectos de infraestructura, urbanismo e interconexión vial en carreteras de orden primario, secundario y terciario. Nuestra experiencia y recursos técnicos nos permiten garantizar el éxito en cada etapa de la construcción.',
    features: [
      'Proyectos de interconexión vial',
      'Obras de urbanismo completas',
      'Ingeniería de alta calidad',
      'Gestión integral de proyectos'
    ],
    image: 'https://static.wixstatic.com/media/64566e_a9873b869cbe41fabe536b514b43c34b~mv2.jpg/v1/fill/w_1262,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Obras.jpg'
  }
];

const ServiciosPage = () => {
  const [activeSection, setActiveSection] = useState('maquinaria');

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const observerOptions = {
        root: null,
        rootMargin: '-150px 0px -40% 0px',
        threshold: 0.1
    };

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECCIONES_SERVICIOS.forEach((seccion) => {
        const element = document.getElementById(seccion.id);
        if (element) {
            observer.observe(element);
        }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 140,
            behavior: 'smooth'
        });
    }
  };

  return (
    <div className="servicios-page">
      <div className="servicios-intro">
        <div className="container">
          <h2>Nuestros Servicios</h2>
          <p>
            En Triturados Paz de Río ofrecemos una gama completa de servicios para la
            industria de la construcción, adaptándonos a las necesidades específicas 
            de cada proyecto con tecnología de punta y personal experto.
          </p>
        </div>
      </div>

      {/* Submenú Sticky con Glassmorphism */}
      <div className="servicios-nav-wrapper">
        <div className="container">
          <ul className="servicios-nav">
            {SECCIONES_SERVICIOS.map((seccion) => (
              <li key={seccion.id}>
                <button
                  className={`servicios-nav-btn ${activeSection === seccion.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(seccion.id)}
                >
                  {seccion.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="servicios-full-content">
          {SECCIONES_SERVICIOS.map((seccion) => (
            <div 
              key={seccion.id} 
              id={seccion.id} 
              className="servicio-categoria"
            >
              <div className="categoria-header">
                <h3>{seccion.title}</h3>
              </div>
              
              <div className="categoria-content">
                <div className="categoria-text">
                  <h4>Especialistas en {seccion.label}</h4>
                  <p>{seccion.description}</p>
                  <ul className="categoria-features">
                    {seccion.features.map((feature, index) => (
                      <li key={index}>
                        <i className="fas fa-check-circle"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="#contacto" className="btn btn-primary">Solicitar Información</a>
                </div>
                
                <div className="categoria-img">
                  <img src={seccion.image} alt={seccion.title} loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiciosPage;
