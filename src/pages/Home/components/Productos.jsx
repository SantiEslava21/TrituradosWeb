import React from 'react';
import { Link } from 'react-router-dom';

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
               Agregados pétreos obtenidos por trituración, ideales para la construcción de obras civiles.
              </p>
            </div>
          </div>

          <div className="producto-card">
            <div className="producto-img">
              <img
                src="https://static.wixstatic.com/media/64566e_e2e4375a82954ff38bf602231818b02a.jpg/v1/fill/w_1270,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64566e_e2e4375a82954ff38bf602231818b02a.jpg"
                alt="Mezcla asfáltica"
              />
            </div>
            <div className="producto-content">
              <h3>MEZCLA ASFÁLTICA</h3>
              <p>
                Material premium para pavimentación vial, diseñado para soportar el tránsito pesado.
              </p>
            </div>
          </div>

          <div className="producto-card">
            <div className="producto-img">
              <img
                src="https://static.wixstatic.com/media/64566e_4cdf9953f5fd42d687cdbf4f045faec9~mv2.jpg/v1/fill/w_1270,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64566e_4cdf9953f5fd42d687cdbf4f045faec9~mv2.jpg"
                alt="Prefabricados"
              />
            </div>
            <div className="producto-content">
              <h3>PREFABRICADOS</h3>
              <p>
                Elementos de concreto que facilitan una instalación rápida y eficiente en obra.
              </p>
            </div>
          </div>
        </div>
        <div className="ver-mas-container">
          <Link to="/productos" className="btn-ver-mas">Ver Catálogo Completo</Link>
        </div>
      </div>
    </section>
  );
};

export default Productos;
