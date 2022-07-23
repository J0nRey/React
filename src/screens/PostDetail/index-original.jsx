import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import Header from "../../components/Headers";
import AppLoading from "../../components/AppLoading";

export default function PostDetail() {
  const [data, setData] = useState({});
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://react-11g-87359-default-rtdb.firebaseio.com/posts/${id}.json`
    )
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <React.Fragment>
      <Header />
      <button className="btn btn-primary" onClick={() => history("/")}>
        Home
      </button>
      <div className="container">
        <div className="row">
          <div className="col m-5">
            <h1>{data.title && data.title}</h1>
            <p></p>
            <img
              alt={data.title && data.title}
              src={data.image && data.image}
              style={{
                width: "300px",
              }}
            />
            <p></p>
            <p>{data.description && data.description}</p>
            <p>Author: {data.author && data.author}</p>
          </div>
        </div>
      </div>

      <AppLoading />
    </React.Fragment>
  );
}
