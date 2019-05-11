import React from "react";

function House(props) {
  console.log("imageuril in house" + props.image_url + props.clicker);
  if (!props.image_url) {
    return null;
  }
  return (
        <div className="col-sm">
          <img onClick={() => { props.clicker("view" + props.id) }}   src={"/images/" + props.image_url} alt="house" height="250" width="250"></img>
           <h5>{props.address}</h5>
        </div>
  );
}

export default House;
