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
import { Button } from "@material-ui/core";

/*const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/SingleHouse" component={SingleHouse} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root")); */
class Index extends React.Component {
   state = {
     indexState : 0,
     min: 0,
     max: 100000
   };

   addState = () => {
     this.setState({indexState : this.state.indexState + 1});
   }

   handleMinMaxChange = event => {
    alert("handleMinMaxChange");
    this.setState({ [event.target.name]: event.target.value });
    //console.log("ChaNgE in component:" + event.target.name + " " + event.target.value);
  };

  render() 
{

    //console.log("falid fn? "+ typeof this.update_user)
    //needed by old way i was doing Select? 
//    const { classes } = this.props;
    //console.log("main Rend" + JSON.stringify(this.state.show_init));
    //console.log("type:" + typeof this.handle_init_screen);
    return (
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
 <Button onClick={this.addState}>Click here to change state</Button>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" render={(routeProps) => (<App {...routeProps} {...this.state} onMinMaxChange={this.handleMinMaxChange} />)} />
        <Route path="/SingleHouse" component={SingleHouse} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
    )}
};
ReactDOM.render(<Index />, document.getElementById("root"));
