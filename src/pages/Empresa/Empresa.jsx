import React from 'react';
import HeroEmpresa from './components/HeroEmpresa';
import QuienesSomos from './components/QuienesSomos';
import MisionVisionValores from './components/MisionVisionValores';
import Politicas from './components/Politicas';
import MedioAmbiente from './components/MedioAmbiente';
import CtaEmpresa from './components/CtaEmpresa';

const Empresa = () => {
  return (
    <main>
      <HeroEmpresa />
      <QuienesSomos />
      <MisionVisionValores />
      <Politicas />
      <MedioAmbiente />
      <CtaEmpresa />
    </main>
  );
};

export default Empresa;
