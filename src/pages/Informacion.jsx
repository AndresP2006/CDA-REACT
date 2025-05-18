import NavbarHome from "../layouts/header/header.home";
import Footer from "../layouts/footer/footer.home";
import Carrusel from "../components/carrusel/Carrusel";
import imgIformacion from "../assets/images/informacion-img2.jpg";
import "../styles/informacion.scss";
const imagesCarrusel = [
  { id: 1, src: require("../assets/images/departamento1-inicio.jpg") },
  { id: 2, src: require("../assets/images/departamento2-inicio.jpg") },
  { id: 3, src: require("../assets/images/departamento3-inicio.jpg") },
];

function Informacion() {
  return (
    <div>
      <NavbarHome />
      <div className="informacion">
        <div className="texto">
          <h2>
            Conjunto Residencial LA RIBERA VILLA RICA - Tu Nuevo Hogar en
            Malambo, Atlántico
          </h2>
          <p>
            Bienvenido a LA RIBERA VILLA RICA, un conjunto residencial de
            viviendas de interés social ubicado en el corazón del barrio Villa
            Rica, en Malambo, Atlántico. Este moderno conjunto cuenta con 268
            apartamentos diseñados para ofrecer comodidad y seguridad a sus
            residentes. <br /> <br /> <i>Características del Conjunto:</i>{" "}
            Ubicación Estratégica: LA RIBERA VILLA RICA se encuentra cerca del
            Parque de la Cultura y la Casa de la Cultura, rodeado de un entorno
            que fomenta la vida familiar y comunitaria. Apartamentos Familiares:
            El conjunto ofrece opciones de apartamentos de 40, 44 y 46 m², con
            distribuciones de 2 y 3 alcobas, perfectas para adaptarse a las
            necesidades de cada familia. Seguridad y Tranquilidad: Con un
            cerramiento perimetral que rodea todo el conjunto, LA RIBERA VILLA
            RICA garantiza un ambiente seguro y tranquilo para sus habitantes.
            <br /> <br />
            <i>Amenidades:</i> Plaza Comercial Dentro del conjunto, encontrarás
            una plaza comercial que brinda conveniencia al tener tiendas y
            servicios al alcance de tu hogar.
            <br /> <br />
            <i>Zona Infantil:</i> Los niños podrán disfrutar de un parque
            diseñado especialmente para ellos, un lugar ideal para jugar y hacer
            amigos en un entorno seguro. Cancha de Básquet: Una cancha de
            básquet está disponible para todos los residentes, ofreciendo un
            espacio para el deporte y la recreación en familia.
          </p>
        </div>
        <div className="informacionImg">
          <Carrusel imagenes={imagesCarrusel} />
          <img
            src={imgIformacion}
            alt="informacion"
            className="imgIformacion"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Informacion;
