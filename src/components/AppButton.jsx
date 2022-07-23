import React from "react";

function AppButton({ className: classNameProp, type, text }) {
  const className = classNameProp ? classNameProp : "";

  if (type === "anchor") {
    return <a className={`btn btn-link ${className}`}> {text} </a>;
  }

  return (
    <button className={`btn ${className}`} type="button">
      {text}
    </button>
  );
}

export default AppButton;
