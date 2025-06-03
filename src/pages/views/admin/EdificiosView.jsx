import AsideAdmin from "../../../layouts/aside/aside.admin";
import FooterPorter from "../../../layouts/footer/footer.porter";
import HeaderAdmin from "../../../layouts/header/header.admin";
import "../../../styles/edificios.scss";
import datos from "../../../db/user.json";
import { useState } from "react";

function EdificiosView() {
  const [edificios, setEdificios] = useState(datos.edificios);
  const [formulario, setFormulario] = useState({
    id: "",
    torre: "",
    apartamento: "",
  });

  const manejoCambios = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const agregarEdificios = () => {
    if (!formulario.id || !formulario.torre || !formulario.apartamento) return;
    setEdificios([...edificios, { ...formulario }]);
    setFormulario({ id: "", torre: "", apartamento: "" });
  };

  const eliminarEdificio = (id) => {
    const filtrado = edificios.filter((e) => e.id !== id);
    setEdificios(filtrado);
  };

  const FiltrarEdificios = edificios.map((e) => (
    <tr key={e.id}>
      <td>{e.id}</td>
      <td>{e.torre}</td>
      <td>{e.apartamento}</td>
      <td>
        <button
          onClick={() => eliminarEdificio(e.id)}
          className="btn btn-danger btn-sm"
        >
          🗑️
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <HeaderAdmin />
      <div
        className="registro_edificios mt-5 ms-5"
        style={{ display: "flex", gap: "2rem" }}
      >
        <div className="torre">
          <div className="torre_tabla">
            <table className="table table-striped table-bordered table-hover table-responsive bg-white text-center align-middle shadow-sm">
              <thead className="table-dark">
                <tr>
                  <th>Identificador</th>
                  <th>Torre</th>
                  <th>Apartamento</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>{FiltrarEdificios}</tbody>
            </table>
          </div>
          <div className="torre_form">
            <h2>Ingresar Torre</h2>
            <div>
              <label htmlFor="id">Identificador</label>
              <input
                type="text"
                name="id"
                value={formulario.id}
                onChange={manejoCambios}
                id="id"
              />
            </div>
            <div>
              <label htmlFor="torre">Torre</label>
              <input
                type="text"
                name="torre"
                value={formulario.torre}
                onChange={manejoCambios}
                id="torre"
              />
            </div>
            <div>
              <label htmlFor="apartamento">Apartamento</label>
              <input
                type="text"
                name="apartamento"
                value={formulario.apartamento}
                onChange={manejoCambios}
                id="apartamento"
              />
            </div>
            <div className="botones">
              <button
                className="btn btn-primary w-25"
                onClick={agregarEdificios}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
        <div
          className="mt-5"
          style={{ flex: 1, position: "relative", top: "48px" }}
        >
          <AsideAdmin />
        </div>
      </div>
      <FooterPorter />
    </div>
  );
}

export default EdificiosView;
