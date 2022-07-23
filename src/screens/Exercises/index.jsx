import React from "react";

import Divisas from "../../components/Ejercicios/Divisa";
import BusDeDatos from "../../components/Ejercicios/DataBus-object-builders-2";
import Counter from "../../components/Counter";
import RickAndMorty from "./cardRickandMorty";

export default function Challenge() {
  return (
    <>
      <div>
        <h1>Ejercicio 1. Contador</h1>
        <Counter />
      </div>
      <div>
        <h1>Ejercicio 2. Divisas</h1>
        <Divisas />
      </div>
      <div>
        <h1>Ejercicio 3. Bus De Datos</h1>
        <BusDeDatos />
      </div>
      <div>
        <h1>Ejercicio 4. Rick and Morty Cards</h1>
        <RickAndMorty />
      </div>
    </>
  );
}
