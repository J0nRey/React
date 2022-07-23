import React, { useState } from "react";
//5. importamos el css
import "./style.css";

function listSelect() {
  //1.Definimos nuestro estado
  const [activeItem, setActiveItem] = useState(0);

  //2.Agregamos evento a nuestra li y le decimos que identifique a que le da click
  const handleClick = (estado) => {
    //estado = 0
    setActiveItem(estado);
  };

  return (
    <>
      <div className="container">
        <h1>List-Setect</h1>
        <div className="col">
          <ul>
            {/*4. consicionamos el className con el estado */}
            <li
              className={`${activeItem === 1 ? "active btn" : null}`}
              onClick={() => handleClick(1)}
            >
              list1
            </li>
            <li
              className={`${activeItem === 2 ? "active btn" : null}`}
              onClick={() => handleClick(2)}
            >
              list2
            </li>
            <li
              className={`${activeItem === 3 ? "active btn" : null}`}
              onClick={() => handleClick(3)}
            >
              list3
            </li>
            <li
              className={`${activeItem === 4 ? "active btn" : null}`}
              onClick={() => handleClick(4)}
            >
              list4
            </li>
            <li
              className={`${activeItem === 5 ? "active btn" : null}`}
              onClick={() => handleClick(5)}
            >
              list5
            </li>
            <li
              className={`${activeItem === 5 ? "active btn" : null}`}
              onClick={() => handleClick(6)}
            >
              list6
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default listSelect;

/*
  se inicia el estado en 0, se tiene el estado activeItem,y se tiene el setActiveItem
  que setea mi estado active.

          const [activeItem, setActiveItem] = useState(0);
  
  Yo entro y se ejecuta mi componente, se monta, es decir se ejecuta el estado en 
  inicial y se renderiza  
  
          <li
              className={`btn ${activeItem === n ? "active" : null}`}
              onClick={() => handleClick(n)}
            >
              list n
            </li>
  
  La primera ves que se renderiza ningun "activeItem === n" va a ser true, ya que 
  activeItem vale 0 y no corresponde son ninguno, entonces le va a pintar null al 
  className del li.

            const handleClick = (estado) => { 
            setActiveItem(estado);
          };

  Pero ahora cuando yo le de "Click" a un elemento, este elemento se va a actualizar 
  con lo que yo le pase en (n).
  
          onClick={() => handleClick(n)

  si yo doy "Click", el activeItem valdra n y se va a volver a renderizar.

  Regla, cada que se actualiza el estado ocurre un reRender. 

   entonces se actualiza el estado y ocurre un reRender en todo el elemento dentro
   del return.

   Ahora con el valor n viene al <li> el activeItem es igual a n ?, "si", añadele la 
   clase "active" 

  */
