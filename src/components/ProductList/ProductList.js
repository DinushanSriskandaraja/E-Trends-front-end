import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import Search from "../Search/Search";

const allProducts = [
  {
    id: 1,
    categoryId: 1,
    name: "Wheelchair A",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    categoryId: 1,
    name: "Wheelchair B",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    categoryId: 2,
    name: "Assistive Device A",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    categoryId: 2,
    name: "Assistive Device B",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    categoryId: 3,
    name: "Living Aid A",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    categoryId: 3,
    name: "Living Aid B",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    categoryId: 4,
    name: "Communication Aid A",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    categoryId: 4,
    name: "Communication Aid B",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    categoryId: 5,
    name: "Medical Supply A",
    imageUrl: "https://via.placeholder.com/150",
  },
  { id: 10, categoryId: 5, name: "Medical Supply B" },
  { id: 11, categoryId: 6, name: "Home Modification A" },
  { id: 12, categoryId: 6, name: "Home Modification B" },
  { id: 13, categoryId: 7, name: "Recreational Equipment A" },
  { id: 14, categoryId: 7, name: "Recreational Equipment B" },
];

const ProductList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const categoryId = parseInt(query.get("category"));

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      const filteredProducts = allProducts.filter(
        (product) => product.categoryId === categoryId
      );
      setProducts(filteredProducts);
    }
  }, [categoryId]);

  return (
    <div>
      <Search />
      <div className="product-list">
        <h1> Products </h1>{" "}
        <div className="product-grid">
          {" "}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default ProductList;
