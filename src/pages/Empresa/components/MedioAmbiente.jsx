import React from 'react';

const MedioAmbiente = () => {
  return (
    <section className="medio-ambiente">
      <div className="container">
        <div className="section-title">
          <h2>Compromiso Ambiental</h2>
          <p>Operaciones responsables orientadas a la sostenibilidad</p>
        </div>

        <div className="medio-ambiente-content">
          <div className="medio-ambiente-text">
            <h3>Sostenibilidad en Nuestras Operaciones</h3>
            <p>
              En Triturados Paz de Río asumimos la sostenibilidad como un eje
              fundamental de nuestra operación. Desarrollamos nuestras
              actividades bajo el cumplimiento de licencias y permisos
              ambientales, implementando prácticas responsables que minimizan
              los impactos y garantizan el uso eficiente de los recursos
              naturales.
            </p>

            <div className="iniciativas-ambientales">
              <div className="iniciativa">
                <div className="iniciativa-icon">
                  <i className="fas fa-recycle"></i>
                </div>
                <div className="iniciativa-content">
                  <h4>Gestión Responsable de Materiales</h4>
                  <p>
                    Optimizamos los procesos de trituración y clasificación para
                    reducir desperdicios y maximizar el aprovechamiento de los
                    materiales.
                  </p>
                </div>
              </div>

              <div className="iniciativa">
                <div className="iniciativa-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <div className="iniciativa-content">
                  <h4>Protección del Entorno</h4>
                  <p>
                    Aplicamos acciones de manejo y recuperación ambiental en las
                    áreas de influencia de nuestras operaciones.
                  </p>
                </div>
              </div>

              <div className="iniciativa">
                <div className="iniciativa-icon">
                  <i className="fas fa-tint"></i>
                </div>
                <div className="iniciativa-content">
                  <h4>Uso Eficiente del Agua</h4>
                  <p>
                    Implementamos prácticas orientadas al ahorro, control y uso
                    responsable del recurso hídrico.
                  </p>
                </div>
              </div>

              <div className="iniciativa">
                <div className="iniciativa-icon">
                  <i className="fas fa-industry"></i>
                </div>
                <div className="iniciativa-content">
                  <h4>Tecnología y Control</h4>
                  <p>
                    Utilizamos maquinaria y equipos modernos que contribuyen a
                    procesos más eficientes y con menor impacto ambiental.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="medio-ambiente-img">
            <div className="img-container">
              <img
                src="https://static.wixstatic.com/media/64566e_34ef12c8fe6e4ad5925d95100643359b~mv2.jpg/v1/fill/w_1200,h_820,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/64566e_34ef12c8fe6e4ad5925d95100643359b~mv2.jpg"
                alt="Compromiso Ambiental Triturados Paz de Río"
              />
              <div className="img-overlay">
                <h4>Gestión Ambiental Responsable</h4>
                <p>Operamos bajo normatividad ambiental vigente</p>
              </div>
            </div>
          </div>
        </div>

        <div className="logros-ambientales">
          <h3>Logros Ambientales</h3>
          <div className="logros-grid">
            <div className="logro-item">
              <div className="logro-circulo"><span>85%</span></div>
              <p>Material reciclado en nuestros procesos</p>
            </div>
            <div className="logro-item">
              <div className="logro-circulo"><span>30%</span></div>
              <p>Reducción en consumo de agua</p>
            </div>
            <div className="logro-item">
              <div className="logro-circulo"><span>12,500</span></div>
              <p>Árboles plantados</p>
            </div>
            <div className="logro-item">
              <div className="logro-circulo"><span>100%</span></div>
              <p>Cumplimiento normativo ambiental</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedioAmbiente;
