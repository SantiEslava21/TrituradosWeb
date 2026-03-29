import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Empresa from './pages/Empresa/Empresa';
import Servicios from './pages/Servicios/Servicios';
import Productos from './pages/Productos/Productos';
import Proyectos from './pages/Proyectos/Proyectos';
import Responsabilidad from './pages/Responsabilidad/Responsabilidad';
import Contacto from './pages/Contacto/Contacto';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/responsabilidad" element={<Responsabilidad />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
