import { useState, useEffect } from "react";
import "./Carrusel.scss";

function Carrusel({ imagenes }) {
  const [img, setImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImg((prev) => (prev + 1) % imagenes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imagenes.length]);

  return (
    <img className="imagenes" src={imagenes[img].src} alt={imagenes[img].id} />
  );
}
export default Carrusel;
