import { useState } from "react";
import "./Kids.css";
import kidsData from "../../Data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import Sidebar from "../../components/LeftPannel/LeftPannel";

export default function Kids() {
  const [maxPrice, setMaxPrice] = useState(150);
  const [products, setProducts] = useState(kidsData);

  const handleSort = (e) => {
    const value = e.target.value;
    let sorted = [...kidsData];

    if (value === "low") sorted.sort((a, b) => a.price - b.price);
    if (value === "high") sorted.sort((a, b) => b.price - a.price);

    setProducts(sorted);
  };

  const filteredProducts = products.filter(p => p.price <= maxPrice);

  return (
    <div className="shop-page">
      <Sidebar maxPrice={maxPrice} setMaxPrice={setMaxPrice} />

      <main className="products-area">
        <div className="header">
          <h1>Kids Shoes</h1>
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
