import { useState } from "react";
import "./ShopAll.css";
import productsData from "../Data/products.js";

import ProductCard from "../../components/ProductCard/ProductCard.jsx";




export default function ShopAll() {
  const [maxPrice, setMaxPrice] = useState(150);
  const [products, setProducts] = useState(productsData);

  const handleSort = (e) => {
    const value = e.target.value;
    let sorted = [...productsData];

    if (value === "low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "high") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setProducts(sorted);
  };

  const filteredProducts = products.filter((p) => p.price <= maxPrice);

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
            <ProductCard key={product.id} product={product} cardClass="card" />
          ))}
        </div>
      </main>
    </div>
  );
}
