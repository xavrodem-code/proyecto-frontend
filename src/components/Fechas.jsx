import React, { useEffect, useState } from "react";
import axios from "axios";

const Fechas = () => {
  const [fechas, setFechas] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/fechas", {
        headers: {
          Authorization:
            "Bearer" + JSON.parse(localStorage.getItem("datosUsuario")).token,
        },
      })
      .then((response) => {
        setFechas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
