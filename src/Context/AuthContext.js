import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email === "default@example.com" && password === "password") {
      setUser({ email });
      return true;
    }
    return false;
  };

  const value = {
    user,
    login,
  };

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};
