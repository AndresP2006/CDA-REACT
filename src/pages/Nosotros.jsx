import NavbarHome from "../layouts/header/header.home";
import Footer from "../layouts/footer/footer.home";
import mision from "../assets/images/vision-img.jpg";
import misionV from "../assets/images/mision.jpg";
import "../styles/Nosotros.scss";

function Nosotros() {
  return (
    <div>
      <NavbarHome />
      <div className="nosotros">
        <div className="mision">
          <div className="texto">
            <h2>
              ¿Nuestra <i>Mision</i>?
            </h2>
            <p>
              Fomentar el desarrollo de proyectos de viviendas e infraestructura
              con calidad y diseños innovadores, transformando el entorno para
              contribuir al progreso y generar beneficios para la comunidad.
              Estos proyectos también buscan integrar tecnologías sostenibles y
              soluciones accesibles, mejorando la calidad de vida de los
              residentes y promoviendo un desarrollo inclusivo y equilibrado.
            </p>
          </div>
          <img src={misionV} alt="" />
        </div>
        <div className="vision">
          <div className="textoV">
            <h2>
              Nuestra <i>Vision</i>
            </h2>
            <p>
              Para 2025, ser líderes en construcción y comercialización de
              sistemas habitacionales innovadores y de calidad, destacando en
              obras civiles e infraestructuras, con un equipo ético y
              comprometido, garantizando solidez y reconocimiento empresarial..
            </p>
          </div>
          <img src={mision} alt="" />
        </div>
        <hr />
        <div className="valoresconvenios">
          <table>
            <thead>
              <tr>
                <th>Valores</th>
                <th>Convenios</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Preservacion</td>
                <td>Bancolombia</td>
              </tr>
              <tr>
                <td>Responsabilidad</td>
                <td>Camacol</td>
              </tr>
              <tr>
                <td>Dedicacion</td>
                <td>Mi casa Ya</td>
              </tr>
              <tr>
                <td>Innovacion</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Nosotros;
