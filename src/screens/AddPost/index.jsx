import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import Header from "../../components/Headers";
import AppLoading from "../../components/AppLoading";

import CustomInput from "../../components/CustomInput";

//services
import { postPost } from "../../services";

export default function AddPost() {
  //estados
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  //history
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newPost = {
        title,
        description,
        image,
        author,
      };
      await postPost(newPost); // se manda a llamar la funcion desde servises.js
      history("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="form-group col-md-6">
                <CustomInput
                  id="Title"
                  placeholder="Title"
                  value={title}
                  callback={setTitle}
                />
              </div>
              <div className="form-group col-md-6">
                <CustomInput
                  id="Description"
                  placeholder="Description"
                  value={description}
                  callback={setDescription}
                />
              </div>

              <div className="form-group col-md-6">
                <CustomInput
                  id="Author"
                  placeholder="Author"
                  value={author}
                  callback={setAuthor}
                />
              </div>
              <div className="form-group col-md-6">
                <CustomInput
                  id="Image"
                  placeholder="http://.../.jpg|.pnj|.jpeg"
                  value={image}
                  callback={setImage}
                />
              </div>

              <button className="btn btn-primary m-4" type="submit">
                Crear Posts
              </button>
              <button
                onClick={() => history("/")}
                className="btn btn-primary m-4"
              >
                HOME
              </button>
            </form>
          </div>
        </div>
      </div>
      <AppLoading />
    </React.Fragment>
  );
}
