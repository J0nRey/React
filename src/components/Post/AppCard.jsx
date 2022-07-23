import React, { Children } from "react";

class AppCard extends React.Component {
  render() {
    return (
      <>
        <div>
          <div className="card">
            <div className="card-body"></div>
            <div>
              <img
                src="https://picsum.photos/536/354"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">{this.props.children}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AppCard;
