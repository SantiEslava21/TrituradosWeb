import React from 'react';
import Hero from './components/Hero';
import Resenas from './components/Resenas';
import Productos from './components/Productos';
import Estadisticas from './components/Estadisticas';
import Servicios from './components/Servicios';
import Clientes from './components/Clientes';
import Proyectos from './components/Proyectos';

const Home = () => {
  return (
    <main>
      <Hero />
      <Resenas />
      <Productos />
      <Estadisticas />
      <Servicios />
      <Clientes />
      <Proyectos />
    </main>
  );
};

export default Home;
