import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
export default class InitScreen extends React.Component {
  state = {
    open: true,
    city_state: "",
    user_name: "",
    password: "",
    user_lat: 0,
    user_lng: 0,
    email: ""


  };

  handle_city_state = (e) => {
    console.log("city_sate:" + e.target.value);
    this.setState({
      city_state: e.target.value
    });
  }
  handle_email = (e) => {
    console.log("email:" + e.target.value);
    this.setState({
      email: e.target.value
    });
  }
  handle_password = (e) => {
    console.log("pw:" + e.target.value);
    this.setState({
      password: e.target.value
    });
  }
  validate_input = () => {
    console.log("sinara");
    this.props.send_data({ 
        "city_state": this.state.city_state,
        "email" : this.state.email,
        "password" : this.state.password,
       } );
    this.handleClose();
  }


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    console.log('init of initscren' + this.state.show_init_screen)
    if (!this.props.show_init_screen)
      return null;

    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Choose City and State</DialogTitle>
          <DialogContent>
            <DialogContentText>
              init Select City and State, optinionally create an account so we can remember you!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              value={this.city_state}
              id="city_state"
              onChange={this.handle_city_state}
              label="City and State"
              type="text"
              fullWidth
            />
            <DialogTitle id="form-dialog-user">Optionally sign up with us, we will remember your search criterial and preferred city!</DialogTitle>
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
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
