import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Login from "./screens/Login/index_con_hooks-modularizado";
import Challenge from "./screens/Challenge";
import Exercises from "./screens/Exercises/index.jsx";
import CreditCard from "./screens/CreditCard/index.jsx";

import RickAndMorty from "./screens/Exercises/cardRickandMorty-firebase";

import AddPost from "./screens/AddPost";
import PostDetail from "./screens/PostDetail";
import UpdatePost from "./screens/UpdatePost";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app h-100">
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/posts/:id" element={<PostDetail />} />

            <Route exact path="/posts/:id/update" element={<UpdatePost />} />

            <Route exact path="/createPost" element={<AddPost />} />

            <Route exact path="/login" element={<Login />} />
            <Route exact path="/challenge" element={<Challenge />} />
            <Route exact path="/exercises" element={<Exercises />} />
            <Route exact path="/credit" element={<CreditCard />} />
            <Route exact path="/rickandmorty" element={<RickAndMorty />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
