import React, { useState } from "react";

import AppLoading from "../../components/AppLoading";
import Header from "../../components/Headers";
import MenuList from "../../components/LeftAside";
import Posts from "../../components/Post";
import { useEffect } from "react";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://react-11g-87359-default-rtdb.firebaseio.com/posts.json")
      .then((response) => response.json())
      .then((json) => setData(json));
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

          <div className="d-none d-md-block col-2"></div>
        </div>
      </div>
      <AppLoading />
    </React.Fragment>
  );
}
