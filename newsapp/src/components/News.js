import React, { Component } from "react";
import Newsiteam from "./Newsiteam";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <Newsiteam />
        <Newsiteam />
        <Newsiteam />
        <Newsiteam />
        <Newsiteam />
        <Newsiteam />
      </div>
    );
  }
}

export default News;
