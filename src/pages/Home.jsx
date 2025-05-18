import Carrusel from "../components/carrusel/Carrusel";
import Login from "../components/login/Login";
import NavbarHome from "../layouts/header/header.home";
import "../styles/home.scss";
import mapa from "../assets/images/mapa.png";
import Footer from "../layouts/footer/footer.home";
const imagesCarrusel = [
  { id: 1, src: require("../assets/images/rivera1.jpg") },
  { id: 2, src: require("../assets/images/rivera2.jpg") },
  { id: 3, src: require("../assets/images/rivera3.jpg") },
];

function Home() {
  return (
    <div>
      <NavbarHome></NavbarHome>
      <div className="informacion">
        <div className="incluyendo">
          <h2>
            La Ribera Villa Rica <i>Malambo</i>
          </h2>
          <hr />
          <p>
            LA RIBERA VILLA RICA es un moderno proyecto de viviendas de interés
            social que contempla la construcción de 268 unidades habitacionales
            en el municipio de Malambo, Atlántico, específicamente en el Barrio
            Villa Rica. Su ubicación estratégica, cercana al Parque de la
            Cultura y la Casa de la Cultura, lo convierte en una excelente
            opción para quienes desean vivir en un entorno accesible, tranquilo
            y con una rica oferta cultural. <br /> El conjunto residencial
            estará completamente cerrado con perímetro de seguridad, brindando
            mayor tranquilidad y bienestar a todos sus residentes. Las viviendas
            están diseñadas para adaptarse a las necesidades de las familias
            colombianas, con opciones de apartamentos de 40, 44 y 46 m²,
            distribuidos en 2 y 3 alcobas, con espacios funcionales, ventilación
            natural y acabados básicos de excelente calidad. <br /> Además de
            sus viviendas, LA RIBERA VILLA RICA ofrecerá espacios comunes
            ideales para el esparcimiento y la convivencia, incluyendo una plaza
            comercial, un parque infantil y una cancha de básquet, donde grandes
            y chicos podrán compartir momentos de recreación y deporte sin salir
            del conjunto. Es un lugar pensado para crecer en familia, con
            calidad de vida, seguridad y acceso a todo lo necesario.
          </p>
        </div>
        <Carrusel imagenes={imagesCarrusel}></Carrusel>
      </div>
      <Login mapa={mapa}></Login>
      <Footer></Footer>
    </div>
  );
}

export default Home;
