import { useState } from "react";
import { Link } from "react-router-dom";
import "./ShopAll.css";

export default function ShopAll() {
  const products = [
    {
      id: 1,
      name: "Signal DL",
      price: 29,
      image:
        "https://www.freepik.com/free-psd/floating-white-sneaker-minimalist-shoe-design_408645102.htm#fromView=keyword&page=1&position=0&uuid=16925a50-f03d-4bd5-bfac-f21ac6ae4b77&query=Shoes",
    },
    {
      id: 2,
      name: "Artisan DL",
      price: 129,
      image: "https://images.unsplash.com/photo-1600180758890-6d9ad13858cb",
    },
    {
      id: 3,
      name: "Limited DL",
      price: 19,
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      tag: "Best Seller",
    },
    {
      id: 4,
      name: "Core DL",
      price: 12,
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    },
    {
      id: 5,
      name: "Bio Basic",
      price: 119,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    },
    {
      id: 6,
      name: "Bio Perform",
      price: 99,
      oldPrice: 119,
      image: "https://images.unsplash.com/photo-1521093470119-a3acdc43374a",
      tag: "Sale",
    },
  ];

  const [sortType, setSortType] = useState("recommended");
  const [maxPrice, setMaxPrice] = useState(150);

  const sortedProducts = [...products]
    .filter((p) => p.price <= maxPrice)
    .sort((a, b) => {
      if (sortType === "high") return b.price - a.price;
      if (sortType === "low") return a.price - b.price;
      return 0;
    });

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

          <p>{sortedProducts.length} products</p>

          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="recommended">Recommended</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>

        <div className="grid">
          {sortedProducts.map((product) => (
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
