import React, { useEffect, useRef, useState } from 'react';
import { CATALOGO, formatCOP } from '../../data/productsData';
import '../../styles/CotizarModal.css';

/**
 * Modal de cotización reutilizable.
 * @param {{ productoId: string, onClose: () => void }} props
 */
const CotizarModal = ({ productoId, onClose }) => {
  const categoria = CATALOGO[productoId];
  const [subIndex, setSubIndex] = useState(0);
  const [cantidad, setCantidad] = useState(1);
  const overlayRef = useRef(null);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    // Bloquear scroll del body mientras el modal está abierto
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!categoria) return null;

  const subProducto = categoria.subProductos[subIndex];
  const cantidadValida = Math.max(1, Number(cantidad) || 1);
  const total = subProducto.precio * cantidadValida;

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleCantidadChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setCantidad(isNaN(val) || val < 1 ? 1 : val);
  };

  const handleConfirmar = () => {
    alert(
      `✅ Cotización recibida\n\nProducto: ${categoria.nombre}\n` +
      `Ítem: ${subProducto.nombre}\n` +
      `Cantidad: ${cantidadValida} ${categoria.unidad}(s)\n` +
      `Total estimado: ${formatCOP(total)}\n\n` +
      `Nos comunicaremos contigo pronto.`
    );
    onClose();
  };

  return (
    <div
      className="cotizar-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cotizar-titulo"
    >
      <div className="cotizar-modal">
        {/* ── Header ──────────────────────────────────── */}
        <div className="cotizar-header">
          <div className="cotizar-header-icon">
            <i className="fas fa-file-invoice-dollar" />
          </div>
          <div>
            <span className="cotizar-category-label">Cotización</span>
            <h2 id="cotizar-titulo" className="cotizar-title">
              {categoria.nombre}
            </h2>
          </div>
          <button
            className="cotizar-close"
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            <i className="fas fa-times" />
          </button>
        </div>

        {/* ── Body ─────────────────────────────────────── */}
        <div className="cotizar-body">
          {/* Sub-producto */}
          <div className="cotizar-field">
            <label htmlFor="cotizar-subproducto" className="cotizar-label">
              Tipo de material
            </label>
            <div className="cotizar-select-wrapper">
              <select
                id="cotizar-subproducto"
                className="cotizar-select"
                value={subIndex}
                onChange={(e) => {
                  setSubIndex(Number(e.target.value));
                  setCantidad(1);
                }}
              >
                {categoria.subProductos.map((sp, i) => (
                  <option key={i} value={i}>
                    {sp.nombre}
                  </option>
                ))}
              </select>
              <i className="fas fa-chevron-down cotizar-select-icon" />
            </div>
          </div>

          {/* Precio unitario */}
          <div className="cotizar-precio-unitario">
            <span className="cotizar-precio-label">Precio por {categoria.unidad.toLowerCase()}</span>
            <span className="cotizar-precio-valor">{formatCOP(subProducto.precio)}</span>
          </div>

          {/* Cantidad */}
          <div className="cotizar-field">
            <label htmlFor="cotizar-cantidad" className="cotizar-label">
              Cantidad ({categoria.unidad}s)
            </label>
            <div className="cotizar-cantidad-wrapper">
              <button
                className="cotizar-qty-btn"
                onClick={() => setCantidad((c) => Math.max(1, Number(c) - 1))}
                aria-label="Reducir cantidad"
              >
                <i className="fas fa-minus" />
              </button>
              <input
                id="cotizar-cantidad"
                type="number"
                min="1"
                className="cotizar-input"
                value={cantidad}
                onChange={handleCantidadChange}
              />
              <button
                className="cotizar-qty-btn"
                onClick={() => setCantidad((c) => Number(c) + 1)}
                aria-label="Aumentar cantidad"
              >
                <i className="fas fa-plus" />
              </button>
            </div>
          </div>

          {/* Total */}
          <div className="cotizar-total-card">
            <div className="cotizar-total-row">
              <span className="cotizar-total-label">Total estimado</span>
              <span className="cotizar-total-valor">{formatCOP(total)}</span>
            </div>
            <p className="cotizar-total-note">
              * Precio referencial. El valor final puede variar según distancia de entrega e impuestos.
            </p>
          </div>
        </div>

        {/* ── Footer ───────────────────────────────────── */}
        <div className="cotizar-footer">
          <button className="cotizar-btn-cancel" onClick={onClose}>
            <i className="fas fa-times" /> Cancelar
          </button>
          <button className="cotizar-btn-confirm" onClick={handleConfirmar}>
            <i className="fas fa-paper-plane" /> Solicitar cotización
          </button>
        </div>
      </div>
    </div>
  );
};

export default CotizarModal;
