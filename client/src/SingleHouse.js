import React from "react";
import Axios from "axios";
import FormContainer from "./FormContainer.js";
import Logo from "./Logo.js";


class SingleHouse extends React.Component {
  constructor() {
    super();
    this.user_name = "firstname lastname";
    this.email = "email@place.com";
  }
  state = {
    house: []
  }
  toDollars = (amount) => {
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'usd',
    });
    return (formatter.format(amount));
  }

  componentDidMount() {
    //console.log("Saved" + JSON.stringify(this.props.history.location.state.detail));
    let house_id = this.props.history.location.state.detail;
    //alert("singlehouse" + JSON.stringify(this.props.history.location.state.user_name));
    //console.log("lllllllllllllookup" + house_id);

    Axios.get("/home/" + house_id)
      .then(res => {
        //console.log("res" + res.data.id);
        const house = res.data;
        this.setState({
          house: house
        });
      })
  }
  /*
    Axios.get("/home/" + house_id)
   //.then(res => this.setState({ results:  Object.values(res.data) }))
   .then(res => {
       this.setState({ results:  res.data }))
   }
   //.then(res => console.log("resdata:" + res.data))
   .catch(err => console.log(err));
  } */

  //<img  src={"/images/" + {this.state.results.image_url} } alt="house" height="250" width="250"></img>

  render() {

    if (!this.state.house.image_url)
      return null;
              //property_id={this.props.history.location.state.detail}
    //console.log("prerender" + JSON.stringify(this.state.house.image_url));
    //alert("singlehousepropid " + JSON.stringify(this.state.house.id))
    return (
      <div className="container">
        <Logo />
        <div className='row'>
          <div className="sm-5">
            <img src={"/images/" + this.state.house.image_url} alt="house" height="400" width="650"></img>
            <hr></hr>
            <div><p className="houseParagraph">{this.state.house.description}</p></div>
            <hr></hr>

            <div><h4 className="houseAttribute">{"Price: " + this.toDollars(this.state.house.price)}</h4></div>
            <hr></hr>

            <div><h4 className="houseAttribute">{"Beds: " + this.state.house.beds}</h4></div>
            <hr></hr>

            <div><h4 className="houseAttribute">{"Baths: " + this.state.house.baths}</h4></div>
            <hr></hr>

            <div><h4 className="houseAttribute">{"Square Feet: " + this.state.house.square_feet}</h4></div>
            <hr></hr>

            <div><h4 className="houseAttribute">{"Land Size: " + this.state.house.lot_size + " acres"}</h4></div>
            <hr></hr>



          </div>
          <div className="sm-1">
          </div>
          <div className="sm-6">
            <FormContainer agent_id={this.state.house.agent_id}
              address={this.state.house.address}
              property_id={this.state.house.id}
              user_name={this.props.history.location.state.user_name}
              email={this.props.history.location.state.email}
            />
          </div>
        </div>
      </div>
    );
  }
}



export default SingleHouse;
