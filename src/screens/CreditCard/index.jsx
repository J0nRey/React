import React, { useState } from "react";
import Style from "./style.css";

export default function CreditCard() {
  const [name, setName] = useState("");
  const [target, setTarget] = useState("");
  const [vig, setVig] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <>
      <h1>Exercise Credit-Card</h1>

      <div className="container h-0">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="d-flex col-10 col-md-6 bg-dark rounded h-50 align-items-center px-0">
            <div className="col p-5">
              <form>
                <div className="form-group col-12">
                  <label className="text-white" htmlFor="ExampleImputPassword1">
                    Nombre del Cuentahabiente
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleImputPassword1"
                    placeholder="Nombre, Apellido, Apellido"
                    value={name}
                    onChange={({ target: { value } }) => setName(value)}
                  />
                </div>
                <div className="form-group col-12">
                  <label className="text-white" htmlFor="ExampleImputPassword1">
                    Numero de Targeta
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleImputPassword1"
                    placeholder=" **** **** **** ****"
                    value={target}
                    onChange={({ target: { value } }) => setTarget(value)}
                  />
                </div>
                <div className="form-group col-12">
                  <label className="text-white" htmlFor="ExampleImputPassword1">
                    Vigencia
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleImputPassword1"
                    placeholder=" ** / ** "
                    value={vig}
                    onChange={({ target: { value } }) => setVig(value)}
                  />
                </div>
                <div className="form-group col-12">
                  <label className="text-white" htmlFor="ExampleImputPassword1">
                    CVC
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleImputPassword1"
                    placeholder=" CVC "
                    value={cvc}
                    onChange={({ target: { value } }) => setCvc(value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <h1>Card</h1>

      <div className="container h-0">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="d-flex col-10 col-md-6 bg-primary rounded h-50 align-items-center px-0">
            <div className="col p-5">
              <div className="form-group col-12 d-flex justify-content-between">
                <h3>Banco</h3>
                <h3>VISA</h3>
              </div>
              <form>
                <div className="form-group col-12">
                  <h4 className="text-white">
                    {" " +
                      target.substring(0, 4) +
                      " " +
                      target.substring(4, 8) +
                      " " +
                      target.substring(8, 12) +
                      " " +
                      target.substring(12, 16)}
                  </h4>
                </div>
                <div className="form-group col-12">
                  <h4 className="text-white">{name}</h4>
                </div>
                <div className="form-group col-12 d-flex justify-content-between">
                  <h4 className="text-white">
                    {vig.substring(0, 2) + "/" + vig.substring(2, 4)}
                  </h4>
                  <h4 className="text-white">{cvc.substring(0, 3)}</h4>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
