import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Static check for email and password
    if (email === "default@example.com" && password === "password") {
      alert("Logged in successfully!");
      // Navigate to profile page or handle redirection
      // For example, you can use window.location.href to navigate
      window.location.href = "/profile";
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="page">
      <h1> Login </h1>{" "}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        {error && <p className="error-message"> {error} </p>}{" "}
        <button type="submit"> Login </button>{" "}
      </form>{" "}
    </div>
  );
};

export default Login;
