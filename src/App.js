import React from "react";
import "./App.css";
import GithubFinder from "./components/githubFinder";
import GithubProfile from "./components/githubProfile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App(props) {
  console.log(props)
  return (
    <div>
      <Router>
        <Switch>  
          <Route exact path="/" component={GithubFinder} />
          <Route exact path="/:username" render={(props) => (<GithubProfile {...props} />)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
