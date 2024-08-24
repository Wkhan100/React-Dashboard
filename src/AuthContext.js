import React, { createContext, useEffect, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const UserId = localStorage.getItem("UserId")
    if (UserId) {
      setCurrentUser(UserId);
    }
  }, [])

  const value = {
    currentUser, setCurrentUser
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}