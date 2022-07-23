import React from "react";

const postData = [
  {
    title: "this a title one",
    subTitle: "this a subTitle",
    post:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi porro, impedit totam consequuntur neque odit. Suscipit quasi, veniam officiis dignissimos, fugit dolores exercitationem in consequatur ea enim porro non sed.",
  },
  {
    title: "this a title one",
    subTitle: "this a subTitle",
    post:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi porro, impedit totam consequuntur neque odit. Suscipit quasi, veniam officiis dignissimos, fugit dolores exercitationem in consequatur ea enim porro non sed.",
  },
  {
    title: "this a title one",
    subTitle: "this a subTitle",
    post:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi porro, impedit totam consequuntur neque odit. Suscipit quasi, veniam officiis dignissimos, fugit dolores exercitationem in consequatur ea enim porro non sed.",
  },
  {
    title: "this a title one",
    subTitle: "this a subTitle",
    post:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi porro, impedit totam consequuntur neque odit. Suscipit quasi, veniam officiis dignissimos, fugit dolores exercitationem in consequatur ea enim porro non sed.",
  },
];

class CardPost extends React.Component {
  buildLI() {}

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
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="card-link">
                go somewhere
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CardPost;
