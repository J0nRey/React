import React from "react";

import "./AppLoading.css";

class AppLoading extends React.Component {
  constructor(props) {
    super(props);

    this.state = { active: true };
  }

  render() {
    const active = this.state.active ? "active" : "";
    return (
      <div
        className={` loading ${active} align-items-center justify-content-center`}
      >
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ active: false });
    }, 2000);
  }
}

export default AppLoading;
