import React from "react";

export default function (props) {
  return (
    <>
      <div className="text">
        <span className="Ah4">{props.title}</span><i class="fa-regular fa-heart"></i>
        <h5>Rs {props.price}</h5>
        <span className="btm">{props.address}</span> •<span className="btm">{props.time}</span>
      </div>
    </>
  );
}
