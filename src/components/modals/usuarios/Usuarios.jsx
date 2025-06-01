import "./usuarios.scss";
import datos from "../../../db/user.json";
import { useState, useEffect } from "react";

function Usuarios({ cerrarModal, titulo, informacion }) {
  const { usuarios, residentes } = datos;
  const [Información, setInformacion] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      password:e.password
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
  useEffect(() => {
    if (informacion) {
      const filtro = filas.find(
        (e) => e.id.toString() === informacion.toString()
      );
      setInformacion(filtro || null);
    }
  }, [informacion, filas]);

return (
    <div className="Modal-usuario">
        <div className="modal-usuario-container">
            <div className="header-usuario">
                <h1 className="titulo">{titulo}</h1>
                <button className="cerrar-modal" onClick={cerrarModal}>
                    &times;
                </button>
            </div>
            <div className="Ingresar-datos">
                <div>
                    <label htmlFor="Documento">Documento</label>
                    <input type="text" id="Documento" value={Información?.id || ""} readOnly />
                </div>
                <div>
                    <label htmlFor="Nombre">Nombre</label>
                    <input type="text" id="Nombre" value={Información?.nombre || ""} />
                </div>
                <div>
                    <label htmlFor="Apellido">Apellido</label>
                    <input type="text" id="Apellido" value={Información?.apellido || ""} />
                </div>
                <div>
                    <label htmlFor="Telefono">Telefono</label>
                    <input type="text" id="Telefono" value={Información?.telefono || ""} />
                </div>
                <div>
                    <label htmlFor="Correo">Correo</label>
                    <input type="text" id="Correo" value={Información?.correo || ""} />
                </div>
                <div>
                    <div className="edificios">
                        <div>
                            <label htmlFor="Torre">Torre</label>
                            <select id="Torre" value={Información?.torre || ""}>
                                {/* <option value="">Seleccione una torre</option> */}
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="Apartamento">Apartamento</label>
                            <select id="Apartamento" value={Información?.apartamento || ""}>
                                {/* <option value="">Seleccione un apartamento</option> */}
                                <option value="100">100</option>
                                <option value="101">101</option>
                                <option value="102">102</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="Rol">Usuario</label>
                    <input type="text" value={Información?.tipo || ""} />
                </div>
                <div>
                    <label htmlFor="Contraseña">Contraseña</label>
                    <input type="password" value={Información?.password || ""} />
                </div>
                <div>
                    <button>Enviar</button> 
                </div>
            </div>
        </div>
    </div>
);
}

export default Usuarios;
