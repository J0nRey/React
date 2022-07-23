import React from "react";
import AppCard from "../components/AppCard";

//  Aqui recibo la data de Home y ocupo los datos traidos en props

class CardPost extends React.Component {
  //Ocupamos el constructor para usar los datos de la data del servidor
  constructor(props) {
    super(props);
  }

  //  Aqui usamos los datos y los distribuimos en la funcion
  buildLI([key, { title, description, image, author }], index) {
    return (
      <li key={key}>
        <AppCard>
          <img className="card-img-top" src={image} alt="" />
          <h4 className="card-title">{title}</h4>
          <p className="card-text">Description: {description}</p>
          <p className="card-text">Author: {author}</p>
          <a href="#" className="btn btn-primary">
            go somewhere
          </a>
        </AppCard>
      </li>
    );
  }

  //  Como ya tengo los datos traidos del Home y recibidos en el Prop...
  //  los mapeamos y los enviamos a la fincion con la siguiente sintaxis
  //  {this.props.data.map(this.buildLI)}

  render() {
    return (
      <>
        <div>
          <div className="card">
            <div className="card-body"></div>
            <div>
              <ul className="d-flex flex-column">
                {this.props.data.reverse().map(this.buildLI)}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CardPost;

/*
El Backend debe traer ordenada la data, por lo que lo anterios debe quedar sin el .reverse()

              <ul className="d-flex flex-column">
                {this.props.data.map(this.buildLI)}
              </ul>
*/
