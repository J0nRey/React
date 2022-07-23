import React, { useEffect, useState } from "react";

export default function Exercise() {
  //Estados
  const [characters, setCharacters] = useState([]);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);

  // Actualizaciones

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character") // comunicacion al servidor
      .then((response) => response.json()) // Promesa del servidor,  En cuanto el servidor responda vamos a obtener la respuesta
      .then((json) => {
        setCharacters(json.results);
        setPrev(json.info.prev); // estado que contiene la URL anterion
        setNext(json.info.next); // estado que contiene la URL siguiente
      }); //  Promesa del procesamiento de la data, Vamos a procesarla para que la data sea valida para JS

    // fetch("https://react-11g-87359-default-rtdb.firebaseio.com/.json")
    // .then((response) => response.json())
    // .catch((error) => console.log(error))
    // .then((json) => console.log(json))

    fetch(
      "https://react-11g-87359-default-rtdb.firebaseio.com/posts.json", // esta llave -N5ImpItad5o7KfjITb9 ya noi existe por que se elimino con delete
      {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify({
          author: "Jonathan Reyes",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, fuga.",
          image: "https://picsum.photos/seed/picsum/286/286",
          title: "Post de prueba",
        }),
      }
    )
      .then((response) => response.json()) // Se ejecuta si la promesa del fetch se cumple con exito
      .catch((error) => console.log(error)) // Se ejecuta si la promesa del fetch se cumple con fallo
      .then((json) => console.log(json)); // Se ejecuta si la promesa del primer then del fetch se ejecuta con exito
  }, []); // Solo lo llamamos una vez com []

  //Funciones

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

  const getNextPage = () => {
    fetch(next)
      .then((response) => response.json())
      .then((json) => {
        setCharacters(json.results);
        setPrev(json.info.prev);
        setNext(json.info.next);
      });
  };

  const getPrevPage = () => {
    fetch(prev)
      .then((response) => response.json())
      .then((json) => {
        setCharacters(json.results);
        setPrev(json.info.prev);
        setNext(json.info.next);
      });
  };

  //  Hay que cambiar el formato de Style
  return (
    <div className="container">
      <div className="row">
        <div className="col justify-content-center d-flex flex-wrap">
          {characters.map(buildCard)}
        </div>
      </div>
      <div className="row">
        <div className="col justify-content-center d-flex flex-wrap p-5 ">
          <button
            disabled={prev === null ? true : false}
            type="button"
            className="btn btn-dark btn-lg mx-5"
            onClick={getPrevPage}
          >
            Prev
          </button>
          <button
            disabled={next === null ? true : false}
            type="button"
            className="btn btn-dark btn-lg mx-5"
            onClick={getNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
