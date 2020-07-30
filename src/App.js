import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthenticationPage from "./components/Authentication";
import GamePage from "./components/Game";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={AuthenticationPage} />
          <Route path="/game" component={GamePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
