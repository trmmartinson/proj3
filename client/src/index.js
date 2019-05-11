import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import App from "./App";
import SingleHouse from "./SingleHouse";
import Notfound from "./notfound";

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/SingleHouse">
            Remove
          </NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/SingleHouse" component={SingleHouse} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
