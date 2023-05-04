import React from "react";
import { useForm } from "react-hook-form";
import "../components/SignupForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegar = useNavigate();
  const gestorFormulario = async (data) => {
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + "/usuarios/signup", {
        email: data.email,
        username: data.username,
        password: data.password,
      })
      .then((response) => {
        console.log("Todo correcto", response.data);
        localStorage.setItem(
          "datosUsuario",
          JSON.stringify({
            userId: response.data.userid,
            token: response.data.token,
          })
        );
        navegar("/login");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div className="form">
      <div className="title">Crea tu cuenta</div>
      <div className="inputs">
        <input
          type="text"
          name="email"
          placeholder="email@email.com"
          {...register(
            "email",
            {
              pattern:
                /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/,
            },
            { required: true, message: "Requerido" }
          )}
        />
        {errors.email && errors.email.type === "required" && (
          <span>Campo requerido</span>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <span>Formato Incorrecto</span>
        )}
        <br />
        <form onSubmit={handleSubmit(gestorFormulario)}>
          <input
            type="text"
            name="username"
            placeholder="Introduzca nombre de usuario"
            {...register(
              "username",
              { minLength: 5 },
              { required: true, message: "Requerido" }
            )}
          />
          {errors.username && errors.username.type === "required" && (
            <span>Campo requerido</span>
          )}
          {errors.username && errors.username.type === "minLength" && (
            <span>Debe tener al menos 5 letras</span>
          )}
          <br />
          <input
            type="password"
            name="password"
            placeholder="Introduzca nueva contraseña"
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
            <span>Mínimo 6 caracteres</span>
          )}
          <br />
          <button type="submit" onClick={handleSubmit(gestorFormulario)}>
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
