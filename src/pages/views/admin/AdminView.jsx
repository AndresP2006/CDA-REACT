import AsideAdmin from "../../../layouts/aside/aside.admin";
import FooterPorter from "../../../layouts/footer/footer.porter";
import HeaderAdmin from "../../../layouts/header/header.admin";
import datos from "../../../db/user.json";
import "../../../styles/admin.scss";
import { OpenModal } from "../../../components/button/openModal/OpenModals";

function Admin() {
  const { usuarios, residentes } = datos;

  const filas = [
    ...usuarios.map((e) => ({
      tipo: e.tipo,
      id: e.id,
      nombre: e.name,
      apellido: e.lastname,
      telefono: e.telefono,
      correo: e.correo,
      torre: e.torre,
      apartamento: e.apartamento,
    })),
    ...residentes.map((e) => ({
      tipo: e.tipo,
      id: e.id,
      nombre: e.name,
      apellido: e.lastname,
      telefono: e.telefono,
      correo: e.correo,
      torre: e.torre,
      apartamento: e.apartamento,
    })),
  ];

  return (
    <div>
      <HeaderAdmin />
      <div
        className="ms-5 align-items-center"
        style={{
          display: "flex",
          gap: "2rem",
          width: "90%",
        }}
      >
        <OpenModal
          clases={"btn btn-sm btn-success mt-5"}
          Servicio={"+ Agregar Nuevo Registro"}
        />
        <div>
          <select
            name=""
            className="form-select mt-5"
            style={{ width: "150px" }}
            id="Roles"
          >
            <option selected>Todos</option>
            <option value={"1"}>Administrador</option>
            <option value={"2"}>Portero</option>
            <option value={"3"}>Residente</option>
          </select>
        </div>
        <div className="align-content-end">
          <input type="text" className="form-control mt-5 ms-auto"  placeholder="Buscar"/>
        </div>
      </div>
      <div className="admin-layout" style={{ display: "flex", gap: "2rem" }}>
        <div className="admin-table ms-5 mt-5" style={{ flex: 2 }}>
          <table className="table table-striped table-bordered table-hover table-responsive bg-white text-center align-middle shadow-sm">
            <thead className="table-dark">
              <tr>
                <th>DOCUMENTO</th>
                <th>NOMBRE</th>
                <th>APELLIDO</th>
                <th>TELEFONO</th>
                <th>CORREO</th>
                <th>APARTAMENTO</th>
                <th>TORRE</th>
                <th>ROL</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {filas.map((fila, index) => (
                <tr key={index}>
                  <td>{fila.id}</td>
                  <td>{fila.nombre}</td>
                  <td>{fila.apellido}</td>
                  <td>{fila.telefono}</td>
                  <td>{fila.correo}</td>
                  <td>{fila.apartamento}</td>
                  <td>{fila.torre}</td>
                  <td>{fila.tipo}</td>
                  <td>
                    <div className="d-flex  align-items-end justify-content-end">
                      <button className="btn btn-sm btn-warning me-2">
                        ✏️
                      </button>
                      <button className="btn btn-sm btn-danger">🗑️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-5 " style={{ flex: 0 }}>
          <AsideAdmin />
        </div>
      </div>
      <br />
      <br />
      <FooterPorter />
    </div>
  );
}

export default Admin;
