import React from "react";
import "./Cart.css";

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Wheelchair", price: 299.99, quantity: 1 },
    { id: 2, name: "Crutches", price: 49.99, quantity: 2 },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="page">
      <h1> Your Cart </h1>{" "}
      <ul>
        {" "}
        {cartItems.map((item) => (
          <li key={item.id}>
            {" "}
            {item.name} - $ {item.price}x {item.quantity}{" "}
          </li>
        ))}{" "}
      </ul>{" "}
      <h2> Total: $ {total.toFixed(2)} </h2>{" "}
    </div>
  );
};

export default Cart;
