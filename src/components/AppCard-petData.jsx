import React from "react";

const data = [
  {
    title: "this a title one",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi porro, impedit totam consequuntur neque odit. Suscipit quasi, veniam officiis dignissimos, fugit dolores exercitationem in consequatur ea enim porro non sed.",
  },
  {
    title: "this a title two",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi porro, impedit totam consequuntur neque odit. Suscipit quasi, veniam officiis dignissimos, fugit dolores exercitationem in consequatur ea enim porro non sed.",
  },
  {
    title: "this a title tre",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi porro, impedit totam consequuntur neque odit. Suscipit quasi, veniam officiis dignissimos, fugit dolores exercitationem in consequatur ea enim porro non sed.",
  },
  {
    title: "this a title four",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi porro, impedit totam consequuntur neque odit. Suscipit quasi, veniam officiis dignissimos, fugit dolores exercitationem in consequatur ea enim porro non sed.",
  },
  {
    title: "this a title five",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi porro, impedit totam consequuntur neque odit. Suscipit quasi, veniam officiis dignissimos, fugit dolores exercitationem in consequatur ea enim porro non sed.",
  },
  {
    title: "this a title six",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi porro, impedit totam consequuntur neque odit. Suscipit quasi, veniam officiis dignissimos, fugit dolores exercitationem in consequatur ea enim porro non sed.",
  },
  {
    title: "this a title seven",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi porro, impedit totam consequuntur neque odit. Suscipit quasi, veniam officiis dignissimos, fugit dolores exercitationem in consequatur ea enim porro non sed.",
  },
  {
    title: "this a title eight",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi porro, impedit totam consequuntur neque odit. Suscipit quasi, veniam officiis dignissimos, fugit dolores exercitationem in consequatur ea enim porro non sed.",
  },
];

class AddCard extends React.Component {
  buildLI({ title, text }, index, array) {
    return (
      <li key={index}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="card-link">
          go somewhere
        </a>
      </li>
    );
  }

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
              <ul className="d-flex flex-column">{data.map(this.buildLI)}</ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CardPost;
