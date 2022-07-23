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

//Dejar todo al backend para que con N peticiones mejor dercarge la lista filtrada
export default function BusDeDatos() {
  const petsUI = petsData
    .filter(({ age }) => Number(age) === 5)
    .map(({ name, age }, index, array) => {
      return (
        <li class="list-group-item">
          Name: {name}, Age: {age}
        </li>
      );
    });

  console.log(petsUI);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-header">Pets</div>
              <ul class="list-group list-group-flush">{petsUI}</ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
