import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthenticationPage from "./components/Authentication";
import GamePage from "./components/Game";
import Scoreboard from "./components/Scoreboard";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={AuthenticationPage} />
          <Route path="/game" component={GamePage} />
          <Route path="/scoreboard" component={Scoreboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
