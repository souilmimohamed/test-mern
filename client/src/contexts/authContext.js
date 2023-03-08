import React, { useState } from "react";
import { Login } from "../shared/apis/authenticationApis";
import { GetUserData } from "../shared/apis/authenticationApis";

export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const [loggedIn, setLoggedIn] = useState(token ? true : false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    setIsLoading(true);
    const response = await Login(username, password);
    if (response.Success) {
      setLoggedIn(true);
      setIsLoading(false);
      setError(null);
      localStorage.setItem("token", response.Body);
      await GetUserData();
      window.location.reload();
    } else {
      setError(response.Errors);
      setIsLoading(false);
    }
  };

  const logout = () => {
    setIsLoading(true);
    setLoggedIn(false);
    setError(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ isLoading, login, logout, loggedIn, error }}>
      {children}
    </AuthContext.Provider>
  );
};
