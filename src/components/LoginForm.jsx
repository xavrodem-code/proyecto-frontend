import React from "react";
import "../components/LoginForm.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formHandler = async (data) => {
    await axios
      .post("https://proyecto-0ytx.onrender.com/api/usuarios/login", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        console.log("Login correcto");
        console.log(response.data);
        localStorage.setItem(
          "datosUsuario",
          JSON.stringify({
            username: response.data.username,
            userId: response.data.idUsuario,
            token: response.data.token,
          })
        );
        console.log(localStorage);
        navigate("/fechas");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="displayContainer">
      <div className="title"></div>
      <div className="inputs">
        <form className="form" onSubmit={handleSubmit(formHandler)}>
          <input
            type="text"
            name="email"
            placeholder="Introduza su email"
            {...register(
              "email",
              {
                pattern:
                  /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/,
              },
              { required: true, message: "Campo requerido" }
            )}
          />
          {errors.email && errors.email.type === "required" && (
            <span>Campo email requerido</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span>Campo email requerido</span>
          )}
          <input
            type="password"
            name="password"
            placeholder="Introduzca la contraseña"
            {...register("password", {
              required: true,
              minLength: 6,
              message: "Requerido",
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <span>Campo requerido</span>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <span>Mínimo de 6 caracteres</span>
          )}
          <button type="submit">ENTRAR</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
