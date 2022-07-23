import React, { useState } from "react";

import AppLoading from "../../components/AppLoading";
import Header from "../../components/Headers";
import MenuList from "../../components/LeftAside";
//import Posts from "../../components/Post/AppCard";
import Posts from "../../components/AppCard";
import { useEffect } from "react";

export default function Home() {
  const [data, setData] = useState({}); // La data no existe en este punto({})

  useEffect(() => {
    //solo quiero que se realice una ves la actualizacion
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((json) => setData(json)); // Aqui esiste la data y hay una etapa de actualizacion
  }, []);

  console.log(data);

  return (
    //primero no hay data
    //Pero si ya existe mandala a <Post / >
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

              <Posts data={!data.results ? [] : data.results} />
            </main>
          </div>

          <div className="d-none d-md-block col-2"></div>
        </div>
      </div>
      <AppLoading />
    </React.Fragment>
  );
}
