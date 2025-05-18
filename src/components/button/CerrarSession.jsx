import { useNavigate } from "react-router-dom";

export function CerrarSession() {
  const Navegate = useNavigate();
  function handleCerrarSession() {
    Navegate("/");
  }
  return <button onClick={handleCerrarSession}>Cerrar Session</button>;
}
