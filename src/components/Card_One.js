import React from "react";

export default function (props) {
  return (
    <>
      <div className="text">
        <span>{props.title}</span><i class="fa-regular fa-heart"></i>
        <h5>{props.price}</h5>
        <span>{props.address}</span>•<span>{props.time}</span>
      </div>
    </>
  );
}
