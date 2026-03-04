import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const STORAGE_KEY = "cumart_user";

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setUserName(saved);
      setIsLoggedIn(true);
    }
  }, []);

  const login = (name, password) => {
    if (password === "1234") {
      setIsLoggedIn(true);
      setUserName(name);
      localStorage.setItem(STORAGE_KEY, name);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserName("");
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
