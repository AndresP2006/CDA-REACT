import React from "react";
import "./paquete.scss";

export const ModalPaquete = ({ cerrarModal }) => {
  return (
    <div className="modal-paquete-fondo">
      <div className="modal-paquete-contenido">
        <div className="modal-paquete-header">
          <h2>Registro de paquetes</h2>
          <button className="modal-paquete-cerrar-btn" onClick={cerrarModal}>
            &times;
          </button>
        </div>
        <form className="formulario-paquete">
          <label>Descripcion:</label>
          <textarea rows="3" />

          <label>Fecha de entrega:</label>
          <input type="datetime-local" />

          <label>Recibidor:</label>
          <input type="text" />

          <div className="formulario-paquete-fila">
            <div>
              <label>Torre</label>
              <select>
                <option>Torre</option>
              </select>
            </div>
            <div>
              <label>Apartamento</label>
              <select className="apartamento">
                <option>Apartamento</option>
              </select>
            </div>
          </div>

          <select className="formulario-paquete-select">
            <option>Residentes</option>
          </select>

          <button type="submit" className="formulario-paquete-btn">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
