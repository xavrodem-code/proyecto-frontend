import React from "react";
import { useState } from "react";
import axios from "axios";
const RegistrarFechas = () => {
  const [fecha, setFecha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const localStorageData = localStorage.getItem("datosUsuario");
    const userId = localStorageData
      ? JSON.parse(localStorageData).userId
      : null;
    const token = localStorageData ? JSON.parse(localStorageData).token : null;
    console.log(userId);
    axios
      .post(
        "https://proyecto-0ytx.onrender.com/api/fechas/registrar",
        {
          fecha: fecha,
          userId: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Fecha:
          <input
            type="text"
            value={fecha}
            onChange={(event) => setFecha(event.target.value)}
          />
        </label>
        <button type="submit">Confirmar reserva</button>
      </form>
    </div>
  );
};

export default RegistrarFechas;
