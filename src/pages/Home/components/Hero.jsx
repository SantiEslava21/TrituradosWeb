import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">FUTURO CON BASES SÓLIDAS</h1>
            <p className="hero-subtitle">
              Nuestra promesa de valor “Futuro con Bases Sólidas” se fundamenta
              en el actuar diario de cada colaborador, con la convicción que el
              aporte individual de cada integrante de la empresa nos permite
              cumplir con la entrega de productos bajo los más altos estándares
              de calidad, precios competitivos y eficiencia en los procesos.
            </p>
            <div className="hero-buttons">
              <a href="#productos" className="btn btn-primary"
                >Nuestros Productos</a
              >
              <a href="#contacto" className="btn btn-secondary">Contáctanos</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
