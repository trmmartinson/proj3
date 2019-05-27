import React from "react";
import House from './House.js';
function HouseRow(props) {
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

