import React, { useEffect, useState } from "react";
import axios from "axios";

const Fechas = () => {
  const [fechas, setFechas] = useState([]);
  const usuarioId = JSON.parse(localStorage.getItem("datosUsuario")).userId;
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/fechas", {
        headers: {
          Authorization:
            "Bearer" + JSON.parse(localStorage.getItem("datosUsuario")).token,
        },
      })
      .then((response) => {
        const fechasUsuario = response.data.fechas.filter(
          (fecha) => fecha.usuario._id === usuarioId
        );
        setFechas(fechasUsuario);
        console.log(fechasUsuario);
        localStorage.setItem("fechas", JSON.stringify(response.data.fechas));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [usuarioId]);

  return (
    <div className="fechas">
      {fechas.length > 0 ? (
        <ul>
          {fechas.map((fecha) => (
            <div key={fecha.id}>{fecha.fecha}</div>
          ))}
        </ul>
      ) : (
        <h2>De momento todas las fechas están disponibles</h2>
      )}
    </div>
  );
};
export default Fechas;
