import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner container">
        <div className="logo">BrandName</div>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/testimonials">Testimonials</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
          <NavLink to="/portfolio" onClick={() => setOpen(false)}>Portfolio</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/testimonials" onClick={() => setOpen(false)}>Testimonials</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </div>
      )}
    </header>
  );
}
