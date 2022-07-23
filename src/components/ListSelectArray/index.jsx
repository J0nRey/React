import React, { useState } from "react";
import "./style.css";

function listSelectArray() {
  const [activeItem, setActiveItem] = useState(0);

  const menu = ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6"];

  return (
    <>
      <h1>List-Select-Array</h1>
      <div className="col">
        <ul>
          {menu.map((item, index) => (
            <li
              className={`${activeItem === index + 1 ? "btn active" : null}`}
              onClick={() => setActiveItem(index + 1)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default listSelectArray;
