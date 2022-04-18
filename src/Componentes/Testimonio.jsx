import React from "react";
import "../Style-Sheets/Testimonio.css";

function Testimonio(props){
return(
    <div className="contenedor-testimonio">
        <img
        className="imagen-testimonio"
        src={require(`../imagenes/test-${props.imagen}.png`)}
        alt="Foto de Emma"/>

    <div className="contenedor-texto">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> in <strong>{props.pais}</strong></p>
        <p className="cargo-testimonio">{props.cargo} at <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio"p>"{props.testimonio}"</p>

    </div>

    </div>
)

}

export default Testimonio;