import React from 'react';
import { Link } from 'react-router-dom';

const ResponsabilidadSocial = () => {
    return (
        <section className="responsabilidad-social" id="responsabilidad">
            <div className="container">
                <div className="responsabilidad-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '60px', alignItems: 'center' }}>
                    <div className="responsabilidad-video-placeholder">
                        <img src="https://static.wixstatic.com/media/7f8816_81527cc509e643a6aa55c2813f881833~mv2.png/v1/fill/w_568,h_266,al_c,lg_1,q_85,enc_avif,quality_auto/7f8816_81527cc509e643a6aa55c2813f881833~mv2.png" alt="Logo Fundación" />
                    </div>
                    <div className="responsabilidad-content">
                        <h2>Responsabilidad Social Empresarial</h2>
                        <p>
                            En Triturados Paz de Río estamos comprometidos con el desarrollo de la organización, 
                            sus colaboradores y las comunidades del entorno, a través de la Fundación Social 
                            Triturados Paz de Río (FTPR).
                        </p>
                        <ul style={{ listStyle: 'none', margin: '20px 0' }}>
                            <li style={{ marginBottom: '10px' }}><i className="fas fa-check-circle" style={{ color: 'var(--secondary)', marginRight: '10px' }}></i> Desarrollo de procesos sostenibles.</li>
                            <li style={{ marginBottom: '10px' }}><i className="fas fa-check-circle" style={{ color: 'var(--secondary)', marginRight: '10px' }}></i> Mejoramiento de calidad de vida.</li>
                            <li style={{ marginBottom: '10px' }}><i className="fas fa-check-circle" style={{ color: 'var(--secondary)', marginRight: '10px' }}></i> Compromiso ambiental.</li>
                        </ul>
                        <Link to="/responsabilidad" className="btn btn-primary">Conocer Nuestra Fundación</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ResponsabilidadSocial;
