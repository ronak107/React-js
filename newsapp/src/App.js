import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Newsiteam from "./components/Newsiteam";

export default class App extends Component {
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
                  pagesize={6}
                  country="in"
                  category="general"
                />
              </Route>
              <Route exact path="/business">
                {" "}
                <News
                  key="business"
                  pagesize={6}
                  country="in"
                  category="business"
                />
              </Route>
              <Route exact path="/entertainment">
                {" "}
                <News
                  key="entertainment"
                  pagesize={6}
                  country="in"
                  category="entertainment"
                />
              </Route>
              <Route exact path="/general">
                {" "}
                <News
                  key="general"
                  pagesize={6}
                  country="in"
                  category="general"
                />
              </Route>
              <Route exact path="/health">
                {" "}
                <News
                  key="health"
                  pagesize={6}
                  country="in"
                  category="health"
                />
              </Route>
              <Route exact path="/science">
                {" "}
                <News
                  key="science"
                  pagesize={6}
                  country="in"
                  category="science"
                />
              </Route>
              <Route path="/sports">
                {" "}
                <News
                  key="sports"
                  pagesize={6}
                  country="in"
                  category="sports"
                />
              </Route>
              <Route exact path="/technology">
                {" "}
                <News
                  key="technology"
                  pagesize={6}
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
