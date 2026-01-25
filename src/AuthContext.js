import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const login = (name, password) => {
    if (password === "1234") {
      setIsLoggedIn(true);
      setUserName(name);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userName, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
