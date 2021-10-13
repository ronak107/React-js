import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
// import Newsiteam from "./components/Newsiteam";

export default class App extends Component {
  render() {
    return (
      <div>
        <>
          <Navbar />
          <News pagesize={6} />
          {/* <Newsiteam /> */}
        </>
      </div>
    );
  }
}
