import AsideAdmin from "../../../layouts/aside/aside.admin";
import FooterPorter from "../../../layouts/footer/footer.porter";
import HeaderAdmin from "../../../layouts/header/header.admin";
import datos from "../../../db/user.json";
import { useState } from "react";

function PaquetesView() {
  const [paquetes, setPaquetes] = useState(datos.residentes);
  const [filtrar, setFiltroFecha] = useState("");
  function handleFiltrarClick() {
    if (filtrar === "") {
      setPaquetes(datos.residentes);
      return;
    }
    const filtrados = datos.residentes
      .map((e) => ({
        ...e,
        paquetes: e.paquetes.filter((p) => p.fecha?.slice(0, 10) === filtrar),
      }))
      .filter((e) => e.paquetes.length > 0);
    setPaquetes(filtrados);
  }
  const FiltroPaqutes = paquetes.flatMap((e) =>
    e.paquetes.map((p) => (
      <tr key={p.id}>
        <td>{e.id}</td>
        <td>
          {e.name} {e.lastname}
        </td>
        <td>{p.estado}</td>
        <td>{p.fecha}</td>
        <td>{p.descripcion}</td>
        <td>{p.recibidor}</td>
        <td>
          <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-sm btn-danger me-2">🗑️</button>
          </div>
        </td>
      </tr>
    ))
  );
  return (
    <div>
      <HeaderAdmin></HeaderAdmin>
      <div className="container-figure g-3 mt-5 ms-5 d-flex align-items-center">
        <div className="col-3">
          <h2>Registro de Paquetes</h2>
        </div>
        <div className="d-flex align-items-center">
          <div className="input-group">
            <div>
              <input
                type="date"
                className="form-control border-2 "
                value={filtrar}
                onChange={(e) => setFiltroFecha(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary ms-5 border-2"
              onClick={handleFiltrarClick}
            >
              Filtrar
            </button>
          </div>
        </div>
      </div>
      <div
        className="registro-paquetes"
        style={{ display: "flex", gap: "2rem" }}
      >
        <div
          className="ms-5 mt-5 table-container"
          style={{
            flex: 10,
            overflowX: "auto",
            maxHeight: "300px",
            overflowY: "auto",
          }}
        >
          <table className="table table-striped table-bordered table-hover table-responsive bg-white text-center align-middle shadow-sm">
            <thead className="table-dark">
              <tr>
                <th>Documento</th>
                <th>Destinatario</th>
                <th>Estado</th>
                <th>Fecha</th>
                <th>Descripcion</th>
                <th>Recibidor</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>{FiltroPaqutes}</tbody>
          </table>
        </div>
        <div className="mt-5 " style={{ flex: 1 }}>
          <AsideAdmin></AsideAdmin>
        </div>
      </div>
      <FooterPorter></FooterPorter>
    </div>
  );
}

export default PaquetesView;
