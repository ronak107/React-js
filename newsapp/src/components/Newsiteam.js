import React, { Component } from "react";

export class Newsiteam extends Component {
  render() {
    let { title, description, urlToImage, newsurl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sn btn-dark"
            >
              Read More!
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsiteam;