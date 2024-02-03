import { useContext } from "react";
import "./style.css";
import { UserContext } from "../contexts/UserContext";

export function Header() {
  const {name} = useContext(UserContext);
  return (
    <div className="box">
     <h2>{name}</h2>
    </div>
  );
}

export default Header;
