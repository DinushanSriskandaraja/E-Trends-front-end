import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { FaStar, FaStarHalfAlt, FaCheck } from "react-icons/fa"; // Import necessary icons
import products from "../Product";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility

  const product = products.find((product) => product.id === parseInt(id, 10));

  if (!product) {
    return <div> Product not found </div>;
  }

  const handlePlaceOrder = () => {
    // Show confirmation popup
    setShowPopup(true);
  };

  const handleConfirmOrder = () => {
    // Implement your place order logic here
    console.log(`Placed order for ${quantity} ${product.name}(s)`);
    setShowPopup(false); // Close the popup
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="star-icon" />);
    }

    // Add half star if necessary
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key={stars.length} className="star-icon" />);
    }

    return stars;
  };

  return (
    <div className="product-detail">
      <div className="product-info">
        <div className="product-image">
          <img src={product.imageUrl} alt={product.name} />{" "}
        </div>{" "}
        <div className="product-description">
          <h1> {product.name} </h1>{" "}
          <div className="product-rating"> {renderStars(product.rating)} </div>{" "}
          <p> {product.description} </p>{" "}
          <p> Price: $ {product.price.toFixed(2)} </p>{" "}
          <div className="quantity">
            <label htmlFor="quantity"> Quantity: </label>{" "}
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />{" "}
          </div>{" "}
          <button onClick={handlePlaceOrder} className="place-order-button">
            <FaCheck className="cart-icon" />
            Place Order{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2> Confirm Order </h2>{" "}
            <p> Are you sure you want to place the order ? </p>{" "}
            <button onClick={handleConfirmOrder}> Yes </button>{" "}
            <button onClick={handleClosePopup}> No </button>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </div>
  );
};

export default ProductDetail;
