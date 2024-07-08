import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { FaStar, FaStarHalfAlt, FaCartPlus } from "react-icons/fa"; // Import necessary icons

const products = [
  {
    id: 1,
    name: "Product A",
    category: 1,
    description: "Description of Product A",
    imageUrl: "https://via.placeholder.com/150",
    rating: 4.5,
    price: 29.99,
  },
  {
    id: 2,
    name: "Product B",
    category: 1,
    description: "Description of Product B",
    imageUrl: "https://via.placeholder.com/150",
    rating: 3,
    price: 19.99,
  },
  {
    id: 3,
    name: "Product C",
    category: 2,
    description: "Description of Product C",
    imageUrl: "https://via.placeholder.com/150",
    rating: 5,
    price: 39.99,
  },
  {
    id: 4,
    name: "Product D",
    category: 3,
    description: "Description of Product D",
    imageUrl: "https://via.placeholder.com/150",
    rating: 2.5,
    price: 14.99,
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1); // State for quantity

  const product = products.find((product) => product.id === parseInt(id, 10));

  if (!product) {
    return <div> Product not found </div>;
  }

  const handleAddToCart = () => {
    // Implement your add to cart logic here
    console.log(`Added ${quantity} ${product.name}(s) to cart`);
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
          <button onClick={handleAddToCart} className="add-to-cart-button">
            <FaCartPlus className="cart-icon" />
            Add to Cart{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default ProductDetail;
