import datos from "../../../db/user.json";

// import { useState, useEffect } from "react";

export function EntregaPaquete({ IdEntrega, cerrarModal }) {
  const Filtro = datos.residentes.find((e) => e.id === Number(IdEntrega));
  const paquetes = Filtro ? Filtro.paquetes : [];

  return (
    <div className="entrega">
      <div className="content_entrega">
        <div className="encabezado_entrega">
          <h2 className="entrega__titulo">
            Paquetes del residente {Filtro?.name} {Filtro?.lastname}
          </h2>
          <button onClick={cerrarModal}>X</button>
        </div>

        {paquetes &&
        paquetes.filter((paquete) => paquete.estado === "bodega").length > 0 ? (
          <table className="entrega__tabla">
            <thead>
              <tr>
                <th className="entrega__th">Fecha</th>
                <th className="entrega__th">Descripción</th>
                <th className="entrega__th">Recibidor</th>
                <th className="entrega__th">Torre</th>
                <th className="entrega__th">Apartamento</th>
                <th className="entrega__th">Entregar</th>
              </tr>
            </thead>
            <tbody>
              {paquetes
                .filter((paquete) => paquete.estado === "bodega")
                .map((paquete) => (
                  <tr className="entrega__fila" key={paquete.id}>
                    <td className="entrega__td">{paquete.fecha}</td>
                    <td className="entrega__td">{paquete.descripcion}</td>
                    <td className="entrega__td">{paquete.recibidor}</td>
                    <td className="entrega__td">{paquete.torre}</td>
                    <td className="entrega__td">{paquete.apartamento}</td>
                    <td className="entrega__td">
                      <button>Entregar</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <p className="entrega__mensaje">
            No se encontraron paquetes para este residente.
          </p>
        )}
      </div>
    </div>
  );
}
