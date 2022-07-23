import React from "react";

import Pet from "../Pet";

//Informacion del servidor
const petsData = {
  dogs: [
    {
      name: "Sr. Peadbody",
      age: "5",
    },
    {
      name: "Solovino",
      age: "10",
    },
  ],
  cats: [
    {
      name: "Misifu",
      age: "1",
    },
    {
      name: "Nefermishi",
      age: "5",
    },
  ],
  parrots: [
    {
      name: "Garzilazo",
      age: "1",
    },
    {
      name: "Pancho",
      age: "5",
    },
  ],
};

//El componente <Pet /> esta en la ruta src/components/pets.jsx

export default function BusDeDatos() {
  const buildPetsType = ([type, pets], index) => (
    <React.Fragment key={index}>
      <div className="card-header">{type}</div>
      <ul className="list-group list-group-flush">
        {pets.map((pet, index) => (
          <Pet pet={pet} key={index} index={index} />
        ))}
      </ul>
    </React.Fragment>
  );

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              {Object.entries(petsData).map(buildPetsType)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
