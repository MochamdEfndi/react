import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Forum from "./Forum";
import Auth from "../src/pages/Auth/Auth"
import Profile from "../src/pages/Profile/Profile"
import axios from 'axios';

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< HEAD
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/forum" component={Forum} />
      <Route path="/Login" component={Auth} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </Router>
  // <React.StrictMode>
  //   {/* <App /> */}
  //   <Forum />
  // </React.StrictMode>
=======
  <React.StrictMode>
    <App />
    {/* <Forum /> */}
  </React.StrictMode>
>>>>>>> 5a35688389ab2e2fbb293a9f61aa5a249ca8e50a
);
