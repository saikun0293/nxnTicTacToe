import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import AuthenticationPage from "./components/Authentication";
import GamePage from "./components/Game";
import Scoreboard from "./components/Scoreboard";
import Register from "./components/Register";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router basename="/">
            <Switch>
              <Route path="/" exact component={AuthenticationPage} />
              <Route path="/game" component={GamePage} />
              <Route path="/scoreboard" component={Scoreboard} />
              <Route path="/register" component={Register} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
