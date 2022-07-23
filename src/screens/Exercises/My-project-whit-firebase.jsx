import React, { useEffect, useState } from "react";

export default function Exercise() {
  //Estados
  const [post, setPost] = useState([]);

  // Actualizaciones

  useEffect(() => {
    fetch("https://react-11g-87359-default-rtdb.firebaseio.com/posts.json")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }, []);

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

  return (
    <div className="container">
      <div className="row">
        <div className="col justify-content-center d-flex flex-wrap">
          {post.map(buildCard)}
        </div>
      </div>
    </div>
  );
}
