import React, { Component } from "react";

export class Newsiteam extends Component {
  render() {
    let { title, description, urlToImage, newsurl, author, date, Info } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span className="badge bg-info text-dark mx-2">{Info}</span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on {date}
              </small>
            </p>
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
