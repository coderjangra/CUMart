import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cartSlice";
import { setSearchQuery, setCategory, selectFilteredProducts, selectCategories } from "./productsSlice";
import { useState } from "react";
import "./Products.css";

function Products({ openCart }) {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const categories = useSelector(selectCategories);
  const searchQuery = useSelector(state => state.products.searchQuery);
  const selectedCategory = useSelector(state => state.products.selectedCategory);
  const cartCount = useSelector(state => state.cart.reduce((sum, i) => sum + i.qty, 0));
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
          Cart
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>

      <div className="products-container">
        <div className="products-filters">
          <input
            className="search-input"
            type="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={e => dispatch(setSearchQuery(e.target.value))}
          />

          <div className="category-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`cat-tab ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => dispatch(setCategory(cat))}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {products.length === 0 ? (
          <div className="no-results">No products match your search.</div>
        ) : (
          <div className="products-grid">
            {products.map(product => (
              <div className="product-card" key={product.id}>
                <div className="image-wrap">
                  <img src={product.image} alt={product.name} />
                </div>

                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p className="price">&#8377;{product.price.toLocaleString("en-IN")}</p>

                <button className="add-btn" onClick={() => addItem(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {toast && <div className="toast">{toast}</div>}
    </section>
  );
}

export default Products;
