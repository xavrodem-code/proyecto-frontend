import React from "react";
import Fechas from "../components/Fechas";
import { useNavigate } from "react-router-dom";
import RegistrarFechas from "../components/RegistrarFechas";
import "./ReservarFechas.css";

const ReservarFechas = () => {
  const usuario = JSON.parse(localStorage.getItem("datosUsuario"));
  const navegar = useNavigate();
  React.useEffect(() => {
    if (!usuario || !usuario.token || !usuario.userId) {
      navegar("/login");
    }
  }, [usuario, navegar]);
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
