import React from "react";
import AppCard from "./AppCard";
import { useNavigate } from "react-router-dom";

export default function Post(props) {
  const history = useNavigate();

  const buildLI = ([key, { title, description, image, author }], index) => {
    return (
      <li key={key}>
        <AppCard>
          <img
            style={{ width: "400px", height: "200px " }}
            src={image}
            alt=""
          />
          <h4 className="card-title">{title}</h4>
          <button
            onClick={() => history(`/posts/${key}`)}
            className="btn btn-primary"
          >
            Detail
          </button>
        </AppCard>
      </li>
    );
  };

  return (
    <>
      <div>
        <div className="card">
          <div className="card-body"></div>
          <div>
            <ul className="d-flex flex-column">
              {props.data.reverse().map(buildLI)}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

/*
El Backend debe traer ordenada la data, por lo que lo anterios debe quedar sin el .reverse()

              <ul className="d-flex flex-column">
                {this.props.data.map(this.buildLI)}
              </ul>
*/
