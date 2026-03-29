/**
 * Catálogo de productos y sub-productos de Triturados Paz de Río
 * Los precios están en pesos colombianos (COP).
 */
export const CATALOGO = {
  triturados: {
    nombre: 'Triturados',
    unidad: 'Tonelada',
    subProductos: [
      { nombre: 'Triturado No. 57 (1/2")',       precio: 45000  },
      { nombre: 'Triturado No. 67 (3/4")',       precio: 47000  },
      { nombre: 'Triturado No. 8 (3/8")',        precio: 50000  },
      { nombre: 'Recebo de Trituración',          precio: 38000  },
      { nombre: 'Piedra Rajada (1" - 2")',        precio: 42000  },
    ],
  },

  granulares: {
    nombre: 'Granulares',
    unidad: 'Tonelada',
    subProductos: [
      { nombre: 'Base Granular BG-25',            precio: 38000  },
      { nombre: 'Sub-Base Granular SBG-40',       precio: 32000  },
      { nombre: 'Afirmado de Cantera',            precio: 28000  },
      { nombre: 'Relleno Seleccionado',           precio: 25000  },
      { nombre: 'Material de Préstamo',           precio: 22000  },
    ],
  },

  asfaltica: {
    nombre: 'Mezcla Asfáltica',
    unidad: 'Tonelada',
    subProductos: [
      { nombre: 'Mezcla Densa MDC-19',            precio: 125000 },
      { nombre: 'Mezcla Densa MDC-25',            precio: 118000 },
      { nombre: 'Mezcla Semidensa MSC-12',        precio: 132000 },
      { nombre: 'Capa Rodadura MA-8',             precio: 145000 },
    ],
  },

  prefabricados: {
    nombre: 'Prefabricados en Concreto',
    unidad: 'Unidad',
    subProductos: [
      { nombre: 'Adoquín Vial (20x10x8 cm)',      precio: 850    },
      { nombre: 'Bordillo Tipo A (60 cm)',        precio: 22000  },
      { nombre: 'Cuneta Prefabricada 0.8 m',      precio: 35000  },
      { nombre: 'Box Culvert 0.6x0.6 m',          precio: 850000 },
      { nombre: 'Placa Huella (1.2x0.8 m)',       precio: 280000 },
    ],
  },
};

/**
 * Formatea un valor numérico a moneda colombiana COP.
 * @param {number} valor
 * @returns {string}  ej. "$ 125.000"
 */
export const formatCOP = (valor) =>
  valor.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
