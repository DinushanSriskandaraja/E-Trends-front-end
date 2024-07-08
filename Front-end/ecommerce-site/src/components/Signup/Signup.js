import React from "react";
import "./Signup.css";

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Signed up!");
  };

  return (
    <div className="page">
      <h1> Sign Up </h1>{" "}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit"> Sign Up </button>{" "}
      </form>{" "}
    </div>
  );
};

export default Signup;
