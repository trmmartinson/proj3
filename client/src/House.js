import React from "react";

function House(props) {
  
  if (!props.image_url) {
    return null;
  }
  return (
    <div className="col-sm">
      <img onClick={() => { props.clicker("view" + props.id) }} src={"/images/" + props.image_url} alt="house" height="250" width="320"></img>
      <div>
        <h6>{props.address}</h6>
      </div>
      <div>
        <h6>{props.price}</h6>
      </div>

    </div>
  );
}
export default House;
