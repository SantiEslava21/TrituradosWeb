import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Proyectos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <section className="proyectos" id="responsabilidad">
      <div className="container">
        <div className="section-title">
          <h2>Proyectos Realizados</h2>
          <p>Algunos de nuestros trabajos más destacados en los últimos años</p>
        </div>
        <div className="proyectos-carousel">
          <div 
            className="carousel-container" 
            style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.5s ease-in-out' }}
          >
            <div className="carousel-slide">
              <div className="proyecto-item">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Autopista Norte"
                />
                <div className="proyecto-info">
                  <h3>Autopista Norte</h3>
                  <p>
                    Suministro de 150,000 toneladas de material triturado para
                    base y sub-base.
                  </p>
                </div>
              </div>
              <div className="proyecto-item">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Puente Internacional"
                />
                <div className="proyecto-info">
                  <h3>Puente Internacional</h3>
                  <p>
                    Arrendamiento de maquinaria pesada durante 18 meses para
                    cimentaciones.
                  </p>
                </div>
              </div>
              <div className="proyecto-item">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Centro Comercial Plaza"
                />
                <div className="proyecto-info">
                  <h3>Centro Comercial Plaza</h3>
                  <p>
                    Provisión completa de agregados para concreto y acabados
                    arquitectónicos.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-slide">
              <div className="proyecto-item">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Parque Industrial"
                />
                <div className="proyecto-info">
                  <h3>Parque Industrial</h3>
                  <p>
                    Trituración in situ de 80,000 m³ de material de excavación
                    para reutilización.
                  </p>
                </div>
              </div>
              <div className="proyecto-item">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Presa Hidroeléctrica"
                />
                <div className="proyecto-info">
                  <h3>Presa Hidroeléctrica</h3>
                  <p>
                    Suministro de 300,000 toneladas de diferentes granulometrías
                    para la obra.
                  </p>
                </div>
              </div>
              <div className="proyecto-item">
                <img
                  src="https://images.unsplash.com/photo-1503387769-00a112127ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Conjunto Habitacional"
                />
                <div className="proyecto-info">
                  <h3>Conjunto Habitacional</h3>
                  <p>
                    Materiales para 500 viviendas de interés social con entrega
                    programada.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-controls-wrapper">
            <button className="carousel-btn prev-btn" onClick={prevSlide}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="carousel-dots">
              <span className={`dot ${currentSlide === 0 ? 'active' : ''}`} onClick={() => setCurrentSlide(0)}></span>
              <span className={`dot ${currentSlide === 1 ? 'active' : ''}`} onClick={() => setCurrentSlide(1)}></span>
            </div>
            <button className="carousel-btn next-btn" onClick={nextSlide}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="ver-mas-container" style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/proyectos" className="btn btn-primary">Explorar Todos los Proyectos</Link>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
