import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('inicio');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActiveTab('inicio');
    else if (path === '/empresa') setActiveTab('empresa');
    else if (path === '/productos') setActiveTab('productos');
    else if (path === '/servicios') setActiveTab('servicios');
    else if (path === '/proyectos') setActiveTab('proyectos');
    else if (path === '/responsabilidad') setActiveTab('responsabilidad');
    else if (path === '/contacto') setActiveTab('contacto');
    
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const navStyle = {
    boxShadow: isScrolled
      ? '0 4px 24px rgba(26, 54, 93, 0.15)'
      : '0 2px 16px rgba(26, 54, 93, 0.10)',
  };

  return (
    <nav className="navbar" style={navStyle}>
      <div className="nav-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img
              src="https://static.wixstatic.com/media/7f8816_81527cc509e643a6aa55c2813f881833~mv2.png/v1/fill/w_568,h_266,al_c,lg_1,q_85,enc_avif,quality_auto/7f8816_81527cc509e643a6aa55c2813f881833~mv2.png"
              alt="TPR CFN Logo"
            />
          </Link>
        </div>

        <button
          className="menu-toggle"
          id="menuToggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${activeTab === 'inicio' ? 'active' : ''}`} onClick={closeMenu}>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/empresa" className={`nav-link ${activeTab === 'empresa' ? 'active' : ''}`} onClick={closeMenu}>
              Empresa
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/productos" className={`nav-link ${activeTab === 'productos' ? 'active' : ''}`} onClick={closeMenu}>
              Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/servicios" className={`nav-link ${activeTab === 'servicios' ? 'active' : ''}`} onClick={closeMenu}>
              Servicios
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/proyectos" className={`nav-link ${activeTab === 'proyectos' ? 'active' : ''}`} onClick={closeMenu}>
              Proyectos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/responsabilidad" className={`nav-link ${activeTab === 'responsabilidad' ? 'active' : ''}`} onClick={closeMenu}>
              Responsabilidad
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacto" className={`nav-link ${activeTab === 'contacto' ? 'active' : ''}`} onClick={closeMenu}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
