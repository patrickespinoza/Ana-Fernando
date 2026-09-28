import React from "react";
import Celebracion from "./componentes-encabezado/ubicacion";
import Intinerario2 from "./componentes-encabezado/itinerario2";
import Novios from "./componentes-encabezado/novios";
import ConfirmacionAsistencia from "./componentes-encabezado/confirmacion";
import CuentaRegresiva from "./componentes-encabezado/encabeza-cuenta";
import Album from "./componentes-encabezado/Album";
import FraseSeparacion from "./componentes-encabezado/Frasefinal";
import Regalos from "./componentes-encabezado/mesadeRegalos";

export default function Itinerario() {

  return (
    <div>

      <CuentaRegresiva/>

      <Novios />
      
      <Celebracion/>

       <Album/>

      <Intinerario2/>

      <Regalos/>

      <FraseSeparacion/>

      <ConfirmacionAsistencia/>
    </div>
  );
}