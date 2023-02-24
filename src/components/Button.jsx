import React from "react";
import "./Button.css";

import cartImg from "../images/icon-cart.svg";

const Button = () => {
  return (
    <button type="button" className="btn">
      <img src={cartImg} className="cart-img" alt="" />
      Add to Cart
    </button>
  );
};

export default Button;
