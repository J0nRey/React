import React, { useEffect, useState } from "react";

export default function Exercise() {
  //Estado
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    //Solo lo llamamos una vez
    fetch("https://rickandmortyapi.com/api/character") // comunicacion al servidor
      .then((response) => response.json()) // Promesa del servidor,  En cuanto el servidor responda vamos a obtener la respuesta
      .then((json) => setCharacters(json.results)); //  Promesa del procesamiento de la data, Vamos a procesarla para que la data sea valida para JS
  }, []);

  const buildCard = ({ id, name, image, species, gender }) => (
    <div key={id} className="col  justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{gender}</p>
          <p className="card-text">{species}</p>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );

  //  Hay que cambuar el formato de Style
  return (
    <div className="container">
      <div className="row">
        <div className="col justify-content-center d-flex flex-wrap">
          {characters.results && characters.results.map(buildCard)}
        </div>
      </div>
    </div>
  );
}
