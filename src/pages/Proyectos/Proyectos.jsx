import React from 'react';
import '../../styles/pages/Proyectos.css';

const PROYECTOS_DETALLE = [
  {
    id: 'infraestructura-vial',
    nombre: 'Infraestructura Vial',
    description: 'Ejecución de pavimentos, bases y sub-bases para carreteras nacionales y regionales. En Triturados Paz de Río nos especializamos en la construcción de vías con los más altos estándares de ingeniería.',
    tags: ['Pavimentación', 'Carreteras', 'Ingeniería Civil'],
    image: 'https://static.wixstatic.com/media/64566e_a9873b869cbe41fabe536b514b43c34b~mv2.jpg/v1/fill/w_1262,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Vial.jpg'
  },
  {
    id: 'urbanismo',
    nombre: 'Urbanismo y Paisajismo',
    description: 'Desarrollo de infraestructura urbana de alta calidad, incluyendo andenes, sardineles y adecuación de espacios públicos en municipios y centros poblados de Boyacá y el país.',
    tags: ['Urbanismo', 'Espacio Público', 'Prefabricados'],
    image: 'https://static.wixstatic.com/media/64566e_372cbfed51e949a480d07b019a746969~mv2.jpg/v1/fill/w_1266,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Urbanismo.jpg'
  },
  {
    id: 'canalizacion',
    nombre: 'Canalización de Ríos',
    description: 'Obras hidráulicas estratégicas para el manejo de aguas superficiales y protección de riberas. Garantizamos la sostenibilidad ambiental en cada intervención.',
    tags: ['Protección de Riberas', 'Obras Hidráulicas', 'Sostenibilidad'],
    image: 'https://static.wixstatic.com/media/64566e_edf550d55c434abc9d692a2c49c02da6~mv2.jpg/v1/fill/w_1262,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Canalizacion.jpg'
  }
];

const ProyectosPage = () => {
    return (
        <div className="proyectos-page">
            <div className="container">
                <div className="page-header">
                    <h1>Nuestros Proyectos</h1>
                    <p>
                        Experiencia sólida en la ejecución de obras que transforman el territorio. 
                        Desde infraestructura vial hasta urbanismo, construimos soluciones duraderas.
                    </p>
                </div>

                <div className="proyectos-grid-page">
                    {PROYECTOS_DETALLE.map((proj) => (
                        <div key={proj.id} className="proyecto-detail-card">
                            <div className="proyecto-detail-img">
                                <img src={proj.image} alt={proj.nombre} loading="lazy" />
                                <div className="proyecto-tags">
                                    {proj.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="proyecto-detail-info">
                                <h3>{proj.nombre}</h3>
                                <p>{proj.description}</p>
                                <a href="#contacto" className="btn btn-outline">Ver Detalles</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProyectosPage;
