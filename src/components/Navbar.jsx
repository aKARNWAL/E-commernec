import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="logo">
        <Link to="/">QUENX.</Link>
      </div>
      <nav className="nav-links">
        <Link to="/shop">Shop All</Link>
        <Link to="/best-sellers">Best Sellers</Link>
        <Link to="/about">About Us</Link>
        <Link to="/active-qx">Active QX</Link>
        <Link to="/artisanal">Artisanal</Link>
        <Link to="/kids">Kids</Link>
        
      </nav>

      <div className="right-side">
        <div className="search-box">
          <span className="icon"></span>
          <input type="text" placeholder="Search" />
        </div>

        <Link to="/login" className="login">Log In</Link>

        <div className="icon-btn profile"></div>

        <div className="icon-btn"></div>

        <div className="icon-btn cart">
          
          <span className="badge"></span>
        </div>
      </div>
    </header>
  );
}
