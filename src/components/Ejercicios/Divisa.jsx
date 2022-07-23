import React, { useState } from "react";

export default function Divisas() {
  const [USD, setUSD] = useState(1);
  const [MXN, setMXN] = useState(19.84);

  return (
    <>
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="d-flex col-10 col-md-6 bg-dark rounded h-50 align-items-center px-0">
            <div className="col p-5">
              <h2 className="text-white">foreign exchange</h2>
              <form>
                <div className="form-group col-12">
                  <label className="text-white" htmlFor="ExampleImputEmail1">
                    USD
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleImputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter USD"
                    value={Number(USD)}
                    onChange={(event) => {
                      setUSD(event.target.value);
                      setMXN((event.target.value * 19.84).toFixed(2));
                    }}
                  />
                </div>
                <div className="form-group col-12">
                  <label className="text-white" htmlFor="ExampleImputPassword1">
                    MXN
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleImputPassword1"
                    placeholder="Enter MXN"
                    //value={USD * 19.84}
                    value={Number(MXN)}
                    onChange={({ target: { value } }) => {
                      setUSD((value / 19.84).toFixed(2));
                      setMXN(value);
                    }}
                  />
                </div>
              </form>
              <h1 className="text-white">$ {Number(USD).toFixed(2)} USD</h1>
              <h1 className="text-white">$ {Number(MXN).toFixed(2)} MXN</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
