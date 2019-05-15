import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Axios from "axios";
export default class SignIn extends React.Component {
  state = {
    open: false,
    user_name: "",
    password: "",
    user_lat: 0,
    user_lng: 0,
    email: "",

  };

  constructor() {
    super();
    this.once = false;
  }
  handle_email = (e) => {
    this.setState({
      email: e.target.value
    });
  }
  handle_password = (e) => {
    //console.log("pw:" + e.target.value);
    this.setState({
      password: e.target.value
    });
  }
  validate_input = () => {
       // what is happening to this in the update below?
       var monkey = this.props.handle_update_user;
       Axios.get('/signin', {
        params: {
          email: this.state.email,
          password: this.state.password,
        }
      })
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        monkey({ 
          "user" : response.data,
          "is_logged_in" : true

         } ); 
      })
      .catch(function (error) {
        console.log(error);
      })
      this.handleClose();
  }

/*  update_user(user ) {
    this.setState(prevState => ({
      jasper: {
          ...prevState.jasper,
          name: 'something'
      }
  }))
  } */
  oneOpen = () => {
    this.setState({ open: true });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    if (this.props.is_logged_in)
    return null;
    return (
      <React.Fragment>
        <Button size = "small" variant="text" color="primary" onClick={this.handleClickOpen}>
          Sign In 
        </Button>
        <Dialog
          open={this.state.open}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
          <DialogContent>
           

            <TextField
              margin="dense"
              value={this.email}
              onChange={this.handle_email}
              id="email"
              label="Email Address"
              type="email"
              fullWidth
            />
            <Divider />
            <TextField
              margin="dense"
              value={this.password}
              onChange={this.handle_password}
              id="password"
              label="Password"
              type="password"
              fullWidth
            />



          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.validate_input} color="primary">
              Sign In
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}
