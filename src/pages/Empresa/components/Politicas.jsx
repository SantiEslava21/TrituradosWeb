import React from 'react';

const Politicas = () => {
  return (
    <section className="politicas">
      <div className="container">
        <div className="section-title">
          <h2>Políticas y Compromisos</h2>
          <p>
            Lineamientos que garantizan operaciones responsables y sostenibles
          </p>
        </div>

        <div className="politicas-grid">
          <div className="politica-card">
            <div className="politica-header">
              <div className="politica-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Política de Calidad</h3>
            </div>
            <p>
              Garantizamos productos y servicios que cumplen con altos
              estándares técnicos y las necesidades de nuestros clientes,
              mediante procesos controlados, mejora continua y el uso de
              tecnología adecuada para el sector de la construcción.
            </p>
            <ul className="politica-lista">
              <li>
                <i className="fas fa-cog"></i> Control de calidad en producción
              </li>
              <li><i className="fas fa-cog"></i> Mejora continua de procesos</li>
              <li>
                <i className="fas fa-cog"></i> Enfoque en satisfacción del cliente
              </li>
            </ul>
          </div>

          <div className="politica-card">
            <div className="politica-header">
              <div className="politica-icon">
                <i className="fas fa-user-shield"></i>
              </div>
              <h3>Política de Seguridad y Salud</h3>
            </div>
            <p>
              Promovemos ambientes de trabajo seguros y saludables para nuestros
              colaboradores y contratistas, implementando medidas de prevención,
              capacitación permanente y cumplimiento de la normatividad vigente.
            </p>
            <ul className="politica-lista">
              <li>
                <i className="fas fa-hard-hat"></i> Prevención de riesgos laborales
              </li>
              <li>
                <i className="fas fa-hard-hat"></i> Uso adecuado de elementos de
                protección
              </li>
              <li>
                <i className="fas fa-hard-hat"></i> Capacitación continua en
                seguridad
              </li>
            </ul>
          </div>

          <div className="politica-card">
            <div className="politica-header">
              <div className="politica-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Política Ambiental y Ética</h3>
            </div>
            <p>
              Desarrollamos nuestras actividades bajo principios de
              sostenibilidad, ética y responsabilidad, cumpliendo con las
              licencias, permisos ambientales y normativas legales que rigen el
              sector extractivo.
            </p>
            <ul className="politica-lista">
              <li>
                <i className="fas fa-balance-scale"></i> Cumplimiento legal y
                ambiental
              </li>
              <li>
                <i className="fas fa-balance-scale"></i> Uso responsable de los
                recursos
              </li>
              <li>
                <i className="fas fa-balance-scale"></i> Actuación ética y
                transparente
              </li>
            </ul>
          </div>
        </div>

        <div className="compromisos-adicionales">
          <h3>Compromisos Adicionales</h3>
          <div className="compromisos-grid">
            <div className="compromiso-item">
              <i className="fas fa-users"></i>
              <h4>Talento Humano</h4>
              <p>
                Priorizamos la contratación de mano de obra local y el
                desarrollo de las competencias de nuestro equipo.
              </p>
            </div>
            <div className="compromiso-item">
              <i className="fas fa-industry"></i>
              <h4>Tecnología y Eficiencia</h4>
              <p>
                Incorporamos maquinaria y equipos modernos que garantizan
                calidad, oportunidad y competitividad.
              </p>
            </div>
            <div className="compromiso-item">
              <i className="fas fa-hand-holding-heart"></i>
              <h4>Responsabilidad Social</h4>
              <p>
                Fortalecemos la relación con clientes y comunidades a través de
                la Fundación Social Triturados Paz de Río.
              </p>
            </div>
            <div className="compromiso-item">
              <i className="fas fa-chart-line"></i>
              <h4>Sostenibilidad</h4>
              <p>
                Buscamos un crecimiento equilibrado que genere valor económico,
                social y ambiental.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Politicas;
