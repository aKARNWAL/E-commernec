import { useState } from "react";
import { Link } from "react-router-dom";
import "./ShopAll.css";
import productsData from "../Data/products.js";

export default function ShopAll() {
  const [maxPrice, setMaxPrice] = useState(150);
  const [products, setProducts] = useState(productsData);

  const handleSort = (e) => {
    const value = e.target.value;
    let sorted = [...products];

    if (value === "low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "high") {
      sorted.sort((a, b) => b.price - a.price);
    } else {
      sorted = [...productsData]; // Recommended = original order
    }

    setProducts(sorted);
  };

  const filteredProducts = products.filter(
    (p) => p.price <= maxPrice
  );

  return (
    <div className="shop-page">
      <aside className="sidebar">
        <h3>Browse by</h3>

        <ul>
          <li className="active">All Products</li>
          <li>Active QX</li>
          <li>Artisanal</li>
          <li>Best Sellers</li>
          <li>Kids shoes</li>
        </ul>

        <h3>Filter by</h3>
        <label>Price</label>

        <input
          type="range"
          min="50"
          max="150"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />

        <p>${maxPrice}</p>
      </aside>

      <main className="products-area">
        <div className="header">
          <h1>All Products</h1>

          <p>{filteredProducts.length} products</p>

          <select onChange={handleSort}>
            <option value="recommended">Recommended</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>

        <div className="grid">
          {filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="card"
            >
              <div className="image-box">
                {product.tag && <span className="badge">{product.tag}</span>}
                <img src={product.image} alt={product.name} />
              </div>

              <h4>{product.name}</h4>

              {product.oldPrice ? (
                <p>
                  <span className="old">${product.oldPrice}</span>
                  <span className="new"> ${product.price}</span>
                </p>
              ) : (
                <p>${product.price}</p>
              )}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
