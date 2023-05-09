import React from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul className="navBar">
        <li>
          <Link to="/" />
          Inicio
        </li>
        <li>
          <Link to="/login" />
          Ingresar
        </li>
        <li>
          <Link to="/signup" />
          Registrarse
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
