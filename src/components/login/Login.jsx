import "./login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usuarios } from "../../db/user";

function Login({ mapa }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navegation = useNavigate();

  function handleLogin() {
    const session = usuarios.find((u) => {
      return u.name === user && u.password === password;
    });

    if (session) {
      if (session.rol === "admin") navegation("/admin/usuarios");
      else if (session.rol === "port") navegation("/porter/visitas");
      else if (session.rol === "resident") navegation("/user/resident");
    } else {
      alert("Usuario o Contraseña incorrecta");
    }
  }
  return (
    <div className="contene_login">
      <div className="login">
        <h2>Iniciar Session</h2>
        <div>
          <input
            type="text"
            placeholder="Usuario"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="Ingresar" onClick={handleLogin}>
          Ingresar
        </button>
      </div>
      <div className="img">
        <img src={mapa} className="imagenes" alt="mapa" />
      </div>
    </div>
  );
}

export default Login;
