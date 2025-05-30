import { Link } from "react-router-dom";

function AsideAdmin() {
  return (
    <div className="d-flex  align-items-end justify-content-end">
      <nav
        className="menu_admin d-flex flex-column  "
        style={{ width: "220px" }}
      >
        <Link to="/admin/usuarios">
          <button className="btn btn-primary btn-lg w-50 mb-2">Usuario</button>
        </Link>
        <Link to="/admin/visitas">
          <button className="btn btn-primary btn-lg w-50 mb-2">Registro</button>
        </Link>
        <Link to="/admin/paquetes">
          <button className="btn btn-primary btn-lg w-50 mb-2">Paquetes</button>
        </Link>
        <Link to="/admin/edificios">
          <button className="btn btn-primary btn-lg w-50">Edificio</button>
        </Link>
      </nav>
    </div>
  );
}

export default AsideAdmin;
