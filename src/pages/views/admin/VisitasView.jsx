import AsideAdmin from "../../../layouts/aside/aside.admin";
import FooterPorter from "../../../layouts/footer/footer.porter";
import HeaderAdmin from "../../../layouts/header/header.admin";
import datos from "../../../db/user.json";
import {  useState } from "react";
function VisitasView() {
  const [FiltroFecha, setFiltroFecha] = useState("");
  const [Visitantes, setVisitantes] = useState(datos.visitas);

function handleFiltrarClick() {
    if (FiltroFecha === "") {
        setVisitantes(datos.visitas);
        return;
    }
    const Filtradas = datos.visitas.filter(
        (visitas) => visitas.fechaEntrada?.slice(0, 10) === FiltroFecha
    );
    setVisitantes(Filtradas);
}


  const FiltroVisitas =Visitantes.map((e) => (
    <tr key={e.id}>
      <td>{e.id}</td>
      <td>{e.name}</td>
      <td>{e.lastname}</td>
      <td>{e.telefono}</td>
      <td className="">{e.motivo}</td>
      <td>
        <div className="d-flex  align-items-center justify-content-center">
          <button className="btn btn-sm btn-warning me-2">✏️</button>
        </div>
      </td>
    </tr>
  ));
  return (
    <div>
      <HeaderAdmin />
      <div className="container-figure g-3 mt-5 ms-5 d-flex align-items-center">
        <div className="col-3">
          <h2>Lista de visitantes</h2>
        </div>
        <div className=" d-flex align-items-center">
          <div className="input-group">
            <div>
              <input
                type="date"
                className="form-control border-2 "
                value={FiltroFecha}
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
      <div style={{ display: "flex", gap: "2rem" }}>
        <div className="ms-5 mt-5 table-container" style={{ flex: 10 , overflowX: "auto", maxHeight: "300px", overflowY: "auto" }} >
          <table className="table table-striped table-bordered table-hover table-responsive bg-white text-center align-middle shadow-sm">
            <thead className="table-dark">
              <tr>
                <th>Documento</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefono</th>
                <th>Motivo</th>
                <th>Registros</th>
              </tr>
            </thead>
            <tbody>{FiltroVisitas}</tbody>
          </table>
        </div>
        <div className="mt-5 " style={{ flex: 1 }}>
          <AsideAdmin />
        </div>
      </div>
      <FooterPorter />
    </div>
  );
}

export default VisitasView;
