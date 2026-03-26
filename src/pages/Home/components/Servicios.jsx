import React from 'react';

const Servicios = () => {
  return (
    <section className="servicios" id="servicios">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Servicios</h2>
          <p>En Triturados Paz de Río ofrecemos una gama completa de servicios para la
              industria de la construcción, adaptándonos a las necesidades
              específicas de cada proyecto.</p>
        </div>

        <div className="servicios-nueva-seccion">
          <div className="servicios-cards">
            <div className="servicio-card-img">
              <div className="servicio-img-container">
                <img
                  src="https://static.wixstatic.com/media/64566e_edf550d55c434abc9d692a2c49c02da6~mv2.jpg/v1/fill/w_1262,h_252,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64566e_edf550d55c434abc9d692a2c49c02da6~mv2.jpg"
                  alt="Arrendamiento de Maquinaria"
                />
                <div className="servicio-nombre">Arrendamiento de Maquinaria</div>
              </div>
            </div>

            <div className="servicio-card-img">
              <div className="servicio-img-container">
                <img
                  src="https://static.wixstatic.com/media/64566e_372cbfed51e949a480d07b019a746969~mv2.jpg/v1/fill/w_1266,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64566e_372cbfed51e949a480d07b019a746969~mv2.jpg"
                  alt="Transporte de materiales"
                />
                <div className="servicio-nombre">Transporte de materiales</div>
              </div>
            </div>

            <div className="servicio-card-img">
              <div className="servicio-img-container">
                <img
                  src="https://static.wixstatic.com/media/64566e_a9873b869cbe41fabe536b514b43c34b~mv2.jpg/v1/fill/w_1262,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64566e_a9873b869cbe41fabe536b514b43c34b~mv2.jpg"
                  alt="Construcción de obras civiles"
                />
                <div className="servicio-nombre">Construcción de obras civiles</div>
              </div>
            </div>
          </div>
        </div>
        <div className="ver-mas-container">
          <a href="#servicios" className="btn-ver-mas">Ver Más Servicios</a>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
