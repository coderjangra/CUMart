import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import Login from "./Login";
import Products from "./Products";
import Cart from "./Cart";

function App() {
  const { isLoggedIn, userName, logout } = useContext(AuthContext);
  const [cartOpen, setCartOpen] = useState(false);

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
