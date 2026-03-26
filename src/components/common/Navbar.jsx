import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollTo = (hash) => {
    closeMenu();
    if (isHome) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/empresa" className="nav-link" onClick={closeMenu}>
              Empresa
            </Link>
          </li>
          <li className="nav-item">
            <a
              href={isHome ? '#productos' : '/#productos'}
              className="nav-link"
              onClick={() => isHome ? scrollTo('#productos') : closeMenu()}
            >
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a
              href={isHome ? '#servicios' : '/#servicios'}
              className="nav-link"
              onClick={() => isHome ? scrollTo('#servicios') : closeMenu()}
            >
              Servicios
            </a>
          </li>
          <li className="nav-item">
            <a
              href={isHome ? '#proyectos' : '/#proyectos'}
              className="nav-link"
              onClick={() => isHome ? scrollTo('#proyectos') : closeMenu()}
            >
              Proyectos
            </a>
          </li>
          <li className="nav-item">
            <a
              href={isHome ? '#responsabilidad' : '/#responsabilidad'}
              className="nav-link"
              onClick={() => isHome ? scrollTo('#responsabilidad') : closeMenu()}
            >
              Responsabilidad
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contacto"
              className="nav-link"
              onClick={() => scrollTo('#contacto')}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
