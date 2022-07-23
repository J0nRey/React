import React from "react";

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

export default function BusDeDatos() {
  const buildPet = ({ name, age }, index) => (
    <li key={index} className="list-group-item">
      name: {name}, age: {age}
    </li>
  );

  const buildPetsType = ([type, pets], index) => (
    <React.Fragment key={index}>
      <div className="card-header">{type}</div>
      <ul className="list-group list-group-flush">{pets.map(buildPet)}</ul>
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
