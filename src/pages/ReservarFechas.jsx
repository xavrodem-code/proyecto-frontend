import React from "react";
import Fechas from "../components/Fechas";
import RegistrarFechas from "../components/RegistrarFechas";
import "../components/ReservarFechas.css";

const ReservarFechas = () => {
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
