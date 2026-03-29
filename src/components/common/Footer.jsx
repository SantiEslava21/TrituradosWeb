import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer" id="contacto">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img
                src="https://static.wixstatic.com/media/64566e_37068c8fb25b457f99cdb2c87c791b18~mv2_d_7827_4662_s_4_2.png/v1/fill/w_160,h_95,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/TPR%20CFN.png"
                alt="Triturados Paz de Río Logo"
              />
              <p>
                Empresa dedicada a la producción de materiales granulares,
                triturados, mezclas asfálticas y prefabricados en concreto para
                obras civiles.
              </p>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/TPRHigueras/"
                  target="_blank"
                  aria-label="Facebook Triturados Paz de Río"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://co.linkedin.com/company/triturados-paz-de-rio"
                  target="_blank"
                  aria-label="LinkedIn Triturados Paz de Río"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.instagram.com/tprsedehigueras/"
                  target="_blank"
                  aria-label="Instagram Triturados Paz de Río"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/@trituradospazderio3767"
                  target="_blank"
                  aria-label="YouTube Triturados Paz de Río"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h3>Enlaces Rápidos</h3>
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/empresa">Quiénes Somos</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/proyectos">Proyectos</Link></li>
                <li><Link to="/responsabilidad">Responsabilidad Social</Link></li>
                <li><Link to="/contacto" onClick={() => window.scrollTo(0, 0)}>Contacto</Link></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h3>Contacto</h3>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  Municipio de Paz de Río, Boyacá, Colombia
                </li>
                <li>
                  <i className="fas fa-envelope"></i> info@trituradospazderio.com
                </li>
                <li>
                  <p>
                    <i className="fas fa-clock"></i>
                    <strong>Horario:</strong>
                    Lun 8:00–12:00 / 1:00–5:00 · Mar–Jue 7:00–12:00 / 1:00–5:00 ·
                    Vie 7:00–12:00 / 1:00–5:00
                  </p>
                </li>
              </ul>
            </div>

            <div className="footer-newsletter">
              <h3>Contáctanos</h3>
              <p>
                Escríbenos para conocer más sobre nuestros productos, servicios y
                soluciones para tu proyecto.
              </p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  required
                />
                <button type="submit">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; 2026 Triturados Paz de Río. Todos los derechos reservados.
            </p>
            <div className="footer-legal">
              <a href="#">Política de Privacidad</a>
              <a href="#">Términos y Condiciones</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Botón Flotante WhatsApp */}
      <a href="https://api.whatsapp.com/send/?phone=%2B573156125655&text=Hola%2C+deseo+adquirir+un+producto&type=phone_number&app_absent=0" className="whatsapp-btn" target="_blank" rel="noopener noreferrer" title="Contacta con nosotros por WhatsApp">
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
};

export default Footer;
