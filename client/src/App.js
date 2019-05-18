import React from 'react';
import Axios from 'axios';
import _ from "lodash";
import './App.css';
import HouseRow from './HouseRow.js';
import Header from './Header.js';
import SimpleSelect from './SimpleSelect.js';
import InitScreen from './InitScreen.js';
//import FormDialog from './FormDialog.js';

import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
import Logo from './Logo.js';

//import SimpleDialog from './SimpleDialog.js';
//import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
//import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
/* 
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl'; 
import Select from '@material-ui/core/Select'; */
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: [],
      name: 'hai',
      labelWidth: 0,
      houseCount: 0,
      is_logged_in: false,
      user: "",
      show_init: false // for debug mainly
    };
//    debugger;
  }

  get_allhomes = (query) => {
    //console.log("allhomeq start");
    alert("allhomesget");
    Axios.get("/all_homes")
      .then(res => this.setState({ results: Object.values(res.data) }))
      .catch(err => console.log(err));
    //console.log("allhomeq end");
  };


  onSubmit = (e) => {
    e.preventDefault();

    this.get_books(this.refs.book_query.value);
  };

  update_login_user = (user) => {

    this.setState({
      user: Math.random(),
      is_logged_in : true,

    });
    //console.log("update_user setstate:" + this.state.user);

  }
  test(inut) {
      alert("test called  with" + inut);
  } 
  view = (num) => {
    //alert(this.state.results[num].volumeInfo.previewLink    );
    //let url = this.state.results[num].volumeInfo.previewLink;
    //window.open(url, '_blank');
    //      console.log( "zzvview" + JSON.stringify(this.state.results[num - 1].image_url));


    this.props.history.push({
      pathname: '/SingleHouse',
      state: { detail: num }
    })

    //this.props.history.push('aved/1');
    //alert("view" + this.state.results[num].image_url);
  }

  save = (num) => {
    alert("if yousee this save should be unused?")
    let save_stuff = {
      title: this.state.results[num].volumeInfo.title,
      authors: this.state.results[num].volumeInfo.authors,
      description: this.state.results[num].volumeInfo.description,
      //thumbnail   has null problem?
      previewLink: this.state.results[num].volumeInfo.previewLink,

    }
    alert(JSON.stringify(save_stuff));
  }
  onInputChange = (event) => {
    //console.log("Search changed ..." + event.target.value)
    alert("if you see this figure out why before you remove it local Search changed ..." + event.target.value)
    /*
    if (event.target.value) {
        this.setState({searchString: event.target.value})
    } else {
        this.setState({searchString: ''})
    } */
  }
  handle_init_screen = (stuff) => {
    //console.log("fuunction handle init " + stuff);

  }
  handleSelectChangelow = (event_name, event_value) => {
    //gets events from change tabs
    alert("low i finsidhed")
    this.setState({ [event_name]: event_value }, this.get_some_homes);
  };

  get_some_homes() {
    //alert("obsolete get homes ");
    //console.log("min is here" + this.props.min);
    Axios.get("/some_homes", { params: { min: this.props.min, max: this.props.max } })
      //.then(res => this.setState({ results: Object.values(res.data) }))
      .then(res => this.props.handleHomeList({ results: Object.values(res.data) }))
      .catch(err => console.log(err));

  }


  handleSelectChange = event => {
    alert("new handle select change");
    this.setState({ [event.target.name]: event.target.value });
    this.get_some_homes();
    //console.log("ChaNgE in component:" + event.target.name + " " + event.target.value);
  };
  handleClick = (the_button) => {
    let num = the_button.match(/\d+/g);
    //console.log(the_button + num);
    if (the_button.startsWith("view"))
      this.view(num);
  }
  //get rid of didmount after testing
  componentDidMount() {
    //console.log("didmount");
    /*
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    }); */
    //this.get_allhomes();
  }
  componentWillReceiveProps(nextProps) {
    // you can also check props with current version
    // and set conditions to update state or not
    //this.updateState();
    //alert("propchang2" + JSON.stringify(nextProps));
    //alert("willget" + JSON.stringify(nextProps))
    //alert("willrecprops min,max" + this.props.min + this.props.max);
    /*
    this.setState({
      results: this.props.results,

    }); */
    //this.get_some_homes();
}
  //<SimpleSelect onChange={(evt, key, payload)=>console.log("---payload--" + payload)}     />
  render() {
    //alert("app home list:" + typeof  + this.props.handleHomeList)
    //alert("props in app  "+ JSON.stringify(this.props.min  + "max:" + this.props.max)) ;
    //needed by old way i was doing Select? 
//    const { classes } = this.props;
    //console.log("main Rend" + JSON.stringify(this.state.show_init));
    //console.log("type:" + typeof this.handle_init_screen);
 // this is a function here...   alert("app.p" + typeof   this.props.onMinMaxChange);
 //alert("app says" + typeof this.props.onUserChange)
    return (
      <div className = "container">`
          <div className="row">
          <div className="col" >
          <Logo />
          </div>
          <div className = "col"></div>
          { !this.state.is_loggged_in && 
          <SignUp init={true} send_data={this.handle_init_screen} is_logged_in={this.state.is_logged_in} onUserChange={this.props.onUserChange} />
          }
          { !this.state.is_loggged_in && 
          <SignIn handle_update_user={this.update_login_user} is_logged_in={this.state.is_logged_in} />
          }
          </div>


          <Header/>
          <span>Total Matches:{this.state.housecount}</span> 
          <SimpleSelect onMinMaxChange={this.props.onMinMaxChange} max={this.props.max} min={this.props.min}
              beds={this.props.beds}
              baths={this.props.baths}
              square_feet={this.props.square_feet}
              acres={this.props.acres}
          
          />




        <InitScreen show_init_screen={this.state.show_init} send_data={this.handle_init_screen} />
        <div className="">
          {_.chunk(this.props.results, 3).map((house, idx) => (
            <HouseRow
              clicker={this.handleClick}
              key={idx}
              id0={house[0].id}
              image_url0={house[0].image_url}
              address0={house[0].address}

              id1={house[1] && house[1].id}
              image_url1={house[1] && house[1].image_url}
              address1={house[1] && house[1].address}

              id2={house[2] && house[2].id}
              image_url2={house[2] && house[2].image_url}
              address2={house[2] && house[2].address}
            />
          ))}
        </div>

      </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);


//export default App;
