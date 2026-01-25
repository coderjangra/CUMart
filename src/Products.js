import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cartSlice";
import { useState } from "react";
import "./Products.css";

function Products({ openCart }) {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [toast, setToast] = useState("");

  const addItem = (product) => {
    dispatch(addToCart(product));
    setToast(`${product.name} added to cart`);
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <section className="products-page">
      <div className="products-hero">
        <div>
          <h1>CUMart Products</h1>
          <p>Essential items, simple prices, smooth shopping.</p>
        </div>

        <button className="hero-cart-btn" onClick={openCart}>
          🛒 Open Cart
        </button>
      </div>

      <div className="products-container">
        <div className="products-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <div className="image-wrap">
                <img src={product.image} alt={product.name} />
              </div>

              <h3>{product.name}</h3>
              <p className="price">₹{product.price}</p>

              <button
                className="add-btn"
                onClick={() => addItem(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {toast && <div className="toast">{toast}</div>}
    </section>
  );
}

export default Products;
