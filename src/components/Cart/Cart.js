import React from "react";
import CartItem from "../CartItem/CartItem"; // Import CartItem component
import "./Cart.css"; // Import your Cart styling

const Cart = () => {
  // Example data for cart items
  const cartItems = [
    {
      id: 1,
      product: "Product 1",
      price: 29.99,
      imageUrl: "https://via.placeholder.com/150",
      quantity: 1,
    },
    {
      id: 2,
      product: "Product 2",
      price: 49.99,
      imageUrl: "https://via.placeholder.com/150",
      quantity: 2,
    },
    {
      id: 3,
      product: "Product 3",
      price: 19.99,
      imageUrl: "https://via.placeholder.com/150",
      quantity: 1,
    },
  ];

  return (
    <div className="cart-container">
      <h1> Your Cart </h1>{" "}
      <div className="cart-items">
        {" "}
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}{" "}
      </div>{" "}
      {/* Add total calculation or any other cart functionalities here */}{" "}
    </div>
  );
};

export default Cart;
