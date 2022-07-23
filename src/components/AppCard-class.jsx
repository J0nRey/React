import React from "react";

import "./AppCard.css";

class AddCard extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default AddCard;
