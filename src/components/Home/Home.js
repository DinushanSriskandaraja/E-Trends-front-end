import React from "react";
import "./Home.css";
// import wheelchairImage from "https://via.placeholder.com/150"; // Example image import

const Home = () => {
  return (
    <div className="page">
      <h1> Welcome to Our E - commerce Site for Disabled People </h1>{" "}
      <div className="content">
        <div className="left-column">
          <p>
            We are dedicated to providing a wide range of products designed to
            assist and enhance the lives of people with disabilities.{" "}
          </p>{" "}
          <p>
            Our catalog includes mobility aids, assistive devices, daily living
            aids, communication aids, medical supplies, home modifications, and
            recreational and sports equipment.{" "}
          </p>{" "}
        </div>{" "}
        <div className="right-column">
          <img
            src="https://via.placeholder.com/150"
            alt="Wheelchair"
            className="product-image"
          />
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Home;
