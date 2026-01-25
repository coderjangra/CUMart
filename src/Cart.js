import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import "./Cart.css";

function Cart({ isOpen, closeCart }) {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h3>Your Cart</h3>
        <button onClick={closeCart}>✖</button>
      </div>

      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <span>{item.name} × {item.qty}</span>
            <span>₹{item.price * item.qty}</span>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <strong>Total: ₹{total}</strong>

        <button
          className="order-btn"
          onClick={() => {
            alert("Order placed successfully");
            dispatch(clearCart());
            closeCart();
          }}
        >
          Place Order
        </button>

        <button
          className="clear-btn"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
