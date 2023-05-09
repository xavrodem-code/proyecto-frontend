import React from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul className="navBar">
        <li>
          <Link to="/login" style={{ color: "black", textDecoration: "none" }}>
            Ingresar
          </Link>
        </li>
        <li>
          <Link to="/signup" style={{ color: "black", textDecoration: "none" }}>
            Registrarse
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
