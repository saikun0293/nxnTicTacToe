import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthenticationPage from "./components/Authentication";
import GamePage from "./components/Game";
import Scoreboard from "./components/Scoreboard";
import Register from "./components/Register";

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <Switch>
          <Route path="/" exact component={AuthenticationPage} />
          <Route path="/game" component={GamePage} />
          <Route path="/scoreboard" component={Scoreboard} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    );
  }
}

export default App;
