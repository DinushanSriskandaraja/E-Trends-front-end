import React from "react";
import "./Checkout.css";

const Checkout = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Order placed!");
  };

  return (
    <div className="page">
      <h1> Checkout </h1>{" "}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Address" required />
        <input type="text" placeholder="Credit Card Number" required />
        <button type="submit"> Place Order </button>{" "}
      </form>{" "}
    </div>
  );
};

export default Checkout;
