import React from "react";
import "../estilos/logo.css";
import freecodecamplogo from "../imagenes/freecodecamplogo.png";

function Logo() {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        className="freecodecamp-logo"
        src={freecodecamplogo}
        alt="Logo de freeCodeCamp"
      ></img>
    </div>
  );
}

export default Logo;
