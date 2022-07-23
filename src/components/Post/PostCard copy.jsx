import React from "react";
import Style from "./PostCard.module.css";

class CardPost extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }
  render() {
    return (
      <>
        <div className={`${Style.PostCard}`}>
          <img
            src="https://picsum.photos/536/354"
            class="card-img-top"
            alt="..."
          />
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </>
    );
  }
}

export default CardPost;
