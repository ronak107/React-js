import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Newsiteam from "./components/Newsiteam";

export default class App extends Component {
  pagesize = 9;
  render() {
    return (
      <div>
        <>
          <Router>
            <Navbar />

            <Switch>
              <Route exact path="/">
                {" "}
                <News
                  key="general"
                  pagesize={this.pagesize}
                  country="in"
                  category="general"
                />
              </Route>
              <Route exact path="/business">
                {" "}
                <News
                  key="business"
                  pagesize={this.pagesize}
                  country="in"
                  category="business"
                />
              </Route>
              <Route exact path="/entertainment">
                {" "}
                <News
                  key="entertainment"
                  pagesize={this.pagesize}
                  country="in"
                  category="entertainment"
                />
              </Route>
              <Route exact path="/general">
                {" "}
                <News
                  key="general"
                  pagesize={this.pagesize}
                  country="in"
                  category="general"
                />
              </Route>
              <Route exact path="/health">
                {" "}
                <News
                  key="health"
                  pagesize={this.pagesize}
                  country="in"
                  category="health"
                />
              </Route>
              <Route exact path="/science">
                {" "}
                <News
                  key="science"
                  pagesize={this.pagesize}
                  country="in"
                  category="science"
                />
              </Route>
              <Route path="/sports">
                {" "}
                <News
                  key="sports"
                  pagesize={this.pagesize}
                  country="in"
                  category="sports"
                />
              </Route>
              <Route exact path="/technology">
                {" "}
                <News
                  key="technology"
                  pagesize={this.pagesize}
                  country="in"
                  category="technology"
                />
              </Route>
            </Switch>
            {/* <Newsiteam /> */}
          </Router>
        </>
      </div>
    );
  }
}
