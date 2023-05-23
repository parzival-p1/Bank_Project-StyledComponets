import React from "react";
import { Icono, IconoTema } from "./Components/UI";
import alimentacion from "./assets/images/alimentacion.svg";
import salud from "./assets/images/salud.svg";
import otros from "./assets/images/otros.svg";
import transporte from "./assets/images/transporte.svg";
import utilidades from "./assets/images/utilidades.svg";


export default (type) => {

    //* Arreglo paraa sustituir SWITCH
    const Images = {
        Restaurante: <IconoTema src={alimentacion} alt="Restaurante" />,
        Salud: <IconoTema src={salud} alt="Salud" />,
        Otros: <IconoTema src={otros} alt="Otros" />,
        Transporte: <IconoTema src={transporte} alt="Transporte" />,
        Utilidades: <IconoTema src={utilidades} alt="Utilidades" />,
        default: <IconoTema src={otros} alt="otros"/>
    }
    return Images[type] || Images["default"];
};