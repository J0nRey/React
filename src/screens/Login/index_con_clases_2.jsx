import React, { setState } from "react";

//1. definimos componente como clase
class login extends React.Component {
  constructor(props) {
    super(props);

    //2. definimos estado en el constructor
    this.state = {
      email: "",
      password: "",
    };

    //3. El metodo que va a controlar el estado de todos los inputs, le hacemos ver el contexto de la clase
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    //5. Al click se activa el callback quien genera un evento
    console.log(event.target.name, event.target.value);

    console.log(this.props);

    //6.
    this.setState({
      //7. Hacemos dinamica la propiedad y la clase va a sert el valor
      [event.target.name]: event.target.value,
      //email: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Eh sido submiteado !!!");
    setTimeout(() => {
      this.props.history.push("/");
    }, 1000);
  }

  render() {
    //4. vinculamos el estado con los input
    const { email, password } = this.state;

    return (
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="d-flex col-10 col-md-6 bg-dark rounded h-50 align-items-center px-0">
            <div className="col p-5">
              <h2 className="text-white">Log in</h2>
              <form className="mt-5" onSubmit={this.handleSubmit}>
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
                    value={email} //4.
                    onChange={this.handleInput} //5. Al click se activa el callback quien genera un evento
                    name="email" //6. A cada input le pusimos nombre exactanmente igual al estado que vamos a actualizar
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
                    value={password} //4.
                    onChange={this.handleInput} //5. Al click se activa el callback quien genera un evento
                    name="password" //6. A cada input le pusimos nombre exactanmente igual al estado que vamos a actualizar
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
}

export default login;
