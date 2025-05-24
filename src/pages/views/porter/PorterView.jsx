import { useState } from "react";
import { OpenModal } from "../../../components/button/openModal/OpenModals";
import { ModalResidente } from "../../../components/modals/buscarPaquetes/BuscarPaquete.modal";
import { ModalPaquete } from "../../../components/modals/paquetes/paquete.modal";
import { ModalVisitas } from "../../../components/modals/visitas/visitas.modal";
import datos from "../../../db/user.json";
import FooterPorter from "../../../layouts/footer/footer.porter";
import HeaderPorter from "../../../layouts/header/header.porter";
import "../../../styles/Porter.scss";

function Porter() {
  const [count, setCount] = useState(
    datos.visitas ? Object.keys(datos.visitas).length : 0
  );
  const [idPaquete, setIdPaquete] = useState("");
  function handleBorrar() {
    setIdPaquete("");
  }
  function FiltroIdPersona(e) {
    setIdPaquete(e.target.value);
  }

  function Ingreso() {
    setCount(count + 1);
  }
  // count("");

  return (
    <div className="porter-view">
      <HeaderPorter />
      <div className="insercion">
        <div className="contador contador-section">
          <h2 className="contador-title">Han Ingresado</h2>
          <div className="contador-numero">
            <p className="contador-cantidad">{count}</p>
          </div>
        </div>
        <div className="paquete_salida">
          <div className="modales">
            <input
              className="inputs"
              type="text"
              placeholder="Buscar Persona con Paquete"
              value={idPaquete}
              onChange={FiltroIdPersona}
            />
            <OpenModal
              clases={"salida_buscar"}
              Servicio={"BUSCAR"}
              modal={
                <ModalResidente
                  datosFiltrados={idPaquete}
                  borrar={handleBorrar}
                />
              }
            ></OpenModal>
            {/* {console.table(datos.residentes.id === idPaquete)} */}
          </div>
          <div className="modales">
            <input
              className="inputs"
              type="text"
              placeholder="Salida de Visitas"
            />
            <OpenModal clases={"salida_buscar"} Servicio={"SALIDA"}></OpenModal>
          </div>
        </div>
        <div className="ingresar_visita_paquete ingresar-section">
          <div className="visita visita-nueva">
            <OpenModal
              clases={"paquete_visita"}
              Servicio={"NUEVA VISITA"}
              modal={<ModalVisitas ingreso={Ingreso} />}
            ></OpenModal>
          </div>
          <div className="paquete paquete-nuevo">
            <OpenModal
              clases={"paquete_visita"}
              Servicio={"NUEVA PAQUETE"}
              modal={<ModalPaquete />}
            ></OpenModal>
          </div>
        </div>
      </div>
      <FooterPorter />
    </div>
  );
}

export default Porter;
