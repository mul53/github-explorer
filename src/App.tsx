import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RepoDetail from "./pages/RepoDetail";
import Search from "./pages/Search";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:organization/:name" component={RepoDetail} />
          <Route path="/search" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
