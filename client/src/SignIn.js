import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
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
    this.setState({
      password: e.target.value
    });
  }
  update_user = () => {
    this.props.onUserChange({
      "sign_up_name": "response.data.username",
      "sign_up_email": "response.data.email",
    });
  }
  validate_input = () => {
   // todo: actually validate
    Axios.get('/signin', {
      params: {
        email: this.state.email,
        password: this.state.password,
      }
    })
      .then((response) => {
        if(!response.data)
           alert("Bad password");
        else 
        {
        this.props.onUserChange({
          "sign_up_name": response.data.username,
          "sign_up_email": response.data.email,
        }); 
    this.handleClose();
      }
      })
      .catch((error) => {
        console.log(error);
      });
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
        <Button className="dorky" size="small" variant="text" color="primary" onClick={this.handleClickOpen}>
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