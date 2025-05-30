import React, { useEffect, useState } from "react";
import datos from "../../../db/user.json";
import "./buscarpaquete.scss";
import { EntregaPaquete } from "./Entrega.modal";
import { OpenModal } from "../../button/openModal/OpenModals";
export const ModalResidente = ({ cerrarModal, datosFiltrados, borrar }) => {
  const [idBuscar, setIdBuscar] = useState("");
  const [totalPaqutes, setTotalPaquetes] = useState(0);

  useEffect(() => {
    const Filtro = datos.residentes.find(
      (e) => e.id === Number(datosFiltrados)
    );
    setIdBuscar(Filtro);

    setTotalPaquetes(Filtro && Filtro.paquetes ? Filtro.paquetes.length : 0);
  }, [datosFiltrados]);

  return (
    <div className="modal-residente-fondo">
      <div className="modal-residente-contenido">
        <div className="modal-residente-header">
          <h2>Información del Residente</h2>
          <button
            className="modal-residente-cerrar-btn"
            onClick={() => {
              cerrarModal();
              borrar();
            }}
          >
            ×
          </button>
        </div>
        <div className="formulario-residente">
          <label>Nombre:</label>
          <input type="text" value={idBuscar?.name || ""} disabled />

          <label>Apellido:</label>
          <input type="text" value={idBuscar?.lastname || ""} disabled />

          <label>Teléfono:</label>
          <input type="text" value={idBuscar?.telefono || ""} disabled />

          <label>Torre:</label>
          <input type="text" value={idBuscar?.torre || ""} disabled />

          <label>Número de Departamento:</label>
          <input type="text" value={idBuscar?.apartamento || ""} disabled />

          <label>Total de paquetes:</label>
          <input type="text" value={totalPaqutes} disabled />

          <OpenModal
            clases={"boton-residente"}
            Servicio={"Entrega"}
            modal={<EntregaPaquete IdEntrega={datosFiltrados}></EntregaPaquete>}
          ></OpenModal>
        </div>
      </div>
    </div>
  );
};
