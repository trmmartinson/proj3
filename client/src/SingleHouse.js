import React from "react";
import Axios from "axios";


class SingleHouse extends React.Component {
  state = {
    house : []
  }

  componentDidMount(){
  console.log("Saved" + JSON.stringify( this.props.history.location.state.detail));
  let house_id  = this.props.history.location.state.detail;
  console.log("lllllllllllllookup" + house_id);

    Axios.get("/home/" + house_id)
      .then(res => {
        console.log("res" + res.data.id);
        const house = res.data;
        this.setState({  house
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
    //console.log("prerender" + JSON.stringify(this.state.image_url));
    if (!this.state.house.image_url)
    return null;
    console.log("prerender" + JSON.stringify(this.state.house.image_url));
    return (
      <div>
        <div className='jumbotron'>
          <img  src={"/images/" + this.state.house.image_url } alt="house"  width="650"></img>
        </div>
      </div>
    );
  }
}



export default SingleHouse;
