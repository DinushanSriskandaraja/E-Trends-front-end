import React, { useState, useRef, useEffect } from "react";
import { FaPen } from "react-icons/fa";
import { useAuth } from "../../Context/AuthContext";
import OrderCard from "../OrderCard/OrderCard";
import { Redirect } from "react-router-dom"; // Import Redirect from react-router-dom

import "./Profile.css";

const Profile = () => {
  const { user } = useAuth(); // Access user state from AuthContext
  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState({
    name: user ? user.name : "",
    email: user ? user.email : "",
  });

  const orders = [
    {
      id: 1,
      product: "Wheelchair",
      price: 299.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      product: "Wheelchair",
      price: 299.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      product: "Wheelchair",
      price: 299.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      product: "Wheelchair",
      price: 299.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      product: "Wheelchair",
      price: 299.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      product: "Wheelchair",
      price: 299.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      product: "Wheelchair",
      price: 299.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      product: "Wheelchair",
      price: 299.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      product: "Crutches",
      price: 49.99,
      imageUrl: "https://via.placeholder.com/150",
    },
    // Add more orders as needed
  ];

  const ordersListRef = useRef(null); // Ref to the orders list container

  useEffect(() => {
    const handleWheel = (e) => {
      if (ordersListRef.current && isCursorInsideOrdersList(e)) {
        e.preventDefault(); // Prevent default scrolling behavior if cursor is inside orders-list
        const scrollDistance = e.deltaY * 5; // Adjust scroll speed as needed
        const newScrollLeft = ordersListRef.current.scrollLeft + scrollDistance;
        ordersListRef.current.scrollTo({
          left: newScrollLeft,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isEditing]); // Add any dependencies that may affect this effect

  const isCursorInsideOrdersList = (e) => {
    if (!ordersListRef.current) return false;
    const rect = ordersListRef.current.getBoundingClientRect();
    const mouseX = e.clientX || e.pageX;
    const mouseY = e.clientY || e.pageY;
    return (
      mouseX >= rect.left &&
      mouseX <= rect.right &&
      mouseY >= rect.top &&
      mouseY <= rect.bottom
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Handle save logic (e.g., update user profile)
    // This is just a mock example
    // Typically you would implement an API call to update user profile data
    setIsEditing(false);
  };

  if (!user) {
    // Redirect to login or handle unauthorized access
    return <Redirect to="/login" />;
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-info">
            {" "}
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  className="profile-input"
                />
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className="profile-input"
                />
              </>
            ) : (
              <>
                <h1 className="profile-name"> {user.name} </h1>{" "}
                <p className="profile-email"> {user.email} </p>{" "}
              </>
            )}{" "}
          </div>{" "}
          <div className="profile-actions">
            {" "}
            {isEditing ? (
              <button onClick={handleSave} className="save-button">
                Save{" "}
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="edit-button"
              >
                <FaPen />
              </button>
            )}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="order-history-container">
        <h2> Order History </h2>{" "}
        <div className="orders-list" ref={ordersListRef}>
          {" "}
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Profile;
