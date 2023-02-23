import React from "react";
import "./Price.css";

const Price = (props) => {
  return (
    <div className="price-container">
      <p className="price">{props.price}</p>
      <del className="prevprice">{props.prevprice}</del>
    </div>
  );
};

export default Price;
