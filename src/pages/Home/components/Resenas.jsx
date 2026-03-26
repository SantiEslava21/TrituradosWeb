import React from 'react';

const Resenas = () => {
  return (
    <section className="reseñas" id="empresa">
      <div className="container">
        <div className="section-title">
          <h2>Reseña</h2>
        </div>
        <div className="reseñas-content">
          <div className="reseñas-img">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/WvB0SfbYzVM?rel=0&modestbranding=1&showinfo=0&controls=1"
                title="Video testimonial TPR CFN"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="reseñas-text">
            <div className="testimonial">
              <p className="testimonial-text">
                Triturados Paz de Río nació en 2008 con el objetivo de atender
                las necesidades regionales en el desarrollo de obras civiles y
                la producción de materiales granulares y triturados. Ubicada en
                el municipio de Paz de Río, provincia de Valderrama en Boyacá,
                la empresa se ha consolidado como un motor de desarrollo y
                progreso para la región, manteniendo un alto compromiso con la
                sostenibilidad, el uso de tecnología moderna y la generación de
                empleo mediante la priorización de mano de obra local.
              </p>
            </div>
            <div className="testimonial">
              <p className="testimonial-text">
                La promesa de valor “Futuro con Bases Sólidas” se refleja en el
                compromiso diario de cada colaborador para ofrecer productos de
                alta calidad, precios competitivos y procesos eficientes. La
                empresa participa en los sectores extractivo, industrial y de
                obras civiles a nivel regional y nacional, sustentando su
                operación en el cumplimiento de licencias y permisos, el uso de
                maquinaria y equipos de última generación, y en una sólida
                política de Responsabilidad Social Empresarial desarrollada a
                través de la Fundación Social Triturados Paz de Río, que
                fortalece la relación con clientes y comunidades del área de
                influencia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resenas;
