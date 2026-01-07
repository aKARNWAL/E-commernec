import { useState } from "react";
import { Link } from "react-router-dom";
import "./ShopAll.css";   

export default function BestSellers() {

  const products = [
    {
      id: 1,
      name: "Signal DL",
      price: 129,
      image: "https://images.unsplash.com/photo-1528701800489-20be0cbe2839",
      tag: ""
    },
    {
      id: 2,
      name: "Artisan DL",
      price: 129,
      image: "https://images.unsplash.com/photo-1600180758890-6d9ad13858cb",
      tag: ""
    },
    {
      id: 3,
      name: "Limited DL",
      price: 129,
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      tag: "Best Seller"
    },
    {
      id: 4,
      name: "Core DL",
      price: 129,
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      tag: ""
    },
    {
      id: 5,
      name: "Bio Basic",
      price: 119,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552",
      tag: "Best Seller"
    },
    {
      id: 6,
      name: "Bio Perform",
      price: 99,
      oldPrice: 119,
      image: "https://images.unsplash.com/photo-1521093470119-a3acdc43374a",
      tag: "Best Seller"
    }
  ];


  const bestProducts = products.filter(p => p.tag === "Best Seller");

  const [maxPrice, setMaxPrice] = useState(150);

  return (
    <div className="shop-page">

  
      <aside className="sidebar">
        <h3>Browse by</h3>

        <ul>
          <li>
            <Link to="/shop">All Products</Link>
          </li>
          <li>Active QX</li>
          <li>Artisanal</li>
          <li className="active">Best Sellers</li>
          <li>Kids shoes</li>
        </ul>

        <h3>Filter by</h3>

        <label>Price</label>

        <input
          type="range"
          min="50"
          max="150"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
        />

        <p>${maxPrice}</p>
      </aside>

      <main className="products-area">

        <div className="header">
          <div>
            <h1>Best Sellers</h1>
            <p>In this category, add your best-selling products.</p>
          </div>

          <p>{bestProducts.filter(p => p.price <= maxPrice).length} products</p>

          <select>
            <option>Recommended</option>
            <option>Price: Low → High</option>
            <option>Price: High → Low</option>
          </select>
        </div>


        <div className="grid">

          {bestProducts
            .filter(p => p.price <= maxPrice)
            .map(product => (
              <Link to={`/product/${product.id}`} key={product.id} className="card">

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
