import React from "react";

//Informacion del servidor
const petsData = [
  {
    name: "Sr. Peadbody",
    age: "5",
  },
  {
    name: "Misifu",
    age: "1",
  },
  {
    name: "Solovino",
    age: "10",
  },
  {
    name: "Nefermishi",
    age: "5",
  },
];

export default function BusDeDatos() {
  const buildLIPets = ({ name, age }, index, array) => (
    <li key={index} className="list-group-item">
      Name: {name}, Age: {age}
    </li>
  );

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-header">Pets</div>
              <ul className="list-group list-group-flush">
                {petsData.map(buildLIPets)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
