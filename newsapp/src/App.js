import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

// import Newsiteam from "./components/Newsiteam";

export default class App extends Component {
  pagesize = 9;
  state = {
    progress: 0,
  };
  setprogress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <>
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Router>
            <Navbar />

            <Switch>
              <Route exact path="/">
                {" "}
                <News
                  setprogress={this.setprogress}
                  key="general"
                  pagesize={this.pagesize}
                  country="in"
                  category="general"
                />
              </Route>
              <Route exact path="/business">
                {" "}
                <News
                  setprogress={this.setprogress}
                  key="business"
                  pagesize={this.pagesize}
                  country="in"
                  category="business"
                />
              </Route>
              <Route exact path="/entertainment">
                {" "}
                <News
                  setprogress={this.setprogress}
                  key="entertainment"
                  pagesize={this.pagesize}
                  country="in"
                  category="entertainment"
                />
              </Route>
              <Route exact path="/general">
                {" "}
                <News
                  setprogress={this.setprogress}
                  key="general"
                  pagesize={this.pagesize}
                  country="in"
                  category="general"
                />
              </Route>
              <Route exact path="/health">
                {" "}
                <News
                  setprogress={this.setprogress}
                  key="health"
                  pagesize={this.pagesize}
                  country="in"
                  category="health"
                />
              </Route>
              <Route exact path="/science">
                {" "}
                <News
                  setprogress={this.setprogress}
                  key="science"
                  pagesize={this.pagesize}
                  country="in"
                  category="science"
                />
              </Route>
              <Route path="/sports">
                {" "}
                <News
                  setprogress={this.setprogress}
                  key="sports"
                  pagesize={this.pagesize}
                  country="in"
                  category="sports"
                />
              </Route>
              <Route exact path="/technology">
                {" "}
                <News
                  setprogress={this.setprogress}
                  key="technology"
                  pagesize={this.pagesize}
                  country="in"
                  category="technology"
                />
              </Route>
            </Switch>
            {/*<News setprogress={this.setprogress} iteam /> */}
          </Router>
        </>
      </div>
    );
  }
}
