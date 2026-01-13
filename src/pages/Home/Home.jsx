import "./Home.css";
import products from "../../Data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Home() {
  const bestSellers = products.slice(0, 4);

  return (
    <div className="home">

     
      <section className="hero">
        <div className="hero-text">
          <h1>Discover Your Perfect Pair</h1>
          <p>High-quality shoes for every step you take.</p>
          <button>Shop Now</button>
        </div>

        <img
          src="/images/hero.png.jpg"
          alt="Shoes"
          className="hero-img"
        />
      </section>

    
      <section className="home-products">
        <h2>Best Sellers</h2>

        <div className="home-grid">
          {bestSellers.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              cardClass="card"
            />
          ))}
        </div>
      </section>

     
      <section className="home-banner">
        <h2>Comfort Meets Style</h2>
        <p>Explore our newest arrivals</p>
        <button>Shop New</button>
      </section>

    </div>
  );
}
