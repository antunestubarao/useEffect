import "./App.css";
import "./styles/global.css";
import { useContext } from "react";
import { UserContext } from "./components/contexts/UserContext";
import Header from "./components/header/Index";




function App() {

  const {IsLogged, handleLogin, handleLogout, } = useContext(UserContext);
  
  

  return (
    <>
    <h1>M1S09 EX 3</h1>
      <Header /> 
      {!IsLogged ? (
      <button onClick={() => handleLogin()}>Montar Componente</button>
      ) : (
        <button onClick={() => handleLogout()}>Desmontar Componente</button>
      )}
    </>
  );
}

export default App;


