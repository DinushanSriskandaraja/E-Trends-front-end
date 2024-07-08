import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to track logged-in user

  // Login function
  const login = (email, password) => {
    // Hardcoded static credentials (replace with actual authentication logic)
    const validEmail = "user@example.com";
    const validPassword = "password";

    if (email === validEmail && password === validPassword) {
      // Mocking a successful login scenario
      setUser({ email: email });
      // Set session/localStorage or other persistent storage for user session
      localStorage.setItem("user", JSON.stringify({ email: email }));
      return true; // Login successful
    } else {
      return false; // Login failed
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    // Clear session/localStorage or other persistent storage for user session
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
