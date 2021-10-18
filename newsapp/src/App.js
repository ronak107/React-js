import "./App.css";

// import React, { Component } from "react";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

// import Newsiteam from "./components/Newsiteam";

// export default class App extends Component {
//   pagesize = 9;
//   state = {
//     progress: 0,
//   };
//   setprogress = (progress) => {
//     this.setState({ progress: progress });
//   };
//   render() {
const App = () => {
  const pagesize = 5;
  // const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setprogress] = useState(0);
  return (
    <div>
      <>
        <LoadingBar color="#f11946" progress={progress} />
        <Router>
          <Navbar />

          {/* <Switch>
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
            </Switch> */}
          {/*<News setprogress={this.setprogress} iteam /> */}
          <Switch>
            <Route exact path="/">
              <News
                setprogress={setprogress}
                key="general"
                pageSize={pagesize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                setprogress={setprogress}
                key="business"
                pageSize={pagesize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setprogress={setprogress}
                key="entertainment"
                pageSize={pagesize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News
                setprogress={setprogress}
                key="general"
                pageSize={pagesize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <News
                setprogress={setprogress}
                key="health"
                pageSize={pagesize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                setprogress={setprogress}
                key="science"
                pageSize={pagesize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setprogress={setprogress}
                key="sports"
                pageSize={pagesize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setprogress={setprogress}
                key="technology"
                pageSize={pagesize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </>
    </div>
  );
};
export default App;
