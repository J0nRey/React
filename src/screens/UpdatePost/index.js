import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import Header from "../../components/Headers";
import AppLoading from "../../components/AppLoading";

import CustomInput from "../../components/CustomInput";

//services
import { getPostDetail, patchPost } from "../../services";

export default function UpdatePost() {
  //estados
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  
  const {id}= useParams()
  
  //history
  const history = useNavigate();


  useEffect(() => {
    const request = async () => {
        const json = await getPostDetail(id)
        console.log(json)
        setTitle(json.title)
        setDescription(json.description)
        setAuthor(json.author)
        setImage(json.image)
    }
    request()
  }, [])



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatePost = {
        title,
        description,
        image,
        author,
      };
      await patchPost(id, updatePost); // se manda a llamar la funcion desde servises.js
      history(`/posts/${id}`);
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

              <button className="btn btn-success mt-4" type="submit">
                Update Posts
              </button>
            </form>
          </div>
        </div>
      </div>
      <AppLoading />
    </React.Fragment>
  );
}
