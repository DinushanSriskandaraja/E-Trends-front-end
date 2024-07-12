import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import Search from "../Search/Search";
import products from "../Product";
const allProducts = products;

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
      <div className="product-list">
        {" "}
        <Search className="search" />
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
