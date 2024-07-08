import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/products?category=${category.id}`} className="category-card">
      <div className="category-icon"> {category.icon} </div>{" "}
      <h2> {category.name} </h2>{" "}
    </Link>
  );
};

export default CategoryCard;
