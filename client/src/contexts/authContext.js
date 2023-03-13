import React, { useState } from "react";
import { Login } from "../shared/apis/authenticationApis";
import { GetUserData } from "../shared/apis/authenticationApis";

export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const userdata = JSON.parse(localStorage.getItem("userData"));
  const [loggedIn, setLoggedIn] = useState(token ? true : false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(userdata ? userdata : null);

  const login = async (credentials) => {
    setIsLoading(true);
    const { email, password } = credentials;
    const response = await Login(email, password);
    if (response.Success) {
      setLoggedIn(true);
      setIsLoading(false);
      setError(null);
      localStorage.setItem("token", response.Body);
      const user_data = await GetUserData();
      setUserData(user_data);
      console.log(user_data);
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
    <AuthContext.Provider
      value={{
        isLoading,
        setIsLoading,
        login,
        logout,
        loggedIn,
        error,
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
