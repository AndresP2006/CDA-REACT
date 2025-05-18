import "./footer.scss";
const icons = [
  {
    id: 1,
    url: require("../../assets/icons/Gmail.png"),
    cont: "VillaricaMalambo@gmail.com",
  },
  {
    id: 2,
    url: require("../../assets/icons/instagram.png"),
    cont: "+57 3202116434 ",
  },
  {
    id: 3,
    url: require("../../assets/icons/whatsapp.png"),
    cont: "@villaricaMalambo",
  },
];
function Footer() {
  const Comunicate = icons.map((e) => {
    return (
      <li key={e.id}>
        <img src={e.url} alt={e.cont} style={{ width: 50 }} />
        {e.cont}
      </li>
    );
  });

  return (
    <div className="footer">
      <h1>Comunicate con Nosotros</h1>
      <div></div>
      <ul className="contactos">{Comunicate}</ul>
      <div></div>
      <br />
      <p>@ 2024 villarica Malambo. Todos los derechos reservado</p>
      <ul className="Politica">
        <li>Politica y Privacidad</li>
        <li>Terminos y Condiciones</li>
      </ul>
    </div>
  );
}

export default Footer;
