import React from "react";
import House from './House.js';
/*
<House_row 
                clicker={this.handleClick}
                key = {idx}
                id1 = {book[0].id}
                image_url1 = {book[0].image_url}

                id2 = {book[0].id}
                image_url2 = {book[0].image_url}

                id3 = {book[0].id}
                image_url3 = {book[0].image_url}
          />
*/

/* garbage 

        <div className="col-sm">
          <img onClick={() => { props.clicker("view" + props.id1) }}   src={"/images/" + props.image_url1} alt="house" height="250" width="250"></img>
           <h5> dork1</h5>
        </div>
        <div className="col-sm">
          <img onClick={() => { props.clicker("view" + props.id2) }}   src={"/images/" + props.image_url2} alt="house" height="250" width="250"></img>
           <h5> dork2</h5>
        </div>
        <div className="col-sm">
          <img onClick={() => { props.clicker("view" + props.id3) }}   src={"/images/" + props.image_url3} alt="house" height="250" width="250"></img>
           <h5> dork3</h5>
        </div>

*/
function HouseRow(props) {
  //alert("zzhouserowprops" + JSON.stringify(props))
  //console.log("ZZZZZZZZZZZZZZZZZZZhouserow" + props.image_url0 + "CLicker:" + typeof props.handleClick);
  return (

    <div className="container black_box">
      <div className="row">
      </div>
      <div className="row">

        <House 
                clicker={props.clicker}
                key = {props.id0}
                id = {props.id0}
                image_url = {props.image_url0}
                address = {props.address0}
                price = {props.price0}
                user_record = {props.user_record}
          />
        <House 
                clicker={props.clicker}
                key = {props.id1}
                id = {props.id1}
                image_url = {props.image_url1}
                address = {props.address1}
                price = {props.price1}
          />
        <House 
                clicker={props.clicker}
                key = {props.id2}
                id = {props.id2}
                image_url = {props.image_url2}
                address = {props.address2}
                price = {props.price2}
          />




      
      </div>
    </div>
  );
}
export default HouseRow;
/*

  <House 
                clicker={props.handleClick}
                key = {props.id1}
                id1 = {props.id1}
                image_url = {props.image_url1}
          />
        <House 
                clicker={props.handleClick}
                key = {props.id2}
                id1 = {props.id2}
                image_url = {props.image_url2}
          />
*/

