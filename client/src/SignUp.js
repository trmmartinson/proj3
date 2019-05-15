import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Axios from 'axios';
export default class SignUp extends React.Component {
  state = {
    open: false,
    name: "",
    user_name: "",
    sign_up_name: "",
    sign_up_password: "",
    user_lat: 0,
    user_lng: 0,
    sign_up_email: ""


  };

  handle_sign_up_email = (e) => {
    this.setState({
      sign_up_email: e.target.value
    });
  }

  handle_sign_up_name = (e) => {
    this.setState({
      sign_up_name: e.target.value
    });
  }
  handle_sign_up_password = (e) => {
    this.setState({
      sign_up_password: e.target.value
    });
  }
  validate_input = () => {
    console.log("sinara");
    this.props.send_data({ 
        "name": this.state.sign_up_name,
        "sign_up_email" : this.state.sign_up_email,
        "sign_up_password" : this.state.sign_up_password,
       } );
       console.log("post singup");
       Axios.post('/signup', {
        "sign_up_name": this.state.sign_up_name,
        "sign_up_email" : this.state.sign_up_email,
        "sign_up_password" : this.state.sign_up_password,


      })
      .then(function (response) {
        //resultElement.innerHTML = generateSuccessHTMLOutput(response);
      })
      .catch(function (error) {
        //resultElement.innerHTML = generateErrorHTMLOutput(error);
      });


    this.handleClose();
  }
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
        <Button variant="text" color="primary" onClick={this.handleClickOpen}>
          Register
        </Button>
        <Dialog
          open={this.state.open}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Signing up is easy and saves time by remembering your settings!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              value={this.name}
              id="name"
              onChange={this.handle_sign_up_name}
              label="Full Name"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              value={this.sign_up_email}
              onChange={this.handle_sign_up_email}
              id="sign_up_email"
              label="Email Address"
              type="sign_up_email"
              fullWidth
            />
            <Divider />
            <TextField
              margin="dense"
              value={this.sign_up_password}
              onChange={this.handle_sign_up_password}
              id="sign_up_password"
              label="Password"
              type="sign_up_password"
              fullWidth
            />



          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.validate_input} color="primary">
              Register
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}
