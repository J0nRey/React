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
  const petUI = Object.entries(petsData).map(([type, pets], index) => (
    <React.Fragment key={index}>
      <div className="card-header">{type}</div>
      <ul className="list-group list-group-flush">
        {pets.map(({ name, age }, index) => (
          <li key={index} className="list-group-item">
            name: {name}, age: {age}
          </li>
        ))}
      </ul>
    </React.Fragment>
  ));

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              {petUI}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
