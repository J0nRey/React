import React, { useState, useEffect } from "react";

/* constructor(props) {
    super(props)

    this.state = { theme: 'light' } */

function Counter () {

    const [counter, setCounter] = useState(0)

    const [counterTwo, setCounterTwo ] = useState(0)


    useEffect(()=>{
        console.log("1, Did Mount o Montage, me ejecuto cuando se monta el componente")
   }, [])

       useEffect(()=>{
        console.log("2, Did Update counter, me ejecuto cuando cambia counter") 
    }, [counter])

    useEffect(()=>{
        console.log("2, Did Update counterTwo, me ejecuto cuando cambia  counterTwo")
    }, [counterTwo])

    useEffect(()=>{
        console.log("3, Did Update all, me ejecuto siempre Ja")
   })



    const modifyCounter = (action) => {
        if( action === "increment" ) {
            const newCounter = counter +1;
            setCounter(newCounter);
            return
        }
        const newCounter = counter -1;
        setCounter(newCounter);
        return
    };


    const modifyCounterTwo = (action) => {
        if( action === "increment" ) {
            const newCounter = counterTwo +1;
            setCounterTwo(newCounter);
            return
        }
        const newCounter = counterTwo -1;
        setCounterTwo(newCounter);
        return
    };



    return( 
        <div className="container p-3">
            <div className="row">
                <div className="col-12">
                    <p>Counter: {counter}</p>
                    <button 
                        onClick={ () => modifyCounter("increment") } 
                        className="btn btn-success" >
                            +
                    </button>
                    <button 
                        onClick={ () => modifyCounter("decrement") } 
                        className="btn btn-danger" >
                            -
                    </button>
                </div>
                <div className="col-12">
                    <p>CounterTwo: {counterTwo}</p>
                    <button 
                        onClick={ () => modifyCounterTwo("increment") } 
                        className="btn btn-success " >
                            +
                    </button>
                    <button 
                        onClick={ () => modifyCounterTwo("decrement") } 
                        className="btn btn-danger" >
                            -
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Counter