import React from "react";
import "./CartItem.css"; // Ensure to import your CSS file for CartItem styling

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.imageUrl} alt={item.product} />{" "}
      </div>{" "}
      <div className="cart-item-details">
        <h3 className="cart-item-product-name"> {item.product} </h3>{" "}
        <p className="cart-item-price"> $ {item.price} </p>{" "}
        <p className="cart-item-quantity"> Quantity: {item.quantity} </p>{" "}
      </div>{" "}
    </div>
  );
};

export default CartItem;
