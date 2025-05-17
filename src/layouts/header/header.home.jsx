import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

function NavbarHome() {
  return (
    <div>
      <nav className="NavbarHome">
        <h1>
          Control de <i>Acceso</i>
        </h1>
        <div className="pages">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/Informacion">Informacion</Link>
            </li>
            <li>
              <Link to="/Nosotros">Nosotros</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavbarHome;
