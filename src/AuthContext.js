import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('UserId');
    
    if (userId) {
      setCurrentUser(userId);
      setIsLoggedIn(true);
    }
  }, []);

  // const login = (userId) => {
  //   localStorage.setItem('UserId', userId);
  //   setCurrentUser(userId);
  //   setIsLoggedIn(true);
  // };

  // const logout = () => {
  //   localStorage.removeItem('UserId');
  //   setCurrentUser(null);
  //   setIsLoggedIn(false);
  // };

  const value = {
    currentUser,
    setCurrentUser,
    isLoggedIn,
    // login,
    // logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
