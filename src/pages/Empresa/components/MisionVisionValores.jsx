import React from 'react';

const MisionVisionValores = () => {
  return (
    <section className="mision-vision-valores">
      <div className="container">
        <div className="section-title">
          <h2>Nuestra Filosofía</h2>
          <p>Los pilares que guían nuestro trabajo diario</p>
        </div>

        <div className="filosofia-cards">
          <div className="filosofia-card">
            <div className="filosofia-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3>Misión</h3>
            <p>
              Proveer soluciones integrales en trituraciones y materiales de
              construcción de la más alta calidad, contribuyendo al desarrollo
              de infraestructura sostenible en México, mediante procesos
              innovadores, tecnología de punta y un equipo humano comprometido
              con la excelencia.
            </p>
          </div>

          <div className="filosofia-card">
            <div className="filosofia-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h3>Visión</h3>
            <p>
              Ser la empresa líder en trituraciones y materiales de construcción
              en México, reconocida por nuestra innovación, calidad superior y
              compromiso con el desarrollo sostenible, manteniendo relaciones de
              largo plazo con clientes, proveedores y comunidades.
            </p>
          </div>

          <div className="filosofia-card">
            <h3>Valores Corporativos</h3>
            <p>
              Los valores conforman el eje central de la cultura empresarial de
              la organización, en la medida en que sientan las bases para el
              desarrollo de todos los procesos y relaciones de Triturados Paz de
              Río. El respeto, la calidad, la honestidad y los resultados son
              los cuatro pilares sobre los cuales se fundamenta la empresa.
            </p>
            <div className="valores-grid">
              <div className="valor-card">
                <div className="valor-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4>Respeto</h4>
                <p>
                  Valoramos a cada persona y sus ideas, reconociendo la dignidad
                  en todas nuestras relaciones.
                </p>
              </div>
              <div className="valor-card">
                <div className="valor-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4>Honestidad</h4>
                <p>
                  Actuamos con transparencia e integridad en cada decisión y
                  acción que tomamos.
                </p>
              </div>
              <div className="valor-card">
                <div className="valor-icon">
                  <i className="fas fa-star"></i>
                </div>
                <h4>Calidad</h4>
                <p>
                  Buscamos la excelencia en todo lo que hacemos, sin comprometer
                  nuestros estándares.
                </p>
              </div>
              <div className="valor-card">
                <div className="valor-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <h4>Resultados</h4>
                <p>
                  Nos comprometemos con el logro de objetivos que generen valor
                  para todos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MisionVisionValores;
