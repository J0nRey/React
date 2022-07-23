import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Header from "../../components/Headers";
import AppLoading from "../../components/AppLoading";

import CustomForm from "../../components/CustomForm";

//Servises
import { postForm } from "../../servicesForm";

export default function Login() {
  //estados
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //history
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newRegistrer = {
        email,
        password,
      };
      await postForm(newRegistrer);
      history("/");
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="d-flex col-10 col-md-6 bg-dark rounded h-50 align-items-center px-0">
            <div className="col p-5">
              <h2 className="text-white">Log in</h2>
              <form className="mt-5" onSubmit={handleSubmit}>
                <div className="form-group col-12">
                  <CustomForm
                    id="Email"
                    placeholder="Email"
                    value={email}
                    callback={setEmail}
                  />
                </div>
                <div className="form-group col-12">
                  <CustomForm
                    id="Password"
                    placeholder="Password"
                    value={password}
                    callback={setPassword}
                  />
                </div>
                <button className="btn btn-primary mt-2">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <AppLoading />
    </React.Fragment>
  );
}
