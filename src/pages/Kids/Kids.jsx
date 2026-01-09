import "./Kids.css";
import kidsProducts from "../Data/products.js";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";


export default function Kids() {
  const handleSort = (e) => {
    const value = e.target.value;

    if (value === "low") {
      kidsProducts.sort((a, b) => a.price - b.price);
    } else if (value === "high") {
      kidsProducts.sort((a, b) => b.price - a.price);
    }
  };

  return (
    <div className="kids-page">
      <h1>Kids shoes</h1>

      <div className="kids-layout">
        <aside className="kids-sidebar">
          <h3>Browse by</h3>
          <ul>
            <li>All Products</li>
            <li>Active QX</li>
            <li>Artisanal</li>
            <li>Best Sellers</li>
            <li className="active">Kids shoes</li>
          </ul>
        </aside>

        <main className="kids-products">
          <div className="kids-topbar">
            <p>{kidsProducts.length} products</p>

            <select onChange={handleSort}>
              <option value="recommended">Recommended</option>
              <option value="low">Price: Low → High</option>
              <option value="high">Price: High → Low</option>
            </select>
          </div>

          <div className="kids-grid">
            {kidsProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                cardClass="kids-card"
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
