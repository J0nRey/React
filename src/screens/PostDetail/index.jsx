import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import Header from "../../components/Headers";
import AppLoading from "../../components/AppLoading";

//services
import { getPostDetail } from "../../services";

export default function PostDetail() {
  const [data, setData] = useState({});
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const request = async () => {
      const json = await getPostDetail(id);
      setData(json);
    };
    request();
  }, []);

  return (
    <React.Fragment>
      <Header />
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
          <div className="col m-5">
            <button className="btn btn-primary" onClick={() => history("/")}>
              Home
            </button>
            <button
              className="btn btn-success"
              onClick={() => history(`/posts/${id}/update`)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <AppLoading />
    </React.Fragment>
  );
}
