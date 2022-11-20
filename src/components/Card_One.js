import React from "react";
import img from "../src/img_2.jpeg";

export default function (props) {
  return (
    <>
      <div className="col-md-3">
        <div className="product_img">
          <img src={img}/>
        </div>
        <div className="text">
          <h6>{props.title}</h6>
          <h5>{props.price}</h5>
          <span>{props.address}</span>•<span>{props.time}</span>
        </div>
      </div>
    </>
  );
}
