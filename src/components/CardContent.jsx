import React from "react";
import "./CardContent.css";
import Button from "./Button";
import Price from "./Price";
import desktopImg from "../images/image-product-desktop.jpg";

const CardContent = (props) => {
  return (
    <>
      <div className="img-container">
        <img src={desktopImg} className="img" alt=""></img>
      </div>
      <div className="content">
        <p className="subheading">{props.subheading}</p>
        <h1 className="heading">{props.heading}</h1>
        <p className="text">{props.text}</p>
        <Price price={props.price} prevprice={props.prevPrice} />
        <Button />
      </div>
    </>
  );
};

export default CardContent;
