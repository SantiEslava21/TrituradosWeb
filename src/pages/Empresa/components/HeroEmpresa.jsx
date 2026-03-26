import React from 'react';
import { Link } from 'react-router-dom';

const HeroEmpresa = () => {
  return (
    <section className="hero-empresa" id="empresa">
      <div className="hero-empresa-overlay">
        <div className="container">
          <div className="hero-empresa-content">
            <h1 className="hero-empresa-title">Nuestra Empresa</h1>
            <p className="hero-empresa-subtitle">
              Liderando la industria de trituraciones y materiales de
              construcción con innovación y compromiso
            </p>
            <div className="hero-empresa-breadcrumb">
              <Link to="/">Inicio</Link>
              <i className="fas fa-chevron-right"></i> <span>Empresa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEmpresa;
