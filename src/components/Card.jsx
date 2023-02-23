import React from "react";
import CardContent from "./CardContent";
import "./Card.css";

const Card = () => {
  const content = {
    subheading: "PERFUME",
    heading: "Gabrielle Essence Eau De Parfum",
    text: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
    price: "$149.99",
    prevPrice: "$169.99",
  };

  return (
    <div className="container">
      <CardContent
        subheading={content.subheading}
        heading={content.heading}
        text={content.text}
        price={content.price}
        prevPrice={content.prevPrice}
      />
    </div>
  );
};

export default Card;
