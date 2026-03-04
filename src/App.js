import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import Login from "./Login";
import Products from "./Products";
import Cart from "./Cart";

function App() {
  const { isLoggedIn, userName, logout } = useContext(AuthContext);
  const [cartOpen, setCartOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("cumart-theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("cumart-theme", dark ? "dark" : "light");
  }, [dark]);

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <>
      <header className="top-header">
        <div className="top-header-inner">
          <div>
            <span className="brand-name">CUMart</span>
            <span className="brand-sub">Your campus shopping hub</span>
          </div>

          <div className="top-actions">
            <label className="theme-toggle" title={dark ? "Switch to light mode" : "Switch to dark mode"}>
              <input
                type="checkbox"
                checked={dark}
                onChange={() => setDark(d => !d)}
              />
              <span className="theme-toggle-track">
                <span className="theme-toggle-thumb">{dark ? "🌙" : "☀️"}</span>
              </span>
            </label>

            <div className="user-pill">
              {userName.charAt(0).toUpperCase()}
            </div>
            <span className="username">{userName}</span>
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </header>

      <Products openCart={() => setCartOpen(true)} />

      <Cart
        isOpen={cartOpen}
        closeCart={() => setCartOpen(false)}
      />
    </>
  );
}

export default App;
