import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navegar = useNavigate();
  useEffect(() => {
    localStorage.removeItem("datosUsuario");
    navegar("/login");
    console.log("Logged out");
  }, [navegar]);
  return <h1>Logged out...</h1>;
};

export default Logout;
