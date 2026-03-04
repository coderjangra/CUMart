import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQty, removeFromCart, clearCart } from "./cartSlice";
import { useState } from "react";
import "./Cart.css";

function Cart({ isOpen, closeCart }) {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [ordered, setOrdered] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleOrder = () => {
    setOrdered(true);
    dispatch(clearCart());
    setTimeout(() => {
      setOrdered(false);
      closeCart();
    }, 2000);
  };

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h3>Your Cart</h3>
        <button className="close-btn" onClick={closeCart} aria-label="Close cart">&#10006;</button>
      </div>

      <div className="cart-items">
        {ordered && (
          <div className="order-success">
            Order placed successfully! Thank you.
          </div>
        )}

        {!ordered && cart.length === 0 && (
          <div className="cart-empty">
            <span className="cart-empty-icon">&#128722;</span>
            <p>Your cart is empty</p>
          </div>
        )}

        {!ordered && cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-unit">&#8377;{item.price} each</span>
            </div>

            <div className="cart-item-controls">
              <button
                className="qty-btn"
                onClick={() => dispatch(decrementQty(item.id))}
                aria-label="Decrease quantity"
              >
                &#8722;
              </button>
              <span className="qty">{item.qty}</span>
              <button
                className="qty-btn"
                onClick={() => dispatch(addToCart(item))}
                aria-label="Increase quantity"
              >
                &#43;
              </button>
            </div>

            <div className="cart-item-right">
              <span className="cart-item-total">&#8377;{item.price * item.qty}</span>
              <button
                className="remove-btn"
                onClick={() => dispatch(removeFromCart(item.id))}
                aria-label="Remove item"
              >
                &#128465;
              </button>
            </div>
          </div>
        ))}
      </div>

      {!ordered && cart.length > 0 && (
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total</span>
            <strong>&#8377;{total}</strong>
          </div>

          <button className="order-btn" onClick={handleOrder}>
            Place Order
          </button>

          <button className="clear-btn" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
