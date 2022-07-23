import React, { useState } from "react";

import AppLoading from "../../components/AppLoading";
import Header from "../../components/Headers";
import MenuList from "../../components/LeftAside";
import Posts from "../../components/Posts";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

//Services
import { getPosts } from "../../services";

export default function Home() {
  const [data, setData] = useState({});

  const history = useNavigate();

  useEffect(() => {
    const request = async () => {
      const json = await getPosts();
      setData(json);
    };
    request();
  }, []);

  console.log(data);

  return (
    <React.Fragment>
      <Header />

      <div className="container container-fluid mt-2">
        <div className="row">
          <div className="d-none d-md-block col-2">
            <MenuList />
          </div>

          <div className="col-8">
            <main>
              <h1>Posts</h1>

              <Posts
                data={!Object.entries(data).length ? [] : Object.entries(data)}
              />
            </main>
          </div>

          <div className="d-none d-md-block col-2">
            <div className="col-12">
              <button
                onClick={() => history("/createPost")}
                className="btn btn-primary"
              >
                Add Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <AppLoading />
    </React.Fragment>
  );
}
