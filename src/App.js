import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { HomePage } from "./components/pages/Home/Home";
import { BlogPage } from "./components/pages/Blog/Blog";
// import { AboutPage } from "./components/pages/About/About";
import { useEffect } from "react";
import { Manager } from "./components/pages/Manager/Manager";

export default function App() {
  useEffect(() => {
    document.title = "A blog by Nguyên Vy"
  }, [])
  return ( 
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/blogs" render={props => <BlogPage {...props} />}  />
          <Route path="/manager">
            <Manager />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
