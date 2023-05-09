import React from "react";
import Fechas from "../components/Fechas";
import { Navigate } from "react-router";
import RegistrarFechas from "../components/RegistrarFechas";
import "./ReservarFechas.css";

const ReservarFechas = () => {
  const usuario = JSON.parse(localStorage.getItem("datosUsuario"));

  if (!usuario || !usuario.token || !usuario.userId) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="reservar-fechas">
      <div className="fechas-container">
        <Fechas />
      </div>
      <div className="registrar-fechas-container">
        <RegistrarFechas />
      </div>
    </div>
  );
};

export default ReservarFechas;
