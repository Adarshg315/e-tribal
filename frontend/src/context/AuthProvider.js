import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [loggedIn, setLogin] = useState(localStorage.getItem("loggedIn"));

  return (
    <AuthContext.Provider value={{ loggedIn, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
