import React, { useState, useRef, useEffect } from "react";
import { FaPen } from "react-icons/fa";
import OrderCard from "../OrderCard/OrderCard";
import "./Profile.css";
import products from "../Product";

const defaultUser = {
  name: "Default User",
  email: "default@example.com",
  address: "123 Default St, Default City, DC",
  contact: "123-456-7890",
};

const Profile = ({ user = defaultUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState({
    name: user.name,
    email: user.email,
    address: user.address,
    contact: user.contact,
  });

  const orders = products;
  const ordersListRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (ordersListRef.current && isCursorInsideOrdersList(e)) {
        e.preventDefault();
        const scrollDistance = e.deltaY * 5;
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
  }, [isEditing]);

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
    return null;
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
                <input
                  type="text"
                  name="address"
                  value={formValues.address}
                  onChange={handleInputChange}
                  className="profile-input"
                />
                <input
                  type="text"
                  name="contact"
                  value={formValues.contact}
                  onChange={handleInputChange}
                  className="profile-input"
                />
              </>
            ) : (
              <>
                <h1 className="profile-name"> {user.name} </h1>{" "}
                <p className="profile-email"> {user.email} </p>{" "}
                <p className="profile-address"> {user.address} </p>{" "}
                <p className="profile-contact"> {user.contact} </p>{" "}
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
