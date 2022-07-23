import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();
  console.log("history", history);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(email, password);

    setTimeout(() => {
      history("/");
    }, 1000);
  };

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="d-flex col-10 col-md-6 bg-dark rounded h-50 align-items-center px-0">
          <div className="col p-5">
            <h2 className="text-white">Log in</h2>
            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="ExampleImputEmail1">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleImputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email"
                  value={email}
                  onChange={({ target: { value } }) => setEmail(value)}
                />
              </div>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="ExampleImputPassword1">
                  password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleImputPassword1"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <button className="btn btn-primary mt-2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
