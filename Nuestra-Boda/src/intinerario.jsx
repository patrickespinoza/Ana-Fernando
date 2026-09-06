import React from "react";
import Celebracion from "./componentes-encabezado/ubicacion";
import Intinerario2 from "./componentes-encabezado/itinerario2";
import Novios from "./componentes-encabezado/novios";
import ConfirmacionAsistencia from "./componentes-encabezado/confirmacion";
import CuentaRegresiva from "./componentes-encabezado/encabeza-cuenta";
import Album from "./componentes-encabezado/Album";
import FraseSeparacion from "./componentes-encabezado/Frasefinal";

export default function Itinerario() {

  return (
    <div>

{/* SECCIÓN VESTIMENTA */}
      <CuentaRegresiva/>
      <Novios />
      

        <Celebracion/>

        <Album/>

        

      

    

      {/* SECCIÓN ITINERARIO */}
      <Intinerario2/>


  

       
<FraseSeparacion/>

   
      <ConfirmacionAsistencia/>
    </div>
  );
}