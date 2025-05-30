import { useContext } from "react";
import { UserContext } from "../../utils/context/UserContext";
import { CerrarSession } from "../../components/button/cerrarSession/CerrarSession";
import "./header.scss";

function HeaderAdmin() {
  const { Usuario } = useContext(UserContext);
  return (
    <div className="HeaderAdmin">
      <h1>
        Control de Registro de <i>Entrada y Salida</i>
      </h1>
      <div>
        <h2>
          Bienvenido {Usuario?.name} {Usuario?.lastname}
        </h2>
      </div>
      <div>
        <button className="Notificaciones">🔔</button>
      </div>
      <div>
        <CerrarSession></CerrarSession>
      </div>
    </div>
  );
}

export default HeaderAdmin;
