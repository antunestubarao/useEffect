import { createContext, useEffect, useState } from "react";

interface UserContextType {
  IsLogged: boolean;
  name: string;
  handleLogin: () => void;
  handleLogout: () => void;
}


export const UserContext = createContext({} as UserContextType);

export function UseProvider({ children }: { children: React.ReactNode }) {
  const [IsLogged, setIsLogged] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    IsLogged ? setName("Componente Montado") : setName("Componente Desmontado, Clique no Botão para Montar o Componente");
  }, [IsLogged]);

  function handleLogin() {
    setIsLogged(true);
  }

  function handleLogout() {
    setIsLogged(false);
  }

  return (
    <UserContext.Provider value={{ IsLogged, name, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
}
