import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import {
  RutasIndex,
  RutasAdmin,
  RutasPorter,
  RutasResident,
} from "./routers/Rutas";
// import NavbarHome from "./layouts/header/header.home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RutasIndex></RutasIndex>
        <RutasAdmin></RutasAdmin>
        <RutasPorter></RutasPorter>
        <RutasResident></RutasResident>
      </BrowserRouter>
    </div>
  );
}

export default App;
