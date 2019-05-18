import React from 'react';
//import Button from '@material-ui/core/Button';
//import TextField from '@material-ui/core/TextField';
//import Dialog from '@material-ui/core/Dialog';
//import DialogActions from '@material-ui/core/DialogActions';
//import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
//import DialogTitle from '@material-ui/core/DialogTitle';
//import Divider from '@material-ui/core/Divider';
//import Axios from 'axios';
export default class Logo extends React.Component {

        //<img src="/images/logo.png" alt="Realestator.com"></img>
  render() {
    return (
      <React.Fragment>
        <img src={"/images/logo.png"}  alt="logo" height="200" width="200"></img>
      </React.Fragment>
    );
  }
}