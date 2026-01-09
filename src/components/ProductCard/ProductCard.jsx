import "./ProductCard.css";

import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="card">
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
  );
}
