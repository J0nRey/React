import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import Header from "../../components/Headers";
import AppLoading from "../../components/AppLoading";

//services
import { postPost } from "../../services";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

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
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  placeholder="Description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  placeholder="Jonathan ..."
                  value={author}
                  onChange={(event) => setAuthor(event.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  placeholder="http://.../.jpg|.pnj|.jpeg"
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                />
              </div>

              <button className="btn btn-primary mt-4" type="submit">
                Crear Posts
              </button>
            </form>
          </div>
        </div>
      </div>
      <AppLoading />
    </React.Fragment>
  );
}
