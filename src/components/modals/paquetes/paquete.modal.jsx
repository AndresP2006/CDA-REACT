import React, { useState } from "react";
import "./paquete.scss";
import datos from "../../../db/user.json";
export const ModalPaquete = ({ cerrarModal }) => {
  function MostrarViviendas() {
    const [selectedTorre, setSelectedTorre] = useState("");
    const torres = Array.from(new Set(datos.edificios.map((e) => e.torre)));
    const apartamentos = datos.edificios
      .filter((e) => e.torre === selectedTorre || selectedTorre === "")
      .map((e) => e.apartamento);

    return (
      <>
        <div>
          <label>Torre</label>
          <select
            value={selectedTorre}
            onChange={(e) => setSelectedTorre(e.target.value)}
          >
            {torres.map((torre, idx) => (
              <option key={idx} value={torre}>
                {torre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Apartamento</label>
          <select className="apartamento">
            {apartamentos.map((apto, idx) => (
              <option key={idx} value={apto}>
                {apto}
              </option>
            ))}
          </select>
        </div>
      </>
    );
  }
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

          <div className="formulario-paquete-fila">{<MostrarViviendas />}</div>

          <select className="formulario-paquete-select">
            <option>{}</option>
          </select>

          <button type="submit" className="formulario-paquete-btn">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
