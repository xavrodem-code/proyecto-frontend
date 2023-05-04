import React from "react";
import { useState } from "react";
import axios from "axios";
const RegistrarFechas = () => {
  const [fecha, setFecha] = useState("");
  const user_Id = JSON.parse(localStorage.getItem("datosUsuario")).userId;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user_Id);
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/fechas", { fecha, user_Id })
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
