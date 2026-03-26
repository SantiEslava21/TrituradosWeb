import React, { useEffect, useRef, useState } from 'react';

const Estadisticas = () => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    sedes: 0,
    directos: 0,
    indirectos: 0,
    anio: 0
  });

  const targets = {
    sedes: 3,
    directos: 80,
    indirectos: 120,
    anio: 2008
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateCounters();
      }
    }, { threshold: 0.5 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const speed = 200;

    Object.keys(targets).forEach((key) => {
      const target = targets[key];
      const inc = target / speed;
      
      let current = 0;
      const updateCounter = () => {
        current += inc;
        if (current < target) {
          setCounts(prev => ({ ...prev, [key]: Math.ceil(current) }));
          setTimeout(updateCounter, 10);
        } else {
          setCounts(prev => ({ ...prev, [key]: target }));
        }
      };
      
      updateCounter();
    });
  };

  return (
    <section className="estadisticas" ref={sectionRef}>
      <div className="container">
        <div className="estadisticas-grid">
          <div className="estadistica-item">
            <div className="estadistica-icon">
              <i className="fas fa-map-marked-alt"></i>
            </div>
            <div className="estadistica-content">
              <h3>{counts.sedes}</h3>
              <p>Sedes Operativas</p>
            </div>
          </div>

          <div className="estadistica-item">
            <div className="estadistica-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="estadistica-content">
              <h3>{counts.directos}</h3>
              <p>Empleos Directos</p>
            </div>
          </div>

          <div className="estadistica-item">
            <div className="estadistica-icon">
              <i className="fas fa-user-friends"></i>
            </div>
            <div className="estadistica-content">
              <h3>+{counts.indirectos}</h3>
              <p>Empleos Indirectos</p>
            </div>
          </div>

          <div className="estadistica-item">
            <div className="estadistica-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="estadistica-content">
              <h3>{counts.anio}</h3>
              <p>Año de establecimiento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estadisticas;
