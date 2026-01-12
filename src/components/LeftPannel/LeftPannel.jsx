import PriceFilter from "./PriceFilter";

export default function LeftPannel({ maxPrice, setMaxPrice }) {
  return (
    <aside className="LeftPannel">
      <h3>Browse by</h3>
      <ul>
        <li className="active">All Products</li>
        <li>Active QX</li>
        <li>Artisanal</li>
        <li>Best Sellers</li>
        <li>Kids shoes</li>
      </ul>

      <h3>Filter by</h3>
      <PriceFilter maxPrice={maxPrice} setMaxPrice={setMaxPrice} />
    </aside>
  );
}
