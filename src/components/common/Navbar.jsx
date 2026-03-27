import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['productos', 'servicios', 'proyectos', 'responsabilidad', 'contacto'];
      let current = '';

      if (location.pathname === '/') {
        current = window.scrollY < window.innerHeight / 2 ? 'inicio' : '';
      } else if (location.pathname === '/empresa') {
        current = 'empresa';
      }

      sections.forEach(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if element is in the viewport (we check if it occupies the top third of the viewport)
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            current = section;
          }
        }
      });

      // Special check to highlight "contacto" if user is at the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        if (document.getElementById('contacto')) {
           current = 'contacto';
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.location.reload();
    } else {
      closeMenu();
    }
  };

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
            <Link to="/" className={`nav-link ${activeSection === 'inicio' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/')}>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/empresa" className={`nav-link ${activeSection === 'empresa' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '/empresa')}>
              Empresa
            </Link>
          </li>
          <li className="nav-item">
            <a
              href={isHome ? '#productos' : '/#productos'}
              className={`nav-link ${activeSection === 'productos' ? 'active' : ''}`}
              onClick={() => isHome ? scrollTo('#productos') : closeMenu()}
            >
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a
              href={isHome ? '#servicios' : '/#servicios'}
              className={`nav-link ${activeSection === 'servicios' ? 'active' : ''}`}
              onClick={() => isHome ? scrollTo('#servicios') : closeMenu()}
            >
              Servicios
            </a>
          </li>
          <li className="nav-item">
            <a
              href={isHome ? '#proyectos' : '/#proyectos'}
              className={`nav-link ${activeSection === 'proyectos' ? 'active' : ''}`}
              onClick={() => isHome ? scrollTo('#proyectos') : closeMenu()}
            >
              Proyectos
            </a>
          </li>
          <li className="nav-item">
            <a
              href={isHome ? '#responsabilidad' : '/#responsabilidad'}
              className={`nav-link ${activeSection === 'responsabilidad' ? 'active' : ''}`}
              onClick={() => isHome ? scrollTo('#responsabilidad') : closeMenu()}
            >
              Responsabilidad
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contacto"
              className={`nav-link ${activeSection === 'contacto' ? 'active' : ''}`}
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
