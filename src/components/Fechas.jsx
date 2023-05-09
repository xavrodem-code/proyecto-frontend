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
            "Bearer " + JSON.parse(localStorage.getItem("datosUsuario")).token,
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
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {fechas.map((fecha) => (
              <tr key={fecha.id}>
                <td>{fecha.id}</td>
                <td>{fecha.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>De momento todas las fechas están disponibles</h2>
      )}
    </div>
  );
};
export default Fechas;
