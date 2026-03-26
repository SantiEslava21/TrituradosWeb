import React from 'react';

const QuienesSomos = () => {
  return (
    <section className="quienes-somos">
      <div className="container">
        <div className="section-title">
          <h2>Quiénes Somos</h2>
          <p>Más de una década construyendo el futuro de Colombia</p>
        </div>

        <div className="quienes-somos-content">
          <div className="quienes-somos-text">
            <h3>Triturados Paz de Río</h3>
            <p>
              Fundada en el año 2008, Triturados Paz de Río es una empresa
              colombiana dedicada al sector extractivo, industrial y al
              desarrollo de obras civiles, especializada en la producción de
              materiales granulares y triturados de alta calidad.
            </p>

            <p>
              Ubicados en el municipio de Paz de Río, en la provincia de
              Valderrama (Boyacá), nos hemos consolidado como un motor de
              desarrollo regional, operando bajo principios de sostenibilidad,
              responsabilidad social y eficiencia, apoyados en tecnología de
              última generación y en el compromiso de nuestra mano de obra
              local.
            </p>

            <div className="quienes-somos-stats">
              <div className="stat-item">
                <h4>16+</h4>
                <p>Años de Experiencia</p>
              </div>
              <div className="stat-item">
                <h4>3</h4>
                <p>Centros de Trabajo</p>
              </div>
              <div className="stat-item">
                <h4>200+</h4>
                <p>Empleos Directos e Indirectos</p>
              </div>
            </div>
          </div>

          <div className="quienes-somos-img">
            <div className="img-container">
              <img
                src="https://static.wixstatic.com/media/64566e_adeb40cb701949bcb14ddabcbb9798d7~mv2_d_5827_3890_s_4_2.jpg/v1/fill/w_1049,h_700,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/64566e_adeb40cb701949bcb14ddabcbb9798d7~mv2_d_5827_3890_s_4_2.jpg"
                alt="Instalaciones Triturados Paz de Río"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
