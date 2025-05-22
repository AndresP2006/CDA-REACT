import "./visita.scss";
// import datos from "../../../db/user.json";

export function ModalVisitas({ cerrarModal, ingreso }) {
  return (
    <div className="modalVisitas">
      <div className="modalVisitas__titulo">
        <h2>Nuevo registro</h2>
        <button className="modalVisitas__cerrar" onClick={cerrarModal}>
          ✕
        </button>
      </div>

      <div className="modalVisitas__inputs">
        <label htmlFor="id">Documento:</label>
        <input type="text" id="id" />

        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" />

        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" />

        <label htmlFor="telefono">Teléfono:</label>
        <input type="text" id="telefono" />

        <label htmlFor="motivo">Motivo de visita:</label>
        <input type="text" id="motivo" />

        <div className="modalVisitas__fila">
          <select>
            <option>Torre</option>
            <option>Torre A</option>
            <option>Torre B</option>
          </select>
          <select>
            <option>Apartamento</option>
            <option>101</option>
            <option>102</option>
          </select>
        </div>

        <select>
          <option>Residentes</option>
          <option>Propietario</option>
          <option>Arrendatario</option>
        </select>

        <button
          className="modalVisitas__enviar"
          onClick={() => {
            if (ingreso) ingreso();
            cerrarModal();
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
