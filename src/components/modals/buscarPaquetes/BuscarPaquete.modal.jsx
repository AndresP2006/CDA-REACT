import React from "react";
import "./buscarpaquete.scss";

export const ModalResidente = ({ cerrarModal, datosFiltrados }) => {
  return (
    <div className="modal-residente-fondo">
      <div className="modal-residente-contenido">
        <div className="modal-residente-header">
          <h2>Información del Residente</h2>
          <button className="modal-residente-cerrar-btn" onClick={cerrarModal}>
            ×
          </button>
        </div>
        <div className="formulario-residente">
          <label>Nombre:</label>
          <input type="text" value={datosFiltrados.nombre || ""} disabled />

          <label>Apellido:</label>
          <input type="text" disabled />

          <label>Teléfono:</label>
          <input type="text" disabled />

          <label>Torre:</label>
          <input type="text" />
          <label>Número de Departamento:</label>
          <input type="text" disabled />

          <label>Total de paquetes:</label>
          <input type="text" disabled />

          <button className="boton-residente">Paquetes</button>
        </div>
      </div>
    </div>
  );
};
