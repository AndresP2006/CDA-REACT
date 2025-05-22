import { OpenModal } from "../../../components/button/openModal/OpenModals";
import { ModalVisitas } from "../../../components/modals/visitas/visitas.modal";
import FooterPorter from "../../../layouts/footer/footer.porter";
import HeaderPorter from "../../../layouts/header/header.porter";
import "../../../styles/Porter.scss";

function Porter() {
  return (
    <div className="porter-view">
      <HeaderPorter />
      <div className="insercion">
        <div className="contador">
          <h2>Han Ingresado</h2>
          <div>
            <p>0</p>
          </div>
        </div>
        <div className="paquete_salida">
          <div className="paquete">
            <input type="text" placeholder="Buscar Persona con Paquete" />
            <OpenModal clases={"salida_buscar"} Servicio={"BUSCAR"}></OpenModal>
          </div>
          <div className="salida">
            <input type="text" placeholder="Salida de Visitas" />
            <OpenModal clases={"salida_buscar"} Servicio={"SALIDA"}></OpenModal>
          </div>
        </div>
        <div className="ingresar_visita_paquete">
          <div className="visita">
            <OpenModal
              clases={"paquete_visita"}
              Servicio={"NUEVA VISITA"}
              modal={<ModalVisitas />}
            ></OpenModal>
          </div>
          <div className="paquete">
            <OpenModal
              clases={"paquete_visita"}
              Servicio={"NUEVA PAQUETE"}
            ></OpenModal>
          </div>
        </div>
      </div>
      <FooterPorter />
    </div>
  );
}

export default Porter;
