import React from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul className="navBar">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/login">Ingresar</Link>
        </li>
        <li>
          <Link to="/signup">Registrarse</Link>
        </li>
        <li>
          <Link to="/fechas">Reservar Fechas</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
