import { useContext } from "react";
import { UserContext } from "../../utils/context/UserContext";
import "./header.scss";
import { CerrarSession } from "../../components/button/CerrarSession";

function HeaderPorter() {
  const { Usuario } = useContext(UserContext);
  return (
    <div className="HeaderPorter">
      <h1>
        Control de Registro de <i>Entrada y Salida</i>
      </h1>
      <div>
        <h2>
          Bienvenido {Usuario?.name} {Usuario?.lastname}
        </h2>
      </div>
      <div>
        <CerrarSession></CerrarSession>
      </div>
    </div>
  );
}

export default HeaderPorter;
