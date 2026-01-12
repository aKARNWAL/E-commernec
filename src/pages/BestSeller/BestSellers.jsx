import { useState } from "react";
import { Link } from "react-router-dom";
import "../Shopall/ShopAll.css";

import Sidebar from "../../components/LeftPannel/LeftPannel";
import productsData from "../../Data/Products";

export default function BestSellers() {
  const bestProducts = productsData.filter((p) => p.tag === "Best Seller");

  const [maxPrice, setMaxPrice] = useState(150);

  const filteredProducts = bestProducts.filter((p) => p.price <= maxPrice);

  return (
    <div className="shop-page">
      <Sidebar maxPrice={maxPrice} setMaxPrice={setMaxPrice} />

      <main className="products-area">
        <div className="header">
          <div>
            <h1>Best Sellers</h1>
            <p>In this category, add your best-selling products.</p>
          </div>

          <p>{filteredProducts.length} products</p>

          <select>
            <option>Recommended</option>
            <option>Price: Low → High</option>
            <option>Price: High → Low</option>
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
                <span className="badge">Best Seller</span>
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
