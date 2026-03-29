import React from 'react';
import '../../styles/pages/Contacto.css';

const ContactoPage = () => {
  return (
    <div className="contacto-page">
      <div className="container">
        <div className="page-header">
          <h1>Contacto</h1>
          <p>
            Estamos listos para atenderte. Ponte en contacto con nosotros para 
            cotizaciones, dudas técnicas o visitas a nuestras sedes.
          </p>
        </div>

        <div className="contacto-container">
          <div className="contacto-info-sidebar">
            <div className="info-box">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Oficina Principal</h3>
              <p>Km 19 Vía Belén - Paz de Río, Boyacá, Colombia</p>
            </div>
            
            <div className="info-box">
              <i className="fas fa-phone-alt"></i>
              <h3>Teléfonos</h3>
              <p>316 389 03 96 / 315 612 56 55</p>
            </div>

            <div className="info-box">
              <i className="fas fa-envelope"></i>
              <h3>Correo Electrónico</h3>
              <p>gerencia@trituradospazderio.com</p>
            </div>

            <div className="info-box">
              <i className="fas fa-clock"></i>
              <h3>Horarios de Atención</h3>
              <p>Lunes - Viernes: 7:00am - 4:30pm</p>
              <p>Sábados: 7:00am - 12:30m</p>
            </div>
          </div>

          <div className="contacto-form-wrapper">
            <h2>Envíanos un mensaje</h2>
            <form className="contacto-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Nombre completo" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Correo electrónico" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Asunto" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Tu mensaje..." rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Enviar Mensaje</button>
            </form>
          </div>
        </div>

        <div className="map-placeholder">
            <h3>Nuestra Ubicación</h3>
            <div className="map-box">
                <p>Mapa Interactivo (Próximamente)</p>
                <img src="https://static.wixstatic.com/media/7f8816_81527cc509e643a6aa55c2813f881833~mv2.png/v1/fill/w_568,h_266,al_c,lg_1,q_85,enc_avif,quality_auto/TPR_MAP.png" alt="Mapa Ubicación" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;
