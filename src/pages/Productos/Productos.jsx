import React, { useState } from 'react';
import '../../styles/pages/Productos.css';
import CotizarModal from '../../components/common/CotizarModal';
import { CATALOGO } from '../../data/productsData';

const PRODUCTOS_DETALLE = [
  {
    id: 'triturados',
    nombre: 'Triturados',
    descripcion: 'Ofrecemos agregados pétreos de excelente calidad obtenidos por trituración, ideales para la construcción de obras civiles y proyectos de infraestructura vial. Nuestros productos cumplen con las normas técnicas más exigentes.',
    beneficios: ['Alta resistencia mecánica', 'Granulometrías controladas', 'Ideal para mezclas de concreto'],
    img: 'https://static.wixstatic.com/media/64566e_09598b70e7f94df8bb15a34a8eb9e500.jpg/v1/fill/w_1270,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Triturados.jpg'
  },
  {
    id: 'granulares',
    nombre: 'Granulares',
    descripcion: 'Materiales granulares seleccionados para bases y sub-bases de pavimentos, rellenos y adecuación de terrenos. Garantizamos estabilidad y compactación superior para bases sólidas.',
    beneficios: ['Excelente compactación', 'Control de humedad', 'Capacidad portante superior'],
    img: 'https://static.wixstatic.com/media/64566e_4cdf9953f5fd42d687cdbf4f045faec9~mv2.jpg/v1/fill/w_1270,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Granulares.jpg'
  },
  {
    id: 'asfaltica',
    nombre: 'Mezcla Asfáltica',
    descripcion: 'Material premium para pavimentación vial, elaborado con asfalto de alta calidad y agregados pétreos seleccionados. Diseñado para ofrecer durabilidad y resistencia ante el tránsito pesado.',
    beneficios: ['Resistencia al ahuellamiento', 'Durabilidad extrema', 'Aplicación eficiente'],
    img: 'https://static.wixstatic.com/media/64566e_e2e4375a82954ff38bf602231818b02a.jpg/v1/fill/w_1270,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asfalto.jpg'
  },
  {
    id: 'prefabricados',
    nombre: 'Prefabricados en Concreto',
    descripcion: 'Soluciones estructurales que facilitan una instalación rápida y eficiente en obras civiles. Diseñamos elementos con precisión industrial para asegurar uniformidad y calidad.',
    beneficios: ['Ahorro de tiempo en obra', 'Precisión geométrica', 'Acabados de excelencia'],
    img: 'https://static.wixstatic.com/media/64566e_a9873b869cbe41fabe536b514b43c34b~mv2.jpg/v1/fill/w_1262,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Prefabricados.jpg'
  }
];

const ProductosPage = () => {
  const [modalProductoId, setModalProductoId] = useState(null);

  return (
    <div className="productos-page">
      <div className="page-header">
        <div className="container">
          <h1>Nuestros Productos</h1>
          <p>
            Agregados pétreos y soluciones en concreto bajo los más altos estándares de calidad,
            garantizando un "Futuro con Bases Sólidas" para cada proyecto de infraestructura.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="productos-detail-list">
          {PRODUCTOS_DETALLE.map((prod, index) => (
            <div key={prod.id} className={`producto-detail-item ${index % 2 === 0 ? '' : 'reverse'}`}>
              <div className="producto-detail-img">
                <img src={prod.img} alt={prod.nombre} loading="lazy" />
              </div>
              <div className="producto-detail-text">
                <h2>{prod.nombre}</h2>
                <p>{prod.descripcion}</p>
                <ul className="beneficios-list">
                  {prod.beneficios.map((ben, i) => (
                    <li key={i}>
                      <i className="fas fa-check-circle"></i> {ben}
                    </li>
                  ))}
                </ul>

                {/* Sub-productos preview */}
                <div className="subproductos-preview">
                  {CATALOGO[prod.id]?.subProductos.map((sp, i) => (
                    <span key={i} className="subproducto-tag">
                      <i className="fas fa-tag" /> {sp.nombre}
                    </span>
                  ))}
                </div>

                <button
                  className="btn btn-cotizar"
                  onClick={() => setModalProductoId(prod.id)}
                >
                  <i className="fas fa-file-invoice-dollar" /> Cotizar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de cotización */}
      {modalProductoId && (
        <CotizarModal
          productoId={modalProductoId}
          onClose={() => setModalProductoId(null)}
        />
      )}
    </div>
  );
};

export default ProductosPage;
