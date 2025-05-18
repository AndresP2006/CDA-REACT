import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Informacion from "../pages/Informacion";
import Admin from "../pages/views/admin/AdminView";
import Porter from "../pages/views/porter/PorterView";
import User from "../pages/views/user/UserViews";

export function RutasIndex() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Nosotros" element={<Nosotros />} />
      <Route path="/Informacion" element={<Informacion />}></Route>
    </Routes>
  );
}

export function RutasResident() {
  return (
    <Routes>
      <Route path="/user/resident" element={<User></User>}></Route>
    </Routes>
  );
}

export function RutasPorter() {
  return (
    <Routes>
      <Route path="/porter/visitas" element={<Porter></Porter>}></Route>
    </Routes>
  );
}
export function RutasAdmin() {
  return (
    <Routes>
      <Route path="/admin/usuarios" element={<Admin></Admin>}></Route>
      <Route path="/admin/visitas" element={"#"}></Route>
      <Route path="/admin/paquetes" element={"#"}></Route>
      <Route path="/admin/edicios" element={"#"}></Route>
      <Route path="/admin/notificaciones" element={"#"}></Route>
      <Route path="/admin/respuesta" element={"#"}></Route>
    </Routes>
  );
}
