import React, { useState } from "react";
import { useAuth } from "../../Context/AuthContext"; // Adjust path as per your file structure
import "./Login.css";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const success = login(email, password);

    if (success) {
      alert("Logged in successfully!");
      // Navigate to profile page or handle redirection
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
