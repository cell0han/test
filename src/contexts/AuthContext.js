import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('chatUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem('chatUsers')) || [];
    const existingUser = storedUsers.find(u => u.email === email && u.password === password);
    if (existingUser) {
      localStorage.setItem('chatUser', JSON.stringify(existingUser));
      setUser(existingUser);
      return { success: true };
    }
    return { success: false, message: 'И-мэйл эсвэл нууц үг буруу байна.' };
  };

  const register = (email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem('chatUsers')) || [];
    const existingUser = storedUsers.find(u => u.email === email);
    if (existingUser) {
      return { success: false, message: 'Энэ и-мэйл хаяг бүртгэлтэй байна.' };
    }
    const newUser = { email, password };
    const newUsers = [...storedUsers, newUser];
    localStorage.setItem('chatUsers', JSON.stringify(newUsers));
    localStorage.setItem('chatUser', JSON.stringify(newUser));
    setUser(newUser);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem('chatUser');
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};