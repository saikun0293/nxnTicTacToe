import React, { Component } from "react";
import firebase from "firebase";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import AuthenticationPage from "./components/Authentication";
import GamePage from "./components/Game";
import Scoreboard from "./components/Scoreboard";
import Register from "./components/Register";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

let firebaseConfig = {
  apiKey: "AIzaSyAQaXEhUIoZNPfVqRqvaf3zSb2CR2XGb-M",
  authDomain: "we-chat-f9868.firebaseapp.com",
  projectId: "we-chat-f9868",
  storageBucket: "we-chat-f9868.appspot.com",
  messagingSenderId: "1081408803740",
  appId: "1:1081408803740:web:4d330e298db634f5e86e59",
  measurementId: "G-V196FRSMYT",
};

firebase.initializeApp(firebaseConfig);
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
