import React from 'react';
import {
  //BrowserRouter as Router,
  Link,
} from "react-router-dom";



export default class Logo extends React.Component {

        //<img src="/images/logo.png" alt="Realestator.com"></img>
  render() {
    return (
      <React.Fragment>
        <Link to="/">
        <img src={"/images/logo.png"}  alt="logo" height="200" width="200"></img>
        </Link>
      </React.Fragment>
    );
  }
}