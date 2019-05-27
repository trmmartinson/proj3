import React from 'react';
import Axios from 'axios';
import _ from "lodash";
import './App.css';
import HouseRow from './HouseRow.js';
import Header from './Header.js';
import SimpleSelect from './SimpleSelect.js';
import InitScreen from './InitScreen.js';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
import Logo from './Logo.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
  }

  get_all_homes = (query) => {
    alert(" obsolete allhomesget");
    Axios.get("/all_homes")
      .then(res => this.props.handleHomeList({ results: Object.values(res.data) }))
      .catch(err => console.log(err));
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

  }
  test(inut) {
      alert("test called  with" + inut);
  } 
  view = (num) => {
    if(this.props.user_record != null)
    this.props.history.push({
      pathname: '/SingleHouse',
      state: { detail: num, user_name : this.props.user_record.sign_up_name,
               email : this.props.user_record.sign_up_email,
       }
    })
    else
    this.props.history.push({
      pathname: '/SingleHouse',
      state: { detail: num
       }
    })
  }

  handleSelectChangelow = (event_name, event_value) => {
    this.setState({ [event_name]: event_value }, this.get_some_homes);
  };

  get_some_homes() {
    alert("obsolete get homes ");
    Axios.get("/some_homes", { params: { min: this.props.min, max: this.props.max } })
      .then(res => this.props.handleHomeList({ results: Object.values(res.data) }))
      .catch(err => console.log(err));
  }
  toDollars =(amount) => {
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'usd',
    });
    return(formatter.format(amount));
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
  render() {
    return (
      <div className = "container">`
          <div className="row">
          <div className="col" >
          <Logo />
          </div>
          <div className = "col"></div>
          { !this.props.user_record && 
          <SignUp init={true} send_data={this.handle_init_screen} is_logged_in={this.state.is_logged_in} onUserChange={this.props.onUserChange} />
          }
          { !this.props.user_record && 
          <SignIn init={true} handle_update_user={this.update_login_user} is_logged_in={this.state.is_logged_in} onUserChange={this.props.onUserChange} />
          }
          </div>

          <Header/>
          <SimpleSelect onMinMaxChange={this.props.onMinMaxChange} max={this.props.max} min={this.props.min}
              beds={this.props.beds}
              baths={this.props.baths}
              square_feet={this.props.square_feet}
              lot_size={this.props.lot_size}
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
              price0={this.toDollars(house[0].price)}
              beds0={house[0].beds}
              baths0={house[0].baths}
              square_feet0={house[0].square_feet}
              lot_size0={house[0].lot_size}

              id1={house[1] && house[1].id}
              image_url1={house[1] && house[1].image_url}
              address1={house[1] && house[1].address}
              price1={house[1] && this.toDollars(house[1].price)}
              beds1={house[1] && house[1].beds}
              baths1={house[1] && house[1].baths}
              square_feet1={house[1] && house[1].square_feet}
              lot_size1={house[1] && house[1].lot_size}

              id2={house[2] && house[2].id}
              image_url2={house[2] && house[2].image_url}
              address2={house[2] && house[2].address}
              price2={house[2] && this.toDollars(house[2].price)}
              beds2={house[2] && house[2].beds}
              baths2={house[2] && house[2].baths}
              square_feet2={house[2] && house[2].square_feet}
              lot_size2={house[2] && house[2].lot_size}
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


