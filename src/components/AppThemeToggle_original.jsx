import React from "react";

import "./AppThemeToggle.css";

class AppThemeToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = { theme: "light" };

    this.toggle = this.toggle.bind(this);

    console.log("CONSTRUCTOR");
  }

  toggle() {
    //console.log( this.state.theme )

    const theme = this.state.theme === "light" ? "dark" : "light";

    this.setState({ theme });
  }

  render() {
    // Cuando se crea
    console.log("RENDER, fase de renderizado");
    return (
      <div
        className={`AppThemeToggle ${this.state.theme} d-flex aling-items-center justify-content-center`}
        onClick={this.toggle}
      >
        {/*  this.state.theme  */}
      </div>
    );
  }

  componentDidMount() {
    // Despues de que se monte
    console.log("DID MOUNT, fase de commit");
    document.body.setAttribute("theme", this.state.theme);
  }

  componentDidUpdate() {
    console.log("DID UPDATE, fase de actualizacion");
    document.body.setAttribute("theme", this.state.theme);
  }
}

export default AppThemeToggle;
