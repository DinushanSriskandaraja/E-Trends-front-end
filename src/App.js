import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ProductList from "./components/ProductList/ProductList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import DonationPage from "./components/DonationPage/DonationPage";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/about" element={<About />} />{" "}
          <Route path="/products" element={<ProductList />} />{" "}
          <Route path="/categories/:categoryId" element={<ProductList />} />{" "}
          <Route path="/product/:id" element={<ProductDetail />} />{" "}
          <Route path="/cart" element={<Cart />} />{" "}
          <Route path="/checkout" element={<Checkout />} />{" "}
          <Route path="/donation" element={<DonationPage />} />{" "}
          <Route path="/profile" element={<Profile />} />{" "}
          <Route path="/categories" element={<CategoryPage />} />{" "}
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/signup" element={<Signup />} />{" "}
        </Routes>{" "}
        <Footer />
      </div>{" "}
    </Router>
  );
}

export default App;
