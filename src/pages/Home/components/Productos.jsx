import React from 'react';

const Productos = () => {
  return (
    <section className="productos" id="productos">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Productos</h2>
        </div>
        <div className="productos-grid">
          <div className="producto-card">
            <div className="producto-img">
              <img
                src="https://static.wixstatic.com/media/64566e_09598b70e7f94df8bb15a34a8eb9e500.jpg/v1/fill/w_1270,h_248,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64566e_09598b70e7f94df8bb15a34a8eb9e500.jpg"
                alt="Grava triturada"
              />
            </div>
            <div className="producto-content">
              <h3>TRITURADOS</h3>
              <p>
               Agregados pétreos obtenidos por trituración, ideales para la construcción de obras civiles y proyectos de infraestructura.
              </p>
              <ul className="producto-features">
                <li>
                  <i className="fas fa-check-circle"></i> Alta resistencia y durabilidad.
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Uso en concretos y pavimentos.
                </li>
                <li><i className="fas fa-check-circle"></i> Calidad controlada en producción.</li>
              </ul>
            </div>
          </div>

          <div className="producto-card">
            <div className="producto-img">
              <img
                src="https://static.wixstatic.com/media/64566e_e2e4375a82954ff38bf602231818b02a.jpg/v1/fill/w_1270,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64566e_e2e4375a82954ff38bf602231818b02a.jpg"
                alt="Arena silica"
              />
            </div>
            <div className="producto-content">
              <h3>MEZCLA ASFÁLTICA</h3>
              <p>
                Material para pavimentación vial, elaborado con agregados pétreos y asfalto, diseñado para soportar el tránsito y el clima.
              </p>
              <ul className="producto-features">
                <li>
                  <i className="fas fa-check-circle"></i> Aplicación en vías y mantenimiento.
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>Estabilidad y resistencia.
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Producción bajo estándares técnicos.
                </li>
              </ul>
            </div>
          </div>

          <div className="producto-card">
            <div className="producto-img">
              <img
                src="https://static.wixstatic.com/media/64566e_4cdf9953f5fd42d687cdbf4f045faec9~mv2.jpg/v1/fill/w_1270,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64566e_4cdf9953f5fd42d687cdbf4f045faec9~mv2.jpg"
                alt="Piedra para mampostería"
              />
            </div>
            <div className="producto-content">
              <h3>PREFABRICADOS EN CONCRETO</h3>
              <p>
                Elementos de concreto fabricados previamente que facilitan una instalación rápida y eficiente en obras civiles.
              </p>
              <ul className="producto-features">
                <li>
                  <i className="fas fa-check-circle"></i> Ahorro de tiempo en obra
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Uniformidad y calidad
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Soluciones estructurales versátiles
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ver-mas-container">
          <a href="#productos" className="btn-ver-mas">Ver Más Productos</a>
        </div>
      </div>
    </section>
  );
};

export default Productos;
