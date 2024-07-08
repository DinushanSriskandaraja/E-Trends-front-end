import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./ProductCard.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa"; // Import the add to cart icon and star icons from react-icons/fa

const ProductCard = ({ product }) => {
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

    // Add empty stars to total 5 stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaStar key={stars.length + i} className="star-icon empty-star" />
      );
    }

    return stars;
  };

  return (
    <Link to={`/product/${product.id}`} className="product-link">
      <div className="product-card">
        <div className="product-image">
          <img src={product.imageUrl} alt={product.name} />{" "}
        </div>{" "}
        <div className="product-details">
          <h3 className="product-name"> {product.name} </h3>{" "}
          <p className="shop-name"> {product.shopName} </p>{" "}
          <div className="product-rating">
            {" "}
            {/* Implement your rating component or text here */}{" "}
            {renderStars(product.rating)}{" "}
          </div>{" "}
          {/* <button className="add-to-cart-button">
                                                                                                          <FaCartPlus className="cart-icon" />
                                                                                                          Add to Cart{" "}
                                                                                                        </button>{" "} */}{" "}
        </div>{" "}
      </div>{" "}
    </Link>
  );
};

export default ProductCard;
