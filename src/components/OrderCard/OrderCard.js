import React from "react";
import "./OrderCard.css";

const OrderCard = ({ order }) => {
  return (
    <div className="order-card">
      <div className="order-image">
        <img src={order.imageUrl} alt={order.name} />{" "}
      </div>{" "}
      <div className="order-details">
        <h3 className="order-product-name"> {order.name} </h3>{" "}
        <p className="order-price"> $ {order.price} </p>{" "}
      </div>{" "}
    </div>
  );
};

export default OrderCard;
