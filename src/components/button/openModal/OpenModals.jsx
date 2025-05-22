import React, { useState } from "react";

export function OpenModal({ Servicio, clases, modal }) {
  const [mostrarModal, setMostrarModal] = useState(false);

  const cerrarModal = () => setMostrarModal(false);

  return (
    <>
      <button className={clases} onClick={() => setMostrarModal(true)}>
        {Servicio}
      </button>

      {mostrarModal && modal && React.cloneElement(modal, { cerrarModal })}
    </>
  );
}
