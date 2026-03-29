import React from 'react';
import '../../styles/pages/Responsabilidad.css';

const ResponsabilidadPage = () => {
  return (
    <div className="responsabilidad-page">
      <div className="container">
        <div className="page-header">
          <h1>Responsabilidad Social</h1>
          <p>
            Comprometidos con el desarrollo sostenible, el bienestar de nuestras 
            comunidades y el equilibrio ambiental.
          </p>
        </div>

        <div className="fundacion-section">
          <div className="fundacion-content">
            <div className="fundacion-text">
              <h2>Fundación Social Triturados Paz de Río</h2>
              <p>
                Nuestra fundación es el brazo social del grupo empresarial. Trabajamos incansablemente
                para mejorar la calidad de vida de las familias en nuestras zonas de influencia, 
                promoviendo la educación, el empleo local y el desarrollo comunitario.
              </p>
              <ul className="fundacion-pillars">
                <li>
                  <i className="fas fa-graduation-cap"></i>
                  <div>
                    <strong>Educación:</strong> Apoyamos programas de formación técnica y becas para jóvenes locales.
                  </div>
                </li>
                <li>
                  <i className="fas fa-hand-holding-heart"></i>
                  <div>
                    <strong>Bienestar:</strong> Programas de salud y recreación para nuestros colaboradores y sus familias.
                  </div>
                </li>
                <li>
                  <i className="fas fa-leaf"></i>
                  <div>
                    <strong>Medio Ambiente:</strong> Iniciativas de reforestación y conservación de fuentes hídricas.
                  </div>
                </li>
              </ul>
            </div>
            <div className="fundacion-img">
              <img src="https://static.wixstatic.com/media/7f8816_81527cc509e643a6aa55c2813f881833~mv2.png/v1/fill/w_568,h_266,al_c,lg_1,q_85,enc_avif,quality_auto/LogoFTPR.png" alt="Logo Fundación Social" />
            </div>
          </div>
        </div>

        <div className="esg-section">
            <h2>Gestión y Sostenibilidad</h2>
            <div className="esg-grid">
                <div className="esg-card">
                    <i className="fas fa-chart-line"></i>
                    <h3>Gestión 2024</h3>
                    <p>Reporte de impacto social y económico en la región de Boyacá.</p>
                    <a href="#" className="btn-link">Descargar Reporte</a>
                </div>
                <div className="esg-card">
                    <i className="fas fa-shield-alt"></i>
                    <h3>Información ESAL</h3>
                    <p>Transparencia y cumplimiento normativo como Entidad Sin Ánimo de Lucro.</p>
                    <a href="#" className="btn-link">Ver Documentación</a>
                </div>
                <div className="esg-card">
                    <i className="fas fa-users-cog"></i>
                    <h3>Políticas Internas</h3>
                    <p>Código de ética y conducta que guía nuestro actuar diario.</p>
                    <a href="#" className="btn-link">Leer Políticas</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsabilidadPage;
