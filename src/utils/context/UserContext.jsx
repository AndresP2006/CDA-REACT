import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [Usuario, setUsuario] = useState(null);

  return (
    <UserContext.Provider value={{ Usuario, setUsuario }}>
      {children}
    </UserContext.Provider>
  );
}
