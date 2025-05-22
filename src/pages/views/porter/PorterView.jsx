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
  const [idBuscar, setIdBuscar] = useState("");
  const [datosFiltrados, setDatosFiltrados] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    torre: "",
    apartamento: "",
    paquetes: "",
  });

  const ManejarCambio = (e) => {
    const valor = e.target.value;
    setIdBuscar(valor);

    // Buscar en datos.residentes
    const Filtrado = Array.isArray(datos.residentes)
      ? datos.residentes.find((i) => String(i.id) === valor)
      : null;

    if (Filtrado) {
      setDatosFiltrados({
        nombre: Filtrado.name,
        apellido: Filtrado.lastname,
        telefono: Filtrado.telefono,
        torre: Filtrado.torre,
        apartamento: Filtrado.apartamento,
        paquetes: Filtrado.paquetes,
      });
    } else {
      setDatosFiltrados({
        nombre: "",
        apellido: "",
        telefono: "",
        torre: "",
        apartamento: "",
        paquetes: "",
      });
    }
  };

  function Ingreso() {
    setCount(count + 1);
  }

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
              value={idBuscar}
              onChange={ManejarCambio}
            />
            <OpenModal
              clases={"salida_buscar"}
              Servicio={"BUSCAR"}
              modal={<ModalResidente datos={datosFiltrados} />}
            ></OpenModal>
            {console.table(datos.residentes)}
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
