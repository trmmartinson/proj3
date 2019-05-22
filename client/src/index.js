import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import "./index.css";
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import App from "./App";
import SingleHouse from "./SingleHouse";
import Notfound from "./notfound";
//import { Button } from "@material-ui/core";

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
//
//  i need a way to inform app of a change in state.results.*
//
class Index extends React.Component {
   state = {
     indexState : 0,
     min: 0,
     max: 999999999,
     beds: 1,
     baths: 1,
     square_feet: 0,
     lot_size: 0,
     // this is the list of homes matching criteria
     results: [],
     // this is login info
     user_record: null,
   };
   constructor() {
         super();
         this.once = 0;
   }
   query_homes() {
     //alert("query state:" + JSON.stringify(this.state));
     // try moving props into state here, but for now use this
    //console.log("main query is here" + this.state.min);
    //console.log("bbbbbbbbbbbbbbbbbbbbbbbbeds, user_rec:" + this.state.beds + "  " + JSON.stringify(this.state.user_record));
    Axios.get("/some_homes", { params: { 
          min: this.state.min,
          max: this.state.max ,
          beds: this.state.beds, 
          baths: this.state.baths ,
          lot_size: this.state.lot_size ,
          square_feet: this.state.square_feet,
          } })
      .then(res => this.setState({ results: Object.values(res.data) }))
      .catch(err => console.log(err));  

  }
   addState = () => {
     this.setState({indexState : this.state.indexState + 1});
   }
   handleUserChange = (user_record) => {
    this.setState({   ...this.state.user_record, user_record });
   }

   handleHomeList = (results) => {
   this.setState({   ...this.state.results, results });
   }


   handleSelectChange = event => {
     //alert("global");
    //alert("handleSelectChange");
    //this.setState({ [event.target.name]: event.target.value });
    this.setState({ [event.target.name]: event.target.value }, this.query_homes);
    //this.setState({ [event.target.name]: event.target.value });
    //this.setState({ [event_name]: event_value }, this.get_some_homes);
    //console.log("mmmmmmmmmmmmmaxis:" + this.state.max);
    //get_some_homes()
    //var ev = new Event('input', { bubbles: true});
    //ev.simulated = true;
    //element.value = 'Something new';
   // element.dispatchEvent(ev);


    //console.log("ChaNgE in component:" + event.target.name + " " + event.target.value);
  };
  render() 
{
    if (this.once < 3) {  // trick system into displaying initially
       this.once++;
       this.query_homes();
    } 
    //console.log("falid fn? "+ typeof this.update_user)
//    const { classes } = this.props;
    //console.log("main Rend" + JSON.stringify(this.state.show_init));
    //console.log("type:" + typeof this.handle_init_screen);
    return (
<Router>
    <div>
      <Switch>
        <Route exact path="/" render={(routeProps) => (<App {...routeProps} {...this.state} 
            onMinMaxChange={this.handleSelectChange} 
            onUserChange={this.handleUserChange}
            handleHomeList={this.handleHomeList}
         />)} />
        <Route path="/SingleHouse" component={SingleHouse} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
    )}
};
ReactDOM.render(<Index />, document.getElementById("root"));


/* full original router 

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
        <Route exact path="/" render={(routeProps) => (<App {...routeProps} {...this.state} 
            onMinMaxChange={this.handleSelectChange} 
            onUserChange={this.handleUserChange}
         />)} />
        <Route path="/SingleHouse" component={SingleHouse} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router

*/